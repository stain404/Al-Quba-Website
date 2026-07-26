export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'What sectors does Al Quba invest in?',
    answer:
      'Al Quba Investment operates across a diversified portfolio of high-growth industries, including Global Trade, Shipping & Logistics, Real Estate, Technology, Education, Travel & Tourism, and Strategic Investments. We focus on sectors with strong market fundamentals and long-term value creation potential.',
  },
  {
    question: 'How does Al Quba strive to deliver sustainable returns?',
    answer:
      'Our investment approach is built on thorough market research, disciplined risk management, and strategic diversification. By focusing on real-world assets, established businesses, and carefully selected opportunities, we aim to generate sustainable long-term value while managing investment risk.',
  },
  {
    question: 'Can individual investors invest with Al Quba?',
    answer:
      'Yes. Al Quba welcomes both individual and institutional investors. We offer investment opportunities designed to accommodate different investment objectives, risk profiles, and long-term financial goals, subject to applicable eligibility requirements.',
  },
  {
    question: 'How are investment returns determined?',
    answer:
      'Investment returns are based on the performance of the underlying assets or investment opportunities. While projections may be provided for illustrative purposes, actual returns depend on market conditions, business performance, and other economic factors. Past performance does not guarantee future results.',
  },
  {
    question: 'How do I get started with Al Quba Investment?',
    answer:
      'Getting started is simple. Contact our investment team through our website or visit one of our offices to discuss your investment objectives. Our team will guide you through the available opportunities, onboarding process, and required documentation.',
  },
  {
    question: 'Does Al Quba provide investment advisory services?',
    answer:
      'Yes. Our experienced team provides professional investment insights and strategic guidance to help investors better understand opportunities, assess risks, and make informed decisions aligned with their financial objectives.',
  },
]

/** Arabic translations, same order as `faqs` above, merged in by index. */
const faqTranslationsAr: Faq[] = [
  {
    question: 'في أي قطاعات تستثمر القبا؟',
    answer:
      'تعمل شركة القبا للاستثمار عبر محفظة متنوعة من الصناعات عالية النمو، بما في ذلك التجارة العالمية، الشحن والخدمات اللوجستية، العقارات، التكنولوجيا، التعليم، السفر والسياحة، والاستثمارات الاستراتيجية. نركز على القطاعات ذات الأساسيات السوقية القوية وإمكانات خلق القيمة على المدى الطويل.',
  },
  {
    question: 'كيف تسعى القبا لتحقيق عوائد مستدامة؟',
    answer:
      'يقوم نهجنا الاستثماري على بحث سوقي شامل، وإدارة مخاطر منضبطة، وتنويع استراتيجي. من خلال التركيز على أصول واقعية، وأعمال راسخة، وفرص مختارة بعناية، نهدف إلى تحقيق قيمة مستدامة طويلة الأمد مع إدارة مخاطر الاستثمار.',
  },
  {
    question: 'هل يمكن للمستثمرين الأفراد الاستثمار مع القبا؟',
    answer:
      'نعم. ترحب القبا بالمستثمرين الأفراد والمؤسسيين على حد سواء. نقدّم فرصًا استثمارية مصممة لتناسب مختلف الأهداف الاستثمارية، ومستويات المخاطر، والأهداف المالية طويلة الأمد، وذلك وفق متطلبات الأهلية المعمول بها.',
  },
  {
    question: 'كيف تُحدَّد عوائد الاستثمار؟',
    answer:
      'تعتمد عوائد الاستثمار على أداء الأصول أو الفرص الاستثمارية الأساسية. وبينما قد تُقدَّم توقعات لأغراض توضيحية، فإن العوائد الفعلية تعتمد على ظروف السوق، وأداء الأعمال، وعوامل اقتصادية أخرى. الأداء السابق لا يضمن نتائج مستقبلية.',
  },
  {
    question: 'كيف أبدأ الاستثمار مع القبا؟',
    answer:
      'البدء أمر بسيط. تواصل مع فريق الاستثمار لدينا عبر موقعنا الإلكتروني أو قم بزيارة أحد مكاتبنا لمناقشة أهدافك الاستثمارية. سيرشدك فريقنا خلال الفرص المتاحة، وعملية التأهيل، والمستندات المطلوبة.',
  },
  {
    question: 'هل تقدّم القبا خدمات استشارية استثمارية؟',
    answer:
      'نعم. يقدّم فريقنا ذو الخبرة رؤى استثمارية احترافية وتوجيهًا استراتيجيًا لمساعدة المستثمرين على فهم الفرص بشكل أفضل، وتقييم المخاطر، واتخاذ قرارات مدروسة تتماشى مع أهدافهم المالية.',
  },
]

/** Locale-aware FAQ list, same pattern as insights/pools/sectors overlays. */
export function getFaqs(locale: string): Faq[] {
  if (locale !== 'ar') return faqs
  return faqs.map((faq, i) => faqTranslationsAr[i] ?? faq)
}
