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
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    // Four sector pages were renamed/repositioned as investment divisions;
    // permanent redirects preserve any existing bookmarks/inbound links
    // and pass on SEO equity from the old URLs rather than 404ing.
    return [
      { source: '/sectors/trading', destination: '/sectors/global-exports', permanent: true },
      { source: '/sectors/shipping', destination: '/sectors/logistics-supply-chain', permanent: true },
      { source: '/sectors/technology', destination: '/sectors/brand-strategy', permanent: true },
      { source: '/sectors/real-estate', destination: '/sectors/infrastructure-contracting', permanent: true },
    ]
  },
}

module.exports = nextConfig
