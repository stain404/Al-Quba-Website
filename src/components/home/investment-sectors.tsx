'use client'

import * as React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'

interface SectorPanel {
  label: string
  description: string
  /** Placeholder photo — swap for real sector photography later. */
  image: string
  /** Sector detail page this panel opens — same hrefs as the mega menu. */
  href: string
}

/**
 * Kept in lockstep with the "Our Ecosystem" mega menu column
 * (src/lib/site-config.ts) — same 6 sectors, same taglines, same order —
 * so Home and the nav never disagree about what the firm invests in.
 */
const panelsByLocale: Record<'en' | 'ar', SectorPanel[]> = {
  en: [
    {
      label: 'International Trading',
      description: 'Global trade led by Hebron, ContainerKart, and Al Wahda Trading.',
      image: '/Trading.png',
      href: '/sectors/global-exports',
    },
    {
      label: 'Real Estate',
      description: 'Construction and contracting led by Bright Hurst.',
      image: '/realestate.jpeg',
      href: '/sectors/infrastructure-contracting',
    },
    {
      label: 'Shipping & Logistics',
      description: 'Freight and logistics led by NobleStar Shipping.',
      image: '/shipping.jpeg',
      href: '/sectors/logistics-supply-chain',
    },
    {
      label: 'Import & Export',
      description: 'Cross-border sourcing and digital procurement.',
      image: '/importexport.jpeg',
      href: '/sectors/import-export',
    },
    {
      label: 'Brand Strategy',
      description: 'Creative and digital solutions led by Phew Interactive.',
      image: '/brandandstrategy.png',
      href: '/sectors/brand-strategy',
    },
    {
      label: 'Tourism',
      description: 'Travel and hospitality led by Mapshore.',
      image: '/toursim.jpg',
      href: '/sectors/tourism',
    },
  ],
  ar: [
    {
      label: 'التجارة الدولية',
      description: 'تجارة عالمية بقيادة حبرون وكونتينر كارت والوحدة للتجارة.',
      image: '/Trading.png',
      href: '/sectors/global-exports',
    },
    {
      label: 'العقارات',
      description: 'بناء ومقاولات بقيادة برايت هيرست.',
      image: '/realestate.jpeg',
      href: '/sectors/infrastructure-contracting',
    },
    {
      label: 'الشحن والخدمات اللوجستية',
      description: 'شحن وخدمات لوجستية بقيادة نوبل ستار للشحن.',
      image: '/shipping.jpeg',
      href: '/sectors/logistics-supply-chain',
    },
    {
      label: 'الاستيراد والتصدير',
      description: 'التوريد العابر للحدود والمشتريات الرقمية.',
      image: '/importexport.jpeg',
      href: '/sectors/import-export',
    },
    {
      label: 'استراتيجية العلامة التجارية',
      description: 'حلول إبداعية ورقمية بقيادة فيو إنتراكتيف.',
      image: '/brandandstrategy.png',
      href: '/sectors/brand-strategy',
    },
    {
      label: 'السياحة',
      description: 'سفر وضيافة بقيادة مابشور.',
      image: '/toursim.jpg',
      href: '/sectors/tourism',
    },
  ],
}

const headingCopy = {
  en: { eyebrow: 'Where We Invest', title: 'Six sectors, one disciplined thesis' },
  ar: { eyebrow: 'أين نستثمر', title: 'ستة قطاعات، رؤية استثمارية واحدة منضبطة' },
} as const

/**
 * A single accordion panel. Collapsed, it's a narrow strip showing just
 * the label (rotated vertically on desktop); active, it expands to show
 * the full description and arrow. Hovering or clicking a collapsed panel
 * activates it — only one panel is expanded at a time.
 *
 * Every panel is a link to its sector page, but a collapsed one swallows
 * the first click and expands instead of navigating: the narrow strip
 * shows only a label, so on touch — where there's no hover to expand
 * with — a straight navigation would fire before the visitor ever saw
 * what they were choosing. Staying a link throughout (rather than
 * swapping element types on expand) keeps keyboard focus on the panel
 * across that first activation.
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
    <Link
      href={panel.href}
      onMouseEnter={onActivate}
      onClick={(event) => {
        if (!isActive) {
          event.preventDefault()
          onActivate()
        }
      }}
      className={cn(
        'group relative flex cursor-pointer flex-col overflow-hidden rounded-lg transition-[flex-grow] duration-500 ease-in-out lg:flex-row',
        isActive ? 'flex-1 lg:flex-[3.5]' : 'flex-[0.4] lg:w-16 lg:flex-[0.55]'
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

      {/* Flat base scrim under the directional gradient below. The
          gradient alone only darkens the bottom of the panel, but an
          expanded panel puts its label at the TOP — over whatever the
          photo happens to be doing up there (bright sky on several of
          these). This guarantees a contrast floor across the whole
          panel at every breakpoint. */}
      <div className="absolute inset-0 bg-black/35 transition-opacity duration-500" aria-hidden />

      <div
        aria-hidden
        className={cn(
          'absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/85 to-transparent transition-all duration-500',
          isActive
            ? 'h-[70%] lg:h-[55%]'
            : 'h-full w-[70%] bg-gradient-to-r lg:h-[70%] lg:w-full lg:bg-gradient-to-t'
        )}
      />

      <div className="relative z-10 flex h-full w-full flex-row lg:flex-col">
        {!isActive && (
          /* py-8 (tuned for the vertical rotated text on desktop, where
             padding runs along the column's length) left collapsed mobile
             strips with almost no room for a single horizontal text line —
             at well under 60px tall (the collapsed panels share the mobile
             column with the expanded one) that reads as visibly clipped. Mobile gets much lighter padding instead. */
          <div className="flex h-full items-center justify-center px-4 py-2 transition-all duration-500 lg:px-4 lg:py-10 lg:[writing-mode:vertical-lr]">
            <h3 className="whitespace-nowrap font-semibold text-body-md text-white lg:rotate-180">{panel.label}</h3>
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
    </Link>
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
  const locale = useLocale() as keyof typeof panelsByLocale
  const panels = panelsByLocale[locale]
  const heading = headingCopy[locale]

  return (
    <SectionContainer
      id="sectors"
      surface="ink"
      spacing="sm"
      // min-h-screen is a laptop framing device — it lets the accordion
      // sit centered in a full viewport. On a phone the section's own
      // content is already about a screen tall, so forcing 100vh on top
      // of it and centering left a band of empty ink above and below the
      // accordion. Below lg the section just wraps its content.
      className="flex w-full flex-col justify-center lg:min-h-svh"
    >
      <SectionHeading eyebrow={heading.eyebrow} title={heading.title} align="left" inverse />

      <div className="mt-8 flex h-[440px] flex-col gap-2 lg:mt-10 lg:h-[320px] lg:flex-row xl:gap-2.5">
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
