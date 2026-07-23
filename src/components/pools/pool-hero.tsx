import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ResponsiveHeroImage } from '@/components/media/responsive-hero-image'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'
import type { Pool } from '@/lib/pools-data'
import { getPoolIcon } from '@/lib/pools-data'

/**
 * Pool Detail / Hero.
 * Ink surface with a sector icon badge in place of the skyline motif used
 * on the Home hero — keeps the visual language consistent (eyebrow, gold
 * hairline, inline metrics) without reusing the exact same composition.
 * When a pool supplies `heroImage`, it's used as a full-bleed photo
 * background (same left-to-right scrim technique as SectorHero) instead
 * of the plain ink surface.
 */
export function PoolHero({ pool }: { pool: Pool }) {
  const Icon = getPoolIcon(pool.slug)
  const hasImage = !!pool.heroImage
  const isOpen = pool.status.toLowerCase().includes('open')

  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      contained={!hasImage}
      className={cn(
        'relative flex min-h-screen w-full flex-col overflow-hidden sm:items-center',
        hasImage && 'bg-[#1A140F]'
      )}
    >
      {pool.heroImage && (
        /* Below `sm`, the photo sits in its own horizontal band
           (aspect-[3/2]) stacked above the text, shown in full via
           ResponsiveHeroImage's object-contain + blurred-backdrop
           treatment — no cropping. Switches back to the full-bleed
           absolute object-cover from `sm` up, matching the desktop look
           exactly as before. */
        <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
          <ResponsiveHeroImage src={pool.heroImage} priority />
          {/* Warm near-black instead of the brand `ink` navy — ink
              stacked on a photo reads as a flat blue block (see
              CTASection / SectorHero); a warm dark tone blends into
              the photo instead. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/70 via-[#1A140F]/40 to-[#1A140F]/10"
            aria-hidden
          />
        </div>
      )}

      <div className={cn(hasImage && 'container relative z-10 mx-auto max-w-container')}>
        <FadeIn className="flex max-w-3xl flex-col gap-8 pt-16">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-md bg-accent/12 text-accent-ink">
              <Icon className="size-6" strokeWidth={1.5} aria-hidden />
            </span>
            <Eyebrow inverse>{pool.category}</Eyebrow>
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-caption uppercase tracking-wide',
                isOpen
                  ? 'border-accent/40 text-accent-ink'
                  : 'border-border-ink text-text-inverse-muted'
              )}
            >
              <span className={cn('size-1.5 rounded-full', isOpen ? 'bg-accent-ink' : 'bg-text-inverse-muted')} aria-hidden />
              {pool.status}
            </span>
          </div>

          <Heading as="h1" size="display-lg" inverse className="font-nav">
            {pool.name}
          </Heading>
          <p className="max-w-measure text-body-lg text-text-inverse">{pool.tagline}</p>

          {pool.heroMetrics.length > 0 && (
            <div className="flex flex-col gap-3 border-t border-border-ink pt-8">
              <span className="text-caption uppercase tracking-wide text-text-inverse-muted">Investment Details</span>
              <dl className="flex flex-wrap gap-x-10 gap-y-4">
                {pool.heroMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1">
                    <dt className="text-caption uppercase tracking-wide text-text-inverse-muted">{metric.label}</dt>
                    <dd className="font-mono text-data-md text-accent-ink">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {pool.highlights.length > 0 && (
            <ul className="flex flex-col gap-2.5">
              {pool.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-body-sm text-text-inverse-muted">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-ink" strokeWidth={1.5} aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="gold" size="lg" withArrow className="group" asChild>
              <Link href={isOpen ? '/contact' : '/#pools'}>
                {isOpen ? 'Invest Now' : 'Invest in Other Funds'}
              </Link>
            </Button>
            <Button variant="ghost-inverse" size="lg" asChild>
              <Link href="/contact">Enquire Now</Link>
            </Button>
            {pool.brochureUrl && (
              <Button variant="ghost-inverse" size="lg" asChild>
                {pool.brochureUrl.startsWith('http') || pool.brochureUrl.endsWith('.pdf') ? (
                  <a href={pool.brochureUrl} target="_blank" rel="noopener noreferrer">
                    Download Brochure
                  </a>
                ) : (
                  <Link href={pool.brochureUrl}>Download Brochure</Link>
                )}
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
