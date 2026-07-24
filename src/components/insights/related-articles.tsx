import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { BlogCard, BlogGrid } from '@/components/cards/blog-card'
import { Stagger } from '@/components/motion/reveal'
import { getRelatedArticles } from '@/lib/insights-data'

/**
 * Article Detail / Related Articles — same-category pieces first, then
 * filled from the rest of the library. Reuses BlogCard/BlogGrid exactly
 * as they render on the main Insights listing.
 */
export function RelatedArticles({
  currentSlug,
  surface = 'canvas',
}: {
  currentSlug: string
  surface?: 'canvas' | 'muted'
}) {
  const related = getRelatedArticles(currentSlug, 3)
  if (related.length === 0) return null

  return (
    <SectionContainer surface={surface} spacing="lg">
      <SectionHeading eyebrow="Continue Reading" title="Related Articles" />
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
