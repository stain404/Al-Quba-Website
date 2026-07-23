import { Layers, TrendingUp, ShieldCheck, Award, Globe2, Handshake } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import type { FeatureItem } from '@/types'

const reasons: FeatureItem[] = [
  {
    icon: <Layers className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Diversified Portfolio',
    description:
      'Access investment opportunities across trading, logistics, technology, real estate, and international commerce through a balanced investment strategy.',
  },
  {
    icon: <TrendingUp className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Strategic Growth',
    description:
      'We focus on businesses and assets with long-term growth potential, creating sustainable value beyond short-term market trends.',
  },
  {
    icon: <ShieldCheck className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Transparent Investment Approach',
    description:
      'Clear communication, structured investment processes, and regular reporting ensure confidence throughout every investment journey.',
  },
  {
    icon: <Award className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Experienced Leadership',
    description:
      'Led by professionals with extensive expertise in investment management, international trade, and business development.',
  },
  {
    icon: <Globe2 className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Global Business Network',
    description:
      'Operating from Dubai while leveraging international partnerships and cross-border opportunities across multiple markets.',
  },
  {
    icon: <Handshake className="size-5" strokeWidth={1.5} aria-hidden />,
    title: 'Long-Term Partnerships',
    description:
      'We build lasting relationships with investors through responsible governance, disciplined capital allocation, and shared success.',
  },
]

/**
 * Section 4 — Why Invest with Al Quba.
 * Six premium feature cards on a balanced 3-column grid — the shared
 * FeatureCard/FeatureGrid pattern (equal height, staggered fade-up on
 * scroll, subtle hover lift) used across sector/pool detail pages.
 */
export function WhyChooseAlQuba() {
  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="Why Al Quba"
        title="Why Invest with Al Quba"
        description="A trusted partner committed to delivering sustainable growth through disciplined investments and strategic diversification."
      />
      <div className="mt-16">
        <FeatureGrid>
          {reasons.map((reason) => (
            <FeatureCard key={reason.title} {...reason} />
          ))}
        </FeatureGrid>
      </div>
    </SectionContainer>
  )
}
