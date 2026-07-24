import type { LucideIcon } from 'lucide-react'
import {
  Snowflake,
  Sprout,
  Plane,
  ShieldCheck,
  FileCheck,
  Landmark,
  Clock,
  PieChart,
  Lock,
  History,
  TrendingUp,
  Target,
  Wallet,
  Percent,
  BadgeCheck,
} from 'lucide-react'

export interface PoolStep {
  title: string
  description: string
}

export interface PoolStructureItem {
  term: string
  detail: string
}

export interface PoolRisk {
  icon: LucideIcon
  title: string
  description: string
}

/** One tile in the Investment Snapshot grid. */
export interface PoolSnapshotItem {
  icon: LucideIcon
  label: string
  value: string
  /** Secondary line under the value, e.g. a split breakdown. */
  detail?: string
  /** Small disclaimer specific to this figure (e.g. projected returns). */
  disclaimer?: string
  /** Renders `value` as a status pill instead of plain text. */
  isStatus?: boolean
}

export interface PoolHighlight {
  icon: LucideIcon
  title: string
  description: string
}

export interface Pool {
  slug: string
  name: string
  category: string
  /** Pool number shown as a small "Pool 01" tag near the hero eyebrow. */
  poolNumber?: number
  tagline: string
  description: string
  /** Full-bleed photo background for the pool hero, e.g. '/frozen_food.png'. */
  heroImage?: string
  /** Subscription status shown as a pill in the hero, e.g. 'Open to Subscription'. */
  status: string
  /** "Investment Details" — rendered in the hero's metrics row. */
  heroMetrics: { label: string; value: string }[]
  /** "Right Side Highlights" — short bullet points rendered in the hero. */
  highlights: string[]
  /** Investment Snapshot — icon-grid quick-glance metrics below the hero. */
  snapshot?: PoolSnapshotItem[]
  /** Investment Highlights — richer title+description cards. */
  investmentHighlights?: PoolHighlight[]
  /** A single supplementary FAQ entry specific to this pool. */
  faq?: { question: string; answer: string }
  steps: PoolStep[]
  /** "Fund Details" — rendered by PoolStructure as a definition list. */
  structure: PoolStructureItem[]
  risks: PoolRisk[]
  /**
   * Link for the Download Brochure button. Omit to hide the button
   * entirely. Point at a real PDF once one exists (e.g. '/brochures/
   * frozen.pdf', opens in a new tab); until then this can point at an
   * internal route like '/contact' (opens in the same tab).
   */
  brochureUrl?: string
}

export const pools: Pool[] = [
  {
    slug: 'frozen',
    name: 'Frost Capital Fund I',
    category: 'Frozen Meat Trading Fund',
    poolNumber: 1,
    heroImage: '/frozen_food.png',
    status: 'Fully Subscribed',
    tagline:
      'Frost Capital Fund I is a professionally managed frozen meat trading investment pool designed to capitalize on high-volume international trade opportunities. Leveraging established supplier relationships, efficient cold-chain logistics, and disciplined capital deployment, the fund focuses on delivering sustainable value through structured trading cycles.',
    description:
      'Frost Capital Fund I is a short-term frozen meat trading investment pool focused on sourcing, importing, and distributing premium frozen meat products across established international trade corridors. By combining strong supplier relationships, efficient cold-chain logistics, and disciplined inventory management, the fund is structured to optimize capital deployment while maintaining operational efficiency and controlled risk.',
    heroMetrics: [
      { label: 'Pool Status', value: 'Fully Subscribed' },
    ],
    highlights: [
      'Established cold-chain and storage network.',
      'Strong supplier partnerships in frozen meat trade.',
      'Fast inventory turnover with controlled logistics.',
      'Experienced team in perishable goods handling.',
    ],
    snapshot: [
      { icon: PieChart, label: 'Profit Split', value: '45% / 55%', detail: 'Al Quba / Investors' },
      { icon: Lock, label: 'Lock-in Period', value: '1 Year' },
      { icon: Clock, label: 'Cool-off Period', value: '20 Days' },
      { icon: History, label: 'Pool Age', value: '3 Years' },
      {
        icon: TrendingUp,
        label: 'Projected Monthly Returns',
        value: 'Up to 2%',
        disclaimer: 'Projected returns are indicative only and are not guaranteed.',
      },
      { icon: Target, label: 'Target Capital', value: 'AED 1.8 Million' },
      { icon: Wallet, label: 'Minimum Investment', value: 'AED 50,000' },
      { icon: Percent, label: 'Management Fee', value: '2%' },
      { icon: BadgeCheck, label: 'Pool Status', value: 'Fully Subscribed', isStatus: true },
    ],
    steps: [
      { title: 'Origination', description: 'Our trade desk secures a confirmed purchase order from a Gulf distributor and identifies a verified origin supplier.' },
      { title: 'Capital Deployment', description: 'Pool capital finances the shipment at the point of origin, secured against the purchase order and bill of lading.' },
      { title: 'Transit & Cold Storage', description: 'Goods move through monitored cold-chain logistics into bonded storage in Dubai or Jebel Ali.' },
      { title: 'Delivery & Repayment', description: 'On delivery to the distributor, the facility is repaid with the agreed margin, closing the cycle.' },
    ],
    structure: [],
    risks: [
      { icon: ShieldCheck, title: 'Collateralized Structure', description: 'Every advance is secured against a confirmed purchase order and physical goods in transit.' },
      { icon: FileCheck, title: 'Verified Counterparties', description: 'All distributors and suppliers undergo a formal credit and compliance review before onboarding.' },
      { icon: Clock, title: 'Defined Cycle Length', description: 'Capital is never committed beyond the length of a single, pre-agreed trade cycle.' },
    ],
    brochureUrl: '/contact',
  },
  {
    slug: 'cocoa',
    name: 'Premium Cocoa Fund I',
    category: 'Branded Chocolate Trading Fund',
    poolNumber: 2,
    heroImage: '/cocoa_beans.png',
    status: 'Fully Subscribed',
    tagline:
      'Premium Cocoa Fund I is a professionally managed branded chocolate trading investment pool designed to capitalize on consistent global FMCG demand. Through strategic supplier partnerships, efficient distribution networks, and disciplined capital deployment, the fund focuses on creating sustainable long-term value while maintaining operational efficiency and controlled risk.',
    description:
      'Premium Cocoa Fund I is a branded chocolate trading and distribution investment pool focused on sourcing internationally recognised premium chocolate brands and supplying high-demand retail and wholesale markets. By combining strong supplier relationships, efficient inventory management, and an established distribution network, the fund is structured to maximise capital efficiency while delivering sustainable long-term growth.',
    heroMetrics: [
      { label: 'Pool Status', value: 'Fully Subscribed' },
    ],
    highlights: [
      'Strong global chocolate brand sourcing.',
      'High-demand FMCG category with repeat consumption.',
      'Efficient retail and distribution network.',
      'Margin optimization through bulk procurement.',
    ],
    snapshot: [
      { icon: PieChart, label: 'Profit Split', value: '50% / 50%', detail: 'Al Quba / Investors' },
      { icon: Lock, label: 'Lock-in Period', value: '1 Year' },
      { icon: Clock, label: 'Cool-off Period', value: '20 Days' },
      { icon: History, label: 'Pool Age', value: '3 Years' },
      {
        icon: TrendingUp,
        label: 'Projected Monthly Returns',
        value: 'Up to 2%',
        disclaimer: 'Projected returns are indicative only and do not guarantee future performance.',
      },
      { icon: Target, label: 'Target Capital', value: 'AED 2 Million' },
      { icon: Wallet, label: 'Minimum Investment', value: 'AED 50,000' },
      { icon: Percent, label: 'Management Fee', value: '2%' },
      { icon: BadgeCheck, label: 'Pool Status', value: 'Fully Subscribed', isStatus: true },
    ],
    steps: [
      { title: 'Offtake Agreement', description: 'A processor commits to a fixed-price offtake contract ahead of the harvest season.' },
      { title: 'Cooperative Financing', description: 'Pool capital advances working capital to smallholder cooperatives to fund the harvest.' },
      { title: 'Aggregation & Export', description: 'Cocoa is aggregated, quality-graded, and exported under the offtake agreement.' },
      { title: 'Delivery & Repayment', description: 'Delivery to the processor triggers repayment at the pre-agreed contract price.' },
    ],
    structure: [],
    risks: [
      { icon: ShieldCheck, title: 'Fixed-Price Offtake', description: 'Contract pricing is locked in before capital is deployed, removing spot-price exposure from the pool.' },
      { icon: Landmark, title: 'Cooperative Vetting', description: 'Every financed cooperative has a multi-season delivery track record before onboarding.' },
      { icon: Clock, title: 'Single Seasonal Cycle', description: 'Capital is tied to one harvest cycle at a time, never rolled into unrelated positions.' },
    ],
    brochureUrl: '/contact',
  },
  {
    slug: 'travel',
    name: 'Global Travel Fund I',
    category: 'Global Travel Investment Fund',
    heroImage: '/boarding_plane.png',
    status: 'Applications Open',
    tagline:
      'Travel and tourism investment fund leveraging strategic partnerships, premium travel experiences, and asset-light business models to capture global travel growth.',
    description:
      'Travel and tourism investment fund leveraging strategic partnerships, premium travel experiences, and asset-light business models to capture global travel growth.',
    heroMetrics: [
      { label: 'Pool Status', value: 'Applications Open' },
    ],
    highlights: [
      'Strategic partnerships with global travel brands.',
      'High-growth travel industry.',
      'Asset-light business model.',
      'Operational efficiency with risk-managed approach.',
    ],
    steps: [
      { title: 'Operator Review', description: 'Operators are assessed on booking volume, revenue history, and confirmed forward reservations.' },
      { title: 'Facility Deployment', description: 'Pool capital funds pre-season working capital — fleet leasing, staffing, and fuel reserves.' },
      { title: 'Peak Season Operation', description: 'Operators run their peak-season schedule against confirmed bookings.' },
      { title: 'Revenue Sweep & Repayment', description: 'A portion of booking revenue is swept to the facility throughout the season until repaid in full.' },
    ],
    structure: [
      { term: 'Lock-in Period', detail: '1 Year' },
      { term: 'Cooling Period', detail: '180 Days' },
      { term: 'Pool Age', detail: '3 Years' },
    ],
    risks: [
      { icon: ShieldCheck, title: 'Revenue Sweep Mechanism', description: 'Repayment is automated against booking revenue rather than dependent on a single lump-sum payment.' },
      { icon: FileCheck, title: 'Confirmed Bookings Only', description: 'Facilities are sized against already-confirmed reservations, not projected demand.' },
      { icon: Clock, title: 'Seasonal Alignment', description: 'Cycle length is fixed to a single peak season, avoiding off-season exposure.' },
    ],
    brochureUrl: '/contact',
  },
]

export function getPoolBySlug(slug: string): Pool | undefined {
  return pools.find((pool) => pool.slug === slug)
}

const iconForCategory: Record<string, LucideIcon> = {
  frozen: Snowflake,
  cocoa: Sprout,
  travel: Plane,
}

export function getPoolIcon(slug: string): LucideIcon {
  return iconForCategory[slug] ?? Landmark
}
