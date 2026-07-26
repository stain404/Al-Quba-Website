import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { AboutHero } from '@/components/about/about-hero'
import { MissionValues } from '@/components/about/mission-values'
import { HistoryTimeline } from '@/components/about/history-timeline'
import { Leadership } from '@/components/about/leadership'
import { InvestmentProcess } from '@/components/about/investment-process'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

interface AboutPageProps {
  params: { locale: string }
}

const metadataCopy = {
  en: {
    title: 'About',
    description:
      "Al Quba Investment is a Dubai-headquartered investment and asset management firm founded by Khasim Enoli, Founder & CEO. Learn about our history, founder's message, investment process, and global presence.",
  },
  ar: {
    title: 'من نحن',
    description:
      'القبا للاستثمار شركة استثمار وإدارة أصول مقرها دبي، أسسها Khasim Enoli، المؤسس والرئيس التنفيذي. تعرف على تاريخنا، وكلمة المؤسس، وعملية الاستثمار، وحضورنا العالمي.',
  },
} as const

const ctaCopy = {
  en: {
    eyebrow: 'Work With Us',
    title: 'Ready to Build Long-Term Value Together?',
    description: "Whether you're an institutional investor, family office, or individual investor, our team is ready to help you explore strategic investment opportunities with confidence.",
    primaryLabel: 'Request a Consultation',
    secondaryLabel: 'View Our Strategies',
  },
  ar: {
    eyebrow: 'اعمل معنا',
    title: 'هل أنت مستعد لبناء قيمة طويلة الأمد معًا؟',
    description: 'سواء كنت مستثمرًا مؤسسيًا، أو مكتب عائلة، أو مستثمرًا فرديًا، فريقنا جاهز لمساعدتك على استكشاف فرص استثمارية استراتيجية بثقة.',
    primaryLabel: 'اطلب استشارة',
    secondaryLabel: 'استعرض استراتيجياتنا',
  },
} as const

export function generateMetadata({ params }: AboutPageProps) {
  const locale = params.locale as keyof typeof metadataCopy
  const m = metadataCopy[locale] ?? metadataCopy.en

  return buildMetadata({
    title: m.title,
    description: m.description,
    path: localizedPath(params.locale, '/about'),
  })
}

/**
 * About — composed from existing design system components plus a small
 * set of page-specific sections (src/components/about/). Surface order
 * (ink → canvas → muted → canvas → ink) and layout pattern (hero →
 * split+grid → timeline → profile rows → step tracker) are both fully
 * alternated, matching the Home page's no-two-adjacent-sections-alike
 * rule. No standalone office/address section — that's covered by the
 * footer on every page already.
 */
export default function AboutPage({ params }: AboutPageProps) {
  setRequestLocale(params.locale)
  const locale = params.locale as keyof typeof ctaCopy
  const cta = ctaCopy[locale] ?? ctaCopy.en

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <Navbar />
      <main>
        <AboutHero />
        <MissionValues />
        <HistoryTimeline />
        <Leadership />
        <InvestmentProcess />
        <CTASection
          eyebrow={cta.eyebrow}
          title={cta.title}
          description={cta.description}
          primaryLabel={cta.primaryLabel}
          primaryHref="/contact"
          secondaryLabel={cta.secondaryLabel}
          secondaryHref="/#sectors"
          backgroundImageSrc="/footer.png"
        />
      </main>
      <Footer />
    </>
  )
}
