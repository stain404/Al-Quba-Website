'use client'

import * as React from 'react'
import { Link } from '@/i18n/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { BlogCard, BlogGrid } from '@/components/cards/blog-card'
import type { BlogPostItem } from '@/types'
import { featuredArticle, articles as insightArticles } from '@/lib/insights-data'

const articles: BlogPostItem[] = [
  featuredArticle,
  insightArticles.find((article) => article.slug === 'dubai-leads-global-trade-logistics')!,
  insightArticles.find((article) => article.slug === 'resilient-portfolios-alternative-investments')!,
]

const copy = {
  en: { eyebrow: 'Investor Education', title: 'Learn how we think before you invest', viewAll: 'View all resources' },
  ar: { eyebrow: 'تثقيف المستثمرين', title: 'تعرف على منهجنا قبل أن تستثمر', viewAll: 'عرض جميع الموارد' },
} as const

/**
 * The alternating offsets are designed for the multi-column grid, where
 * neighbouring cards sit side by side and their opposing travel never
 * interacts. Stacked into one column below `md`, those same neighbours
 * move *toward* each other — a ±90px pair closes 180px across a 40px
 * grid gap, so cards overlapped at some scroll positions and left a gulf
 * at others. Mobile keeps the effect at an amplitude the gap can absorb.
 */
const OFFSET = 90
const OFFSET_STACKED = 16

/**
 * Each card tracks its own scroll transit through the viewport and maps
 * that continuously to a vertical offset — alternating direction by index
 * (1st/3rd drop in from above, 2nd rises from below). Because it's one
 * continuous value rather than a one-shot trigger, the whole thing is
 * reversible: scrolling down carries a card past its resting point and
 * onward in the same direction it entered from; scrolling back up retraces
 * the exact same path, so cards reappear from the direction they last
 * exited toward.
 */
function AnimatedBlogCard({ article, index }: { article: BlogPostItem; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Matches BlogGrid's own `md:grid-cols-2` — the breakpoint at which
  // cards stop sharing a column.
  const [isStacked, setIsStacked] = React.useState(true)
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsStacked(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const offset = isStacked ? OFFSET_STACKED : OFFSET
  const fromAbove = index % 2 === 0
  // Settles at its resting position and holds there for a stretch (0.35
  // to 0.65) before continuing on in the same direction it entered from.
  const y = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    fromAbove ? [-offset, 0, 0, offset] : [offset, 0, 0, -offset]
  )
  // Stacked, a card occupies most of the viewport for its whole transit,
  // so the wide fade band left it visibly dimmed while it was the only
  // thing on screen. Mobile holds full opacity across a much longer
  // middle stretch and only fades at the very edges.
  const opacity = useTransform(
    scrollYProgress,
    isStacked ? [0, 0.12, 0.88, 1] : [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  )

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      <BlogCard {...article} wrap={false} />
    </motion.div>
  )
}

/**
 * Section 10 — Investor Education Preview.
 * The natural home for the BlogCard component — editorial imagery-led
 * grid, positioned just before the closing CTA to build confidence
 * ahead of the ask.
 */
export function InvestorEducationPreview() {
  const locale = useLocale() as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} className="md:max-w-xl" />
        <Link
          href="/insights"
          className="group inline-flex shrink-0 items-center gap-2 text-body-sm font-medium text-text-primary"
        >
          {c.viewAll}
          <ArrowRight className="size-4 rtl:rotate-180 transition-transform duration-200 ease-institutional group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden />
        </Link>
      </div>

      <div className="mt-16">
        <BlogGrid>
          {articles.map((article, index) => (
            <AnimatedBlogCard key={article.title} article={article} index={index} />
          ))}
        </BlogGrid>
      </div>
    </SectionContainer>
  )
}
