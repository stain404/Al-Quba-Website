'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import { Search } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { BlogCard, BlogGrid } from '@/components/cards/blog-card'
import { Stagger } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import { getArticles, getCategories } from '@/lib/insights-data'

const copy = {
  en: {
    eyebrow: 'All Articles',
    title: 'Browse by topic',
    all: 'All',
    filterLabel: 'Filter articles by category',
    searchPlaceholder: 'Search articles...',
    searchLabel: 'Search articles',
    noResults: 'No articles match your search. Try a different term or category.',
  },
  ar: {
    eyebrow: 'جميع المقالات',
    title: 'تصفح حسب الموضوع',
    all: 'الكل',
    filterLabel: 'تصفية المقالات حسب الفئة',
    searchPlaceholder: 'ابحث في المقالات...',
    searchLabel: 'ابحث في المقالات',
    noResults: 'لا توجد مقالات مطابقة لبحثك. جرّب مصطلحًا أو فئة مختلفة.',
  },
} as const

/**
 * Insights / Category Grid.
 * Same filterable-tabs pattern established on the Portfolio page, applied
 * here to article categories rather than sectors — a deliberately
 * consistent interaction model reused where it fits, not reinvented.
 */
export function InsightsGrid() {
  const locale = useLocale() as keyof typeof copy
  const c = copy[locale]
  const articles = React.useMemo(() => getArticles(locale), [locale])
  const categories = React.useMemo(() => [c.all, ...getCategories(locale)], [locale, c.all])

  const [active, setActive] = React.useState<string>(c.all)
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    setActive(c.all)
  }, [locale, c.all])

  const byCategory = active === c.all ? articles : articles.filter((a) => a.category === active)
  const q = query.trim().toLowerCase()
  const filtered = q
    ? byCategory.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
    : byCategory

  return (
    <SectionContainer id="articles" surface="muted" spacing="lg">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label={c.filterLabel} className="flex flex-wrap gap-2">
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
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-text-tertiary rtl:left-auto rtl:right-3.5"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={c.searchPlaceholder}
              aria-label={c.searchLabel}
              className="h-11 w-full rounded-full border border-border-strong bg-canvas-raised pl-10 pr-4 text-body-sm text-text-primary placeholder:text-text-tertiary transition-colors duration-150 ease-institutional hover:border-text-tertiary focus-visible:outline-none focus-visible:shadow-focus focus-visible:border-focus rtl:pl-4 rtl:pr-10"
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
          <p className="text-body-md text-text-secondary">{c.noResults}</p>
        )}
      </div>
    </SectionContainer>
  )
}
