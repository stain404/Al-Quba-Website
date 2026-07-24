import Image from 'next/image'
import { Calendar, Clock, User } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Heading } from '@/components/typography/heading'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/motion/reveal'
import type { Article } from '@/lib/insights-data'

/**
 * Article Detail / Hero — the same ink-surface, photo-backed header used
 * by SectorHero and InsightsHero (mobile: photo in its own aspect-[3/2]
 * band above the text; `sm` and up: full-bleed absolute background with
 * text overlaid). Long titles drop to a smaller display size rather than
 * wrapping across an excessive number of lines.
 */
export function ArticleHero({ article }: { article: Article }) {
  const isLongTitle = article.title.length > 70

  return (
    <SectionContainer
      surface="ink"
      spacing="lg"
      as="header"
      contained={false}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#1A140F] sm:items-center"
    >
      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
        <Image src={article.imageSrc} alt="" fill sizes="100vw" priority className="object-cover" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/70 via-[#1A140F]/40 to-[#1A140F]/10"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-container">
        <FadeIn className="flex max-w-3xl flex-col gap-6 pt-16">
          <Badge variant="gold" className="w-fit">
            {article.category}
          </Badge>
          <Heading as="h1" size={isLongTitle ? 'display-md' : 'display-lg'} inverse className="font-nav">
            {article.title}
          </Heading>
          <div className="flex flex-wrap items-center gap-5 text-caption uppercase tracking-wide text-text-inverse-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" strokeWidth={1.5} aria-hidden />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" strokeWidth={1.5} aria-hidden />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="size-3.5" strokeWidth={1.5} aria-hidden />
              {article.author}
            </span>
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
