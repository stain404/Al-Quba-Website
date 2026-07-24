'use client'

import * as React from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { TimelineEntry } from '@/types'

export interface TimelineProps {
  entries: TimelineEntry[]
  className?: string
}

/**
 * Vertical editorial timeline — a real chronological sequence (firm history,
 * fund milestones), so the year markers carry genuine information.
 *
 * Entries reveal one at a time (sliding in from the left, then staying)
 * as a single shared scroll progress value — tracked across the whole
 * list, not per-item — advances. Because ordering falls out of one
 * continuous number rather than independent triggers, scrolling back up
 * retreats entries in reverse automatically: the most recently revealed
 * (bottom-most) entry slides back out first, working back up to the top.
 */
export function Timeline({ entries, className }: TimelineProps) {
  const ref = React.useRef<HTMLOListElement>(null)
  const [revealedCount, setRevealedCount] = React.useState(0)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // Compresses the 0→1 transit into a shorter window (0→COMPRESS) so the
    // full reveal finishes with room to spare before the list scrolls out
    // of view — unlike a flat additive shift, this keeps progress 0 mapped
    // to effective 0, so the first entry still reveals/retreats visibly
    // right at the very start/end of the transit instead of already being
    // shown (or never animating back) from the outset.
    const COMPRESS = 0.7
    const effective = Math.max(0, Math.min(1, progress / COMPRESS))
    const count = Math.round(effective * entries.length)
    setRevealedCount((prev) => (prev === count ? prev : count))
  })

  return (
    <ol ref={ref} className={cn('relative flex flex-col gap-16 overflow-x-hidden', className)}>
      <span className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block" aria-hidden />
      {entries.map((entry, i) => {
        const revealed = i < revealedCount
        return (
          <li
            key={entry.year}
            className={cn(
              'relative grid grid-cols-1 gap-5 transition-all duration-700 ease-institutional md:grid-cols-[220px_1fr] md:gap-10 md:pl-10',
              revealed ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            <span className="absolute left-0 top-2 hidden size-[15px] items-center justify-center rounded-full border-2 border-accent bg-canvas md:flex" aria-hidden>
              {entry.icon}
            </span>
            <span className="font-mono text-data-md text-text-primary">{entry.year}</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-heading-md font-semibold text-text-primary">{entry.title}</h3>
              <p className="max-w-measure text-body-md text-text-secondary">{entry.description}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
