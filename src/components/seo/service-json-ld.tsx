import { siteConfig } from '@/lib/site-config'

/** Renders a Service JSON-LD script for a sector or pool detail page. */
export function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string
  description: string
  path: string
  serviceType: string
}) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${siteConfig.url}${path}`,
    provider: {
      '@type': 'FinancialService',
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: 'Global',
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
    />
  )
}
