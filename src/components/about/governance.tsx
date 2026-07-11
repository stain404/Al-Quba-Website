import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

const governance = [
  {
    term: 'Regulatory Status',
    detail: 'Registered in the Dubai International Financial Centre (DIFC), governance aligned with DFSA standards.',
  },
  {
    term: 'Independent Audit',
    detail: 'Annual audit conducted by an internationally recognized accounting firm, available to qualified investors on request.',
  },
  {
    term: 'Risk Committee',
    detail: 'Every allocation above a defined threshold requires unanimous sign-off from a three-member risk committee.',
  },
  {
    term: 'AML & KYC',
    detail: 'All investor onboarding follows standard AML/KYC procedures consistent with UAE federal requirements.',
  },
  {
    term: 'Reporting Cadence',
    detail: 'Quarterly capital statements and cycle-close reports issued to all pool participants.',
  },
]

/**
 * About / Governance.
 * A definition-list "spec sheet" pattern — term/detail rows rather than
 * cards or a timeline, giving the page a fifth distinct rhythm.
 */
export function Governance() {
  return (
    <SectionContainer surface="muted" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Governance</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-10">
          <FadeIn delay={0.05} className="flex flex-col gap-4">
            <Heading as="h2" size="display-sm" className="max-w-xl">
              Structured to withstand scrutiny, not just performance reviews.
            </Heading>
          </FadeIn>

          <dl className="flex flex-col">
            {governance.map((item, i) => (
              <FadeIn key={item.term} delay={0.05 + i * 0.04}>
                <div className="grid grid-cols-1 gap-2 border-t border-border-strong py-6 last:border-b sm:grid-cols-[220px_1fr] sm:gap-8">
                  <dt className="text-body-sm font-semibold text-text-primary">{item.term}</dt>
                  <dd className="max-w-measure text-body-md text-text-secondary">{item.detail}</dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
