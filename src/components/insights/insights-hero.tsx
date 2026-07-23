'use client'

import * as React from 'react'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'
import { VideoPauseToggle } from '@/components/motion/video-pause-toggle'

/**
 * Insights / Hero.
 * Same quiet, ink-surface header pattern used across About, Portfolio,
 * and Pool detail pages — consistent page-opening rhythm across the
 * site, distinct from the animated Home hero. Full-bleed background
 * video, same technique as About's.
 */
export function InsightsHero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)

  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      contained={false}
      className="relative flex min-h-screen w-full flex-col overflow-hidden lg:items-center"
    >
      {/* A full-height (very tall/narrow) mobile viewport forced this
          landscape video to cover it at ~4x zoom, leaving only a sliver
          of width visible. Instead, the video now sits in a
          fixed-height horizontal band (250px on phones, 500px on
          tablets — a little cropping, not a lot), stacked above the
          text, and switches to the full-bleed absolute cover from `lg`
          up, matching the desktop look exactly as before. */}
      <div className="relative h-[250px] w-full shrink-0 overflow-hidden bg-[#1A140F] md:h-[500px] lg:absolute lg:inset-0 lg:h-auto">
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          src="/insights.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <VideoPauseToggle videoRef={videoRef} className="absolute bottom-4 right-4 z-20 lg:bottom-6 lg:right-6" />
        {/* Warm near-black instead of the brand `ink` navy (see
            About/CTASection/Sector/Pool/Contact heroes) — ink stacked on
            a video reads as a flat blue block; a warm dark tone blends
            into the footage instead while keeping the left-side text
            legible. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/80 via-[#1A140F]/50 to-[#1A140F]/15"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-container">
        <FadeIn className="flex max-w-3xl flex-col gap-8 pt-16">
          <Eyebrow inverse>Insights</Eyebrow>
          <Heading as="h1" size="display-lg" inverse className="font-nav">
            How we think, in writing.
          </Heading>
          <p className="max-w-measure text-body-lg text-text-inverse">
            Commentary on trade finance, structured investing, and the
            markets we operate in — written by the people making the
            allocation decisions, not a content team.
          </p>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
