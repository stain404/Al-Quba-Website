import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { InvestmentCard, InvestmentGrid } from '@/components/cards/investment-card'
import { Stagger } from '@/components/motion/reveal'
import { pools } from '@/lib/pools-data'
import type { InvestmentItem } from '@/types'

/**
 * Pool Detail / Related Pools.
 * Surfaces the other two pools via InvestmentCard, giving investors a
 * path to compare structures without leaving the detail-page context.
 */
export function RelatedPools({ currentSlug }: { currentSlug: string }) {
  const others: InvestmentItem[] = pools
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      name: p.name,
      category: p.category,
      description: p.tagline,
      metricLabel: p.heroMetrics[0]?.label ?? '',
      metricValue: p.heroMetrics[0]?.value ?? '',
      imageSrc: p.heroImage,
      href: `/pools/${p.slug}`,
    }))

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow="Explore Further" title="Other structured pools" />
      <Stagger className="mt-16">
        <InvestmentGrid>
          {others.map((pool) => (
            <InvestmentCard key={pool.name} {...pool} />
          ))}
        </InvestmentGrid>
      </Stagger>
    </SectionContainer>
  )
}
