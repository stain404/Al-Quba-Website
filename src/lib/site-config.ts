import type { MegaMenuSection } from '@/types'
import type { Locale } from '@/i18n/routing'

export const siteConfig = {
  name: 'Al Quba Investment',
  legalName: 'Al Quba Investment LLC',
  title: 'Al Quba Investment LLC | Global Investment & Asset Management, Dubai',
  description:
    'Al Quba Investment LLC is a private investment firm in Dubai, UAE, deploying long-term capital across global exports, infrastructure and contracting, logistics and supply chain, import-export, and brand strategy divisions on behalf of institutional investors and family offices. Six operating companies, quarterly investor reporting.',
  // Drives metadataBase, every canonical URL, the sitemap, the OG image
  // URLs and the JSON-LD `url`. Apex, no `www` -- matches the canonical
  // the existing site already publishes, so the new build inherits that
  // authority rather than splitting it across two hostnames.
  url: 'https://alqubainvestment.com',
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
              { label: 'التجارة الدولية', href: '/sectors/global-exports', description: 'تجارة عالمية بقيادة حبرون وكونتينر كارت والوحدة للتجارة' },
              { label: 'العقارات', href: '/sectors/infrastructure-contracting', description: 'البناء والمقاولات بقيادة برايت هيرست' },
              { label: 'الشحن والخدمات اللوجستية', href: '/sectors/logistics-supply-chain', description: 'الشحن والخدمات اللوجستية بقيادة نوبل ستار للشحن' },
              { label: 'الاستيراد والتصدير', href: '/sectors/import-export', description: 'التوريد العابر للحدود والمشتريات الرقمية' },
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
        featured: {
          title: 'رؤى المستثمرين',
          description: 'تحليلاتنا لأسواق الإمارات والخليج، واتجاهات القطاعات، وبناء المحافظ على المدى الطويل.',
          href: '/insights',
        },
      },
      { label: 'الوظائف', href: '/careers' },
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
            { label: 'International Trading', href: '/sectors/global-exports', description: 'Global trade led by Hebron, ContainerKart, and Al Wahda Trading' },
            { label: 'Real Estate', href: '/sectors/infrastructure-contracting', description: 'Construction and contracting led by Bright Hurst' },
            { label: 'Shipping & Logistics', href: '/sectors/logistics-supply-chain', description: 'Freight and logistics led by NobleStar Shipping' },
            { label: 'Import & Export', href: '/sectors/import-export', description: 'Cross-border sourcing and digital procurement' },
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
      // Fills the 320px track the mega menu grid has always reserved for a
      // featured card — Investor Insights moved in here when Careers took
      // its place in the top-level nav row.
      featured: {
        title: 'Investor Insights',
        description: 'Our read on UAE and GCC markets, sector trends, and long-term portfolio construction.',
        href: '/insights',
      },
    },
    { label: 'Careers', href: '/careers' },
  ]
}

export function getNavSections(locale: Locale): MegaMenuSection[] {
  return buildNavSections(locale)
}

