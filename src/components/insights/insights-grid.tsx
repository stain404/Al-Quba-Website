'use client'

import * as React from 'react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { BlogCard, BlogGrid } from '@/components/cards/blog-card'
import { Stagger } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import type { BlogPostItem } from '@/types'

const categories = ['All', 'Fundamentals', 'Strategy', 'Market Commentary', 'Press'] as const
type Category = (typeof categories)[number]

const articles: BlogPostItem[] = [
  { title: 'Understanding Structured Trade Pools', excerpt: 'How pool-based investing differs from traditional fund structures, and what it means for liquidity.', category: 'Fundamentals', date: 'May 2026', readTime: '6 min read', href: '/insights/education/structured-trade-pools' },
  { title: 'Reading a Trade Finance Term Sheet', excerpt: 'A practical walkthrough of the terms that matter most before committing capital to a cycle.', category: 'Fundamentals', date: 'April 2026', readTime: '8 min read', href: '/insights/education/term-sheet-guide' },
  { title: 'Diversifying Beyond Public Markets', excerpt: 'Why family offices are allocating a growing share of capital to real-asset and trade strategies.', category: 'Strategy', date: 'March 2026', readTime: '5 min read', href: '/insights/education/beyond-public-markets' },
  { title: 'Gulf Cold-Chain Demand in 2026', excerpt: 'What rising frozen protein imports mean for trade financing volumes across the region.', category: 'Market Commentary', date: 'June 2026', readTime: '7 min read', href: '/insights/commentary/cold-chain-demand-2026' },
  { title: 'Cocoa Prices and What They Mean for Origination', excerpt: 'A look at how volatile spot pricing affects fixed-offtake structured pools.', category: 'Market Commentary', date: 'May 2026', readTime: '6 min read', href: '/insights/commentary/cocoa-prices-origination' },
  { title: 'Al Quba Crosses $480M in Assets Under Management', excerpt: 'A milestone update on portfolio growth and new institutional partnerships.', category: 'Press', date: 'June 2026', readTime: '3 min read', href: '/insights/press/480m-aum-milestone' },
  { title: 'Why We Underwrite Trade Cycles, Not Companies', excerpt: 'Most private capital underwrites a business. We underwrite a single, physical trade cycle — here is why.', category: 'Strategy', date: 'June 2026', readTime: '9 min read', href: '/insights/commentary/underwriting-trade-cycles' },
]

/**
 * Insights / Category Grid.
 * Same filterable-tabs pattern established on the Portfolio page, applied
 * here to article categories rather than sectors — a deliberately
 * consistent interaction model reused where it fits, not reinvented.
 */
export function InsightsGrid() {
  const [active, setActive] = React.useState<Category>('All')

  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active)

  return (
    <SectionContainer surface="muted" spacing="lg">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="All Articles" title="Browse by topic" />

        <div role="tablist" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full px-5 py-2.5 text-body-sm font-medium transition-colors duration-150 ease-institutional',
                'focus-visible:outline-none focus-visible:shadow-focus',
                active === category
                  ? 'bg-ink text-text-inverse'
                  : 'bg-canvas-raised text-text-secondary hover:text-text-primary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <Stagger key={active}>
          <BlogGrid>
            {filtered.map((article) => (
              <BlogCard key={article.title} {...article} />
            ))}
          </BlogGrid>
        </Stagger>
      </div>
    </SectionContainer>
  )
}
