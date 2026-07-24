import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { Badge } from '@/components/ui/badge'
import { Stagger, StaggerItem, FadeIn } from '@/components/motion/reveal'
import type { PoolSnapshotItem } from '@/lib/pools-data'

/**
 * Pool Detail / Investment Snapshot.
 * A quick-glance icon grid of the fund's key figures, immediately below
 * the hero — distinct from the plain definition-list "Fund Details"
 * section further down the page, which covers the same lock-in/cooling/
 * pool-age terms in more deliberate, one-at-a-time detail. This section
 * is the fast read; Fund Details is the fine print.
 */
export function PoolInvestmentSnapshot({
  overview,
  snapshot,
}: {
  overview: string
  snapshot: PoolSnapshotItem[]
}) {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Fund Overview</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-10">
          <FadeIn delay={0.05} className="flex flex-col gap-6">
            <Heading as="h2" size="display-sm" className="max-w-xl">
              Investment Snapshot
            </Heading>
            <p className="max-w-measure text-body-lg text-text-secondary">{overview}</p>
          </FadeIn>

          <Stagger>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {snapshot.map((item) => (
                <StaggerItem key={item.label}>
                  <Card
                    surface="canvas"
                    padding="md"
                    className="flex h-full flex-col gap-3 transition-all duration-200 ease-institutional hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy/6 text-navy">
                      <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-caption uppercase tracking-wide text-text-tertiary">{item.label}</span>
                      {item.isStatus ? (
                        <Badge variant="gold" className="w-fit">
                          {item.value}
                        </Badge>
                      ) : (
                        <span className="font-mono text-data-md text-text-primary">{item.value}</span>
                      )}
                      {item.detail && <span className="text-body-sm text-text-secondary">{item.detail}</span>}
                    </div>
                    {item.disclaimer && (
                      <p className="text-caption italic text-text-tertiary">{item.disclaimer}</p>
                    )}
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
