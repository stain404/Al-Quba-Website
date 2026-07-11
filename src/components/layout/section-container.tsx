import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const sectionVariants = cva('w-full', {
  variants: {
    surface: {
      canvas: 'bg-canvas text-text-primary',
      raised: 'bg-canvas-raised text-text-primary',
      muted: 'bg-canvas-muted text-text-primary',
      ink: 'bg-ink text-text-inverse',
      navy: 'bg-navy text-text-inverse',
    },
    spacing: {
      none: 'py-0',
      sm: 'py-16 md:py-20',
      md: 'py-20 md:py-28',
      lg: 'py-24 md:py-32',
    },
  },
  defaultVariants: { surface: 'canvas', spacing: 'md' },
})

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: 'section' | 'div' | 'header' | 'footer'
  /** Constrain inner content width; set false for edge-to-edge sections (e.g. tickers). */
  contained?: boolean
}

export function SectionContainer({
  as = 'section',
  surface,
  spacing,
  contained = true,
  className,
  children,
  ...props
}: SectionContainerProps) {
  const Tag = as
  return (
    <Tag className={cn(sectionVariants({ surface, spacing }), className)} {...props}>
      {contained ? <div className="container mx-auto max-w-container">{children}</div> : children}
    </Tag>
  )
}

/** Two-column editorial grid: narrow label column + wide content column. */
export function SplitContainer({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16', className)}>
      {children}
    </div>
  )
}
