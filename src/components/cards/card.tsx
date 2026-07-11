import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva('rounded-lg transition-all duration-200 ease-institutional', {
  variants: {
    surface: {
      canvas: 'bg-canvas-raised border border-border shadow-sm hover:shadow-md',
      muted: 'bg-canvas-muted border border-transparent',
      ink: 'bg-ink-raised border border-border-ink text-text-inverse',
      outline: 'bg-transparent border border-border-strong',
    },
    padding: {
      none: 'p-0',
      sm: 'p-6',
      md: 'p-8',
      lg: 'p-10',
    },
  },
  defaultVariants: { surface: 'canvas', padding: 'md' },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, surface, padding, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ surface, padding }), className)} {...props} />
  )
)
Card.displayName = 'Card'

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-2', className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('font-body text-heading-md font-semibold', className)} {...props} />
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-body-sm text-text-secondary', className)} {...props} />
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-6 flex items-center gap-3', className)} {...props} />
}
