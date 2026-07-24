import Image from 'next/image'
import { Quote } from 'lucide-react'
import type { TestimonialItem } from '@/types'

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

/**
 * Compact investor testimonial card — three per row on desktop, a
 * swipeable single-column carousel on mobile (see Testimonials).
 * Deliberately plain (white, thin neutral border, subtle shadow) rather
 * than reusing the site's Card component variants — a specific, minimal
 * premium-investment-firm spec, distinct from the pull-quote card this
 * replaced.
 */
export function TestimonialCard({ quote, name, role, company, avatarSrc }: TestimonialItem) {
  return (
    <div className="flex aspect-[4/5] w-full flex-col gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-md sm:p-8">
      <Quote className="size-6 shrink-0 text-accent" strokeWidth={2} aria-hidden />

      <p className="line-clamp-6 flex-1 text-[1.25rem] font-medium leading-[1.6] text-text-primary">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 border-t border-[#E8E8E8] pt-4">
        {avatarSrc ? (
          <Image src={avatarSrc} alt={name} width={44} height={44} className="size-11 shrink-0 rounded-full object-cover" />
        ) : (
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy/8 text-body-sm font-semibold text-navy">
            {getInitials(name)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-body-md font-semibold text-text-primary">{name}</span>
          <span className="text-caption text-text-tertiary">
            {company ? `${role}, ${company}` : role}
          </span>
        </div>
      </div>
    </div>
  )
}
