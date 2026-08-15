import { notFound } from 'next/navigation'

/**
 * Catch-all for unmatched URLs inside a locale segment.
 *
 * Without this, an unknown path has no page to render and Next falls
 * back to its built-in error page ("404: This page could not be
 * found."), which is unstyled and offers no way back into the site.
 * Routing the miss through `notFound()` renders `[locale]/not-found.tsx`
 * inside the locale layout instead — same 404 status, real page.
 */
export default function CatchAllNotFound() {
  notFound()
}
