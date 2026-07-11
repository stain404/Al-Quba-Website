import type { MegaMenuSection } from '@/types'
import type { FooterColumn } from '@/components/layout/footer'

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
          { label: 'Frozen Pool', href: '/pools/frozen', description: 'Cold-chain commodity trade' },
          { label: 'Cocoa Pool', href: '/pools/cocoa', description: 'Soft commodity structured returns' },
          { label: 'Travel Pool', href: '/pools/travel', description: 'Hospitality and aviation capital' },
        ],
      },
    ],
  },
  {
    label: 'Investor Insights',
    href: '/insights',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Sectors',
    links: [
      { label: 'Trading', href: '/sectors/trading' },
      { label: 'Real Estate', href: '/sectors/real-estate' },
      { label: 'Shipping', href: '/sectors/shipping' },
      { label: 'Import & Export', href: '/sectors/import-export' },
      { label: 'Technology', href: '/sectors/technology' },
    ],
  },
  {
    heading: 'Firm',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'Insights',
    links: [
      { label: 'Investor Education', href: '/insights/education' },
      { label: 'Market Commentary', href: '/insights/commentary' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Speak with Us', href: '/contact' },
      { label: 'Client Login', href: '/login' },
      { label: 'Dubai, DIFC', href: '/about/offices' },
    ],
  },
]
