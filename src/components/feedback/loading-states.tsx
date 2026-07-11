import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'

/* -------------------------------------------------------------------------- */
/* LoadingState — full-block loading indicator for async page regions          */
/* -------------------------------------------------------------------------- */

export function LoadingState({ label = 'Loading content' }: { label?: string }) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-4 py-20">
      <Spinner size="lg" label={label} />
      <p className="text-body-sm text-text-tertiary">{label}&hellip;</p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Skeleton layouts — mirror the real component's structure so CLS is ~0       */
/* -------------------------------------------------------------------------- */

export function StatSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-10 w-24" />
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-3 w-28" />
    </div>
  )
}

export function StatGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <StatSkeleton key={i} />
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-border p-7">
      <Skeleton className="h-40 w-full rounded-md" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

export function CardGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="aspect-[16/10] w-full rounded-md" />
      <Skeleton className="h-3 w-32" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

export function TextBlockSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
      ))}
    </div>
  )
}

export function AvatarLineSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3.5 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  )
}
