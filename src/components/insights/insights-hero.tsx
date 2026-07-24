'use client'

import * as React from 'react'
import Link from 'next/link'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'
import { VideoPauseToggle } from '@/components/motion/video-pause-toggle'

const topics = [
  'Market Insights',
  'Global Trade',
  'Trade Finance',
  'Investment Strategy',
  'Commodities',
  'Economic Outlook',
]

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
          src="/insights.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <VideoPauseToggle videoRef={videoRef} className="absolute bottom-4 right-4 z-20 sm:bottom-6 sm:right-6" />
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
            Insights That Drive Smarter Investment Decisions
          </Heading>
          <p className="max-w-measure text-body-lg text-text-inverse">
            Explore expert perspectives on global markets, investment
            strategies, trade finance, economic trends, and emerging
            opportunities. Our insights are designed to help investors make
            informed decisions with confidence.
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {topics.map((topic) => (
              <li key={topic}>
                <Link
                  href="/insights#articles"
                  className="inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-caption text-text-inverse-muted transition-colors duration-150 ease-institutional hover:border-accent/40 hover:text-accent-ink"
                >
                  {topic}
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
