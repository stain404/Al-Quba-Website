import Script from 'next/script'
import { MetaPixelRouteTracker } from '@/components/analytics/meta-pixel-route-tracker'

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

/**
 * Meta (Facebook) Pixel.
 *
 * Mirrors the GTM component next to it: renders nothing at all when
 * `NEXT_PUBLIC_META_PIXEL_ID` is unset, so local dev and preview builds
 * never report into the production pixel. Set it only on production.
 * Note it is inlined at build time (`NEXT_PUBLIC_`), so the variable has
 * to be present for `next build`, not merely for `next start`.
 *
 * `afterInteractive` for the same reason GTM uses it — the pixel is not
 * needed to paint the page, and the hero is a full-bleed background
 * video already competing for bandwidth. Nothing is lost by loading a
 * moment later: `fbq` is a queueing stub from the snippet's first line,
 * so events fired before `fbevents.js` arrives are replayed, not
 * dropped.
 *
 * This stays a server component deliberately. It renders as a direct
 * child of `<html>`, alongside `GoogleTagManager`, and a client
 * component in that position is dropped from the tree entirely — the
 * snippet silently never ships. The client-side half (re-firing
 * PageView on client navigation) is therefore a separate component
 * rendered inside `<body>`.
 *
 * Conversions are not fired here — they go through `trackEvent` in
 * `src/lib/analytics.ts`, which forwards to both GTM and this pixel, so
 * there stays exactly one audited place where tracking leaves the
 * browser. No PII is passed; see the note in that file.
 */
export function MetaPixel() {
  if (!PIXEL_ID) return null

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');
fbq('track','PageView');`}
    </Script>
  )
}

/**
 * The `<noscript>` tracking image plus the client-side route tracker.
 *
 * Meta's install instructions put the `<noscript>` image in the body, so
 * — as with GTM — it is a separate export rather than part of the
 * component above. The route tracker rides along because it also has to
 * live inside `<body>`.
 */
export function MetaPixelNoScript() {
  if (!PIXEL_ID) return null

  return (
    <>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      <MetaPixelRouteTracker />
    </>
  )
}
