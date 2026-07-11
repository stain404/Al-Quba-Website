'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, TrendingUp, Users, Globe2, ArrowUpRight } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'

const OFFSET = 90

interface Reason {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const reasons: Reason[] = [
  {
    icon: <ShieldCheck className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Capital Discipline',
    description:
      'Every allocation passes a formal risk committee before deployment — capital preservation is the first mandate, growth the second.',
    href: '/about/governance',
  },
  {
    icon: <TrendingUp className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Long-Term Horizon',
    description:
      'We structure pools and mandates around multi-year cycles, not quarterly performance theater.',
    href: '/strategies',
  },
  {
    icon: <Users className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Principal-Led',
    description:
      'Direct access to decision-makers. No layers of relationship management between you and the people allocating your capital.',
    href: '/about/leadership',
  },
  {
    icon: <Globe2 className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Global Reach',
    description:
      'Operating presence across the Gulf, East Africa, South Asia, and Southeast Asia trade corridors.',
    href: '/about/offices',
  },
]

/**
 * A single reason card. Two scroll-driven effects layered together, both
 * tied to this card's own continuous scroll progress (not a one-shot
 * viewport trigger) — so the whole thing is reversible in both scroll
 * directions:
 * 1. Left-column cards slide in from the left and, once you scroll past
 *    them, keep travelling left, off-screen; right-column cards mirror
 *    that to the right. Scrolling back up simply retraces the same path,
 *    so a card re-enters from whichever side it last exited toward.
 * 2. The icon badge additionally drifts a few pixels on its own parallax
 *    as the card transits the viewport.
 */
function WhyCard({ reason, index }: { reason: Reason; index: number }) {
  const cardRef = React.useRef<HTMLAnchorElement | null>(null)
  const prefersReduced = useReducedMotion()
  const fromLeft = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const iconY = useTransform(scrollYProgress, [0, 1], [10, -10])
  // Slides in to center and holds there (both columns arrive together),
  // then slides back out toward the same side it entered from — rather
  // than crossing all the way through to the opposite side.
  const x = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    fromLeft ? [-OFFSET, 0, 0, -OFFSET] : [OFFSET, 0, 0, OFFSET]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

  return (
    <motion.div
      style={prefersReduced ? undefined : { x, opacity }}
      className="h-full"
    >
      <Link
        ref={cardRef}
        href={reason.href}
        className="group flex h-full flex-col gap-6 rounded-lg focus-visible:outline-none focus-visible:shadow-focus"
      >
        <Card surface="canvas" padding="lg" className="flex h-full flex-col gap-6">
          <motion.div
            style={prefersReduced ? undefined : { y: iconY }}
            className="flex size-12 items-center justify-center rounded-md bg-navy/6 text-navy"
          >
            {reason.icon}
          </motion.div>
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-heading-md font-semibold text-text-primary">{reason.title}</h3>
            <p className="text-body-sm text-text-secondary">{reason.description}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-text-primary">
            Learn more
            <ArrowUpRight
              className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </Card>
      </Link>
    </motion.div>
  )
}

/**
 * Section 4 — Why Choose Al Quba.
 * A deliberate 2-column grid (rather than the shared FeatureGrid's
 * 3-column large-screen layout) so the four cards form two clean left/
 * right pairs — needed for the alternating slide-in direction below to
 * read as "left, right, left, right" rather than an arbitrary mix.
 */
export function WhyChooseAlQuba() {
  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="Why Al Quba"
        title="Built for investors who think in decades"
        description="Four principles govern every mandate we accept, from a single family office allocation to institutional capital."
      />
      {/* overflow-hidden clips the cards' ±90px slide offset so it never
          expands the page's horizontal scrollable area */}
      <div className="mt-16 grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-2">
        {reasons.map((reason, i) => (
          <WhyCard key={reason.title} reason={reason} index={i} />
        ))}
      </div>
    </SectionContainer>
  )
}
