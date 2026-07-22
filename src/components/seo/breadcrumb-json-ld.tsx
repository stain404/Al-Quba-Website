import { siteConfig } from '@/lib/site-config'

export interface BreadcrumbItem {
  name: string
  path: string
}

/**
 * Renders a BreadcrumbList JSON-LD script for a page. Used on every page
 * below Home so Google can show breadcrumb trails in search results
 * instead of the raw URL.
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  )
}
