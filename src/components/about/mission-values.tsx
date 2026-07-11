'use client'

import { ShieldCheck, Compass, HandCoins, Handshake } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { SectionContainer, SplitContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import { FadeIn } from '@/components/motion/reveal'
import type { FeatureItem } from '@/types'

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
 * About / Mission & Values.
 * Editorial split (label column + content), same pattern used on the
 * Home "About Preview" section for continuity, but here it introduces
 * the FeatureCard grid rather than a photograph.
 */
export function MissionValues() {
  const prefersReduced = useReducedMotion()

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SplitContainer>
        <FadeIn>
          <Eyebrow>Our Mission</Eyebrow>
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
              To be the investment partner institutions call before anyone else.
            </Heading>
            <p className="max-w-measure text-body-lg text-text-secondary">
              We measure success across decades, not quarters. Four values
              govern how that mission gets executed day to day.
            </p>
          </motion.div>

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
