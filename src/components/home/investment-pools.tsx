'use client'

import * as React from 'react'
import { motion, useReducedMotion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { InvestmentCard, InvestmentGrid } from '@/components/cards/investment-card'
import type { InvestmentItem } from '@/types'

const pools: InvestmentItem[] = [
  {
    name: 'Frozen Pool',
    category: 'Cold-Chain Commodities',
    description:
      'Structured trade financing for frozen protein and cold-chain logistics across Gulf import corridors.',
    metricLabel: 'Target Return',
    metricValue: '12–15% p.a.',
    imageSrc: '/frozen.jpeg',
    href: '/pools/frozen',
  },
  {
    name: 'Cocoa Pool',
    category: 'Soft Commodities',
    description:
      'Seasonal cocoa trade cycles from origin markets in West Africa to processors across Asia and Europe.',
    metricLabel: 'Target Return',
    metricValue: '14–18% p.a.',
    imageSrc: '/cocoa.jpeg',
    href: '/pools/cocoa',
  },
  {
    name: 'Travel Pool',
    category: 'Hospitality & Aviation',
    description:
      'Working-capital facilities for regional tour operators and charter aviation providers tied to Gulf tourism demand.',
    metricLabel: 'Target Return',
    metricValue: '10–13% p.a.',
    imageSrc: '/travel.jpeg',
    href: '/pools/travel',
  },
]

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
