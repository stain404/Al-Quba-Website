import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import type { SectorStep, SectionHeadingOverride } from '@/lib/sectors-data'

/**
 * Sector Detail / Process.
 * The same connected-column numbered sequence used by PoolHowItWorks.
 * Grid columns adapt to step count — four-step cycles get a single row
 * of four, six-step "journey" sequences (division pages) get two rows
 * of three, which reads more comfortably than six narrow columns.
 */
export function SectorProcess({
  steps,
  heading,
  surface = 'canvas',
}: {
  steps: SectorStep[]
  heading?: SectionHeadingOverride
  surface?: 'canvas' | 'muted'
}) {
  return (
    <SectionContainer surface={surface} spacing="lg">
      <SectionHeading eyebrow={heading?.eyebrow ?? 'How It Works'} title={heading?.title ?? 'From origination to close'} />

      <Stagger className="mt-16">
        <ol className={cn('grid grid-cols-1 gap-10 sm:grid-cols-2', steps.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4')}>
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
