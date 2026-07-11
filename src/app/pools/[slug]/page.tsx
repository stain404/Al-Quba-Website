import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { PoolHero } from '@/components/pools/pool-hero'
import { PoolHowItWorks } from '@/components/pools/pool-how-it-works'
import { PoolStructure } from '@/components/pools/pool-structure'
import { PoolRisks } from '@/components/pools/pool-risks'
import { RelatedPools } from '@/components/pools/related-pools'
import { pools, getPoolBySlug } from '@/lib/pools-data'
import { navSections, footerColumns } from '@/lib/site-config'

interface PoolPageProps {
  params: { slug: string }
}

/** Pre-render all three pool pages at build time. */
export function generateStaticParams() {
  return pools.map((pool) => ({ slug: pool.slug }))
}

export function generateMetadata({ params }: PoolPageProps): Metadata {
  const pool = getPoolBySlug(params.slug)
  if (!pool) return {}

  return {
    title: pool.name,
    description: pool.description,
    alternates: { canonical: `/pools/${pool.slug}` },
  }
}

/**
 * Pool Detail — one template shared by Frozen, Cocoa, and Travel pools,
 * populated from src/lib/pools-data.ts. Layout pattern (hero → numbered
 * steps → definition list → feature grid → related card grid) alternates
 * surfaces ink → canvas → muted → canvas → muted, none repeating back to
 * back, and each section uses a pattern distinct from its neighbors.
 */
export default function PoolDetailPage({ params }: PoolPageProps) {
  const pool = getPoolBySlug(params.slug)
  if (!pool) notFound()

  return (
    <>
      <Navbar sections={navSections} />
      <main>
        <PoolHero pool={pool} />
        <PoolHowItWorks steps={pool.steps} />
        <PoolStructure structure={pool.structure} />
        <PoolRisks risks={pool.risks} />
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
      <Footer columns={footerColumns} />
    </>
  )
}
