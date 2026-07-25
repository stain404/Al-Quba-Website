import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CareersHero } from '@/components/careers/careers-hero'
import { CurrentOpenings } from '@/components/careers/current-openings'
import { OpenApplication } from '@/components/careers/open-application'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

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

/**
 * Careers — intentionally minimal institutional layout.
 * Hero (photo banner) → Current Openings (with search + filter) → Open
 * Application. No marketing sections, no statistics.
 */
export default function CareersPage({ params }: CareersPageProps) {
  setRequestLocale(params.locale)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ]}
      />
      <Navbar />
      <main>
        <CareersHero />
        <CurrentOpenings />
        <OpenApplication />
      </main>
      <Footer />
    </>
  )
}
