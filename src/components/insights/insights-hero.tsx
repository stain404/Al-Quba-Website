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
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src="/insights.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <VideoPauseToggle videoRef={videoRef} className="absolute bottom-6 right-6 z-20" />
      {/* Left-to-right gradient (opaque on the left) keeps the
          left-aligned text legible against the photo while leaving the
          right side of the image visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" aria-hidden />

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
