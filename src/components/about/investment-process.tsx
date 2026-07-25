import { getLocale } from 'next-intl/server'
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

const icons: LucideIcon[] = [Users, Target, PieChart, TrendingUp, Wallet]

const copy = {
  en: {
    eyebrow: 'Our Process',
    title: 'A structured investment process',
    description: 'From consultation to returns, every step is designed for clarity, control, and long-term success.',
    steps: [
      { title: 'Consultation & Profiling', description: 'We assess your objectives, risk appetite, and capital allocation strategy.' },
      { title: 'Pool Selection', description: 'You’re matched to structured opportunities aligned with defined return cycles.' },
      { title: 'Capital Deployment', description: 'Funds are deployed into asset-backed trading or investment pools.' },
      { title: 'Profit Execution', description: 'Returns are generated through managed cycles and disciplined execution.' },
      { title: 'Distribution & Exit', description: 'Profits are distributed on a defined schedule, with clear exit options.' },
    ],
  },
  ar: {
    eyebrow: 'منهجيتنا',
    title: 'عملية استثمار منظمة',
    description: 'من الاستشارة إلى العائد، كل خطوة مصممة لتحقيق الوضوح والتحكم والنجاح طويل الأمد.',
    steps: [
      { title: 'الاستشارة وتحديد الملف الاستثماري', description: 'نقيّم أهدافك ومدى تحملك للمخاطر واستراتيجية تخصيص رأس المال.' },
      { title: 'اختيار الصندوق', description: 'يتم توجيهك نحو فرص منظمة تتماشى مع دورات عائد محددة.' },
      { title: 'نشر رأس المال', description: 'يتم توظيف الأموال في تجارة أو صناديق استثمارية مضمونة بأصول.' },
      { title: 'تحقيق الأرباح', description: 'تتحقق العوائد من خلال دورات مُدارة وتنفيذ منضبط.' },
      { title: 'التوزيع والخروج', description: 'تُوزَّع الأرباح وفق جدول محدد، مع خيارات خروج واضحة.' },
    ],
  },
} as const

/**
 * About / Investment Process.
 * A five-node, dashed-connector step tracker in the slot Governance used
 * to occupy — distinct from the numbered-column pattern SectorProcess/
 * PoolHowItWorks use, since this is a single continuous cycle
 * (consultation through exit) rather than a per-sector origination
 * sequence.
 */
export async function InvestmentProcess() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]
  const steps = c.steps.map((step, index) => ({ ...step, icon: icons[index] }))

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} align="center" />

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
