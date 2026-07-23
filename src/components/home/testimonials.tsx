'use client'

import { useReducedMotion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { InstitutionalTestimonial } from '@/components/cards/institutional-testimonial'
import { FadeIn } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import type { TestimonialItem } from '@/types'

const institutionalTestimonial = {
  quote:
    'Al Quba demonstrates a structured and transparent approach to investment management. The clarity in execution and consistency in communication reflect a strong operational framework.',
  name: 'Banger Financial Labs',
  role: 'Institutional Partner',
  logoSrc: '/banger-finlabs-logo.jpeg',
}

const individualTestimonials: TestimonialItem[] = [
  {
    quote: 'What we value most is the transparency. You always know where your money is going and how it’s working.',
    name: 'Sidra Aydeed',
    role: 'Investor',
  },
  {
    quote:
      'Al Quba has consistently delivered on what they promised — the returns have been strong, and I always know exactly where my capital stands.',
    name: 'Basheer Ayathulla',
    role: 'Investor',
  },
  {
    quote:
      'The level of service is what stands out most. Every question is answered directly, and the results have exceeded what I expected going in.',
    name: 'Ashraf Mavullah',
    role: 'Investor',
  },
]

// Duplicated so the track can loop seamlessly from -50% back to 0%,
// same technique as the TrustIndicators logo marquee.
const testimonialTrack = [...individualTestimonials, ...individualTestimonials]

/**
 * Section 9.5 — Testimonials.
 * One institutional quote (horizontal spotlight) followed by a
 * continuously scrolling marquee of individual investor quotes — same
 * constant-speed CSS transform technique as the TrustIndicators logo
 * strip, rather than a static grid. Falls back to a plain wrapped row
 * for reduced-motion preferences.
 */
export function Testimonials() {
  const prefersReduced = useReducedMotion()

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our partners say"
        description="Direct feedback from the institutions and individual investors we work alongside."
      />
      <div className="mt-16 flex flex-col gap-8">
        <FadeIn>
          <InstitutionalTestimonial {...institutionalTestimonial} />
        </FadeIn>
        <FadeIn>
          {prefersReduced ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {individualTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          ) : (
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              <div className={cn('flex w-max gap-6 will-change-transform', 'animate-marquee')}>
                {testimonialTrack.map((testimonial, i) => (
                  <div key={`${testimonial.name}-${i}`} className="w-[380px] shrink-0">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
