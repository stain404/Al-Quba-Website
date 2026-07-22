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
 * One institutional quote (horizontal spotlight) followed by a grid of
 * individual investor quotes — the institutional spotlight stays a
 * distinct composition rather than folding into the same grid.
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {individualTestimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.name} delay={0.06 * (i + 1)}>
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
