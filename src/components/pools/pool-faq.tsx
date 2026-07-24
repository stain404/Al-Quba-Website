import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'

/**
 * Pool Detail / FAQ.
 * A single supplementary question specific to this pool — deliberately
 * not built as a multi-item accordion (that pattern belongs to Contact's
 * general FAQ) since there's only ever one pool-specific question to
 * show here.
 */
export function PoolFAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <SectionContainer surface="ink" spacing="lg">
      <SectionHeading eyebrow="FAQ" title={question} description={answer} inverse />
    </SectionContainer>
  )
}
