import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono, Cormorant_Garamond } from 'next/font/google'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz'],
})
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-nav',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: siteConfig.legalName,
  url: siteConfig.url,
  areaServed: 'Global',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'DIFC',
    addressCountry: 'AE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        'overflow-x-clip',
        fraunces.variable,
        inter.variable,
        plexMono.variable,
        cormorant.variable
      )}
    >
      <body className="overflow-x-clip bg-canvas font-body text-text-primary antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
