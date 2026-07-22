import type { LucideIcon } from 'lucide-react'
import { Snowflake, Sprout, Plane, ShieldCheck, FileCheck, Landmark, Clock } from 'lucide-react'

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

export interface Pool {
  slug: string
  name: string
  category: string
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
    heroImage: '/frozen_food.png',
    status: 'Currently not accepting new investments',
    tagline:
      'Short-term frozen meat trading fund leveraging cold-chain logistics, bulk procurement, and established distribution networks to generate consistent returns.',
    description:
      'Short-term frozen meat trading fund leveraging cold-chain logistics, bulk procurement, and established distribution networks to generate consistent returns.',
    heroMetrics: [
      { label: 'Pool Status', value: 'Fully Subscribed' },
    ],
    highlights: [
      'Established cold-chain and storage network.',
      'Strong supplier partnerships in frozen meat trade.',
      'Fast inventory turnover with controlled logistics.',
      'Experienced team in perishable goods handling.',
    ],
    steps: [
      { title: 'Origination', description: 'Our trade desk secures a confirmed purchase order from a Gulf distributor and identifies a verified origin supplier.' },
      { title: 'Capital Deployment', description: 'Pool capital finances the shipment at the point of origin, secured against the purchase order and bill of lading.' },
      { title: 'Transit & Cold Storage', description: 'Goods move through monitored cold-chain logistics into bonded storage in Dubai or Jebel Ali.' },
      { title: 'Delivery & Repayment', description: 'On delivery to the distributor, the facility is repaid with the agreed margin, closing the cycle.' },
    ],
    structure: [
      { term: 'Lock-in Period', detail: '1 Year' },
      { term: 'Cooling Period', detail: '20 Days' },
      { term: 'Pool Age', detail: '3 Years' },
    ],
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
    heroImage: '/cocoa_beans.png',
    status: 'Currently not accepting new investments',
    tagline:
      'Branded chocolate trading and distribution fund leveraging premium supplier partnerships, high-demand FMCG cycles, and efficient retail distribution to generate stable, scalable returns.',
    description:
      'Branded chocolate trading and distribution fund leveraging premium supplier partnerships, high-demand FMCG cycles, and efficient retail distribution to generate stable, scalable returns.',
    heroMetrics: [
      { label: 'Pool Status', value: 'Fully Subscribed' },
    ],
    highlights: [
      'Strong global chocolate brand sourcing.',
      'High-demand FMCG category with repeat consumption.',
      'Efficient retail and distribution network.',
      'Margin optimization through bulk procurement.',
    ],
    steps: [
      { title: 'Offtake Agreement', description: 'A processor commits to a fixed-price offtake contract ahead of the harvest season.' },
      { title: 'Cooperative Financing', description: 'Pool capital advances working capital to smallholder cooperatives to fund the harvest.' },
      { title: 'Aggregation & Export', description: 'Cocoa is aggregated, quality-graded, and exported under the offtake agreement.' },
      { title: 'Delivery & Repayment', description: 'Delivery to the processor triggers repayment at the pre-agreed contract price.' },
    ],
    structure: [
      { term: 'Lock-in Period', detail: '1 Year' },
      { term: 'Cooling Period', detail: '20 Days' },
      { term: 'Pool Age', detail: '3 Years' },
    ],
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
    status: 'Open to Subscription',
    tagline:
      'Travel and tourism investment fund leveraging strategic partnerships, premium travel experiences, and asset-light business models to capture global travel growth.',
    description:
      'Travel and tourism investment fund leveraging strategic partnerships, premium travel experiences, and asset-light business models to capture global travel growth.',
    heroMetrics: [],
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
