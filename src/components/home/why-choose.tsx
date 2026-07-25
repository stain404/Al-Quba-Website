import { getLocale } from 'next-intl/server'
import { Layers, TrendingUp, ShieldCheck, Award, Globe2, Handshake } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'

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
 * Section 4 — Why Invest with Al Quba.
 * Six premium feature cards on a balanced 3-column grid — the shared
 * FeatureCard/FeatureGrid pattern (equal height, staggered fade-up on
 * scroll, subtle hover lift) used across sector/pool detail pages.
 */
export async function WhyChooseAlQuba() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
      <div className="mt-16">
        <FeatureGrid>
          {c.reasons.map((reason, index) => {
            const Icon = icons[index]
            return (
              <FeatureCard
                key={reason.title}
                icon={<Icon className="size-5" strokeWidth={1.5} aria-hidden />}
                title={reason.title}
                description={reason.description}
              />
            )
          })}
        </FeatureGrid>
      </div>
    </SectionContainer>
  )
}
