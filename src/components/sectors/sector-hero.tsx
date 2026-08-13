import { getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'
import type { Sector } from '@/lib/sectors-data'

const copy = {
  en: { investmentSector: 'Investment Sector', discussOpportunities: 'Discuss Opportunities', exploreDivision: 'Explore the Division' },
  ar: { investmentSector: 'قطاع استثماري', discussOpportunities: 'ناقش الفرص الاستثمارية', exploreDivision: 'استكشف القطاع' },
} as const

/**
 * Sector Detail / Hero.
 * Ink surface with a sector icon badge — the same composition as
 * PoolHero, reused deliberately since both are "detail page opens on a
 * dark surface" moments. When a sector supplies its own `heroHeadline`,
 * that replaces `name` as the H1 (with `name` moving to the eyebrow).
 * When a sector supplies `heroImage`, it's used as a full-bleed photo
 * background (same left-to-right scrim technique as Insights' hero)
 * instead of the plain ink surface.
 *
 * CTAs are standardized across every sector rather than sourced from
 * data: "Discuss Opportunities" always goes to Contact, "Explore the
 * Division" always smooth-scrolls to the About-the-Division section
 * (`#about-division`, see SectorOverview) — no per-sector variation,
 * by design. The old KPI strip (heroMetrics — "Active Trade Lines"
 * etc.) has been removed entirely to let the hero breathe; that data
 * still exists on `Sector` for the small metric pill shown on other
 * pages' Related Sectors cards, it just isn't rendered here anymore.
 */
export async function SectorHero({ sector }: { sector: Sector }) {
  const Icon = sector.icon
  const hasImage = !!sector.heroImage
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      contained={!hasImage}
      className={cn(
        'relative flex min-h-svh w-full flex-col overflow-hidden sm:items-center',
        // Below `sm` the photo is a band above the copy rather than behind
        // it, so this is the surface the text actually sits on — black, to
        // match the scrim covering the photo from `sm` up.
        hasImage && 'bg-black'
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
          {/* Flat black base under the ramp — a contrast floor the photo
              can't undercut wherever its bright areas fall. */}
          <div
            className={cn('absolute inset-0', sector.heroScrimSoft ? 'bg-black/15' : 'bg-black/40')}
            aria-hidden
          />
          {/* Black rather than the warm near-black this used to carry:
              the hero copy sits directly on it and needs the weight. The
              ramp still opens toward the right so the photo isn't
              flattened behind the empty half of the composition. The soft
              variant is for photos dark enough to carry the copy on their
              own — full weight on top of those reads as near-black. */}
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-r',
              sector.heroScrimSoft
                ? 'from-black/60 via-black/30 to-black/5'
                : 'from-black/85 via-black/60 to-black/20'
            )}
            aria-hidden
          />
        </div>
      )}

      <div className={cn(hasImage && 'container relative z-10 mx-auto max-w-container')}>
        <FadeIn onMount className="flex max-w-3xl flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-md bg-accent/12 text-accent-ink">
              <Icon className="size-6" strokeWidth={1.5} aria-hidden />
            </span>
            {/* Eyebrow's own `inverse` paints muted grey; the hero wants
                full white, and the colour lives on the inner span so it
                has to be reached past the wrapper. */}
            <Eyebrow inverse className="[&>span]:text-text-inverse">
              {sector.heroHeadline ? sector.name : c.investmentSector}
            </Eyebrow>
          </div>

          <Heading as="h1" size="display-lg" inverse className="font-nav">
            {sector.heroHeadline ?? sector.name}
          </Heading>
          {sector.heroSubtitle && (
            <p className="text-heading-md font-medium text-accent-ink">{sector.heroSubtitle}</p>
          )}
          {/* Long taglines used to drop to body-sm to fit; they now hold
              the same size as short ones and simply run longer. Shrinking
              the copy on exactly the sectors with the most to say was
              backwards. */}
          <p className="max-w-measure text-body-xl text-text-inverse">
            {sector.tagline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="gold" size="lg" withArrow asChild className="group w-full sm:w-fit">
              <Link href="/contact">{c.discussOpportunities}</Link>
            </Button>
            <Button variant="ghost-inverse" size="lg" asChild className="w-full sm:w-fit">
              <Link href="#about-division">{c.exploreDivision}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
