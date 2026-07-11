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
  company: string
  avatarSrc?: string
}
