import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Skip API routes, Next internals, and any file with an extension
  // (images, robots.txt, sitemap.xml, etc.) — only page routes get
  // locale detection/prefixing. `opengraph-image` is listed explicitly
  // because it has no extension, so the rule above would otherwise send
  // it through locale routing and 404 the URL every page's og:image
  // meta tag points at.
  matcher: ['/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)'],
}
