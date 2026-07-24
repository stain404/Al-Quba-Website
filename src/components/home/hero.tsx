'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VideoPauseToggle } from '@/components/motion/video-pause-toggle'
import { transitionContent } from '@/lib/animations'

/**
 * Section 1 — Hero.
 * Full-bleed background video with an animated gold aurora, and a single
 * decisive headline + CTA. This is the one place on the page that gets
 * an orchestrated load-in sequence (see design system §6) rather than a
 * scroll-triggered reveal.
 */
export function Hero() {
  const prefersReduced = useReducedMotion()
  const videoRef = React.useRef<HTMLVideoElement>(null)

  // Belt-and-suspenders on top of the `loop` attribute: some browsers
  // silently pause background video when a tab loses focus/visibility
  // (or occasionally just stall on a long file) and don't auto-resume it
  // on their own, which reads as "the video stops after a while." Resume
  // playback whenever the tab becomes visible again or the element pauses
  // unexpectedly, and explicitly restart on `ended` as a fallback in case
  // `loop` itself doesn't fire for some reason.
  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = () => {
      if (video.dataset.userPaused === 'true') return
      video.play().catch(() => { })
    }
    const onVisibility = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }
    const onEnded = () => {
      video.currentTime = 0
      tryPlay()
    }

    video.addEventListener('pause', tryPlay)
    video.addEventListener('ended', onEnded)
    document.addEventListener('visibilitychange', onVisibility)

    // A silent decoder stall (freezing on a specific frame while the
    // element still technically reports "playing") doesn't fire `pause`
    // at all, so it slips past the listeners above — this is what
    // getting stuck partway through the clip looks like. Poll for
    // `currentTime` not advancing and force a recovery: nudge forward
    // past whatever frame it choked on and re-kick playback.
    let lastTime = -1
    let stuckTicks = 0
    const watchdog = setInterval(() => {
      if (video.paused || video.ended || !video.duration) {
        stuckTicks = 0
        lastTime = video.currentTime
        return
      }
      if (Math.abs(video.currentTime - lastTime) < 0.05) {
        stuckTicks += 1
        if (stuckTicks >= 2) {
          const nudged = video.currentTime + 0.5
          video.currentTime = nudged < video.duration - 0.5 ? nudged : 0
          tryPlay()
          stuckTicks = 0
        }
      } else {
        stuckTicks = 0
      }
      lastTime = video.currentTime
    }, 3000)

    return () => {
      video.removeEventListener('pause', tryPlay)
      video.removeEventListener('ended', onEnded)
      document.removeEventListener('visibilitychange', onVisibility)
      clearInterval(watchdog)
    }
  }, [])

  return (
    <section
      aria-label="Introduction"
      className="relative flex w-full flex-col overflow-hidden bg-ink text-text-inverse sm:min-h-screen sm:items-end"
    >
      {/* Mobile: the video sits in its own band above the text (same
          stacked treatment SectorHero uses for its photos) instead of
          being cropped hard and overlaid behind the copy. From `sm` up,
          it reverts to the original full-bleed background with the text
          overlaid at the bottom. */}
      <div
        className="relative aspect-[3/2] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto"
        aria-hidden="true"
      >
        {/* Scaled up in both dimensions (preserving aspect ratio, so
            object-cover's own crop behavior is unchanged) and anchored to
            the top — the extra height spills off the bottom edge (clipped
            by the wrapper's overflow-hidden), hiding the Runway export
            watermark. Horizontally re-centered so the same percentage is
            trimmed off each side as an unavoidable side effect of the
            zoom. Mobile uses a lighter 110% zoom than desktop's 122% —
            still enough to clip the watermark, without cropping in as
            tight on narrow screens. */}
        <video
          ref={videoRef}
          className="absolute left-1/2 top-0 h-[110%] w-[110%] -translate-x-1/2 object-cover sm:h-[122%] sm:w-[122%]"
          src="/hero-banner-final-4k.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <motion.div
          className="absolute -top-1/3 left-1/2 hidden h-[900px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px] sm:block"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
          animate={
            prefersReduced
              ? undefined
              : { x: [0, 60, -40, 0], y: [0, 40, -20, 0] }
          }
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Scrim — subtle at the top so the video reads clearly, but
            deep enough behind the text block (bottom-anchored content
            on desktop) to keep the headline and copy legible over
            bright footage. Kept even in the mobile stacked band, purely
            for the same branded look SectorHero applies to its own
            stacked photo band. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 via-45% to-transparent" />

        <VideoPauseToggle videoRef={videoRef} className="pointer-events-auto absolute bottom-4 right-4 z-20 sm:bottom-6 sm:right-6" />
      </div>

      <div className="container relative z-10 mx-auto max-w-container pb-16 pt-10 sm:pb-20 sm:pt-40 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionContent, delay: 0.1 }}
          className="flex max-w-4xl flex-col gap-8"
        >
          <h1 className="font-nav text-display-sm leading-[1.1] text-text-inverse">
            Global Investments.
            <br />
            Built on Transparency.
          </h1>

          <p className="max-w-lg text-[1.25rem] leading-relaxed text-text-inverse">
            We create long-term investment opportunities through
            diversified businesses, strategic partnerships, and disciplined
            capital management across global industries.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="gold" size="lg" withArrow className="group" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button variant="ghost-inverse" size="lg" asChild>
              <Link href="/about" className="group inline-flex items-center gap-2">
                <PlayCircle className="size-5" strokeWidth={1.5} aria-hidden />
                Our Story
                <ArrowUpRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
