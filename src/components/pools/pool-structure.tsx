import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import type { PoolStructureItem } from '@/lib/pools-data'

/**
 * Pool Detail / Structure.
 * Definition-list pattern (consistent with About's Governance section for
 * "the facts, plainly stated" moments) but scoped to this pool's specific
 * commercial terms rather than firm-wide governance.
 */
export function PoolStructure({ structure }: { structure: PoolStructureItem[] }) {
  return (
    <SectionContainer surface="muted" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Fund Details</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-10">
          <FadeIn delay={0.05}>
            <Heading as="h2" size="display-sm" className="max-w-xl">
              The terms behind this fund
            </Heading>
          </FadeIn>

          <dl className="flex flex-col">
            {structure.map((item, i) => (
              <FadeIn key={item.term} delay={0.05 + i * 0.04}>
                <div className="grid grid-cols-1 gap-2 border-t border-border-strong py-6 last:border-b sm:grid-cols-[220px_1fr] sm:gap-8">
                  <dt className="text-body-sm font-semibold text-text-primary">{item.term}</dt>
                  <dd className="max-w-measure text-body-md text-text-secondary">{item.detail}</dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
