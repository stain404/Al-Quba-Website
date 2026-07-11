'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { StaggerItem } from '@/components/motion/reveal'
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
}: InvestmentItem & {
  /** Set false when the caller supplies its own motion wrapper (e.g. a
   *  custom scroll-linked animation) instead of the default stagger fade. */
  wrap?: boolean
}) {
  const content = (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-canvas-raised shadow-sm transition-all duration-200 ease-institutional hover:shadow-md focus-visible:outline-none focus-visible:shadow-focus"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-muted">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-institutional group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute left-4 top-4">
          <Badge variant="outline" className="bg-canvas-raised/90 backdrop-blur">
            {category}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7">
        <div className="flex flex-col gap-2">
          <h3 className="flex items-center justify-between gap-2 text-heading-md font-semibold text-text-primary">
            {name}
            <ArrowUpRight
              className="size-4 shrink-0 text-text-tertiary transition-all duration-200 ease-institutional group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-ink"
              aria-hidden
            />
          </h3>
          <p className="text-body-sm text-text-secondary">{description}</p>
        </div>

        <div className="mt-auto flex items-baseline justify-between border-t border-border pt-4">
          <span className="text-caption uppercase tracking-wide text-text-tertiary">{metricLabel}</span>
          <span className="font-mono text-data-md text-text-primary">{metricValue}</span>
        </div>
      </div>
    </Link>
  )

  return wrap ? <StaggerItem>{content}</StaggerItem> : content
}

export function InvestmentGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{children}</div>
}
