import { defineRouting } from 'next-intl/routing'

/**
 * English is the default locale and stays unprefixed (`/about`); Arabic
 * is served under `/ar` (`/ar/about`) — both are real, separately
 * indexable routes rather than a client-side text swap.
 */
export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]

/** Prepends the locale prefix (Arabic only — English stays unprefixed)
 *  to a plain path, for use in metadata/canonical/breadcrumb URLs where
 *  next-intl's `Link`/`redirect` helpers don't apply. */
export function localizedPath(locale: string, path: string): string {
  if (locale === routing.defaultLocale) return path
  return `/${locale}${path === '/' ? '' : path}`
}
