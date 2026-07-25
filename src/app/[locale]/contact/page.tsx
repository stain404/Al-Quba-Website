import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactFormSection } from '@/components/contact/contact-form-section'
import { ContactFAQ } from '@/components/contact/contact-faq'
import { OfficeMap } from '@/components/contact/office-map'
import { getFaqs } from '@/lib/faq-data'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'
import { FaqJsonLd } from '@/components/seo/faq-json-ld'

interface ContactPageProps {
  params: { locale: string }
}

const metadataCopy = {
  en: {
    title: 'Contact',
    description:
      'Get in touch with Al Quba Investment. Speak directly with our principals about institutional investment, family office partnerships, and private wealth mandates.',
  },
  ar: {
    title: 'تواصل معنا',
    description:
      'تواصل مع القبا للاستثمار. تحدث مباشرة مع مسؤولينا حول الاستثمار المؤسسي، وشراكات مكاتب العائلات، وتفويضات الثروات الخاصة.',
  },
} as const

export function generateMetadata({ params }: ContactPageProps) {
  const locale = params.locale as keyof typeof metadataCopy
  const m = metadataCopy[locale] ?? metadataCopy.en

  return buildMetadata({
    title: m.title,
    description: m.description,
    path: localizedPath(params.locale, '/contact'),
  })
}

/**
 * Contact — composed from existing design system components plus
 * page-specific sections (src/components/contact/). Deliberately omits
 * the closing CTASection used on every other page: this page is already
 * the destination that CTA points to, so repeating it here would be
 * redundant. OfficeMap closes the page on the same canvas surface as
 * the form section — a quiet trust signal, not a fourth distinct
 * "surface" beat, so it deliberately breaks the strict alternation
 * rule used elsewhere.
 */
export default function ContactPage({ params }: ContactPageProps) {
  setRequestLocale(params.locale)

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <FaqJsonLd items={getFaqs(params.locale)} />
      <Navbar />
      <main>
        <ContactHero />
        <ContactFormSection />
        <ContactFAQ />
        <OfficeMap />
      </main>
      <Footer />
    </>
  )
}
