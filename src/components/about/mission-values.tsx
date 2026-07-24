'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { FadeIn } from '@/components/motion/reveal'

const visionMission = [
  {
    label: 'Vision',
    body: 'To be the catalyst for transformative investments, shaping prosperous futures for our investors and the communities we serve.',
  },
  {
    label: 'Mission',
    body: 'Empowering investors to unlock their full potential. We seize growth opportunities across diverse sectors, driving exceptional returns while creating lasting value for investors and communities.',
  },
]

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

  return (
    <SectionContainer surface="canvas" spacing="lg" className="pb-10 md:pb-14">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Who We Are</Eyebrow>
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
              Building Sustainable Value Through Strategic Investments
            </Heading>
            <p className="max-w-measure text-body-lg text-text-secondary">
              Al Quba Investment LLC is a diversified investment company
              headquartered in Dubai, focused on identifying and managing
              opportunities across trading, logistics, real estate,
              technology, and global commerce. We combine strategic
              thinking, disciplined capital management, and responsible
              governance to deliver sustainable long-term value for our
              investors and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {visionMission.map((item) => (
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
