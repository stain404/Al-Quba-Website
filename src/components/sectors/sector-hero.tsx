import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
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
        'relative flex min-h-screen w-full flex-col overflow-hidden sm:items-center',
        hasImage && 'bg-[#1A140F]'
      )}
    >
      {sector.heroImage && (
        /* Below `sm`, a full-height (very tall/narrow) mobile viewport
           forced a landscape photo to cover it at ~4x zoom, leaving only
           a sliver of width visible. Instead, the photo now sits in its
           own horizontal band (aspect-[3/2] — close to the source
           photos' own ratio, so only mild cropping) stacked above the
           text on mobile, and switches back to the full-bleed absolute
           cover from `sm` up, matching the desktop look exactly as
           before. */
        <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
          <Image
            src={sector.heroImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: sector.heroImagePosition ?? 'center' }}
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
          {sector.heroSubtitle && (
            <p className="text-heading-sm font-medium text-accent-ink">{sector.heroSubtitle}</p>
          )}
          <p className={cn('max-w-measure text-text-inverse', hasLongTagline ? 'text-body-sm' : 'text-body-lg')}>
            {sector.tagline}
          </p>

          {(sector.heroCta || sector.heroSecondaryCta) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {sector.heroCta && (
                <Button variant="gold" size="lg" withArrow asChild className="group w-fit">
                  <Link href={sector.heroCta.href}>{sector.heroCta.label}</Link>
                </Button>
              )}
              {sector.heroSecondaryCta && (
                <Button variant="ghost-inverse" size="lg" asChild className="w-fit">
                  <Link href={sector.heroSecondaryCta.href}>{sector.heroSecondaryCta.label}</Link>
                </Button>
              )}
            </div>
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
