'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import { expandCollapse } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { faqs } from '@/lib/faq-data'

/**
 * Contact / FAQ.
 * A single-open accordion — the one accordion interaction on the entire
 * site, using the expandCollapse variant already defined in
 * lib/animations.ts rather than a new easing curve.
 */
export function ContactFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow="Frequently Asked" title="Before you reach out" />

      <FadeIn delay={0.05} className="mt-16">
        <ul className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <li key={faq.question} className="border-t border-border-strong last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:shadow-focus"
                >
                  <span className="text-heading-sm font-semibold text-text-primary">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-text-tertiary transition-transform duration-200 ease-institutional',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={expandCollapse}
                      className="overflow-hidden"
                    >
                      <p className="max-w-measure pb-6 text-body-md text-text-secondary">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </FadeIn>
    </SectionContainer>
  )
}
