'use client'

import * as React from 'react'
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import {
  fadeUp,
  fadeOnly,
  staggerContainer,
  defaultViewport,
  repeatViewport,
} from '@/lib/animations'

/**
 * FadeIn — the default content reveal used across the site.
 * Wrap any block that should animate in once as it enters the viewport.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  as = 'div',
  repeat = false,
  ...props
}: HTMLMotionProps<'div'> & { delay?: number; as?: React.ElementType; repeat?: boolean }) {
  const prefersReduced = useReducedMotion()
  const MotionTag = motion[as as 'div'] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={repeat ? repeatViewport : defaultViewport}
      variants={prefersReduced ? fadeOnly : fadeUp}
      transition={{ delay }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

/**
 * RevealOnScroll — semantic alias of FadeIn for section-level reveals.
 * Kept as a distinct export for readability in page composition.
 */
export const RevealOnScroll = FadeIn

/**
 * Stagger — wraps a list of children (each should be a StaggerItem or
 * motion element using fadeUp) and staggers their entrance.
 *
 * `repeat` replays the whole stagger every time the group scrolls back
 * into view. The children need no change: they follow the parent's
 * variant state, so returning the parent to `hidden` on exit rewinds
 * them together and the next entry re-runs the cascade.
 */
export function Stagger({
  children,
  className,
  repeat = false,
  ...props
}: HTMLMotionProps<'div'> & { repeat?: boolean }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={repeat ? repeatViewport : defaultViewport}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div className={className} variants={prefersReduced ? fadeOnly : fadeUp} {...props}>
      {children}
    </motion.div>
  )
}
