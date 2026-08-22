'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

/**
 * Re-fires the Meta Pixel's PageView on client-side navigation.
 *
 * The base snippet fires PageView once, on the initial document load.
 * Every subsequent route change in an app-router site happens without a
 * page load, so without this only the entry page of each session is
 * ever recorded.
 *
 * Rendered only by `MetaPixelNoScript`, which already returns null when
 * no pixel ID is configured — so this never mounts on an unconfigured
 * build. It renders no markup; `usePathname` is from next/navigation
 * rather than the locale-aware helper because the pixel should see the
 * real URL, `/ar/...` prefix included.
 */
export function MetaPixelRouteTracker() {
  const pathname = usePathname()
  const isInitialRender = React.useRef(true)

  React.useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    window.fbq?.('track', 'PageView')
  }, [pathname])

  return null
}
