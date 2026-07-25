'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

const options = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
] as const

/**
 * EN / AR toggle. Swaps the locale segment while staying on the exact
 * same page (including dynamic segments like a sector/pool/article
 * slug) — `usePathname`/`useRouter` here are next-intl's locale-aware
 * versions, and `usePathname` already
 * returns the fully-resolved current path, dynamic segments included.
 */
export function LanguageSwitcher({ className, tone = 'auto' }: { className?: string; tone?: 'auto' | 'light' | 'dark' }) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border p-0.5 text-caption font-medium',
        tone === 'dark' ? 'border-border-strong' : 'border-current/25',
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          aria-current={locale === option.code}
          onClick={() => router.replace(pathname, { locale: option.code })}
          className={cn(
            'rounded-full px-2.5 py-1 transition-colors duration-150 ease-institutional',
            locale === option.code
              ? 'bg-accent text-ink'
              : 'text-current opacity-70 hover:opacity-100'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
