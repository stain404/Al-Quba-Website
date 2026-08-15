const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const securityHeaders = [
  // HTTPS is enforced by the host in production; this just tells browsers
  // to remember that and skip the initial plaintext round-trip.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Blocks this site from being framed by another origin (clickjacking).
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // No camera/mic/geolocation/payment usage anywhere on the site.
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  // Content-Security-Policy intentionally omitted here: Next.js emits
  // inline hydration scripts and this app renders inline JSON-LD
  // (organization/website/breadcrumb/service/FAQ schema), so a CSP needs
  // a nonce-based setup (via middleware) to be both strict and safe.
  // Recommended starting policy once nonces are wired up:
  //   default-src 'self'; script-src 'self' 'nonce-<per-request>';
  //   style-src 'self' 'unsafe-inline'; img-src 'self' data:;
  //   font-src 'self'; connect-src 'self'; frame-ancestors 'none'
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No remote images are used anywhere in this project — every asset
    // ships from /public, so remote image loading stays disabled rather
    // than allowing arbitrary external hostnames.

    // AVIF first, WebP second. Every source image here is a large
    // photographic PNG/JPEG, which is exactly the case AVIF wins on —
    // the hero/footer plates drop roughly another third below WebP.
    formats: ['image/avif', 'image/webp'],
    // Default is 60 seconds, which made every optimised image
    // revalidate on essentially every visit (`max-age=60,
    // must-revalidate`) even though the underlying files only change on
    // a redeploy. The optimiser keys its cache on the source file, so a
    // changed image produces a new cache entry on the next build.
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // Everything under /public was being served with
        // `Cache-Control: public, max-age=0`, so the three background
        // videos (27MB combined) and every logo re-validated on each
        // visit. These filenames are not content-hashed the way
        // /_next/static is, so this stops short of `immutable`: 30 days
        // of silent reuse, then a cheap revalidation that picks up a
        // replaced file rather than pinning it for a year.
        source: '/:all*(mp4|webm|png|jpg|jpeg|svg|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
  async redirects() {
    // Four sector pages were renamed/repositioned as investment divisions;
    // permanent redirects preserve any existing bookmarks/inbound links
    // and pass on SEO equity from the old URLs rather than 404ing.
    return [
      // www and the apex both answered 200 with no redirect between
      // them, so every page existed at two crawlable URLs. The canonical
      // tag already pointed search engines at the apex; this makes the
      // apex the only version that actually serves, which also stops the
      // two hostnames from splitting the HSTS/cookie state.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.alqubainvestment.com' }],
        destination: 'https://alqubainvestment.com/:path*',
        permanent: true,
      },
      { source: '/sectors/trading', destination: '/sectors/global-exports', permanent: true },
      { source: '/sectors/shipping', destination: '/sectors/logistics-supply-chain', permanent: true },
      { source: '/sectors/technology', destination: '/sectors/brand-strategy', permanent: true },
      { source: '/sectors/real-estate', destination: '/sectors/infrastructure-contracting', permanent: true },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
