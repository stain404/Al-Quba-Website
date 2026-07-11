import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------- */
/* Eyebrow — uppercase label with the signature gold hairline rule            */
/* -------------------------------------------------------------------------- */

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  inverse?: boolean
}

export function Eyebrow({ className, inverse, children, ...props }: EyebrowProps) {
  return (
    <div className={cn('flex flex-col gap-2.5', className)} {...props}>
      <span
        className={cn(
          'font-body text-eyebrow uppercase',
          inverse ? 'text-text-inverse-muted' : 'text-text-secondary'
        )}
      >
        {children}
      </span>
      <span className="h-px w-8 bg-accent" aria-hidden />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Heading — display + heading scale, semantic tag decoupled from size        */
/* -------------------------------------------------------------------------- */

const headingVariants = cva('font-display text-text-primary', {
  variants: {
    size: {
      'display-xl': 'text-display-xl',
      'display-lg': 'text-display-lg',
      'display-md': 'text-display-md',
      'display-sm': 'text-display-sm',
      'heading-lg': 'font-body font-semibold text-heading-lg',
      'heading-md': 'font-body font-semibold text-heading-md',
      'heading-sm': 'font-body font-semibold text-heading-sm',
    },
    inverse: {
      true: 'text-text-inverse',
      false: '',
    },
  },
  defaultVariants: { size: 'display-md', inverse: false },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

export function Heading({ as = 'h2', size, inverse, className, children, ...props }: HeadingProps) {
  const Tag = as
  return (
    <Tag className={cn(headingVariants({ size, inverse }), className)} {...props}>
      {children}
    </Tag>
  )
}

/* -------------------------------------------------------------------------- */
/* SectionHeading — the common eyebrow + heading + supporting copy pattern    */
/* -------------------------------------------------------------------------- */

export interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  inverse?: boolean
  headingSize?: HeadingProps['size']
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
  headingSize = 'display-md',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
      <Heading as="h2" size={headingSize} inverse={inverse} className="max-w-2xl">
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            'max-w-measure text-body-lg',
            inverse ? 'text-text-inverse-muted' : 'text-text-secondary'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
