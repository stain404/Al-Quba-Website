import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium',
  {
    variants: {
      variant: {
        neutral: 'bg-canvas-muted text-text-secondary',
        navy: 'bg-navy/8 text-navy',
        gold: 'bg-accent/12 text-accent-ink',
        outline: 'border border-border-strong text-text-secondary',
        'on-ink': 'bg-white/8 text-text-inverse-muted',
        success: 'bg-success/10 text-success',
      },
    },
    defaultVariants: { variant: 'neutral' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
