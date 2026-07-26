'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useLocale } from 'next-intl'
import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { FadeIn } from '@/components/motion/reveal'

const copy = {
  en: {
    eyebrow: 'Who We Are',
    heading: 'Building Sustainable Value Through Strategic Investments',
    body: 'Al Quba Investment LLC is a diversified investment company headquartered in Dubai, focused on identifying and managing opportunities across trading, logistics, real estate, technology, and global commerce. We combine strategic thinking, disciplined capital management, and responsible governance to deliver sustainable long-term value for our investors and partners.',
    visionMission: [
      { label: 'Vision', body: 'To be recognized as a disciplined, diversified investment house, one whose capital allocation decisions are judged not by market cycles, but by the durability of the value they create for investors, partners, and the economies we operate within, across every sector and market we enter.' },
      { label: 'Mission', body: 'We commit capital with discipline: rigorous underwriting, diversified exposure, and governance that holds regardless of market conditions. Our role is to identify real economic opportunity, structure it responsibly, and manage it with the same transparency and accountability our investors expect of their own capital.' },
    ],
  },
  ar: {
    eyebrow: 'من نحن',
    heading: 'نبني قيمة مستدامة من خلال استثمارات استراتيجية',
    body: 'شركة القبا للاستثمار ذ.م.م. هي شركة استثمار متنوعة مقرها دبي، تركز على تحديد وإدارة الفرص عبر التجارة والخدمات اللوجستية والعقارات والتقنية والتجارة العالمية. نجمع بين التفكير الاستراتيجي، وإدارة رأس المال المنضبطة، والحوكمة المسؤولة لتحقيق قيمة مستدامة طويلة الأمد لمستثمرينا وشركائنا.',
    visionMission: [
      { label: 'الرؤية', body: 'أن نكون بيتًا استثماريًا منضبطًا ومتنوعًا، تُقاس قرارات تخصيص رأس ماله ليس بدورات السوق، بل بمدى استدامة القيمة التي تخلقها للمستثمرين والشركاء والاقتصادات التي نعمل ضمنها، عبر كل قطاع وسوق ندخله.' },
      { label: 'المهمة', body: 'نلتزم برأس المال بانضباط: تحليل ائتماني صارم، وتعرض متنوع، وحوكمة تصمد أيًا كانت الظروف السوقية. دورنا هو تحديد الفرصة الاقتصادية الحقيقية، وهيكلتها بمسؤولية، وإدارتها بنفس الشفافية والمساءلة التي يتوقعها مستثمرونا لرأس مالهم الخاص.' },
    ],
  },
} as const

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, transition: { duration: 0.6, ease: 'easeInOut' } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/**
 * About / Who We Are, Vision & Mission.
 * Editorial split (label column + content), same pattern used on the
 * Home "About Preview" section for continuity: an intro statement
 * followed by the vision/mission pairing as two equal cards. Tighter
 * bottom padding than the section's usual `lg` spacing (via the pb-*
 * override below) — this is now a short, two-part block rather than
 * the longer intro+cards+values-grid stack it used to close out, so
 * the full `lg` bottom gap read as leftover empty space.
 */
export function MissionValues() {
  const prefersReduced = useReducedMotion()
  const locale = useLocale() as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="canvas" spacing="lg" className="pb-10 md:pb-14">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>{c.eyebrow}</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={prefersReduced ? undefined : 'hidden'}
            whileInView={prefersReduced ? undefined : 'visible'}
            viewport={prefersReduced ? undefined : { once: false, amount: 0.3 }}
            variants={prefersReduced ? undefined : cardVariants}
            className="flex flex-col gap-6"
          >
            <Heading as="h2" size="display-md" className="max-w-2xl">
              {c.heading}
            </Heading>
            <p className="max-w-measure text-body-lg text-text-secondary">{c.body}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {c.visionMission.map((item) => (
              <Card key={item.label} surface="canvas" padding="md" className="flex flex-col gap-3">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <h3 className="text-heading-md font-display font-semibold text-text-primary">{item.label}</h3>
                <p className="text-body-md text-text-secondary">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
