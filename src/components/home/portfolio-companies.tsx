import Image from 'next/image'
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
 * Company name (as written in `sectors-data`) -> logo file.
 *
 * Keyed by name rather than added to the sector data itself so the data
 * stays a plain list of companies and this stays a presentation concern.
 * All five files are the same grey-on-off-white treatment at ~2:1, which
 * is what lets the grid read as one set rather than a jumble of vendor
 * brand colours.
 *
 * Bright Hurst Contracting has no logo supplied yet — anything without an
 * entry here falls back to a typographic lockup below, so a missing file
 * degrades to a quieter card instead of a hole in the grid.
 */
const logos: Record<string, string> = {
  'Hebron General Trading LLC': '/hebron.jpeg',
  'NobleStar Shipping Services LLC': '/noblestargrey.jpeg',
  ContainerKart: '/containerkart.jpeg',
  'Al Wahda Trading': '/alwahda.jpeg',
  'Phew Interactive': '/phew.jpeg',
}

function CompanyCard({
  company,
  sectorName,
  sectorSlug,
}: {
  company: string
  sectorName: string
  sectorSlug: string
}) {
  const logo = logos[company]

  return (
    <StaggerItem className="h-full">
      <Link
        href={`/sectors/${sectorSlug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-canvas transition-all duration-300 ease-institutional hover:-translate-y-1 hover:border-border-strong hover:shadow-md"
      >
        {/* Fixed 2:1 frame with `object-contain`: the supplied files are
            all ~1.97:1, but contain (rather than cover) means a future
            logo at a different ratio letterboxes politely instead of
            being cropped through its wordmark. */}
        <div className="relative aspect-[2/1] w-full bg-white">
          {logo ? (
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-6 transition-transform duration-500 ease-institutional group-hover:scale-[1.03]"
            />
          ) : (
            // No logo on file. A typographic lockup in the display face
            // keeps the card the same height and weight as its
            // neighbours rather than leaving a gap in the row.
            <div className="flex size-full items-center justify-center p-6">
              <span className="text-center font-display text-heading-md font-bold uppercase tracking-wide text-text-tertiary">
                {company.replace(/ (Contracting|LLC)$/, '')}
              </span>
            </div>
          )}
        </div>

        {/* The name stays real text under the mark. The logos carry short
            forms ("HEBRON"), so the full legal name here is additive, and
            it keeps the roster crawlable — which was the whole reason
            this section replaced the flat ecosystem diagram. */}
        <div className="flex flex-1 flex-col border-t border-border p-6">
          <h3 className="text-balance text-heading-sm font-semibold text-text-primary">
            {company}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1.5 text-caption uppercase tracking-wide text-text-tertiary">
            {sectorName}
            <ArrowUpRight
              className="size-3 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 rtl:rotate-180"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </StaggerItem>
  )
}

/**
 * Portfolio Companies.
 *
 * Replaces the old `OurEcosystem` section, which carried this same
 * roster as a single flat PNG — fine for a human, invisible to search
 * crawlers, to screen readers beyond one generic alt string, and to any
 * automated credibility audit. Here each company is a real heading, a
 * real logo, and a real link through to the division that runs it.
 *
 * Derived from `sectors` rather than a hardcoded list, so onboarding a
 * company means editing `companies` in one place and this section and
 * the division pages cannot drift apart.
 */
export async function PortfolioCompanies() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  // Flattened to one card per company: two divisions run more than one
  // business, and grouping by division buried the second one.
  const entries = sectors.flatMap((sector) =>
    sector.companies.map((company) => ({
      company,
      sectorName: sector.name,
      sectorSlug: sector.slug,
    }))
  )

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

      <Stagger className="mt-16 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <CompanyCard key={entry.company} {...entry} />
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
