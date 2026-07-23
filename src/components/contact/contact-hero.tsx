import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'
import { ResponsiveHeroImage } from '@/components/media/responsive-hero-image'

/**
 * Contact / Hero.
 * Same quiet ink header rhythm used across About, Portfolio, Pools, and
 * Insights — this page's substance is the form below, not the header.
 * Full-bleed photo background (same left-to-right scrim technique as
 * SectorHero/PoolHero) instead of the plain ink surface.
 */
export function ContactHero() {
  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      contained={false}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#1A140F] sm:items-center"
    >
      {/* Below `sm`, the photo sits in its own horizontal band
          (aspect-[3/2]) stacked above the text, shown in full via
          ResponsiveHeroImage's object-contain + blurred-backdrop
          treatment — no cropping. Switches back to the full-bleed
          absolute object-cover from `sm` up, matching the desktop look
          exactly as before. */}
      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
        <ResponsiveHeroImage src="/contact.png" priority />
        {/* Warm near-black instead of the brand `ink` navy — ink stacked
            on a photo reads as a flat blue block (see CTASection /
            SectorHero); a warm dark tone blends into the photo instead. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/70 via-[#1A140F]/40 to-[#1A140F]/10"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-container">
        <FadeIn className="flex max-w-3xl flex-col gap-8 pt-16">
          <Eyebrow inverse>Contact</Eyebrow>
          <Heading as="h1" size="display-lg" inverse className="font-nav">
            Speak with a principal, not a call center.
          </Heading>
          <p className="max-w-measure text-body-lg text-text-inverse">
            Every inquiry is reviewed personally by our investment team. Tell
            us about your objectives and we&rsquo;ll respond within one
            business day.
          </p>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
