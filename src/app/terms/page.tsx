import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import { navSections } from '@/lib/site-config'
import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description:
    'Terms and conditions governing use of the Al Quba Investment website and the information published on it.',
  path: '/terms',
})

const LAST_UPDATED = 'July 2026'

/**
 * Terms & Conditions.
 * Starter legal copy for the marketing site (not the investor onboarding
 * / subscription agreement flow, which is a separate document handled
 * directly with qualified investors). Should be reviewed by qualified
 * legal counsel before being relied on as binding — flagged inline.
 */
export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms' }]} />
      <Navbar sections={navSections} />
      <main>
        <SectionContainer surface="ink" spacing="lg" as="header">
          <FadeIn className="flex max-w-2xl flex-col gap-6">
            <Eyebrow inverse>Legal</Eyebrow>
            <Heading as="h1" size="display-md" inverse>
              Terms &amp; Conditions
            </Heading>
            <p className="text-body-md text-text-inverse-muted">Last updated: {LAST_UPDATED}</p>
          </FadeIn>
        </SectionContainer>

        <SectionContainer surface="canvas" spacing="lg">
          <FadeIn className="mx-auto flex max-w-3xl flex-col gap-12">
            <p className="text-body-md text-text-secondary">
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
              website operated by Al Quba Investment LLC (&ldquo;Al Quba,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including all content, pages, and features
              published on it (the &ldquo;Site&rdquo;). By accessing or using the Site, you agree
              to be bound by these Terms. If you do not agree, please do not use the Site.
            </p>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">1. About This Website</Heading>
              <p className="text-body-md text-text-secondary">
                The Site is provided for general informational purposes only, to describe Al
                Quba&rsquo;s business, investment sectors, structured pools, and how to get in
                touch with us. Nothing on the Site constitutes, and should not be construed as,
                an offer, solicitation, invitation, or recommendation to buy or sell any
                investment product, security, or financial instrument, in any jurisdiction where
                such an offer or solicitation would be unlawful.
              </p>
              <p className="text-body-md text-text-secondary">
                Any figures, returns, structures, or terms referenced in general terms on the Site
                are illustrative only and are not a commitment, guarantee, or binding offer.
                Specific commercial terms for any pool or mandate are only made available directly
                to qualified investors, in writing, following our standard onboarding process.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">2. No Investment, Legal, or Tax Advice</Heading>
              <p className="text-body-md text-text-secondary">
                Content on the Site does not constitute investment, legal, tax, or accounting
                advice, and is not tailored to the investment objectives or financial situation of
                any specific person. Before making any investment decision, you should seek advice
                from independent, suitably qualified professional advisers.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">3. Eligibility</Heading>
              <p className="text-body-md text-text-secondary">
                Certain information referenced on the Site relates to investment structures that
                are only available to accredited, professional, or institutional investors, as
                defined under applicable law and DIFC/DFSA rules. By enquiring about a pool or
                mandate, you confirm that you meet the eligibility criteria applicable to the
                relevant jurisdiction.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">4. Intellectual Property</Heading>
              <p className="text-body-md text-text-secondary">
                Unless otherwise indicated, all text, graphics, logos, and other material on the
                Site are the property of Al Quba Investment LLC or its licensors and are protected
                by applicable intellectual property laws. You may view and download material from
                the Site for personal, non-commercial reference only. You may not reproduce,
                distribute, modify, or create derivative works from any part of the Site without
                our prior written consent.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">5. Third-Party Links</Heading>
              <p className="text-body-md text-text-secondary">
                The Site may reference or link to third-party websites, including partner and
                portfolio company sites and social media profiles. We do not control, and are not
                responsible for, the content, accuracy, or practices of any third-party site.
                Inclusion of a link does not imply endorsement.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">6. Disclaimer &amp; Limitation of Liability</Heading>
              <p className="text-body-md text-text-secondary">
                The Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis, without warranties of any kind, whether express or
                implied. To the fullest extent permitted by law, Al Quba Investment LLC disclaims
                all liability for any loss or damage arising from your access to, or use of
                (or inability to use), the Site, including any reliance placed on its content.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">7. Governing Law &amp; Jurisdiction</Heading>
              <p className="text-body-md text-text-secondary">
                These Terms are governed by the laws applicable in the Dubai International
                Financial Centre (DIFC), United Arab Emirates, without regard to conflict-of-law
                principles. Any dispute arising out of or in connection with these Terms shall be
                subject to the exclusive jurisdiction of the DIFC Courts.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">8. Changes to These Terms</Heading>
              <p className="text-body-md text-text-secondary">
                We may update these Terms from time to time to reflect changes to our business or
                applicable law. The &ldquo;Last updated&rdquo; date above indicates when this
                page was last revised. Continued use of the Site after any update constitutes
                acceptance of the revised Terms.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">9. Contact Us</Heading>
              <p className="text-body-md text-text-secondary">
                Questions about these Terms can be sent to{' '}
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
              DIFC/DFSA requirements before being relied upon as Al Quba&rsquo;s binding terms of
              use.
            </p>
          </FadeIn>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
