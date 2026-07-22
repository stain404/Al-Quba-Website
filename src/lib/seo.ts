import type { Metadata } from 'next'
import { siteConfig } from './site-config'

/**
 * Builds a consistent Metadata object (title, description, canonical,
 * Open Graph, Twitter Card) for a single page. `title` is the short page
 * title used for the `<title>` tag — the root layout's `title.template`
 * appends " — Al Quba Investment" automatically. Open Graph/Twitter titles
 * aren't covered by that template, so this builds the full title for them
 * explicitly (pass `isHome` to use the site's full title unsuffixed).
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  isHome = false,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  isHome?: boolean
}): Metadata {
  const fullTitle = isHome ? title : `${title} — ${siteConfig.name}`
  const url = `${siteConfig.url}${path}`

  return {
    // `isHome` bypasses the root layout's title.template (which would
    // otherwise re-append " — Al Quba Investment" to a title that
    // already contains the full brand name).
    title: isHome ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_AE',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/opengraph-image'],
    },
  }
}
