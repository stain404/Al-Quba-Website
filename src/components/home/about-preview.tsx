import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

/**
 * Section 3 — About Preview.
 * Editorial split: a narrow eyebrow/label column against a wide column
 * carrying the headline, copy, and a photography placeholder — distinct
 * from the centered hero and the dense trust band above it.
 */
export function AboutPreview() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Who We Are</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-14">
          <FadeIn delay={0.05} className="flex flex-col gap-6">
            <Heading as="h2" size="display-md" className="max-w-2xl">
              A private investment house built for generational capital.
            </Heading>
            <p className="max-w-measure text-body-lg text-text-secondary">
              Founded in Dubai, Al Quba Investment operates across five core
              sectors and a family of structured investment pools. We are
              deliberately small by design — every mandate is led directly
              by our principals, not delegated to a call center.
            </p>
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2 text-body-md font-medium text-text-primary"
            >
              Read our story
              <ArrowRight
                className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-canvas-muted">
              <Image
                src="/office.png"
                alt="Al Quba Investment leadership at the Dubai headquarters"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </FadeIn>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
