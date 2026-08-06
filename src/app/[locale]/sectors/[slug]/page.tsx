import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
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
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'
import { ServiceJsonLd } from '@/components/seo/service-json-ld'

interface SectorPageProps {
  params: { locale: string; slug: string }
}

/** Pre-render every sector page at build time. */
export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }))
}

export function generateMetadata({ params }: SectorPageProps) {
  const sector = getSectorBySlug(params.slug, params.locale)
  if (!sector) return {}

  return buildMetadata({
    title: sector.name,
    description: sector.description,
    path: localizedPath(params.locale, `/sectors/${sector.slug}`),
  })
}

const pageCopy = {
  en: {
    aboutDivision: 'About the Division',
    whyItMatters: 'Why It Matters',
    ctaEyebrow: 'Explore This Sector',
    ctaTitle: (name: string) => `Ready to allocate into ${name}?`,
    ctaDescription: 'Our team will walk you through current allocation capacity, minimum commitment, and how this sector fits alongside our structured pools.',
    primaryLabel: 'Request a Consultation',
    secondaryLabel: 'View Investment Pools',
  },
  ar: {
    aboutDivision: 'عن القطاع',
    whyItMatters: 'لماذا يهم هذا القطاع',
    ctaEyebrow: 'استكشف هذا القطاع',
    ctaTitle: (name: string) => `هل أنت مستعد للاستثمار في ${name}؟`,
    ctaDescription: 'سيوجهك فريقنا حول سعة التخصيص الحالية، والحد الأدنى للالتزام، وكيف يتناسب هذا القطاع مع صناديقنا المنظمة.',
    primaryLabel: 'اطلب استشارة',
    secondaryLabel: 'استعرض صناديق الاستثمار',
  },
} as const

/**
 * Sector Detail — one template shared by every investment division,
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
  setRequestLocale(params.locale)
  const sector = getSectorBySlug(params.slug, params.locale)
  if (!sector) notFound()
  const locale = params.locale as keyof typeof pageCopy
  const t = pageCopy[locale] ?? pageCopy.en

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
      <Navbar />
      <main>
        <SectorHero sector={sector} />
        {sector.overview && (
          <SectorOverview
            id="about-division"
            eyebrow={t.aboutDivision}
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
          <SectorOverview eyebrow={t.whyItMatters} overview={sector.whyItMatters} surface={nextSectionSurface()} />
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
        <RelatedSectors currentSlug={sector.slug} locale={params.locale} surface={nextSectionSurface()} />
        <CTASection
          eyebrow={t.ctaEyebrow}
          title={t.ctaTitle(sector.name)}
          description={t.ctaDescription}
          primaryLabel={t.primaryLabel}
          primaryHref="/contact"
          secondaryLabel={t.secondaryLabel}
          secondaryHref="/#pools"
        />
      </main>
      <Footer />
    </>
  )
}
