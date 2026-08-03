import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import { sectors } from '@/lib/sectors-data'

const copy = {
  en: {
    eyebrow: 'Portfolio',
    title: 'The companies we operate',
    description:
      'Every division below is run by a named operating company. These are the businesses Al Quba capital sits behind.',
  },
  ar: {
    eyebrow: 'المحفظة',
    title: 'الشركات التي ندير',
    description:
      'كل قطاع أدناه تديره شركة تشغيلية باسمها. هذه هي الأعمال التي يقف خلفها رأس مال القبا.',
  },
} as const

/**
 * Company name (as written in `sectors-data`) -> logo file.
 *
 * Keyed by name rather than added to the sector data itself so the data
 * stays a plain list of companies and this stays a presentation concern.
 *
 * These point at `public/logos`, not the raw supplied files. The originals
 * were each a mark floating in a different amount of whitespace — the
 * marks occupied anywhere from 24% to 45% of their canvas height — so
 * dropping them into equal boxes made some read tiny and others huge. The
 * normalised set is trimmed to the mark and re-padded to a common 2:1
 * canvas, capped at 50% width and 56% height, which is what makes six
 * different logos read as one set. They are padded on #FBFAF7, the same
 * colour as the card (`canvas-raised`), so the mark reads as sitting
 * directly on the card with no plate or seam behind it. Regenerate rather
 * than hand-edit if a new logo arrives; the originals are still in
 * `public/`, and the padding colour must track the card background.
 *
 * Bright Hurst Contracting has no logo supplied yet — anything without an
 * entry here falls back to a typographic lockup below, so a missing file
 * degrades to a quieter card instead of a hole in the grid.
 */
const logos: Record<string, string> = {
  'Hebron General Trading LLC': '/logos/hebron.png',
  'NobleStar Shipping Services LLC': '/logos/noblestar.png',
  ContainerKart: '/logos/containerkart.png',
  'Al Wahda Trading': '/logos/alwahda.png',
  'Phew Interactive': '/logos/phew.png',
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
        className="group flex h-full flex-col items-start gap-3 rounded-lg border border-border bg-canvas-raised px-7 pb-6 pt-7 transition-all duration-300 ease-institutional hover:-translate-y-1 hover:border-border-strong hover:shadow-md"
      >
        {/* Division label, ruled with the one gold mark the card gets. */}
        <span className="inline-flex items-center gap-2.5 text-caption uppercase tracking-wide text-text-tertiary">
          <span aria-hidden className="h-px w-6 shrink-0 bg-accent" />
          {sectorName}
        </span>

        {/* The legal name leads the card. It is the fact a reader is here to
            check, and the logos below carry only short forms ("HEBRON"). */}
        <h3 className="text-balance font-display text-heading-md font-bold leading-tight text-text-primary">
          {company}
        </h3>

        {/* Mark sits at the foot as a signature rather than a plate. The
            files in public/logos are padded on canvas-raised, the same
            colour as this card, so no seam shows behind them. */}
        <div className="mt-auto flex w-full items-end justify-between gap-4 pt-5">
          {logo ? (
            <div className="relative h-13 w-30">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                sizes="120px"
                className="object-contain object-left-bottom"
              />
            </div>
          ) : (
            // No logo supplied. A wordmark in the display face holds the
            // same slot rather than leaving the footer lopsided.
            <span className="font-display text-body-sm font-bold uppercase tracking-wide text-text-tertiary">
              {company.replace(/ (Contracting|LLC)$/, '')}
            </span>
          )}
          <span
            aria-hidden
            className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-text-tertiary transition-colors duration-300 ease-institutional group-hover:border-transparent group-hover:bg-ink group-hover:text-text-inverse"
          >
            <ArrowUpRight className="size-3.5 rtl:rotate-180" />
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

    </SectionContainer>
  )
}
