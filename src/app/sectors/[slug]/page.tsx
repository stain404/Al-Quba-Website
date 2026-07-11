import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { SectorHero } from '@/components/sectors/sector-hero'
import { SectorOverview } from '@/components/sectors/sector-overview'
import { SectorCapabilities } from '@/components/sectors/sector-capabilities'
import { SectorProcess } from '@/components/sectors/sector-process'
import { SectorCaseStudy } from '@/components/sectors/sector-case-study'
import { RelatedSectors } from '@/components/sectors/related-sectors'
import { sectors, getSectorBySlug } from '@/lib/sectors-data'
import { navSections, footerColumns } from '@/lib/site-config'

interface SectorPageProps {
  params: { slug: string }
}

/** Pre-render all four sector pages at build time. */
export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }))
}

export function generateMetadata({ params }: SectorPageProps): Metadata {
  const sector = getSectorBySlug(params.slug)
  if (!sector) return {}

  return {
    title: sector.name,
    description: sector.description,
    alternates: { canonical: `/sectors/${sector.slug}` },
  }
}

/**
 * Sector Detail — one template shared by Trading, Real Estate, Shipping,
 * Import & Export, and Technology, populated from src/lib/sectors-data.ts.
 * Overview and Process are optional per sector (Technology's page is
 * deliberately leaner — hero, capabilities, partner spotlight only), so
 * surfaces are alternated dynamically rather than hardcoded, guaranteeing
 * no two adjacent sections share a surface regardless of which optional
 * sections a given sector includes.
 */
export default function SectorDetailPage({ params }: SectorPageProps) {
  const sector = getSectorBySlug(params.slug)
  if (!sector) notFound()

  let nextSurface: 'canvas' | 'muted' = 'canvas'
  const nextSectionSurface = () => {
    const current = nextSurface
    nextSurface = current === 'canvas' ? 'muted' : 'canvas'
    return current
  }

  // Sectors with a named Featured Partner spotlight already showcase that
  // company in full below — the plain companies chip strip would just
  // repeat it, so it's skipped here.
  const hasPartnerSpotlight = sector.caseStudyHeading?.eyebrow === 'Partners'

  return (
    <>
      <Navbar sections={navSections} />
      <main>
        <SectorHero sector={sector} />
        {sector.overview && <SectorOverview overview={sector.overview} surface={nextSectionSurface()} />}
        <SectorCapabilities
          capabilities={sector.capabilities}
          companies={hasPartnerSpotlight ? undefined : sector.companies}
          heading={sector.capabilitiesHeading}
          surface={nextSectionSurface()}
        />
        {sector.process && sector.process.length > 0 && (
          <SectorProcess steps={sector.process} surface={nextSectionSurface()} />
        )}
        <SectorCaseStudy
          caseStudy={sector.caseStudy}
          heading={sector.caseStudyHeading}
          surface={nextSectionSurface()}
        />
        <RelatedSectors currentSlug={sector.slug} surface={nextSectionSurface()} />
        <CTASection
          eyebrow="Explore This Sector"
          title={`Ready to allocate into ${sector.name}?`}
          description="Our team will walk you through current allocation capacity, minimum commitment, and how this sector fits alongside our structured pools."
          primaryLabel="Request a Consultation"
          primaryHref="/contact"
          secondaryLabel="View Investment Pools"
          secondaryHref="/#pools"
        />
      </main>
      <Footer columns={footerColumns} />
    </>
  )
}
