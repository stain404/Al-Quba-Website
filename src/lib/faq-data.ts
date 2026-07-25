export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'What is the minimum investment to work with Al Quba?',
    answer:
      'Minimum commitments vary by pool. Institutional and family office mandates are structured individually based on objectives and timeline.',
  },
  {
    question: 'How is my capital protected within a pool?',
    answer:
      'Every pool is collateralized against a physical trade cycle — a purchase order, an offtake contract, or confirmed booking revenue — rather than a general business thesis. Details are outlined on each pool\'s dedicated page.',
  },
  {
    question: 'How often will I receive reporting?',
    answer:
      'Pool participants receive quarterly capital statements, plus a report at the close of each trade cycle. Institutional mandates can request a custom reporting cadence.',
  },
  {
    question: 'Are you regulated?',
    answer:
      'Al Quba Investment LLC is registered in the Dubai International Financial Centre (DIFC), with governance aligned to DFSA standards. Full regulatory disclosures are available to qualified investors on request.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Standard AML/KYC onboarding typically completes within 3–5 business days once documentation is received, ahead of your first capital commitment.',
  },
]

/** Arabic translations, same order as `faqs` above, merged in by index. */
const faqTranslationsAr: Faq[] = [
  {
    question: 'ما هو الحد الأدنى للاستثمار للعمل مع القبا؟',
    answer:
      'تختلف الالتزامات الدنيا حسب الصندوق. تُهيكَل تفويضات المؤسسات ومكاتب العائلات بشكل فردي بناءً على الأهداف والجدول الزمني.',
  },
  {
    question: 'كيف يتم حماية رأس مالي داخل الصندوق؟',
    answer:
      'كل صندوق مضمون مقابل دورة تجارية فعلية — أمر شراء، أو عقد شراء آجل، أو إيرادات حجز مؤكدة — بدلًا من فرضية عمل عامة. التفاصيل موضحة في الصفحة المخصصة لكل صندوق.',
  },
  {
    question: 'كم مرة سأتلقى التقارير؟',
    answer:
      'يتلقى المشاركون في الصناديق بيانات رأس مال ربع سنوية، بالإضافة إلى تقرير عند إغلاق كل دورة تجارية. يمكن لتفويضات المؤسسات طلب وتيرة تقارير مخصصة.',
  },
  {
    question: 'هل أنتم جهة منظّمة ومرخّصة؟',
    answer:
      'شركة القبا للاستثمار ذ.م.م مسجلة في مركز دبي المالي العالمي (DIFC)، بحوكمة متوافقة مع معايير سلطة دبي للخدمات المالية (DFSA). الإفصاحات التنظيمية الكاملة متاحة للمستثمرين المؤهلين عند الطلب.',
  },
  {
    question: 'كم يستغرق التأهيل؟',
    answer:
      'يكتمل التأهيل القياسي لمكافحة غسل الأموال ومعرفة العميل (AML/KYC) عادةً خلال 3–5 أيام عمل بعد استلام المستندات، وقبل التزامك الأول برأس المال.',
  },
]

/** Locale-aware FAQ list, same pattern as insights/pools/sectors overlays. */
export function getFaqs(locale: string): Faq[] {
  if (locale !== 'ar') return faqs
  return faqs.map((faq, i) => faqTranslationsAr[i] ?? faq)
}
