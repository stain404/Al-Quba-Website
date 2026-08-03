import { getLocale } from 'next-intl/server'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import { sectors } from '@/lib/sectors-data'
import { siteConfig } from '@/lib/site-config'

const copy = {
  en: {
    eyebrow: 'Portfolio',
    title: 'The companies we operate',
    description:
      'Every division below is run by a named operating company. These are the businesses Al Quba capital sits behind.',
    entityLabel: 'Registered entity',
    hqLabel: 'Headquarters',
    hqValue: 'Office 306, Al Mezan Tower, Al Qusais, Muhaisnah 4, Dubai, UAE',
  },
  ar: {
    eyebrow: 'المحفظة',
    title: 'الشركات التي ندير',
    description:
      'كل قطاع أدناه تديره شركة تشغيلية باسمها. هذه هي الأعمال التي يقف خلفها رأس مال القبا.',
    entityLabel: 'الكيان المسجل',
    hqLabel: 'المقر الرئيسي',
    hqValue: 'مكتب 306، برج الميزان، القصيص، محيصنة 4، دبي، الإمارات',
  },
} as const

/**
 * Portfolio Companies.
 *
 * Exists because the neighbouring `OurEcosystem` section carries the same
 * information as a single flat PNG (`/portfolio.png`). That reads fine to
 * a human but is invisible to search crawlers, to screen readers beyond
 * one generic alt string, and to any automated trust/credibility audit of
 * the site — the six operating companies may as well not be on the page.
 * This renders the same roster as real text, so the names are indexable
 * and each one links through to the division that runs it.
 *
 * Derived from `sectors` rather than a hardcoded list: the division
 * pages and this section can't drift apart, and onboarding a company
 * means editing `companies` in one place.
 */
export async function PortfolioCompanies() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  // Divisions with nothing onboarded yet would render an empty column.
  const divisions = sectors.filter((sector) => sector.companies.length > 0)

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

      <Stagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {divisions.map((sector) => (
          <StaggerItem key={sector.slug} className="h-full">
            <div className="flex h-full flex-col border-t border-border pt-6 rtl:text-right">
              <Link
                href={`/sectors/${sector.slug}`}
                className="group inline-flex items-start gap-1.5 text-caption font-medium uppercase tracking-wide text-text-tertiary transition-colors duration-200 ease-institutional hover:text-text-secondary"
              >
                {sector.name}
                <ArrowUpRight
                  className="mt-px size-3 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rtl:rotate-180"
                  aria-hidden
                />
              </Link>

              {/* The company names are the point of the section, so they
                  carry the visual weight — the division above is the
                  label, not the headline. */}
              <ul className="mt-4 flex flex-col gap-2">
                {sector.companies.map((company) => (
                  <li
                    key={company}
                    className="text-heading-sm font-semibold text-balance text-text-primary"
                  >
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Verifiable corporate facts, stated plainly. Deliberately not
          dressed up as badges or seals: a badge asserts third-party
          verification, and nothing here has been verified by a third
          party — these are simply true and checkable.

          TODO(al-quba): add the DED trade licence number here once
          confirmed, as `licenceLabel` / `licenceValue` in `copy` above.
          A licence number is the single strongest trust signal a UAE
          investment company can publish, because it is independently
          checkable. Do not add audit, regulator, or certification
          claims unless the underlying credential actually exists and
          can be named. */}
      <dl className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:gap-16">
        <div>
          <dt className="text-caption font-medium uppercase tracking-wide text-text-tertiary">
            {c.entityLabel}
          </dt>
          <dd className="mt-2 text-body-md text-text-primary">{siteConfig.legalName}</dd>
        </div>
        <div>
          <dt className="text-caption font-medium uppercase tracking-wide text-text-tertiary">
            {c.hqLabel}
          </dt>
          <dd className="mt-2 max-w-measure text-body-md text-text-primary">{c.hqValue}</dd>
        </div>
      </dl>
    </SectionContainer>
  )
}
