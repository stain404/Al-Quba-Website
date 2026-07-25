import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

const copy = {
  en: {
    eyebrow: 'Who We Are',
    heading: 'A Private Investment House Built for Generational Capital',
    body:
      'Al Quba Investment is a Dubai-based private investment firm focused on building long-term value through strategic investments, disciplined capital allocation, and sustainable business growth. We partner with high-potential businesses across diverse sectors, combining financial expertise, operational excellence, and a long-term perspective to create resilient investments that preserve wealth and generate lasting economic impact for future generations.',
    readOurStory: 'Read Our Story',
  },
  ar: {
    eyebrow: 'من نحن',
    heading: 'بيت استثماري خاص لبناء رأس مال يمتد عبر الأجيال',
    body:
      'القبا للاستثمار شركة استثمار خاصة مقرها دبي، تركز على بناء قيمة طويلة الأجل من خلال استثمارات استراتيجية، وإدارة منضبطة لرأس المال، ونمو مستدام للأعمال. نتعاون مع شركات واعدة في قطاعات متنوعة، مستندين إلى خبرة مالية وتميز تشغيلي ورؤية استثمارية بعيدة المدى، لبناء استثمارات راسخة تحافظ على الثروة وتحقق أثرًا اقتصاديًا دائمًا للأجيال القادمة.',
    readOurStory: 'اقرأ قصتنا',
  },
} as const

/**
 * Section 3 — Who We Are.
 * Editorial split (label column + content), same pattern as About's own
 * "Who We Are" section: a narrow eyebrow-only left column, and a wide
 * right column carrying the heading, body copy, CTA, and a single
 * office photo beneath the text.
 */
export async function AboutPreview() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>{c.eyebrow}</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-10">
          <FadeIn delay={0.05} className="flex flex-col gap-6">
            <Heading as="h2" size="display-md" className="max-w-2xl">
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
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/office.png"
                alt="Al Quba Investment — executive office"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
