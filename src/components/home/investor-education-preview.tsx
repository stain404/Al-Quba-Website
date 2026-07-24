'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
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

const OFFSET = 90

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

  const fromAbove = index % 2 === 0
  // Settles at its resting position and holds there for a stretch (0.35
  // to 0.65) before continuing on in the same direction it entered from.
  const y = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    fromAbove ? [-OFFSET, 0, 0, OFFSET] : [OFFSET, 0, 0, -OFFSET]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])

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
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Investor Education"
          title="Learn how we think before you invest"
          className="md:max-w-xl"
        />
        <Link
          href="/insights"
          className="group inline-flex shrink-0 items-center gap-2 text-body-sm font-medium text-text-primary"
        >
          View all resources
          <ArrowRight className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1" aria-hidden />
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
