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
  /** Drives CTA/pill styling — kept as an explicit boolean rather than
   *  string-matching `status` (e.g. `.includes('open')`), since `status`
   *  is translated per locale and a substring match on translated text
   *  is unreliable. */
  isOpen: boolean
  /** "Investment Details" — rendered in the hero's metrics row. */
  heroMetrics: { label: string; value: string }[]
  /** "Right Side Highlights" — short bullet points rendered in the hero. */
  highlights: string[]
  /** Investment Snapshot — icon-grid quick-glance metrics below the hero. */
  snapshot?: PoolSnapshotItem[]
  /** Investment Highlights — richer title+description cards. */
  investmentHighlights?: PoolHighlight[]
  /**
   * Dashboard metrics rendered inside the two-column PoolDashboardHero
   * (used instead of the classic PoolHero when present). Same shape as
   * `snapshot`, but a distinct field so a pool can show these figures in
   * the hero itself without the separate Investment Snapshot section
   * further down the page rendering the same data twice.
   */
  heroDashboard?: PoolSnapshotItem[]
  /** Right-column feature panel for PoolDashboardHero — same shape as
   *  `investmentHighlights`, kept distinct for the same reason as
   *  `heroDashboard` above. */
  heroFeatures?: PoolHighlight[]
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
    isOpen: false,
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
    isOpen: false,
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
    poolNumber: 3,
    heroImage: '/boarding_plane.png',
    status: 'Open to Subscription',
    isOpen: true,
    tagline:
      'Global Travel Fund I is a professionally managed travel and tourism investment pool focused on capitalising on the continued growth of the global travel industry. Through strategic partnerships with hospitality providers, travel operators, and tourism-focused businesses, the fund aims to create sustainable long-term value through diversified, asset-light investment opportunities.',
    description:
      'Travel and tourism investment fund leveraging strategic partnerships, premium travel experiences, and asset-light business models to capture global travel growth.',
    heroMetrics: [
      { label: 'Pool Status', value: 'Open to Subscription' },
    ],
    highlights: [
      'Strategic partnerships with global travel brands.',
      'High-growth travel industry.',
      'Asset-light business model.',
      'Operational efficiency with risk-managed approach.',
    ],
    heroDashboard: [
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
      { icon: BadgeCheck, label: 'Pool Status', value: 'Open to Subscription', isStatus: true },
    ],
    heroFeatures: [
      {
        icon: Handshake,
        title: 'Strategic Partnerships with Global Travel Brands',
        description: 'Strong alliances with leading airlines, hospitality providers, travel operators, and tourism businesses across international markets.',
      },
      {
        icon: TrendingUp,
        title: 'High-Growth Global Travel Industry',
        description: 'Benefit from continued recovery and expansion driven by international tourism, business travel, leisure experiences, and increasing global mobility.',
      },
      {
        icon: Layers,
        title: 'Asset-Light Investment Strategy',
        description: 'Diversified exposure across hospitality, travel services, tourism infrastructure, and experience-driven businesses without significant capital-intensive operations.',
      },
      {
        icon: ShieldCheck,
        title: 'Disciplined Capital Deployment & Risk Management',
        description: 'Professional portfolio management supported by strategic partnerships, operational efficiency, ongoing performance monitoring, and comprehensive risk controls.',
      },
    ],
    steps: [
      { title: 'Operator Review', description: 'Operators are assessed on booking volume, revenue history, and confirmed forward reservations.' },
      { title: 'Facility Deployment', description: 'Pool capital funds pre-season working capital — fleet leasing, staffing, and fuel reserves.' },
      { title: 'Peak Season Operation', description: 'Operators run their peak-season schedule against confirmed bookings.' },
      { title: 'Revenue Sweep & Repayment', description: 'A portion of booking revenue is swept to the facility throughout the season until repaid in full.' },
    ],
    structure: [
      { term: 'Lock-in Period', detail: '1 Year' },
      { term: 'Cooling Period', detail: '20 Days' },
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
  status: string
  heroMetrics: { label: string; value: string }[]
  highlights: string[]
  snapshot?: PoolSnapshotTranslation[]
  heroDashboard?: PoolSnapshotTranslation[]
  heroFeatures?: { title: string; description: string }[]
  steps: { title: string; description: string }[]
  structure?: { term: string; detail: string }[]
  risks: { title: string; description: string }[]
}

const poolTranslations: Record<string, PoolTranslation> = {
  frozen: {
    name: 'صندوق فروست كابيتال الأول',
    category: 'صندوق تجارة اللحوم المجمدة',
    status: 'مكتمل الاكتتاب',
    tagline:
      'صندوق فروست كابيتال الأول هو صندوق استثماري مُدار باحترافية لتجارة اللحوم المجمدة، مصمم للاستفادة من فرص التجارة الدولية عالية الحجم. من خلال علاقات موردين راسخة، وخدمات لوجستية فعّالة لسلسلة التبريد، ونشر منضبط لرأس المال، يركز الصندوق على تحقيق قيمة مستدامة من خلال دورات تجارية منظمة.',
    description:
      'صندوق فروست كابيتال الأول هو صندوق استثماري قصير الأمد لتجارة اللحوم المجمدة، يركز على توريد واستيراد وتوزيع منتجات اللحوم المجمدة الفاخرة عبر ممرات تجارية دولية راسخة. من خلال الجمع بين علاقات موردين قوية، وخدمات لوجستية فعّالة لسلسلة التبريد، وإدارة منضبطة للمخزون، صُمم الصندوق لتحسين نشر رأس المال مع الحفاظ على الكفاءة التشغيلية ومخاطر محكومة.',
    heroMetrics: [{ label: 'حالة الصندوق', value: 'مكتمل الاكتتاب' }],
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
      { label: 'حالة الصندوق', value: 'مكتمل الاكتتاب' },
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
    status: 'مكتمل الاكتتاب',
    tagline:
      'صندوق الكاكاو الفاخر الأول هو صندوق استثماري مُدار باحترافية لتجارة الشوكولاتة ذات العلامة التجارية، مصمم للاستفادة من الطلب العالمي الثابت على منتجات الاستهلاك السريع. من خلال شراكات استراتيجية مع الموردين، وشبكات توزيع فعّالة، ونشر منضبط لرأس المال، يركز الصندوق على خلق قيمة مستدامة طويلة الأمد مع الحفاظ على الكفاءة التشغيلية ومخاطر محكومة.',
    description:
      'صندوق الكاكاو الفاخر الأول هو صندوق استثماري لتجارة وتوزيع الشوكولاتة ذات العلامة التجارية، يركز على توريد علامات شوكولاتة فاخرة معروفة عالميًا وتزويد أسواق التجزئة والجملة عالية الطلب. من خلال الجمع بين علاقات موردين قوية، وإدارة فعّالة للمخزون، وشبكة توزيع راسخة، صُمم الصندوق لتعظيم كفاءة رأس المال مع تحقيق نمو مستدام طويل الأمد.',
    heroMetrics: [{ label: 'حالة الصندوق', value: 'مكتمل الاكتتاب' }],
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
      { label: 'حالة الصندوق', value: 'مكتمل الاكتتاب' },
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
    status: 'متاح للاكتتاب',
    tagline:
      'صندوق السفر العالمي الأول هو صندوق استثماري مُدار باحترافية في قطاع السفر والسياحة، يركز على الاستفادة من النمو المستمر لصناعة السفر العالمية. من خلال شراكات استراتيجية مع مقدمي خدمات الضيافة، ومشغلي السفر، والشركات السياحية، يهدف الصندوق إلى خلق قيمة مستدامة طويلة الأمد من خلال فرص استثمارية متنوعة وخفيفة الأصول.',
    description:
      'صندوق استثماري في قطاع السفر والسياحة يستفيد من الشراكات الاستراتيجية، وتجارب السفر الفاخرة، ونماذج أعمال خفيفة الأصول لالتقاط نمو السفر العالمي.',
    heroMetrics: [{ label: 'حالة الصندوق', value: 'متاح للاكتتاب' }],
    highlights: [
      'شراكات استراتيجية مع علامات سفر عالمية.',
      'صناعة سفر عالية النمو.',
      'نموذج أعمال خفيف الأصول.',
      'كفاءة تشغيلية بنهج مُدار للمخاطر.',
    ],
    heroDashboard: [
      { label: 'توزيع الأرباح', value: '50% / 50%', detail: 'القبا / المستثمرون' },
      { label: 'فترة القفل', value: '1 سنة' },
      { label: 'فترة التهدئة', value: '20 يومًا' },
      { label: 'عمر الصندوق', value: '3 سنوات' },
      { label: 'العوائد الشهرية المتوقعة', value: 'حتى 2%', disclaimer: 'العوائد المتوقعة إرشادية فقط ولا تضمن الأداء المستقبلي.' },
      { label: 'رأس المال المستهدف', value: '2 مليون درهم' },
      { label: 'الحد الأدنى للاستثمار', value: '50,000 درهم' },
      { label: 'رسوم الإدارة', value: '2%' },
      { label: 'حالة الصندوق', value: 'متاح للاكتتاب' },
    ],
    heroFeatures: [
      { title: 'شراكات استراتيجية مع علامات سفر عالمية', description: 'تحالفات قوية مع شركات طيران رائدة، ومقدمي خدمات ضيافة، ومشغلي سفر، وشركات سياحية عبر أسواق دولية.' },
      { title: 'صناعة سفر عالمية عالية النمو', description: 'استفد من التعافي والتوسع المستمرين مدفوعين بالسياحة الدولية، وسفر الأعمال، وتجارب الترفيه، وزيادة الحراك العالمي.' },
      { title: 'استراتيجية استثمار خفيفة الأصول', description: 'تعرّض متنوع عبر الضيافة، وخدمات السفر، والبنية التحتية السياحية، والأعمال القائمة على التجربة دون عمليات كثيفة رأس المال.' },
      { title: 'نشر منضبط لرأس المال وإدارة المخاطر', description: 'إدارة محفظة احترافية مدعومة بشراكات استراتيجية، وكفاءة تشغيلية، ومراقبة أداء مستمرة، وضوابط مخاطر شاملة.' },
    ],
    steps: [
      { title: 'مراجعة المشغل', description: 'يتم تقييم المشغلين بناءً على حجم الحجوزات، وسجل الإيرادات، والحجوزات المستقبلية المؤكدة.' },
      { title: 'نشر التسهيل', description: 'يموّل رأس مال الصندوق رأس المال التشغيلي لما قبل الموسم — تأجير الأسطول، والتوظيف، واحتياطيات الوقود.' },
      { title: 'تشغيل موسم الذروة', description: 'يدير المشغلون جدولهم في موسم الذروة مقابل حجوزات مؤكدة.' },
      { title: 'تحصيل الإيرادات والسداد', description: 'يُحوَّل جزء من إيرادات الحجوزات إلى التسهيل طوال الموسم حتى السداد الكامل.' },
    ],
    structure: [
      { term: 'فترة القفل', detail: '1 سنة' },
      { term: 'فترة التهدئة', detail: '20 يومًا' },
      { term: 'عمر الصندوق', detail: '3 سنوات' },
    ],
    risks: [
      { title: 'آلية تحصيل الإيرادات', description: 'يتم السداد تلقائيًا مقابل إيرادات الحجوزات بدلًا من الاعتماد على دفعة واحدة مقطوعة.' },
      { title: 'حجوزات مؤكدة فقط', description: 'يتم تحديد حجم التسهيلات بناءً على حجوزات مؤكدة بالفعل، وليس طلبًا متوقعًا.' },
      { title: 'التوافق الموسمي', description: 'مدة الدورة ثابتة على موسم ذروة واحد، ما يتجنب التعرض خارج الموسم.' },
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
    status: t.status,
    tagline: t.tagline,
    description: t.description,
    heroMetrics: t.heroMetrics,
    highlights: t.highlights,
    snapshot: mergeSnapshot(pool.snapshot, t.snapshot),
    heroDashboard: mergeSnapshot(pool.heroDashboard, t.heroDashboard),
    heroFeatures: pool.heroFeatures ? mergeTitled(pool.heroFeatures, t.heroFeatures) : pool.heroFeatures,
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
