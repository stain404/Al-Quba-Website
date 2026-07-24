'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { StaggerItem } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import type { InvestmentItem } from '@/types'

export function InvestmentCard({
  name,
  category,
  description,
  metricLabel,
  metricValue,
  imageSrc,
  href = '#',
  wrap = true,
  /** Shorter image, tighter padding, and a clamped description — used
   *  by RelatedPools, where these cards are a closing aside rather than
   *  the page's main content. */
  compact = false,
}: InvestmentItem & {
  wrap?: boolean
  compact?: boolean
}) {
  const content = (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 shadow-sm transition-all duration-200 ease-institutional hover:shadow-md focus-visible:outline-none focus-visible:shadow-focus"
    >
      {/* ── Image ────────────────────────────────────────────────────────
          Mobile: fills the entire card (absolute inset-0, no aspect-ratio box)
          Desktop: normal stacked aspect-ratio box                        */}
      <div className={cn('relative md:w-full md:shrink-0', compact ? 'md:aspect-[5/3]' : 'md:aspect-[4/3]')}>
        {/* Mobile full-card image */}
        {imageSrc && (
          <div className="absolute inset-0 md:hidden">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 ease-institutional group-hover:scale-[1.03]"
            />
          </div>
        )}
        {/* Desktop image (inside aspect-ratio wrapper) */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="hidden object-cover transition-transform duration-500 ease-institutional group-hover:scale-[1.03] md:block"
          />
        )}
      </div>

      {/* ── Text content ─────────────────────────────────────────────────
          Mobile: overlays the image with a frosted-glass scrim
          Desktop: sits below the image on a solid ink background          */}
      <div
        className={cn(
          'relative z-10 flex flex-1 flex-col p-7',
          compact ? 'gap-3 md:p-6' : 'gap-4',
          // mobile: overlay with frosted glass — sits at the BOTTOM of the card
          'mt-auto',
          // frosted glass scrim (mobile only)
          'bg-black/30 backdrop-blur-md md:backdrop-blur-none',
          // desktop: solid dark background, no blur
          'md:bg-ink'
        )}
      >
        <div className={cn('flex flex-col', compact ? 'gap-1.5' : 'gap-2')}>
          <h3 className="flex items-center justify-between gap-2 text-heading-md font-semibold text-white">
            {name}
            <ArrowUpRight
              className="size-4 shrink-0 text-white/60 transition-all duration-200 ease-institutional group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
              aria-hidden
            />
          </h3>
          <p className={cn('text-body-sm text-white/80', compact && 'line-clamp-3')}>{description}</p>
        </div>

        {metricValue && (
          <div className={cn('mt-auto flex items-center justify-between border-t border-white/20', compact ? 'pt-3' : 'pt-4')}>
            <span className="text-caption uppercase tracking-wide text-white/60">{metricLabel}</span>
            {/* Status shown as a small, understated pill rather than a
                large stat figure — a subscription status isn't a metric
                worth foregrounding the way a real number would be. */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-caption font-medium text-white/85">
              <span className="size-1.5 rounded-full bg-accent-ink" aria-hidden />
              {metricValue}
            </span>
          </div>
        )}
      </div>
    </Link>
  )

  return wrap ? <StaggerItem>{content}</StaggerItem> : content
}

export function InvestmentGrid({
  children,
  compact = false,
}: {
  children: React.ReactNode
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:[&>*]:min-h-0',
        compact ? '[&>*]:min-h-[340px]' : '[&>*]:min-h-[420px]'
      )}
    >
      {children}
    </div>
  )
}
