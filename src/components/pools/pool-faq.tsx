import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'

const copy = { en: 'FAQ', ar: 'الأسئلة الشائعة' } as const

/**
 * Pool Detail / FAQ.
 * A single supplementary question specific to this pool — deliberately
 * not built as a multi-item accordion (that pattern belongs to Contact's
 * general FAQ) since there's only ever one pool-specific question to
 * show here.
 */
export async function PoolFAQ({ question, answer }: { question: string; answer: string }) {
  const locale = (await getLocale()) as keyof typeof copy
  return (
    <SectionContainer surface="ink" spacing="lg">
      <SectionHeading eyebrow={copy[locale]} title={question} description={answer} inverse />
    </SectionContainer>
  )
}
