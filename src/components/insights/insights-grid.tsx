'use client'

import * as React from 'react'
import { Search } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { BlogCard, BlogGrid } from '@/components/cards/blog-card'
import { Stagger } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import { articles, categories as articleCategories } from '@/lib/insights-data'

const categories = ['All', ...articleCategories] as const
type Category = (typeof categories)[number]

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
