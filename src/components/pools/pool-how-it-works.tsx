import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import type { PoolStep } from '@/lib/pools-data'

/**
 * Pool Detail / How It Works.
 * A four-step numbered sequence laid out as connected columns rather than
 * cards or a vertical timeline — distinct from every prior list pattern
 * on the site (Investment Sectors' rows, About's Timeline, Governance's
 * definition list).
 */
export function PoolHowItWorks({ steps }: { steps: PoolStep[] }) {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SectionHeading eyebrow="How It Works" title="One trade cycle, start to finish" />

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
