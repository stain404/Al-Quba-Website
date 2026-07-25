import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import { Stagger } from '@/components/motion/reveal'
import type { PoolRisk } from '@/lib/pools-data'

const copy = {
  en: { eyebrow: 'Risk & Safeguards', title: 'How this pool protects committed capital', description: 'Every structured pool at Al Quba is built around a specific set of protective mechanisms, not general disclaimers.' },
  ar: { eyebrow: 'المخاطر والضمانات', title: 'كيف يحمي هذا الصندوق رأس المال الملتزَم به', description: 'يُبنى كل صندوق منظم لدى القبا حول مجموعة محددة من آليات الحماية، وليس تنويهات عامة.' },
} as const

/**
 * Pool Detail / Risk & Safeguards.
 * Reuses the FeatureCard grid exactly as built — the content here
 * (three protective mechanisms) is precisely what that component was
 * designed for, so no bespoke layout is introduced.
 */
export async function PoolRisks({ risks }: { risks: PoolRisk[] }) {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
      <Stagger className="mt-16">
        <FeatureGrid>
          {risks.map((risk) => (
            <FeatureCard
              key={risk.title}
              icon={<risk.icon className="size-6" strokeWidth={1.5} aria-hidden />}
              title={risk.title}
              description={risk.description}
            />
          ))}
        </FeatureGrid>
      </Stagger>
    </SectionContainer>
  )
}
