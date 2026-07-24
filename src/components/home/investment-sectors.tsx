'use client'

import * as React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'

interface SectorPanel {
  label: string
  description: string
  /** Placeholder photo — swap for real sector photography later. */
  image: string
}

/**
 * Kept in lockstep with the "Our Ecosystem" mega menu column
 * (src/lib/site-config.ts) — same 5 sectors, same taglines, same order —
 * so Home and the nav never disagree about what the firm invests in.
 */
const panels: SectorPanel[] = [
  {
    label: 'Global Exports Division',
    description: 'International trade led by Hebron General Trading LLC.',
    image: '/Trading.png',
  },
  {
    // Shortened for this collapsed vertical strip specifically — the
    // sector page itself uses the full "Infrastructure, Contracting &
    // Built Environments" name.
    label: 'Infrastructure & Contracting',
    description: 'Construction and contracting led by Bright Hurst.',
    image: '/realestate.webp',
  },
  {
    label: 'Logistics & Supply Chain',
    description: 'Freight and logistics led by NobleStar Shipping.',
    image: '/shipping.webp',
  },
  {
    label: 'Import & Export',
    description: 'Global sourcing led by ContainerKart and Al Wahda Trading.',
    image: '/importexport.png',
  },
  {
    label: 'Brand Strategy',
    description: 'Creative and digital solutions led by Phew Interactive.',
    image: '/tech.png',
  },
]

/**
 * A single accordion panel. Collapsed, it's a narrow strip showing just
 * the label (rotated vertically on desktop); active, it expands to show
 * the full description and arrow. Hovering a collapsed panel activates
 * it — only one panel is expanded at a time.
 */
function Panel({
  panel,
  isActive,
  onActivate,
}: {
  panel: SectorPanel
  isActive: boolean
  onActivate: () => void
}) {
  return (
    <div
      onClick={onActivate}
      className={cn(
        'group relative flex cursor-pointer flex-col overflow-hidden rounded-lg transition-[flex-grow] duration-500 ease-in-out lg:flex-row',
        isActive ? 'flex-1 lg:flex-[3.5]' : 'flex-[0.2] lg:w-16 lg:flex-[0.55]'
      )}
    >
      <Image
        src={panel.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 30vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={false}
      />

      <div
        className={cn(
          'absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500',
          isActive
            ? 'h-[60%] lg:h-[40%]'
            : 'h-full w-[70%] bg-gradient-to-r lg:h-[70%] lg:w-full lg:bg-gradient-to-t'
        )}
      />

      <div className="relative z-10 flex h-full w-full flex-row lg:flex-col">
        {!isActive && (
          <div className="flex h-full items-center justify-center px-4 py-8 transition-all duration-500 lg:px-4 lg:py-10 lg:[writing-mode:vertical-lr]">
            <h3 className="whitespace-nowrap font-semibold text-body-md text-white/75 lg:rotate-180">{panel.label}</h3>
          </div>
        )}

        {isActive && (
          <div className="relative flex flex-1 flex-col justify-between px-5 py-4 sm:px-6 lg:px-8 xl:px-10 xl:py-6">
            <h3 className="w-fit font-semibold text-body-md text-white">{panel.label}</h3>
            <div className="flex items-end justify-between gap-5 lg:gap-9">
              <p className="max-w-[85%] text-body-sm text-white lg:max-w-[80%]">{panel.description}</p>
              <ArrowUpRight className="size-8 shrink-0 text-white" strokeWidth={1.5} aria-hidden />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Section 5 — Investment Sectors.
 * A horizontal (vertical on mobile) accordion of sector panels — one
 * expanded at a time, others collapsed to a labeled strip. Hovering a
 * collapsed panel expands it.
 */
export function InvestmentSectors() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <SectionContainer
      id="sectors"
      surface="ink"
      spacing="sm"
      className="flex min-h-screen w-full flex-col justify-center"
    >
      <SectionHeading eyebrow="Where We Invest" title="Five sectors, one disciplined thesis" align="left" inverse />

      <div className="mt-10 flex h-[420px] flex-col gap-2 lg:h-[320px] lg:flex-row xl:gap-2.5">
        {panels.map((panel, index) => (
          <Panel
            key={panel.label}
            panel={panel}
            isActive={index === activeIndex}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
