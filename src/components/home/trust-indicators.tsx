'use client'

import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

interface Partner {
  name: string
  logoSrc?: string
}

const partners: Partner[] = [
  { name: 'Phew', logoSrc: '/phew.jpeg' },
  { name: 'Container Kart', logoSrc: '/containerkart.jpeg' },
  { name: 'Noble Star', logoSrc: '/noblestargrey.jpeg' },
  { name: 'Hebron', logoSrc: '/hebron.jpeg' },
  { name: 'Al Wahda', logoSrc: '/alwahda.jpeg' },
]

// Duplicated so the track can loop seamlessly from -50% back to 0%.
const track = [...partners, ...partners]

/**
 * Section 2 — Trusted Partners.
 * A continuously scrolling logo marquee in the same "quiet band beneath
 * the hero" slot the regulatory badges used to occupy — now foregrounding
 * the companies Al Quba works with. Driven by a plain CSS transform
 * animation (Tailwind's `animate-marquee`) rather than a Framer Motion
 * `animate` loop — the browser compositor handles a constant-speed
 * transform far more smoothly than a JS-recalculated one. Falls back to
 * a static row for reduced-motion preferences.
 */
export function TrustIndicators() {
  const prefersReduced = useReducedMotion()

  return (
    <SectionContainer surface="raised" spacing="sm" as="div">
      <FadeIn>
        <div className="overflow-hidden border-y border-border py-16">
          <div
            className={cn(
              'flex w-max items-center gap-28 will-change-transform',
              !prefersReduced && 'animate-marquee'
            )}
          >
            {track.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="relative flex h-28 w-80 shrink-0 items-center justify-center overflow-hidden rounded-md"
              >
                {partner.logoSrc ? (
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                ) : (
                  <span className="whitespace-nowrap text-heading-md font-display text-text-tertiary">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionContainer>
  )
}
