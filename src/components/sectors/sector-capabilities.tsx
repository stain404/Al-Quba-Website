import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import { Stagger } from '@/components/motion/reveal'
import type { SectorCapability, SectionHeadingOverride } from '@/lib/sectors-data'

/**
 * Sector Detail / Capabilities.
 * Reuses the FeatureCard grid exactly as built — same pattern as
 * PoolRisks. Icons are rendered to JSX here, before crossing into the
 * client FeatureCard, since a bare component reference can't be passed
 * as a prop across the server/client boundary. When the sector has
 * onboarded portfolio companies, they're listed in a strip beneath the
 * grid rather than as a separate section — keeps the ink → canvas →
 * muted → canvas surface alternation intact even when a sector has no
 * companies to show yet.
 */
export function SectorCapabilities({
  capabilities,
  companies,
  heading,
  surface = 'muted',
}: {
  capabilities: SectorCapability[]
  companies?: string[]
  heading?: SectionHeadingOverride
  surface?: 'canvas' | 'muted'
}) {
  return (
    <SectionContainer surface={surface} spacing="lg">
      <SectionHeading
        eyebrow={heading?.eyebrow ?? 'Capabilities'}
        title={heading?.title ?? 'What this sector is built to do'}
        description={
          heading?.description ??
          'The specific functions our team performs to originate, structure, and manage every position in this sector.'
        }
      />
      <Stagger className="mt-16">
        <FeatureGrid>
          {capabilities.map((capability) => (
            <FeatureCard
              key={capability.title}
              icon={<capability.icon className="size-6" strokeWidth={1.5} aria-hidden />}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </FeatureGrid>
      </Stagger>

      {companies && companies.length > 0 && (
        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border-strong pt-10">
          <span className="text-caption uppercase tracking-wide text-text-tertiary">Portfolio Companies</span>
          {companies.map((company) => (
            <span
              key={company}
              className="inline-flex items-center rounded-full border border-border-strong bg-canvas-raised px-4 py-2 text-body-sm font-medium text-text-primary"
            >
              {company}
            </span>
          ))}
        </div>
      )}
    </SectionContainer>
  )
}
