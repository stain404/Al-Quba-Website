import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { Manrope, Inter, IBM_Plex_Mono, Cairo } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import { routing, type Locale } from '@/i18n/routing'
import '../globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
/** 500 covers inline data (`data-md`); 700 is the real cut behind the large
 *  stat figures (`data-lg`) — without it the browser synthesizes a fake bold
 *  and the counters render noticeably smeared at 3.75rem. */
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-mono',
})
/** Arabic has no Manrope/Inter glyphs — Cairo covers both the display and
 *  body roles for `ar` so headings and paragraphs still read as one
 *  coherent typeface pairing, the same way Manrope+Inter do for `en`. */
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-arabic',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#071d49',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params
  const isArabic = locale === 'ar'

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
    description: siteConfig.description,
    keywords: [
      'Al Quba Investment',
      'Dubai investment firm',
      'asset management Dubai',
      'trade finance',
      'structured investment pools',
      'DIFC investment firm',
    ],
    alternates: {
      languages: {
        en: '/',
        ar: '/ar',
      },
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: 'website',
      locale: isArabic ? 'ar_AE' : 'en_AE',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteConfig.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: ['/opengraph-image'],
    },
    robots: { index: true, follow: true },
  }
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/AQ%20logo.png`,
  image: `${siteConfig.url}/AQ%20logo.png`,
  description: siteConfig.description,
  areaServed: 'Global',
  email: 'inbox@alqubainvestment.com',
  telephone: '+971505762203',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office 306, Al Mezan Tower, Al Qusais, Muhaisnah 4',
    addressLocality: 'Dubai',
    addressRegion: 'DIFC',
    addressCountry: 'AE',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61564526213607',
    'https://t.me/alqubainvestment',
    'https://www.linkedin.com/company/alquba-investment-llc/posts/?feedView=all',
    'https://www.instagram.com/alquba_investment/',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: 'en-AE',
  publisher: { '@type': 'Organization', name: siteConfig.legalName },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params
  if (!routing.locales.includes(locale as Locale)) notFound()

  // Enables static rendering for this locale (next-intl requirement when
  // reading the locale from `params` inside a Server Component).
  setRequestLocale(locale)
  const messages = await getMessages()
  const isArabic = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isArabic ? 'rtl' : 'ltr'}
      className={cn(
        'overflow-x-clip scroll-smooth',
        manrope.variable,
        inter.variable,
        plexMono.variable,
        isArabic && cairo.variable
      )}
    >
      <body className="overflow-x-clip bg-canvas font-body text-text-primary antialiased">
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          {children}
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
