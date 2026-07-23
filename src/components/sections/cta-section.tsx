import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/layout/section-container'
import { Heading } from '@/components/typography/heading'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'
import { ResponsiveHeroImage } from '@/components/media/responsive-hero-image'

export interface CTASectionProps {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  surface?: 'ink' | 'navy'
  /** Full-bleed photo background — defaults to the shared Dubai skyline
   *  banner used across every closing CTA on the site. When set (to any
   *  truthy src), content left-aligns over the image instead of
   *  centering on a flat surface color. Pass `""` to opt out entirely. */
  backgroundImageSrc?: string
}

/**
 * Full-width closing CTA — the standard "start a conversation" moment used
 * at the base of most marketing pages. Every instance shares the same
 * skyline photo background by default for visual consistency site-wide.
 */
export function CTASection({
  eyebrow = 'Get in touch',
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  surface = 'ink',
  backgroundImageSrc = '/footer-bg.png',
}: CTASectionProps) {
  const hasBackground = !!backgroundImageSrc

  return (
    <SectionContainer
      surface={surface}
      spacing="lg"
      contained={!hasBackground}
      className="relative overflow-hidden"
    >
      {hasBackground && (
        <>
          {/* Below `sm`, the full photo is shown via ResponsiveHeroImage's
              object-contain + blurred-backdrop treatment instead of the
              hard object-cover crop this banner used to force at every
              width. From `sm` up, unchanged plain object-cover fill. */}
          <ResponsiveHeroImage src={backgroundImageSrc} objectPosition="center 45%" />
          {/* Right-to-left gradient (opaque on the left) keeps the
              left-aligned text legible against a busy photo without
              flattening the image entirely on the right. Uses a warm
              near-black instead of the brand `ink` navy — ink stacked on
              top of this photo's own deep-blue sky read as a flat blue
              block; a warm dark tone blends into the sunset instead.
              Lighter on mobile, where the blurred backdrop underneath
              already softens the photo and the text sits on its own
              frosted-glass panel below — the original (heavier, proven)
              desktop values are untouched from `sm` up. */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/45 via-[#1A140F]/20 to-transparent sm:from-[#1A140F] sm:via-[#1A140F]/60 sm:to-[#1A140F]/10"
            aria-hidden
          />
        </>
      )}

      {/* When there's a background image, SectionContainer's automatic
          content wrapper is skipped (contained=false above) so this div
          can carry position:relative + z-10, guaranteeing it paints above
          the plain position:absolute image/gradient regardless of DOM
          nesting — simpler and more robust than a negative z-index on
          the background layer. */}
      <div className={cn(hasBackground && 'container relative z-10 mx-auto max-w-container')}>
        <FadeIn
          className={cn(
            'flex flex-col gap-8',
            hasBackground
              ? // Mobile: a subtle frosted-glass panel behind the text —
                // blurred, barely-there, so the photo still reads through
                // it — since the photo now sits closer to full-strength
                // behind it (lighter gradient above). Unstyled from `sm`
                // up, matching the original design exactly.
                'items-start rounded-2xl border border-white/10 bg-white/8 p-6 text-left backdrop-blur-md sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none'
              : 'items-center text-center'
          )}
        >
          <span className="text-eyebrow uppercase text-accent-ink">{eyebrow}</span>
          <Heading as="h2" size="display-md" inverse className={cn(hasBackground ? 'max-w-2xl' : 'max-w-3xl')}>
            {title}
          </Heading>
          {description && (
            <p className="max-w-measure text-body-lg text-text-inverse">{description}</p>
          )}
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button variant="gold" size="lg" withArrow asChild className="group">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button variant="ghost-inverse" size="lg" asChild>
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
