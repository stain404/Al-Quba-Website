import type { Metadata, Viewport } from 'next'
import { Manrope, Inter, IBM_Plex_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#071d49',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [
    'Al Quba Investment',
    'Dubai investment firm',
    'asset management Dubai',
    'trade finance',
    'structured investment pools',
    'DIFC investment firm',
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_AE',
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
    streetAddress: 'Office 306, Al Mezan Tower',
    addressLocality: 'Dubai',
    addressRegion: 'DIFC',
    addressCountry: 'AE',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61564526213607',
    'https://twitter.com',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        'overflow-x-clip',
        manrope.variable,
        inter.variable,
        plexMono.variable
      )}
    >
      <body className="overflow-x-clip bg-canvas font-body text-text-primary antialiased">
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
      </body>
    </html>
  )
}
