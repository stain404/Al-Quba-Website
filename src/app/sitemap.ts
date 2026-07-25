import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { sectors } from '@/lib/sectors-data'
import { pools } from '@/lib/pools-data'
import { getAllArticles } from '@/lib/insights-data'
import { routing } from '@/i18n/routing'

function entry(
  path: string,
  options: { lastModified: Date; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }
): MetadataRoute.Sitemap[number] {
  const { url } = siteConfig
  return {
    url: path === '/' ? url : `${url}${path}`,
    ...options,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          locale === routing.defaultLocale ? `${url}${path}` : `${url}/${locale}${path === '/' ? '' : path}`,
        ])
      ),
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    entry('/', { lastModified: now, changeFrequency: 'weekly', priority: 1 }),
    entry('/about', { lastModified: now, changeFrequency: 'monthly', priority: 0.8 }),
    entry('/contact', { lastModified: now, changeFrequency: 'monthly', priority: 0.7 }),
    entry('/insights', { lastModified: now, changeFrequency: 'weekly', priority: 0.7 }),
    entry('/terms', { lastModified: now, changeFrequency: 'yearly', priority: 0.3 }),
    entry('/privacy', { lastModified: now, changeFrequency: 'yearly', priority: 0.3 }),
  ]

  const sectorRoutes = sectors.map((sector) =>
    entry(`/sectors/${sector.slug}`, { lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  )

  const poolRoutes = pools.map((pool) =>
    entry(`/pools/${pool.slug}`, { lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  )

  const articleRoutes = getAllArticles().map((article) =>
    entry(`/insights/${article.slug}`, { lastModified: now, changeFrequency: 'monthly', priority: 0.6 })
  )

  return [...staticRoutes, ...sectorRoutes, ...poolRoutes, ...articleRoutes]
}
