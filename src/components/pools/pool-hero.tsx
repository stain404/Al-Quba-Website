import { Eyebrow, Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'
import type { Pool } from '@/lib/pools-data'
import { getPoolIcon } from '@/lib/pools-data'

/**
 * Pool Detail / Hero.
 * Ink surface with a sector icon badge in place of the skyline motif used
 * on the Home hero — keeps the visual language consistent (eyebrow, gold
 * hairline, inline metrics) without reusing the exact same composition.
 */
export function PoolHero({ pool }: { pool: Pool }) {
  const Icon = getPoolIcon(pool.slug)

  return (
    <SectionContainer surface="ink" spacing="lg" as="header">
      <FadeIn className="flex max-w-3xl flex-col gap-8 pt-16">
        <div className="flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-md bg-accent/12 text-accent-ink">
            <Icon className="size-6" strokeWidth={1.5} aria-hidden />
          </span>
          <Eyebrow inverse>{pool.category}</Eyebrow>
        </div>

        <Heading as="h1" size="display-lg" inverse>
          {pool.name}
        </Heading>
        <p className="max-w-measure text-body-lg text-text-inverse-muted">{pool.tagline}</p>

        <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-border-ink pt-8">
          {pool.heroMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <dt className="text-caption uppercase tracking-wide text-text-inverse-muted">{metric.label}</dt>
              <dd className="font-mono text-data-md text-accent-ink">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </SectionContainer>
  )
}
