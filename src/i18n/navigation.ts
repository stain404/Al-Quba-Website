import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

/**
 * Locale-aware equivalents of next/navigation's Link/redirect/usePathname/
 * useRouter — every internal link in the app should go through these
 * (not next/link directly) so navigating within a locale keeps its prefix.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
