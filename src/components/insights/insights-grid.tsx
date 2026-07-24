'use client'

import * as React from 'react'
import { Search } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { BlogCard, BlogGrid } from '@/components/cards/blog-card'
import { Stagger } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import type { BlogPostItem } from '@/types'

const categories = ['All', 'Fundamentals', 'Strategy', 'Market Commentary', 'Press'] as const
type Category = (typeof categories)[number]

const articles: BlogPostItem[] = [
  {
    title: 'Understanding Structured Trade Pools',
    excerpt:
      'How pool-based investing differs from traditional fund structures — and what that distinction means for liquidity, transparency, and risk within a diversified investment portfolio.',
    category: 'Fundamentals',
    date: 'May 2026',
    readTime: '6 min read',
    href: '/insights',
  },
  {
    title: 'Reading a Trade Finance Term Sheet',
    excerpt:
      'A practical walkthrough of the terms every investor should scrutinize before committing capital to a trade finance cycle.',
    category: 'Fundamentals',
    date: 'April 2026',
    readTime: '8 min read',
    href: '/insights',
  },
  {
    title: 'Diversifying Beyond Public Markets',
    excerpt:
      'Why family offices and institutional investors are allocating a growing share of capital to real-asset and trade finance strategies as part of a disciplined diversification approach.',
    category: 'Strategy',
    date: 'March 2026',
    readTime: '5 min read',
    href: '/insights',
  },
  {
    title: 'Gulf Cold-Chain Demand in 2026',
    excerpt:
      'What rising frozen protein imports mean for trade finance volumes and capital deployment across Gulf markets.',
    category: 'Market Commentary',
    date: 'June 2026',
    readTime: '7 min read',
    href: '/insights',
  },
  {
    title: 'Cocoa Prices and What They Mean for Origination',
    excerpt:
      'How volatile spot pricing shapes origination economics for fixed-offtake structured pools, and what it signals for commodities-linked investment strategy.',
    category: 'Market Commentary',
    date: 'May 2026',
    readTime: '6 min read',
    href: '/insights',
  },
  {
    title: 'Al Quba Reaches a New Assets Under Management Milestone',
    excerpt:
      'A milestone update on portfolio growth, new institutional partnerships, and what it signals about investor confidence in our approach to capital management.',
    category: 'Press',
    date: 'June 2026',
    readTime: '3 min read',
    href: '/insights',
  },
  {
    title: 'Why We Underwrite Trade Cycles, Not Companies',
    excerpt:
      'Most private capital underwrites a business. We underwrite a single, physical trade cycle — here is why that distinction changes how risk gets managed.',
    category: 'Strategy',
    date: 'June 2026',
    readTime: '9 min read',
    href: '/insights',
  },
]

/**
 * Insights / Category Grid.
 * Same filterable-tabs pattern established on the Portfolio page, applied
 * here to article categories rather than sectors — a deliberately
 * consistent interaction model reused where it fits, not reinvented.
 */
export function InsightsGrid() {
  const [active, setActive] = React.useState<Category>('All')
  const [query, setQuery] = React.useState('')

  const byCategory = active === 'All' ? articles : articles.filter((a) => a.category === active)
  const q = query.trim().toLowerCase()
  const filtered = q
    ? byCategory.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
    : byCategory

  return (
    <SectionContainer id="articles" surface="muted" spacing="lg">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow="All Articles" title="Browse by topic" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

          <div className="relative w-full sm:w-64">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-text-tertiary"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="h-11 w-full rounded-full border border-border-strong bg-canvas-raised pl-10 pr-4 text-body-sm text-text-primary placeholder:text-text-tertiary transition-colors duration-150 ease-institutional hover:border-text-tertiary focus-visible:outline-none focus-visible:shadow-focus focus-visible:border-focus"
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <Stagger key={`${active}-${q}`}>
            <BlogGrid>
              {filtered.map((article) => (
                <BlogCard key={article.title} {...article} />
              ))}
            </BlogGrid>
          </Stagger>
        ) : (
          <p className="text-body-md text-text-secondary">
            No articles match your search. Try a different term or category.
          </p>
        )}
      </div>
    </SectionContainer>
  )
}
