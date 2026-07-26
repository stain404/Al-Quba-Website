'use client'

import { useLocale } from 'next-intl'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { InvestmentCard, InvestmentGrid } from '@/components/cards/investment-card'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import { getPools } from '@/lib/pools-data'
import type { InvestmentItem } from '@/types'

const headingCopy = {
  en: {
    eyebrow: 'Structured Vehicles',
    title: 'Investment pools built around real trade cycles',
    description: 'Each pool is collateralized against a physical trade cycle, not a market thesis, giving investors a defined entry, cycle length, and exit.',
  },
  ar: {
    eyebrow: 'أدوات استثمارية منظمة',
    title: 'صناديق استثمارية مبنية على دورات تجارية حقيقية',
    description: 'كل صندوق مضمون بدورة تجارية فعلية، لا برأي في اتجاه السوق، ما يمنح المستثمرين نقطة دخول محددة، ومدة دورة واضحة، ومخرجًا معلومًا.',
  },
} as const

/**
 * Derived directly from src/lib/pools-data.ts (the same source the pool
 * detail pages read from) rather than a second hardcoded copy — keeps
 * Home's cards from silently drifting out of sync with the detail pages,
 * the same fix applied to Home's sector accordion. getPools(locale)
 * returns the already-localized pool objects.
 */
function toInvestmentItems(locale: string): InvestmentItem[] {
  return getPools(locale).map((pool) => ({
    name: pool.name,
    category: pool.category,
    description: pool.tagline,
    metricLabel: pool.heroMetrics[0]?.label ?? '',
    metricValue: pool.heroMetrics[0]?.value ?? '',
    imageSrc: pool.heroImage,
    href: `/pools/${pool.slug}`,
  }))
}

/**
 * Section 6 — Investment Pools.
 * Cards reveal with the same whileInView fade-up used across the rest of
 * the site (Stagger/StaggerItem), rather than a bespoke scroll-position-
 * linked clip-path wipe — that continuous `useScroll` effect tracked each
 * card's own scroll progress, which is fragile on mobile browsers where
 * the viewport height keeps changing as the URL bar shows/hides, and
 * could leave a card clipped to fully hidden.
 */
export function InvestmentPools() {
  const locale = useLocale() as keyof typeof headingCopy
  const heading = headingCopy[locale]
  const pools = toInvestmentItems(locale)

  return (
    <SectionContainer id="pools" surface="muted" spacing="lg">
      <SectionHeading eyebrow={heading.eyebrow} title={heading.title} description={heading.description} />
      <div className="mt-16">
        <Stagger>
          <InvestmentGrid>
            {pools.map((pool) => (
              <StaggerItem key={pool.name} className="h-full">
                <InvestmentCard {...pool} wrap={false} />
              </StaggerItem>
            ))}
          </InvestmentGrid>
        </Stagger>
      </div>
    </SectionContainer>
  )
}
