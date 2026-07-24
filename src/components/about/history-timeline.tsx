import { Handshake, TrendingUp, Globe2, ShieldCheck } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Timeline } from '@/components/data-display/timeline'
import type { TimelineEntry } from '@/types'

const iconProps = { className: 'size-2 text-accent', strokeWidth: 2.5 } as const

const milestones: TimelineEntry[] = [
  {
    year: '2022',
    title: 'New strategic partnerships',
    description: 'Achieved new partnerships in technology and education sectors.',
    icon: <Handshake {...iconProps} />,
  },
  {
    year: '2023',
    title: 'Multi-sector expansion',
    description: 'Expanded operations across multiple sectors with a strong focus on innovation and sustainability.',
    icon: <TrendingUp {...iconProps} />,
  },
  {
    year: '2024',
    title: 'Building our digital presence',
    description: 'Initiated a strong digital presence by introducing online platforms for investor communication, improving accessibility, visibility, and engagement.',
    icon: <Globe2 {...iconProps} />,
  },
  {
    year: '2025',
    title: 'Digital platform and ISO certification',
    description: 'Rolled out a digital platform for investor relations, increasing transparency and reporting. Achieved ISO certification for quality and environmental management.',
    icon: <ShieldCheck {...iconProps} />,
  },
]

/**
 * About / History.
 * The natural home for the existing Timeline component — a real
 * chronological record rather than a decorative device.
 */
export function HistoryTimeline() {
  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow="Our History" title="Our roadmap, told through four milestones" />
      <div className="mt-20">
        <Timeline entries={milestones} />
      </div>
    </SectionContainer>
  )
}
