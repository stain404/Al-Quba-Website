'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { defaultViewport } from '@/lib/animations'

const steps = [
  { number: '01', label: 'Application' },
  { number: '02', label: 'Resume Review' },
  { number: '03', label: 'Interview' },
  { number: '04', label: 'Final Assessment' },
  { number: '05', label: 'Offer & Onboarding' },
]

export function RecruitmentProcess() {
  const prefersReduced = useReducedMotion()

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading
        eyebrow="How We Hire"
        title="Our Recruitment Process"
        description="A transparent, straightforward process designed to find the right fit, for you and for us."
      />

      <div className="mt-16 overflow-x-auto pb-4">
        <div className="relative flex min-w-[640px] items-center justify-between gap-0">

          {/* Connecting line behind the circles */}
          <div className="absolute left-[calc(10%)] right-[calc(10%)] top-[28px] h-px bg-accent/30" aria-hidden />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              className="relative z-10 flex flex-1 flex-col items-center gap-4"
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Circle */}
              <div className="flex size-14 items-center justify-center rounded-full border-2 border-accent bg-canvas-raised shadow-sm">
                <span className="font-display text-body-sm font-semibold text-accent">
                  {step.number}
                </span>
              </div>
              {/* Label */}
              <span className="text-center text-body-sm font-medium text-text-primary">
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
