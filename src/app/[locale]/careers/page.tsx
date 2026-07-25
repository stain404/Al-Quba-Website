import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CareersHero } from '@/components/careers/careers-hero'
import { WhyJoin } from '@/components/careers/why-join'
import { LifeAtAlQuba } from '@/components/careers/life-at-al-quba'
import { CurrentOpenings } from '@/components/careers/current-openings'
import { RecruitmentProcess } from '@/components/careers/recruitment-process'
import { OpenApplication } from '@/components/careers/open-application'
import { CTASection } from '@/components/sections/cta-section'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'

interface CareersPageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: CareersPageProps) {
  return buildMetadata({
    title: 'Careers',
    description:
      'Join Al Quba Investment Group — a Dubai-headquartered investment firm building long-term value across global industries. Explore current openings and grow with us.',
    path: localizedPath(params.locale, '/careers'),
  })
}

export default function CareersPage({ params }: CareersPageProps) {
  setRequestLocale(params.locale)

  return (
    <>
      <Navbar />
      <main>
        <CareersHero />
        <WhyJoin />
        <LifeAtAlQuba />
        <CurrentOpenings />
        <RecruitmentProcess />
        <OpenApplication />
        <CTASection
          eyebrow="Join Our Team"
          title="Ready to Build Something Meaningful?"
          description="Join a team that's creating long-term value across global industries."
          primaryLabel="Apply Today"
          primaryHref="mailto:careers@alqubainvestment.com"
          secondaryLabel="Contact HR"
          secondaryHref="/contact"
          backgroundImageSrc="/footer-bg.png"
        />
      </main>
      <Footer />
    </>
  )
}
