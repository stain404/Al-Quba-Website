'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { transitionContent } from '@/lib/animations'

export function CareersHero() {
  const prefersReduced = useReducedMotion()

  const fadeIn = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { ...transitionContent, delay },
        }

  return (
    <section
      aria-label="Careers at Al Quba Investment"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/office.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark navy overlay at 55% */}
        <div className="absolute inset-0 bg-ink/55" />
        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-container pb-24 pt-44">
        <div className="flex max-w-3xl flex-col gap-8">
          <motion.span
            {...fadeIn(0.1)}
            className="text-eyebrow uppercase tracking-[0.22em] text-accent-ink"
          >
            Careers
          </motion.span>

          <motion.h1
            {...fadeIn(0.2)}
            className="font-display text-[clamp(2.5rem,5vw+1rem,4rem)] font-bold leading-[1.1] text-text-inverse"
          >
            Build the Future of<br />Global Investment
          </motion.h1>

          <motion.p {...fadeIn(0.3)} className="max-w-xl text-body-lg leading-relaxed text-text-inverse/80">
            Join a team that's shaping businesses, enabling global trade, and creating
            long-term value across industries. At Al Quba Investment Group, every role
            contributes to disciplined growth, innovation, and meaningful impact.
          </motion.p>

          <motion.div {...fadeIn(0.4)} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="gold" size="lg" withArrow asChild className="group">
              <Link href="#openings">View Current Openings</Link>
            </Button>
            <Button variant="ghost-inverse" size="lg" asChild>
              <Link href="#life">Life at Al Quba</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-inverse/50"
        animate={prefersReduced ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="size-5" strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
