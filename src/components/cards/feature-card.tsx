'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/cards/card'
import { StaggerItem } from '@/components/motion/reveal'
import type { FeatureItem } from '@/types'

export function FeatureCard({
  icon,
  title,
  description,
  href,
  wrap = true,
}: FeatureItem & {
  /** Set false when the caller supplies its own motion wrapper (e.g. a
   *  custom scroll-linked animation) instead of the default stagger fade. */
  wrap?: boolean
}) {
  const content = (
    <Card
      surface="canvas"
      padding="lg"
      className="group flex h-full flex-col gap-6 hover:-translate-y-1"
    >
      <div className="flex size-12 items-center justify-center rounded-md bg-navy/6 text-navy">
        {icon}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-heading-md font-semibold text-text-primary">{title}</h3>
        <p className="text-body-sm text-text-secondary">{description}</p>
      </div>
      {href && (
        <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-text-primary">
          Learn more
          <ArrowUpRight
            className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      )}
    </Card>
  )

  const linked = href ? (
    <Link href={href} className="block h-full focus-visible:outline-none focus-visible:shadow-focus rounded-lg">
      {content}
    </Link>
  ) : (
    content
  )

  return wrap ? <StaggerItem>{linked}</StaggerItem> : linked
}

export function FeatureGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>
}
