import type { MegaMenuSection } from '@/types'

export const siteConfig = {
  name: 'Al Quba Investment',
  legalName: 'Al Quba Investment LLC',
  title: 'Al Quba Investment LLC — Global Investment & Asset Management, Dubai',
  description:
    'Al Quba Investment is a Dubai-headquartered investment and asset management firm deploying long-term capital across trading, real estate, shipping, import-export, and technology sectors on behalf of institutional investors and family offices.',
  url: 'https://www.alquba.com',
}

export const navSections: MegaMenuSection[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Investor Hub',
    href: '/#sectors',
    columns: [
      {
        heading: 'Our Ecosystem',
        links: [
          { label: 'Trading', href: '/sectors/trading', description: 'Global commodity and equity desks' },
          { label: 'Real Estate', href: '/sectors/real-estate', description: 'Prime assets across four continents' },
          { label: 'Shipping', href: '/sectors/shipping', description: 'Marine logistics and freight capital' },
          { label: 'Import & Export', href: '/sectors/import-export', description: 'Cross-border trade finance' },
          { label: 'Technology', href: '/sectors/technology', description: 'Equity in the infrastructure behind trade' },
        ],
      },
      {
        heading: 'Investment Pools',
        links: [
          { label: 'Frost Capital Fund I', href: '/pools/frozen', description: 'Frozen meat trading fund' },
          { label: 'Premium Cocoa Fund I', href: '/pools/cocoa', description: 'Branded chocolate trading fund' },
          { label: 'Global Travel Fund I', href: '/pools/travel', description: 'Global travel investment fund' },
        ],
      },
    ],
  },
  {
    label: 'Investor Insights',
    href: '/insights',
  },
]

