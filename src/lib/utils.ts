import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
