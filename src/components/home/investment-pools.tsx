'use client'

import * as React from 'react'
import { motion, useReducedMotion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { InvestmentCard, InvestmentGrid } from '@/components/cards/investment-card'
import { pools as poolsData } from '@/lib/pools-data'
import type { InvestmentItem } from '@/types'

/**
 * Derived directly from src/lib/pools-data.ts (the same source the pool
 * detail pages read from) rather than a second hardcoded copy — keeps
 * Home's cards from silently drifting out of sync with the detail pages,
 * the same fix applied to Home's sector accordion.
 */
const pools: InvestmentItem[] = poolsData.map((pool) => ({
  name: pool.name,
  category: pool.category,
  description: pool.tagline,
  metricLabel: pool.heroMetrics[0]?.label ?? '',
  metricValue: pool.heroMetrics[0]?.value ?? '',
  imageSrc: pool.heroImage,
  href: `/pools/${pool.slug}`,
}))

/**
 * A single pool card, revealed with a wipe (a `clip-path` reveal, not a
 * fade/slide) — the card wipes in from the left as it enters the
 * viewport, holds fully revealed, then wipes back out to the left as you
 * scroll past. All driven by this card's own continuous scroll progress,
 * so scrolling back up plays the same wipe in reverse.
 */
function AnimatedPoolCard({ pool }: { pool: InvestmentItem }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const wipe = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [100, 0, 0, 100])
  const clipPath = useMotionTemplate`inset(0 ${wipe}% 0 0)`

  return (
    <motion.div ref={cardRef} style={prefersReduced ? undefined : { clipPath }} className="h-full">
      <InvestmentCard {...pool} wrap={false} />
    </motion.div>
  )
}

/**
 * Section 6 — Investment Pools.
 */
export function InvestmentPools() {
  return (
    <SectionContainer id="pools" surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="Structured Vehicles"
        title="Investment pools built around real trade cycles"
        description="Each pool is collateralized against a physical trade cycle — not a market thesis — giving investors a defined entry, cycle length, and exit."
      />
      <div className="mt-16">
        <InvestmentGrid>
          {pools.map((pool) => (
            <AnimatedPoolCard key={pool.name} pool={pool} />
          ))}
        </InvestmentGrid>
      </div>
    </SectionContainer>
  )
}
