import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { InstitutionalTestimonial } from '@/components/cards/institutional-testimonial'
import { FadeIn } from '@/components/motion/reveal'

const institutionalTestimonial = {
  quote:
    'Al Quba demonstrates a structured and transparent approach to investment management. The clarity in execution and consistency in communication reflect a strong operational framework.',
  name: 'Banger Financial Labs',
  role: 'Institutional Partner',
}

const individualTestimonial = {
  quote: 'What we value most is the transparency. You always know where your money is going and how it’s working.',
  name: 'Sidra Aydeed',
  role: 'Investor',
}

/**
 * Section 9.5 — Testimonials.
 * One institutional quote (horizontal spotlight) and one individual
 * quote (standalone pull-quote) — deliberately not a repeating grid,
 * since each testimonial type now has its own distinct composition.
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
        <FadeIn delay={0.08}>
          <TestimonialCard {...individualTestimonial} />
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
