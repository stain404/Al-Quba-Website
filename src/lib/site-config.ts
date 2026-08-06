import type { MegaMenuSection } from '@/types'
import type { Locale } from '@/i18n/routing'

export const siteConfig = {
  name: 'Al Quba Investment',
  legalName: 'Al Quba Investment LLC',
  title: 'Al Quba Investment LLC | Global Investment & Asset Management, Dubai',
  description:
    'Al Quba Investment LLC is a private investment firm in Dubai, UAE, deploying long-term capital across global exports, infrastructure and contracting, logistics and supply chain, import-export, and brand strategy divisions on behalf of institutional investors and family offices. Six operating companies, quarterly investor reporting.',
  // Drives metadataBase, every canonical URL, the sitemap, the OG image
  // URLs and the JSON-LD `url`. Left pointing at the original domain
  // while this is still a test build -- pointing it at the production
  // domain before launch would have two sites claiming the same
  // canonical. Switch it at launch, to whichever domain actually serves
  // the site (the firm's email uses alqubainvestment.com).
  url: 'https://www.alquba.com',
}

export const investorDashboardUrl = 'https://alquba-investor.workpoint001.info/login'

/**
 * Mega menu content in both locales. Kept here (rather than derived live
 * from sectors-data/pools-data) so the nav works independently of
 * whether a given sector/pool's own page content has been translated
 * yet — hrefs/slugs stay identical either way.
 */
function buildNavSections(locale: Locale): MegaMenuSection[] {
  if (locale === 'ar') {
    return [
      { label: 'من نحن', href: '/about' },
      {
        label: 'مركز المستثمرين',
        href: '/#sectors',
        columns: [
          {
            heading: 'منظومة أعمالنا',
            links: [
              { label: 'التجارة الدولية', href: '/sectors/global-exports', description: 'التجارة الدولية بقيادة شركة حبرون للتجارة العامة' },
              { label: 'العقارات', href: '/sectors/infrastructure-contracting', description: 'البناء والمقاولات بقيادة برايت هيرست' },
              { label: 'الشحن والخدمات اللوجستية', href: '/sectors/logistics-supply-chain', description: 'الشحن والخدمات اللوجستية بقيادة نوبل ستار للشحن' },
              { label: 'الاستيراد والتصدير', href: '/sectors/import-export', description: 'التوريد العالمي بقيادة كونتينر كارت والوحدة للتجارة' },
              { label: 'استراتيجية العلامة التجارية', href: '/sectors/brand-strategy', description: 'حلول إبداعية ورقمية بقيادة فيو إنتراكتيف' },
              { label: 'السياحة', href: '/sectors/tourism', description: 'السفر والضيافة بقيادة صندوق السفر العالمي الأول' },
            ],
          },
          {
            heading: 'صناديق الاستثمار',
            links: [
              { label: 'صندوق فروست كابيتال الأول', href: '/pools/frozen', description: 'صندوق تجارة اللحوم المجمدة' },
              { label: 'صندوق الكاكاو الفاخر الأول', href: '/pools/cocoa', description: 'صندوق تجارة الشوكولاتة ذات العلامة التجارية' },
              { label: 'صندوق السفر العالمي الأول', href: '/pools/travel', description: 'صندوق الاستثمار في قطاع السفر العالمي' },
            ],
          },
        ],
      },
      { label: 'رؤى المستثمرين', href: '/insights' },
    ]
  }

  return [
    { label: 'About Us', href: '/about' },
    {
      label: 'Investor Hub',
      href: '/#sectors',
      columns: [
        {
          heading: 'Our Ecosystem',
          links: [
            { label: 'International Trading', href: '/sectors/global-exports', description: 'International trade led by Hebron General Trading LLC' },
            { label: 'Real Estate', href: '/sectors/infrastructure-contracting', description: 'Construction and contracting led by Bright Hurst' },
            { label: 'Shipping & Logistics', href: '/sectors/logistics-supply-chain', description: 'Freight and logistics led by NobleStar Shipping' },
            { label: 'Import & Export', href: '/sectors/import-export', description: 'Global sourcing led by ContainerKart and Al Wahda Trading' },
            { label: 'Brand Strategy', href: '/sectors/brand-strategy', description: 'Creative and digital solutions led by Phew Interactive' },
            { label: 'Tourism', href: '/sectors/tourism', description: 'Travel and hospitality led by Global Travel Fund I' },
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
    { label: 'Investor Insights', href: '/insights' },
  ]
}

export function getNavSections(locale: Locale): MegaMenuSection[] {
  return buildNavSections(locale)
}

