import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'

const copy = {
  en: {
    eyebrow: 'Open Application',
    heading: "Didn't Find the Right Role?",
    body: "We're always interested in meeting talented professionals who share our long-term vision. Submit your CV and we'll be in touch when a suitable opportunity arises.",
    cta: 'Submit Your CV',
    mailSubject: 'Open Application — CV Submission',
  },
  ar: {
    eyebrow: 'طلب توظيف مفتوح',
    heading: 'لم تجد الدور المناسب؟',
    body: 'نحن دائمًا مهتمون بالتعرف على محترفين موهوبين يشاركوننا رؤيتنا طويلة الأمد. أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة.',
    cta: 'أرسل سيرتك الذاتية',
    mailSubject: 'طلب توظيف مفتوح — إرسال السيرة الذاتية',
  },
} as const

/**
 * Open Application — minimal closing section.
 * Muted canvas surface to visually separate it from the job listings above.
 * No icon, no imagery, no statistics — just the message and a CTA.
 */
export async function OpenApplication() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="muted" spacing="md" className="border-t border-border">
      <FadeIn className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden />
          <span className="text-eyebrow uppercase tracking-[0.22em] text-text-tertiary">
            {c.eyebrow}
          </span>
        </div>

        <h2 className="font-display text-display-sm font-bold text-text-primary max-w-xl">
          {c.heading}
        </h2>

        <p className="max-w-[520px] text-body-md leading-relaxed text-text-secondary">
          {c.body}
        </p>

        <Button variant="outline" size="md" withArrow asChild className="group mt-1">
          <a href={`mailto:careers@alqubainvestment.com?subject=${encodeURIComponent(c.mailSubject)}`}>
            {c.cta}
          </a>
        </Button>
      </FadeIn>
    </SectionContainer>
  )
}
