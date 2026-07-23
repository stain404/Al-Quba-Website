'use client'

import * as React from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { VideoPauseToggle } from '@/components/motion/video-pause-toggle'

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
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* Full-bleed on every breakpoint — text overlays the video
          directly (scrim below keeps it legible) instead of sitting in
          a separate stacked band beneath it, on mobile same as desktop. */}
      <div className="absolute inset-0 bg-[#1A140F]">
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
            Built quietly, deployed deliberately.
          </Heading>
          <p className="max-w-measure text-body-lg text-text-inverse">
            Al Quba Investment was founded in Dubai on a simple premise:
            capital compounds best when it is managed by people who answer
            for it personally. Fourteen years later, that premise still
            governs every mandate we accept.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
