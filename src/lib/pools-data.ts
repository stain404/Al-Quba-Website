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
  Handshake,
  Layers,
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
  /** Lightens the hero scrim. The default weight is tuned for the bright
   *  product shots (frozen meat, cocoa beans) that need holding back;
   *  a photo that is already dark reaches near-black under it. */
  heroScrimSoft?: boolean
  /** Whether the pool is accepting subscriptions. No longer surfaced as
   *  a visible status anywhere — subscription status was removed from
   *  the hero, the snapshot grid, and the home cards — but it still
   *  decides the hero CTA ("Invest Now" vs "Explore Other Pools"). */
  isOpen: boolean
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
    isOpen: false,
    tagline:
      'A professionally managed frozen meat trading pool built on established supplier relationships, efficient cold-chain logistics, and disciplined capital deployment across structured trading cycles.',
    description:
      'Frost Capital Fund I is a short-term frozen meat trading investment pool focused on sourcing, importing, and distributing premium frozen meat products across established international trade corridors. By combining strong supplier relationships, efficient cold-chain logistics, and disciplined inventory management, the fund is structured to optimize capital deployment while maintaining operational efficiency and controlled risk.',
    /* Pool Status was the only hero metric every pool carried, so with
       subscription status removed these lists are empty. PoolHero already
       guards on `heroMetrics.length > 0` and drops its "Investment
       Details" block, and the home InvestmentCard hides its metric row
       when there's no value — the figures worth showing all live in
       `snapshot` regardless. */
    heroMetrics: [],
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
    brochureUrl: '/brochures/frozen.pdf',
  },
  {
    slug: 'cocoa',
    name: 'Premium Cocoa Fund I',
    category: 'Branded Chocolate Trading Fund',
    poolNumber: 2,
    heroImage: '/cocoa_beans.png',
    heroScrimSoft: true,
    isOpen: false,
    tagline:
      'A professionally managed branded chocolate trading pool capitalising on steady global FMCG demand through strategic supplier partnerships, efficient distribution, and disciplined capital deployment.',
    description:
      'Premium Cocoa Fund I is a branded chocolate trading and distribution investment pool focused on sourcing internationally recognised premium chocolate brands and supplying high-demand retail and wholesale markets. By combining strong supplier relationships, efficient inventory management, and an established distribution network, the fund is structured to maximise capital efficiency while delivering sustainable long-term growth.',
    heroMetrics: [],
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
    brochureUrl: '/brochures/cocoa.pdf',
  },
  {
    slug: 'travel',
    name: 'Global Travel Fund I',
    category: 'Global Travel Investment Fund',
    poolNumber: 3,
    heroImage: '/travel.jpeg',
    heroScrimSoft: true,
    isOpen: true,
    tagline:
      'A professionally managed travel and tourism pool capturing global travel growth through partnerships with hospitality providers and travel operators, in diversified, asset-light positions.',
    description:
      'Travel and tourism investment fund leveraging strategic partnerships, premium travel experiences, and asset-light business models to capture global travel growth.',
    heroMetrics: [],
    highlights: [
      'Strategic partnerships with global travel brands.',
      'High-growth travel industry.',
      'Asset-light business model.',
      'Operational efficiency with risk-managed approach.',
    ],
    /* Travel once carried these nine tiles as `heroDashboard`, which
       swapped the shared PoolHero for a bespoke two-column dashboard hero
       and folded the figures into it — the single reason this page read as
       a different template from Cocoa. As `snapshot` they render through
       the shared PoolInvestmentSnapshot 3x3 grid instead. Order and icons
       are identical to Cocoa's so the two grids match tile for tile. */
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
    ],
    steps: [
      { title: 'Strategic Partner Selection', description: 'Identify qualified hospitality operators, tourism assets, and strategic travel partnerships.' },
      { title: 'Capital Deployment', description: 'Allocate investment into approved hospitality and tourism opportunities.' },
      { title: 'Revenue Generation', description: 'Generate returns through hospitality operations, travel demand, and tourism-related income.' },
      { title: 'Revenue Distribution', description: 'Profits are distributed according to the investment cycle and fund terms.' },
    ],
    /* Empty to match Cocoa: an empty `structure` skips the Fund Details
       section, which also flips PoolHowItWorks to the `muted` surface, so
       the downstream section backgrounds line up with Cocoa's exactly. */
    structure: [],
    risks: [
      { icon: Handshake, title: 'Strategic Brand Partnerships', description: 'Investments are deployed only through established hospitality and travel partners.' },
      { icon: Layers, title: 'Asset-Light Investment Model', description: 'Capital is allocated into operational opportunities rather than owning heavy physical infrastructure.' },
      { icon: ShieldCheck, title: 'Diversified Revenue Streams', description: 'Exposure is spread across multiple travel and hospitality segments to reduce concentration risk.' },
    ],
    brochureUrl: '/brochures/travel.pdf',
  },
]

/**
 * Arabic content overlay, same pattern as sectors-data.ts's
 * sectorTranslations — icons, slugs, images, and brochure hrefs stay
 * locale-independent; only text (including the numeric-figure labels,
 * with units translated but figures themselves left untouched) is
 * translated here, merged onto the English pool by slug.
 */
interface PoolSnapshotTranslation {
  label: string
  value: string
  detail?: string
  disclaimer?: string
}

interface PoolTranslation {
  name: string
  category: string
  tagline: string
  description: string
  heroMetrics: { label: string; value: string }[]
  highlights: string[]
  snapshot?: PoolSnapshotTranslation[]
  steps: { title: string; description: string }[]
  structure?: { term: string; detail: string }[]
  risks: { title: string; description: string }[]
}

const poolTranslations: Record<string, PoolTranslation> = {
  frozen: {
    name: 'صندوق فروست كابيتال الأول',
    category: 'صندوق تجارة اللحوم المجمدة',
    tagline:
      'صندوق استثماري مُدار باحترافية لتجارة اللحوم المجمدة، مبني على علاقات موردين راسخة، وخدمات لوجستية فعّالة لسلسلة التبريد، ونشر منضبط لرأس المال عبر دورات تجارية منظمة.',
    description:
      'صندوق فروست كابيتال الأول هو صندوق استثماري قصير الأمد لتجارة اللحوم المجمدة، يركز على توريد واستيراد وتوزيع منتجات اللحوم المجمدة الفاخرة عبر ممرات تجارية دولية راسخة. من خلال الجمع بين علاقات موردين قوية، وخدمات لوجستية فعّالة لسلسلة التبريد، وإدارة منضبطة للمخزون، صُمم الصندوق لتحسين نشر رأس المال مع الحفاظ على الكفاءة التشغيلية ومخاطر محكومة.',
    heroMetrics: [],
    highlights: [
      'شبكة راسخة لسلسلة التبريد والتخزين.',
      'شراكات قوية مع موردين في تجارة اللحوم المجمدة.',
      'دوران سريع للمخزون مع خدمات لوجستية محكومة.',
      'فريق ذو خبرة في التعامل مع البضائع القابلة للتلف.',
    ],
    snapshot: [
      { label: 'توزيع الأرباح', value: '45% / 55%', detail: 'القبا / المستثمرون' },
      { label: 'فترة القفل', value: '1 سنة' },
      { label: 'فترة التهدئة', value: '20 يومًا' },
      { label: 'عمر الصندوق', value: '3 سنوات' },
      { label: 'العوائد الشهرية المتوقعة', value: 'حتى 2%', disclaimer: 'العوائد المتوقعة إرشادية فقط وغير مضمونة.' },
      { label: 'رأس المال المستهدف', value: '1.8 مليون درهم' },
      { label: 'الحد الأدنى للاستثمار', value: '50,000 درهم' },
      { label: 'رسوم الإدارة', value: '2%' },
    ],
    steps: [
      { title: 'الاستحداث', description: 'يؤمّن مكتب التداول لدينا أمر شراء مؤكدًا من موزع خليجي ويحدد موردًا معتمدًا في بلد المنشأ.' },
      { title: 'نشر رأس المال', description: 'يموّل رأس مال الصندوق الشحنة عند نقطة المنشأ، مضمونًا بأمر الشراء وبوليصة الشحن.' },
      { title: 'النقل والتخزين المبرد', description: 'تتحرك البضائع عبر خدمات لوجستية مراقبة لسلسلة التبريد إلى مستودعات مضمونة في دبي أو جبل علي.' },
      { title: 'التسليم والسداد', description: 'عند التسليم للموزع، تتم تسوية التسهيل بالهامش المتفق عليه، لتُغلق الدورة.' },
    ],
    risks: [
      { title: 'هيكل مضمون', description: 'كل دفعة مضمونة بأمر شراء مؤكد وبضائع فعلية أثناء النقل.' },
      { title: 'أطراف مقابلة معتمدة', description: 'يخضع جميع الموزعين والموردين لمراجعة ائتمانية وامتثال رسمية قبل التعاقد.' },
      { title: 'مدة دورة محددة', description: 'لا يُلتزم برأس المال لمدة أطول من دورة تجارية واحدة متفق عليها مسبقًا.' },
    ],
  },
  cocoa: {
    name: 'صندوق الكاكاو الفاخر الأول',
    category: 'صندوق تجارة الشوكولاتة ذات العلامة التجارية',
    tagline:
      'صندوق استثماري مُدار باحترافية لتجارة الشوكولاتة ذات العلامة التجارية، يستفيد من الطلب العالمي الثابت على منتجات الاستهلاك السريع عبر شراكات موردين استراتيجية وتوزيع فعّال ونشر منضبط لرأس المال.',
    description:
      'صندوق الكاكاو الفاخر الأول هو صندوق استثماري لتجارة وتوزيع الشوكولاتة ذات العلامة التجارية، يركز على توريد علامات شوكولاتة فاخرة معروفة عالميًا وتزويد أسواق التجزئة والجملة عالية الطلب. من خلال الجمع بين علاقات موردين قوية، وإدارة فعّالة للمخزون، وشبكة توزيع راسخة، صُمم الصندوق لتعظيم كفاءة رأس المال مع تحقيق نمو مستدام طويل الأمد.',
    heroMetrics: [],
    highlights: [
      'توريد قوي لعلامات شوكولاتة عالمية.',
      'فئة استهلاك سريع عالية الطلب باستهلاك متكرر.',
      'شبكة توزيع وتجزئة فعّالة.',
      'تحسين الهامش من خلال الشراء بالجملة.',
    ],
    snapshot: [
      { label: 'توزيع الأرباح', value: '50% / 50%', detail: 'القبا / المستثمرون' },
      { label: 'فترة القفل', value: '1 سنة' },
      { label: 'فترة التهدئة', value: '20 يومًا' },
      { label: 'عمر الصندوق', value: '3 سنوات' },
      { label: 'العوائد الشهرية المتوقعة', value: 'حتى 2%', disclaimer: 'العوائد المتوقعة إرشادية فقط ولا تضمن الأداء المستقبلي.' },
      { label: 'رأس المال المستهدف', value: '2 مليون درهم' },
      { label: 'الحد الأدنى للاستثمار', value: '50,000 درهم' },
      { label: 'رسوم الإدارة', value: '2%' },
    ],
    steps: [
      { title: 'اتفاقية الشراء الآجل', description: 'يلتزم أحد المصنّعين بعقد شراء آجل بسعر ثابت قبل موسم الحصاد.' },
      { title: 'تمويل التعاونيات', description: 'يقدّم رأس مال الصندوق تمويلًا تشغيليًا لتعاونيات صغار المزارعين لتمويل الحصاد.' },
      { title: 'التجميع والتصدير', description: 'يُجمّع الكاكاو، ويُصنّف حسب الجودة، ويُصدَّر بموجب اتفاقية الشراء الآجل.' },
      { title: 'التسليم والسداد', description: 'يؤدي التسليم إلى المصنّع إلى تفعيل السداد بسعر العقد المتفق عليه مسبقًا.' },
    ],
    risks: [
      { title: 'شراء آجل بسعر ثابت', description: 'يُحدَّد سعر العقد قبل نشر رأس المال، ما يزيل تعرض الصندوق لتقلبات السعر الفوري.' },
      { title: 'فحص التعاونيات', description: 'كل تعاونية يتم تمويلها لديها سجل تسليم موثوق لعدة مواسم قبل التعاقد.' },
      { title: 'دورة موسمية واحدة', description: 'يرتبط رأس المال بدورة حصاد واحدة في كل مرة، ولا يُرحَّل إلى مراكز غير ذات صلة.' },
    ],
  },
  travel: {
    name: 'صندوق السفر العالمي الأول',
    category: 'صندوق الاستثمار في قطاع السفر العالمي',
    tagline:
      'صندوق استثماري مُدار باحترافية في قطاع السفر والسياحة، يلتقط نمو السفر العالمي عبر شراكات مع مقدمي خدمات الضيافة ومشغلي السفر، في مراكز متنوعة وخفيفة الأصول.',
    description:
      'صندوق استثماري في قطاع السفر والسياحة يستفيد من الشراكات الاستراتيجية، وتجارب السفر الفاخرة، ونماذج أعمال خفيفة الأصول لالتقاط نمو السفر العالمي.',
    heroMetrics: [],
    highlights: [
      'شراكات استراتيجية مع علامات سفر عالمية.',
      'صناعة سفر عالية النمو.',
      'نموذج أعمال خفيف الأصول.',
      'كفاءة تشغيلية بنهج مُدار للمخاطر.',
    ],
    snapshot: [
      { label: 'توزيع الأرباح', value: '50% / 50%', detail: 'القبا / المستثمرون' },
      { label: 'فترة القفل', value: '1 سنة' },
      { label: 'فترة التهدئة', value: '20 يومًا' },
      { label: 'عمر الصندوق', value: '3 سنوات' },
      { label: 'العوائد الشهرية المتوقعة', value: 'حتى 2%', disclaimer: 'العوائد المتوقعة إرشادية فقط ولا تضمن الأداء المستقبلي.' },
      { label: 'رأس المال المستهدف', value: '2 مليون درهم' },
      { label: 'الحد الأدنى للاستثمار', value: '50,000 درهم' },
      { label: 'رسوم الإدارة', value: '2%' },
    ],
    steps: [
      { title: 'اختيار الشركاء الاستراتيجيين', description: 'تحديد مشغّلي الضيافة المؤهلين، والأصول السياحية، والشراكات الاستراتيجية في قطاع السفر.' },
      { title: 'نشر رأس المال', description: 'تخصيص الاستثمار في فرص الضيافة والسياحة المعتمدة.' },
      { title: 'توليد الإيرادات', description: 'تحقيق العوائد من خلال عمليات الضيافة، والطلب على السفر، والدخل المرتبط بالسياحة.' },
      { title: 'توزيع الإيرادات', description: 'تُوزَّع الأرباح وفقًا لدورة الاستثمار وشروط الصندوق.' },
    ],
    /* Omitted deliberately: `localizePool` resolves `t.structure ?? pool.structure`,
       so leaving this out falls through to the English pool's now-empty
       array and the Fund Details section is skipped in Arabic too. Left in
       place it would have kept rendering a section Cocoa does not have. */
    risks: [
      { title: 'شراكات استراتيجية مع العلامات التجارية', description: 'يتم نشر الاستثمارات فقط من خلال شركاء ضيافة وسفر راسخين.' },
      { title: 'نموذج استثماري خفيف الأصول', description: 'يُخصَّص رأس المال في فرص تشغيلية بدلًا من امتلاك بنية تحتية مادية ثقيلة.' },
      { title: 'مصادر إيرادات متنوعة', description: 'يتوزع التعرض عبر قطاعات سفر وضيافة متعددة للحد من مخاطر التركّز.' },
    ],
  },
}

function mergeSnapshot<T extends { icon: LucideIcon }>(en: T[] | undefined, ar: PoolSnapshotTranslation[] | undefined): T[] | undefined {
  if (!en) return en
  if (!ar) return en
  return en.map((item, i) => (ar[i] ? { ...item, ...ar[i] } : item))
}

function mergeTitled<T extends { title: string; description: string }>(en: T[], ar: { title: string; description: string }[] | undefined): T[] {
  if (!ar) return en
  return en.map((item, i) => (ar[i] ? { ...item, ...ar[i] } : item))
}

function localizePool(pool: Pool, locale: string): Pool {
  if (locale !== 'ar') return pool
  const t = poolTranslations[pool.slug]
  if (!t) return pool

  return {
    ...pool,
    name: t.name,
    category: t.category,
    tagline: t.tagline,
    description: t.description,
    heroMetrics: t.heroMetrics,
    highlights: t.highlights,
    snapshot: mergeSnapshot(pool.snapshot, t.snapshot),
    steps: mergeTitled(pool.steps, t.steps),
    structure: t.structure ?? pool.structure,
    risks: mergeTitled(pool.risks, t.risks),
  }
}

export function getPools(locale: string): Pool[] {
  return pools.map((pool) => localizePool(pool, locale))
}

export function getPoolBySlug(slug: string, locale: string = 'en'): Pool | undefined {
  const pool = pools.find((p) => p.slug === slug)
  return pool ? localizePool(pool, locale) : undefined
}

const iconForCategory: Record<string, LucideIcon> = {
  frozen: Snowflake,
  cocoa: Sprout,
  travel: Plane,
}

export function getPoolIcon(slug: string): LucideIcon {
  return iconForCategory[slug] ?? Landmark
}
