'use client'

import * as React from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { InstitutionalTestimonial } from '@/components/cards/institutional-testimonial'
import { FadeIn } from '@/components/motion/reveal'
import { easeInstitutional } from '@/lib/animations'
import { cn } from '@/lib/utils'
import type { TestimonialItem } from '@/types'

const institutionalTestimonial = {
  quote:
    'Al Quba demonstrates a structured and transparent approach to investment management. The clarity in execution and consistency in communication reflect a strong operational framework.',
  name: 'Banger Financial Labs',
  role: 'Institutional Partner',
  logoSrc: '/banger-finlabs-logo.jpeg',
}

const individualTestimonials: TestimonialItem[] = [
  { quote: 'What we value most is the transparency. You always know where your money is going and how it’s working.', name: 'Sidra Aydeed', role: 'Investor' },
  { quote: 'Al Quba has consistently delivered on what they promised — the returns have been strong, and I always know exactly where my capital stands.', name: 'Basheer Ayathulla', role: 'Investor' },
  { quote: 'The level of service is what stands out most. Every question is answered directly, and the results have exceeded what I expected going in.', name: 'Ashraf Mavullah', role: 'Investor' },
]

const ROTATE_INTERVAL_MS = 6000

/**
 * Section 9.5 — Testimonials.
 * The institutional quote stays a full-width spotlight, unchanged. Below
 * it, individual investor testimonials auto-rotate one at a time through
 * a taller, portrait-shaped card — a deliberate carousel rather than the
 * static 3-up grid this replaces, since there are only three quotes today
 * and a grid would just show all of them at once with nothing to rotate.
 * Auto-advance pauses on hover/focus and is skipped entirely under
 * `prefers-reduced-motion` (the dot controls still work either way).
 */
export function Testimonials() {
  const prefersReduced = useReducedMotion()
  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (prefersReduced || paused) return
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % individualTestimonials.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [prefersReduced, paused])

  const active = individualTestimonials[index]

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our partners say"
        description="Direct feedback from the institutions and individual investors we work alongside."
      />
      <div className="mt-16 flex flex-col gap-12">
        <FadeIn>
          <InstitutionalTestimonial {...institutionalTestimonial} />
        </FadeIn>

        <FadeIn
          className="mx-auto flex w-full max-w-sm flex-col items-center gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? { opacity: 1 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.5, ease: easeInstitutional }}
              >
                <TestimonialCard {...active} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            {individualTestimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 ease-institutional',
                  i === index ? 'w-6 bg-accent' : 'w-2 bg-border-strong hover:bg-text-tertiary'
                )}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
