import type * as React from 'react'

export interface NavLink {
  label: string
  href: string
  description?: string
}

export interface MegaMenuColumn {
  heading: string
  links: NavLink[]
}

export interface MegaMenuSection {
  label: string
  href?: string
  /** Omit (or leave empty) for a plain nav link with no hover dropdown. */
  columns?: MegaMenuColumn[]
  featured?: {
    title: string
    description: string
    href: string
    imageSrc?: string
  }
}

export interface StatItem {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  description?: string
}

export interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

export interface TimelineEntry {
  year: string
  title: string
  description: string
  /** Small decorative marker icon, e.g. inside the timeline's dot.
   *  Pre-instantiated JSX (e.g. `<Handshake />`), not a bare component
   *  reference — a raw function isn't serializable across the
   *  server-to-client boundary when this data is defined in a Server
   *  Component and consumed by the client-side Timeline component. */
  icon?: React.ReactNode
}

export interface InvestmentItem {
  name: string
  category: string
  description: string
  metricLabel: string
  metricValue: string
  imageSrc?: string
  href?: string
}

export interface BlogPostItem {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  imageSrc?: string
  href: string
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
  company?: string
  avatarSrc?: string
}
