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
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#1A140F]"
    >
      {/* Below `sm`, a landscape photo forced to cover a full-height
          (very tall/narrow) mobile viewport has to zoom in so far that
          only a sliver of its width stays visible. Showing the whole
          photo (contain) on narrow screens and only cropping to fill
          (cover) once the viewport is wide enough keeps the image's
          actual content visible. */}
      <Image
        src="/contact.png"
        alt=""
        fill
        sizes="100vw"
        className="object-contain sm:object-cover"
        priority
      />
      {/* Warm near-black instead of the brand `ink` navy — ink stacked
          on a photo reads as a flat blue block (see CTASection /
          SectorHero); a warm dark tone blends into the photo instead. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/70 via-[#1A140F]/40 to-[#1A140F]/10"
        aria-hidden
      />

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
