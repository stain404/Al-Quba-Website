import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import { navSections } from '@/lib/site-config'
import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Al Quba Investment collects, uses, and protects information submitted through this website.',
  path: '/privacy',
})

const LAST_UPDATED = 'July 2026'

/**
 * Privacy Policy.
 * Starter privacy copy covering the site's actual data touch points
 * (contact form, newsletter signup) — not a full investor-onboarding
 * KYC/AML privacy notice, which is a separate document handled directly
 * with qualified investors. Should be reviewed by qualified legal
 * counsel before being relied on as binding — flagged inline.
 */
export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }]} />
      <Navbar sections={navSections} />
      <main>
        <SectionContainer surface="ink" spacing="lg" as="header">
          <FadeIn className="flex max-w-2xl flex-col gap-6">
            <Eyebrow inverse>Legal</Eyebrow>
            <Heading as="h1" size="display-md" inverse>
              Privacy Policy
            </Heading>
            <p className="text-body-md text-text-inverse-muted">Last updated: {LAST_UPDATED}</p>
          </FadeIn>
        </SectionContainer>

        <SectionContainer surface="canvas" spacing="lg">
          <FadeIn className="mx-auto flex max-w-3xl flex-col gap-12">
            <p className="text-body-md text-text-secondary">
              This Privacy Policy explains how Al Quba Investment LLC (&ldquo;Al Quba,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses,
              and protects information when you visit this website or submit an enquiry through
              it (the &ldquo;Site&rdquo;).
            </p>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">1. Information We Collect</Heading>
              <p className="text-body-md text-text-secondary">We collect information you provide directly to us, specifically:</p>
              <ul className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary">
                <li className="list-disc">
                  <strong className="text-text-primary">Contact form:</strong> full name, email
                  address, company or family office name, inquiry type, and any message content
                  you submit.
                </li>
                <li className="list-disc">
                  <strong className="text-text-primary">Newsletter signup:</strong> your email
                  address.
                </li>
                <li className="list-disc">
                  <strong className="text-text-primary">Automatically collected:</strong> standard
                  technical data such as IP address, browser type, device type, and pages visited,
                  typically collected via server logs or analytics tooling.
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">2. How We Use Your Information</Heading>
              <p className="text-body-md text-text-secondary">We use the information we collect to:</p>
              <ul className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary">
                <li className="list-disc">Respond to enquiries submitted through the contact form.</li>
                <li className="list-disc">Send the newsletter to subscribers who opt in, and let them unsubscribe at any time.</li>
                <li className="list-disc">Maintain the security, performance, and proper functioning of the Site.</li>
                <li className="list-disc">Comply with applicable legal, regulatory, and contractual obligations.</li>
              </ul>
              <p className="text-body-md text-text-secondary">
                We do not use information submitted through this Site for automated decision-making
                or profiling, and we do not sell your personal data.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">3. Sharing Your Information</Heading>
              <p className="text-body-md text-text-secondary">
                We do not sell or rent personal data. We may share information with trusted service
                providers who support our operations (for example, email delivery or hosting
                providers), bound by confidentiality obligations, or where required by law or a
                valid regulatory or judicial request.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">4. Data Retention</Heading>
              <p className="text-body-md text-text-secondary">
                We retain information submitted through the Site for as long as necessary to
                respond to your enquiry, maintain our newsletter list, and meet applicable legal
                or regulatory retention requirements, after which it is deleted or anonymized.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">5. Your Rights</Heading>
              <p className="text-body-md text-text-secondary">
                Subject to applicable law, including the UAE Federal Personal Data Protection Law,
                you may have the right to request access to, correction of, or deletion of your
                personal data, to object to certain processing, or to withdraw consent (such as
                unsubscribing from the newsletter) at any time. To exercise any of these rights,
                contact us using the details below.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">6. Cookies</Heading>
              <p className="text-body-md text-text-secondary">
                The Site may use a minimal set of cookies or similar technologies strictly
                necessary for the Site to function, and, where enabled, privacy-conscious analytics
                to understand aggregate usage. These do not identify you individually for marketing
                purposes.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">7. Data Security</Heading>
              <p className="text-body-md text-text-secondary">
                We use reasonable technical and organizational measures designed to protect
                information submitted through the Site. No method of transmission or storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">8. Children&rsquo;s Privacy</Heading>
              <p className="text-body-md text-text-secondary">
                The Site is intended for business and institutional audiences and is not directed
                at, or intended for use by, children. We do not knowingly collect personal data
                from children.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">9. Changes to This Policy</Heading>
              <p className="text-body-md text-text-secondary">
                We may update this Privacy Policy from time to time. The &ldquo;Last
                updated&rdquo; date above reflects the most recent revision. Material changes will
                be reflected on this page.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">10. Contact Us</Heading>
              <p className="text-body-md text-text-secondary">
                For any question about this Privacy Policy or to exercise your data rights,
                contact us at{' '}
                <a href="mailto:inbox@alqubainvestment.com" className="text-navy underline underline-offset-4">
                  inbox@alqubainvestment.com
                </a>{' '}
                or via our{' '}
                <a href="/contact" className="text-navy underline underline-offset-4">
                  Contact page
                </a>
                .
              </p>
            </section>

            <p className="rounded-md border border-border-strong bg-canvas-muted p-5 text-body-sm text-text-tertiary">
              This page is a general starting template and has not been reviewed by qualified
              legal counsel. It should be reviewed and adapted by a licensed lawyer familiar with
              UAE data protection law and DIFC/DFSA requirements before being relied upon as Al
              Quba&rsquo;s binding privacy policy.
            </p>
          </FadeIn>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
