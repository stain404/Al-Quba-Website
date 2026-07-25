import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { InvestmentCard, InvestmentGrid } from '@/components/cards/investment-card'
import { Stagger } from '@/components/motion/reveal'
import { getPools } from '@/lib/pools-data'
import type { InvestmentItem } from '@/types'

const copy = {
  en: { eyebrow: 'Explore Further', title: 'Explore Other Investment Opportunities', description: 'Discover additional professionally managed investment pools designed to provide diversified exposure across high-growth industries.' },
  ar: { eyebrow: 'استكشف المزيد', title: 'استكشف فرصًا استثمارية أخرى', description: 'اكتشف صناديق استثمارية إضافية مُدارة باحترافية، مصممة لتوفير تعرض متنوع عبر قطاعات عالية النمو.' },
} as const

/**
 * Pool Detail / Related Pools.
 * Surfaces the other two pools via InvestmentCard, giving investors a
 * path to compare structures without leaving the detail-page context.
 */
export function RelatedPools({ currentSlug, locale = 'en' }: { currentSlug: string; locale?: string }) {
  const c = copy[locale as keyof typeof copy] ?? copy.en
  const others: InvestmentItem[] = getPools(locale)
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
    <SectionContainer surface="muted" spacing="md">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
      <Stagger className="mt-16">
        <InvestmentGrid compact>
          {others.map((pool) => (
            <InvestmentCard key={pool.name} {...pool} compact />
          ))}
        </InvestmentGrid>
      </Stagger>
    </SectionContainer>
  )
}
