import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import type { SectorStep } from '@/lib/sectors-data'

/**
 * Sector Detail / Process.
 * The same connected-column numbered sequence used by PoolHowItWorks —
 * this content type (a linear four-step cycle) is identical in shape.
 */
export function SectorProcess({
  steps,
  surface = 'canvas',
}: {
  steps: SectorStep[]
  surface?: 'canvas' | 'muted'
}) {
  return (
    <SectionContainer surface={surface} spacing="lg">
      <SectionHeading eyebrow="How It Works" title="From origination to close" />

      <Stagger className="mt-16">
        <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <li className="relative flex flex-col gap-4 border-t-2 border-accent pt-6">
                <span className="font-mono text-data-md text-text-tertiary">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-heading-md font-semibold text-text-primary">{step.title}</h3>
                <p className="text-body-sm text-text-secondary">{step.description}</p>
              </li>
            </StaggerItem>
          ))}
        </ol>
      </Stagger>
    </SectionContainer>
  )
}
