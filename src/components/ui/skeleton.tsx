import { cn } from '@/lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Base shimmer block. Compose into higher-level skeleton layouts
 * in feedback/loading-states.tsx rather than using raw divs.
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(
        'relative overflow-hidden rounded-sm bg-canvas-muted',
        'before:absolute before:inset-0 before:-translate-x-full',
        'before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent',
        'before:animate-shimmer',
        className
      )}
      {...props}
    />
  )
}
