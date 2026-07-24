import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/sections/cta-section'
import { ArticleHero } from '@/components/insights/article-hero'
import { ArticleBody } from '@/components/insights/article-body'
import { ArticleKeyTakeaways } from '@/components/insights/article-key-takeaways'
import { RelatedArticles } from '@/components/insights/related-articles'
import { NewsletterSignup } from '@/components/insights/newsletter-signup'
import { getAllArticles, getArticleBySlug } from '@/lib/insights-data'
import { navSections } from '@/lib/site-config'
import { buildMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

interface ArticlePageProps {
  params: { slug: string }
}

/** Pre-render every article page (featured + all category pieces) at build time. */
export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    image: article.imageSrc,
  })
}

/**
 * Article Detail — one template shared by every Insights piece, matching
 * the same design language as the Sector/Pool detail pages: ink-surface
 * photo hero, prose body, a closing key-takeaways card, related reading,
 * a closing CTA, and the newsletter signup.
 */
export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
      />
      <Navbar sections={navSections} />
      <main>
        <ArticleHero article={article} />
        <ArticleBody body={article.body} />
        <ArticleKeyTakeaways items={article.keyTakeaways} />
        <RelatedArticles currentSlug={article.slug} surface="canvas" />
        <CTASection
          title="Looking for Long-Term Investment Opportunities?"
          description="Explore Al Quba Investment's perspectives on trade, real estate, private markets, and global economic trends."
          primaryLabel="Explore Investment Opportunities"
          primaryHref="/#sectors"
        />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  )
}
