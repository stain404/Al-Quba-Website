import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { FadeIn } from '@/components/motion/reveal'

const trustMetrics = [
  {
    title: 'Years of Experience',
    description: 'Over a decade of disciplined capital deployment across global markets.',
  },
  {
    title: 'Investment Sectors',
    description: 'Diversified exposure across trading, real estate, logistics, and technology.',
  },
  {
    title: 'Global Presence',
    description: 'Structured operations spanning the Middle East, Africa, and beyond.',
  },
  {
    title: 'Structured Investment Approach',
    description: 'Defined governance, underwriting, and reporting standards for every position.',
  },
]

const visionMission = [
  {
    label: 'Vision',
    body: 'To be recognized as a disciplined, diversified investment house — one whose capital allocation decisions are judged not by market cycles, but by the durability of the value they create for investors, partners, and the economies we operate within, across every sector and market we enter.',
  },
  {
    label: 'Mission',
    body: 'We commit capital with discipline: rigorous underwriting, diversified exposure, and governance that holds regardless of market conditions. Our role is to identify real economic opportunity, structure it responsibly, and manage it with the same transparency and accountability our investors expect of their own capital.',
  },
]

/**
 * Section 3 — Our Philosophy (formerly "Who We Are").
 * The hero already introduces the firm, so this section deliberately
 * skips a second company introduction and instead argues the case for
 * *how* Al Quba invests — philosophy, governance, and diversification —
 * before backing it with a row of credibility metrics and the firm's
 * Vision/Mission pairing. Editorial split layout (label column + wide
 * content column) carried over from the previous version for visual
 * continuity with the sections around it.
 */
export function AboutPreview() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Our Philosophy</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-14">
          <FadeIn delay={0.05} className="flex flex-col gap-6">
            <Heading as="h2" size="display-md" className="max-w-2xl">
              Discipline Is the Difference
            </Heading>
            <p className="max-w-measure text-body-lg text-text-secondary">
              Every capital decision at Al Quba begins with a simple test:
              does it create real, measurable value in the physical
              economy. We look past market cycles and short-term
              sentiment, directing capital toward operating businesses,
              trade flows, and assets that generate genuine economic
              activity rather than speculative positions. Each opportunity
              is underwritten with the same rigor, structured through
              clear governance, and reported on with the same
              transparency, regardless of size or sector. We build
              partnerships measured in years, not quarters, aligning our
              interests directly with the investors and operators we work
              alongside. Diversification across trading, logistics,
              infrastructure, and technology is deliberate — a structural
              safeguard against concentration risk, not a marketing point.
              It is a discipline we apply consistently, position by
              position, cycle after cycle.
            </p>
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2 text-body-md font-medium text-text-primary"
            >
              Read Our Story
              <ArrowRight
                className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4">
              {trustMetrics.map((metric) => (
                <div key={metric.title} className="flex flex-col gap-2">
                  <span className="h-px w-6 bg-accent" aria-hidden />
                  <h3 className="text-body-md font-semibold text-text-primary">{metric.title}</h3>
                  <p className="text-body-sm text-text-secondary">{metric.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {visionMission.map((item) => (
                <Card key={item.label} surface="canvas" padding="md" className="flex flex-col gap-3">
                  <span className="h-px w-8 bg-accent" aria-hidden />
                  <h3 className="text-heading-md font-display font-semibold text-text-primary">{item.label}</h3>
                  <p className="text-body-md text-text-secondary">{item.body}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
