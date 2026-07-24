import Link from 'next/link'
import { Download } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Heading } from '@/components/typography/heading'
import { SectionContainer } from '@/components/layout/section-container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/motion/reveal'
import type { Pool } from '@/lib/pools-data'
import { getPoolIcon } from '@/lib/pools-data'

/**
 * Pool Detail / Dashboard Hero.
 * A two-column "executive dashboard" alternative to the classic PoolHero
 * (full-bleed photo, single centered column) — used only when a pool
 * supplies `heroDashboard`/`heroFeatures` data. Kept as a separate
 * component rather than a mode switch inside PoolHero since the two
 * layouts share almost no markup: this one is a light-on-dark editorial
 * split (metrics dashboard + vertical feature list), not a photo hero.
 * Stays on the `ink` surface (not canvas) specifically so the fixed,
 * transparent-over-hero Navbar — styled for a dark first section on
 * every other page — still reads correctly here.
 */
export function PoolDashboardHero({ pool }: { pool: Pool }) {
  const Icon = getPoolIcon(pool.slug)
  const isOpen = pool.status.toLowerCase().includes('open')
  const dashboard = pool.heroDashboard ?? []
  const features = pool.heroFeatures ?? []

  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      className="flex min-h-screen w-full items-center overflow-hidden"
    >
      <div className="grid w-full grid-cols-1 gap-16 pt-24 lg:grid-cols-2 lg:items-start lg:gap-20 lg:pt-16">
        {/* LEFT COLUMN — identity, copy, dashboard, CTAs */}
        <FadeIn className="flex flex-col gap-8">
          {pool.poolNumber && (
            <span className="inline-flex w-fit items-center rounded-full border border-border-ink px-3.5 py-1.5 text-caption font-mono uppercase tracking-wide text-text-inverse-muted">
              Pool {String(pool.poolNumber).padStart(2, '0')}
            </span>
          )}

          <div className="flex flex-col gap-3">
            <Heading as="h1" size="display-md" inverse className="font-nav">
              {pool.name}
            </Heading>
            <span className="text-caption font-semibold uppercase tracking-wide text-accent-ink">
              {pool.category}
            </span>
          </div>

          <p className="max-w-measure text-body-lg text-text-inverse-muted">{pool.tagline}</p>

          {dashboard.length > 0 && (
            <div className="relative overflow-hidden rounded-lg border border-border-ink bg-ink-raised p-8">
              {/* Large, low-opacity sector icon — a quiet decorative
                  accent rather than a literal illustration, since no
                  travel photography/artwork exists to place here. */}
              <Icon
                className="pointer-events-none absolute -right-8 -top-8 size-40 text-white/[0.04]"
                strokeWidth={1}
                aria-hidden
              />
              <dl className="relative flex flex-col">
                {dashboard.map((item, i) => (
                  <div
                    key={item.label}
                    className={cn('flex items-center justify-between gap-6 py-4', i > 0 && 'border-t border-border-ink')}
                  >
                    <div className="flex flex-col gap-1">
                      <dt className="text-caption uppercase tracking-wide text-text-inverse-muted">{item.label}</dt>
                      {item.disclaimer && (
                        <span className="max-w-[220px] text-caption italic text-text-inverse-muted/70">
                          {item.disclaimer}
                        </span>
                      )}
                    </div>
                    <dd className="flex flex-col items-end gap-0.5 text-right">
                      {item.isStatus ? (
                        <Badge variant="success">{item.value}</Badge>
                      ) : (
                        <span className="font-mono text-data-md text-accent-ink">{item.value}</span>
                      )}
                      {item.detail && (
                        <span className="text-body-sm text-text-inverse-muted">{item.detail}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button variant="gold" size="lg" withArrow asChild className="group">
              <Link href={isOpen ? '/contact' : '/#pools'}>
                {isOpen ? 'Invest Now' : 'Explore Other Investment Pools'}
              </Link>
            </Button>
            <Button variant="ghost-inverse" size="lg" asChild>
              <Link href="/contact">Enquire Now</Link>
            </Button>
            {pool.brochureUrl && (
              <Button variant="ghost-inverse" size="lg" asChild>
                {pool.brochureUrl.startsWith('http') || pool.brochureUrl.endsWith('.pdf') ? (
                  <a href={pool.brochureUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Download className="size-4" strokeWidth={1.5} aria-hidden />
                    Download Investment Brochure
                  </a>
                ) : (
                  <Link href={pool.brochureUrl} className="inline-flex items-center gap-2">
                    <Download className="size-4" strokeWidth={1.5} aria-hidden />
                    Download Investment Brochure
                  </Link>
                )}
              </Button>
            )}
          </div>
        </FadeIn>

        {/* RIGHT COLUMN — vertical feature panel */}
        {features.length > 0 && (
          <FadeIn delay={0.1} className="flex flex-col lg:pt-2">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={cn('flex flex-col gap-3 py-7', i > 0 && 'border-t border-border-ink')}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-white/8 text-accent-ink">
                  <feature.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="text-heading-md font-semibold text-text-inverse">{feature.title}</h3>
                <p className="text-body-sm text-text-inverse-muted">{feature.description}</p>
              </div>
            ))}
          </FadeIn>
        )}
      </div>
    </SectionContainer>
  )
}
