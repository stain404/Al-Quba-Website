import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { BlogCard, BlogGrid } from '@/components/cards/blog-card'
import { Stagger } from '@/components/motion/reveal'
import { getRelatedArticles } from '@/lib/insights-data'

const copy = {
  en: { eyebrow: 'Continue Reading', title: 'Related Articles' },
  ar: { eyebrow: 'تابع القراءة', title: 'مقالات ذات صلة' },
} as const

/**
 * Article Detail / Related Articles — same-category pieces first, then
 * filled from the rest of the library. Reuses BlogCard/BlogGrid exactly
 * as they render on the main Insights listing.
 */
export function RelatedArticles({
  currentSlug,
  surface = 'canvas',
  locale = 'en',
}: {
  currentSlug: string
  surface?: 'canvas' | 'muted'
  locale?: string
}) {
  const related = getRelatedArticles(currentSlug, 3, locale)
  if (related.length === 0) return null
  const c = copy[locale as keyof typeof copy] ?? copy.en

  return (
    <SectionContainer surface={surface} spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} />
      <Stagger className="mt-16">
        <BlogGrid>
          {related.map((article) => (
            <BlogCard key={article.slug} {...article} />
          ))}
        </BlogGrid>
      </Stagger>
    </SectionContainer>
  )
}
