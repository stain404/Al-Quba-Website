'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'

/**
 * Section 9 — Our Ecosystem.
 * A single graphic summarizing the partners and companies that make up
 * Al Quba's trade network. Kept as one image (not rebuilt into a
 * node/line diagram), enhanced with a gentle scale+fade entrance, a
 * subtle scroll-linked parallax drift, and a soft hover glow/scale —
 * restrained motion that doesn't compete with the diagram itself.
 */
export function OurEcosystem() {
  const ref = React.useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [16, -16])

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SectionHeading eyebrow="Our Ecosystem" title="The partners behind our trade network" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.97, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="group relative mt-16 aspect-[1628/966] w-full overflow-hidden rounded-lg shadow-sm transition-shadow duration-500 hover:shadow-lg"
      >
        <motion.div style={prefersReduced ? undefined : { y }} className="absolute inset-0">
          <Image
            src="/portfolio.png"
            alt="Al Quba Investment ecosystem partners"
            fill
            sizes="100vw"
            className="object-contain transition-transform duration-700 ease-institutional group-hover:scale-[1.02]"
          />
        </motion.div>
        {/* Soft gold glow on hover — a floating, alive feel without any
            literal moving parts inside the diagram itself. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle at 50% 50%, var(--color-accent) 0%, transparent 70%)',
            mixBlendMode: 'soft-light',
          }}
          aria-hidden
        />
      </motion.div>
    </SectionContainer>
  )
}
