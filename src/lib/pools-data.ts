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
  heroMetrics: { label: string; value: string }[]
  steps: PoolStep[]
  structure: PoolStructureItem[]
  risks: PoolRisk[]
}

export const pools: Pool[] = [
  {
    slug: 'frozen',
    name: 'Frozen Pool',
    category: 'Cold-Chain Commodities',
    tagline: 'Structured trade financing across the Gulf cold-chain import corridor.',
    description:
      'The Frozen Pool finances the import of frozen protein from origin markets in East Africa and South America into Gulf distribution networks. Capital is deployed at the point of shipment and repaid on delivery to bonded cold-storage, giving each cycle a defined start and end.',
    heroMetrics: [
      { label: 'Target Return', value: '12–15% p.a.' },
      { label: 'Cycle Length', value: '4–6 months' },
      { label: 'Minimum Commitment', value: '$50,000' },
    ],
    steps: [
      { title: 'Origination', description: 'Our trade desk secures a confirmed purchase order from a Gulf distributor and identifies a verified origin supplier.' },
      { title: 'Capital Deployment', description: 'Pool capital finances the shipment at the point of origin, secured against the purchase order and bill of lading.' },
      { title: 'Transit & Cold Storage', description: 'Goods move through monitored cold-chain logistics into bonded storage in Dubai or Jebel Ali.' },
      { title: 'Delivery & Repayment', description: 'On delivery to the distributor, the facility is repaid with the agreed margin, closing the cycle.' },
    ],
    structure: [
      { term: 'Collateral Type', detail: 'Purchase order, bill of lading, and bonded warehouse receipt.' },
      { term: 'Distribution Schedule', detail: 'Capital and return distributed at the close of each cycle, typically every 4–6 months.' },
      { term: 'Currency', detail: 'USD-denominated commitments and distributions.' },
      { term: 'Eligible Investors', detail: 'Accredited individuals, family offices, and institutional investors.' },
    ],
    risks: [
      { icon: ShieldCheck, title: 'Collateralized Structure', description: 'Every advance is secured against a confirmed purchase order and physical goods in transit.' },
      { icon: FileCheck, title: 'Verified Counterparties', description: 'All distributors and suppliers undergo a formal credit and compliance review before onboarding.' },
      { icon: Clock, title: 'Defined Cycle Length', description: 'Capital is never committed beyond the length of a single, pre-agreed trade cycle.' },
    ],
  },
  {
    slug: 'cocoa',
    name: 'Cocoa Pool',
    category: 'Soft Commodities',
    tagline: 'Seasonal cocoa trade financing from West African origin to global processors.',
    description:
      'The Cocoa Pool finances the procurement of cocoa directly from smallholder cooperatives ahead of the harvest, structured around the crop\'s seasonal cycle. Capital is repaid as the crop is delivered to processors in Asia and Europe under pre-agreed offtake contracts.',
    heroMetrics: [
      { label: 'Target Return', value: '14–18% p.a.' },
      { label: 'Cycle Length', value: '8–9 months' },
      { label: 'Minimum Commitment', value: '$75,000' },
    ],
    steps: [
      { title: 'Offtake Agreement', description: 'A processor commits to a fixed-price offtake contract ahead of the harvest season.' },
      { title: 'Cooperative Financing', description: 'Pool capital advances working capital to smallholder cooperatives to fund the harvest.' },
      { title: 'Aggregation & Export', description: 'Cocoa is aggregated, quality-graded, and exported under the offtake agreement.' },
      { title: 'Delivery & Repayment', description: 'Delivery to the processor triggers repayment at the pre-agreed contract price.' },
    ],
    structure: [
      { term: 'Collateral Type', detail: 'Signed offtake contract and export documentation.' },
      { term: 'Distribution Schedule', detail: 'Single distribution at harvest cycle close, typically 8–9 months from commitment.' },
      { term: 'Currency', detail: 'USD-denominated commitments and distributions.' },
      { term: 'Eligible Investors', detail: 'Accredited individuals, family offices, and institutional investors.' },
    ],
    risks: [
      { icon: ShieldCheck, title: 'Fixed-Price Offtake', description: 'Contract pricing is locked in before capital is deployed, removing spot-price exposure from the pool.' },
      { icon: Landmark, title: 'Cooperative Vetting', description: 'Every financed cooperative has a multi-season delivery track record before onboarding.' },
      { icon: Clock, title: 'Single Seasonal Cycle', description: 'Capital is tied to one harvest cycle at a time, never rolled into unrelated positions.' },
    ],
  },
  {
    slug: 'travel',
    name: 'Travel Pool',
    category: 'Hospitality & Aviation',
    tagline: 'Working-capital facilities for regional tour operators and charter aviation.',
    description:
      'The Travel Pool provides seasonal working capital to established tour operators and charter aviation providers ahead of peak Gulf tourism demand, repaid from confirmed booking revenue as the season progresses.',
    heroMetrics: [
      { label: 'Target Return', value: '10–13% p.a.' },
      { label: 'Cycle Length', value: '5–7 months' },
      { label: 'Minimum Commitment', value: '$50,000' },
    ],
    steps: [
      { title: 'Operator Review', description: 'Operators are assessed on booking volume, revenue history, and confirmed forward reservations.' },
      { title: 'Facility Deployment', description: 'Pool capital funds pre-season working capital — fleet leasing, staffing, and fuel reserves.' },
      { title: 'Peak Season Operation', description: 'Operators run their peak-season schedule against confirmed bookings.' },
      { title: 'Revenue Sweep & Repayment', description: 'A portion of booking revenue is swept to the facility throughout the season until repaid in full.' },
    ],
    structure: [
      { term: 'Collateral Type', detail: 'Confirmed booking receivables and, where applicable, aircraft or fleet liens.' },
      { term: 'Distribution Schedule', detail: 'Progressive distributions as revenue is swept through the season.' },
      { term: 'Currency', detail: 'USD-denominated commitments and distributions.' },
      { term: 'Eligible Investors', detail: 'Accredited individuals, family offices, and institutional investors.' },
    ],
    risks: [
      { icon: ShieldCheck, title: 'Revenue Sweep Mechanism', description: 'Repayment is automated against booking revenue rather than dependent on a single lump-sum payment.' },
      { icon: FileCheck, title: 'Confirmed Bookings Only', description: 'Facilities are sized against already-confirmed reservations, not projected demand.' },
      { icon: Clock, title: 'Seasonal Alignment', description: 'Cycle length is fixed to a single peak season, avoiding off-season exposure.' },
    ],
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
