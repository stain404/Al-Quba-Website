'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Card } from '@/components/cards/card'
import type { TestimonialItem } from '@/types'

/**
 * Individual investor testimonial — a left-accent pull-quote rather than
 * the old icon-top card, since it's now presented standalone (paired
 * with InstitutionalTestimonial) rather than in a uniform grid.
 */
export function TestimonialCard({ quote, name, role, company, avatarSrc }: TestimonialItem) {
  return (
    <Card surface="canvas" padding="lg" className="mx-auto flex w-full max-w-2xl flex-col gap-6 border-l-4 border-accent">
      <Quote className="size-7 text-accent" strokeWidth={1.5} aria-hidden />
      <p className="font-display text-display-sm leading-snug text-text-primary">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-border pt-6">
        {avatarSrc ? (
          <Image src={avatarSrc} alt={name} width={44} height={44} className="size-11 rounded-full object-cover" />
        ) : (
          <div className="flex size-11 items-center justify-center rounded-full bg-navy/8 text-body-sm font-semibold text-navy">
            {name.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-body-sm font-semibold text-text-primary">{name}</span>
          <span className="text-caption text-text-tertiary">
            {company ? `${role}, ${company}` : role}
          </span>
        </div>
      </div>
    </Card>
  )
}
