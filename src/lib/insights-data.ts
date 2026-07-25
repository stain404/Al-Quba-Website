import type { BlogPostItem } from '@/types'

export const AUTHOR = 'Al Quba Investment Research Team'

export const categories = [
  'Market Insights',
  'Trade & Commerce',
  'Real Estate Intelligence',
  'Investment Insights',
  'Business & Economic Trends',
] as const

export type ArticleCategory = (typeof categories)[number]

/** Arabic labels for the canonical (English) category enum above. */
const categoryTranslations: Record<string, string> = {
  'Market Insights': 'رؤى السوق',
  'Trade & Commerce': 'التجارة والأعمال',
  'Real Estate Intelligence': 'رؤى العقارات',
  'Investment Insights': 'رؤى الاستثمار',
  'Business & Economic Trends': 'اتجاهات الأعمال والاقتصاد',
}

/** Locale-aware category labels, used to drive the Insights filter tabs. */
export function getCategories(locale: string): string[] {
  if (locale !== 'ar') return [...categories]
  return categories.map((c) => categoryTranslations[c] ?? c)
}

function localizeCategory(category: string, locale: string): string {
  if (locale !== 'ar') return category
  return categoryTranslations[category] ?? category
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }

export interface Article extends BlogPostItem {
  slug: string
  /** Widened from `ArticleCategory` — the localized value is a plain
   *  translated string once merged, not a member of the English enum. */
  category: string
  /** Narrowed from BlogPostItem's optional field — every article has a hero image. */
  imageSrc: string
  author: string
  body: ArticleBlock[]
  keyTakeaways: string[]
}

/**
 * Interim body/keyTakeaways content: short but real institutional-style
 * copy written to exercise the article template end-to-end (hero, prose
 * rendering, key takeaways, related articles) while the full long-form
 * text for these 11 pieces is pending from the client. Titles, categories,
 * excerpts, dates, and images are final per the brief — only `body` and
 * `keyTakeaways` are placeholders to be replaced slug-for-slug once the
 * complete article content is provided.
 */
export const featuredArticle: Article = {
  slug: 'uae-investment-landscape-2026',
  title: 'The UAE Investment Landscape 2026: Opportunities Across Trade, Real Estate & Private Markets',
  excerpt:
    'A comprehensive look at where capital is moving across the UAE in 2026 — from trade and logistics to real estate and private markets — and what disciplined investors should be watching.',
  category: 'Market Insights',
  date: 'July 2026',
  readTime: '9 min read',
  author: AUTHOR,
  imageSrc: '/footer-bg.png',
  href: '/insights/uae-investment-landscape-2026',
  body: [
    {
      type: 'paragraph',
      text: 'The UAE has spent the last decade building the infrastructure, regulatory clarity, and global connectivity that make it one of the more resilient investment destinations in the region. 2026 is shaping up to be a year of consolidation rather than a single dramatic shift — capital is flowing steadily into trade, logistics, real estate, and increasingly, private markets. For investors, the opportunity lies less in timing a single trend and more in understanding how these sectors reinforce one another.',
    },
    { type: 'heading', level: 2, text: 'Trade and Logistics Remain the Backbone' },
    {
      type: 'paragraph',
      text: "Dubai and Abu Dhabi's position as re-export and logistics hubs continues to anchor a large share of non-oil economic activity. Free zones, port infrastructure, and air cargo capacity give the UAE a structural advantage that is difficult to replicate elsewhere in the region, and that advantage compounds as global supply chains continue to diversify away from single-source dependencies.",
    },
    { type: 'heading', level: 2, text: 'Real Estate Is Maturing, Not Just Growing' },
    {
      type: 'paragraph',
      text: 'Residential demand has been well documented, but the more interesting story for 2026 is the maturing of commercial and mixed-use real estate, where institutional-grade governance, transparent title structures, and long-lease income profiles are becoming the differentiators — not just headline price appreciation.',
    },
    { type: 'heading', level: 3, text: 'Where Institutional Capital Is Looking' },
    {
      type: 'paragraph',
      text: 'Structured vehicles, income-generating assets, and sectors with clear regulatory oversight are attracting a growing share of institutional and family office capital — a trend that favors disciplined, governance-first investment approaches over speculative positioning.',
    },
    {
      type: 'image',
      src: '/architecture.jpg',
      alt: "Dubai's financial district skyline",
      caption: "Dubai's financial district continues to anchor institutional real estate demand.",
    },
    { type: 'heading', level: 2, text: 'Private Markets Are Opening Up' },
    {
      type: 'paragraph',
      text: 'As public market valuations globally remain sensitive to rate expectations, private markets — direct trade finance, structured pools, and real-asset vehicles — offer investors a way to access real economic activity with less correlation to daily market sentiment.',
    },
    { type: 'heading', level: 2, text: 'Conclusion' },
    {
      type: 'paragraph',
      text: "2026 rewards investors who think in terms of structure and duration rather than headlines. The UAE's diversification across trade, real estate, and private markets gives disciplined capital multiple, complementary ways to participate in the region's growth.",
    },
  ],
  keyTakeaways: [
    "Trade and logistics remain the structural backbone of the UAE's non-oil economy.",
    'Commercial real estate is differentiating on governance and income quality, not just price growth.',
    'Private markets and structured vehicles are attracting a growing share of institutional capital.',
    'Diversification across sectors, not a single trend, defines the opportunity in 2026.',
  ],
}

export const articles: Article[] = [
  {
    slug: 'dubai-market-outlook-2026',
    title: 'Dubai Market Outlook 2026: Key Trends Every Investor Should Watch',
    excerpt:
      "From non-oil diversification to shifting capital flows, here are the trends shaping Dubai's investment climate this year.",
    category: 'Market Insights',
    date: 'July 2026',
    readTime: '6 min read',
    author: AUTHOR,
    imageSrc: '/architecture.jpg',
    href: '/insights/dubai-market-outlook-2026',
    body: [
      {
        type: 'paragraph',
        text: "Dubai's economy has continued to diversify steadily away from hydrocarbon dependence, and 2026 is offering investors a clearer picture of which trends are structural rather than cyclical.",
      },
      { type: 'heading', level: 2, text: 'A Broader Base of Economic Activity' },
      {
        type: 'paragraph',
        text: "Trade, tourism, logistics, and financial services are together contributing to a wider revenue base for the emirate — one less sensitive to any single sector's cycle than it was a decade ago.",
      },
      { type: 'heading', level: 2, text: 'Capital Is Getting More Selective' },
      {
        type: 'paragraph',
        text: 'In a maturing market, investors are increasingly favoring transparency, regulatory clarity, and structured governance over speculative positioning — a shift that rewards patient, disciplined capital.',
      },
      {
        type: 'paragraph',
        text: "For long-term investors, the takeaway isn't a single hot sector — it's the growing depth and maturity of the market itself.",
      },
    ],
    keyTakeaways: [
      "Dubai's economic base continues to widen beyond trade and real estate alone.",
      'Investor capital increasingly favors transparency and governance over speculation.',
      "Market maturity, not a single hot sector, is 2026's defining theme.",
    ],
  },
  {
    slug: 'gcc-economic-outlook-global-investors',
    title: 'GCC Economic Outlook: What It Means for Global Investors',
    excerpt: "How ongoing economic diversification across the Gulf is reshaping the region's appeal to international capital.",
    category: 'Market Insights',
    date: 'June 2026',
    readTime: '7 min read',
    author: AUTHOR,
    imageSrc: '/GCC ECONOMIC OUTLOOK.png',
    href: '/insights/gcc-economic-outlook-global-investors',
    body: [
      {
        type: 'paragraph',
        text: "The GCC's economic diversification agenda has moved from policy announcements to visible, on-the-ground activity — new sectors, new capital, and new categories of investor interest.",
      },
      { type: 'heading', level: 2, text: 'A Region Diversifying in Parallel' },
      {
        type: 'paragraph',
        text: 'Each Gulf economy is pursuing its own diversification path — logistics, tourism, technology, manufacturing — while sharing common enablers: currency stability, deep infrastructure investment, and growing intra-regional trade.',
      },
      { type: 'heading', level: 2, text: 'What This Means for Foreign Capital' },
      {
        type: 'paragraph',
        text: 'Global investors are increasingly treating the GCC less as a single commodity-driven bloc and more as several distinct, maturing markets, each warranting its own due diligence.',
      },
      {
        type: 'paragraph',
        text: "For global investors, the opportunity is in recognizing that the region's story is no longer one story — it's several, each with its own risk and return profile.",
      },
    ],
    keyTakeaways: [
      'GCC diversification is now visible in real economic activity, not just policy.',
      'Each Gulf economy is pursuing a distinct diversification path.',
      'Global investors increasingly treat the GCC as several markets, not one.',
    ],
  },
  {
    slug: 'dubai-leads-global-trade-logistics',
    title: 'Why Dubai Continues to Lead Global Trade and Logistics',
    excerpt: 'Port infrastructure, free zones, and geographic position continue to make Dubai a preferred hub for global trade flows.',
    category: 'Trade & Commerce',
    date: 'June 2026',
    readTime: '6 min read',
    author: AUTHOR,
    imageSrc: '/trade.jpg',
    href: '/insights/dubai-leads-global-trade-logistics',
    body: [
      {
        type: 'paragraph',
        text: "Dubai's position between major East-West trade lanes has always been an advantage, but its continued leadership in global logistics has as much to do with infrastructure and regulatory design as with geography.",
      },
      { type: 'heading', level: 2, text: 'Infrastructure Built for Scale' },
      {
        type: 'paragraph',
        text: 'Port capacity, air cargo networks, and free zone ecosystems give traders a rare combination of speed and reliability that is difficult to replicate elsewhere.',
      },
      { type: 'heading', level: 2, text: 'A Trusted Node in a Diversifying Supply Chain' },
      {
        type: 'paragraph',
        text: 'As global supply chains reduce reliance on single-source manufacturing, more trade is being routed through diversified, trusted hubs — Dubai chief among them.',
      },
      {
        type: 'paragraph',
        text: 'For investors, structured exposure to trade finance and logistics remains one of the more direct ways to participate in this advantage.',
      },
    ],
    keyTakeaways: [
      'Dubai’s trade advantage is built on infrastructure and regulation, not geography alone.',
      'Supply chain diversification is routing more global trade through trusted hubs.',
      'Structured trade finance offers direct exposure to this dynamic.',
    ],
  },
  {
    slug: 'supply-chain-shifts-international-trade',
    title: 'Supply Chain Shifts: New Opportunities in International Trade',
    excerpt: 'As global supply chains diversify away from single-source dependency, new trade corridors and financing needs are emerging.',
    category: 'Trade & Commerce',
    date: 'May 2026',
    readTime: '6 min read',
    author: AUTHOR,
    imageSrc: '/shipping.webp',
    href: '/insights/supply-chain-shifts-international-trade',
    body: [
      {
        type: 'paragraph',
        text: 'The past several years have accelerated a structural rethink of global supply chains, with businesses prioritizing resilience alongside cost.',
      },
      { type: 'heading', level: 2, text: 'From Efficiency to Resilience' },
      {
        type: 'paragraph',
        text: 'Companies are diversifying supplier bases across multiple countries and regions rather than concentrating in one, creating new trade corridors in the process.',
      },
      { type: 'heading', level: 2, text: 'Financing the Transition' },
      {
        type: 'paragraph',
        text: 'This diversification creates demand for trade finance structures that can move with shifting corridors, rather than long-term, single-counterparty financing arrangements.',
      },
      {
        type: 'paragraph',
        text: 'Investors positioned in flexible, structured trade finance are well placed to benefit as these corridors continue to shift.',
      },
    ],
    keyTakeaways: [
      'Supply chains are prioritizing resilience alongside cost for the first time in decades.',
      'New trade corridors are emerging as sourcing diversifies.',
      'Flexible trade finance structures are best positioned to capture this shift.',
    ],
  },
  {
    slug: 'dubai-real-estate-2026-growth-drivers',
    title: 'Dubai Real Estate in 2026: Growth Drivers and Investment Opportunities',
    excerpt: "Population growth, infrastructure investment, and regulatory maturity continue to underpin Dubai's real estate market.",
    category: 'Real Estate Intelligence',
    date: 'May 2026',
    readTime: '7 min read',
    author: AUTHOR,
    imageSrc: '/realestate.webp',
    href: '/insights/dubai-real-estate-2026-growth-drivers',
    body: [
      {
        type: 'paragraph',
        text: "Dubai's real estate market has moved through several distinct cycles over the past two decades, and 2026's growth drivers look structurally different from those of a decade ago.",
      },
      { type: 'heading', level: 2, text: 'Demand Underpinned by Population and Policy' },
      {
        type: 'paragraph',
        text: 'Population growth, long-term residency options, and business-friendly policy continue to support demand across both residential and commercial segments.',
      },
      { type: 'heading', level: 2, text: 'A More Institutional Market' },
      {
        type: 'paragraph',
        text: 'Growing participation from institutional investors and structured vehicles reflects greater transparency in title, escrow, and reporting standards across the market.',
      },
      {
        type: 'paragraph',
        text: 'The opportunities that stand out in 2026 are those where governance and income visibility matter as much as location.',
      },
    ],
    keyTakeaways: [
      'Population growth and residency policy continue to underpin real estate demand.',
      'Institutional participation is rising as market transparency improves.',
      'Governance and income visibility are now key differentiators, not just location.',
    ],
  },
  {
    slug: 'residential-vs-commercial-property-portfolio',
    title: 'Residential vs Commercial Property: Which Investment Fits Your Portfolio?',
    excerpt: 'Understanding the different risk, return, and liquidity profiles of residential and commercial real estate investing.',
    category: 'Real Estate Intelligence',
    date: 'April 2026',
    readTime: '6 min read',
    author: AUTHOR,
    imageSrc: '/RESIDENTIAL AND COMMERCIAL REALESTATE.png',
    href: '/insights/residential-vs-commercial-property-portfolio',
    body: [
      {
        type: 'paragraph',
        text: "Residential and commercial property are often discussed as if they're interchangeable asset classes — in practice, they behave quite differently, and the right allocation depends heavily on an investor's objectives.",
      },
      { type: 'heading', level: 2, text: 'Residential: Liquidity and Familiarity' },
      {
        type: 'paragraph',
        text: 'Shorter lease cycles and a broader buyer pool generally make residential property easier to exit, though it remains more sensitive to short-term sentiment.',
      },
      { type: 'heading', level: 2, text: 'Commercial: Income Stability, Longer Horizons' },
      {
        type: 'paragraph',
        text: 'Longer leases and more predictable income define commercial property, offset by higher entry thresholds and slower liquidity.',
      },
      {
        type: 'paragraph',
        text: 'Rather than choosing one over the other, disciplined investors typically hold both — residential for liquidity and optionality, commercial for income stability — sized to their broader portfolio objectives.',
      },
    ],
    keyTakeaways: [
      'Residential property generally offers greater liquidity and a broader buyer pool.',
      'Commercial property offers longer, more predictable income streams.',
      'Most disciplined portfolios benefit from holding both, not choosing one.',
    ],
  },
  {
    slug: 'resilient-portfolios-alternative-investments',
    title: 'Building Resilient Portfolios Through Alternative Investments',
    excerpt: 'Why a growing number of investors are looking beyond public markets to build more resilient, diversified portfolios.',
    category: 'Investment Insights',
    date: 'April 2026',
    readTime: '7 min read',
    author: AUTHOR,
    imageSrc: '/Building Resilient Portfolios Through Alternative Investments.png',
    href: '/insights/resilient-portfolios-alternative-investments',
    body: [
      {
        type: 'paragraph',
        text: 'Public market volatility has pushed many investors to reconsider how much of their portfolio should sit in listed equities and bonds alone.',
      },
      { type: 'heading', level: 2, text: 'Why Alternatives Are Gaining Ground' },
      {
        type: 'paragraph',
        text: 'Private credit, trade finance, and real assets offer return drivers that are less tied to daily market sentiment than listed securities.',
      },
      { type: 'heading', level: 2, text: 'Resilience Through Structure, Not Just Diversification' },
      {
        type: 'paragraph',
        text: "The value of alternatives comes as much from how they're structured — governance, underwriting discipline, transparency — as from simply being a different asset class.",
      },
      {
        type: 'paragraph',
        text: "Resilience isn't just about holding different things — it's about holding well-structured things.",
      },
    ],
    keyTakeaways: [
      'Alternative investments offer return drivers less tied to daily market sentiment.',
      'Structure and governance matter as much as asset class diversification.',
      'Resilience is built through disciplined underwriting, not just variety.',
    ],
  },
  {
    slug: 'risk-return-long-term-wealth-creation',
    title: 'Understanding Risk, Return, and Long-Term Wealth Creation',
    excerpt: 'A grounded look at how disciplined risk management, not chasing returns, drives long-term wealth creation.',
    category: 'Investment Insights',
    date: 'March 2026',
    readTime: '6 min read',
    author: AUTHOR,
    imageSrc: '/Understanding Risk, Return & Long-Term Wealth Creation.png',
    href: '/insights/risk-return-long-term-wealth-creation',
    body: [
      {
        type: 'paragraph',
        text: "It's tempting to evaluate an investment purely on its expected return, but long-term wealth creation is shaped far more by how risk is managed than by any single return figure.",
      },
      { type: 'heading', level: 2, text: "Return Without Understood Risk Isn't a Strategy" },
      {
        type: 'paragraph',
        text: 'Understanding what specifically generates a return — and what could interrupt it — matters more than the headline number before committing capital.',
      },
      { type: 'heading', level: 2, text: 'Compounding Favors Consistency' },
      {
        type: 'paragraph',
        text: 'Avoiding large drawdowns and compounding steadily over time tends to outperform chasing higher, less consistent returns.',
      },
      {
        type: 'paragraph',
        text: 'Long-term wealth creation rewards investors who prioritize understanding risk as thoroughly as they pursue return.',
      },
    ],
    keyTakeaways: [
      'Return figures mean little without understanding what drives them.',
      'Avoiding large drawdowns matters more than chasing peak returns.',
      'Consistency compounds; volatility erodes.',
    ],
  },
  {
    slug: 'five-industries-uae-economic-transformation',
    title: "Five Industries Driving the UAE's Economic Transformation",
    excerpt:
      "Discover the five industries transforming the UAE economy and creating new opportunities for businesses and investors.",
    category: 'Business & Economic Trends',
    date: 'March 2026',
    readTime: '7 min read',
    author: AUTHOR,
    imageSrc: "/Five Industries Driving the UAE's Economic Transformation.png",
    href: '/insights/five-industries-uae-economic-transformation',
    body: [
      {
        type: 'paragraph',
        text: "The United Arab Emirates has successfully positioned itself as one of the world's fastest-evolving economies. While energy remains an important sector, the country's long-term vision has focused on diversification, innovation, and sustainable economic development.",
      },
      {
        type: 'paragraph',
        text: "Today, investment opportunities extend across multiple industries that are reshaping the nation's future. Understanding these sectors helps investors identify long-term growth opportunities supported by structural economic trends.",
      },
      {
        type: 'paragraph',
        text: "Here are five industries leading the UAE's economic transformation.",
      },
      { type: 'heading', level: 3, text: '1. Trade and Logistics' },
      {
        type: 'paragraph',
        text: "Dubai's strategic location between Europe, Asia, and Africa has made the UAE one of the world's leading trade and logistics hubs.",
      },
      {
        type: 'paragraph',
        text: 'Continuous investments in ports, airports, free zones, and transportation infrastructure enable businesses to move goods efficiently across international markets.',
      },
      {
        type: 'paragraph',
        text: "As global trade volumes continue expanding, logistics remains one of the country's strongest growth sectors.",
      },
      {
        type: 'image',
        src: '/insights/five-industries-logistics.jpg',
        alt: 'Aerial view of container port and logistics infrastructure',
        caption: 'Logistics and trade infrastructure.',
      },
      { type: 'heading', level: 3, text: '2. Real Estate and Infrastructure' },
      {
        type: 'paragraph',
        text: "The UAE's expanding population and business environment continue to support demand for residential, commercial, industrial, and mixed-use developments.",
      },
      {
        type: 'paragraph',
        text: 'Infrastructure investment — including transportation, utilities, and smart city initiatives — enhances property values while improving overall economic competitiveness.',
      },
      {
        type: 'paragraph',
        text: 'Real estate remains a significant contributor to both economic activity and long-term investment opportunities.',
      },
      { type: 'heading', level: 3, text: '3. Financial Services and FinTech' },
      {
        type: 'paragraph',
        text: 'The UAE has rapidly become a regional financial center.',
      },
      {
        type: 'paragraph',
        text: 'Digital banking, payment technologies, investment platforms, wealth management, and financial innovation continue attracting businesses from around the world.',
      },
      {
        type: 'paragraph',
        text: 'Government support for innovation and regulatory modernization has accelerated the growth of financial technology throughout the region.',
      },
      { type: 'heading', level: 3, text: '4. Technology and Artificial Intelligence' },
      {
        type: 'paragraph',
        text: 'Artificial intelligence is transforming industries across healthcare, logistics, finance, education, and customer services.',
      },
      {
        type: 'paragraph',
        text: 'Businesses are adopting automation, predictive analytics, and digital solutions to improve efficiency and competitiveness.',
      },
      {
        type: 'paragraph',
        text: 'Technology continues to create entirely new business models while increasing productivity across traditional sectors.',
      },
      {
        type: 'image',
        src: '/insights/five-industries-tech-team.jpg',
        alt: 'Technology professionals collaborating around AI dashboards',
        caption: 'Technology professionals collaborating.',
      },
      { type: 'heading', level: 3, text: '5. Renewable Energy and Sustainability' },
      {
        type: 'paragraph',
        text: 'Sustainability has become a national priority.',
      },
      {
        type: 'paragraph',
        text: "Investments in renewable energy, clean technologies, hydrogen, and environmental innovation are helping diversify the economy while supporting long-term environmental goals.",
      },
      {
        type: 'paragraph',
        text: "As businesses increasingly prioritize sustainable operations, green investments are expected to play an even larger role in the UAE's future.",
      },
      { type: 'heading', level: 2, text: 'Why Diversification Matters' },
      {
        type: 'paragraph',
        text: "One of the UAE's greatest strengths is that economic growth is no longer dependent on a single industry. Instead, multiple sectors contribute to employment, innovation, investment, and business expansion.",
      },
      {
        type: 'paragraph',
        text: 'This diversified economic foundation strengthens resilience while reducing vulnerability to sector-specific challenges. For investors, diversification at the national level creates broader investment opportunities across multiple industries.',
      },
      { type: 'heading', level: 2, text: 'Looking Ahead' },
      {
        type: 'paragraph',
        text: "The UAE's continued investment in infrastructure, innovation, technology, and global trade positions it for sustained long-term growth. Businesses that align with these structural trends are likely to benefit from expanding market opportunities, increasing demand, and supportive government initiatives.",
      },
      {
        type: 'paragraph',
        text: 'For investors seeking exposure to a diversified, future-focused economy, the UAE continues to present compelling opportunities.',
      },
      {
        type: 'paragraph',
        text: "Long-term success begins with understanding where economies are heading. Follow Al Quba Investment for insights into the industries shaping tomorrow's investment opportunities.",
      },
    ],
    keyTakeaways: [
      'Trade and logistics remain core economic drivers.',
      'Real estate continues to benefit from infrastructure expansion.',
      'Financial technology is transforming regional finance.',
      'Artificial intelligence is accelerating business innovation.',
      'Sustainability investments are creating new growth opportunities.',
    ],
  },
  {
    slug: 'family-offices-private-capital-uae',
    title: 'The Rise of Family Offices and Private Capital in the UAE',
    excerpt:
      'Learn how family offices and private capital are reshaping investment, entrepreneurship, and business growth across the UAE.',
    category: 'Business & Economic Trends',
    date: 'February 2026',
    readTime: '6 min read',
    author: AUTHOR,
    imageSrc: '/The Rise of Family Offices A New Era of Private Capital.png',
    href: '/insights/family-offices-private-capital-uae',
    body: [
      {
        type: 'paragraph',
        text: 'The UAE has emerged as one of the world\'s most attractive destinations for wealth management and private investment. Alongside multinational corporations and institutional investors, family offices and private capital have become increasingly influential in shaping the country\'s investment landscape.',
      },
      {
        type: 'paragraph',
        text: 'With a long-term approach to capital allocation and business development, these investors are supporting entrepreneurship, infrastructure, real estate, technology, and international trade.',
      },
      {
        type: 'paragraph',
        text: "Their growing presence reflects the UAE's evolution into a global financial and investment hub.",
      },
      { type: 'heading', level: 2, text: 'What Is a Family Office?' },
      {
        type: 'paragraph',
        text: 'A family office is an organization established to manage the financial affairs, investments, and long-term wealth of high-net-worth families.',
      },
      {
        type: 'paragraph',
        text: 'Unlike traditional investment funds, family offices often focus on preserving wealth across generations while identifying opportunities that align with long-term strategic objectives.',
      },
      {
        type: 'paragraph',
        text: 'Their investment decisions typically emphasize stability, diversification, and sustainable value creation.',
      },
      {
        type: 'image',
        src: '/insights/family-offices-consultation.jpg',
        alt: 'Wealth management consultation in a Dubai office overlooking the skyline',
        caption: 'Wealth management consultation.',
      },
      { type: 'heading', level: 2, text: 'The Growth of Private Capital' },
      {
        type: 'paragraph',
        text: 'Private capital includes investments made outside public stock markets. These investments may involve:',
      },
      {
        type: 'list',
        items: [
          'Private businesses',
          'Infrastructure projects',
          'Commercial real estate',
          'Trade and logistics',
          'Venture capital',
          'Private credit',
          'Strategic partnerships',
        ],
      },
      {
        type: 'paragraph',
        text: 'As investors seek greater diversification, private capital has become an increasingly important component of modern investment portfolios.',
      },
      { type: 'heading', level: 2, text: 'Why the UAE Attracts Private Investors' },
      {
        type: 'paragraph',
        text: 'Several factors contribute to the UAE\'s appeal:',
      },
      {
        type: 'list',
        items: [
          'Political and economic stability',
          'Strategic geographic location',
          'Modern financial infrastructure',
          'Business-friendly regulations',
          'International connectivity',
          'Growing entrepreneurial ecosystem',
        ],
      },
      {
        type: 'paragraph',
        text: 'These advantages create an environment that supports both capital preservation and long-term business growth.',
      },
      { type: 'heading', level: 2, text: 'Supporting Innovation and Entrepreneurship' },
      {
        type: 'paragraph',
        text: 'Family offices increasingly invest beyond traditional assets. Many are supporting:',
      },
      {
        type: 'list',
        items: [
          'Technology startups',
          'Healthcare innovation',
          'Renewable energy',
          'Advanced manufacturing',
          'Digital infrastructure',
          'Artificial intelligence',
        ],
      },
      {
        type: 'paragraph',
        text: 'These investments contribute to economic diversification while encouraging innovation across multiple industries.',
      },
      { type: 'heading', level: 2, text: 'A Long-Term Investment Philosophy' },
      {
        type: 'paragraph',
        text: 'Unlike investors focused on quarterly performance, many family offices evaluate opportunities over longer investment horizons.',
      },
      {
        type: 'paragraph',
        text: 'This patient capital approach enables businesses to grow sustainably while supporting strategic expansion rather than short-term financial results. Long-term partnerships often create greater value for both investors and operating businesses.',
      },
      {
        type: 'image',
        src: '/insights/family-offices-strategy.jpg',
        alt: 'Investors discussing long-term strategy in a Dubai boardroom',
        caption: 'Investors discussing long-term strategy.',
      },
      { type: 'heading', level: 2, text: 'Looking Ahead' },
      {
        type: 'paragraph',
        text: 'As global wealth continues to expand, the UAE is expected to strengthen its position as a preferred destination for private capital.',
      },
      {
        type: 'paragraph',
        text: 'Its combination of stability, connectivity, innovation, and economic diversification provides an attractive environment for long-term investment strategies. For businesses seeking growth capital and investors seeking diversified opportunities, private capital will continue to play an increasingly significant role in shaping the region\'s future.',
      },
      {
        type: 'paragraph',
        text: 'The future of investing extends beyond public markets. Discover how Al Quba Investment identifies long-term opportunities through strategic partnerships, private investments, and diversified growth strategies.',
      },
    ],
    keyTakeaways: [
      "Family offices are becoming major contributors to the UAE's investment ecosystem.",
      'Private capital supports business growth beyond public markets.',
      'Long-term investment strategies encourage sustainable value creation.',
      'Innovation and entrepreneurship continue attracting strategic investors.',
      'The UAE remains one of the region\'s leading destinations for global wealth.',
    ],
  },
]

/**
 * Arabic content overlay, same pattern as pools-data.ts/sectors-data.ts —
 * slugs, images, dates, and read times stay locale-independent; title,
 * excerpt, and body/keyTakeaways text are translated here and merged onto
 * the English article by slug. `body` is a full replacement array (not a
 * positional partial merge) since every block is body copy and there's no
 * icon/href field worth preserving from the English side.
 */
interface ArticleTranslation {
  title: string
  excerpt: string
  body: ArticleBlock[]
  keyTakeaways: string[]
}

const articleTranslations: Record<string, ArticleTranslation> = {
  'uae-investment-landscape-2026': {
    title: 'المشهد الاستثماري في الإمارات 2026: فرص عبر التجارة والعقارات والأسواق الخاصة',
    excerpt:
      'نظرة شاملة على وجهات تدفق رأس المال في دولة الإمارات خلال عام 2026 — من التجارة والخدمات اللوجستية إلى العقارات والأسواق الخاصة — وما ينبغي للمستثمرين المنضبطين مراقبته.',
    body: [
      {
        type: 'paragraph',
        text: 'أمضت دولة الإمارات العقد الماضي في بناء البنية التحتية، والوضوح التنظيمي، والاتصال العالمي التي تجعلها واحدة من أكثر الوجهات الاستثمارية مرونة في المنطقة. يتشكل عام 2026 ليكون عام توطيد أكثر منه تحولًا دراميًا واحدًا — إذ يتدفق رأس المال باطراد نحو التجارة، والخدمات اللوجستية، والعقارات، وبشكل متزايد، الأسواق الخاصة. وبالنسبة للمستثمرين، لا تكمن الفرصة في توقيت اتجاه واحد بقدر ما تكمن في فهم كيفية تعزيز هذه القطاعات لبعضها البعض.',
      },
      { type: 'heading', level: 2, text: 'التجارة والخدمات اللوجستية تظل العمود الفقري' },
      {
        type: 'paragraph',
        text: 'لا يزال موقع دبي وأبوظبي كمركزين لإعادة التصدير والخدمات اللوجستية يشكل ركيزة أساسية لجزء كبير من النشاط الاقتصادي غير النفطي. فالمناطق الحرة، والبنية التحتية للموانئ، وطاقة الشحن الجوي تمنح الإمارات ميزة هيكلية يصعب تكرارها في أي مكان آخر بالمنطقة، وتتضاعف هذه الميزة مع استمرار سلاسل التوريد العالمية في التنويع بعيدًا عن الاعتماد على مصدر واحد.',
      },
      { type: 'heading', level: 2, text: 'العقارات في طور النضج، لا مجرد النمو' },
      {
        type: 'paragraph',
        text: 'الطلب السكني موثّق جيدًا، لكن القصة الأكثر إثارة للاهتمام في عام 2026 هي نضج القطاع العقاري التجاري والمتعدد الاستخدامات، حيث أصبحت الحوكمة على مستوى المؤسسات، وهياكل الملكية الشفافة، ومصادر الدخل القائمة على عقود الإيجار الطويلة هي العوامل المميزة — وليس فقط ارتفاع الأسعار الظاهري.',
      },
      { type: 'heading', level: 3, text: 'أين يتجه رأس المال المؤسسي' },
      {
        type: 'paragraph',
        text: 'تجتذب الأدوات المهيكلة، والأصول المدرّة للدخل، والقطاعات ذات الرقابة التنظيمية الواضحة حصة متنامية من رأس مال المؤسسات ومكاتب العائلات — وهو اتجاه يفضّل نُهج الاستثمار المنضبطة القائمة على الحوكمة على المراكز المضاربية.',
      },
      {
        type: 'image',
        src: '/architecture.jpg',
        alt: 'أفق الحي المالي في دبي',
        caption: 'لا يزال الحي المالي في دبي يشكل ركيزة أساسية للطلب العقاري المؤسسي.',
      },
      { type: 'heading', level: 2, text: 'الأسواق الخاصة تنفتح أكثر' },
      {
        type: 'paragraph',
        text: 'بينما تظل تقييمات الأسواق العامة عالميًا حساسة لتوقعات أسعار الفائدة، توفر الأسواق الخاصة — التمويل التجاري المباشر، والمجمعات المهيكلة، وأدوات الأصول العينية — للمستثمرين وسيلة للوصول إلى نشاط اقتصادي حقيقي بارتباط أقل بمعنويات السوق اليومية.',
      },
      { type: 'heading', level: 2, text: 'الخلاصة' },
      {
        type: 'paragraph',
        text: 'يكافئ عام 2026 المستثمرين الذين يفكرون بمنطق الهيكلة والمدة الزمنية بدلًا من العناوين الرئيسية. فتنويع الإمارات عبر التجارة والعقارات والأسواق الخاصة يمنح رأس المال المنضبط طرقًا متعددة ومتكاملة للمشاركة في نمو المنطقة.',
      },
    ],
    keyTakeaways: [
      'تظل التجارة والخدمات اللوجستية العمود الفقري الهيكلي لاقتصاد الإمارات غير النفطي.',
      'يتميز القطاع العقاري التجاري بالحوكمة وجودة الدخل، لا بنمو الأسعار فحسب.',
      'تجتذب الأسواق الخاصة والأدوات المهيكلة حصة متنامية من رأس المال المؤسسي.',
      'التنويع عبر القطاعات، لا اتجاه واحد، هو ما يحدد الفرصة في عام 2026.',
    ],
  },
  'dubai-market-outlook-2026': {
    title: 'توقعات سوق دبي 2026: أبرز الاتجاهات التي يجب على كل مستثمر مراقبتها',
    excerpt: 'من التنويع غير النفطي إلى تحولات تدفقات رأس المال، إليك الاتجاهات التي تشكّل مناخ الاستثمار في دبي هذا العام.',
    body: [
      {
        type: 'paragraph',
        text: 'واصل اقتصاد دبي تنويعه بثبات بعيدًا عن الاعتماد على المحروقات، ويقدّم عام 2026 للمستثمرين صورة أوضح عن الاتجاهات ذات الطابع الهيكلي مقابل تلك الدورية.',
      },
      { type: 'heading', level: 2, text: 'قاعدة أوسع من النشاط الاقتصادي' },
      {
        type: 'paragraph',
        text: 'تُسهم التجارة والسياحة والخدمات اللوجستية والخدمات المالية معًا في توسيع قاعدة إيرادات الإمارة — قاعدة أقل حساسية لدورة أي قطاع بمفرده مقارنة بما كانت عليه قبل عقد من الزمن.',
      },
      { type: 'heading', level: 2, text: 'رأس المال يزداد انتقائية' },
      {
        type: 'paragraph',
        text: 'في سوق آخذة في النضج، يفضّل المستثمرون بشكل متزايد الشفافية والوضوح التنظيمي والحوكمة المهيكلة على المراكز المضاربية — وهو تحول يكافئ رأس المال الصبور والمنضبط.',
      },
      {
        type: 'paragraph',
        text: 'بالنسبة للمستثمرين على المدى الطويل، لا تكمن الخلاصة في قطاع رائج واحد — بل في العمق والنضج المتناميين للسوق نفسها.',
      },
    ],
    keyTakeaways: [
      'تستمر القاعدة الاقتصادية لدبي في التوسع لتتجاوز التجارة والعقارات وحدهما.',
      'يفضّل رأس مال المستثمرين بشكل متزايد الشفافية والحوكمة على المضاربة.',
      'نضج السوق، لا قطاع رائج واحد، هو السمة المميزة لعام 2026.',
    ],
  },
  'gcc-economic-outlook-global-investors': {
    title: 'التوقعات الاقتصادية لدول مجلس التعاون الخليجي: ماذا تعني للمستثمرين العالميين',
    excerpt: 'كيف يعيد التنويع الاقتصادي المستمر عبر دول الخليج تشكيل جاذبية المنطقة لرأس المال الدولي.',
    body: [
      {
        type: 'paragraph',
        text: 'انتقلت أجندة التنويع الاقتصادي لدول مجلس التعاون الخليجي من مجرد إعلانات سياسية إلى نشاط ملموس على أرض الواقع — قطاعات جديدة، ورأس مال جديد، وفئات جديدة من اهتمام المستثمرين.',
      },
      { type: 'heading', level: 2, text: 'منطقة تتنوع بشكل متوازٍ' },
      {
        type: 'paragraph',
        text: 'يسلك كل اقتصاد خليجي مسار تنويعه الخاص — الخدمات اللوجستية، والسياحة، والتقنية، والتصنيع — مع مشاركته عوامل تمكين مشتركة: استقرار العملة، والاستثمار العميق في البنية التحتية، ونمو التجارة البينية الإقليمية.',
      },
      { type: 'heading', level: 2, text: 'ماذا يعني هذا لرأس المال الأجنبي' },
      {
        type: 'paragraph',
        text: 'يتعامل المستثمرون العالميون بشكل متزايد مع دول مجلس التعاون الخليجي لا ككتلة واحدة مدفوعة بالسلع الأساسية، بل كأسواق متعددة ومتمايزة وآخذة في النضج، تستحق كل منها عناية واجبة خاصة بها.',
      },
      {
        type: 'paragraph',
        text: 'بالنسبة للمستثمرين العالميين، تكمن الفرصة في إدراك أن قصة المنطقة لم تعد قصة واحدة — بل عدة قصص، لكل منها ملامح مخاطر وعائد خاصة بها.',
      },
    ],
    keyTakeaways: [
      'أصبح التنويع الخليجي ملموسًا في النشاط الاقتصادي الفعلي، لا في السياسات فقط.',
      'يسلك كل اقتصاد خليجي مسار تنويع مميزًا خاصًا به.',
      'يتعامل المستثمرون العالميون بشكل متزايد مع دول الخليج كأسواق متعددة، لا سوق واحدة.',
    ],
  },
  'dubai-leads-global-trade-logistics': {
    title: 'لماذا تواصل دبي قيادة التجارة والخدمات اللوجستية العالمية',
    excerpt: 'لا تزال البنية التحتية للموانئ، والمناطق الحرة، والموقع الجغرافي تجعل من دبي مركزًا مفضلاً لتدفقات التجارة العالمية.',
    body: [
      {
        type: 'paragraph',
        text: 'كان موقع دبي بين ممرات التجارة الرئيسية بين الشرق والغرب ميزة دائمة، لكن استمرار ريادتها في الخدمات اللوجستية العالمية يعود بقدر كبير إلى البنية التحتية والتصميم التنظيمي بقدر ما يعود إلى الجغرافيا.',
      },
      { type: 'heading', level: 2, text: 'بنية تحتية مصممة للتوسع' },
      {
        type: 'paragraph',
        text: 'تمنح طاقة الموانئ، وشبكات الشحن الجوي، ومنظومات المناطق الحرة التجار مزيجًا نادرًا من السرعة والموثوقية يصعب تكراره في أي مكان آخر.',
      },
      { type: 'heading', level: 2, text: 'عقدة موثوقة في سلسلة توريد آخذة في التنوع' },
      {
        type: 'paragraph',
        text: 'مع تقليص سلاسل التوريد العالمية اعتمادها على التصنيع من مصدر واحد، يُوجَّه المزيد من التجارة عبر مراكز متنوعة وموثوقة — وفي مقدمتها دبي.',
      },
      {
        type: 'paragraph',
        text: 'بالنسبة للمستثمرين، يظل التعرض المهيكل للتمويل التجاري والخدمات اللوجستية من أكثر الطرق المباشرة للمشاركة في هذه الميزة.',
      },
    ],
    keyTakeaways: [
      'تقوم الميزة التجارية لدبي على البنية التحتية والتنظيم، لا الجغرافيا وحدها.',
      'يُوجّه تنويع سلاسل التوريد المزيد من التجارة العالمية عبر مراكز موثوقة.',
      'يوفر التمويل التجاري المهيكل تعرضًا مباشرًا لهذه الديناميكية.',
    ],
  },
  'supply-chain-shifts-international-trade': {
    title: 'تحولات سلاسل التوريد: فرص جديدة في التجارة الدولية',
    excerpt: 'مع تنويع سلاسل التوريد العالمية بعيدًا عن الاعتماد على مصدر واحد، تبرز ممرات تجارية جديدة واحتياجات تمويلية مستجدة.',
    body: [
      {
        type: 'paragraph',
        text: 'سرّعت السنوات القليلة الماضية من إعادة التفكير الهيكلي في سلاسل التوريد العالمية، حيث باتت الشركات تُعطي الأولوية للمرونة إلى جانب التكلفة.',
      },
      { type: 'heading', level: 2, text: 'من الكفاءة إلى المرونة' },
      {
        type: 'paragraph',
        text: 'تعمل الشركات على تنويع قواعد مورديها عبر دول ومناطق متعددة بدلًا من التركز في مكان واحد، ما يخلق ممرات تجارية جديدة في هذه العملية.',
      },
      { type: 'heading', level: 2, text: 'تمويل التحول' },
      {
        type: 'paragraph',
        text: 'يخلق هذا التنويع طلبًا على هياكل تمويل تجاري قادرة على التحرك مع الممرات المتغيرة، بدلًا من ترتيبات تمويل طويلة الأمد مع طرف مقابل واحد.',
      },
      {
        type: 'paragraph',
        text: 'يكون المستثمرون المتمركزون في تمويل تجاري مرن ومهيكل في موقع جيد للاستفادة مع استمرار تحوّل هذه الممرات.',
      },
    ],
    keyTakeaways: [
      'تُعطي سلاسل التوريد الأولوية للمرونة إلى جانب التكلفة لأول مرة منذ عقود.',
      'تبرز ممرات تجارية جديدة مع تنوّع مصادر التوريد.',
      'هياكل التمويل التجاري المرنة هي الأفضل موقعًا لاستثمار هذا التحول.',
    ],
  },
  'dubai-real-estate-2026-growth-drivers': {
    title: 'عقارات دبي في 2026: محركات النمو والفرص الاستثمارية',
    excerpt: 'لا يزال نمو السكان، والاستثمار في البنية التحتية، والنضج التنظيمي يدعم سوق العقارات في دبي.',
    body: [
      {
        type: 'paragraph',
        text: 'مرّ سوق العقارات في دبي بعدة دورات متمايزة على مدى العقدين الماضيين، وتبدو محركات النمو في عام 2026 مختلفة هيكليًا عمّا كانت عليه قبل عقد من الزمن.',
      },
      { type: 'heading', level: 2, text: 'طلب مدعوم بالنمو السكاني والسياسات' },
      {
        type: 'paragraph',
        text: 'لا يزال النمو السكاني، وخيارات الإقامة طويلة الأمد، والسياسات الداعمة للأعمال تدعم الطلب في القطاعين السكني والتجاري على حد سواء.',
      },
      { type: 'heading', level: 2, text: 'سوق أكثر مؤسسية' },
      {
        type: 'paragraph',
        text: 'تعكس المشاركة المتنامية للمستثمرين المؤسسيين والأدوات المهيكلة شفافية أكبر في معايير الملكية، والحسابات الضامنة، وإعداد التقارير في مختلف أنحاء السوق.',
      },
      {
        type: 'paragraph',
        text: 'الفرص التي تبرز في عام 2026 هي تلك التي تكون فيها الحوكمة ووضوح الدخل بنفس أهمية الموقع.',
      },
    ],
    keyTakeaways: [
      'لا يزال النمو السكاني وسياسات الإقامة يدعمان الطلب العقاري.',
      'تتزايد المشاركة المؤسسية مع تحسّن شفافية السوق.',
      'أصبحت الحوكمة ووضوح الدخل عاملين تمييزيين رئيسيين، لا الموقع فقط.',
    ],
  },
  'residential-vs-commercial-property-portfolio': {
    title: 'العقارات السكنية مقابل التجارية: أي استثمار يناسب محفظتك؟',
    excerpt: 'فهم الفروقات في المخاطر والعائد والسيولة بين الاستثمار العقاري السكني والتجاري.',
    body: [
      {
        type: 'paragraph',
        text: 'كثيرًا ما يُنظر إلى العقارات السكنية والتجارية على أنها فئات أصول قابلة للتبادل — لكن في الواقع، يتصرف كل منهما بشكل مختلف تمامًا، ويعتمد التوزيع الصحيح إلى حد كبير على أهداف المستثمر.',
      },
      { type: 'heading', level: 2, text: 'السكني: السيولة والألفة' },
      {
        type: 'paragraph',
        text: 'تجعل دورات الإيجار الأقصر وقاعدة المشترين الأوسع من العقارات السكنية أسهل في الخروج منها عمومًا، رغم أنها تظل أكثر حساسية للمعنويات قصيرة الأمد.',
      },
      { type: 'heading', level: 2, text: 'التجاري: استقرار الدخل وآفاق أطول' },
      {
        type: 'paragraph',
        text: 'تتميز العقارات التجارية بعقود إيجار أطول ودخل أكثر قابلية للتنبؤ، مقابل عتبات دخول أعلى وسيولة أبطأ.',
      },
      {
        type: 'paragraph',
        text: 'بدلًا من الاختيار بين الاثنين، يحرص المستثمرون المنضبطون عادةً على امتلاك كليهما — السكني من أجل السيولة والمرونة، والتجاري من أجل استقرار الدخل — بأحجام تتناسب مع أهداف محفظتهم الأشمل.',
      },
    ],
    keyTakeaways: [
      'توفر العقارات السكنية عمومًا سيولة أكبر وقاعدة مشترين أوسع.',
      'توفر العقارات التجارية تدفقات دخل أطول وأكثر قابلية للتنبؤ.',
      'تستفيد معظم المحافظ المنضبطة من امتلاك النوعين معًا، لا اختيار أحدهما فقط.',
    ],
  },
  'resilient-portfolios-alternative-investments': {
    title: 'بناء محافظ مرنة من خلال الاستثمارات البديلة',
    excerpt: 'لماذا يتطلع عدد متزايد من المستثمرين إلى ما هو أبعد من الأسواق العامة لبناء محافظ أكثر مرونة وتنوعًا.',
    body: [
      {
        type: 'paragraph',
        text: 'دفعت تقلبات الأسواق العامة كثيرًا من المستثمرين إلى إعادة النظر في حجم الجزء من محافظهم الذي ينبغي أن يبقى في الأسهم والسندات المدرجة وحدها.',
      },
      { type: 'heading', level: 2, text: 'لماذا تكتسب الاستثمارات البديلة زخمًا' },
      {
        type: 'paragraph',
        text: 'يوفر الائتمان الخاص والتمويل التجاري والأصول العينية محركات عائد أقل ارتباطًا بمعنويات السوق اليومية مقارنة بالأوراق المالية المدرجة.',
      },
      { type: 'heading', level: 2, text: 'المرونة من خلال الهيكلة، لا التنويع فقط' },
      {
        type: 'paragraph',
        text: 'تنبع قيمة الاستثمارات البديلة بقدر كبير من كيفية هيكلتها — الحوكمة، وانضباط الاكتتاب، والشفافية — بقدر ما تنبع من كونها فئة أصول مختلفة فحسب.',
      },
      {
        type: 'paragraph',
        text: 'لا تتعلق المرونة بامتلاك أشياء مختلفة فحسب — بل بامتلاك أشياء جيدة الهيكلة.',
      },
    ],
    keyTakeaways: [
      'توفر الاستثمارات البديلة محركات عائد أقل ارتباطًا بمعنويات السوق اليومية.',
      'تكتسب الهيكلة والحوكمة أهمية لا تقل عن تنويع فئات الأصول.',
      'تُبنى المرونة من خلال انضباط الاكتتاب، لا التنوع فقط.',
    ],
  },
  'risk-return-long-term-wealth-creation': {
    title: 'فهم المخاطر والعائد وبناء الثروة على المدى الطويل',
    excerpt: 'نظرة واقعية على كيفية دفع الإدارة المنضبطة للمخاطر — لا مطاردة العوائد — لبناء الثروة على المدى الطويل.',
    body: [
      {
        type: 'paragraph',
        text: 'من المغري تقييم استثمار ما بناءً على عائده المتوقع فقط، لكن بناء الثروة على المدى الطويل يتشكل إلى حد كبير من كيفية إدارة المخاطر أكثر من أي رقم عائد بمفرده.',
      },
      { type: 'heading', level: 2, text: 'العائد دون فهم المخاطر ليس استراتيجية' },
      {
        type: 'paragraph',
        text: 'فهم ما الذي يولّد العائد تحديدًا — وما الذي قد يعطّله — أهم من الرقم الظاهري قبل الالتزام برأس المال.',
      },
      { type: 'heading', level: 2, text: 'التراكم يفضّل الاتساق' },
      {
        type: 'paragraph',
        text: 'تجنّب التراجعات الكبيرة والتراكم المطّرد بمرور الوقت يميل إلى التفوق على مطاردة عوائد أعلى وأقل اتساقًا.',
      },
      {
        type: 'paragraph',
        text: 'يكافئ بناء الثروة على المدى الطويل المستثمرين الذين يولون فهم المخاطر أولوية بقدر سعيهم وراء العائد.',
      },
    ],
    keyTakeaways: [
      'لا تعني أرقام العائد الكثير دون فهم ما يدفعها.',
      'تجنّب التراجعات الكبيرة أهم من مطاردة أعلى العوائد.',
      'الاتساق يراكم القيمة؛ والتقلب يآكلها.',
    ],
  },
  'five-industries-uae-economic-transformation': {
    title: 'خمس صناعات تقود التحول الاقتصادي في الإمارات',
    excerpt: 'تعرّف على الصناعات الخمس التي تُحوّل اقتصاد الإمارات وتخلق فرصًا جديدة للشركات والمستثمرين.',
    body: [
      {
        type: 'paragraph',
        text: 'نجحت دولة الإمارات العربية المتحدة في تكريس مكانتها كواحدة من أسرع الاقتصادات تطورًا في العالم. ورغم أن قطاع الطاقة لا يزال يمثل قطاعًا مهمًا، فقد ركّزت رؤية الدولة طويلة الأمد على التنويع والابتكار والتنمية الاقتصادية المستدامة.',
      },
      {
        type: 'paragraph',
        text: 'واليوم، تمتد الفرص الاستثمارية عبر صناعات متعددة تعيد تشكيل مستقبل الدولة. ويساعد فهم هذه القطاعات المستثمرين على تحديد فرص نمو طويلة الأمد مدعومة باتجاهات اقتصادية هيكلية.',
      },
      {
        type: 'paragraph',
        text: 'فيما يلي خمس صناعات تقود التحول الاقتصادي في الإمارات.',
      },
      { type: 'heading', level: 3, text: '1. التجارة والخدمات اللوجستية' },
      {
        type: 'paragraph',
        text: 'جعل موقع دبي الاستراتيجي بين أوروبا وآسيا وأفريقيا من الإمارات واحدة من أبرز مراكز التجارة والخدمات اللوجستية في العالم.',
      },
      {
        type: 'paragraph',
        text: 'تمكّن الاستثمارات المستمرة في الموانئ والمطارات والمناطق الحرة والبنية التحتية للنقل الشركات من نقل البضائع بكفاءة عبر الأسواق الدولية.',
      },
      {
        type: 'paragraph',
        text: 'مع استمرار توسع أحجام التجارة العالمية، تظل الخدمات اللوجستية من أقوى قطاعات النمو في الدولة.',
      },
      {
        type: 'image',
        src: '/insights/five-industries-logistics.jpg',
        alt: 'منظر جوي لميناء الحاويات والبنية التحتية اللوجستية',
        caption: 'البنية التحتية للخدمات اللوجستية والتجارة.',
      },
      { type: 'heading', level: 3, text: '2. العقارات والبنية التحتية' },
      {
        type: 'paragraph',
        text: 'لا يزال النمو السكاني وبيئة الأعمال المتوسعة في الإمارات يدعمان الطلب على المشاريع السكنية والتجارية والصناعية والمتعددة الاستخدامات.',
      },
      {
        type: 'paragraph',
        text: 'يعزز الاستثمار في البنية التحتية — بما في ذلك النقل والمرافق ومبادرات المدن الذكية — قيمة العقارات مع تحسين التنافسية الاقتصادية الإجمالية.',
      },
      {
        type: 'paragraph',
        text: 'يظل القطاع العقاري مساهمًا رئيسيًا في النشاط الاقتصادي وفي فرص الاستثمار طويلة الأمد على حد سواء.',
      },
      { type: 'heading', level: 3, text: '3. الخدمات المالية والتقنية المالية' },
      {
        type: 'paragraph',
        text: 'أصبحت الإمارات بسرعة مركزًا ماليًا إقليميًا.',
      },
      {
        type: 'paragraph',
        text: 'تواصل الخدمات المصرفية الرقمية، وتقنيات الدفع، ومنصات الاستثمار، وإدارة الثروات، والابتكار المالي جذب الشركات من مختلف أنحاء العالم.',
      },
      {
        type: 'paragraph',
        text: 'سرّع الدعم الحكومي للابتكار والتحديث التنظيمي من نمو التقنية المالية في مختلف أنحاء المنطقة.',
      },
      { type: 'heading', level: 3, text: '4. التقنية والذكاء الاصطناعي' },
      {
        type: 'paragraph',
        text: 'يُحدث الذكاء الاصطناعي تحولًا في قطاعات الرعاية الصحية، والخدمات اللوجستية، والتمويل، والتعليم، وخدمة العملاء.',
      },
      {
        type: 'paragraph',
        text: 'تتبنى الشركات الأتمتة، والتحليلات التنبؤية، والحلول الرقمية لتحسين الكفاءة والتنافسية.',
      },
      {
        type: 'paragraph',
        text: 'تواصل التقنية خلق نماذج أعمال جديدة كليًا مع زيادة الإنتاجية في القطاعات التقليدية.',
      },
      {
        type: 'image',
        src: '/insights/five-industries-tech-team.jpg',
        alt: 'متخصصون في التقنية يتعاونون حول لوحات بيانات الذكاء الاصطناعي',
        caption: 'تعاون بين متخصصي التقنية.',
      },
      { type: 'heading', level: 3, text: '5. الطاقة المتجددة والاستدامة' },
      {
        type: 'paragraph',
        text: 'أصبحت الاستدامة أولوية وطنية.',
      },
      {
        type: 'paragraph',
        text: 'تساعد الاستثمارات في الطاقة المتجددة، والتقنيات النظيفة، والهيدروجين، والابتكار البيئي على تنويع الاقتصاد مع دعم الأهداف البيئية طويلة الأمد.',
      },
      {
        type: 'paragraph',
        text: 'مع تزايد إيلاء الشركات الأولوية للعمليات المستدامة، من المتوقع أن تلعب الاستثمارات الخضراء دورًا أكبر في مستقبل الإمارات.',
      },
      { type: 'heading', level: 2, text: 'لماذا يهم التنويع' },
      {
        type: 'paragraph',
        text: 'من أبرز نقاط قوة الإمارات أن النمو الاقتصادي لم يعد يعتمد على صناعة واحدة. بل تسهم قطاعات متعددة في التوظيف والابتكار والاستثمار وتوسع الأعمال.',
      },
      {
        type: 'paragraph',
        text: 'تعزز هذه القاعدة الاقتصادية المتنوعة المرونة مع تقليل التعرض للتحديات الخاصة بقطاع بعينه. وبالنسبة للمستثمرين، يخلق التنويع على المستوى الوطني فرصًا استثمارية أوسع عبر صناعات متعددة.',
      },
      { type: 'heading', level: 2, text: 'نظرة إلى المستقبل' },
      {
        type: 'paragraph',
        text: 'يضع الاستثمار المتواصل للإمارات في البنية التحتية والابتكار والتقنية والتجارة العالمية الدولة في موقع يتيح لها نموًا مستدامًا طويل الأمد. ومن المرجح أن تستفيد الشركات المتماشية مع هذه الاتجاهات الهيكلية من توسع فرص السوق، وتزايد الطلب، والمبادرات الحكومية الداعمة.',
      },
      {
        type: 'paragraph',
        text: 'بالنسبة للمستثمرين الباحثين عن التعرض لاقتصاد متنوع وموجه نحو المستقبل، لا تزال الإمارات تقدم فرصًا جذابة.',
      },
      {
        type: 'paragraph',
        text: 'يبدأ النجاح طويل الأمد بفهم الوجهة التي تتجه إليها الاقتصادات. تابعوا القبا للاستثمار للحصول على رؤى حول الصناعات التي تشكّل فرص استثمار الغد.',
      },
    ],
    keyTakeaways: [
      'تظل التجارة والخدمات اللوجستية محركات اقتصادية أساسية.',
      'يواصل القطاع العقاري الاستفادة من توسع البنية التحتية.',
      'تُحدث التقنية المالية تحولًا في التمويل الإقليمي.',
      'يُسرّع الذكاء الاصطناعي من الابتكار في قطاع الأعمال.',
      'تخلق استثمارات الاستدامة فرص نمو جديدة.',
    ],
  },
  'family-offices-private-capital-uae': {
    title: 'صعود مكاتب العائلات ورأس المال الخاص في الإمارات',
    excerpt: 'تعرّف على كيفية إعادة تشكيل مكاتب العائلات ورأس المال الخاص للاستثمار وريادة الأعمال ونمو الشركات في جميع أنحاء الإمارات.',
    body: [
      {
        type: 'paragraph',
        text: 'برزت الإمارات كواحدة من أكثر الوجهات جاذبية في العالم لإدارة الثروات والاستثمار الخاص. وإلى جانب الشركات متعددة الجنسيات والمستثمرين المؤسسيين، أصبحت مكاتب العائلات ورأس المال الخاص أكثر تأثيرًا في تشكيل المشهد الاستثماري في الدولة.',
      },
      {
        type: 'paragraph',
        text: 'من خلال نهج طويل الأمد في توزيع رأس المال وتطوير الأعمال، يدعم هؤلاء المستثمرون ريادة الأعمال والبنية التحتية والعقارات والتقنية والتجارة الدولية.',
      },
      {
        type: 'paragraph',
        text: 'يعكس حضورهم المتنامي تطور الإمارات لتصبح مركزًا ماليًا واستثماريًا عالميًا.',
      },
      { type: 'heading', level: 2, text: 'ما هو مكتب العائلة؟' },
      {
        type: 'paragraph',
        text: 'مكتب العائلة هو كيان يُنشأ لإدارة الشؤون المالية والاستثمارات والثروة طويلة الأمد للعائلات ذات الملاءة المالية المرتفعة.',
      },
      {
        type: 'paragraph',
        text: 'على عكس صناديق الاستثمار التقليدية، غالبًا ما تركز مكاتب العائلات على الحفاظ على الثروة عبر الأجيال مع تحديد الفرص المتوافقة مع الأهداف الاستراتيجية طويلة الأمد.',
      },
      {
        type: 'paragraph',
        text: 'عادةً ما تركز قراراتها الاستثمارية على الاستقرار والتنويع وخلق قيمة مستدامة.',
      },
      {
        type: 'image',
        src: '/insights/family-offices-consultation.jpg',
        alt: 'استشارة إدارة ثروات في مكتب بدبي يطل على أفق المدينة',
        caption: 'استشارة إدارة الثروات.',
      },
      { type: 'heading', level: 2, text: 'نمو رأس المال الخاص' },
      {
        type: 'paragraph',
        text: 'يشمل رأس المال الخاص الاستثمارات التي تتم خارج أسواق الأسهم العامة. وقد تتضمن هذه الاستثمارات:',
      },
      {
        type: 'list',
        items: [
          'شركات خاصة',
          'مشاريع بنية تحتية',
          'عقارات تجارية',
          'التجارة والخدمات اللوجستية',
          'رأس مال جريء',
          'ائتمان خاص',
          'شراكات استراتيجية',
        ],
      },
      {
        type: 'paragraph',
        text: 'مع سعي المستثمرين إلى تنويع أكبر، أصبح رأس المال الخاص مكونًا متزايد الأهمية في المحافظ الاستثمارية الحديثة.',
      },
      { type: 'heading', level: 2, text: 'لماذا تجذب الإمارات المستثمرين من القطاع الخاص' },
      {
        type: 'paragraph',
        text: 'تُسهم عدة عوامل في جاذبية الإمارات:',
      },
      {
        type: 'list',
        items: [
          'الاستقرار السياسي والاقتصادي',
          'الموقع الجغرافي الاستراتيجي',
          'بنية تحتية مالية حديثة',
          'أنظمة داعمة للأعمال',
          'اتصال دولي واسع',
          'منظومة ريادة أعمال متنامية',
        ],
      },
      {
        type: 'paragraph',
        text: 'تخلق هذه المزايا بيئة تدعم الحفاظ على رأس المال ونمو الأعمال على المدى الطويل معًا.',
      },
      { type: 'heading', level: 2, text: 'دعم الابتكار وريادة الأعمال' },
      {
        type: 'paragraph',
        text: 'تستثمر مكاتب العائلات بشكل متزايد فيما هو أبعد من الأصول التقليدية. ويدعم الكثير منها:',
      },
      {
        type: 'list',
        items: [
          'الشركات الناشئة التقنية',
          'الابتكار في الرعاية الصحية',
          'الطاقة المتجددة',
          'التصنيع المتقدم',
          'البنية التحتية الرقمية',
          'الذكاء الاصطناعي',
        ],
      },
      {
        type: 'paragraph',
        text: 'تُسهم هذه الاستثمارات في التنويع الاقتصادي مع تشجيع الابتكار عبر صناعات متعددة.',
      },
      { type: 'heading', level: 2, text: 'فلسفة استثمار طويلة الأمد' },
      {
        type: 'paragraph',
        text: 'على عكس المستثمرين المركزين على الأداء الفصلي، تُقيّم كثير من مكاتب العائلات الفرص على آفاق استثمارية أطول.',
      },
      {
        type: 'paragraph',
        text: 'يمكّن هذا النهج القائم على رأس المال الصبور الشركات من النمو بشكل مستدام مع دعم التوسع الاستراتيجي بدلًا من النتائج المالية قصيرة الأمد. وغالبًا ما تخلق الشراكات طويلة الأمد قيمة أكبر لكل من المستثمرين والشركات العاملة.',
      },
      {
        type: 'image',
        src: '/insights/family-offices-strategy.jpg',
        alt: 'مستثمرون يناقشون استراتيجية طويلة الأمد في قاعة اجتماعات بدبي',
        caption: 'مستثمرون يناقشون استراتيجية طويلة الأمد.',
      },
      { type: 'heading', level: 2, text: 'نظرة إلى المستقبل' },
      {
        type: 'paragraph',
        text: 'مع استمرار تنامي الثروة العالمية، من المتوقع أن تعزز الإمارات مكانتها كوجهة مفضلة لرأس المال الخاص.',
      },
      {
        type: 'paragraph',
        text: 'يوفر مزيجها من الاستقرار والاتصال والابتكار والتنويع الاقتصادي بيئة جذابة لاستراتيجيات الاستثمار طويلة الأمد. وبالنسبة للشركات الباحثة عن رأس مال للنمو والمستثمرين الباحثين عن فرص متنوعة، سيستمر رأس المال الخاص في لعب دور متزايد الأهمية في تشكيل مستقبل المنطقة.',
      },
      {
        type: 'paragraph',
        text: 'يمتد مستقبل الاستثمار إلى ما هو أبعد من الأسواق العامة. اكتشف كيف تحدد القبا للاستثمار الفرص طويلة الأمد من خلال الشراكات الاستراتيجية، والاستثمارات الخاصة، واستراتيجيات النمو المتنوعة.',
      },
    ],
    keyTakeaways: [
      'أصبحت مكاتب العائلات مساهمًا رئيسيًا في منظومة الاستثمار في الإمارات.',
      'يدعم رأس المال الخاص نمو الأعمال بما يتجاوز الأسواق العامة.',
      'تشجع استراتيجيات الاستثمار طويلة الأمد خلق قيمة مستدامة.',
      'يواصل الابتكار وريادة الأعمال جذب المستثمرين الاستراتيجيين.',
      'تظل الإمارات واحدة من أبرز وجهات المنطقة للثروة العالمية.',
    ],
  },
}

function localizeArticle(article: Article, locale: string): Article {
  if (locale !== 'ar') return article
  const t = articleTranslations[article.slug]
  return {
    ...article,
    category: localizeCategory(article.category, locale),
    ...(t ? { title: t.title, excerpt: t.excerpt, body: t.body, keyTakeaways: t.keyTakeaways } : {}),
  }
}

export function getFeaturedArticle(locale: string = 'en'): Article {
  return localizeArticle(featuredArticle, locale)
}

export function getArticles(locale: string = 'en'): Article[] {
  return articles.map((article) => localizeArticle(article, locale))
}

export function getAllArticles(locale: string = 'en'): Article[] {
  return [featuredArticle, ...articles].map((article) => localizeArticle(article, locale))
}

export function getArticleBySlug(slug: string, locale: string = 'en'): Article | undefined {
  const article = [featuredArticle, ...articles].find((a) => a.slug === slug)
  return article ? localizeArticle(article, locale) : undefined
}

/** Same-category matches first, then filled from the rest of the library. */
export function getRelatedArticles(currentSlug: string, count = 3, locale: string = 'en'): Article[] {
  const all = getAllArticles(locale).filter((article) => article.slug !== currentSlug)
  const current = getArticleBySlug(currentSlug, locale)
  const sameCategory = current ? all.filter((article) => article.category === current.category) : []
  const rest = all.filter((article) => !sameCategory.includes(article))
  return [...sameCategory, ...rest].slice(0, count)
}
