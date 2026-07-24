import { CheckCircle2 } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Card } from '@/components/cards/card'
import { Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

/**
 * Article Detail / Key Takeaways — a bordered summary card closing out
 * the body copy, same Card component used for pool/sector highlights
 * elsewhere on the site.
 */
export function ArticleKeyTakeaways({ items }: { items: string[] }) {
  return (
    <SectionContainer surface="muted" spacing="md">
      <FadeIn className="mx-auto max-w-3xl">
        <Card surface="canvas" padding="lg" className="flex flex-col gap-6">
          <Heading as="h2" size="heading-md">
            Key Takeaways
          </Heading>
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body-md text-text-secondary">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </FadeIn>
    </SectionContainer>
  )
}
