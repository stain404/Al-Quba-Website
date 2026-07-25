import { getLocale } from 'next-intl/server'
import { Handshake, TrendingUp, Globe2, ShieldCheck } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Timeline } from '@/components/data-display/timeline'
import type { TimelineEntry } from '@/types'

const iconProps = { className: 'size-2 text-accent', strokeWidth: 2.5 } as const
const icons = [Handshake, TrendingUp, Globe2, ShieldCheck]

const copy = {
  en: {
    eyebrow: 'Our History',
    title: 'Our roadmap, told through four milestones',
    milestones: [
      { year: '2022', title: 'New strategic partnerships', description: 'Achieved new partnerships in technology and education sectors.' },
      { year: '2023', title: 'Multi-sector expansion', description: 'Expanded operations across multiple sectors with a strong focus on innovation and sustainability.' },
      { year: '2024', title: 'Building our digital presence', description: 'Initiated a strong digital presence by introducing online platforms for investor communication, improving accessibility, visibility, and engagement.' },
      { year: '2025', title: 'Digital platform and ISO certification', description: 'Rolled out a digital platform for investor relations, increasing transparency and reporting. Achieved ISO certification for quality and environmental management.' },
    ],
  },
  ar: {
    eyebrow: 'تاريخنا',
    title: 'مسيرتنا عبر أربع محطات رئيسية',
    milestones: [
      { year: '2022', title: 'شراكات استراتيجية جديدة', description: 'أبرمنا شراكات جديدة في قطاعي التقنية والتعليم.' },
      { year: '2023', title: 'توسع متعدد القطاعات', description: 'وسّعنا عملياتنا عبر قطاعات متعددة مع تركيز قوي على الابتكار والاستدامة.' },
      { year: '2024', title: 'بناء حضورنا الرقمي', description: 'أطلقنا حضورًا رقميًا قويًا من خلال منصات إلكترونية للتواصل مع المستثمرين، ما عزز سهولة الوصول والظهور والتفاعل.' },
      { year: '2025', title: 'منصة رقمية وشهادة الأيزو', description: 'أطلقنا منصة رقمية لعلاقات المستثمرين، ما عزز الشفافية والتقارير. حصلنا على شهادة الأيزو لإدارة الجودة والبيئة.' },
    ],
  },
} as const

/**
 * About / History.
 * The natural home for the existing Timeline component — a real
 * chronological record rather than a decorative device.
 */
export async function HistoryTimeline() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]
  const entries: TimelineEntry[] = c.milestones.map((milestone, index) => {
    const Icon = icons[index]
    return { ...milestone, icon: <Icon {...iconProps} /> }
  })

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} />
      <div className="mt-20">
        <Timeline entries={entries} />
      </div>
    </SectionContainer>
  )
}
