import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Hero } from '@/components/home/hero'
import { TrustStats } from '@/components/home/trust-stats'
import { AboutPreview } from '@/components/home/about-preview'
import { WhyChooseAlQuba } from '@/components/home/why-choose'
import { InvestmentSectors } from '@/components/home/investment-sectors'
import { InvestmentPools } from '@/components/home/investment-pools'
import { GlobalPresence } from '@/components/home/global-presence'
import { OurEcosystem } from '@/components/home/our-ecosystem'
import { Testimonials } from '@/components/home/testimonials'
import { InvestorEducationPreview } from '@/components/home/investor-education-preview'
import { siteConfig } from '@/lib/site-config'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'

interface HomePageProps {
  params: { locale: string }
}

const ctaCopy = {
  en: {
    eyebrow: 'Start a Conversation',
    title: 'Capital deserves a firm that thinks the way you do.',
    description: 'Speak directly with our principals about your objectives, timeline, and how our pools and mandates might fit.',
    primaryLabel: 'Request a Consultation',
    secondaryLabel: 'Explore Our Ecosystem',
  },
  ar: {
    eyebrow: 'ابدأ الحوار',
    title: 'رأس مالك يستحق شركة تفكر بالطريقة نفسها.',
    description: 'تحدث مباشرة مع مسؤولينا حول أهدافك وجدولك الزمني، وكيف يمكن لصناديقنا وبرامجنا الاستثمارية أن تلائمك.',
    primaryLabel: 'اطلب استشارة',
    secondaryLabel: 'استكشف منظومة أعمالنا',
  },
} as const

export function generateMetadata({ params }: HomePageProps) {
  return buildMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: localizedPath(params.locale, '/'),
    isHome: true,
  })
}

/**
 * Home — composed entirely from the established design system.
 * Section order and surface alternation (canvas → muted → canvas → muted →
 * ink → navy → canvas → canvas) is deliberate: no two adjacent sections
 * share the same surface, and no two adjacent sections share the same
 * content layout (card grid, row list, split, spotlight, map, stat grid).
 */
export default function HomePage({ params }: HomePageProps) {
  setRequestLocale(params.locale)
  const cta = ctaCopy[params.locale as keyof typeof ctaCopy] ?? ctaCopy.en

  return (
    <>
      <Navbar />
      <main>
        {/* 1 */} <Hero />
        {/* 2 */} <TrustStats />
        {/* 3 */} <AboutPreview />
        {/* 4 */} <WhyChooseAlQuba />
        {/* 5 */} <InvestmentSectors />
        {/* 6 */} <InvestmentPools />
        {/* 7 */} <GlobalPresence />
        {/* 9 */} <OurEcosystem />
        {/* 9.5 */} <Testimonials />
        {/* 10 */} <InvestorEducationPreview />
        {/* 11 */}
        <CTASection
          eyebrow={cta.eyebrow}
          title={cta.title}
          description={cta.description}
          primaryLabel={cta.primaryLabel}
          primaryHref="/contact"
          secondaryLabel={cta.secondaryLabel}
          secondaryHref="/#sectors"
          backgroundImageSrc="/footer-bg.png"
        />
      </main>
      {/* 12 */}
      <Footer />
    </>
  )
}
