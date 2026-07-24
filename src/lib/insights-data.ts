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

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }

export interface Article extends BlogPostItem {
  slug: string
  category: ArticleCategory
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
    imageSrc: '/map.png',
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
    imageSrc: '/office.png',
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
    imageSrc: '/portfolio.png',
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
    imageSrc: '/investment.jpg',
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
    imageSrc: '/insights/five-industries-hero.jpg',
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
    imageSrc: '/insights/family-offices-hero.jpg',
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

export function getAllArticles(): Article[] {
  return [featuredArticle, ...articles]
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug)
}

/** Same-category matches first, then filled from the rest of the library. */
export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  const all = getAllArticles().filter((article) => article.slug !== currentSlug)
  const current = getArticleBySlug(currentSlug)
  const sameCategory = current ? all.filter((article) => article.category === current.category) : []
  const rest = all.filter((article) => !sameCategory.includes(article))
  return [...sameCategory, ...rest].slice(0, count)
}
