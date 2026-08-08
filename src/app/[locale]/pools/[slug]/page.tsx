import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { PoolHero } from '@/components/pools/pool-hero'
import { PoolInvestmentSnapshot } from '@/components/pools/pool-investment-snapshot'
import { PoolHighlights } from '@/components/pools/pool-highlights'
import { PoolHowItWorks } from '@/components/pools/pool-how-it-works'
import { PoolStructure } from '@/components/pools/pool-structure'
import { PoolRisks } from '@/components/pools/pool-risks'
import { PoolFAQ } from '@/components/pools/pool-faq'
import { RelatedPools } from '@/components/pools/related-pools'
import { pools, getPoolBySlug } from '@/lib/pools-data'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'
import { ServiceJsonLd } from '@/components/seo/service-json-ld'

interface PoolPageProps {
  params: { locale: string; slug: string }
}

/** Pre-render all three pool pages at build time. */
export function generateStaticParams() {
  return pools.map((pool) => ({ slug: pool.slug }))
}

export function generateMetadata({ params }: PoolPageProps) {
  const pool = getPoolBySlug(params.slug, params.locale)
  if (!pool) return {}

  return buildMetadata({
    title: pool.name,
    description: pool.description,
    path: localizedPath(params.locale, `/pools/${pool.slug}`),
  })
}

const ctaCopy = {
  en: {
    eyebrow: 'Join This Pool',
    title: (name: string) => `Ready to allocate into the ${name}?`,
    description: 'Our team will walk you through current cycle availability, minimum commitment, and onboarding requirements.',
    primaryLabel: 'Request a Consultation',
    secondaryLabel: 'View All Pools',
  },
  ar: {
    eyebrow: 'انضم إلى هذا الصندوق',
    title: (name: string) => `هل أنت مستعد للاستثمار في ${name}؟`,
    description: 'سيوجهك فريقنا حول توفر الدورة الحالية، والحد الأدنى للالتزام، ومتطلبات الانضمام.',
    primaryLabel: 'اطلب استشارة',
    secondaryLabel: 'استعرض جميع الصناديق',
  },
} as const

/**
 * Pool Detail — one template shared by Frozen, Cocoa, and Travel pools,
 * populated from src/lib/pools-data.ts. Investment Snapshot, Investment
 * Highlights, Fund Details, and the single-question FAQ are all
 * optional and only render when a pool actually supplies that data.
 * Frost Capital Fund I deliberately omits Investment Highlights, Fund
 * Details, and the FAQ — that content duplicated the Hero, Investment
 * Snapshot, and How It Works sections, so the page was shortened to
 * Hero → Snapshot → How It Works → Risk & Safeguards → Related →
 * CTA. Travel Fund once rendered a bespoke two-column dashboard hero
 * that absorbed the Investment Snapshot section; it now runs on this
 * same template as Cocoa, section for section.
 */
export default function PoolDetailPage({ params }: PoolPageProps) {
  setRequestLocale(params.locale)
  const pool = getPoolBySlug(params.slug, params.locale)
  if (!pool) notFound()
  const locale = params.locale as keyof typeof ctaCopy
  const cta = ctaCopy[locale] ?? ctaCopy.en

  const hasFundDetails = pool.structure.length > 0

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Pools', path: '/#pools' },
          { name: pool.name, path: `/pools/${pool.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={pool.name}
        description={pool.description}
        path={`/pools/${pool.slug}`}
        serviceType="Investment Pool"
      />
      <Navbar />
      <main>
        <PoolHero pool={pool} />
        {pool.snapshot && pool.snapshot.length > 0 && (
          <PoolInvestmentSnapshot overview={pool.description} snapshot={pool.snapshot} />
        )}
        {pool.investmentHighlights && pool.investmentHighlights.length > 0 && (
          <PoolHighlights highlights={pool.investmentHighlights} />
        )}
        <PoolHowItWorks steps={pool.steps} surface={hasFundDetails ? 'canvas' : 'muted'} />
        {hasFundDetails && <PoolStructure structure={pool.structure} />}
        <PoolRisks risks={pool.risks} />
        {pool.faq && <PoolFAQ question={pool.faq.question} answer={pool.faq.answer} />}
        <RelatedPools currentSlug={pool.slug} locale={params.locale} />
        <CTASection
          eyebrow={cta.eyebrow}
          title={cta.title(pool.name)}
          description={cta.description}
          primaryLabel={cta.primaryLabel}
          primaryHref="/contact"
          secondaryLabel={cta.secondaryLabel}
          secondaryHref="/#pools"
        />
      </main>
      <Footer />
    </>
  )
}
