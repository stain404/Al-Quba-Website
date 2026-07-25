import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import { Stagger } from '@/components/motion/reveal'
import type { PoolHighlight } from '@/lib/pools-data'

const copy = {
  en: { eyebrow: 'Investment Highlights', title: 'What sets this fund apart', description: "The operational strengths behind this pool's structured trading cycles." },
  ar: { eyebrow: 'أبرز مزايا الاستثمار', title: 'ما يميز هذا الصندوق', description: 'نقاط القوة التشغيلية وراء دورات التداول المنظمة لهذا الصندوق.' },
} as const

/**
 * Pool Detail / Investment Highlights.
 * Reuses the same FeatureCard grid as Risk & Safeguards further down the
 * page — richer title+description cards, distinct from the short
 * checklist bullets already shown in the hero (which stay as-is).
 */
export async function PoolHighlights({ highlights }: { highlights: PoolHighlight[] }) {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
      <Stagger className="mt-16">
        <FeatureGrid>
          {highlights.map((highlight) => (
            <FeatureCard
              key={highlight.title}
              icon={<highlight.icon className="size-6" strokeWidth={1.5} aria-hidden />}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </FeatureGrid>
      </Stagger>
    </SectionContainer>
  )
}
