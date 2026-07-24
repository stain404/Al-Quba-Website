'use client'

import { ShieldCheck, Compass, HandCoins, Handshake } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import { FadeIn } from '@/components/motion/reveal'
import type { FeatureItem } from '@/types'

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

const values: FeatureItem[] = [
  {
    icon: <ShieldCheck className="size-6" strokeWidth={1.5} aria-hidden />,
    title: 'Stewardship',
    description: 'We treat every mandate as if it were our own family capital, because in most cases, it is invested alongside it.',
  },
  {
    icon: <Compass className="size-6" strokeWidth={1.5} aria-hidden />,
    title: 'Discipline',
    description: 'A formal risk committee reviews every allocation before deployment, regardless of relationship or size.',
  },
  {
    icon: <HandCoins className="size-6" strokeWidth={1.5} aria-hidden />,
    title: 'Transparency',
    description: 'Investors receive full visibility into the physical trade cycles their capital is collateralized against.',
  },
  {
    icon: <Handshake className="size-6" strokeWidth={1.5} aria-hidden />,
    title: 'Partnership',
    description: 'We structure terms around multi-year relationships, not one-off placements.',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, transition: { duration: 0.6, ease: 'easeInOut' } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/**
 * Each value card reveals from below as it scrolls into view and retreats
 * back down when it scrolls out (`viewport.once: false`, so it's fully
 * reversible). Uses a viewport-intersection trigger rather than a
 * continuously-scrubbed transform — this section sits close enough to
 * the top of the page that a pixel-offset-based scroll transform can
 * already be past its own "hidden" range on load, which is what made it
 * not animate at all.
 */
function AnimatedValueCard({ value }: { value: FeatureItem }) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? undefined : 'hidden'}
      whileInView={prefersReduced ? undefined : 'visible'}
      viewport={prefersReduced ? undefined : { once: false, amount: 0.3 }}
      variants={prefersReduced ? undefined : cardVariants}
      className="h-full"
    >
      <FeatureCard {...value} wrap={false} />
    </motion.div>
  )
}

/**
 * About / Who We Are, Vision & Mission, Core Values.
 * Editorial split (label column + content), same pattern used on the
 * Home "About Preview" section for continuity: an intro statement, the
 * vision/mission pairing as two equal cards, then the FeatureCard grid
 * of values.
 */
export function MissionValues() {
  const prefersReduced = useReducedMotion()

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Who We Are</Eyebrow>
        </FadeIn>

        <div className="flex flex-col gap-14">
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
              <Card key={item.label} surface="canvas" padding="lg" className="flex flex-col gap-4">
                <span className="h-px w-8 bg-accent" aria-hidden />
                <h3 className="text-heading-md font-display font-semibold text-text-primary">{item.label}</h3>
                <p className="text-body-md text-text-secondary">{item.body}</p>
              </Card>
            ))}
          </div>

          <FeatureGrid>
            {values.map((value) => (
              <AnimatedValueCard key={value.title} value={value} />
            ))}
          </FeatureGrid>
        </div>
      </SplitContainer>
    </SectionContainer>
  )
}
