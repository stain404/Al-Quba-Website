import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import type { Sector } from '@/lib/sectors-data'

/**
 * Sector Detail / Overview.
 * Editorial split (label column + content) matching AboutPreview and
 * PoolStructure — here the wide column carries a heading, body copy, and
 * a single bordered stat callout rather than a definition list. Only
 * rendered by the page when a sector actually supplies an overview.
 */
export function SectorOverview({
  overview,
  surface = 'canvas',
}: {
  overview: NonNullable<Sector['overview']>
  surface?: 'canvas' | 'muted'
}) {
  return (
    <SectionContainer surface={surface} spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Overview</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-10">
          <FadeIn delay={0.05} className="flex flex-col gap-6">
            <Heading as="h2" size="display-sm" className="max-w-2xl">
              {overview.heading}
            </Heading>
            <p className="max-w-measure text-body-lg text-text-secondary">{overview.body}</p>
          </FadeIn>

          {overview.stat && (
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-1 border-t border-border-strong pt-6">
                <span className="font-mono text-data-lg text-accent-ink">{overview.stat.value}</span>
                <span className="text-body-sm text-text-secondary">{overview.stat.label}</span>
              </div>
            </FadeIn>
          )}
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
