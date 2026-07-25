import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { InvestmentCard, InvestmentGrid } from '@/components/cards/investment-card'
import { Stagger } from '@/components/motion/reveal'
import { getSectors, upcomingSectors, sectorIconFallback } from '@/lib/sectors-data'
import type { InvestmentItem } from '@/types'

const copy = {
  en: { eyebrow: 'Explore Further', title: 'Other investment sectors', comingSoon: 'Coming Soon' },
  ar: { eyebrow: 'استكشف المزيد', title: 'قطاعات استثمارية أخرى', comingSoon: 'قريبًا' },
} as const

/**
 * Sector Detail / Related Sectors.
 * Surfaces the other authored sectors via InvestmentCard, the same
 * pattern RelatedPools uses for pool detail pages. Any entries in
 * upcomingSectors render as a plain, non-clickable "coming soon" row
 * beneath the grid rather than a broken link to an unwritten page.
 * Uses `description` (kept short across every sector) rather than
 * `tagline` for the card blurb, since a sector's tagline can run to a
 * full marketing paragraph (see Technology).
 */
export function RelatedSectors({
  currentSlug,
  locale = 'en',
  surface = 'canvas',
}: {
  currentSlug: string
  locale?: string
  surface?: 'canvas' | 'muted'
}) {
  const c = copy[locale as keyof typeof copy] ?? copy.en
  const others: InvestmentItem[] = getSectors(locale)
    .filter((sector) => sector.slug !== currentSlug)
    .map((sector) => ({
      name: sector.name,
      category: 'Investment Sector',
      description: sector.description,
      metricLabel: sector.heroMetrics[0]?.label ?? '',
      metricValue: sector.heroMetrics[0]?.value ?? '',
      imageSrc: sector.heroImage,
      href: `/sectors/${sector.slug}`,
    }))

  const FallbackIcon = sectorIconFallback

  return (
    <SectionContainer surface={surface} spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} />
      <Stagger className="mt-16">
        <InvestmentGrid>
          {others.map((sector) => (
            <InvestmentCard key={sector.name} {...sector} />
          ))}
        </InvestmentGrid>
      </Stagger>

      {upcomingSectors.length > 0 && (
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <span className="text-caption uppercase tracking-wide text-text-tertiary">{c.comingSoon}</span>
          {upcomingSectors.map((sector) => {
            const Icon = sector.icon ?? FallbackIcon
            return (
              <span
                key={sector.slug}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-body-sm text-text-secondary"
              >
                <Icon className="size-4" strokeWidth={1.5} aria-hidden />
                {sector.name}
              </span>
            )
          })}
        </div>
      )}
    </SectionContainer>
  )
}
