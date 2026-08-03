import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/**
 * Google Tag Manager container.
 *
 * Renders nothing at all when `NEXT_PUBLIC_GTM_ID` is unset, so local dev
 * and preview deployments don't pollute production analytics — set the
 * variable only on the production environment in Vercel.
 *
 * `afterInteractive` rather than `beforeInteractive`: the container is
 * not needed to paint the page, and the hero here is a full-bleed
 * background video already competing for bandwidth on first load. GTM
 * loading a moment later costs nothing in measurement terms (the
 * dataLayer array is created synchronously below, so any event fired
 * before the container finishes loading is queued, not dropped) and
 * keeps it off the critical path for LCP.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null

  return (
    <>
      {/* Create the dataLayer before the container loads so early
          `trackEvent` calls queue rather than no-op. */}
      <Script id="gtm-datalayer" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];`}
      </Script>
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </>
  )
}

/**
 * The `<noscript>` iframe half of the GTM snippet. Google's install
 * instructions put this immediately after the opening `<body>` tag, so
 * it's a separate export rather than part of the component above.
 */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
