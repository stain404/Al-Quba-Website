import type { LucideIcon } from 'lucide-react'
import { Users, Target, PieChart, TrendingUp, Wallet } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'

interface ProcessStep {
  icon: LucideIcon
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    icon: Users,
    title: 'Consultation & Profiling',
    description: 'We assess your objectives, risk appetite, and capital allocation strategy.',
  },
  {
    icon: Target,
    title: 'Pool Selection',
    description: 'You’re matched to structured opportunities aligned with defined return cycles.',
  },
  {
    icon: PieChart,
    title: 'Capital Deployment',
    description: 'Funds are deployed into asset-backed trading or investment pools.',
  },
  {
    icon: TrendingUp,
    title: 'Profit Execution',
    description: 'Returns are generated through managed cycles and disciplined execution.',
  },
  {
    icon: Wallet,
    title: 'Distribution & Exit',
    description: 'Profits are distributed on a defined schedule, with clear exit options.',
  },
]

/**
 * About / Investment Process.
 * A five-node, dashed-connector step tracker in the slot Governance used
 * to occupy — distinct from the numbered-column pattern SectorProcess/
 * PoolHowItWorks use, since this is a single continuous cycle
 * (consultation through exit) rather than a per-sector origination
 * sequence.
 */
export function InvestmentProcess() {
  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="Our Process"
        title="A structured investment process"
        description="From consultation to returns, every step is designed for clarity, control, and long-term success."
        align="center"
      />

      <Stagger className="mt-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-1 items-start lg:contents">
              <StaggerItem className="flex flex-1 flex-col items-center gap-3 text-center">
                <span className="font-mono text-caption text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex size-16 items-center justify-center rounded-full border border-border-strong text-accent">
                  <step.icon className="size-6" strokeWidth={1.5} aria-hidden />
                </span>
                <div className="flex flex-col gap-1 px-2">
                  <h3 className="text-body-md font-semibold text-text-primary">{step.title}</h3>
                  <p className="text-body-sm text-text-secondary">{step.description}</p>
                </div>
              </StaggerItem>

              {i < steps.length - 1 && (
                <div
                  className="mt-[52px] hidden h-px w-8 flex-none border-t-2 border-dashed border-border-strong lg:block xl:w-16"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </Stagger>
    </SectionContainer>
  )
}
