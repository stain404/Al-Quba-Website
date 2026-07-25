import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow } from '@/components/typography/heading'
import { StatCounter, StatGrid } from '@/components/data-display/stat-counter'
import { FadeIn } from '@/components/motion/reveal'
import type { StatItem } from '@/types'

const copy = {
  en: {
    eyebrow: 'Track Record',
    stats: [
      { label: 'Years of Industry Experience', value: 10, suffix: '+' },
      { label: 'Strategic Subsidiaries', value: 19 },
      { label: 'Investment Sectors', value: 5 },
      { label: 'Countries Served', value: 4 },
    ] satisfies StatItem[],
  },
  ar: {
    eyebrow: 'سجل الإنجازات',
    stats: [
      { label: 'سنوات الخبرة في القطاع', value: 10, suffix: '+' },
      { label: 'شركات تابعة استراتيجية', value: 19 },
      { label: 'قطاعات استثمارية', value: 5 },
      { label: 'دول نخدمها', value: 4 },
    ] satisfies StatItem[],
  },
} as const

/**
 * Section 2 — Trust Statistics.
 * Replaces the scrolling partner-logo marquee with animated count-up
 * figures in the same quiet band beneath the hero — a firmer, more
 * concrete trust signal than rotating logos for a first-time visitor.
 */
export async function TrustStats() {
  const locale = (await getLocale()) as keyof typeof copy
  const { eyebrow, stats } = copy[locale]

  return (
    <SectionContainer surface="raised" spacing="sm" as="div">
      <FadeIn className="flex flex-col items-center gap-12 border-y border-border py-16 text-center">
        <Eyebrow className="items-center">{eyebrow}</Eyebrow>
        <StatGrid columns={4}>
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} className="items-center text-center" />
          ))}
        </StatGrid>
      </FadeIn>
    </SectionContainer>
  )
}
