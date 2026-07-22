import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Plain `twMerge` doesn't know this project's custom `fontSize` scale
 * (display-lg, heading-md, body-sm, etc. — see tailwind.config.ts). Its
 * default text-color matcher is permissive enough to swallow them too,
 * so e.g. `cn('text-display-lg', 'text-text-inverse')` silently DROPS
 * text-display-lg, thinking it conflicts with the color utility — every
 * `<Heading inverse size="...">` (every hero H1, every CTA heading on a
 * dark surface) was rendering with no font-size class at all. Extending
 * the config to recognize these as their own 'font-size' group fixes it.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-display-xl',
        'text-display-lg',
        'text-display-md',
        'text-display-sm',
        'text-heading-lg',
        'text-heading-md',
        'text-heading-sm',
        'text-body-lg',
        'text-body-md',
        'text-body-sm',
        'text-caption',
        'text-eyebrow',
        'text-data-lg',
        'text-data-md',
      ],
    },
  },
})

/**
 * Merge Tailwind class names safely, resolving conflicting utility
 * classes (e.g. `p-4` vs `p-2`) in favor of the last one specified.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as an institutional-style figure, e.g. 1,240,000 -> "1.24M"
 * Used by StatCounter and data-display components.
 */
export function formatCompactNumber(value: number, decimals = 1): string {
  const formatter = Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: decimals,
  })
  return formatter.format(value)
}

/**
 * Format currency in a locale-aware, institutional style. Defaults to AED
 * given the Dubai headquarters, but accepts any ISO currency code.
 */
export function formatCurrency(value: number, currency: 'AED' | 'USD' | 'GBP' | 'EUR' = 'AED') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}
