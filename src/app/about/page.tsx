import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { AboutHero } from '@/components/about/about-hero'
import { MissionValues } from '@/components/about/mission-values'
import { HistoryTimeline } from '@/components/about/history-timeline'
import { Leadership } from '@/components/about/leadership'
import { InvestmentProcess } from '@/components/about/investment-process'
import { navSections } from '@/lib/site-config'
import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

export const metadata = buildMetadata({
  title: 'About',
  description:
    "Al Quba Investment is a Dubai-headquartered investment and asset management firm founded by Khasim Enoli, Founder & CEO. Learn about our history, founder's message, investment process, and global presence.",
  path: '/about',
})

/**
 * About — composed from existing design system components plus a small
 * set of page-specific sections (src/components/about/). Surface order
 * (ink → canvas → muted → canvas → ink) and layout pattern (hero →
 * split+grid → timeline → profile rows → step tracker) are both fully
 * alternated, matching the Home page's no-two-adjacent-sections-alike
 * rule. No standalone office/address section — that's covered by the
 * footer on every page already.
 */
export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <Navbar sections={navSections} />
      <main>
        <AboutHero />
        <MissionValues />
        <HistoryTimeline />
        <Leadership />
        <InvestmentProcess />
        <CTASection
          eyebrow="Work With Us"
          title="Ready to Build Long-Term Value Together?"
          description="Whether you're an institutional investor, family office, or individual investor, our team is ready to help you explore strategic investment opportunities with confidence."
          primaryLabel="Request a Consultation"
          primaryHref="/contact"
          secondaryLabel="View Our Strategies"
          secondaryHref="/#sectors"
          backgroundImageSrc="/footer-bg.png"
        />
      </main>
      <Footer />
    </>
  )
}
