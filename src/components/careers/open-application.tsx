import { SectionContainer } from '@/components/layout/section-container'
import { Heading } from '@/components/typography/heading'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'

export function OpenApplication() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <FadeIn className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="h-px w-10 bg-accent" aria-hidden />
          <span className="text-eyebrow uppercase tracking-[0.22em] text-text-tertiary">
            Open Application
          </span>
        </div>

        <Heading as="h2" size="display-md" className="max-w-2xl text-text-primary">
          We're Always Looking for Exceptional Talent
        </Heading>

        <p className="max-w-measure text-body-lg leading-relaxed text-text-secondary">
          Even if you don't see a suitable opportunity today, we'd love to hear from
          professionals who share our commitment to excellence, integrity, and long-term
          growth.
        </p>

        <Button variant="gold" size="lg" withArrow asChild className="group mt-2">
          <a href="mailto:careers@alqubainvestment.com?subject=Open Application">
            Submit Your Resume
          </a>
        </Button>
      </FadeIn>
    </SectionContainer>
  )
}
