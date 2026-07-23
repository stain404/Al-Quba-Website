import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ResponsiveHeroImage } from '@/components/media/responsive-hero-image'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'
import type { Sector } from '@/lib/sectors-data'

/**
 * Sector Detail / Hero.
 * Ink surface with a sector icon badge — the same composition as
 * PoolHero, reused deliberately since both are "detail page opens on a
 * dark surface with an icon + inline metrics" moments. When a sector
 * supplies its own `heroHeadline`, that replaces `name` as the H1 (with
 * `name` moving to the eyebrow), and an optional `heroCta` adds a button.
 * When a sector supplies `heroImage`, it's used as a full-bleed photo
 * background (same left-to-right scrim technique as Insights' hero)
 * instead of the plain ink surface.
 */
export function SectorHero({ sector }: { sector: Sector }) {
  const Icon = sector.icon
  const hasImage = !!sector.heroImage
  const hasLongTagline = sector.tagline.length > 200

  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      contained={!hasImage}
      className={cn(
        'relative flex min-h-screen w-full items-center overflow-hidden',
        hasImage && 'bg-[#1A140F]'
      )}
    >
      {sector.heroImage && (
        /* Full-bleed on every breakpoint — text overlays the photo
           directly (scrim below keeps it legible) instead of sitting in
           a separate stacked band beneath it, on mobile same as desktop. */
        <div className="absolute inset-0">
          <ResponsiveHeroImage
            src={sector.heroImage}
            objectPosition={sector.heroImagePosition ?? 'center'}
            priority
          />
          {/* Warm near-black instead of the brand `ink` navy — ink
              stacked on a photo reads as a flat blue block (see
              CTASection); a warm dark tone blends into the photo
              instead, and is lightened further so more of the image
              shows through than the CTA banner's version. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/70 via-[#1A140F]/40 to-[#1A140F]/10"
            aria-hidden
          />
        </div>
      )}

      <div className={cn(hasImage && 'container relative z-10 mx-auto max-w-container')}>
        <FadeIn className="flex max-w-3xl flex-col gap-8 pt-16">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-md bg-accent/12 text-accent-ink">
              <Icon className="size-6" strokeWidth={1.5} aria-hidden />
            </span>
            <Eyebrow inverse>{sector.heroHeadline ? sector.name : 'Investment Sector'}</Eyebrow>
          </div>

          <Heading as="h1" size="display-lg" inverse className="font-nav">
            {sector.heroHeadline ?? sector.name}
          </Heading>
          <p className={cn('max-w-measure text-text-inverse', hasLongTagline ? 'text-body-sm' : 'text-body-lg')}>
            {sector.tagline}
          </p>

          {sector.heroCta && (
            <Button variant="gold" size="lg" withArrow asChild className="group w-fit">
              <Link href={sector.heroCta.href}>{sector.heroCta.label}</Link>
            </Button>
          )}

          <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-border-ink pt-8">
            {sector.heroMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1">
                <dt className="text-caption uppercase tracking-wide text-text-inverse-muted">{metric.label}</dt>
                <dd className="font-mono text-data-md text-accent-ink">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
