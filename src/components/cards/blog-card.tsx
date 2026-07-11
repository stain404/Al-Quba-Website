'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { StaggerItem } from '@/components/motion/reveal'
import type { BlogPostItem } from '@/types'

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  imageSrc,
  href,
  wrap = true,
}: BlogPostItem & {
  /** Set false when the caller supplies its own motion wrapper (e.g. a
   *  custom scroll-linked animation) instead of the default stagger fade. */
  wrap?: boolean
}) {
  const content = (
    <Link
      href={href}
      className="group flex h-full flex-col gap-5 focus-visible:outline-none focus-visible:shadow-focus rounded-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-canvas-muted">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-institutional group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-caption uppercase tracking-wide text-text-tertiary">
          <span>{category}</span>
          <span aria-hidden>&middot;</span>
          <span>{date}</span>
          <span aria-hidden>&middot;</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-heading-md font-semibold leading-snug text-text-primary">{title}</h3>
        <p className="text-body-sm text-text-secondary">{excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-text-primary">
          Read article
          <ArrowRight
            className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  )

  return wrap ? <StaggerItem>{content}</StaggerItem> : content
}

export function BlogGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">{children}</div>
}
