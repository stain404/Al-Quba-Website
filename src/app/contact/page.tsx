import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactFormSection } from '@/components/contact/contact-form-section'
import { ContactFAQ } from '@/components/contact/contact-faq'
import { OfficeMap } from '@/components/contact/office-map'
import { navSections } from '@/lib/site-config'
import { faqs } from '@/lib/faq-data'
import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'
import { FaqJsonLd } from '@/components/seo/faq-json-ld'

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Al Quba Investment. Speak directly with our principals about institutional investment, family office partnerships, and private wealth mandates.',
  path: '/contact',
})

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
export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <FaqJsonLd items={faqs} />
      <Navbar sections={navSections} />
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
