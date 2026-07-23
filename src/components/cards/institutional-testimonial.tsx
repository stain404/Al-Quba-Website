'use client'

import Image from 'next/image'
import { Building2, Quote } from 'lucide-react'
import { Card } from '@/components/cards/card'

/**
 * Institutional testimonial — a horizontal split (identity column +
 * quote column) rather than the individual card's vertical pull-quote,
 * so an organization-attributed quote reads as a distinct, heavier
 * moment rather than just another card in a grid.
 */
export function InstitutionalTestimonial({
  quote,
  name,
  role,
  logoSrc,
}: {
  quote: string
  name: string
  role: string
  logoSrc?: string
}) {
  return (
    <Card
      surface="canvas"
      padding="lg"
      className="flex flex-col gap-8 border-accent/30 md:flex-row md:items-center md:gap-12"
    >
      <div className="flex flex-row items-center gap-4 md:w-64 md:shrink-0 md:flex-col md:items-start">
        {logoSrc ? (
          <span className="relative size-14 shrink-0 overflow-hidden rounded-md bg-ink">
            <Image src={logoSrc} alt={`${name} logo`} fill className="object-contain p-1.5" />
          </span>
        ) : (
          <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-navy/8 text-navy">
            <Building2 className="size-6" strokeWidth={1.5} aria-hidden />
          </span>
        )}
        <div className="flex flex-col gap-1">
          <span className="text-caption font-semibold uppercase tracking-wide text-accent-ink">
            Institutional Testimonial
          </span>
          <span className="text-heading-sm font-semibold text-text-primary">{name}</span>
          <span className="text-caption text-text-tertiary">{role}</span>
        </div>
      </div>

      <div className="flex-1 border-t border-border pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
        <Quote className="mb-4 size-8 text-accent" strokeWidth={1.5} aria-hidden />
        <p className="font-display text-display-sm leading-snug text-text-primary">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </Card>
  )
}
