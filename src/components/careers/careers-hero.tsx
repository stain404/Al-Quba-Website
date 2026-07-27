'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { transitionContent } from '@/lib/animations'

const copy = {
  en: {
    ariaLabel: 'Careers at Al Quba Investment',
    eyebrow: 'Careers',
    headingLine1: 'Build Your Career',
    headingLine2: 'at Al Quba',
    body: 'Join a diversified investment group building long-term value across global trade, logistics, infrastructure, technology, real estate, education, and strategic investments.',
    cta: 'View Open Positions',
  },
  ar: {
    ariaLabel: 'الوظائف في القبا للاستثمار',
    eyebrow: 'الوظائف',
    headingLine1: 'ابنِ مسيرتك المهنية',
    headingLine2: 'مع القبا',
    body: 'انضم إلى مجموعة استثمارية متنوعة تبني قيمة طويلة الأمد عبر التجارة العالمية، والخدمات اللوجستية، والبنية التحتية، والتقنية، والعقارات، والتعليم، والاستثمارات الاستراتيجية.',
    cta: 'استعرض الوظائف الشاغرة',
  },
} as const

/**
 * Careers Hero — photo banner.
 * Full-bleed photo with a dark scrim (same left-to-right gradient
 * technique used by the About/Insights/Sector heroes) so the banner reads
 * consistently with the rest of the site's photo heroes.
 * Height is kept compact (not full-viewport) so job listings remain
 * immediately visible on arrival.
 */
export function CareersHero() {
  const prefersReduced = useReducedMotion()
  const locale = useLocale() as keyof typeof copy
  const c = copy[locale]

  const fadeIn = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { ...transitionContent, delay },
        }

  return (
    <section
      aria-label={c.ariaLabel}
      className="relative w-full overflow-hidden bg-[#1A140F] pt-32 pb-20 md:pt-40 md:pb-24"
    >
      <Image
        src="/careers.png"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover object-[55%_center] md:object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1A140F]/85 via-[#1A140F]/60 to-[#1A140F]/25"
        aria-hidden
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-container">
        <div className="flex max-w-2xl flex-col gap-6">
          <motion.span
            {...fadeIn(0.05)}
            className="text-eyebrow uppercase tracking-[0.22em] text-text-inverse-muted"
          >
            {c.eyebrow}
          </motion.span>

          <motion.h1
            {...fadeIn(0.12)}
            className="font-display text-display-lg font-bold leading-[1.08] text-text-inverse"
          >
            {c.headingLine1}<br className="hidden sm:block" /> {c.headingLine2}
          </motion.h1>

          <motion.p
            {...fadeIn(0.2)}
            className="max-w-xl text-body-lg leading-relaxed text-text-inverse-muted"
          >
            {c.body}
          </motion.p>

          <motion.div {...fadeIn(0.27)}>
            <Button variant="gold" size="md" withArrow asChild className="group mt-2">
              <Link href="#openings">{c.cta}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
