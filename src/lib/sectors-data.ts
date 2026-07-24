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
  caseStudy: SectorCaseStudy | SectorCaseStudy[]
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
    name: 'Global Exports Division',
    icon: Globe2,
    heroImage: '/Trading.png',
    heroImagePosition: 'left center',
    heroSubtitle: 'Expanding International Trade Through Trusted Partnerships',
    tagline:
      "Al Quba Investment's Global Exports Division facilitates the movement of high-quality products across international markets through strategic sourcing, reliable export operations, and long-term commercial partnerships. By connecting manufacturers, suppliers, and buyers worldwide, we create sustainable trade opportunities that drive global growth.",
    description:
      "Explore Al Quba Investment's Global Exports Division and discover how Hebron General Trading LLC delivers trusted international trade, strategic sourcing, and export solutions across global markets.",
    heroMetrics: [
      { label: 'Active Trade Lines', value: '18' },
      { label: 'Avg. Cycle Length', value: '5 months' },
    ],
    overview: {
      heading: 'Driving Global Trade with Confidence',
      body: [
        "Al Quba Investment's Global Exports Division brings together international trade expertise, cross-border commerce capability, and durable buyer-supplier relationships to help businesses move products confidently across global markets.",
        'Through reliable export operations and disciplined supply chain efficiency, the division supports market expansion for manufacturers, suppliers, and distributors — creating dependable trade corridors rather than one-off transactions.',
      ],
    },
    caseStudyHeading: {
      eyebrow: 'Featured Company',
      title: 'Hebron General Trading LLC',
    },
    caseStudy: {
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
        "Global trade continues to grow as businesses seek reliable partners capable of connecting supply with demand across borders. Al Quba Investment invests in this division because it combines growing international demand with genuinely diversified exposure across global markets — not a single corridor or category.",
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
          'International trade continues to expand through emerging markets, digital trade enablement, and increasing supply chain diversification — creating long-term opportunities for investors positioned in genuinely global trade networks.',
      },
      items: [
        { icon: TrendingUp, title: 'Growing Markets', description: 'Expanding demand across established and emerging international markets.' },
        { icon: Handshake, title: 'Export Partnerships', description: 'A growing network of long-term supplier and buyer relationships.' },
        { icon: Globe2, title: 'International Reach', description: 'Trade corridors spanning multiple regions and product categories.' },
        { icon: Target, title: 'Trade Opportunities', description: 'New avenues for sustainable growth as global commerce evolves.' },
      ],
    },
    companies: ['Hebron General Trading LLC'],
  },
  {
    slug: 'infrastructure-contracting',
    name: 'Infrastructure, Contracting & Built Environments',
    icon: Building2,
    heroImage: '/realestate.webp',
    heroSubtitle: 'Building Strong Foundations for Sustainable Growth',
    tagline:
      "Al Quba Investment's Infrastructure, Contracting & Built Environments Division delivers reliable construction and contracting solutions that support commercial, industrial, and infrastructure development. Through quality workmanship, engineering expertise, and efficient project execution, the division contributes to creating modern spaces that support economic growth and long-term value.",
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
    name: 'Logistics & Supply Chain',
    icon: Ship,
    heroImage: '/shipping.webp',
    heroSubtitle: 'Delivering Global Connectivity Through Integrated Logistics',
    tagline:
      "Al Quba Investment's Logistics & Supply Chain Division delivers reliable logistics solutions that enable businesses to move goods efficiently across domestic and international markets. Through integrated shipping, freight coordination, and supply chain expertise, the division supports seamless trade while strengthening global business connectivity.",
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
    heroImage: '/importexport.png',
    heroSubtitle: 'Connecting Businesses Through Global Trade',
    tagline:
      "The Import & Export Division of Al Quba Investment facilitates seamless international trade by connecting businesses with trusted sourcing, procurement, and distribution solutions. Through strategic partnerships and technology-driven commerce, the division enables efficient cross-border trade while helping businesses expand into regional and international markets.",
    description:
      "Discover Al Quba Investment's Import & Export Division featuring ContainerKart and Al Wahda Trading, delivering global sourcing, commercial trading, wholesale distribution, and cross-border trade solutions.",
    heroMetrics: [
      { label: 'Active Corridors', value: '9' },
      { label: 'Avg. Facility Term', value: '4 months' },
    ],
    overview: {
      heading: 'Enabling Smarter Global Commerce',
      body: [
        "International trade is built on trusted relationships, efficient supply chains, and reliable market access. Al Quba Investment's Import & Export Division brings these elements together through its portfolio companies, creating opportunities for manufacturers, suppliers, distributors, and buyers to trade confidently across borders.",
        'By combining traditional commercial trading with modern B2B digital commerce, the division supports businesses throughout the entire trade lifecycle—from sourcing products and identifying suppliers to facilitating procurement, distribution, and long-term commercial partnerships.',
      ],
    },
    caseStudyHeading: {
      eyebrow: 'Our Operating Companies',
      title: 'Featured Companies',
    },
    caseStudy: [
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
    companies: ['ContainerKart', 'Al Wahda Trading'],
  },
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    icon: Palette,
    heroImage: '/tech.png',
    heroImagePosition: '65% center',
    heroSubtitle: 'Building Brands That Inspire Growth',
    tagline:
      "Al Quba Investment's Brand Strategy Division empowers businesses through creative branding, digital innovation, and strategic marketing solutions. By combining technology, creativity, and business insight, the division helps organizations strengthen their market presence, connect with audiences, and achieve sustainable growth.",
    description:
      "Discover Al Quba Investment's Brand Strategy Division and Phew Interactive, delivering branding, website development, digital marketing, creative design, UI/UX, and technology solutions.",
    heroMetrics: [
      { label: 'Active Positions', value: '1' },
      { label: 'Avg. Hold Period', value: 'Ongoing' },
    ],
    overview: {
      heading: 'Creating Stronger Brands Through Innovation',
      body: [
        "A strong brand is more than a logo—it's the foundation of business growth and long-term customer trust. Al Quba Investment's Brand Strategy Division helps organizations build compelling brand identities through creative thinking, digital experiences, and strategic communication.",
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
]

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug)
}

/**
 * Icon lookup for sectors not yet fully authored. All five divisions
 * (Global Exports, Infrastructure/Contracting/Built Environments,
 * Logistics & Supply Chain, Import & Export, Brand Strategy) are now
 * live, so this stays empty — kept in place so RelatedSectors doesn't
 * need changes if another sector is ever added ahead of full authoring.
 */
export const upcomingSectors: { slug: string; name: string; icon: LucideIcon }[] = []

export const sectorIconFallback = Handshake
