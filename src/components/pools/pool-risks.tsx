import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import { Stagger } from '@/components/motion/reveal'
import type { PoolRisk } from '@/lib/pools-data'

/**
 * Pool Detail / Risk & Safeguards.
 * Reuses the FeatureCard grid exactly as built — the content here
 * (three protective mechanisms) is precisely what that component was
 * designed for, so no bespoke layout is introduced.
 */
export function PoolRisks({ risks }: { risks: PoolRisk[] }) {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SectionHeading
        eyebrow="Risk & Safeguards"
        title="How this pool protects committed capital"
        description="Every structured pool at Al Quba is built around a specific set of protective mechanisms, not general disclaimers."
      />
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
