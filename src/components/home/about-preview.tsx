import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

const copy = {
  en: {
    eyebrow: 'Who We Are',
    heading: 'A Private Investment House Built for Generational Capital',
    /* Kept to two sentences: this is a preview, and "Read Our Story"
       sits directly beneath it — the full positioning statement belongs
       on /about rather than in the teaser for it. */
    body:
      'Al Quba Investment is a Dubai-based private investment firm building long-term value through strategic investments and disciplined capital allocation. We partner with high-potential businesses across diverse sectors to create resilient investments that preserve wealth for future generations.',
    readOurStory: 'Read Our Story',
  },
  ar: {
    eyebrow: 'من نحن',
    heading: 'بيت استثماري خاص لبناء رأس مال يمتد عبر الأجيال',
    body:
      'القبا للاستثمار شركة استثمار خاصة مقرها دبي، تبني قيمة طويلة الأجل من خلال استثمارات استراتيجية وإدارة منضبطة لرأس المال. نتعاون مع شركات واعدة في قطاعات متنوعة لبناء استثمارات راسخة تحافظ على الثروة للأجيال القادمة.',
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
      {/* Four cells rather than the usual two-cell SplitContainer, because
          the two axes disagree about order. Reading order has to stay
          eyebrow → heading → body → photo, which is what the single mobile
          column gets straight from the DOM. On `lg` the cells are placed
          explicitly instead: label and body stack down the narrow left
          column, heading and photo down the wide right one. */}
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-y-10">
        <FadeIn className="lg:col-start-1 lg:row-start-1">
          <Eyebrow>{c.eyebrow}</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.05} className="lg:col-start-2 lg:row-start-1">
          <Heading as="h2" size="display-md" className="max-w-2xl">
            {c.heading}
          </Heading>
        </FadeIn>

        {/* No max-width of its own: `max-w-measure` is 680px and this
            column is narrower than that, so the cap never bound — the
            column width alone set the line length, and the paragraph now
            runs flush to both its edges rather than stopping short on the
            right. Body-md rather than body-lg keeps ~10-12 words a line
            at this width. */}
        <FadeIn delay={0.1} className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2">
          <p className="text-body-md leading-relaxed text-text-secondary">
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

        <FadeIn delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <div className="relative aspect-[16/9] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/office.png"
              alt="Al Quba Investment executive office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 576px, 100vw"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"
              aria-hidden
            />
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
