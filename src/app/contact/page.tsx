import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactFormSection } from '@/components/contact/contact-form-section'
import { ContactFAQ } from '@/components/contact/contact-faq'
import { navSections, footerColumns } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Al Quba Investment. Speak directly with our principals about institutional investment, family office partnerships, and private wealth mandates.',
  alternates: { canonical: '/contact' },
}

/**
 * Contact — composed from existing design system components plus
 * page-specific sections (src/components/contact/). Deliberately omits
 * the closing CTASection used on every other page: this page is already
 * the destination that CTA points to, so repeating it here would be
 * redundant. Surface order (ink → canvas → muted) keeps the alternation
 * rule intact even at three sections.
 */
export default function ContactPage() {
  return (
    <>
      <Navbar sections={navSections} />
      <main>
        <ContactHero />
        <ContactFormSection />
        <ContactFAQ />
      </main>
      <Footer columns={footerColumns} />
    </>
  )
}
