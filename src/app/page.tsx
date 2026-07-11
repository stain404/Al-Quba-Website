import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Hero } from '@/components/home/hero'
import { TrustIndicators } from '@/components/home/trust-indicators'
import { AboutPreview } from '@/components/home/about-preview'
import { WhyChooseAlQuba } from '@/components/home/why-choose'
import { InvestmentSectors } from '@/components/home/investment-sectors'
import { InvestmentPools } from '@/components/home/investment-pools'
import { GlobalPresence } from '@/components/home/global-presence'
import { OurEcosystem } from '@/components/home/our-ecosystem'
import { Testimonials } from '@/components/home/testimonials'
import { InvestorEducationPreview } from '@/components/home/investor-education-preview'
import { navSections, footerColumns, siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

/**
 * Home — composed entirely from the established design system.
 * Section order and surface alternation (canvas → muted → canvas → muted →
 * ink → navy → canvas → canvas) is deliberate: no two adjacent sections
 * share the same surface, and no two adjacent sections share the same
 * content layout (card grid, row list, split, spotlight, map, stat grid).
 */
export default function HomePage() {
  return (
    <>
      <Navbar sections={navSections} />
      <main>
        {/* 1 */} <Hero />
        {/* 2 */} <TrustIndicators />
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
          eyebrow="Start a Conversation"
          title="Capital deserves a firm that thinks the way you do."
          description="Speak directly with our principals about your objectives, timeline, and how our pools and mandates might fit."
          primaryLabel="Request a Consultation"
          primaryHref="/contact"
          secondaryLabel="Explore Our Ecosystem"
          secondaryHref="/#sectors"
          backgroundImageSrc="/footer-bg.png"
        />
      </main>
      {/* 12 */}
      <Footer columns={footerColumns} />
    </>
  )
}
