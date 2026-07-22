import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/motion/reveal'

const featured = {
  title: 'Why We Underwrite Trade Cycles, Not Companies',
  excerpt:
    'Most private capital underwrites a business. We underwrite a single, physical trade cycle — a shipment, a harvest, a season. Here is why that distinction changes everything about how risk gets managed.',
  category: 'Strategy',
  date: 'June 2026',
  readTime: '9 min read',
  href: '/insights',
}

/**
 * Insights / Featured Article.
 * A single large spotlight — full-width image field with text anchored
 * at the base, closer to a magazine cover than a card. Distinct from the
 * Home page's spotlight-plus-list Featured Portfolio pattern and from
 * Portfolio's alternating case-study rows: this is one piece, full focus.
 */
export function FeaturedArticle() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <FadeIn>
        <Link
          href={featured.href}
          className="group relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-lg bg-navy p-10 focus-visible:outline-none focus-visible:shadow-focus md:p-16"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(176,141,87,0.16),transparent_60%)] transition-transform duration-500 ease-institutional group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

          <div className="relative z-10 flex max-w-2xl flex-col gap-6">
            <Badge variant="gold" className="w-fit">
              Featured
            </Badge>
            <h2 className="text-display-md font-display leading-tight text-text-inverse">{featured.title}</h2>
            <p className="text-body-lg text-text-inverse-muted">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-caption uppercase tracking-wide text-text-inverse-muted">
              <span>{featured.category}</span>
              <span aria-hidden>&middot;</span>
              <span>{featured.date}</span>
              <span aria-hidden>&middot;</span>
              <span>{featured.readTime}</span>
            </div>
            <span className="inline-flex w-fit items-center gap-2 text-body-md font-medium text-accent-ink">
              Read the full piece
              <ArrowUpRight
                className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      </FadeIn>
    </SectionContainer>
  )
}
