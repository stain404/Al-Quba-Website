import { TrendingUp, Globe, Shield, Users } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'

const cards = [
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    description:
      'Work alongside experienced professionals while gaining exposure to investment, global trade, logistics, and strategic business operations.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description:
      'Collaborate with businesses operating across multiple countries, industries, and international markets.',
  },
  {
    icon: Shield,
    title: 'Ownership & Responsibility',
    description:
      'We empower our people to take initiative, solve problems, and make meaningful contributions from day one.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'A respectful workplace built on integrity, accountability, teamwork, and continuous learning.',
  },
]

export function WhyJoin() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SectionHeading
        eyebrow="Why Join Al Quba"
        title="Where Discipline Meets Opportunity"
        description="We're building a firm that will outlast market cycles. That takes people who think long-term."
      />

      <Stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <StaggerItem key={card.title}>
            <div className="group flex h-full flex-col gap-5 rounded-[18px] border border-border bg-canvas-raised p-8 shadow-sm transition-all duration-300 ease-institutional hover:-translate-y-2 hover:shadow-lg">
              <div className="flex size-11 items-center justify-center rounded-full border border-border">
                <card.icon className="size-5 text-accent" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-heading-sm font-semibold text-text-primary">{card.title}</h3>
                <p className="text-body-sm leading-relaxed text-text-secondary">{card.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionContainer>
  )
}
