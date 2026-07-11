import type { Variants, Transition } from 'framer-motion'

/**
 * Shared motion tokens for Al Quba Investment.
 * Philosophy: decelerated reveals, small travel distance, no overshoot.
 * See design-system/DESIGN_SYSTEM.md section 6.
 */

export const easeInstitutional = [0.16, 1, 0.3, 1] as const

export const durations = {
  micro: 0.18,
  content: 0.5,
  section: 0.8,
} as const

export const staggerChildren = 0.08

export const transitionContent: Transition = {
  duration: durations.content,
  ease: easeInstitutional,
}

export const transitionMicro: Transition = {
  duration: durations.micro,
  ease: easeInstitutional,
}

/** Fade + small rise. Default reveal for most content blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionContent,
  },
}

/** Fade only — used when reduced motion is preferred, or for subtle chrome. */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionContent },
}

/** Parent wrapper that staggers its children's fadeUp animation. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren: 0.05,
    },
  },
}

/** Horizontal reveal, used sparingly (e.g. timeline entries alternating sides). */
export const fadeSide = (direction: 'left' | 'right' = 'left'): Variants => ({
  hidden: { opacity: 0, x: direction === 'left' ? -24 : 24, transition: transitionContent },
  visible: { opacity: 1, x: 0, transition: transitionContent },
})

/** Scale-in for modals, mega menu panels — restrained, no bounce. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: transitionMicro },
}

/** Height auto-expand for accordions / mega menu / mobile nav. */
export const expandCollapse: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: transitionContent },
}

export const defaultViewport = { once: true, margin: '-80px' }
