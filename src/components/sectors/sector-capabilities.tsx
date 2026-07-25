import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard } from '@/components/cards/feature-card'
import { Stagger } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import type { SectorCapability, SectionHeadingOverride } from '@/lib/sectors-data'

const copy = {
  en: {
    eyebrow: 'Capabilities',
    title: 'What this sector is built to do',
    description: 'The specific functions our team performs to originate, structure, and manage every position in this sector.',
    portfolioCompanies: 'Portfolio Companies',
  },
  ar: {
    eyebrow: 'القدرات',
    title: 'ما بُني هذا القطاع لتحقيقه',
    description: 'الوظائف المحددة التي يؤديها فريقنا لاستحداث وهيكلة وإدارة كل مركز استثماري في هذا القطاع.',
    portfolioCompanies: 'الشركات التابعة',
  },
} as const

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
export async function SectorCapabilities({
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
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface={surface} spacing="lg">
      <SectionHeading
        eyebrow={heading?.eyebrow ?? c.eyebrow}
        title={heading?.title ?? c.title}
        description={heading?.description ?? c.description}
      />
      <Stagger className="mt-16">
        {/* Column count adapts to item count so a grid never leaves a
            single card orphaned on its own row (e.g. four items reads
            far better as a balanced 2x2 than a 3+1). */}
        <div
          className={cn(
            'grid grid-cols-1 gap-6',
            capabilities.length % 3 === 0 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'
          )}
        >
          {capabilities.map((capability) => (
            <FeatureCard
              key={capability.title}
              icon={<capability.icon className="size-6" strokeWidth={1.5} aria-hidden />}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </Stagger>

      {companies && companies.length > 0 && (
        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-border-strong pt-10">
          <span className="text-caption uppercase tracking-wide text-text-tertiary">{c.portfolioCompanies}</span>
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
