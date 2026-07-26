import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { InsightsHero } from '@/components/insights/insights-hero'
import { FeaturedArticle } from '@/components/insights/featured-article'
import { InsightsGrid } from '@/components/insights/insights-grid'
import { NewsletterSignup } from '@/components/insights/newsletter-signup'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

interface InsightsPageProps {
  params: { locale: string }
}

const metadataCopy = {
  en: {
    title: 'Insights',
    description:
      'Commentary on trade finance, structured investing, and the markets Al Quba Investment operates in, written by our investment team.',
  },
  ar: {
    title: 'الرؤى الاستثمارية',
    description:
      'تعليقات حول التمويل التجاري، والاستثمار المهيكل، والأسواق التي تعمل فيها القبا للاستثمار، بقلم فريق الاستثمار لدينا.',
  },
} as const

const ctaCopy = {
  en: {
    eyebrow: 'Have a Question',
    title: 'Looking for Insights on a Specific Market or Sector?',
    description:
      "If there's a market, industry, or investment topic you'd like us to cover, our team welcomes your suggestions. We continuously publish research designed to help investors navigate evolving global opportunities.",
    primaryLabel: 'Contact Our Team',
    secondaryLabel: 'View Investment Pools',
  },
  ar: {
    eyebrow: 'هل لديك سؤال',
    title: 'هل تبحث عن رؤى حول سوق أو قطاع معين؟',
    description:
      'إذا كان هناك سوق أو قطاع أو موضوع استثماري ترغب في أن نتناوله، يسعد فريقنا بتلقي اقتراحاتك. نواصل نشر أبحاث مصممة لمساعدة المستثمرين على التعامل مع الفرص العالمية المتطورة.',
    primaryLabel: 'تواصل مع فريقنا',
    secondaryLabel: 'استعرض مجمعات الاستثمار',
  },
} as const

export function generateMetadata({ params }: InsightsPageProps) {
  const locale = params.locale as keyof typeof metadataCopy
  const m = metadataCopy[locale] ?? metadataCopy.en

  return buildMetadata({
    title: m.title,
    description: m.description,
    path: localizedPath(params.locale, '/insights'),
  })
}

/**
 * Insights — composed from existing design system components plus
 * page-specific sections (src/components/insights/). Surface order
 * (ink → canvas → muted → canvas → ink CTA) and layout pattern (quiet
 * hero → single large spotlight → filterable grid → centered form) are
 * fully alternated, consistent with every other page built so far.
 */
export default function InsightsPage({ params }: InsightsPageProps) {
  setRequestLocale(params.locale)
  const locale = params.locale as keyof typeof ctaCopy
  const cta = ctaCopy[locale] ?? ctaCopy.en

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }]} />
      <Navbar />
      <main>
        <InsightsHero />
        <FeaturedArticle />
        <InsightsGrid />
        <NewsletterSignup />
        <CTASection
          eyebrow={cta.eyebrow}
          title={cta.title}
          description={cta.description}
          primaryLabel={cta.primaryLabel}
          primaryHref="/contact"
          secondaryLabel={cta.secondaryLabel}
          secondaryHref="/#pools"
        />
      </main>
      <Footer />
    </>
  )
}
