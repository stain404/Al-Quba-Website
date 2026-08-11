'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from 'next-intl'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
    previous: 'Previous country',
    next: 'Next country',
  },
  ar: {
    eyebrow: 'الحضور العالمي',
    title: 'ثماني دول. شبكة تجارية واحدة.',
    description: 'يتبع نطاق عملياتنا ممرات التجارة الفعلية التي يتحرك عبرها رأس مالنا، لا خريطة تسويقية.',
    previous: 'الدولة السابقة',
    next: 'الدولة التالية',
  },
} as const

/**
 * Prev/next control flanking the map. Physically left = previous and
 * right = next in both locales rather than mirroring under RTL: these
 * step through pins on a world map, so the direction users read as
 * "back" is the one that moves left across the map, not the one that
 * matches text flow.
 */
function MapNavButton({
  direction,
  label,
  onClick,
  className,
}: {
  direction: 'previous' | 'next'
  label: string
  onClick: () => void
  className?: string
}) {
  const Icon = direction === 'previous' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-text-inverse backdrop-blur-sm transition-colors duration-200 hover:border-accent/50 hover:bg-ink hover:text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:size-11',
        className
      )}
    >
      <Icon className="size-5" strokeWidth={1.5} aria-hidden />
    </button>
  )
}

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

  const gridRef = React.useRef<HTMLDivElement>(null)
  const mapBoxRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<Record<string, HTMLLIElement | null>>({})

  const [activeIndex, setActiveIndex] = React.useState(0)
  const [linePath, setLinePath] = React.useState<string | null>(null)
  const [isWideLayout, setIsWideLayout] = React.useState(false)

  const registerRef = React.useCallback((country: string, el: HTMLLIElement | null) => {
    itemRefs.current[country] = el
  }, [])

  // Wraps at both ends, so the controls never dead-end on a disabled
  // button — there's no first or last country here, just a loop.
  const step = React.useCallback(
    (delta: number) => {
      setActiveIndex((current) => (current + delta + offices.length) % offices.length)
    },
    [offices.length]
  )

  const active = offices[activeIndex]

  // Only the leader-line geometry and the 3-column list layout need the
  // `lg` breakpoint.
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
    /* No scroll runway and no sticky pin: the country cycle is driven by
       the prev/next controls flanking the map, so this is an ordinary
       section sized to its own content. */
    <section className="overflow-hidden bg-ink py-20 text-text-inverse md:py-24 lg:py-28">
      <div className="container mx-auto max-w-container">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 lg:mb-10 lg:gap-4">
          <Eyebrow inverse>{heading.eyebrow}</Eyebrow>
          <Heading as="h2" size="display-md" inverse>
            {heading.title}
          </Heading>
          <p className="text-body-sm text-text-inverse-muted lg:text-body-md">{heading.description}</p>
        </div>

        {/* Compact mobile/tablet view: map with a single dot, the active
            country name, and a progress-dot row. */}
        <div className="flex flex-col items-center gap-7 lg:hidden">
          {/* Padded inward so the flanking controls have somewhere to sit
              without overlapping the landmasses — the map itself is a
              wide, short 1761:893 and its dots sit well inside the
              frame. */}
          <div className="relative w-full px-11">
            <MapNavButton direction="previous" label={heading.previous} onClick={() => step(-1)} className="left-0" />
            <MapNavButton direction="next" label={heading.next} onClick={() => step(1)} className="right-0" />
            <div className="relative mx-auto aspect-[1761/893] w-full max-w-[560px]">
              <Image
                src="/map.png"
                alt="World map showing Al Quba Investment's office locations"
                fill
                sizes="(min-width: 640px) 560px, 100vw"
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

            {/* The px-6 gutter is where the controls sit, clear of both
                the map and the country lists either side of it. */}
            <div className="relative px-6">
              <MapNavButton direction="previous" label={heading.previous} onClick={() => step(-1)} className="-left-2" />
              <MapNavButton direction="next" label={heading.next} onClick={() => step(1)} className="-right-2" />
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
  )
}
