import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'

/**
 * Contact / Hero.
 * Same quiet ink header rhythm used across About, Portfolio, Pools, and
 * Insights — this page's substance is the form below, not the header.
 */
export function ContactHero() {
  return (
    <SectionContainer surface="ink" spacing="lg" as="header">
      <FadeIn className="flex max-w-3xl flex-col gap-8 pt-16">
        <Eyebrow inverse>Contact</Eyebrow>
        <Heading as="h1" size="display-lg" inverse>
          Speak with a principal, not a call center.
        </Heading>
        <p className="max-w-measure text-body-lg text-text-inverse-muted">
          Every inquiry is reviewed personally by our investment team. Tell
          us about your objectives and we&rsquo;ll respond within one
          business day.
        </p>
      </FadeIn>
    </SectionContainer>
  )
}
