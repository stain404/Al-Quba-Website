import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { PoolHero } from '@/components/pools/pool-hero'
import { PoolDashboardHero } from '@/components/pools/pool-dashboard-hero'
import { PoolInvestmentSnapshot } from '@/components/pools/pool-investment-snapshot'
import { PoolHighlights } from '@/components/pools/pool-highlights'
import { PoolHowItWorks } from '@/components/pools/pool-how-it-works'
import { PoolStructure } from '@/components/pools/pool-structure'
import { PoolRisks } from '@/components/pools/pool-risks'
import { PoolFAQ } from '@/components/pools/pool-faq'
import { RelatedPools } from '@/components/pools/related-pools'
import { pools, getPoolBySlug } from '@/lib/pools-data'
import { navSections } from '@/lib/site-config'
import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'
import { ServiceJsonLd } from '@/components/seo/service-json-ld'

interface PoolPageProps {
  params: { slug: string }
}

/** Pre-render all three pool pages at build time. */
export function generateStaticParams() {
  return pools.map((pool) => ({ slug: pool.slug }))
}

export function generateMetadata({ params }: PoolPageProps) {
  const pool = getPoolBySlug(params.slug)
  if (!pool) return {}

  return buildMetadata({
    title: pool.name,
    description: pool.description,
    path: `/pools/${pool.slug}`,
  })
}

/**
 * Pool Detail — one template shared by Frozen, Cocoa, and Travel pools,
 * populated from src/lib/pools-data.ts. Investment Snapshot, Investment
 * Highlights, Fund Details, and the single-question FAQ are all
 * optional and only render when a pool actually supplies that data.
 * Frost Capital Fund I deliberately omits Investment Highlights, Fund
 * Details, and the FAQ — that content duplicated the Hero, Investment
 * Snapshot, and How It Works sections, so the page was shortened to
 * Hero → Snapshot → How It Works → Risk & Safeguards → Related →
 * CTA. Travel Fund uses PoolDashboardHero instead of the classic
 * PoolHero (triggered by the presence of `heroDashboard`) — its own
 * two-column executive dashboard absorbs what would otherwise be the
 * Investment Snapshot and Investment Highlights sections, so those
 * stay unpopulated for Travel to avoid showing the same figures twice.
 * Both hero variants share the `ink` surface, so the downstream surface
 * alternation (PoolHowItWorks' `surface` override for when Fund Details
 * is skipped) works unchanged regardless of which hero renders.
 */
export default function PoolDetailPage({ params }: PoolPageProps) {
  const pool = getPoolBySlug(params.slug)
  if (!pool) notFound()

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
      <Navbar sections={navSections} />
      <main>
        {pool.heroDashboard && pool.heroDashboard.length > 0 ? (
          <PoolDashboardHero pool={pool} />
        ) : (
          <PoolHero pool={pool} />
        )}
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
        <RelatedPools currentSlug={pool.slug} />
        <CTASection
          eyebrow="Join This Pool"
          title={`Ready to allocate into the ${pool.name}?`}
          description="Our team will walk you through current cycle availability, minimum commitment, and onboarding requirements."
          primaryLabel="Request a Consultation"
          primaryHref="/contact"
          secondaryLabel="View All Pools"
          secondaryHref="/#pools"
        />
      </main>
      <Footer />
    </>
  )
}
