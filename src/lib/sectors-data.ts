import type { LucideIcon } from 'lucide-react'
import {
  TrendingUp,
  Building2,
  Ship,
  PackageSearch,
  Landmark,
  ShieldCheck,
  Globe2,
  Handshake,
  Hammer,
  Users,
  ClipboardCheck,
  Rocket,
  Layers,
  Zap,
  Clock,
  Package,
  Truck,
  Target,
  Compass,
  Megaphone,
  PenTool,
  Palette,
  HardHat,
  Plane,
  Hotel,
  MapPin,
  Luggage,
  Ticket,
  CalendarCheck,
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
  /** Bulleted "Key Highlights" checklist — used instead of/alongside metrics for flagship company spotlights. */
  highlights?: string[]
  /** Company logo shown in the Featured Partner spotlight, e.g. '/phew-logo.png'. */
  logoSrc?: string
  /** Optional CTA button, e.g. { label: 'Learn More About NobleStar', href: '/contact' }. */
  cta?: { label: string; href: string }
}

export interface SectionHeadingOverride {
  eyebrow: string
  title: string
  description?: string
}

/** Editorial heading + one-or-more body paragraphs, reused for both the
 *  "About the Division" overview and the "Why This Division Matters"
 *  block further down a division page. */
export interface SectorOverviewBlock {
  heading: string
  body: string | string[]
  stat?: { value: string; label: string }
}

export interface Sector {
  slug: string
  name: string
  icon: LucideIcon
  tagline: string
  description: string
  /** Small metric pill shown only on this sector's card in other pages'
   *  Related Sectors grids — no longer rendered in the hero itself. */
  heroMetrics: { label: string; value: string }[]
  /** Big hero headline shown instead of `name`, for sectors with dedicated marketing copy. */
  heroHeadline?: string
  /** Short line between the headline and the tagline paragraph, e.g. 'Expanding International Trade Through Trusted Partnerships'. */
  heroSubtitle?: string
  /** Full-bleed photo background for the sector hero, e.g. '/Trading.png'. Omit for the plain ink hero. */
  heroImage?: string
  /** CSS object-position for heroImage, e.g. 'left center'. Defaults to 'center'. Use when the photo's focal point isn't centered, so it doesn't get cropped out on narrow (mobile) viewports. */
  heroImagePosition?: string
  /** Lightens the hero scrim. The default weight is tuned for bright
   *  photos that need holding back; a photo that is already dark reaches
   *  near-black under it. Mirrors the same flag on `Pool`. */
  heroScrimSoft?: boolean
  overview?: SectorOverviewBlock
  /** "Why This Division Matters" — a second editorial block further down the page, same shape as `overview`. */
  whyItMatters?: SectorOverviewBlock
  capabilities: SectorCapability[]
  /** Overrides the default "Capabilities" section heading. */
  capabilitiesHeading?: SectionHeadingOverride
  process?: SectorStep[]
  /** Overrides the default "How It Works" process section heading, e.g. { eyebrow: 'Export Process', title: '...' }. */
  processHeading?: SectionHeadingOverride
  /** A single spotlight, or several when a sector has multiple named
   *  partners to feature (e.g. Import & Export). */
  caseStudy?: SectorCaseStudy | SectorCaseStudy[]
  /** Overrides the default "Case Study" section heading. */
  caseStudyHeading?: SectionHeadingOverride
  /** "Industry Outlook" — a qualitative discussion block plus a small
   *  grid of non-numeric KPI cards (e.g. "Growing Markets"). */
  industryOutlook?: {
    heading?: SectionHeadingOverride
    items: SectorCapability[]
  }
  /** "Why Businesses Choose [Company]" — four feature cards, only present
   *  on divisions with a single flagship company. */
  whyChoose?: {
    heading?: SectionHeadingOverride
    items: SectorCapability[]
  }
  /** Portfolio companies operating in this sector. Empty until one is onboarded. */
  companies: string[]
}

export const sectors: Sector[] = [
  {
    slug: 'global-exports',
    name: 'International Trading',
    icon: Globe2,
    heroImage: '/Trading.png',
    heroImagePosition: 'left center',
    heroSubtitle: 'Expanding International Trade Through Trusted Partnerships',
    tagline:
      "Al Quba Investment's Global Exports Division moves high-quality products across international markets through strategic sourcing, reliable export operations, and long-term commercial partnerships that drive sustainable trade.",
    description:
      "Explore Al Quba Investment's Global Exports Division and discover how Hebron General Trading LLC, ContainerKart, and Al Wahda Trading deliver trusted international trade, strategic sourcing, and export solutions across global markets.",
    heroMetrics: [
      { label: 'Active Trade Lines', value: '18' },
      { label: 'Avg. Cycle Length', value: '5 months' },
    ],
    overview: {
      heading: 'Driving Global Trade with Confidence',
      body: [
        "Al Quba Investment's Global Exports Division brings together international trade expertise, cross-border commerce capability, and durable buyer-supplier relationships to help businesses move products confidently across global markets.",
        'Through reliable export operations and disciplined supply chain efficiency, the division supports market expansion for manufacturers, suppliers, and distributors, creating dependable trade corridors rather than one-off transactions.',
      ],
    },
    caseStudyHeading: {
      eyebrow: 'Our Operating Companies',
      title: 'Featured Companies',
    },
    caseStudy: [
      {
        title: 'Hebron General Trading LLC',
        description:
          'Hebron is a fast-growing company that has built a very strong reputation as a wholesale distributor of foods and other products. We mainly deal with the distribution of large volumes of grocery products, including cereals, pulses, meat, poultry, seafood, dates & nuts, spices, rice, and FMCG products, and are well positioned throughout the Middle East.',
        highlights: [
          'Global product sourcing across trusted supplier networks',
          'International export operations across Middle East markets',
          'Wholesale trading in grocery, FMCG, and frozen food categories',
          'Quality assurance across every stage of the supply chain',
          'Reliable, long-term distribution partnerships',
        ],
        metrics: [
          { label: 'Role', value: 'Wholesale Distributor' },
          { label: 'Region', value: 'Middle East' },
          { label: 'Focus', value: 'Grocery & FMCG Products' },
        ],
        logoSrc: '/hebron-logo.svg',
      },
      {
        title: 'ContainerKart',
        description:
          'ContainerKart is an innovative full-container-load startup, fully owned by AL QUBA, specializing in the bulk procurement and trade of high-demand products, including both food (FMCG) and non-food items. We source entire containers directly from farmers and production units after ensuring quality and efficiency in our supply chain.',
        highlights: [
          'Digital B2B Marketplace',
          'Verified Global Suppliers',
          'Bulk Container Trading',
          'International Procurement',
          'Cross-Border Commerce',
          'Trade Facilitation',
        ],
        metrics: [
          { label: 'Ownership', value: 'Fully Owned by Al Quba' },
          { label: 'Model', value: 'Full-Container-Load' },
          { label: 'Focus', value: 'FMCG & Non-Food Bulk Trade' },
        ],
        logoSrc: '/containerkart-logo.png',
      },
      {
        title: 'Al Wahda Trading',
        description:
          'Al Wahda Trading serves as the commercial trading arm of the division, specializing in sourcing, importing, and distributing products across regional markets. By maintaining strong supplier relationships and an extensive procurement network, the company delivers reliable trading solutions tailored to evolving market demands.',
        highlights: [
          'Wholesale Trading',
          'Product Procurement',
          'Import Operations',
          'Distribution Network',
          'Commercial Partnerships',
          'Regional Market Expertise',
        ],
        metrics: [
          { label: 'Based In', value: 'Qatar' },
          { label: 'Role', value: 'Commercial Trading' },
          { label: 'Focus', value: 'Import & Distribution' },
        ],
        logoSrc: '/alwahda-logo.jpg',
      },
    ],
    capabilitiesHeading: {
      eyebrow: 'Core Capabilities',
      title: 'Six areas of specialized expertise',
    },
    capabilities: [
      { icon: Package, title: 'Global Product Sourcing', description: 'Identifying and securing high-quality products from trusted suppliers across international markets.' },
      { icon: Ship, title: 'International Export Management', description: 'Managing the full export cycle, from documentation to delivery, across established trade corridors.' },
      { icon: Truck, title: 'Wholesale Distribution', description: 'Moving large volumes of goods efficiently into wholesale and retail markets.' },
      { icon: Layers, title: 'Supply Chain Coordination', description: 'Coordinating sourcing, logistics, and delivery so every trade cycle runs smoothly.' },
      { icon: ShieldCheck, title: 'Trade Compliance', description: 'Ensuring every shipment meets customs, quality, and regulatory requirements.' },
      { icon: Handshake, title: 'Strategic Commercial Partnerships', description: 'Building long-term relationships with suppliers and buyers rather than one-off transactions.' },
    ],
    whyItMatters: {
      heading: 'Why Al Quba Invests in Global Exports',
      body: [
        "Global trade continues to grow as businesses seek reliable partners capable of connecting supply with demand across borders. Al Quba Investment invests in this division because it combines growing international demand with genuinely diversified exposure across global markets, not a single corridor or category.",
        'Long-term commercial relationships, built over years rather than single transactions, give the division the operational resilience to sustain trade growth through changing market conditions, while ongoing international expansion continues to open new opportunities for our investors and trading partners alike.',
      ],
    },
    processHeading: {
      eyebrow: 'Export Process',
      title: 'From sourcing to successful delivery',
    },
    process: [
      { title: 'Market Research', description: 'Identifying demand, pricing trends, and viable trade corridors before any commitment is made.' },
      { title: 'Strategic Sourcing', description: 'Securing high-quality products from vetted suppliers and production partners.' },
      { title: 'Quality Assurance', description: 'Verifying product quality and specification compliance before goods are cleared for export.' },
      { title: 'Export Documentation', description: 'Preparing and processing the customs, compliance, and shipping documentation each corridor requires.' },
      { title: 'International Shipping', description: 'Coordinating freight and logistics partners to move goods efficiently to their destination market.' },
      { title: 'Successful Delivery', description: 'Confirming delivery and settlement, closing the cycle and reinforcing the buyer relationship.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'Industry Outlook',
        title: 'Where global trade is headed',
        description:
          'International trade continues to expand through emerging markets, digital trade enablement, and increasing supply chain diversification, creating long-term opportunities for investors positioned in genuinely global trade networks.',
      },
      items: [
        { icon: TrendingUp, title: 'Growing Markets', description: 'Expanding demand across established and emerging international markets.' },
        { icon: Handshake, title: 'Export Partnerships', description: 'A growing network of long-term supplier and buyer relationships.' },
        { icon: Globe2, title: 'International Reach', description: 'Trade corridors spanning multiple regions and product categories.' },
        { icon: Target, title: 'Trade Opportunities', description: 'New avenues for sustainable growth as global commerce evolves.' },
      ],
    },
    /* ContainerKart and Al Wahda sit here rather than under Import &
       Export: all three are the firm's trading businesses, and the home
       Portfolio grid attributes a company to exactly one division. The
       Import & Export page still spotlights both in its case studies. */
    companies: ['Hebron General Trading LLC', 'ContainerKart', 'Al Wahda Trading'],
  },
  {
    slug: 'infrastructure-contracting',
    name: 'Real Estate',
    icon: Building2,
    heroImage: '/realestate.jpeg',
    heroSubtitle: 'Building Strong Foundations for Sustainable Growth',
    tagline:
      "Al Quba Investment's Infrastructure, Contracting & Built Environments Division delivers reliable construction for commercial, industrial, and infrastructure development, built on quality workmanship and engineering expertise.",
    description:
      "Discover Al Quba Investment's Infrastructure, Contracting & Built Environments Division and Bright Hurst Contracting, delivering commercial construction, contracting, engineering support, and infrastructure development solutions.",
    heroMetrics: [],
    overview: {
      heading: 'Building the Future with Confidence',
      body: [
        "Infrastructure plays a vital role in economic development and business expansion. Al Quba Investment's Infrastructure, Contracting & Built Environments Division supports this growth by delivering dependable contracting solutions that emphasize quality, safety, and operational excellence.",
        'Through efficient planning, skilled project execution, and a commitment to long-term value creation, the division helps deliver projects that strengthen communities and support sustainable development.',
      ],
    },
    caseStudyHeading: {
      eyebrow: 'Featured Company',
      title: 'Bright Hurst Contracting',
    },
    caseStudy: {
      title: 'Bright Hurst Contracting',
      description:
        "Bright Hurst Contracting is the construction and contracting company within Al Quba Investment's Infrastructure Division. The company delivers dependable contracting solutions across commercial and infrastructure projects while maintaining a strong focus on quality, operational efficiency, and client satisfaction.",
      highlights: [
        'Commercial Construction',
        'Infrastructure Development',
        'Contracting Solutions',
        'Project Management',
        'Engineering Support',
        'Quality Execution',
      ],
      metrics: [],
      // The full-colour navy mark, trimmed out of the supplied original
      // (`public/brighthust.png`) with its near-white plate knocked out to
      // alpha so it sits directly on the card. The greyscale variant in
      // `public/logos` is the Portfolio grid's, not this one's.
      logoSrc: '/brighthust-logo.png',
    },
    capabilitiesHeading: {
      eyebrow: 'Division Capabilities',
      title: 'Contracting and engineering expertise',
    },
    capabilities: [
      { icon: Building2, title: 'Commercial Construction', description: 'Delivering dependable construction solutions for business environments.' },
      { icon: Landmark, title: 'Infrastructure Development', description: 'Supporting projects that strengthen communities and commercial growth.' },
      { icon: ClipboardCheck, title: 'Project Management', description: 'Coordinating projects from planning through successful completion.' },
      { icon: HardHat, title: 'Engineering Support', description: 'Providing technical expertise to ensure quality project delivery.' },
      { icon: Hammer, title: 'Contracting Solutions', description: 'Managing construction activities with efficiency and professionalism.' },
      { icon: Globe2, title: 'Responsible Project Execution', description: 'Delivering every project with a consistent focus on safety, compliance, and community impact.' },
    ],
    whyItMatters: {
      heading: 'Why This Division Matters',
      body: [
        "Modern economies depend on reliable infrastructure and high-quality construction to support business growth and community development. Al Quba Investment's Infrastructure, Contracting & Built Environments Division contributes to this progress by investing in companies that deliver dependable construction expertise and consistent project discipline.",
        'Through Bright Hurst Contracting, the division supports commercial and infrastructure projects that create lasting value while maintaining a commitment to quality, safety, and sustainable development.',
      ],
    },
    processHeading: {
      eyebrow: 'Project Delivery Journey',
      title: 'From planning to long-term value',
    },
    process: [
      { title: 'Planning', description: 'Project scope, requirements, and timelines are defined before work begins.' },
      { title: 'Engineering', description: 'Technical design and engineering work ensure the project is built to specification.' },
      { title: 'Project Execution', description: 'Construction and contracting work proceeds under active project management.' },
      { title: 'Quality Assurance', description: 'Every stage is reviewed against quality and safety standards.' },
      { title: 'Project Completion', description: 'The project is delivered and handed over to the client.' },
      { title: 'Long-Term Value', description: 'Completed projects continue to support business and community growth.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'Industry Outlook',
        title: 'Where infrastructure investment is headed',
        description:
          'Infrastructure investment continues to play a critical role in economic development, urban expansion, and industrial growth. Businesses increasingly require experienced contracting partners capable of delivering projects efficiently while maintaining quality and operational excellence.',
      },
      items: [
        { icon: Landmark, title: 'Infrastructure Growth', description: 'Expanding demand for commercial and infrastructure development.' },
        { icon: ClipboardCheck, title: 'Project Excellence', description: 'Consistent delivery of projects to specification and schedule.' },
        { icon: ShieldCheck, title: 'Quality Construction', description: 'Workmanship built around safety and lasting quality.' },
        { icon: Globe2, title: 'Sustainable Development', description: 'Projects designed to support long-term community growth.' },
      ],
    },
    whyChoose: {
      heading: {
        eyebrow: 'Why Bright Hurst',
        title: 'Why Businesses Choose Bright Hurst',
      },
      items: [
        { icon: ClipboardCheck, title: 'Reliable Project Delivery', description: 'Projects delivered on schedule and to specification.' },
        { icon: HardHat, title: 'Engineering Expertise', description: 'Technical expertise applied across every project stage.' },
        { icon: ShieldCheck, title: 'Quality Workmanship', description: 'A consistent focus on safety and construction quality.' },
        { icon: Handshake, title: 'Long-Term Partnerships', description: 'Relationships built to support ongoing project needs.' },
      ],
    },
    companies: ['Bright Hurst Contracting'],
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Shipping & Logistics',
    icon: Ship,
    heroImage: '/shipping.jpeg',
    heroScrimSoft: true,
    heroSubtitle: 'Delivering Global Connectivity Through Integrated Logistics',
    tagline:
      "Al Quba Investment's Logistics & Supply Chain Division moves goods efficiently across domestic and international markets through integrated shipping, freight coordination, and deep supply chain expertise.",
    description:
      "Discover Al Quba Investment's Logistics & Supply Chain Division and NobleStar Shipping Services LLC, delivering integrated shipping, freight coordination, cargo management, and supply chain solutions.",
    heroMetrics: [
      { label: 'Vessels Financed', value: '7' },
      { label: 'Avg. Charter Length', value: '11 months' },
    ],
    overview: {
      heading: 'Connecting Global Supply Chains',
      body: [
        "Efficient logistics is the foundation of global commerce. Al Quba Investment's Logistics & Supply Chain Division supports businesses by delivering dependable freight solutions, streamlined transportation, and coordinated supply chain operations.",
        'Through strategic planning, operational expertise, and reliable logistics partnerships, the division helps businesses optimize the movement of goods while improving efficiency, reliability, and customer satisfaction across international markets.',
      ],
    },
    caseStudyHeading: {
      eyebrow: 'Featured Company',
      title: 'NobleStar Shipping Services LLC',
    },
    caseStudy: {
      title: 'NobleStar Shipping Services LLC',
      description:
        'Noble Star is one of the leading shipping and logistics companies, providing integrated cargo services in the United Arab Emirates. We offer comprehensive logistics solutions by road, air, and sea freight, along with customs clearance, freight forwarding, and other handling solutions. The experience we have guarantees that the flow of logistics is seamless, effective, and transparent to the requirements of the clients.',
      highlights: [
        'International Freight Solutions',
        'Shipping Coordination',
        'Supply Chain Management',
        'Cargo Movement',
        'Logistics Planning',
        'Reliable Commercial Support',
      ],
      metrics: [
        { label: 'Based In', value: 'United Arab Emirates' },
        { label: 'Services', value: 'Road, Air & Sea Freight' },
        { label: 'Focus', value: 'Cargo & Customs Clearance' },
      ],
      logoSrc: '/NobleStar.jpg',
    },
    capabilitiesHeading: {
      eyebrow: 'Division Capabilities',
      title: 'Core logistics expertise',
    },
    capabilities: [
      { icon: Ship, title: 'International Freight', description: 'Reliable transportation solutions connecting global markets.' },
      { icon: Compass, title: 'Shipping Coordination', description: 'Managing cargo movement through efficient planning and execution.' },
      { icon: Layers, title: 'Supply Chain Management', description: 'Optimizing end-to-end logistics operations.' },
      { icon: Package, title: 'Cargo Handling', description: 'Supporting efficient movement of commercial goods.' },
      { icon: ClipboardCheck, title: 'Logistics Planning', description: 'Developing streamlined transportation strategies for businesses.' },
      { icon: Handshake, title: 'Commercial Logistics Support', description: 'Helping organizations improve operational efficiency through dependable logistics solutions.' },
    ],
    whyItMatters: {
      heading: 'Why This Division Matters',
      body: [
        "Modern businesses depend on resilient supply chains and dependable logistics partners to remain competitive in international markets. Al Quba Investment's Logistics & Supply Chain Division provides the operational expertise needed to move products efficiently while supporting long-term commercial success.",
        'Through NobleStar Shipping Services LLC, the division strengthens regional and international trade by delivering logistics solutions that enhance business connectivity and supply chain performance.',
      ],
    },
    processHeading: {
      eyebrow: 'Logistics Journey',
      title: 'From order to fulfilment',
    },
    process: [
      { title: 'Order Confirmation', description: 'Shipment requirements and delivery timelines are confirmed with the client.' },
      { title: 'Freight Planning', description: 'Routes, carriers, and transport modes are selected to match the cargo and corridor.' },
      { title: 'Cargo Coordination', description: 'Loading, documentation, and handling are coordinated across every party involved.' },
      { title: 'Transportation', description: 'Goods move by road, air, or sea under active logistics oversight.' },
      { title: 'Customs & Delivery', description: 'Customs clearance is completed and cargo is delivered to its destination.' },
      { title: 'Successful Fulfilment', description: 'Delivery is confirmed and the shipment cycle closes with the client.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'Industry Outlook',
        title: 'Where logistics is headed',
        description:
          'The logistics industry continues to evolve through digital transformation, smarter transportation networks, and increasing global trade connectivity. Businesses are prioritizing efficiency, visibility, and resilient supply chains to support long-term growth.',
      },
      items: [
        { icon: Globe2, title: 'Global Connectivity', description: 'Stronger links between regional and international markets.' },
        { icon: Zap, title: 'Operational Efficiency', description: 'Streamlined processes that keep cargo moving on schedule.' },
        { icon: ShieldCheck, title: 'Reliable Logistics', description: 'Consistent, dependable service across every shipment.' },
        { icon: Layers, title: 'Supply Chain Excellence', description: 'Coordinated operations from origin to final delivery.' },
      ],
    },
    whyChoose: {
      heading: {
        eyebrow: 'Why NobleStar',
        title: 'Why Businesses Choose NobleStar',
      },
      items: [
        { icon: Ship, title: 'Reliable Freight Coordination', description: 'Dependable coordination of cargo movement across every shipment.' },
        { icon: Layers, title: 'Integrated Logistics Solutions', description: 'End-to-end logistics support tailored to each business.' },
        { icon: Clock, title: 'Efficient Supply Chain Management', description: 'Streamlined operations that keep goods moving efficiently.' },
        { icon: Handshake, title: 'Trusted Commercial Partnerships', description: 'Long-term relationships built on consistent, reliable service.' },
      ],
    },
    companies: ['NobleStar Shipping Services LLC'],
  },
  {
    slug: 'import-export',
    name: 'Import & Export',
    icon: PackageSearch,
    heroImage: '/importexport.jpeg',
    heroSubtitle: 'Connecting Businesses Through Global Trade',
    tagline:
      "Al Quba Investment's Import & Export Division connects businesses with trusted sourcing, procurement, and distribution, combining strategic partnerships with technology-driven commerce to make cross-border trade efficient.",
    description:
      "Discover Al Quba Investment's Import & Export Division, delivering global sourcing, commercial trading, wholesale distribution, and cross-border trade solutions.",
    heroMetrics: [
      { label: 'Active Corridors', value: '9' },
      { label: 'Avg. Facility Term', value: '4 months' },
    ],
    overview: {
      heading: 'Enabling Smarter Global Commerce',
      body: [
        "International trade is built on trusted relationships, efficient supply chains, and reliable market access. Al Quba Investment's Import & Export Division brings these elements together through its portfolio companies, creating opportunities for manufacturers, suppliers, distributors, and buyers to trade confidently across borders.",
        'By combining traditional commercial trading with modern B2B digital commerce, the division supports businesses throughout the entire trade lifecycle, from sourcing products and identifying suppliers to facilitating procurement, distribution, and long-term commercial partnerships.',
      ],
    },
    // No featured-company spotlight on this division: ContainerKart and
    // Al Wahda Trading are showcased on Global Exports, and repeating
    // them here made the two divisions read as the same page. With no
    // `caseStudy`/`caseStudyHeading`, SectorCaseStudy renders nothing.
    capabilitiesHeading: {
      eyebrow: 'Division Capabilities',
      title: 'How the division creates value',
    },
    capabilities: [
      { icon: Globe2, title: 'International Procurement', description: 'Connecting businesses with reliable suppliers across global markets.' },
      { icon: Handshake, title: 'Commercial Trading', description: 'Managing import and export activities through trusted commercial partnerships.' },
      { icon: Layers, title: 'Digital B2B Commerce', description: 'Leveraging technology to simplify international sourcing and procurement.' },
      { icon: Users, title: 'Supplier Network Development', description: 'Building long-term relationships with manufacturers and distributors worldwide.' },
      { icon: Truck, title: 'Distribution Solutions', description: 'Supporting efficient product movement from suppliers to end markets.' },
      { icon: Rocket, title: 'Market Expansion', description: 'Helping businesses enter new regional and international markets.' },
    ],
    whyItMatters: {
      heading: 'Why This Division Matters',
      body: [
        "Global trade continues to evolve as businesses seek efficient, transparent, and technology-enabled supply chains. Al Quba Investment's Import & Export Division combines commercial expertise with digital innovation to help businesses navigate international markets with confidence.",
        'Through ContainerKart and Al Wahda Trading, the division provides both traditional trading capabilities and modern digital commerce solutions, creating a diversified ecosystem capable of supporting businesses of every size.',
      ],
    },
    processHeading: {
      eyebrow: 'Trade Ecosystem',
      title: 'How value moves through the division',
    },
    process: [
      { title: 'Manufacturers', description: 'Production partners and manufacturers originate the goods that enter the trade ecosystem.' },
      { title: 'Global Suppliers', description: 'Verified suppliers across international markets make products available for sourcing.' },
      { title: 'ContainerKart Platform', description: 'Our digital marketplace connects buyers and suppliers for efficient bulk container trade.' },
      { title: 'Al Wahda Trading', description: 'Commercial trading and procurement bring sourced goods into regional distribution.' },
      { title: 'Regional Distribution', description: 'Products move efficiently into wholesale and retail markets across the region.' },
      { title: 'Business Growth', description: 'Reliable trade relationships create lasting growth for every business in the chain.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'Industry Outlook',
        title: 'Where import & export is headed',
        description:
          'International trade continues to expand through digital transformation, stronger supply chain collaboration, and increasing cross-border commerce. Businesses are increasingly seeking reliable partners that combine commercial expertise with technology-driven solutions.',
      },
      items: [
        { icon: Globe2, title: 'Global Markets', description: 'Expanding reach across regional and international trade markets.' },
        { icon: Handshake, title: 'Trade Partnerships', description: 'Long-term relationships with suppliers, distributors, and buyers.' },
        { icon: Layers, title: 'Digital Commerce', description: 'Technology-enabled sourcing and procurement through ContainerKart.' },
        { icon: TrendingUp, title: 'Business Growth', description: 'Sustainable growth opportunities for businesses of every size.' },
      ],
    },
    /* Both operating companies are attributed to International Trading
       above; this page still carries them as its case-study spotlights. */
    companies: [],
  },
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    icon: Palette,
    heroImage: '/brandandstrategy.png',
    heroSubtitle: 'Building Brands That Inspire Growth',
    tagline:
      "Al Quba Investment's Brand Strategy Division empowers businesses through creative branding, digital innovation, and strategic marketing that strengthen market presence and drive sustainable growth.",
    description:
      "Discover Al Quba Investment's Brand Strategy Division and Phew Interactive, delivering branding, website development, digital marketing, creative design, UI/UX, and technology solutions.",
    heroMetrics: [
      { label: 'Active Positions', value: '1' },
      { label: 'Avg. Hold Period', value: 'Ongoing' },
    ],
    overview: {
      heading: 'Creating Stronger Brands Through Innovation',
      body: [
        "A strong brand is more than a logo. It's the foundation of business growth and long-term customer trust. Al Quba Investment's Brand Strategy Division helps organizations build compelling brand identities through creative thinking, digital experiences, and strategic communication.",
        'By integrating branding, marketing, technology, and design, the division enables businesses to increase visibility, engage customers, and strengthen their competitive advantage in an evolving digital marketplace.',
      ],
    },
    caseStudyHeading: {
      eyebrow: 'Featured Company',
      title: 'Phew Interactive',
    },
    caseStudy: {
      title: 'Phew Interactive',
      description:
        'Phew Interactive is a Kerala-based comprehensive branding and marketing company with hands-on expertise in website and app development as well. We began our journey in 2024, specializing in design, development, and marketing. Our mission is to simplify complex digital challenges and deliver impactful, stress-free solutions. The name "Phew" reflects the sense of relief and accomplishment we bring to our clients by transforming complexities into effortless experiences.',
      highlights: [
        'Brand Strategy',
        'Website Development',
        'Digital Marketing',
        'UI/UX Design',
        'Creative Design',
        'Technology Solutions',
      ],
      metrics: [
        { label: 'Founded', value: '2024' },
        { label: 'Based In', value: 'Kerala, India' },
        { label: 'Focus', value: 'Branding, Web & App Development' },
      ],
      logoSrc: '/phew-logo.png',
    },
    capabilitiesHeading: {
      eyebrow: 'Division Capabilities',
      title: 'Creative and technology expertise',
    },
    capabilities: [
      { icon: Compass, title: 'Brand Strategy', description: 'Helping businesses define their identity and long-term positioning.' },
      { icon: Layers, title: 'Website Development', description: 'Building modern, responsive digital experiences.' },
      { icon: Megaphone, title: 'Digital Marketing', description: 'Connecting brands with the right audiences through strategic campaigns.' },
      { icon: PenTool, title: 'UI/UX Design', description: 'Designing intuitive and engaging user experiences.' },
      { icon: Palette, title: 'Creative Design', description: 'Developing impactful visual communication across digital and print platforms.' },
      { icon: Zap, title: 'Technology Solutions', description: 'Supporting businesses with scalable digital solutions that drive growth.' },
    ],
    whyItMatters: {
      heading: 'Why This Division Matters',
      body: [
        "Today's businesses compete on experience as much as products and services. Strong branding, digital innovation, and strategic communication have become essential for sustainable growth.",
        'Through Phew Interactive, Al Quba Investment supports organizations by combining creative expertise with technology-driven solutions, enabling brands to adapt, grow, and build lasting relationships with their audiences.',
      ],
    },
    processHeading: {
      eyebrow: 'Brand Development Journey',
      title: 'From discovery to growth',
    },
    process: [
      { title: 'Discovery', description: 'Understanding the business, audience, and market before any creative work begins.' },
      { title: 'Strategy', description: 'Defining brand positioning, messaging, and the direction creative work will follow.' },
      { title: 'Creative Development', description: 'Designing visual identity and brand assets aligned with the strategy.' },
      { title: 'Digital Execution', description: 'Building the websites, apps, and digital experiences that bring the brand to life.' },
      { title: 'Marketing', description: 'Connecting the brand with its audience through targeted campaigns.' },
      { title: 'Business Growth', description: 'Sustained visibility and engagement translate into long-term growth.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'Industry Outlook',
        title: 'Where branding and digital growth are headed',
        description:
          'Businesses continue to invest in branding, digital transformation, and customer experience as competitive markets evolve. Organizations increasingly require integrated creative and technology solutions that strengthen market presence while improving customer engagement.',
      },
      items: [
        { icon: TrendingUp, title: 'Brand Growth', description: 'Stronger market presence built through consistent brand identity.' },
        { icon: Zap, title: 'Digital Innovation', description: 'Modern digital experiences that keep businesses competitive.' },
        { icon: Palette, title: 'Creative Excellence', description: 'Design and creative work that stands out in crowded markets.' },
        { icon: Users, title: 'Customer Engagement', description: 'Deeper audience connection through strategic communication.' },
      ],
    },
    whyChoose: {
      heading: {
        eyebrow: 'Why Phew Interactive',
        title: 'Why Businesses Choose Phew Interactive',
      },
      items: [
        { icon: Compass, title: 'Strategic Brand Development', description: 'Brand positioning built around long-term business goals.' },
        { icon: Palette, title: 'Creative Excellence', description: "Design work that reflects each brand's unique identity." },
        { icon: Zap, title: 'Technology-Driven Solutions', description: 'Modern web and digital solutions built to scale.' },
        { icon: TrendingUp, title: 'Long-Term Digital Growth', description: 'Ongoing support that grows alongside the business.' },
      ],
    },
    companies: ['Phew Interactive'],
  },
  {
    slug: 'tourism',
    name: 'Tourism',
    icon: Plane,
    heroImage: '/toursim.jpg',
    heroSubtitle: 'Investing in the Global Appetite for Travel',
    tagline:
      "Al Quba Investment's Tourism Division captures global travel demand through hospitality partnerships, tour operations, and destination experiences, working alongside established operators rather than owning heavy infrastructure.",
    description:
      "Explore Al Quba Investment's Tourism Division featuring Mapshore, delivering travel management, hospitality partnerships, and destination experiences across global markets.",
    heroMetrics: [
      { label: 'Active Positions', value: '1' },
      { label: 'Model', value: 'Asset-light' },
    ],
    overview: {
      heading: 'Capturing Travel Growth Without Owning the Concrete',
      body: [
        "Travel and tourism is one of the most durable consumer categories in the world, and the Gulf sits at the centre of it. Al Quba Investment's Tourism Division invests into that demand through hospitality operators, travel service providers, and destination experiences rather than by acquiring hotels and resorts outright.",
        'That asset-light posture keeps capital flexible: exposure spreads across accommodation, tour operations, and travel services, and positions can be adjusted as seasonality and destination demand shift.',
      ],
    },
    caseStudyHeading: {
      eyebrow: 'Our Operating Companies',
      title: 'Featured Companies',
    },
    caseStudy: [
      {
        title: 'Mapshore',
        description:
          'Mapshore is a premier UAE-based travel and tourism management company crafting seamless, personalised travel experiences across the globe. Serving corporate clients, leisure travellers, families, and solo adventurers, it connects people to world-class destinations through a comprehensive, end-to-end travel service network, combining deep industry expertise with strong global partnerships.',
        highlights: [
          'Worldwide flight ticketing',
          'Hotel and luxury stay bookings',
          'Custom-curated tour packages',
          'Travel insurance solutions',
          'UAE tourist visas and global visa assistance',
          'Corporate, leisure, family, and solo travel',
        ],
        metrics: [
          { label: 'Based In', value: 'United Arab Emirates' },
          { label: 'Role', value: 'Travel & Tourism Management' },
          { label: 'Focus', value: 'End-to-End Travel Services' },
        ],
        logoSrc: '/mapshore.png',
      },
    ],
    capabilitiesHeading: {
      eyebrow: 'Division Capabilities',
      title: 'Six areas of travel and hospitality expertise',
    },
    capabilities: [
      { icon: Hotel, title: 'Hospitality Partnerships', description: 'Working with established accommodation operators rather than building and running properties ourselves.' },
      { icon: Luggage, title: 'Tour & Travel Operations', description: 'Supporting operators who package, sell, and deliver travel itineraries at scale.' },
      { icon: MapPin, title: 'Destination Experiences', description: 'Backing the excursions, attractions, and local experiences travellers actually book on arrival.' },
      { icon: Ticket, title: 'Travel Services', description: 'Exposure to booking, ticketing, and ancillary services across the traveller journey.' },
      { icon: Users, title: 'Inbound & Outbound Flows', description: 'Positioned across both visitors arriving into the Gulf and Gulf residents travelling abroad.' },
      { icon: ShieldCheck, title: 'Operator Due Diligence', description: 'Every partner is reviewed on licensing, track record, and operational capacity before capital moves.' },
    ],
    whyItMatters: {
      heading: 'Why Al Quba Invests in Tourism',
      body: [
        'Tourism is where consumer spending, infrastructure investment, and national strategy converge. The UAE and the wider GCC have made visitor economies a policy priority, and the resulting expansion in aviation capacity, events, and destination development continues to pull demand into the region.',
        'For investors, the division offers exposure to that growth with a shorter cycle and lighter balance sheet than property ownership, and revenue that tracks real occupancy and booking activity rather than asset appreciation alone.',
      ],
    },
    processHeading: {
      eyebrow: 'Investment Journey',
      title: 'From destination research to distribution',
    },
    process: [
      { title: 'Destination Research', description: 'Assessing visitor volumes, seasonality, and demand drivers before any market is entered.' },
      { title: 'Operator Selection', description: 'Identifying licensed hospitality and travel operators with a verifiable delivery record.' },
      { title: 'Partnership Structuring', description: 'Agreeing commercial terms, revenue share, and reporting obligations up front.' },
      { title: 'Capital Deployment', description: 'Allocating into approved hospitality and tourism opportunities.' },
      { title: 'Performance Monitoring', description: 'Tracking occupancy, bookings, and operator performance through the season.' },
      { title: 'Revenue Distribution', description: 'Profits are distributed according to the investment cycle and fund terms.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'Industry Outlook',
        title: 'Where travel demand is headed',
        description:
          'Global travel continues to expand through rising middle-class mobility, expanded aviation capacity, and sustained national investment in visitor economies, creating long-term opportunities for investors positioned alongside established operators.',
      },
      items: [
        { icon: TrendingUp, title: 'Rising Travel Demand', description: 'Sustained growth in leisure and business travel across regional and international markets.' },
        { icon: Hotel, title: 'Hospitality Expansion', description: 'Continued development of accommodation capacity across Gulf destinations.' },
        { icon: CalendarCheck, title: 'Events & Seasonality', description: 'Major events and calendar peaks creating repeatable demand windows.' },
        { icon: Globe2, title: 'Destination Diversification', description: 'Exposure spread across multiple destinations rather than a single market.' },
      ],
    },
    companies: ['Mapshore'],
  },
]

/**
 * Arabic content, kept as a separate slug-keyed overlay rather than fully
 * duplicating each Sector object — icons, slugs, images, logos, and CTA
 * hrefs are locale-independent, so only text fields need a translation.
 * `capabilities`/`process`/`industryOutlook.items`/`whyChoose.items` are
 * translated as parallel title/description arrays, same length and order
 * as the English source, merged back onto the original items (which
 * still carry their `icon`) by index.
 */
interface SectorCaseStudyTranslation {
  title: string
  description: string
  highlights?: string[]
  metrics: { label: string; value: string }[]
}

interface SectorTranslation {
  name: string
  heroSubtitle?: string
  tagline: string
  description: string
  heroMetrics?: { label: string; value: string }[]
  overview?: { heading: string; body: string | string[] }
  whyItMatters?: { heading: string; body: string | string[] }
  capabilitiesHeading?: SectionHeadingOverride
  capabilities: { title: string; description: string }[]
  processHeading?: SectionHeadingOverride
  process?: { title: string; description: string }[]
  caseStudyHeading?: SectionHeadingOverride
  caseStudy?: SectorCaseStudyTranslation | SectorCaseStudyTranslation[]
  industryOutlook?: { heading?: SectionHeadingOverride; items: { title: string; description: string }[] }
  whyChoose?: { heading?: SectionHeadingOverride; items: { title: string; description: string }[] }
}

const sectorTranslations: Record<string, SectorTranslation> = {
  'global-exports': {
    name: 'التجارة الدولية',
    heroSubtitle: 'توسيع التجارة الدولية من خلال شراكات موثوقة',
    tagline:
      'ينقل قطاع التصدير العالمي التابع لشركة القبا للاستثمار المنتجات عالية الجودة عبر الأسواق الدولية من خلال التوريد الاستراتيجي، وعمليات تصدير موثوقة، وشراكات تجارية طويلة الأمد تدفع تجارة مستدامة.',
    description:
      'اكتشف قطاع التصدير العالمي التابع لشركة القبا للاستثمار، وتعرّف على كيفية تقديم شركة حبرون للتجارة العامة ذ.م.م وكونتينر كارت والوحدة للتجارة لحلول تجارة دولية موثوقة، وتوريد استراتيجي، وحلول تصدير عبر الأسواق العالمية.',
    heroMetrics: [
      { label: 'خطوط تجارية نشطة', value: '18' },
      { label: 'متوسط مدة الدورة', value: '5 أشهر' },
    ],
    overview: {
      heading: 'قيادة التجارة العالمية بثقة',
      body: [
        'يجمع قطاع التصدير العالمي التابع لشركة القبا للاستثمار بين خبرة التجارة الدولية، والقدرة على التجارة العابرة للحدود، والعلاقات الراسخة بين المشترين والموردين لمساعدة الشركات على نقل منتجاتها بثقة عبر الأسواق العالمية.',
        'من خلال عمليات تصدير موثوقة وكفاءة منضبطة في سلسلة الإمداد، يدعم القطاع توسع الأسواق للمصنّعين والموردين والموزعين، ما يخلق ممرات تجارية موثوقة بدلًا من صفقات لمرة واحدة.',
      ],
    },
    caseStudyHeading: { eyebrow: 'شركاتنا التشغيلية', title: 'الشركات المميزة' },
    caseStudy: [
      {
        title: 'شركة حبرون للتجارة العامة ذ.م.م',
        description:
          'حبرون شركة سريعة النمو بنت سمعة قوية كموزع بالجملة للأغذية ومنتجات أخرى. نعمل بشكل رئيسي في توزيع كميات كبيرة من المنتجات الغذائية، بما في ذلك الحبوب والبقوليات واللحوم والدواجن والمأكولات البحرية والتمور والمكسرات والتوابل والأرز ومنتجات الاستهلاك السريع، ولدينا مكانة قوية في جميع أنحاء الشرق الأوسط.',
        highlights: [
          'توريد عالمي للمنتجات عبر شبكات موردين موثوقة',
          'عمليات تصدير دولية عبر أسواق الشرق الأوسط',
          'تجارة الجملة في فئات البقالة ومنتجات الاستهلاك السريع والأغذية المجمدة',
          'ضمان الجودة في كل مرحلة من مراحل سلسلة الإمداد',
          'شراكات توزيع موثوقة وطويلة الأمد',
        ],
        metrics: [
          { label: 'الدور', value: 'موزع بالجملة' },
          { label: 'المنطقة', value: 'الشرق الأوسط' },
          { label: 'التركيز', value: 'منتجات البقالة والاستهلاك السريع' },
        ],
      },
      {
        title: 'ContainerKart',
        description:
          'كونتينر كارت شركة ناشئة مبتكرة متخصصة في تجارة الحاويات الكاملة، مملوكة بالكامل لشركة القبا، وتتخصص في الشراء والتجارة بالجملة لمنتجات عالية الطلب، تشمل المنتجات الغذائية (الاستهلاك السريع) وغير الغذائية. نقوم بتوريد حاويات كاملة مباشرة من المزارعين ووحدات الإنتاج بعد ضمان الجودة والكفاءة في سلسلة الإمداد لدينا.',
        highlights: ['سوق رقمي بين الشركات', 'موردون عالميون معتمدون', 'تجارة الحاويات بالجملة', 'الشراء الدولي', 'التجارة العابرة للحدود', 'تسهيل التجارة'],
        metrics: [
          { label: 'الملكية', value: 'مملوكة بالكامل لشركة القبا' },
          { label: 'النموذج', value: 'حاوية كاملة الحمولة' },
          { label: 'التركيز', value: 'تجارة الاستهلاك السريع والمنتجات غير الغذائية بالجملة' },
        ],
      },
      {
        title: 'Al Wahda Trading',
        description:
          'تعمل الوحدة للتجارة كذراع التجارة التجارية للقطاع، وتتخصص في توريد واستيراد وتوزيع المنتجات عبر الأسواق الإقليمية. من خلال الحفاظ على علاقات قوية مع الموردين وشبكة شراء واسعة، تقدّم الشركة حلول تجارة موثوقة تتكيف مع متطلبات السوق المتغيرة.',
        highlights: ['تجارة الجملة', 'شراء المنتجات', 'عمليات الاستيراد', 'شبكة التوزيع', 'شراكات تجارية', 'خبرة في السوق الإقليمي'],
        metrics: [
          { label: 'المقر', value: 'قطر' },
          { label: 'الدور', value: 'تجارة تجارية' },
          { label: 'التركيز', value: 'الاستيراد والتوزيع' },
        ],
      },
    ],
    capabilitiesHeading: { eyebrow: 'القدرات الأساسية', title: 'ستة مجالات من الخبرة المتخصصة' },
    capabilities: [
      { title: 'التوريد العالمي للمنتجات', description: 'تحديد وتأمين منتجات عالية الجودة من موردين موثوقين عبر الأسواق الدولية.' },
      { title: 'إدارة التصدير الدولي', description: 'إدارة دورة التصدير الكاملة، من التوثيق إلى التسليم، عبر ممرات تجارية راسخة.' },
      { title: 'توزيع بالجملة', description: 'نقل كميات كبيرة من البضائع بكفاءة إلى أسواق الجملة والتجزئة.' },
      { title: 'تنسيق سلسلة الإمداد', description: 'تنسيق التوريد والخدمات اللوجستية والتسليم بحيث تسير كل دورة تجارية بسلاسة.' },
      { title: 'الامتثال التجاري', description: 'ضمان استيفاء كل شحنة لمتطلبات الجمارك والجودة والتنظيم.' },
      { title: 'شراكات تجارية استراتيجية', description: 'بناء علاقات طويلة الأمد مع الموردين والمشترين بدلًا من صفقات لمرة واحدة.' },
    ],
    whyItMatters: {
      heading: 'لماذا تستثمر القبا في التصدير العالمي',
      body: [
        'تستمر التجارة العالمية في النمو مع سعي الشركات لشركاء موثوقين قادرين على ربط العرض بالطلب عبر الحدود. تستثمر القبا للاستثمار في هذا القطاع لأنه يجمع بين طلب دولي متنامٍ وتنوع حقيقي عبر الأسواق العالمية، وليس ممرًا أو فئة واحدة.',
        'العلاقات التجارية طويلة الأمد، المبنية على مدى سنوات وليس على صفقة واحدة، تمنح القطاع المرونة التشغيلية اللازمة لاستدامة نمو التجارة عبر تغيّر ظروف السوق، بينما يستمر التوسع الدولي في فتح فرص جديدة لمستثمرينا وشركائنا التجاريين على حد سواء.',
      ],
    },
    processHeading: { eyebrow: 'عملية التصدير', title: 'من التوريد إلى التسليم الناجح' },
    process: [
      { title: 'أبحاث السوق', description: 'تحديد الطلب واتجاهات التسعير والممرات التجارية القابلة للتطبيق قبل أي التزام.' },
      { title: 'التوريد الاستراتيجي', description: 'تأمين منتجات عالية الجودة من موردين وشركاء إنتاج معتمدين.' },
      { title: 'ضمان الجودة', description: 'التحقق من جودة المنتج ومطابقته للمواصفات قبل الإفراج عنه للتصدير.' },
      { title: 'وثائق التصدير', description: 'إعداد ومعالجة وثائق الجمارك والامتثال والشحن التي يتطلبها كل ممر.' },
      { title: 'الشحن الدولي', description: 'تنسيق شركاء الشحن والخدمات اللوجستية لنقل البضائع بكفاءة إلى سوق الوجهة.' },
      { title: 'التسليم الناجح', description: 'تأكيد التسليم والتسوية، وإغلاق الدورة وتعزيز العلاقة مع المشتري.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'نظرة على القطاع',
        title: 'إلى أين تتجه التجارة العالمية',
        description: 'تستمر التجارة الدولية في التوسع عبر الأسواق الناشئة، وتمكين التجارة الرقمية، وزيادة تنويع سلسلة الإمداد، ما يخلق فرصًا طويلة الأمد للمستثمرين المتمركزين في شبكات تجارة عالمية حقيقية.',
      },
      items: [
        { title: 'أسواق متنامية', description: 'طلب متوسع عبر الأسواق الدولية الراسخة والناشئة.' },
        { title: 'شراكات تصدير', description: 'شبكة متنامية من علاقات الموردين والمشترين طويلة الأمد.' },
        { title: 'انتشار دولي', description: 'ممرات تجارية تمتد عبر مناطق وفئات منتجات متعددة.' },
        { title: 'فرص تجارية', description: 'آفاق جديدة للنمو المستدام مع تطور التجارة العالمية.' },
      ],
    },
  },
  'infrastructure-contracting': {
    name: 'العقارات',
    heroSubtitle: 'بناء أسس متينة لنمو مستدام',
    tagline:
      'يقدّم قطاع البنية التحتية والمقاولات والبيئة العمرانية التابع لشركة القبا للاستثمار حلول بناء موثوقة للتطوير التجاري والصناعي والبنية التحتية، قائمة على جودة التنفيذ والخبرة الهندسية.',
    description:
      'اكتشف قطاع البنية التحتية والمقاولات والبيئة العمرانية التابع لشركة القبا للاستثمار وشركة برايت هيرست للمقاولات، المتخصصة في البناء التجاري والمقاولات والدعم الهندسي وحلول تطوير البنية التحتية.',
    heroMetrics: [],
    overview: {
      heading: 'بناء المستقبل بثقة',
      body: [
        'تلعب البنية التحتية دورًا حيويًا في التنمية الاقتصادية والتوسع التجاري. يدعم قطاع البنية التحتية والمقاولات والبيئة العمرانية التابع لشركة القبا للاستثمار هذا النمو من خلال تقديم حلول مقاولات موثوقة تركّز على الجودة والسلامة والتميز التشغيلي.',
        'من خلال التخطيط الفعّال، والتنفيذ الماهر للمشاريع، والالتزام بخلق قيمة طويلة الأمد، يساعد القطاع في تسليم مشاريع تعزز المجتمعات وتدعم التنمية المستدامة.',
      ],
    },
    caseStudyHeading: { eyebrow: 'الشركة المميزة', title: 'برايت هيرست للمقاولات' },
    caseStudy: {
      title: 'برايت هيرست للمقاولات',
      description:
        'برايت هيرست للمقاولات هي شركة البناء والمقاولات ضمن قطاع البنية التحتية التابع لشركة القبا للاستثمار. تقدّم الشركة حلول مقاولات موثوقة عبر المشاريع التجارية ومشاريع البنية التحتية، مع تركيز قوي على الجودة والكفاءة التشغيلية ورضا العملاء.',
      highlights: ['البناء التجاري', 'تطوير البنية التحتية', 'حلول المقاولات', 'إدارة المشاريع', 'الدعم الهندسي', 'تنفيذ عالي الجودة'],
      metrics: [],
    },
    capabilitiesHeading: { eyebrow: 'قدرات القطاع', title: 'خبرة في المقاولات والهندسة' },
    capabilities: [
      { title: 'البناء التجاري', description: 'تقديم حلول بناء موثوقة للبيئات التجارية.' },
      { title: 'تطوير البنية التحتية', description: 'دعم المشاريع التي تعزز المجتمعات والنمو التجاري.' },
      { title: 'إدارة المشاريع', description: 'تنسيق المشاريع من التخطيط وحتى الإنجاز الناجح.' },
      { title: 'الدعم الهندسي', description: 'تقديم الخبرة التقنية لضمان جودة تسليم المشاريع.' },
      { title: 'حلول المقاولات', description: 'إدارة أنشطة البناء بكفاءة واحترافية.' },
      { title: 'تنفيذ مسؤول للمشاريع', description: 'تسليم كل مشروع بتركيز ثابت على السلامة والامتثال والأثر المجتمعي.' },
    ],
    whyItMatters: {
      heading: 'لماذا يهم هذا القطاع',
      body: [
        'تعتمد الاقتصادات الحديثة على بنية تحتية موثوقة وبناء عالي الجودة لدعم النمو التجاري وتنمية المجتمعات. يساهم قطاع البنية التحتية والمقاولات والبيئة العمرانية التابع لشركة القبا للاستثمار في هذا التقدم من خلال الاستثمار في شركات تقدم خبرة إنشائية موثوقة وانضباطًا ثابتًا في المشاريع.',
        'من خلال برايت هيرست للمقاولات، يدعم القطاع مشاريع تجارية ومشاريع بنية تحتية تخلق قيمة دائمة مع الحفاظ على الالتزام بالجودة والسلامة والتنمية المستدامة.',
      ],
    },
    processHeading: { eyebrow: 'رحلة تسليم المشروع', title: 'من التخطيط إلى القيمة طويلة الأمد' },
    process: [
      { title: 'التخطيط', description: 'يتم تحديد نطاق المشروع ومتطلباته وجدوله الزمني قبل بدء العمل.' },
      { title: 'الهندسة', description: 'يضمن التصميم التقني والعمل الهندسي بناء المشروع وفق المواصفات.' },
      { title: 'تنفيذ المشروع', description: 'يمضي عمل البناء والمقاولات تحت إدارة مشروع نشطة.' },
      { title: 'ضمان الجودة', description: 'تتم مراجعة كل مرحلة وفق معايير الجودة والسلامة.' },
      { title: 'إنجاز المشروع', description: 'يتم تسليم المشروع وتسليمه إلى العميل.' },
      { title: 'القيمة طويلة الأمد', description: 'تستمر المشاريع المكتملة في دعم نمو الأعمال والمجتمع.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'نظرة على القطاع',
        title: 'إلى أين يتجه الاستثمار في البنية التحتية',
        description: 'يستمر الاستثمار في البنية التحتية في لعب دور حاسم في التنمية الاقتصادية والتوسع الحضري والنمو الصناعي. تحتاج الشركات بشكل متزايد إلى شركاء مقاولات ذوي خبرة قادرين على تسليم المشاريع بكفاءة مع الحفاظ على الجودة والتميز التشغيلي.',
      },
      items: [
        { title: 'نمو البنية التحتية', description: 'طلب متوسع على التطوير التجاري وتطوير البنية التحتية.' },
        { title: 'التميز في تنفيذ المشاريع', description: 'تسليم ثابت للمشاريع وفق المواصفات والجدول الزمني.' },
        { title: 'بناء عالي الجودة', description: 'تنفيذ مبني على السلامة والجودة الدائمة.' },
        { title: 'تنمية مستدامة', description: 'مشاريع مصممة لدعم نمو المجتمع على المدى الطويل.' },
      ],
    },
    whyChoose: {
      heading: { eyebrow: 'لماذا برايت هيرست', title: 'لماذا تختار الشركات برايت هيرست' },
      items: [
        { title: 'تسليم موثوق للمشاريع', description: 'مشاريع تُسلَّم في الموعد المحدد ووفق المواصفات.' },
        { title: 'خبرة هندسية', description: 'خبرة تقنية تُطبَّق في كل مرحلة من مراحل المشروع.' },
        { title: 'جودة تنفيذ عالية', description: 'تركيز ثابت على السلامة وجودة البناء.' },
        { title: 'شراكات طويلة الأمد', description: 'علاقات مبنية لدعم احتياجات المشاريع المستمرة.' },
      ],
    },
  },
  'logistics-supply-chain': {
    name: 'الشحن والخدمات اللوجستية',
    heroSubtitle: 'تحقيق التواصل العالمي من خلال خدمات لوجستية متكاملة',
    tagline:
      'ينقل قطاع الخدمات اللوجستية وسلاسل الإمداد التابع لشركة القبا للاستثمار البضائع بكفاءة عبر الأسواق المحلية والدولية من خلال الشحن المتكامل، وتنسيق الشحنات، وخبرة عميقة في سلاسل الإمداد.',
    description:
      'اكتشف قطاع الخدمات اللوجستية وسلاسل الإمداد التابع لشركة القبا للاستثمار وشركة نوبل ستار لخدمات الشحن ذ.م.م، المتخصصة في الشحن المتكامل وتنسيق الشحنات وإدارة البضائع وحلول سلسلة الإمداد.',
    heroMetrics: [
      { label: 'سفن ممولة', value: '7' },
      { label: 'متوسط مدة التأجير', value: '11 شهرًا' },
    ],
    overview: {
      heading: 'ربط سلاسل الإمداد العالمية',
      body: [
        'الخدمات اللوجستية الفعّالة هي أساس التجارة العالمية. يدعم قطاع الخدمات اللوجستية وسلاسل الإمداد التابع لشركة القبا للاستثمار الشركات من خلال تقديم حلول شحن موثوقة، ونقل مبسّط، وعمليات سلسلة إمداد منسقة.',
        'من خلال التخطيط الاستراتيجي، والخبرة التشغيلية، والشراكات اللوجستية الموثوقة، يساعد القطاع الشركات على تحسين حركة البضائع مع تعزيز الكفاءة والموثوقية ورضا العملاء عبر الأسواق الدولية.',
      ],
    },
    caseStudyHeading: { eyebrow: 'الشركة المميزة', title: 'نوبل ستار لخدمات الشحن ذ.م.م' },
    caseStudy: {
      title: 'نوبل ستار لخدمات الشحن ذ.م.م',
      description:
        'نوبل ستار واحدة من الشركات الرائدة في الشحن والخدمات اللوجستية، وتقدّم خدمات شحن متكاملة في دولة الإمارات العربية المتحدة. نقدّم حلولًا لوجستية شاملة عبر النقل البري والجوي والبحري، إلى جانب التخليص الجمركي، والشحن، وحلول مناولة أخرى. تضمن خبرتنا أن تكون حركة الخدمات اللوجستية سلسة وفعّالة وشفافة تجاه متطلبات العملاء.',
      highlights: ['حلول شحن دولية', 'تنسيق الشحن', 'إدارة سلسلة الإمداد', 'حركة البضائع', 'التخطيط اللوجستي', 'دعم تجاري موثوق'],
      metrics: [
        { label: 'المقر', value: 'الإمارات العربية المتحدة' },
        { label: 'الخدمات', value: 'الشحن البري والجوي والبحري' },
        { label: 'التركيز', value: 'الشحن والتخليص الجمركي' },
      ],
    },
    capabilitiesHeading: { eyebrow: 'قدرات القطاع', title: 'خبرة أساسية في الخدمات اللوجستية' },
    capabilities: [
      { title: 'الشحن الدولي', description: 'حلول نقل موثوقة تربط الأسواق العالمية.' },
      { title: 'تنسيق الشحن', description: 'إدارة حركة البضائع من خلال تخطيط وتنفيذ فعّالين.' },
      { title: 'إدارة سلسلة الإمداد', description: 'تحسين العمليات اللوجستية من البداية إلى النهاية.' },
      { title: 'مناولة البضائع', description: 'دعم الحركة الفعّالة للبضائع التجارية.' },
      { title: 'التخطيط اللوجستي', description: 'تطوير استراتيجيات نقل مبسّطة للشركات.' },
      { title: 'الدعم اللوجستي التجاري', description: 'مساعدة المؤسسات على تحسين الكفاءة التشغيلية من خلال حلول لوجستية موثوقة.' },
    ],
    whyItMatters: {
      heading: 'لماذا يهم هذا القطاع',
      body: [
        'تعتمد الشركات الحديثة على سلاسل إمداد مرنة وشركاء لوجستيين موثوقين للبقاء تنافسية في الأسواق الدولية. يوفر قطاع الخدمات اللوجستية وسلاسل الإمداد التابع لشركة القبا للاستثمار الخبرة التشغيلية اللازمة لنقل المنتجات بكفاءة مع دعم النجاح التجاري طويل الأمد.',
        'من خلال نوبل ستار لخدمات الشحن ذ.م.م، يعزز القطاع التجارة الإقليمية والدولية من خلال تقديم حلول لوجستية تحسّن التواصل التجاري وأداء سلسلة الإمداد.',
      ],
    },
    processHeading: { eyebrow: 'رحلة الخدمات اللوجستية', title: 'من الطلب إلى التنفيذ' },
    process: [
      { title: 'تأكيد الطلب', description: 'يتم تأكيد متطلبات الشحنة والجدول الزمني للتسليم مع العميل.' },
      { title: 'تخطيط الشحن', description: 'يتم اختيار المسارات وشركات النقل ووسائط النقل بما يتناسب مع البضائع والممر.' },
      { title: 'تنسيق البضائع', description: 'يتم تنسيق التحميل والتوثيق والمناولة بين جميع الأطراف المعنية.' },
      { title: 'النقل', description: 'تتحرك البضائع برًا أو جوًا أو بحرًا تحت إشراف لوجستي نشط.' },
      { title: 'الجمارك والتسليم', description: 'يتم إنجاز التخليص الجمركي وتسليم البضائع إلى وجهتها.' },
      { title: 'التنفيذ الناجح', description: 'يتم تأكيد التسليم وإغلاق دورة الشحنة مع العميل.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'نظرة على القطاع',
        title: 'إلى أين تتجه الخدمات اللوجستية',
        description: 'تستمر صناعة الخدمات اللوجستية في التطور من خلال التحول الرقمي، وشبكات نقل أذكى، وزيادة التواصل التجاري العالمي. تُعطي الشركات الأولوية للكفاءة والوضوح وسلاسل الإمداد المرنة لدعم النمو طويل الأمد.',
      },
      items: [
        { title: 'تواصل عالمي', description: 'روابط أقوى بين الأسواق الإقليمية والدولية.' },
        { title: 'كفاءة تشغيلية', description: 'عمليات مبسّطة تُبقي البضائع متحركة وفق الجدول الزمني.' },
        { title: 'خدمات لوجستية موثوقة', description: 'خدمة ثابتة وموثوقة في كل شحنة.' },
        { title: 'تميز في سلسلة الإمداد', description: 'عمليات منسقة من المصدر إلى التسليم النهائي.' },
      ],
    },
    whyChoose: {
      heading: { eyebrow: 'لماذا نوبل ستار', title: 'لماذا تختار الشركات نوبل ستار' },
      items: [
        { title: 'تنسيق شحن موثوق', description: 'تنسيق موثوق لحركة البضائع في كل شحنة.' },
        { title: 'حلول لوجستية متكاملة', description: 'دعم لوجستي شامل مصمم خصيصًا لكل شركة.' },
        { title: 'إدارة فعّالة لسلسلة الإمداد', description: 'عمليات مبسّطة تُبقي البضائع متحركة بكفاءة.' },
        { title: 'شراكات تجارية موثوقة', description: 'علاقات طويلة الأمد مبنية على خدمة ثابتة وموثوقة.' },
      ],
    },
  },
  'import-export': {
    name: 'الاستيراد والتصدير',
    heroSubtitle: 'ربط الشركات من خلال التجارة العالمية',
    tagline:
      'يربط قطاع الاستيراد والتصدير التابع لشركة القبا للاستثمار الشركات بحلول توريد وشراء وتوزيع موثوقة، جامعًا بين الشراكات الاستراتيجية والتجارة القائمة على التقنية لتجارة عابرة للحدود بكفاءة.',
    description:
      'اكتشف قطاع الاستيراد والتصدير التابع لشركة القبا للاستثمار، لتقديم توريد عالمي، وتجارة تجارية، وتوزيع بالجملة، وحلول تجارة عابرة للحدود.',
    heroMetrics: [
      { label: 'ممرات نشطة', value: '9' },
      { label: 'متوسط مدة التسهيلات', value: '4 أشهر' },
    ],
    overview: {
      heading: 'تمكين تجارة عالمية أذكى',
      body: [
        'تُبنى التجارة الدولية على علاقات موثوقة، وسلاسل إمداد فعّالة، ووصول موثوق للأسواق. يجمع قطاع الاستيراد والتصدير التابع لشركة القبا للاستثمار هذه العناصر من خلال شركاته التشغيلية، ما يخلق فرصًا للمصنّعين والموردين والموزعين والمشترين للتجارة بثقة عبر الحدود.',
        'من خلال الجمع بين التجارة التجارية التقليدية والتجارة الرقمية الحديثة بين الشركات، يدعم القطاع الشركات طوال دورة التجارة الكاملة، من توريد المنتجات وتحديد الموردين إلى تسهيل الشراء والتوزيع والشراكات التجارية طويلة الأمد.',
      ],
    },
    capabilitiesHeading: { eyebrow: 'قدرات القطاع', title: 'كيف يخلق القطاع القيمة' },
    capabilities: [
      { title: 'الشراء الدولي', description: 'ربط الشركات بموردين موثوقين عبر الأسواق العالمية.' },
      { title: 'التجارة التجارية', description: 'إدارة أنشطة الاستيراد والتصدير من خلال شراكات تجارية موثوقة.' },
      { title: 'التجارة الرقمية بين الشركات', description: 'الاستفادة من التقنية لتبسيط التوريد والشراء الدوليين.' },
      { title: 'تطوير شبكة الموردين', description: 'بناء علاقات طويلة الأمد مع المصنّعين والموزعين حول العالم.' },
      { title: 'حلول التوزيع', description: 'دعم الحركة الفعّالة للمنتجات من الموردين إلى الأسواق النهائية.' },
      { title: 'توسع الأسواق', description: 'مساعدة الشركات على دخول أسواق إقليمية ودولية جديدة.' },
    ],
    whyItMatters: {
      heading: 'لماذا يهم هذا القطاع',
      body: [
        'تستمر التجارة العالمية في التطور مع سعي الشركات لسلاسل إمداد فعّالة وشفافة ومدعومة بالتقنية. يجمع قطاع الاستيراد والتصدير التابع لشركة القبا للاستثمار بين الخبرة التجارية والابتكار الرقمي لمساعدة الشركات على التعامل مع الأسواق الدولية بثقة.',
        'من خلال كونتينر كارت والوحدة للتجارة، يوفر القطاع قدرات تجارة تقليدية وحلول تجارة رقمية حديثة، ما يخلق منظومة متنوعة قادرة على دعم شركات من كل الأحجام.',
      ],
    },
    processHeading: { eyebrow: 'منظومة التجارة', title: 'كيف تتحرك القيمة عبر القطاع' },
    process: [
      { title: 'المصنّعون', description: 'يُنشئ شركاء الإنتاج والمصنّعون البضائع التي تدخل منظومة التجارة.' },
      { title: 'الموردون العالميون', description: 'يتيح الموردون المعتمدون عبر الأسواق الدولية المنتجات للتوريد.' },
      { title: 'منصة كونتينر كارت', description: 'يربط سوقنا الرقمي المشترين والموردين لتجارة حاويات بالجملة فعّالة.' },
      { title: 'الوحدة للتجارة', description: 'تُدخل التجارة التجارية والشراء البضائع الموردة إلى التوزيع الإقليمي.' },
      { title: 'التوزيع الإقليمي', description: 'تتحرك المنتجات بكفاءة إلى أسواق الجملة والتجزئة عبر المنطقة.' },
      { title: 'نمو الأعمال', description: 'تخلق العلاقات التجارية الموثوقة نموًا دائمًا لكل شركة في السلسلة.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'نظرة على القطاع',
        title: 'إلى أين يتجه الاستيراد والتصدير',
        description: 'تستمر التجارة الدولية في التوسع من خلال التحول الرقمي، وتعاون أقوى في سلسلة الإمداد، وزيادة التجارة العابرة للحدود. تسعى الشركات بشكل متزايد لشركاء موثوقين يجمعون بين الخبرة التجارية والحلول القائمة على التقنية.',
      },
      items: [
        { title: 'أسواق عالمية', description: 'انتشار متوسع عبر أسواق التجارة الإقليمية والدولية.' },
        { title: 'شراكات تجارية', description: 'علاقات طويلة الأمد مع الموردين والموزعين والمشترين.' },
        { title: 'تجارة رقمية', description: 'توريد وشراء مدعومان بالتقنية من خلال كونتينر كارت.' },
        { title: 'نمو الأعمال', description: 'فرص نمو مستدامة للشركات من كل الأحجام.' },
      ],
    },
  },
  'brand-strategy': {
    name: 'استراتيجية العلامة التجارية',
    heroSubtitle: 'بناء علامات تجارية تلهم النمو',
    tagline:
      'يمكّن قطاع استراتيجية العلامة التجارية التابع لشركة القبا للاستثمار الشركات من خلال العلامات التجارية الإبداعية، والابتكار الرقمي، والتسويق الاستراتيجي الذي يعزز الحضور في السوق ويحقق نموًا مستدامًا.',
    description:
      'اكتشف قطاع استراتيجية العلامة التجارية التابع لشركة القبا للاستثمار وشركة فيو إنتراكتيف، المتخصصة في العلامات التجارية، وتطوير المواقع الإلكترونية، والتسويق الرقمي، والتصميم الإبداعي، وتجربة المستخدم، والحلول التقنية.',
    heroMetrics: [
      { label: 'مراكز نشطة', value: '1' },
      { label: 'متوسط مدة الاحتفاظ', value: 'مستمرة' },
    ],
    overview: {
      heading: 'خلق علامات تجارية أقوى من خلال الابتكار',
      body: [
        'العلامة التجارية القوية أكثر من مجرد شعار. إنها أساس نمو الأعمال وثقة العملاء طويلة الأمد. يساعد قطاع استراتيجية العلامة التجارية التابع لشركة القبا للاستثمار المؤسسات على بناء هويات علامة تجارية مقنعة من خلال التفكير الإبداعي، والتجارب الرقمية، والتواصل الاستراتيجي.',
        'من خلال دمج العلامة التجارية والتسويق والتقنية والتصميم، يمكّن القطاع الشركات من زيادة الظهور، وإشراك العملاء، وتعزيز ميزتها التنافسية في سوق رقمي متطور.',
      ],
    },
    caseStudyHeading: { eyebrow: 'الشركة المميزة', title: 'فيو إنتراكتيف' },
    caseStudy: {
      title: 'فيو إنتراكتيف',
      description:
        'فيو إنتراكتيف شركة شاملة للعلامات التجارية والتسويق مقرها كيرالا، بخبرة عملية في تطوير المواقع الإلكترونية والتطبيقات أيضًا. بدأنا رحلتنا في عام 2024، متخصصين في التصميم والتطوير والتسويق. مهمتنا هي تبسيط التحديات الرقمية المعقدة وتقديم حلول فعّالة وخالية من التوتر. يعكس اسم "Phew" الشعور بالارتياح والإنجاز الذي نقدمه لعملائنا من خلال تحويل التعقيدات إلى تجارب سلسة.',
      highlights: ['استراتيجية العلامة التجارية', 'تطوير المواقع الإلكترونية', 'التسويق الرقمي', 'تصميم تجربة المستخدم', 'التصميم الإبداعي', 'الحلول التقنية'],
      metrics: [
        { label: 'التأسيس', value: '2024' },
        { label: 'المقر', value: 'كيرالا، الهند' },
        { label: 'التركيز', value: 'العلامات التجارية وتطوير المواقع والتطبيقات' },
      ],
    },
    capabilitiesHeading: { eyebrow: 'قدرات القطاع', title: 'خبرة إبداعية وتقنية' },
    capabilities: [
      { title: 'استراتيجية العلامة التجارية', description: 'مساعدة الشركات على تحديد هويتها وموقعها طويل الأمد.' },
      { title: 'تطوير المواقع الإلكترونية', description: 'بناء تجارب رقمية حديثة ومتجاوبة.' },
      { title: 'التسويق الرقمي', description: 'ربط العلامات التجارية بالجمهور المناسب من خلال حملات استراتيجية.' },
      { title: 'تصميم تجربة المستخدم', description: 'تصميم تجارب مستخدم بديهية وجذابة.' },
      { title: 'التصميم الإبداعي', description: 'تطوير تواصل بصري مؤثر عبر المنصات الرقمية والمطبوعة.' },
      { title: 'الحلول التقنية', description: 'دعم الشركات بحلول رقمية قابلة للتوسع تدفع النمو.' },
    ],
    whyItMatters: {
      heading: 'لماذا يهم هذا القطاع',
      body: [
        'تتنافس شركات اليوم على التجربة بقدر ما تتنافس على المنتجات والخدمات. أصبحت العلامة التجارية القوية، والابتكار الرقمي، والتواصل الاستراتيجي عناصر أساسية للنمو المستدام.',
        'من خلال فيو إنتراكتيف، تدعم القبا للاستثمار المؤسسات من خلال الجمع بين الخبرة الإبداعية والحلول القائمة على التقنية، ما يمكّن العلامات التجارية من التكيف والنمو وبناء علاقات دائمة مع جمهورها.',
      ],
    },
    processHeading: { eyebrow: 'رحلة تطوير العلامة التجارية', title: 'من الاكتشاف إلى النمو' },
    process: [
      { title: 'الاكتشاف', description: 'فهم الأعمال والجمهور والسوق قبل بدء أي عمل إبداعي.' },
      { title: 'الاستراتيجية', description: 'تحديد موقع العلامة التجارية والرسائل والاتجاه الذي سيتبعه العمل الإبداعي.' },
      { title: 'التطوير الإبداعي', description: 'تصميم الهوية البصرية وأصول العلامة التجارية بما يتماشى مع الاستراتيجية.' },
      { title: 'التنفيذ الرقمي', description: 'بناء المواقع والتطبيقات والتجارب الرقمية التي تُحيي العلامة التجارية.' },
      { title: 'التسويق', description: 'ربط العلامة التجارية بجمهورها من خلال حملات مستهدفة.' },
      { title: 'نمو الأعمال', description: 'يترجم الظهور والتفاعل المستمران إلى نمو طويل الأمد.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'نظرة على القطاع',
        title: 'إلى أين تتجه العلامات التجارية والنمو الرقمي',
        description: 'تستمر الشركات في الاستثمار في العلامات التجارية والتحول الرقمي وتجربة العملاء مع تطور الأسواق التنافسية. تحتاج المؤسسات بشكل متزايد إلى حلول إبداعية وتقنية متكاملة تعزز حضورها في السوق مع تحسين تفاعل العملاء.',
      },
      items: [
        { title: 'نمو العلامة التجارية', description: 'حضور أقوى في السوق مبني على هوية علامة تجارية متسقة.' },
        { title: 'ابتكار رقمي', description: 'تجارب رقمية حديثة تُبقي الشركات تنافسية.' },
        { title: 'تميز إبداعي', description: 'تصميم وعمل إبداعي يتميز في أسواق مزدحمة.' },
        { title: 'تفاعل العملاء', description: 'تواصل أعمق مع الجمهور من خلال التواصل الاستراتيجي.' },
      ],
    },
    whyChoose: {
      heading: { eyebrow: 'لماذا فيو إنتراكتيف', title: 'لماذا تختار الشركات فيو إنتراكتيف' },
      items: [
        { title: 'تطوير استراتيجي للعلامة التجارية', description: 'تموضع علامة تجارية مبني حول أهداف العمل طويلة الأمد.' },
        { title: 'تميز إبداعي', description: 'عمل تصميمي يعكس الهوية الفريدة لكل علامة تجارية.' },
        { title: 'حلول مدعومة بالتقنية', description: 'حلول ويب ورقمية حديثة مبنية لتتوسع.' },
        { title: 'نمو رقمي طويل الأمد', description: 'دعم مستمر ينمو مع نمو العمل.' },
      ],
    },
  },
  tourism: {
    name: 'السياحة',
    heroSubtitle: 'الاستثمار في الشغف العالمي بالسفر',
    tagline:
      'يلتقط قطاع السياحة في شركة القبا للاستثمار الطلب العالمي على السفر من خلال شراكات الضيافة، وعمليات السفر، وتجارب الوجهات، بالعمل إلى جانب مشغّلين راسخين بدلًا من امتلاك بنية تحتية ثقيلة.',
    description:
      'اكتشف قطاع السياحة في شركة القبا للاستثمار، ويضم مابشور، ليقدّم إدارة سفر وشراكات ضيافة وتجارب وجهات عبر الأسواق العالمية.',
    heroMetrics: [
      { label: 'مراكز نشطة', value: '1' },
      { label: 'النموذج', value: 'خفيف الأصول' },
    ],
    overview: {
      heading: 'التقاط نمو السفر دون امتلاك الأصول الثقيلة',
      body: [
        'يُعد السفر والسياحة من أكثر القطاعات الاستهلاكية استدامة في العالم، والخليج يقع في قلبه. يستثمر قطاع السياحة في شركة القبا للاستثمار في هذا الطلب من خلال مشغّلي الضيافة، ومزودي خدمات السفر، وتجارب الوجهات، بدلًا من شراء الفنادق والمنتجعات مباشرة.',
        'يحافظ هذا التوجه خفيف الأصول على مرونة رأس المال: يتوزع التعرض عبر الإقامة وعمليات الجولات وخدمات السفر، ويمكن تعديل المراكز مع تغير الموسمية والطلب على الوجهات.',
      ],
    },
    caseStudyHeading: { eyebrow: 'شركاتنا التشغيلية', title: 'الشركات المميزة' },
    caseStudy: [
      {
        title: 'Mapshore',
        description:
          'مابشور شركة رائدة مقرها الإمارات العربية المتحدة في إدارة السفر والسياحة، تصمّم تجارب سفر سلسة ومخصصة حول العالم. تخدم الشركات والمسافرين بغرض الترفيه والعائلات والمسافرين الأفراد، وتربطهم بوجهات عالمية المستوى عبر شبكة خدمات سفر متكاملة من البداية إلى النهاية، تجمع بين خبرة عميقة في القطاع وشراكات عالمية قوية.',
        highlights: [
          'حجز تذاكر الطيران حول العالم',
          'حجوزات الفنادق والإقامات الفاخرة',
          'باقات سياحية مصممة خصيصًا',
          'حلول التأمين على السفر',
          'تأشيرات سياحية إماراتية ومساعدة في التأشيرات العالمية',
          'سفر الشركات والترفيه والعائلات والأفراد',
        ],
        metrics: [
          { label: 'المقر', value: 'الإمارات العربية المتحدة' },
          { label: 'الدور', value: 'إدارة السفر والسياحة' },
          { label: 'التركيز', value: 'خدمات سفر متكاملة' },
        ],
      },
    ],
    capabilitiesHeading: { eyebrow: 'قدرات القطاع', title: 'ستة مجالات من الخبرة في السفر والضيافة' },
    capabilities: [
      { title: 'شراكات الضيافة', description: 'العمل مع مشغّلي إقامة راسخين بدلًا من بناء العقارات وتشغيلها بأنفسنا.' },
      { title: 'عمليات الجولات والسفر', description: 'دعم المشغّلين الذين يصممون برامج السفر ويبيعونها وينفذونها على نطاق واسع.' },
      { title: 'تجارب الوجهات', description: 'دعم الرحلات والمعالم والتجارب المحلية التي يحجزها المسافرون فعليًا عند وصولهم.' },
      { title: 'خدمات السفر', description: 'تعرض لخدمات الحجز والتذاكر والخدمات المساندة عبر رحلة المسافر.' },
      { title: 'حركة الوافدين والمغادرين', description: 'تموضع يشمل الزوار القادمين إلى الخليج ومقيمي الخليج المسافرين إلى الخارج.' },
      { title: 'العناية الواجبة تجاه المشغّلين', description: 'يخضع كل شريك لمراجعة التراخيص والسجل والقدرة التشغيلية قبل نشر رأس المال.' },
    ],
    whyItMatters: {
      heading: 'لماذا تستثمر القبا في السياحة',
      body: [
        'السياحة هي نقطة التقاء الإنفاق الاستهلاكي والاستثمار في البنية التحتية والاستراتيجية الوطنية. وقد جعلت الإمارات ودول مجلس التعاون اقتصاد الزوار أولوية في سياساتها، وما نتج عن ذلك من توسع في الطاقة الاستيعابية للطيران والفعاليات وتطوير الوجهات يواصل جذب الطلب إلى المنطقة.',
        'وبالنسبة للمستثمرين، يوفر القطاع تعرضًا لهذا النمو بدورة أقصر وميزانية أخف من التملك العقاري، وبإيرادات تتبع الإشغال والحجوزات الفعلية لا ارتفاع قيمة الأصول وحده.',
      ],
    },
    processHeading: { eyebrow: 'رحلة الاستثمار', title: 'من دراسة الوجهة إلى توزيع الأرباح' },
    process: [
      { title: 'دراسة الوجهة', description: 'تقييم أعداد الزوار والموسمية ومحركات الطلب قبل دخول أي سوق.' },
      { title: 'اختيار المشغّل', description: 'تحديد مشغّلي الضيافة والسفر المرخّصين ذوي السجل الموثّق.' },
      { title: 'هيكلة الشراكة', description: 'الاتفاق على الشروط التجارية وتقاسم الإيرادات والتزامات التقارير مسبقًا.' },
      { title: 'نشر رأس المال', description: 'تخصيص الاستثمار في فرص الضيافة والسياحة المعتمدة.' },
      { title: 'متابعة الأداء', description: 'تتبع الإشغال والحجوزات وأداء المشغّل طوال الموسم.' },
      { title: 'توزيع الإيرادات', description: 'تُوزَّع الأرباح وفقًا لدورة الاستثمار وشروط الصندوق.' },
    ],
    industryOutlook: {
      heading: {
        eyebrow: 'نظرة على القطاع',
        title: 'إلى أين يتجه الطلب على السفر',
        description: 'يواصل السفر العالمي التوسع مع تزايد حركة الطبقة الوسطى، وتوسع الطاقة الاستيعابية للطيران، والاستثمار الوطني المستمر في اقتصاد الزوار، ما يخلق فرصًا طويلة الأمد للمستثمرين المتموضعين إلى جانب مشغّلين راسخين.',
      },
      items: [
        { title: 'تنامي الطلب على السفر', description: 'نمو مستمر في سفر الترفيه والأعمال عبر الأسواق الإقليمية والدولية.' },
        { title: 'توسع الضيافة', description: 'تطوير متواصل للطاقة الاستيعابية للإقامة عبر وجهات الخليج.' },
        { title: 'الفعاليات والموسمية', description: 'فعاليات كبرى وذروات موسمية تخلق نوافذ طلب متكررة.' },
        { title: 'تنويع الوجهات', description: 'تعرض موزع على وجهات متعددة بدلًا من سوق واحد.' },
      ],
    },
  },
}

function mergeCaseStudy(
  en: SectorCaseStudy | SectorCaseStudy[] | undefined,
  ar: SectorCaseStudyTranslation | SectorCaseStudyTranslation[] | undefined
): SectorCaseStudy | SectorCaseStudy[] | undefined {
  // A division with no featured company (Import & Export) has nothing to
  // merge in either language.
  if (!en || !ar) return en
  if (Array.isArray(en) && Array.isArray(ar)) {
    return en.map((item, i) => ({ ...item, ...ar[i] }))
  }
  if (!Array.isArray(en) && !Array.isArray(ar)) {
    return { ...en, ...ar }
  }
  return en
}

function mergeTextItems<T extends { title: string; description: string }>(
  en: T[],
  ar: { title: string; description: string }[] | undefined
): T[] {
  if (!ar) return en
  return en.map((item, i) => (ar[i] ? { ...item, ...ar[i] } : item))
}

function localizeSector(sector: Sector, locale: string): Sector {
  if (locale !== 'ar') return sector
  const t = sectorTranslations[sector.slug]
  if (!t) return sector

  return {
    ...sector,
    name: t.name,
    heroSubtitle: t.heroSubtitle ?? sector.heroSubtitle,
    tagline: t.tagline,
    description: t.description,
    heroMetrics: t.heroMetrics ?? sector.heroMetrics,
    overview: sector.overview && t.overview ? { ...sector.overview, ...t.overview } : sector.overview,
    whyItMatters: sector.whyItMatters && t.whyItMatters ? { ...sector.whyItMatters, ...t.whyItMatters } : sector.whyItMatters,
    capabilitiesHeading: t.capabilitiesHeading ?? sector.capabilitiesHeading,
    capabilities: mergeTextItems(sector.capabilities, t.capabilities),
    processHeading: t.processHeading ?? sector.processHeading,
    process: sector.process ? mergeTextItems(sector.process, t.process) : sector.process,
    caseStudyHeading: t.caseStudyHeading ?? sector.caseStudyHeading,
    caseStudy: mergeCaseStudy(sector.caseStudy, t.caseStudy),
    industryOutlook:
      sector.industryOutlook && t.industryOutlook
        ? {
            heading: t.industryOutlook.heading ?? sector.industryOutlook.heading,
            items: mergeTextItems(sector.industryOutlook.items, t.industryOutlook.items),
          }
        : sector.industryOutlook,
    whyChoose:
      sector.whyChoose && t.whyChoose
        ? {
            heading: t.whyChoose.heading ?? sector.whyChoose.heading,
            items: mergeTextItems(sector.whyChoose.items, t.whyChoose.items),
          }
        : sector.whyChoose,
  }
}

/** Returns every sector, localized for the given locale. */
export function getSectors(locale: string): Sector[] {
  return sectors.map((sector) => localizeSector(sector, locale))
}

export function getSectorBySlug(slug: string, locale: string = 'en'): Sector | undefined {
  const sector = sectors.find((s) => s.slug === slug)
  return sector ? localizeSector(sector, locale) : undefined
}

/**
 * Icon lookup for sectors not yet fully authored. All six divisions
 * (International Trading, Real Estate, Shipping & Logistics, Import &
 * Export, Brand Strategy, Tourism) are now live, so this stays empty —
 * kept in place so RelatedSectors doesn't
 * need changes if another sector is ever added ahead of full authoring.
 */
export const upcomingSectors: { slug: string; name: string; icon: LucideIcon }[] = []

export const sectorIconFallback = Handshake
