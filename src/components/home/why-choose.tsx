import { getLocale } from 'next-intl/server'
import type { LucideIcon } from 'lucide-react'
import { Layers, TrendingUp, ShieldCheck, Award, Globe2, Handshake } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { Stagger, StaggerItem } from '@/components/motion/reveal'

const icons = [Layers, TrendingUp, ShieldCheck, Award, Globe2, Handshake]

const copy = {
  en: {
    eyebrow: 'Why Al Quba',
    title: 'Why Invest with Al Quba',
    description: 'A trusted partner committed to delivering sustainable growth through disciplined investments and strategic diversification.',
    reasons: [
      { title: 'Diversified Portfolio', description: 'Access investment opportunities across trading, logistics, technology, real estate, and international commerce through a balanced investment strategy.' },
      { title: 'Strategic Growth', description: 'We focus on businesses and assets with long-term growth potential, creating sustainable value beyond short-term market trends.' },
      { title: 'Transparent Investment Approach', description: 'Clear communication, structured investment processes, and regular reporting ensure confidence throughout every investment journey.' },
      { title: 'Experienced Leadership', description: 'Led by professionals with extensive expertise in investment management, international trade, and business development.' },
      { title: 'Global Business Network', description: 'Operating from Dubai while leveraging international partnerships and cross-border opportunities across multiple markets.' },
      { title: 'Long-Term Partnerships', description: 'We build lasting relationships with investors through responsible governance, disciplined capital allocation, and shared success.' },
    ],
  },
  ar: {
    eyebrow: 'لماذا القبا',
    title: 'لماذا تستثمر مع القبا',
    description: 'شريك موثوق يلتزم بتحقيق نمو مستدام من خلال استثمارات منضبطة وتنويع استراتيجي.',
    reasons: [
      { title: 'محفظة متنوعة', description: 'فرص استثمارية عبر التجارة والخدمات اللوجستية والتقنية والعقارات والتجارة الدولية من خلال استراتيجية استثمار متوازنة.' },
      { title: 'نمو استراتيجي', description: 'نركز على أعمال وأصول ذات إمكانات نمو طويلة الأمد، ما يخلق قيمة مستدامة تتجاوز اتجاهات السوق قصيرة الأمد.' },
      { title: 'نهج استثماري شفاف', description: 'تواصل واضح، وعمليات استثمار منظمة، وتقارير دورية تضمن الثقة في كل مرحلة من رحلة الاستثمار.' },
      { title: 'قيادة ذات خبرة', description: 'بقيادة محترفين ذوي خبرة واسعة في إدارة الاستثمار والتجارة الدولية وتطوير الأعمال.' },
      { title: 'شبكة أعمال عالمية', description: 'ننطلق من دبي مستفيدين من شراكات دولية وفرص عابرة للحدود عبر أسواق متعددة.' },
      { title: 'شراكات طويلة الأمد', description: 'نبني علاقات دائمة مع المستثمرين عبر حوكمة مسؤولة، وتخصيص منضبط لرأس المال، ونجاح مشترك.' },
    ],
  },
} as const

/**
 * One reason card. Deliberately local to this section rather than a change
 * to the shared FeatureCard — that component is also used on every sector
 * and pool detail page, and this treatment is tuned for a six-up grid on a
 * muted band, not for those contexts.
 */
function ReasonCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <StaggerItem className="h-full">
      <Card
        surface="canvas"
        padding="lg"
        className="group relative flex h-full flex-col overflow-hidden hover:-translate-y-1"
      >
        {/* The signature gold hairline, earned rather than given: it draws
            in across the card's top edge only on hover, so at rest the
            section still carries exactly one gold mark (the eyebrow rule)
            and never six. */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-institutional group-hover:scale-x-100 rtl:origin-right"
        />

        <span className="flex size-12 items-center justify-center rounded-md border border-border bg-canvas text-navy transition-colors duration-300 ease-institutional group-hover:border-transparent group-hover:bg-ink group-hover:text-text-inverse">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden />
        </span>

        {/* Rhythm: generous above the title (icon is a separate group),
            tight between title and its description (they are one group). */}
        <h3 className="mt-8 text-balance text-heading-md font-semibold text-text-primary">
          {title}
        </h3>
        <p className="mt-3 text-body-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </Card>
    </StaggerItem>
  )
}

/**
 * Section 4 — Why Invest with Al Quba.
 * Six reason cards on a balanced 3-column grid. The grid is wrapped in a
 * `Stagger` so the per-card `StaggerItem` variants actually orchestrate —
 * without a stagger parent they render statically and the entrance the
 * cards were written for never runs.
 */
export async function WhyChooseAlQuba() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
      <Stagger className="mt-16 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {c.reasons.map((reason, index) => {
          const Icon = icons[index]
          return (
            <ReasonCard
              key={reason.title}
              icon={Icon}
              title={reason.title}
              description={reason.description}
            />
          )
        })}
      </Stagger>
    </SectionContainer>
  )
}
