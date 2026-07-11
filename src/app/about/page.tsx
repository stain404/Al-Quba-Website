import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { AboutHero } from '@/components/about/about-hero'
import { MissionValues } from '@/components/about/mission-values'
import { HistoryTimeline } from '@/components/about/history-timeline'
import { Leadership } from '@/components/about/leadership'
import { Governance } from '@/components/about/governance'
import { GlobalOffices } from '@/components/about/global-offices'
import { navSections, footerColumns } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Al Quba Investment is a Dubai-headquartered investment and asset management firm founded by Khasim Enoli, Founder & CEO. Learn about our history, founder's message, governance, and global presence.",
  alternates: { canonical: '/about' },
}

/**
 * About — composed from existing design system components plus a small
 * set of page-specific sections (src/components/about/). Surface order
 * (ink → canvas → muted → canvas → muted → canvas) and layout pattern
 * (hero → split+grid → timeline → profile rows → definition list →
 * address ledger) are both fully alternated, matching the Home page's
 * no-two-adjacent-sections-alike rule.
 */
export default function AboutPage() {
  return (
    <>
      <Navbar sections={navSections} />
      <main>
        <AboutHero />
        <MissionValues />
        <HistoryTimeline />
        <Leadership />
        <Governance />
        <GlobalOffices />
        <CTASection
          eyebrow="Work With Us"
          title="Ready to talk about your capital?"
          description="Whether you're a family office, an institution, or an individual investor, our principals are the first people you'll speak with."
          primaryLabel="Request a Consultation"
          primaryHref="/contact"
          secondaryLabel="View Our Strategies"
          secondaryHref="/strategies"
          backgroundImageSrc="/footer-bg.png"
        />
      </main>
      <Footer columns={footerColumns} />
    </>
  )
}
