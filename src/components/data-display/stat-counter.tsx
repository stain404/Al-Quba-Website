'use client'

import * as React from 'react'
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { StatItem } from '@/types'

interface StatCounterProps extends StatItem {
  inverse?: boolean
  className?: string
}

/**
 * Counts up from 0 to `value` once the element enters the viewport.
 * Uses a spring so the motion decelerates naturally rather than ticking
 * linearly — reads as precise, not gimmicky.
 */
export function StatCounter({
  label,
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  description,
  inverse = false,
  className,
}: StatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, prefersReduced ? { damping: 100, stiffness: 400 } : { damping: 30, stiffness: 90 })
  const [display, setDisplay] = React.useState('0')

  React.useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, motionValue, value])

  React.useEffect(() => {
    const unsub = spring.on('change', (latest) => {
      setDisplay(latest.toFixed(decimals))
    })
    return unsub
  }, [spring, decimals])

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span
        ref={ref}
        className={cn(
          'font-mono text-data-lg tabular-nums',
          inverse ? 'text-text-inverse' : 'text-text-primary'
        )}
      >
        {prefix}
        {display}
        {suffix}
      </span>
      <div className="flex flex-col gap-1">
        <span className={cn('h-px w-6 bg-accent', inverse ? '' : '')} aria-hidden />
        <span className={cn('text-body-sm font-medium', inverse ? 'text-text-inverse-muted' : 'text-text-secondary')}>
          {label}
        </span>
        {description && (
          <span className={cn('text-caption', inverse ? 'text-text-inverse-muted' : 'text-text-tertiary')}>
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

export function StatGrid({
  children,
  columns = 4,
}: {
  children: React.ReactNode
  columns?: 2 | 3 | 4
}) {
  const colClass = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }[columns]
  return (
    <motion.div className={cn('grid grid-cols-1 gap-10 sm:grid-cols-2', colClass)}>
      {children}
    </motion.div>
  )
}
