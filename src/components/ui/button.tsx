'use client'

import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md',
    'font-body font-medium transition-all duration-200 ease-institutional',
    'focus-visible:outline-none focus-visible:shadow-focus',
    'disabled:pointer-events-none disabled:opacity-40',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-ink text-text-inverse hover:bg-navy active:bg-navy-tint',
        gold:
          'bg-accent text-ink hover:bg-accent-soft active:bg-accent',
        outline:
          'border border-border-strong bg-transparent text-text-primary hover:border-ink hover:bg-canvas-muted',
        ghost:
          'bg-transparent text-text-primary hover:bg-canvas-muted',
        'ghost-inverse':
          'bg-transparent text-text-inverse hover:bg-white/10',
        link:
          'bg-transparent p-0 h-auto text-text-primary underline-offset-4 hover:text-accent',
      },
      size: {
        sm: 'h-9 px-4 text-body-sm',
        md: 'h-11 px-6 text-body-md',
        lg: 'h-14 px-8 text-body-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  /** Show a trailing arrow, the standard affordance for primary CTAs. */
  withArrow?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading, withArrow, children, disabled, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
        <Slottable>{children}</Slottable>
        {withArrow && !loading && (
          <ArrowUpRight
            className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'
