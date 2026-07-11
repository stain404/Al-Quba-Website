'use client'

import * as React from 'react'
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { fadeUp, fadeOnly, staggerContainer, defaultViewport } from '@/lib/animations'

/**
 * FadeIn — the default content reveal used across the site.
 * Wrap any block that should animate in once as it enters the viewport.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  as = 'div',
  ...props
}: HTMLMotionProps<'div'> & { delay?: number; as?: React.ElementType }) {
  const prefersReduced = useReducedMotion()
  const MotionTag = motion[as as 'div'] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
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
 */
export function Stagger({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
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
