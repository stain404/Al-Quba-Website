import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

/** Next emits its own `<meta name="robots" content="noindex">` here, but
 *  the locale layout's site-wide `index, follow` still renders alongside
 *  it — leaving a 404 that tells crawlers both things at once. This
 *  override replaces that second tag with `noindex, follow`, so both
 *  tags agree and the outbound links below still pass equity. */
export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

/** The destinations worth offering someone who landed on a dead URL:
 *  the divisions are the most common deep links (four of them were
 *  renamed, and only those four have redirects), then the pages a
 *  prospective investor is usually looking for. */
const suggestions = [
  { href: '/sectors/global-exports', label: 'Global Exports', note: 'Commodity trade and export flows' },
  {
    href: '/sectors/infrastructure-contracting',
    label: 'Infrastructure & Contracting',
    note: 'Built-asset and contracting positions',
  },
  {
    href: '/sectors/logistics-supply-chain',
    label: 'Logistics & Supply Chain',
    note: 'Freight, shipping, and distribution',
  },
  { href: '/about', label: 'About Al Quba', note: 'Mandate, structure, and governance' },
  { href: '/insights', label: 'Investor Insights', note: 'Commentary and quarterly reporting' },
  { href: '/contact', label: 'Contact', note: 'Speak to the investment team' },
]

/**
 * 404 page.
 *
 * Rendered both by the `[...rest]` catch-all (which is what actually
 * intercepts unmatched URLs under a locale segment) and by any explicit
 * `notFound()` call — e.g. an unknown sector or insight slug. Note that
 * Next does not pass `params` to `not-found.tsx`, so there is no
 * `setRequestLocale` here; `Navbar`/`Footer` are client components and
 * read the locale from the provider in the layout above.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <SectionContainer surface="ink" spacing="lg" as="header">
          <FadeIn className="flex max-w-2xl flex-col gap-6">
            <Eyebrow inverse>Error 404</Eyebrow>
            <Heading as="h1" size="display-md" inverse>
              This page could not be found
            </Heading>
            <p className="text-body-md text-text-inverse-muted">
              The address you followed may be out of date, or the page may have moved as our
              divisions were restructured. Everything below is a working starting point.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="gold" withArrow>
                <Link href="/">Return home</Link>
              </Button>
              <Button asChild variant="ghost-inverse">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </FadeIn>
        </SectionContainer>

        <SectionContainer surface="canvas" spacing="lg">
          <FadeIn className="flex flex-col gap-10">
            <Heading as="h2" size="display-sm">
              Where you might have been headed
            </Heading>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex flex-col gap-1 border-t border-border-strong pt-4 transition-colors hover:border-ink"
                  >
                    <span className="text-body-lg font-display font-semibold text-text-primary group-hover:text-accent">
                      {item.label}
                    </span>
                    <span className="text-body-sm text-text-secondary">{item.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
