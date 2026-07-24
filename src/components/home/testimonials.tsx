import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { InstitutionalTestimonial } from '@/components/cards/institutional-testimonial'
import { FadeIn } from '@/components/motion/reveal'
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

/**
 * Section 9.5 — Testimonials.
 * The institutional quote stays a full-width spotlight — logo left,
 * quote right — exactly as before. Below it, individual investor
 * testimonials are a plain 3-column grid on desktop rather than the
 * auto-scrolling marquee this replaced; on mobile they become a
 * horizontal, swipeable one-card-at-a-time carousel (native scroll-snap,
 * no JS), each card lifting slightly on hover.
 */
export function Testimonials() {
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
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {individualTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0 snap-center sm:w-auto">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
