import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

interface TermsPageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: TermsPageProps) {
  return buildMetadata({
    title: 'Terms & Conditions',
    description:
      'Terms and conditions governing use of the Al Quba Investment website and the information published on it.',
    path: localizedPath(params.locale, '/terms'),
  })
}

const LAST_UPDATED = '24 July 2026'

/**
 * Website Terms of Use — verbatim client-supplied legal copy (effective
 * 24 July 2026), not the starter/placeholder text this page used to
 * hold. This governs the marketing site only; investor onboarding /
 * subscription agreements are a separate document handled through the
 * Investor Portal.
 */
export default function TermsPage({ params }: TermsPageProps) {
  setRequestLocale(params.locale)

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms' }]} />
      <Navbar />
      <main>
        <SectionContainer surface="ink" spacing="lg" as="header">
          <FadeIn className="flex max-w-2xl flex-col gap-6">
            <Eyebrow inverse>Legal</Eyebrow>
            <Heading as="h1" size="display-md" inverse>
              Website Terms of Use
            </Heading>
            <p className="text-body-md text-text-inverse-muted">Effective Date: {LAST_UPDATED}</p>
          </FadeIn>
        </SectionContainer>

        <SectionContainer surface="canvas" spacing="lg">
          <FadeIn className="mx-auto flex max-w-3xl flex-col gap-12">
            <p className="text-body-md text-text-secondary">
              Welcome to the official website of Al Quba Investment Group (&ldquo;Al Quba,&rdquo;
              &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            </p>
            <p className="text-body-md text-text-secondary">
              These Website Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of
              the Al Quba Investment Group website, including all pages, content, features, and
              materials made available through it.
            </p>
            <p className="text-body-md text-text-secondary">
              By accessing or using this website, you acknowledge that you have read, understood,
              and agreed to be bound by these Terms. If you do not agree with any part of these
              Terms, please discontinue using the website.
            </p>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">1. About This Website</Heading>
              <p className="text-body-md text-text-secondary">
                The Al Quba Investment Group website has been created to provide information about
                our company, businesses, investment philosophy, ecosystem, and areas of operation.
                It also serves as a platform for sharing corporate news, insights, educational
                content, career opportunities, and contact information.
              </p>
              <p className="text-body-md text-text-secondary">
                This website is intended for informational purposes only. It is not an investment
                platform and does not facilitate investment transactions, account creation,
                payment processing, or portfolio management.
              </p>
              <p className="text-body-md text-text-secondary">
                Where applicable, this website may provide links to a separate Investor Portal or
                other third-party platforms. Any investor onboarding, identity verification,
                subscription process, investment agreements, or portfolio management activities
                are conducted exclusively through those dedicated platforms and are governed by
                their own terms, policies, and legal documentation.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">2. Acceptance of These Terms</Heading>
              <p className="text-body-md text-text-secondary">
                By continuing to browse or use this website, you agree to comply with these Terms
                and all applicable laws and regulations.
              </p>
              <p className="text-body-md text-text-secondary">
                If you are accessing this website on behalf of a company or other legal entity,
                you confirm that you have the authority to bind that organisation to these Terms.
              </p>
              <p className="text-body-md text-text-secondary">
                If you do not agree with these Terms, you should not access or use this website.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">3. Permitted Website Use</Heading>
              <p className="text-body-md text-text-secondary">
                You may use this website solely for lawful, personal, informational, or legitimate
                business purposes.
              </p>
              <p className="text-body-md text-text-secondary">You agree that you will not:</p>
              <ul className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary">
                <li className="list-disc">Use the website in violation of any applicable law or regulation.</li>
                <li className="list-disc">Attempt to gain unauthorized access to any part of the website, its servers, databases, or connected systems.</li>
                <li className="list-disc">Introduce viruses, malware, or other harmful technologies.</li>
                <li className="list-disc">Interfere with the operation, security, or availability of the website.</li>
                <li className="list-disc">Copy, reproduce, distribute, or commercially exploit website content without prior written permission.</li>
                <li className="list-disc">Misrepresent your identity or falsely claim an affiliation with Al Quba Investment Group.</li>
                <li className="list-disc">Use automated software, bots, or scraping tools to extract content or data from the website without our prior written consent.</li>
              </ul>
              <p className="text-body-md text-text-secondary">
                We reserve the right to restrict or terminate access to users who misuse the
                website or violate these Terms.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">4. Intellectual Property Rights</Heading>
              <p className="text-body-md text-text-secondary">
                Unless otherwise stated, all content published on this website is owned by or
                licensed to Al Quba Investment Group and is protected by applicable intellectual
                property laws.
              </p>
              <p className="text-body-md text-text-secondary">This includes, but is not limited to:</p>
              <ul className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary">
                <li className="list-disc">Company names and branding</li>
                <li className="list-disc">Logos and trademarks</li>
                <li className="list-disc">Website design and layout</li>
                <li className="list-disc">Graphics and illustrations</li>
                <li className="list-disc">Images and videos</li>
                <li className="list-disc">Reports, brochures, and publications</li>
                <li className="list-disc">Articles, written content, and educational materials</li>
                <li className="list-disc">Icons, animations, and visual assets</li>
              </ul>
              <p className="text-body-md text-text-secondary">
                You may view, download, or print content solely for your personal, non-commercial
                use, provided that all copyright and proprietary notices remain intact.
              </p>
              <p className="text-body-md text-text-secondary">
                You may not reproduce, modify, distribute, publish, transmit, display, create
                derivative works from, or commercially exploit any content from this website
                without obtaining our prior written permission.
              </p>
              <p className="text-body-md text-text-secondary">
                Unauthorised use of our intellectual property may result in legal action.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">5. Website Content &amp; Accuracy</Heading>
              <p className="text-body-md text-text-secondary">
                We strive to ensure that the information presented on this website is accurate,
                current, and prepared with reasonable care.
              </p>
              <p className="text-body-md text-text-secondary">
                However, the content is provided for general informational purposes only and may
                be updated, modified, or removed without prior notice.
              </p>
              <p className="text-body-md text-text-secondary">
                While we make reasonable efforts to maintain accurate information, Al Quba
                Investment Group does not guarantee that all content will always be complete,
                current, accurate, or free from errors.
              </p>
              <p className="text-body-md text-text-secondary">
                Visitors should not rely solely on information published on this website when
                making business, legal, financial, or investment decisions. Independent
                verification and professional advice should be obtained where appropriate.
              </p>
              <p className="text-body-md text-text-secondary">
                Nothing on this website should be interpreted as creating any contractual
                obligation unless expressly stated in a separate written agreement.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">6. No Investment Advice</Heading>
              <p className="text-body-md text-text-secondary">
                The information provided on this website is intended solely for general
                informational purposes and should not be interpreted as investment, financial,
                legal, tax, or professional advice.
              </p>
              <p className="text-body-md text-text-secondary">
                Nothing contained on this website constitutes, or should be construed as:
              </p>
              <ul className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary">
                <li className="list-disc">an offer to sell or issue securities or financial products;</li>
                <li className="list-disc">a solicitation or invitation to invest;</li>
                <li className="list-disc">a recommendation to buy, sell, or hold any investment;</li>
                <li className="list-disc">investment, financial, legal, accounting, or tax advice; or</li>
                <li className="list-disc">a guarantee of future performance or investment returns.</li>
              </ul>
              <p className="text-body-md text-text-secondary">
                Any references to investment strategies, sectors, projects, case studies, or
                opportunities are provided to illustrate the activities and capabilities of Al
                Quba Investment Group and should not be relied upon as the basis for making an
                investment decision.
              </p>
              <p className="text-body-md text-text-secondary">
                Investment opportunities, where available, are subject to separate eligibility
                requirements, due diligence procedures, contractual documentation, and applicable
                laws. Individuals considering an investment should review the relevant investment
                documentation and obtain independent professional advice before making any
                financial commitment.
              </p>
              <p className="text-body-md text-text-secondary">
                Al Quba Investment Group accepts no responsibility for investment decisions made
                based solely on information published on this website.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">7. Third-Party Links</Heading>
              <p className="text-body-md text-text-secondary">
                For your convenience, this website may contain links to third-party websites,
                applications, or services, including the Al Quba Investor Portal, social media
                platforms, partner websites, and other external resources.
              </p>
              <p className="text-body-md text-text-secondary">
                These links are provided solely as a convenience and do not imply any endorsement,
                approval, or recommendation of the third-party content, products, or services.
              </p>
              <p className="text-body-md text-text-secondary">
                Once you leave this website, your use of any third-party website is governed by
                that website&rsquo;s own terms of use, privacy policy, and other applicable
                policies. Al Quba Investment Group has no control over, and accepts no
                responsibility for, the content, security, availability, or privacy practices of
                external websites.
              </p>
              <p className="text-body-md text-text-secondary">
                Visitors access third-party websites entirely at their own risk.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">8. Limitation of Liability</Heading>
              <p className="text-body-md text-text-secondary">
                To the fullest extent permitted by applicable law, Al Quba Investment Group shall
                not be liable for any direct, indirect, incidental, consequential, special, or
                punitive loss or damage arising from or related to:
              </p>
              <ul className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary">
                <li className="list-disc">your access to or use of this website;</li>
                <li className="list-disc">your inability to access the website;</li>
                <li className="list-disc">reliance on any information published on the website;</li>
                <li className="list-disc">inaccuracies, omissions, or outdated information;</li>
                <li className="list-disc">interruptions, delays, or technical failures;</li>
                <li className="list-disc">viruses, malicious software, or other harmful components transmitted through the website; or</li>
                <li className="list-disc">the use of, or reliance upon, any third-party websites linked from this website.</li>
              </ul>
              <p className="text-body-md text-text-secondary">
                While we make reasonable efforts to maintain the availability, security, and
                accuracy of the website, we do not guarantee that the website will always operate
                without interruption, error, or delay.
              </p>
              <p className="text-body-md text-text-secondary">
                Nothing in these Terms excludes or limits liability where such exclusion or
                limitation is prohibited by applicable law.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">9. Indemnity</Heading>
              <p className="text-body-md text-text-secondary">
                You agree to indemnify, defend, and hold harmless Al Quba Investment Group, its
                directors, officers, employees, affiliates, and representatives from and against
                any claims, liabilities, damages, losses, costs, or expenses (including reasonable
                legal fees) arising out of or relating to:
              </p>
              <ul className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary">
                <li className="list-disc">your breach of these Terms;</li>
                <li className="list-disc">your misuse of this website;</li>
                <li className="list-disc">your violation of any applicable law or regulation; or</li>
                <li className="list-disc">your infringement of the rights of any third party.</li>
              </ul>
              <p className="text-body-md text-text-secondary">
                This obligation survives the termination of your use of the website.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">10. Privacy</Heading>
              <p className="text-body-md text-text-secondary">
                Your use of this website is also governed by our{' '}
                <a href="/privacy" className="text-navy underline underline-offset-4">
                  Privacy Policy
                </a>
                , which explains how we collect, use, store, disclose, and protect personal
                information obtained through the website.
              </p>
              <p className="text-body-md text-text-secondary">
                By using this website, you acknowledge that you have read and understood our
                Privacy Policy.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">11. Changes to These Terms</Heading>
              <p className="text-body-md text-text-secondary">
                Al Quba Investment Group may update or revise these Terms from time to time to
                reflect changes in our business operations, legal obligations, or website
                functionality.
              </p>
              <p className="text-body-md text-text-secondary">
                The most current version will always be published on this website with the
                updated effective date.
              </p>
              <p className="text-body-md text-text-secondary">
                Your continued use of the website following the publication of revised Terms
                constitutes your acceptance of those changes.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">12. Governing Law</Heading>
              <p className="text-body-md text-text-secondary">
                These Terms shall be governed by and interpreted in accordance with the laws of
                the United Arab Emirates.
              </p>
              <p className="text-body-md text-text-secondary">
                Any dispute arising out of or in connection with these Terms or your use of this
                website shall be subject to the exclusive jurisdiction of the competent courts of
                the United Arab Emirates, unless otherwise required by applicable law.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">13. Contact Us</Heading>
              <p className="text-body-md text-text-secondary">
                If you have any questions regarding these Website Terms of Use, please contact us
                using the contact details available on our website.
              </p>
              <p className="text-body-md text-text-secondary">
                Al Quba Investment Group
                <br />
                Email:{' '}
                <a href="mailto:inbox@alqubainvestment.com" className="text-navy underline underline-offset-4">
                  inbox@alqubainvestment.com
                </a>
                <br />
                Website:{' '}
                <a href="https://www.alquba.com" className="text-navy underline underline-offset-4">
                  www.alquba.com
                </a>
              </p>
              <p className="text-body-md text-text-secondary">
                We will make reasonable efforts to respond to your enquiry in a timely manner.
              </p>
            </section>

            <p className="text-body-sm text-text-tertiary">
              Last Updated: {LAST_UPDATED}
              <br />
              &copy; 2026 Al Quba Investment Group. All Rights Reserved.
            </p>
          </FadeIn>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
