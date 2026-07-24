import Image from 'next/image'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'

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
      {/* Below `sm`, a full-height (very tall/narrow) mobile viewport
          forced this landscape photo to cover it at ~4x zoom, leaving
          only a sliver of width visible. Instead, the photo now sits in
          its own horizontal band (aspect-[3/2] — close to the photo's
          own ratio, so only mild cropping) stacked above the text on
          mobile, and switches back to the full-bleed absolute cover
          from `sm` up, matching the desktop look exactly as before. */}
      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
        <Image
          src="/contact.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
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
            Connect Directly With Our Investment Team
          </Heading>
          <p className="max-w-measure text-body-lg text-text-inverse">
            Whether you&rsquo;re an institutional investor, family office,
            strategic partner, or prospective client, our investment team is
            here to understand your objectives and provide tailored guidance
            with professionalism and discretion.
          </p>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
