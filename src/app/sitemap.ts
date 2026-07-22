import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { sectors } from '@/lib/sectors-data'
import { pools } from '@/lib/pools-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = siteConfig
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${url}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${url}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${url}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((sector) => ({
    url: `${url}/sectors/${sector.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const poolRoutes: MetadataRoute.Sitemap = pools.map((pool) => ({
    url: `${url}/pools/${pool.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...sectorRoutes, ...poolRoutes]
}
