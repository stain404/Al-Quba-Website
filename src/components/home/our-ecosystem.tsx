import Image from 'next/image'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

/**
 * Section 9 — Our Ecosystem.
 * A single graphic summarizing the partners and companies that make up
 * Al Quba's trade network.
 */
export function OurEcosystem() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SectionHeading eyebrow="Our Ecosystem" title="The partners behind our trade network" />
      <FadeIn className="mt-16">
        <div className="relative aspect-[1628/966] w-full overflow-hidden rounded-lg">
          <Image
            src="/portfolio.png"
            alt="Al Quba Investment ecosystem partners"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </FadeIn>
    </SectionContainer>
  )
}
