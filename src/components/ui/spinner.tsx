import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
}

const sizeMap = { sm: 'size-4', md: 'size-6', lg: 'size-9' }

export function Spinner({ size = 'md', className, label = 'Loading' }: SpinnerProps) {
  return (
    <span role="status" className="inline-flex items-center gap-2">
      <Loader2 className={cn('animate-spin text-text-tertiary', sizeMap[size], className)} aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  )
}
