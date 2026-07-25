import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Skip API routes, Next internals, and any file with an extension
  // (images, robots.txt, sitemap.xml, etc.) — only page routes get
  // locale detection/prefixing.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
