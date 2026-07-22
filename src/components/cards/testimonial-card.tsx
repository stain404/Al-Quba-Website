'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Card } from '@/components/cards/card'
import { StaggerItem } from '@/components/motion/reveal'
import type { TestimonialItem } from '@/types'

export function TestimonialCard({ quote, name, role, company, avatarSrc }: TestimonialItem) {
  return (
    <StaggerItem>
      <Card surface="canvas" padding="lg" className="flex h-full flex-col gap-8">
        <Quote className="size-8 text-accent" strokeWidth={1.5} aria-hidden />
        <p className="flex-1 font-display text-display-sm leading-snug text-text-primary">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-4 border-t border-border pt-6">
          {avatarSrc ? (
            <Image src={avatarSrc} alt={name} width={48} height={48} className="size-12 rounded-full object-cover" />
          ) : (
            <div className="flex size-12 items-center justify-center rounded-full bg-navy/8 text-body-sm font-semibold text-navy">
              {name.charAt(0)}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-body-sm font-semibold text-text-primary">{name}</span>
            <span className="text-caption text-text-tertiary">
              {role}, {company}
            </span>
          </div>
        </div>
      </Card>
    </StaggerItem>
  )
}

export function TestimonialGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>
}
