'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { ArrowRight, TrendingUp, Building2, Ship, PackageSearch, Cpu, type LucideIcon } from 'lucide-react'

interface Sector {
  icon: LucideIcon
  number: string
  name: string
  description: string
  href: string
}

const sectors: Sector[] = [
  {
    icon: TrendingUp,
    number: '01',
    name: 'Trading',
    description:
      'Global commodity and structured trade desks, positioned across energy, metals, and soft commodities with disciplined hedging.',
    href: '/sectors/trading',
  },
  {
    icon: Building2,
    number: '02',
    name: 'Real Estate',
    description:
      'Direct ownership and development across prime residential and commercial assets in Dubai, London, and Southeast Asia.',
    href: '/sectors/real-estate',
  },
  {
    icon: Ship,
    number: '03',
    name: 'Shipping',
    description:
      'Marine logistics and freight capital — vessel financing and charter operations across Gulf and Indian Ocean trade lanes.',
    href: '/sectors/shipping',
  },
  {
    icon: PackageSearch,
    number: '04',
    name: 'Import & Export',
    description:
      'Cross-border trade finance connecting manufacturers and distributors across emerging and established markets.',
    href: '/sectors/import-export',
  },
  {
    icon: Cpu,
    number: '05',
    name: 'Technology',
    description:
      'Direct equity in software and infrastructure companies building the technology behind modern trade.',
    href: '/sectors/technology',
  },
]

/**
 * Section 5 — Investment Sectors.
 * The section is wrapped in a tall scroll buffer and the visible content is
 * `sticky`, so it locks in place on screen (same mechanic as Global
 * Presence) while scroll progress cycles through which sector is active —
 * its name highlights in the list and its description types in on the
 * right, word by word. Scrolling back up reverses the sequence since it's
 * all driven by one continuously-tracked scroll value rather than
 * independent per-row triggers.
 */
export function InvestmentSectors() {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [typedCount, setTypedCount] = React.useState(0)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const total = sectors.length
    const index = Math.max(0, Math.min(total - 1, Math.floor(progress * total)))
    const start = index / total
    const end = (index + 1) / total
    const t = Math.min(1, Math.max(0, (progress - start) / (end - start)))
    const words = sectors[index].description.split(' ').length

    setActiveIndex((prev) => (prev === index ? prev : index))
    setTypedCount((prev) => {
      const next = Math.round(t * words)
      return prev === next ? prev : next
    })
  })

  const active = sectors[activeIndex]
  const descriptionWords = active.description.split(' ')

  return (
    <div ref={wrapperRef} className="relative h-[350vh]">
      <SectionContainer
        id="sectors"
        surface="canvas"
        spacing="lg"
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
      >
        <SectionHeading eyebrow="Where We Invest" title="Five sectors, one disciplined thesis" align="left" />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-16">
          {/* Sector list */}
          <ul className="flex flex-col border-t border-border">
            {sectors.map((sector, index) => {
              const isActive = index === activeIndex
              return (
                <li key={sector.name} className="border-b border-border">
                  <Link
                    href={sector.href}
                    className={cn(
                      'flex items-center gap-4 py-4 text-heading-sm font-display transition-colors duration-300',
                      isActive ? 'text-accent-ink' : 'text-text-tertiary'
                    )}
                  >
                    <span className="font-mono text-body-sm">{sector.number}</span>
                    {sector.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Active sector spotlight */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <active.icon className="size-8 text-navy" strokeWidth={1.5} aria-hidden />
                <span className="text-heading-lg font-display text-text-primary">{active.name}</span>
              </div>

              <p className="max-w-measure text-body-lg text-text-secondary">
                {prefersReduced
                  ? active.description
                  : descriptionWords.map((word, i) => (
                      <span
                        key={i}
                        className={cn(
                          'inline-block whitespace-pre transition-opacity duration-150 ease-out',
                          i < typedCount ? 'opacity-100' : 'opacity-0'
                        )}
                      >
                        {word}
                        {i < descriptionWords.length - 1 ? ' ' : ''}
                      </span>
                    ))}
              </p>

              <Link
                href={active.href}
                className="group inline-flex w-fit items-center gap-2 text-body-sm font-medium text-accent-ink"
              >
                Explore {active.name}
                <ArrowRight
                  className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionContainer>
    </div>
  )
}
