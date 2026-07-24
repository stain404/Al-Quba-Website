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
import { navSections } from '@/lib/site-config'
import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'
import { ServiceJsonLd } from '@/components/seo/service-json-ld'

interface SectorPageProps {
  params: { slug: string }
}

/** Pre-render all five sector pages at build time. */
export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }))
}

export function generateMetadata({ params }: SectorPageProps) {
  const sector = getSectorBySlug(params.slug)
  if (!sector) return {}

  return buildMetadata({
    title: sector.name,
    description: sector.description,
    path: `/sectors/${sector.slug}`,
  })
}

/**
 * Sector Detail — one template shared by all five investment divisions,
 * populated from src/lib/sectors-data.ts. Every optional block (overview,
 * whyItMatters, process, industryOutlook, whyChoose) renders only when a
 * sector actually supplies it, so surfaces are alternated dynamically
 * rather than hardcoded — no two adjacent sections ever share a surface,
 * regardless of which optional sections a given sector includes. Full
 * flow when every optional section is present: Hero -> About (overview)
 * -> Featured Company (case study) -> Division Capabilities -> Why This
 * Division Matters (whyItMatters) -> Process/Journey -> Industry Outlook
 * -> Why Choose [Company] -> Related Sectors -> Closing CTA.
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

  // Sectors with a named company spotlight (a custom case-study heading)
  // already showcase that company in full below — the plain companies
  // chip strip would just repeat it, so it's skipped here.
  const hasPartnerSpotlight = !!sector.caseStudyHeading

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Sectors', path: '/#sectors' },
          { name: sector.name, path: `/sectors/${sector.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={sector.name}
        description={sector.description}
        path={`/sectors/${sector.slug}`}
        serviceType="Investment Sector"
      />
      <Navbar sections={navSections} />
      <main>
        <SectorHero sector={sector} />
        {sector.overview && (
          <SectorOverview
            id="about-division"
            eyebrow="About the Division"
            overview={sector.overview}
            surface={nextSectionSurface()}
          />
        )}
        <SectorCaseStudy
          id="featured-company"
          caseStudy={sector.caseStudy}
          heading={sector.caseStudyHeading}
          surface={nextSectionSurface()}
        />
        <SectorCapabilities
          capabilities={sector.capabilities}
          companies={hasPartnerSpotlight ? undefined : sector.companies}
          heading={sector.capabilitiesHeading}
          surface={nextSectionSurface()}
        />
        {sector.whyItMatters && (
          <SectorOverview eyebrow="Why It Matters" overview={sector.whyItMatters} surface={nextSectionSurface()} />
        )}
        {sector.process && sector.process.length > 0 && (
          <SectorProcess steps={sector.process} heading={sector.processHeading} surface={nextSectionSurface()} />
        )}
        {sector.industryOutlook && (
          <SectorCapabilities
            capabilities={sector.industryOutlook.items}
            heading={sector.industryOutlook.heading}
            surface={nextSectionSurface()}
          />
        )}
        {sector.whyChoose && (
          <SectorCapabilities
            capabilities={sector.whyChoose.items}
            heading={sector.whyChoose.heading}
            surface={nextSectionSurface()}
          />
        )}
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
      <Footer />
    </>
  )
}
