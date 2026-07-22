import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { TestimonialCard, TestimonialGrid } from '@/components/cards/testimonial-card'
import { Stagger } from '@/components/motion/reveal'
import type { TestimonialItem } from '@/types'

const testimonials: TestimonialItem[] = [
  {
    quote:
      'Al Quba demonstrates a structured and transparent approach to investment management. The clarity in execution and consistency in communication reflect a strong operational framework.',
    name: 'Banger Financial Labs',
    role: 'Institutional Partner',
    type: 'institutional',
  },
  {
    quote:
      'What we value most is the transparency. You always know where your money is going and how it’s working.',
    name: 'Sidra Aydeed',
    role: 'Investor',
  },
  {
    quote:
      'Al Quba Investment has been an exceptional partner. Their discipline and transparency around every trade cycle gives our family office genuine confidence to deploy capital at scale.',
    name: 'Amara Reyes',
    role: 'Principal',
    company: 'Meridian Family Office',
  },
  {
    quote:
      "Working with Al Quba Investment LLC over the last three years, I've seen exactly the return discipline and reporting rigor institutional capital demands.",
    name: 'David Chen',
    role: 'Portfolio Director',
    company: 'Straits Capital Partners',
  },
  {
    quote:
      "From the first mandate onward, Al Quba Investment LLC treated our capital like their own. That stewardship is rare, and it's why we keep coming back.",
    name: 'Fatima Al Suwaidi',
    role: 'Managing Director',
    company: 'Suwaidi Holdings',
  },
]

/**
 * Section 9.5 — Testimonials.
 * Reuses the existing TestimonialCard grid as built, placed between the
 * Portfolio and Investor Education sections to break up two adjacent
 * canvas surfaces.
 */
export function Testimonials() {
  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our partners say"
        description="Direct feedback from the family offices, institutions, and individual investors we work alongside."
      />
      <Stagger className="mt-16">
        <TestimonialGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </TestimonialGrid>
      </Stagger>
    </SectionContainer>
  )
}
