import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { FadeIn } from '@/components/motion/reveal'

const copy = {
  en: {
    eyebrow: 'OUR PHILOSOPHY',
    heading: 'Discipline Is the Difference',
    body: 'Every capital decision at Al Quba begins with a simple test: does it create real, measurable value in the physical economy? We look past market cycles and short-term sentiment, directing capital toward operating businesses, trade flows, and assets that generate genuine economic activity rather than speculative positions. Each opportunity is underwritten with the same rigour, structured through clear governance, and reported on with full transparency — regardless of size or sector. We build partnerships measured in years, not quarters, aligning our interests directly with the investors and operators we work alongside. Diversification across trading, logistics, infrastructure, and technology is deliberate: a structural safeguard against concentration risk, not a marketing point. It is a discipline we apply consistently, position by position, cycle after cycle.',
    readOurStory: 'Read Our Story',
    trustMetrics: [
      { title: 'Years of Experience', description: 'Over a decade of disciplined capital deployment across global markets.' },
      { title: 'Investment Sectors', description: 'Diversified exposure across trading, real estate, logistics, and technology.' },
      { title: 'Global Presence', description: 'Structured operations spanning the Middle East, Africa, and beyond.' },
      { title: 'Structured Investment Approach', description: 'Defined governance, underwriting, and reporting standards for every position.' },
    ],
    visionMission: [
      {
        label: 'Vision',
        body: 'To be recognised as a disciplined, diversified investment house — one whose capital allocation decisions are judged not by market cycles, but by the durability of the value they create for investors, partners, and the economies we operate within, across every sector and market we enter.',
      },
      {
        label: 'Mission',
        body: 'We commit capital with discipline: rigorous underwriting, diversified exposure, and governance that holds regardless of market conditions. Our role is to identify real economic opportunity, structure it responsibly, and manage it with the same transparency and accountability our investors expect of their own capital.',
      },
    ],
  },
  ar: {
    eyebrow: 'فلسفتنا',
    heading: 'الانضباط هو الفارق',
    body: 'يبدأ كل قرار استثماري في القبا باختبار بسيط: هل يخلق هذا القرار قيمة حقيقية وقابلة للقياس في الاقتصاد الفعلي؟ نتجاوز دورات السوق والمزاج قصير الأمد، ونوجّه رأس المال نحو أعمال تشغيلية وتدفقات تجارية وأصول تولّد نشاطًا اقتصاديًا حقيقيًا. تُدرَس كل فرصة بنفس الصرامة، وتُبنى من خلال حوكمة واضحة، ويُقدَّم عنها التقرير بنفس الشفافية. نبني شراكات تُقاس بالسنوات لا بالأرباع، بما يوائم مصالحنا مباشرة مع مصالح المستثمرين والمشغّلين الذين نعمل معهم.',
    readOurStory: 'اقرأ قصتنا',
    trustMetrics: [
      { title: 'سنوات الخبرة', description: 'أكثر من عقد من نشر رأس المال بانضباط عبر الأسواق العالمية.' },
      { title: 'القطاعات الاستثمارية', description: 'تعرّض متنوع عبر التجارة والعقارات والخدمات اللوجستية والتقنية.' },
      { title: 'الحضور العالمي', description: 'عمليات منظمة تمتد عبر الشرق الأوسط وأفريقيا وما وراءهما.' },
      { title: 'نهج استثماري منظم', description: 'معايير حوكمة وتحليل ائتماني وتقارير محددة لكل مركز استثماري.' },
    ],
    visionMission: [
      {
        label: 'الرؤية',
        body: 'أن نكون بيتًا استثماريًا منضبطًا ومتنوعًا — تُقاس قرارات تخصيص رأس ماله ليس بدورات السوق، بل بمدى استدامة القيمة التي تخلقها للمستثمرين والشركاء والاقتصادات التي نعمل ضمنها.',
      },
      {
        label: 'المهمة',
        body: 'نلتزم برأس المال بانضباط: تحليل ائتماني صارم، وتعرض متنوع، وحوكمة تصمد أيًا كانت الظروف السوقية. دورنا هو تحديد الفرصة الاقتصادية الحقيقية، وهيكلتها بمسؤولية، وإدارتها بنفس الشفافية والمساءلة.',
      },
    ],
  },
} as const

/**
 * Section 3 — Our Philosophy.
 * Two-column layout: left column carries all text content (eyebrow, heading,
 * body copy, CTA, four highlight metrics); right column carries a large
 * premium image. Vision / Mission cards span the full width below both
 * columns. Beige/off-white canvas surface, navy typography, thin gold accent
 * lines — premium investment firm aesthetic.
 */
export async function AboutPreview() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="canvas" spacing="lg">
      {/* ── Two-column split ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

        {/* LEFT — text content */}
        <FadeIn className="flex flex-col gap-10">
          {/* Eyebrow + thin gold rule */}
          <div className="flex flex-col gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </div>

          {/* Heading + body + CTA */}
          <div className="flex flex-col gap-6">
            <Heading as="h2" size="display-md" className="text-text-primary">
              {c.heading}
            </Heading>
            <p className="max-w-measure text-body-lg leading-relaxed text-text-secondary">
              {c.body}
            </p>
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2 text-body-md font-medium text-text-primary transition-colors duration-150 hover:text-accent-ink"
            >
              {c.readOurStory}
              <ArrowRight
                className="size-4 rtl:rotate-180 transition-transform duration-200 ease-institutional group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                aria-hidden
              />
            </Link>
          </div>

          {/* Four highlight metrics */}
          <div className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2">
            {c.trustMetrics.map((metric) => (
              <div key={metric.title} className="flex flex-col gap-2">
                <span className="h-px w-6 bg-accent" aria-hidden />
                <h3 className="text-body-md font-semibold text-text-primary">{metric.title}</h3>
                <p className="text-body-sm text-text-secondary">{metric.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* RIGHT — large premium image */}
        <FadeIn delay={0.08} className="relative min-h-[480px] lg:min-h-0">
          <div className="sticky top-28 h-full w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/office.png"
              alt="Al Quba Investment — executive office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Subtle gradient vignette at the bottom for depth */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"
              aria-hidden
            />
          </div>
        </FadeIn>
      </div>

      {/* ── Vision / Mission cards — full width below both columns ───── */}
      <FadeIn delay={0.12}>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {c.visionMission.map((item) => (
            <Card
              key={item.label}
              surface="canvas"
              padding="md"
              className="flex flex-col gap-4 rounded-2xl"
            >
              <span className="h-px w-8 bg-accent" aria-hidden />
              <h3 className="font-display text-heading-md font-semibold text-text-primary">
                {item.label}
              </h3>
              <p className="text-body-md leading-relaxed text-text-secondary">{item.body}</p>
            </Card>
          ))}
        </div>
      </FadeIn>
    </SectionContainer>
  )
}
