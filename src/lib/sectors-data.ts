import type { LucideIcon } from 'lucide-react'
import {
  TrendingUp,
  Building2,
  Ship,
  PackageSearch,
  Cpu,
  Landmark,
  ShieldCheck,
  LineChart,
  Globe2,
  Handshake,
  Home,
  Hammer,
  FileCheck,
  Users,
  ClipboardCheck,
  Rocket,
  Layers,
  Zap,
  Wallet,
  Clock,
} from 'lucide-react'

export interface SectorCapability {
  icon: LucideIcon
  title: string
  description: string
}

export interface SectorStep {
  title: string
  description: string
}

export interface SectorCaseStudy {
  title: string
  description: string
  metrics: { label: string; value: string }[]
  /** Company logo shown in the Featured Partner spotlight, e.g. '/phew-logo.png'. */
  logoSrc?: string
}

export interface SectionHeadingOverride {
  eyebrow: string
  title: string
  description?: string
}

export interface Sector {
  slug: string
  name: string
  icon: LucideIcon
  tagline: string
  description: string
  heroMetrics: { label: string; value: string }[]
  /** Big hero headline shown instead of `name`, for sectors with dedicated marketing copy. */
  heroHeadline?: string
  heroCta?: { label: string; href: string }
  /** Full-bleed photo background for the sector hero, e.g. '/Trading.png'. Omit for the plain ink hero. */
  heroImage?: string
  /** CSS object-position for heroImage, e.g. 'left center'. Defaults to 'center'. Use when the photo's focal point isn't centered, so it doesn't get cropped out on narrow (mobile) viewports. */
  heroImagePosition?: string
  overview?: {
    heading: string
    body: string
    stat?: { value: string; label: string }
  }
  capabilities: SectorCapability[]
  /** Overrides the default "Capabilities" section heading. */
  capabilitiesHeading?: SectionHeadingOverride
  process?: SectorStep[]
  /** A single spotlight, or several when a sector has multiple named
   *  partners to feature (e.g. Import & Export). */
  caseStudy: SectorCaseStudy | SectorCaseStudy[]
  /** Overrides the default "Case Study" section heading. */
  caseStudyHeading?: SectionHeadingOverride
  /** Portfolio companies operating in this sector. Empty until one is onboarded. */
  companies: string[]
}

export const sectors: Sector[] = [
  {
    slug: 'trading',
    name: 'Trading',
    icon: TrendingUp,
    heroImage: '/Trading.png',
    heroImagePosition: 'left center',
    tagline: 'Global commodity and structured trade desks, positioned across energy, metals, and soft commodities.',
    description:
      'Our trading desk originates and finances physical commodity trades across energy, metals, and soft commodities — always collateralized against the underlying shipment, never a speculative market position.',
    heroMetrics: [
      { label: 'Active Trade Lines', value: '18' },
      { label: 'Avg. Cycle Length', value: '5 months' },
    ],
    overview: {
      heading: 'Trade finance built around the shipment, not the ticker.',
      body: 'Every position our trading desk takes is tied to a physical commodity in motion — a confirmed purchase order, a bill of lading, a delivery contract. We do not take outright directional bets on commodity prices; margin is earned from financing the trade cycle itself, which is why our return profile has stayed remarkably stable across commodity cycles that have otherwise been volatile.',
    },
    capabilities: [
      { icon: Landmark, title: 'Structured Trade Finance', description: 'Financing tied to confirmed purchase orders and delivery contracts across energy, metals, and soft commodities.' },
      { icon: ShieldCheck, title: 'Collateral Management', description: 'Independent verification of goods, warehousing, and title transfer at every stage of a trade cycle.' },
      { icon: LineChart, title: 'Price Risk Hedging', description: 'Where price exposure exists, positions are hedged through regulated exchanges rather than left open.' },
      { icon: Globe2, title: 'Cross-Border Settlement', description: 'Multi-currency settlement infrastructure across Gulf, African, and Asian trade corridors.' },
    ],
    process: [
      { title: 'Origination', description: 'Our desk identifies a confirmed trade opportunity with a verified buyer and seller.' },
      { title: 'Structuring', description: 'Terms are structured around the specific commodity, corridor, and delivery timeline.' },
      { title: 'Execution', description: 'Capital is deployed against verified trade documentation — purchase order, bill of lading, and insurance.' },
      { title: 'Settlement', description: 'Proceeds are collected on delivery and confirmation, closing the cycle.' },
    ],
    caseStudy: {
      title: 'Gulf–India Base Metals Corridor',
      description:
        'A structured trade finance facility supporting the import of base metals from Indian smelters into UAE manufacturing distributors, executed across six trade cycles with zero settlement delays.',
      metrics: [
        { label: 'Trade Cycles', value: '6' },
      ],
    },
    companies: [],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: Building2,
    heroImage: '/realestate.webp',
    tagline: 'Direct ownership and development across prime residential and commercial assets in Dubai, London, and Southeast Asia.',
    description:
      'Our real estate desk acquires and develops income-producing and value-add assets directly — no fund-of-funds layer, no third-party operator taking a promote ahead of our investors.',
    heroMetrics: [
      { label: 'Active Assets', value: '12' },
      { label: 'Avg. Hold Period', value: '4.1 years' },
    ],
    overview: {
      heading: 'We hold the title, not a fund interest in someone else\'s deal.',
      body: 'Every asset in our real estate portfolio is acquired directly, in our own name or a wholly owned special purpose vehicle — never through a third-party fund structure layering fees between our investors and the underlying property. That direct ownership gives us full control over leasing, capital expenditure, and exit timing, and means every dollar of appreciation flows straight through to the pool.',
      stat: { value: '4.1 yrs', label: 'Average hold period across realized exits since 2015' },
    },
    capabilities: [
      { icon: Home, title: 'Direct Acquisition', description: 'Purchasing income-producing and value-add residential and commercial assets in our own name, without a fund-of-funds layer.' },
      { icon: Hammer, title: 'Development & Repositioning', description: 'Ground-up development and value-add repositioning of underperforming assets in prime locations.' },
      { icon: FileCheck, title: 'Title & Diligence', description: 'In-house legal review of title, zoning, and encumbrances before any capital is committed.' },
      { icon: Users, title: 'Asset & Tenant Management', description: 'Direct oversight of leasing, tenant relationships, and capital expenditure across the hold period.' },
    ],
    process: [
      { title: 'Sourcing', description: 'Off-market and brokered opportunities are screened against location, yield, and exit thesis criteria.' },
      { title: 'Diligence', description: 'Title, zoning, structural, and financial diligence completed before terms are agreed.' },
      { title: 'Acquisition & Value-Add', description: 'Asset is acquired directly and, where applicable, repositioned through renovation or re-leasing.' },
      { title: 'Hold & Exit', description: 'The asset is managed through its hold period and sold or refinanced at the pre-agreed exit point.' },
    ],
    caseStudy: {
      title: 'Marina Heights Residential Repositioning',
      description:
        'Acquisition and repositioning of a 96-unit residential tower in Dubai Marina — full interior renovation and re-leasing program delivered a substantial occupancy uplift within fourteen months.',
      metrics: [
        { label: 'Reposition Timeline', value: '14 months' },
      ],
    },
    companies: [],
  },
  {
    slug: 'shipping',
    name: 'Shipping',
    icon: Ship,
    heroImage: '/shipping.webp',
    tagline:
      'Al Quba offers end-to-end shipping and logistics solutions designed to make the movement of goods faster, safer, and more predictable. Whether your cargo travels by land, sea, or air, we handle the planning, tracking, and coordination with care. Our technology-driven approach improves efficiency while our team ensures your shipments arrive on time and within budget, giving your business a dependable supply chain you can trust.',
    description:
      'End-to-end shipping and logistics solutions from Al Quba Investment — reliable freight by land, sea, and air, powered by our partnership with Noble Star.',
    heroMetrics: [
      { label: 'Vessels Financed', value: '7' },
      { label: 'Avg. Charter Length', value: '11 months' },
    ],
    heroHeadline: 'Streamlining the movement of goods worldwide',
    heroCta: { label: 'Book Free Consultation', href: '/contact' },
    capabilitiesHeading: {
      eyebrow: 'What We Look For',
      title: 'Uncover our unique edges',
    },
    capabilities: [
      { icon: Wallet, title: 'Cost-efficient movement', description: 'Optimized transport routes and partners that reduce shipping costs while maintaining service quality.' },
      { icon: Clock, title: 'On-time delivery networks', description: 'A reliable network of carriers and hubs that ensures goods reach their destination as scheduled.' },
      { icon: Layers, title: 'Scalable logistics support', description: 'Flexible logistics systems that grow with your business, from small shipments to large operations.' },
    ],
    caseStudyHeading: {
      eyebrow: 'Partners',
      title: 'Partnering for Global Trade Excellence',
    },
    caseStudy: {
      title: 'Noble Star Shipping',
      description:
        'Noble Star is one of the leading shipping and logistics companies, providing integrated cargo services in the United Arab Emirates. We offer comprehensive logistics solutions by road, air, and sea freight, along with customs clearance, freight forwarding, and other handling solutions. The experience we have guarantees that the flow of logistics is seamless, effective, and transparent to the requirements of the clients.',
      metrics: [
        { label: 'Based In', value: 'United Arab Emirates' },
        { label: 'Services', value: 'Road, Air & Sea Freight' },
        { label: 'Focus', value: 'Cargo & Customs Clearance' },
      ],
      logoSrc: '/NobleStar.jpg',
    },
    companies: ['Noble Star Shipping'],
  },
  {
    slug: 'import-export',
    name: 'Import & Export',
    icon: PackageSearch,
    heroImage: '/importexport.png',
    tagline:
      'At Al Quba, we simplify the entire export and import journey so businesses can trade across borders with ease. From sourcing products and coordinating shipments to handling customs, paperwork, and compliance, our team ensures every step is smooth and stress-free. We focus on reliability, transparency, and timely delivery, helping companies explore new markets and grow with confidence.',
    description:
      'Seamless import and export solutions from Al Quba Investment — sourcing, shipping, customs, and compliance handled end-to-end for global trade.',
    heroMetrics: [
      { label: 'Active Corridors', value: '9' },
      { label: 'Avg. Facility Term', value: '4 months' },
    ],
    heroHeadline: 'Connecting the world with trusted global trade solutions',
    heroCta: { label: 'Book Free Consultation', href: '/contact' },
    capabilitiesHeading: {
      eyebrow: 'What We Look For',
      title: 'Uncover our unique edges',
    },
    capabilities: [
      { icon: ClipboardCheck, title: 'Efficient Operations', description: 'Managing shipments, customs clearance, and documentation with precision.' },
      { icon: Globe2, title: 'Reliable Cross-Border Trade', description: 'Ensuring timely and secure movement of goods worldwide.' },
      { icon: Rocket, title: 'Business Expansion Support', description: 'Helping companies grow by enabling smooth international trade.' },
    ],
    caseStudyHeading: {
      eyebrow: 'Partners',
      title: 'Partnering for Global Trade Excellence',
    },
    caseStudy: [
      {
        title: 'Container Kart',
        description:
          'Container Kart is an innovative full-container-load startup, fully owned by AL QUBA, specializing in the bulk procurement and trade of high-demand products, including both food (FMCG) and non-food items. We source entire containers directly from farmers and production units after ensuring quality and efficiency in our supply chain.',
        metrics: [
          { label: 'Ownership', value: 'Fully Owned by Al Quba' },
          { label: 'Model', value: 'Full-Container-Load' },
          { label: 'Focus', value: 'FMCG & Non-Food Bulk Trade' },
        ],
        logoSrc: '/containerkart-logo.png',
      },
      {
        title: 'Hebron',
        description:
          'Hebron is a fast-growing company that has built a very strong reputation as a wholesale distributor of foods and other products. We mainly deal with the distribution of large volumes of grocery products, including cereals, pulses, meat, poultry, seafood, dates & nuts, spices, rice, and FMCG products, and are well positioned throughout the Middle East.',
        metrics: [
          { label: 'Role', value: 'Wholesale Distributor' },
          { label: 'Region', value: 'Middle East' },
          { label: 'Focus', value: 'Grocery & FMCG Products' },
        ],
        logoSrc: '/hebron-logo.svg',
      },
      {
        title: 'Al Wahda',
        description:
          'Al Wahda is one of Qatar\'s leading food distribution companies, renowned for delivering exceptional culinary experiences. We curate an extensive range of premium products, including frozen foods, spices, herbs, gourmet ingredients, and specialty foods, sourced from around the globe to bring you truly international flavours. Our diverse portfolio also features frozen vegetables, chips, meats, rice, cereals, pulses, processed foods, and a variety of chicken products.',
        metrics: [
          { label: 'Based In', value: 'Qatar' },
          { label: 'Role', value: 'Food Distribution' },
          { label: 'Focus', value: 'Premium & Frozen Foods' },
        ],
        logoSrc: '/alwahda-logo.jpg',
      },
    ],
    companies: ['Container Kart', 'Hebron', 'Al Wahda'],
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: Cpu,
    heroImage: '/tech.png',
    heroImagePosition: '65% center',
    tagline:
      'Technology is at the heart of progress, and Al Quba actively supports innovative digital solutions that help businesses and communities move forward. From software and automation to smart analytics and digital infrastructure, we back ideas that improve efficiency and create better ways of working. Our focus is on empowering organizations with tools that enhance productivity, strengthen connectivity, and open new possibilities in a digital-first world.',
    description:
      'Al Quba backs innovative digital solutions — from software and automation to smart analytics and digital infrastructure — that help businesses and communities move forward.',
    heroMetrics: [
      { label: 'Active Positions', value: '1' },
      { label: 'Avg. Hold Period', value: 'Ongoing' },
    ],
    heroHeadline: 'Driving innovation through cutting-edge solutions',
    heroCta: { label: 'Book Free Consultation', href: '/contact' },
    capabilitiesHeading: {
      eyebrow: 'What We Look For',
      title: 'Uncover our unique edges',
    },
    capabilities: [
      { icon: Rocket, title: 'High-growth innovation', description: 'Invest in emerging technologies and products with strong potential for rapid market growth.' },
      { icon: Layers, title: 'Scalable digital models', description: 'Support software and platform-based businesses that can expand quickly without heavy physical infrastructure.' },
      { icon: Zap, title: 'Startup acceleration', description: 'Back early-stage companies with funding, mentorship, and market access to help them scale faster.' },
    ],
    caseStudyHeading: {
      eyebrow: 'Partners',
      title: 'Partnering for Global Trade Excellence',
    },
    caseStudy: {
      title: 'Phew Interactive LLP',
      description:
        'Phew Interactive is a Kerala-based comprehensive branding and marketing company with hands-on expertise in website and app development as well. We began our journey in 2024, specializing in design, development, and marketing. Our mission is to simplify complex digital challenges and deliver impactful, stress-free solutions. The name "Phew" reflects the sense of relief and accomplishment we bring to our clients by transforming complexities into effortless experiences.',
      metrics: [
        { label: 'Founded', value: '2024' },
        { label: 'Based In', value: 'Kerala, India' },
        { label: 'Focus', value: 'Branding, Web & App Development' },
      ],
      logoSrc: '/phew-logo.png',
    },
    companies: ['Phew'],
  },
]

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug)
}

/**
 * Icon lookup for sectors not yet fully authored. All five sectors
 * (Trading, Real Estate, Shipping, Import & Export, Technology) are now
 * live, so this stays empty — kept in place so RelatedSectors doesn't
 * need changes if another sector is ever added ahead of full authoring.
 */
export const upcomingSectors: { slug: string; name: string; icon: LucideIcon }[] = []

export const sectorIconFallback = Handshake
