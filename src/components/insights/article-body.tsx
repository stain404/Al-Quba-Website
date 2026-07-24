import Image from 'next/image'
import { SectionContainer } from '@/components/layout/section-container'
import { Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import type { ArticleBlock } from '@/lib/insights-data'

/**
 * Article Detail / Body — renders the article's structured content
 * blocks (paragraph, H2/H3 heading, list, inline image) as a single
 * measure-width prose column, using the same typographic scale as every
 * other long-form section on the site rather than a rich-text renderer.
 */
export function ArticleBody({ body }: { body: ArticleBlock[] }) {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <FadeIn className="mx-auto flex max-w-3xl flex-col gap-6">
        {body.map((block, index) => {
          switch (block.type) {
            case 'heading':
              return (
                <Heading
                  key={index}
                  as={block.level === 2 ? 'h2' : 'h3'}
                  size={block.level === 2 ? 'heading-lg' : 'heading-md'}
                  className="mt-4 first:mt-0"
                >
                  {block.text}
                </Heading>
              )
            case 'list':
              return (
                <ul key={index} className="flex flex-col gap-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-body-lg leading-relaxed text-text-secondary">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            case 'image':
              return (
                <figure key={index} className="my-4 flex flex-col gap-3">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-canvas-muted">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(min-width: 1024px) 720px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && <figcaption className="text-body-sm text-text-tertiary">{block.caption}</figcaption>}
                </figure>
              )
            default:
              return (
                <p key={index} className="text-body-lg leading-relaxed text-text-secondary">
                  {block.text}
                </p>
              )
          }
        })}
      </FadeIn>
    </SectionContainer>
  )
}
