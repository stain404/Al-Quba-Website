'use client'

import * as React from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { VideoPauseToggle } from '@/components/motion/video-pause-toggle'

const trustIndicators = ['Dubai, UAE', 'Investment Management', 'Global Investments', 'Long-Term Growth']

const OFFSET = 60
/** Raw page-scroll distance (px) over which the hero fades/slides out —
 *  since this is the very first section on the page, there's no scroll
 *  headroom above it to genuinely animate "in from below" on first load,
 *  so it settles fully visible at scrollY 0 and animates only as you
 *  scroll away from and back to the top. */
const EXIT_DISTANCE = 420

/**
 * About / Hero.
 * Deliberately quieter than the Home hero (no animated aurora, no CTA) —
 * this page opens like the first page of an annual report, not a landing
 * page. Ink surface still gives it weight and separates it from the
 * canvas-heavy content that follows.
 *
 * Tracks raw page scroll (not this element's own viewport transit, which
 * is unreliable for a page-top element): scrolling down carries it up
 * and fades it out past the top; scrolling back up brings it back down
 * into place from the top, reversing exactly.
 */
export function AboutHero() {
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const y = useTransform(scrollY, [0, EXIT_DISTANCE], [0, -OFFSET])
  const opacity = useTransform(scrollY, [0, EXIT_DISTANCE], [1, 0])

  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      contained={false}
      className="relative flex min-h-screen w-full flex-col overflow-hidden sm:items-center"
    >
      {/* Below `sm`, a full-height (very tall/narrow) mobile viewport
          forced this landscape video to cover it at ~4x zoom, leaving
          only a sliver of width visible. Instead, the video now sits in
          its own horizontal band (aspect-[3/2] — close to the footage's
          own ratio, so only mild cropping) stacked above the text on
          mobile, and switches back to the full-bleed absolute cover
          from `sm` up, matching the desktop look exactly as before. */}
      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-[#1A140F] sm:absolute sm:inset-0 sm:aspect-auto">
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          src="/abstract.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <VideoPauseToggle videoRef={videoRef} className="absolute bottom-4 right-4 z-20 sm:bottom-6 sm:right-6" />
        {/* Warm near-black instead of the brand `ink` navy — ink stacked
            on a photo/video reads as a flat blue block (see CTASection /
            SectorHero / PoolHero / ContactHero, which all use this same
            fix); a neutral dark tone blends into the footage instead and
            still keeps the left-side text legible. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/80 via-[#1A140F]/50 to-[#1A140F]/15"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-container">
        <motion.div
          style={prefersReduced ? undefined : { y, opacity }}
          className="flex max-w-3xl flex-col gap-8 pt-16"
        >
          <Eyebrow inverse>About Al Quba</Eyebrow>
          <Heading as="h1" size="display-lg" inverse className="font-nav">
            Building Long-Term Value Through Strategic Investments
          </Heading>
          <p className="max-w-measure text-body-lg text-text-inverse">
            Al Quba Investment LLC is a Dubai-based investment and asset
            management firm committed to creating sustainable value through
            strategic investments across global industries. Through
            disciplined capital management, strategic partnerships, and
            diversified businesses, we help investors participate in
            long-term growth opportunities.
          </p>
          <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
            {trustIndicators.map((item, i) => (
              <li key={item} className="flex items-center gap-2.5">
                {i > 0 && <span className="size-1 rounded-full bg-text-inverse-muted" aria-hidden />}
                <span className="text-caption uppercase tracking-wide text-text-inverse-muted">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
