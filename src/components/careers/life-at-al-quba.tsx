import Image from 'next/image'
import { BookOpen, BarChart2, Globe2, Clock } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/reveal'

const highlights = [
  { icon: BookOpen, label: 'Continuous Learning', desc: 'Structured training, mentorship, and knowledge-sharing at every level.' },
  { icon: BarChart2, label: 'Career Development', desc: 'Clear progression paths and performance frameworks that reward results.' },
  { icon: Globe2, label: 'Diverse Workforce', desc: 'A multinational team bringing perspectives from across the globe.' },
  { icon: Clock, label: 'Long-Term Opportunities', desc: 'We invest in our people the same way we invest capital — for the long run.' },
]

export function LifeAtAlQuba() {
  return (
    <SectionContainer id="life" surface="muted" spacing="lg">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left — image */}
        <FadeIn className="relative min-h-[480px] overflow-hidden rounded-[18px] shadow-lg lg:min-h-0">
          <Image
            src="/investment.jpg"
            alt="Al Quba team collaborating in the office"
            fill
            className="object-cover transition-transform duration-500 ease-institutional group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" aria-hidden />
        </FadeIn>

        {/* Right — text */}
        <FadeIn delay={0.08} className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <Eyebrow>Life at Al Quba</Eyebrow>
          </div>

          <Heading as="h2" size="display-md" className="text-text-primary">
            People First.<br />Performance Always.
          </Heading>

          <p className="max-w-measure text-body-lg leading-relaxed text-text-secondary">
            We're a firm that moves with intention. Every hire is deliberate, every promotion
            earned. We don't hire for seats — we hire for roles that matter. Our people are
            trusted to own their work, collaborate openly, and build careers that compound
            in the same way good investments do: steadily, with discipline, over time.
          </p>

          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <StaggerItem key={h.label}>
                <div className="flex flex-col gap-3 rounded-[18px] border border-border bg-canvas-raised p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <h.icon className="size-4 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-body-sm font-semibold text-text-primary">{h.label}</span>
                  </div>
                  <p className="text-body-sm leading-relaxed text-text-secondary">{h.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
