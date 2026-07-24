import type { MegaMenuSection } from '@/types'

export const siteConfig = {
  name: 'Al Quba Investment',
  legalName: 'Al Quba Investment LLC',
  title: 'Al Quba Investment LLC — Global Investment & Asset Management, Dubai',
  description:
    'Al Quba Investment is a Dubai-headquartered investment and asset management firm deploying long-term capital across global exports, infrastructure and contracting, logistics and supply chain, import-export, and brand strategy divisions on behalf of institutional investors and family offices.',
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
          { label: 'Global Exports Division', href: '/sectors/global-exports', description: 'International trade led by Hebron General Trading LLC' },
          { label: 'Infrastructure, Contracting & Built Environments', href: '/sectors/infrastructure-contracting', description: 'Construction and contracting led by Bright Hurst' },
          { label: 'Logistics & Supply Chain', href: '/sectors/logistics-supply-chain', description: 'Freight and logistics led by NobleStar Shipping' },
          { label: 'Import & Export', href: '/sectors/import-export', description: 'Global sourcing led by ContainerKart and Al Wahda Trading' },
          { label: 'Brand Strategy', href: '/sectors/brand-strategy', description: 'Creative and digital solutions led by Phew Interactive' },
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

