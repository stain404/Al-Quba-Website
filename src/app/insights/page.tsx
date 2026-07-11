import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { InsightsHero } from '@/components/insights/insights-hero'
import { FeaturedArticle } from '@/components/insights/featured-article'
import { InsightsGrid } from '@/components/insights/insights-grid'
import { NewsletterSignup } from '@/components/insights/newsletter-signup'
import { navSections, footerColumns } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Commentary on trade finance, structured investing, and the markets Al Quba Investment operates in — written by our investment team.',
  alternates: { canonical: '/insights' },
}

/**
 * Insights — composed from existing design system components plus
 * page-specific sections (src/components/insights/). Surface order
 * (ink → canvas → muted → canvas → ink CTA) and layout pattern (quiet
 * hero → single large spotlight → filterable grid → centered form) are
 * fully alternated, consistent with every other page built so far.
 */
export default function InsightsPage() {
  return (
    <>
      <Navbar sections={navSections} />
      <main>
        <InsightsHero />
        <FeaturedArticle />
        <InsightsGrid />
        <NewsletterSignup />
        <CTASection
          eyebrow="Have a Question"
          title="Want a specific market covered?"
          description="If there's a sector, region, or structure you'd like our team's view on, let us know."
          primaryLabel="Contact Our Team"
          primaryHref="/contact"
          secondaryLabel="View Investment Pools"
          secondaryHref="/#pools"
        />
      </main>
      <Footer columns={footerColumns} />
    </>
  )
}
