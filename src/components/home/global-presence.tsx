'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { Eyebrow, Heading } from '@/components/typography/heading'

interface Office {
  country: string
  x: number
  y: number
}

/** Country names only — x/y map coordinates are locale-independent. */
const officesByLocale: Record<'en' | 'ar', Office[]> = {
  en: [
    { country: 'United Kingdom', x: 41, y: 26 },
    { country: 'Africa', x: 46, y: 56 },
    { country: 'Bangladesh', x: 69, y: 41 },
    { country: 'Turkey', x: 51, y: 34 },
    { country: 'Egypt', x: 49, y: 41 },
    { country: 'China', x: 73, y: 33 },
    { country: 'India', x: 65, y: 43 },
    { country: 'GCC', x: 55, y: 45 },
  ],
  ar: [
    { country: 'المملكة المتحدة', x: 41, y: 26 },
    { country: 'أفريقيا', x: 46, y: 56 },
    { country: 'بنغلاديش', x: 69, y: 41 },
    { country: 'تركيا', x: 51, y: 34 },
    { country: 'مصر', x: 49, y: 41 },
    { country: 'الصين', x: 73, y: 33 },
    { country: 'الهند', x: 65, y: 43 },
    { country: 'دول مجلس التعاون الخليجي', x: 55, y: 45 },
  ],
}

const headingCopy = {
  en: {
    eyebrow: 'Global Presence',
    title: 'Eight countries. One trade network.',
    description: 'Our operating footprint follows the physical trade lanes our capital moves through, not a marketing map.',
  },
  ar: {
    eyebrow: 'الحضور العالمي',
    title: 'ثماني دول. شبكة تجارية واحدة.',
    description: 'يتبع نطاق عملياتنا ممرات التجارة الفعلية التي يتحرك عبرها رأس مالنا، لا خريطة تسويقية.',
  },
} as const

/** Short diagonal "kink" near the dot before the line straightens out
 *  horizontally to touch the country name — matches a hand-drawn leader
 *  line rather than a plain diagonal. */
const KINK_LENGTH = 32

function CountryList({
  items,
  activeCountry,
  align,
  registerRef,
}: {
  items: Office[]
  activeCountry: string | undefined
  align: 'left' | 'right'
  registerRef: (country: string, el: HTMLLIElement | null) => void
}) {
  return (
    <ul
      className={cn(
        'flex flex-col border-t border-border-ink',
        align === 'right' && 'lg:items-end lg:text-right'
      )}
    >
      {items.map((office) => {
        const isActive = activeCountry === office.country
        return (
          <li
            key={office.country}
            ref={(el) => registerRef(office.country, el)}
            className={cn(
              'border-b border-border-ink py-3 text-body-sm font-medium transition-colors duration-300',
              isActive ? 'text-accent-on-ink' : 'text-text-inverse-muted'
            )}
          >
            {office.country}
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Section 8 — Global Presence.
 * The scroll-jacked sticky pin + one-dot-at-a-time cycling now runs at
 * every breakpoint, not just `lg` — the user explicitly wants the same
 * scroll-driven animation on mobile rather than a static "all dots at
 * once" fallback. Below `lg`, the two country-name side lists (with
 * their leader lines) are hidden in favor of a single compact readout
 * (dot + country name + progress dots) stacked under the map, since the
 * full 3-column layout's header + two 4-item lists + map would overflow
 * a phone's viewport while pinned — the compact mobile view guarantees
 * everything fits within `h-dvh` regardless of screen height.
 */
export function GlobalPresence() {
  const locale = useLocale() as keyof typeof officesByLocale
  const offices = officesByLocale[locale]
  const heading = headingCopy[locale]
  const leftOffices = offices.slice(0, 4)
  const rightOffices = offices.slice(4)

  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const gridRef = React.useRef<HTMLDivElement>(null)
  const mapBoxRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<Record<string, HTMLLIElement | null>>({})

  const [activeIndex, setActiveIndex] = React.useState(0)
  const [linePath, setLinePath] = React.useState<string | null>(null)
  const [isWideLayout, setIsWideLayout] = React.useState(false)

  const registerRef = React.useCallback((country: string, el: HTMLLIElement | null) => {
    itemRefs.current[country] = el
  }, [])

  // The wrapper is much taller than the viewport; the section inside it is
  // `sticky`, so it locks in place for the whole scroll transit while
  // activeIndex cycles through the offices, then releases once the
  // wrapper's bottom clears the viewport.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const index = Math.min(
      offices.length - 1,
      Math.floor(progress * offices.length)
    )
    setActiveIndex(Math.max(0, index))
  })

  const active = offices[activeIndex]

  // Only the leader-line geometry and the 3-column list layout need the
  // `lg` breakpoint — the cycling animation itself now runs everywhere.
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsWideLayout(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Draws the connector line by geometry (map % position + list item's
  // real DOM rect) rather than measuring the animated dot, so it stays
  // accurate regardless of the dot's own enter/exit transition state.
  React.useEffect(() => {
    const recompute = () => {
      const grid = gridRef.current
      const mapBox = mapBoxRef.current
      const item = itemRefs.current[active.country]
      if (!isWideLayout || !grid || !mapBox || !item) {
        setLinePath(null)
        return
      }

      const gridRect = grid.getBoundingClientRect()
      const mapRect = mapBox.getBoundingClientRect()
      const itemRect = item.getBoundingClientRect()

      const dotX = mapRect.left + (active.x / 100) * mapRect.width - gridRect.left
      const dotY = mapRect.top + (active.y / 100) * mapRect.height - gridRect.top

      const isLeft = leftOffices.some((o) => o.country === active.country)
      // Touches the exact edge of the list item nearest the map, flush
      // against the country name.
      const itemX = (isLeft ? itemRect.right : itemRect.left) - gridRect.left
      const itemY = itemRect.top + itemRect.height / 2 - gridRect.top

      // Short diagonal "kink" leaving the dot, then a straight horizontal
      // run into the list item — a leader line, not a plain diagonal.
      const dx = itemX - dotX
      const direction = dx < 0 ? -1 : 1
      const kinkX = Math.abs(dx) > KINK_LENGTH ? dotX + direction * KINK_LENGTH : itemX

      setLinePath(`M ${dotX} ${dotY} L ${kinkX} ${itemY} L ${itemX} ${itemY}`)
    }

    recompute()
    window.addEventListener('resize', recompute)
    return () => window.removeEventListener('resize', recompute)
  }, [active, isWideLayout, leftOffices])

  return (
    <div ref={wrapperRef} className="relative h-[420vh]">
      <section className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden bg-ink py-12 text-text-inverse md:py-20 lg:py-28">
        <div className="container mx-auto max-w-container">

          {/* Header */}
          <div className="mb-6 flex flex-col gap-3 lg:mb-10 lg:gap-4">
            <Eyebrow inverse>{heading.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" inverse>
              {heading.title}
            </Heading>
            <p className="hidden text-body-md text-text-inverse-muted lg:block">{heading.description}</p>
          </div>

          {/* Compact mobile/tablet view: map with a single cycling dot,
              the active country name, and a progress-dot row — all of it
              fits comfortably within the pinned viewport regardless of
              phone height. */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <div className="relative mx-auto aspect-[1761/893] w-full max-w-[420px]">
              <Image
                src="/map.png"
                alt="World map showing Al Quba Investment's office locations"
                fill
                sizes="100vw"
                className="object-contain"
                priority={false}
              />
              <AnimatePresence mode="wait">
                {active && (
                  <motion.span
                    key={active.country}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${active.x}%`, top: `${active.y}%` }}
                  >
                    <span className="relative flex items-center justify-center">
                      <span className="absolute size-5 animate-ping rounded-full bg-[#7A5C31] opacity-40" />
                      <span className="relative size-3 rounded-full bg-[#7A5C31]" />
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {active && (
                <motion.p
                  key={active.country}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="text-body-lg font-semibold text-accent-on-ink"
                >
                  {active.country}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-1.5" aria-hidden>
              {offices.map((office, i) => (
                <span
                  key={office.country}
                  className={cn(
                    'h-1 rounded-full transition-all duration-300',
                    i === activeIndex ? 'w-6 bg-accent-on-ink' : 'w-1.5 bg-white/20'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Wide layout (lg+): country list left, map center, country
              list right, with a leader line drawn to the active item. */}
          <div
            ref={gridRef}
            className="relative hidden items-center gap-6 lg:grid lg:grid-cols-[180px_1fr_180px]"
          >

            <CountryList
              items={leftOffices}
              activeCountry={active?.country}
              align="left"
              registerRef={registerRef}
            />

            <div className="px-6">
              <div ref={mapBoxRef} className="relative mx-auto aspect-[1761/893] w-full max-w-[560px]">
                <Image
                  src="/map.png"
                  alt="World map showing Al Quba Investment's office locations"
                  fill
                  sizes="40vw"
                  className="object-contain"
                  priority={false}
                />

                <AnimatePresence mode="wait">
                  {active && (
                    <motion.span
                      key={active.country}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${active.x}%`, top: `${active.y}%` }}
                    >
                      <span className="relative flex items-center justify-center">
                        <span className="absolute size-5 animate-ping rounded-full bg-[#7A5C31] opacity-40" />
                        <span className="relative size-3 rounded-full bg-[#7A5C31]" />
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <CountryList
              items={rightOffices}
              activeCountry={active?.country}
              align="right"
              registerRef={registerRef}
            />

            {/* Connector line from the dot straight to the highlighted
                country name in whichever list it lives in. */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
              {linePath && (
                <path
                  d={linePath}
                  fill="none"
                  stroke="#F7F6F2"
                  strokeWidth={1}
                  strokeOpacity={0.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>

          </div>
        </div>
      </section>
    </div>
  )
}
