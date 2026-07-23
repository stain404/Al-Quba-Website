import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow } from '@/components/typography/heading'
import { StatCounter, StatGrid } from '@/components/data-display/stat-counter'
import { FadeIn } from '@/components/motion/reveal'
import type { StatItem } from '@/types'

const stats: StatItem[] = [
  { label: 'Years of Industry Experience', value: 10, suffix: '+' },
  { label: 'Strategic Subsidiaries', value: 19 },
  { label: 'Investment Sectors', value: 5 },
  { label: 'Countries Served', value: 4 },
]

/**
 * Section 2 — Trust Statistics.
 * Replaces the scrolling partner-logo marquee with animated count-up
 * figures in the same quiet band beneath the hero — a firmer, more
 * concrete trust signal than rotating logos for a first-time visitor.
 */
export function TrustStats() {
  return (
    <SectionContainer surface="raised" spacing="sm" as="div">
      <FadeIn className="flex flex-col items-center gap-12 border-y border-border py-16 text-center">
        <Eyebrow className="items-center">Track Record</Eyebrow>
        <StatGrid columns={4}>
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} className="items-center text-center" />
          ))}
        </StatGrid>
      </FadeIn>
    </SectionContainer>
  )
}
