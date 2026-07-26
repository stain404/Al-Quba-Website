import { setRequestLocale } from 'next-intl/server'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'
import { buildMetadata } from '@/lib/seo'
import { localizedPath } from '@/i18n/routing'
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld'

interface TermsPageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: TermsPageProps) {
  return buildMetadata({
    title: 'Terms & Conditions',
    description:
      'Terms and conditions governing use of the Al Quba Investment website and the information published on it.',
    path: localizedPath(params.locale, '/terms'),
  })
}

const LAST_UPDATED = { en: '24 July 2026', ar: '24 يوليو 2026' } as const

type Block = { type: 'p'; text: string } | { type: 'ul'; items: string[] }
interface Section {
  heading: string
  blocks: Block[]
}

interface TermsContent {
  eyebrow: string
  title: string
  effectiveDateLabel: string
  intro: string[]
  sections: Section[]
  privacyLinkText: string
  privacyLinkSentenceSuffix: string
  privacySentence2: string
  contactIntro: string
  contactEmailLabel: string
  contactWebsiteLabel: string
  contactClosing: string
  lastUpdatedLabel: string
  copyright: string
}

const content: Record<'en' | 'ar', TermsContent> = {
  en: {
    eyebrow: 'Legal',
    title: 'Website Terms of Use',
    effectiveDateLabel: 'Effective Date',
    intro: [
      'Welcome to the official website of Al Quba Investment Group ("Al Quba", "we", "our", or "us").',
      'These Website Terms of Use ("Terms") govern your access to and use of the Al Quba Investment Group website, including all pages, content, features, and materials made available through it.',
      'By accessing or using this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue using the website.',
    ],
    sections: [
      {
        heading: '1. About This Website',
        blocks: [
          { type: 'p', text: 'The Al Quba Investment Group website has been created to provide information about our company, businesses, investment philosophy, ecosystem, and areas of operation. It also serves as a platform for sharing corporate news, insights, educational content, career opportunities, and contact information.' },
          { type: 'p', text: 'This website is intended for informational purposes only. It is not an investment platform and does not facilitate investment transactions, account creation, payment processing, or portfolio management.' },
          { type: 'p', text: 'Where applicable, this website may provide links to a separate Investor Portal or other third-party platforms. Any investor onboarding, identity verification, subscription process, investment agreements, or portfolio management activities are conducted exclusively through those dedicated platforms and are governed by their own terms, policies, and legal documentation.' },
        ],
      },
      {
        heading: '2. Acceptance of These Terms',
        blocks: [
          { type: 'p', text: 'By continuing to browse or use this website, you agree to comply with these Terms and all applicable laws and regulations.' },
          { type: 'p', text: 'If you are accessing this website on behalf of a company or other legal entity, you confirm that you have the authority to bind that organisation to these Terms.' },
          { type: 'p', text: 'If you do not agree with these Terms, you should not access or use this website.' },
        ],
      },
      {
        heading: '3. Permitted Website Use',
        blocks: [
          { type: 'p', text: 'You may use this website solely for lawful, personal, informational, or legitimate business purposes.' },
          { type: 'p', text: 'You agree that you will not:' },
          { type: 'ul', items: [
            'Use the website in violation of any applicable law or regulation.',
            'Attempt to gain unauthorized access to any part of the website, its servers, databases, or connected systems.',
            'Introduce viruses, malware, or other harmful technologies.',
            'Interfere with the operation, security, or availability of the website.',
            'Copy, reproduce, distribute, or commercially exploit website content without prior written permission.',
            'Misrepresent your identity or falsely claim an affiliation with Al Quba Investment Group.',
            'Use automated software, bots, or scraping tools to extract content or data from the website without our prior written consent.',
          ] },
          { type: 'p', text: 'We reserve the right to restrict or terminate access to users who misuse the website or violate these Terms.' },
        ],
      },
      {
        heading: '4. Intellectual Property Rights',
        blocks: [
          { type: 'p', text: 'Unless otherwise stated, all content published on this website is owned by or licensed to Al Quba Investment Group and is protected by applicable intellectual property laws.' },
          { type: 'p', text: 'This includes, but is not limited to:' },
          { type: 'ul', items: [
            'Company names and branding',
            'Logos and trademarks',
            'Website design and layout',
            'Graphics and illustrations',
            'Images and videos',
            'Reports, brochures, and publications',
            'Articles, written content, and educational materials',
            'Icons, animations, and visual assets',
          ] },
          { type: 'p', text: 'You may view, download, or print content solely for your personal, non-commercial use, provided that all copyright and proprietary notices remain intact.' },
          { type: 'p', text: 'You may not reproduce, modify, distribute, publish, transmit, display, create derivative works from, or commercially exploit any content from this website without obtaining our prior written permission.' },
          { type: 'p', text: 'Unauthorised use of our intellectual property may result in legal action.' },
        ],
      },
      {
        heading: '5. Website Content & Accuracy',
        blocks: [
          { type: 'p', text: 'We strive to ensure that the information presented on this website is accurate, current, and prepared with reasonable care.' },
          { type: 'p', text: 'However, the content is provided for general informational purposes only and may be updated, modified, or removed without prior notice.' },
          { type: 'p', text: 'While we make reasonable efforts to maintain accurate information, Al Quba Investment Group does not guarantee that all content will always be complete, current, accurate, or free from errors.' },
          { type: 'p', text: 'Visitors should not rely solely on information published on this website when making business, legal, financial, or investment decisions. Independent verification and professional advice should be obtained where appropriate.' },
          { type: 'p', text: 'Nothing on this website should be interpreted as creating any contractual obligation unless expressly stated in a separate written agreement.' },
        ],
      },
      {
        heading: '6. No Investment Advice',
        blocks: [
          { type: 'p', text: 'The information provided on this website is intended solely for general informational purposes and should not be interpreted as investment, financial, legal, tax, or professional advice.' },
          { type: 'p', text: 'Nothing contained on this website constitutes, or should be construed as:' },
          { type: 'ul', items: [
            'an offer to sell or issue securities or financial products;',
            'a solicitation or invitation to invest;',
            'a recommendation to buy, sell, or hold any investment;',
            'investment, financial, legal, accounting, or tax advice; or',
            'a guarantee of future performance or investment returns.',
          ] },
          { type: 'p', text: 'Any references to investment strategies, sectors, projects, case studies, or opportunities are provided to illustrate the activities and capabilities of Al Quba Investment Group and should not be relied upon as the basis for making an investment decision.' },
          { type: 'p', text: 'Investment opportunities, where available, are subject to separate eligibility requirements, due diligence procedures, contractual documentation, and applicable laws. Individuals considering an investment should review the relevant investment documentation and obtain independent professional advice before making any financial commitment.' },
          { type: 'p', text: 'Al Quba Investment Group accepts no responsibility for investment decisions made based solely on information published on this website.' },
        ],
      },
      {
        heading: '7. Third-Party Links',
        blocks: [
          { type: 'p', text: 'For your convenience, this website may contain links to third-party websites, applications, or services, including the Al Quba Investor Portal, social media platforms, partner websites, and other external resources.' },
          { type: 'p', text: 'These links are provided solely as a convenience and do not imply any endorsement, approval, or recommendation of the third-party content, products, or services.' },
          { type: 'p', text: "Once you leave this website, your use of any third-party website is governed by that website's own terms of use, privacy policy, and other applicable policies. Al Quba Investment Group has no control over, and accepts no responsibility for, the content, security, availability, or privacy practices of external websites." },
          { type: 'p', text: 'Visitors access third-party websites entirely at their own risk.' },
        ],
      },
      {
        heading: '8. Limitation of Liability',
        blocks: [
          { type: 'p', text: 'To the fullest extent permitted by applicable law, Al Quba Investment Group shall not be liable for any direct, indirect, incidental, consequential, special, or punitive loss or damage arising from or related to:' },
          { type: 'ul', items: [
            'your access to or use of this website;',
            'your inability to access the website;',
            'reliance on any information published on the website;',
            'inaccuracies, omissions, or outdated information;',
            'interruptions, delays, or technical failures;',
            'viruses, malicious software, or other harmful components transmitted through the website; or',
            'the use of, or reliance upon, any third-party websites linked from this website.',
          ] },
          { type: 'p', text: 'While we make reasonable efforts to maintain the availability, security, and accuracy of the website, we do not guarantee that the website will always operate without interruption, error, or delay.' },
          { type: 'p', text: 'Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.' },
        ],
      },
      {
        heading: '9. Indemnity',
        blocks: [
          { type: 'p', text: 'You agree to indemnify, defend, and hold harmless Al Quba Investment Group, its directors, officers, employees, affiliates, and representatives from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or relating to:' },
          { type: 'ul', items: [
            'your breach of these Terms;',
            'your misuse of this website;',
            'your violation of any applicable law or regulation; or',
            'your infringement of the rights of any third party.',
          ] },
          { type: 'p', text: 'This obligation survives the termination of your use of the website.' },
        ],
      },
    ],
    privacyLinkText: 'Privacy Policy',
    privacyLinkSentenceSuffix: ', which explains how we collect, use, store, disclose, and protect personal information obtained through the website.',
    privacySentence2: 'By using this website, you acknowledge that you have read and understood our Privacy Policy.',
    contactIntro: 'If you have any questions regarding these Website Terms of Use, please contact us using the contact details available on our website.',
    contactEmailLabel: 'Email',
    contactWebsiteLabel: 'Website',
    contactClosing: 'We will make reasonable efforts to respond to your enquiry in a timely manner.',
    lastUpdatedLabel: 'Last Updated',
    copyright: '© 2026 Al Quba Investment Group. All Rights Reserved.',
  },
  ar: {
    eyebrow: 'قانوني',
    title: 'شروط استخدام الموقع',
    effectiveDateLabel: 'تاريخ السريان',
    intro: [
      'مرحبًا بكم في الموقع الإلكتروني الرسمي لمجموعة القبا للاستثمار ("القبا"، أو "نحن"، أو "لنا").',
      'تحكم شروط استخدام الموقع هذه ("الشروط") وصولك إلى موقع مجموعة القبا للاستثمار واستخدامك له، بما في ذلك جميع الصفحات والمحتوى والميزات والمواد المتاحة من خلاله.',
      'من خلال الوصول إلى هذا الموقع أو استخدامه، فإنك تقر بأنك قرأت هذه الشروط وفهمتها ووافقت على الالتزام بها. إذا كنت لا توافق على أي جزء من هذه الشروط، يُرجى التوقف عن استخدام الموقع.',
    ],
    sections: [
      {
        heading: '1. عن هذا الموقع',
        blocks: [
          { type: 'p', text: 'تم إنشاء موقع مجموعة القبا للاستثمار لتقديم معلومات حول شركتنا وأعمالنا وفلسفتنا الاستثمارية ومنظومتنا ومجالات عملنا. كما يُعد منصة لمشاركة الأخبار المؤسسية والرؤى والمحتوى التعليمي وفرص العمل ومعلومات التواصل.' },
          { type: 'p', text: 'هذا الموقع مخصص لأغراض إعلامية فقط. وهو ليس منصة استثمارية ولا يُسهّل معاملات الاستثمار أو إنشاء الحسابات أو معالجة المدفوعات أو إدارة المحافظ الاستثمارية.' },
          { type: 'p', text: 'عند الاقتضاء، قد يوفر هذا الموقع روابط لبوابة مستثمرين منفصلة أو منصات أخرى تابعة لجهات خارجية. تُجرى جميع عمليات تأهيل المستثمرين والتحقق من الهوية وإجراءات الاشتراك واتفاقيات الاستثمار وأنشطة إدارة المحافظ حصريًا عبر تلك المنصات المخصصة، وتخضع لشروطها وسياساتها ووثائقها القانونية الخاصة بها.' },
        ],
      },
      {
        heading: '2. الموافقة على هذه الشروط',
        blocks: [
          { type: 'p', text: 'من خلال الاستمرار في تصفح هذا الموقع أو استخدامه، فإنك توافق على الالتزام بهذه الشروط وجميع القوانين واللوائح المعمول بها.' },
          { type: 'p', text: 'إذا كنت تصل إلى هذا الموقع نيابة عن شركة أو كيان قانوني آخر، فإنك تؤكد أن لديك الصلاحية لإلزام تلك الجهة بهذه الشروط.' },
          { type: 'p', text: 'إذا كنت لا توافق على هذه الشروط، فلا ينبغي عليك الوصول إلى هذا الموقع أو استخدامه.' },
        ],
      },
      {
        heading: '3. الاستخدام المسموح به للموقع',
        blocks: [
          { type: 'p', text: 'يجوز لك استخدام هذا الموقع فقط لأغراض قانونية أو شخصية أو إعلامية أو تجارية مشروعة.' },
          { type: 'p', text: 'أنت توافق على عدم القيام بما يلي:' },
          { type: 'ul', items: [
            'استخدام الموقع بما يخالف أي قانون أو لائحة معمول بها.',
            'محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو خوادمه أو قواعد بياناته أو الأنظمة المتصلة به.',
            'إدخال فيروسات أو برمجيات خبيثة أو أي تقنيات ضارة أخرى.',
            'التدخل في تشغيل الموقع أو أمانه أو توفره.',
            'نسخ محتوى الموقع أو إعادة إنتاجه أو توزيعه أو استغلاله تجاريًا دون إذن كتابي مسبق.',
            'تحريف هويتك أو الادعاء زورًا بالانتماء إلى مجموعة القبا للاستثمار.',
            'استخدام برامج آلية أو روبوتات أو أدوات استخراج بيانات لجمع محتوى أو بيانات من الموقع دون موافقتنا الكتابية المسبقة.',
          ] },
          { type: 'p', text: 'نحتفظ بالحق في تقييد أو إنهاء وصول المستخدمين الذين يسيئون استخدام الموقع أو يخالفون هذه الشروط.' },
        ],
      },
      {
        heading: '4. حقوق الملكية الفكرية',
        blocks: [
          { type: 'p', text: 'ما لم يُذكر خلاف ذلك، فإن جميع المحتويات المنشورة على هذا الموقع مملوكة لمجموعة القبا للاستثمار أو مرخصة لها، وهي محمية بموجب قوانين الملكية الفكرية المعمول بها.' },
          { type: 'p', text: 'ويشمل ذلك، على سبيل المثال لا الحصر:' },
          { type: 'ul', items: [
            'أسماء الشركة والهوية التجارية',
            'الشعارات والعلامات التجارية',
            'تصميم الموقع وتخطيطه',
            'الرسومات والتوضيحات',
            'الصور ومقاطع الفيديو',
            'التقارير والكتيبات والمنشورات',
            'المقالات والمحتوى المكتوب والمواد التعليمية',
            'الأيقونات والرسوم المتحركة والعناصر المرئية',
          ] },
          { type: 'p', text: 'يجوز لك عرض المحتوى أو تنزيله أو طباعته لاستخدامك الشخصي غير التجاري فقط، بشرط بقاء جميع إشعارات حقوق النشر والملكية سليمة.' },
          { type: 'p', text: 'لا يجوز لك إعادة إنتاج أي محتوى من هذا الموقع أو تعديله أو توزيعه أو نشره أو نقله أو عرضه أو إنشاء أعمال مشتقة منه أو استغلاله تجاريًا دون الحصول على إذن كتابي مسبق منا.' },
          { type: 'p', text: 'قد يؤدي الاستخدام غير المصرح به لملكيتنا الفكرية إلى اتخاذ إجراءات قانونية.' },
        ],
      },
      {
        heading: '5. محتوى الموقع ودقته',
        blocks: [
          { type: 'p', text: 'نسعى جاهدين لضمان أن تكون المعلومات المعروضة على هذا الموقع دقيقة وحديثة ومُعدة بعناية معقولة.' },
          { type: 'p', text: 'ومع ذلك، يُقدَّم المحتوى لأغراض إعلامية عامة فقط، وقد يتم تحديثه أو تعديله أو إزالته دون إشعار مسبق.' },
          { type: 'p', text: 'وعلى الرغم من بذلنا جهودًا معقولة للحفاظ على دقة المعلومات، فإن مجموعة القبا للاستثمار لا تضمن أن يكون جميع المحتوى دائمًا كاملاً أو محدثًا أو دقيقًا أو خاليًا من الأخطاء.' },
          { type: 'p', text: 'ينبغي على الزوار عدم الاعتماد كليًا على المعلومات المنشورة على هذا الموقع عند اتخاذ قرارات تجارية أو قانونية أو مالية أو استثمارية. وينبغي الحصول على تحقق مستقل ومشورة مهنية عند الاقتضاء.' },
          { type: 'p', text: 'لا ينبغي تفسير أي محتوى في هذا الموقع على أنه ينشئ أي التزام تعاقدي ما لم يُنص على ذلك صراحة في اتفاقية كتابية منفصلة.' },
        ],
      },
      {
        heading: '6. عدم تقديم مشورة استثمارية',
        blocks: [
          { type: 'p', text: 'المعلومات الواردة في هذا الموقع مخصصة لأغراض إعلامية عامة فقط، ولا ينبغي تفسيرها على أنها مشورة استثمارية أو مالية أو قانونية أو ضريبية أو مهنية.' },
          { type: 'p', text: 'لا يشكّل أي محتوى في هذا الموقع، ولا ينبغي تفسيره على أنه:' },
          { type: 'ul', items: [
            'عرضًا لبيع أو إصدار أوراق مالية أو منتجات مالية؛',
            'التماسًا أو دعوة للاستثمار؛',
            'توصية بشراء أو بيع أو الاحتفاظ بأي استثمار؛',
            'مشورة استثمارية أو مالية أو قانونية أو محاسبية أو ضريبية؛ أو',
            'ضمانًا للأداء المستقبلي أو عوائد الاستثمار.',
          ] },
          { type: 'p', text: 'أي إشارات إلى استراتيجيات استثمارية أو قطاعات أو مشاريع أو دراسات حالة أو فرص، تُقدَّم لتوضيح أنشطة وقدرات مجموعة القبا للاستثمار، ولا ينبغي الاعتماد عليها كأساس لاتخاذ قرار استثماري.' },
          { type: 'p', text: 'تخضع الفرص الاستثمارية، عند توفرها، لمتطلبات أهلية منفصلة وإجراءات عناية واجبة ووثائق تعاقدية والقوانين المعمول بها. وينبغي على الأفراد الراغبين في الاستثمار مراجعة الوثائق الاستثمارية ذات الصلة والحصول على مشورة مهنية مستقلة قبل الالتزام بأي التزام مالي.' },
          { type: 'p', text: 'لا تتحمل مجموعة القبا للاستثمار أي مسؤولية عن القرارات الاستثمارية المتخذة بالاعتماد فقط على المعلومات المنشورة على هذا الموقع.' },
        ],
      },
      {
        heading: '7. روابط الجهات الخارجية',
        blocks: [
          { type: 'p', text: 'لراحتك، قد يحتوي هذا الموقع على روابط لمواقع إلكترونية أو تطبيقات أو خدمات تابعة لجهات خارجية، بما في ذلك بوابة مستثمري القبا ومنصات التواصل الاجتماعي ومواقع الشركاء وموارد خارجية أخرى.' },
          { type: 'p', text: 'تُقدَّم هذه الروابط لغرض التسهيل فقط، ولا تعني أي تأييد أو موافقة أو توصية بمحتوى أو منتجات أو خدمات تلك الجهات الخارجية.' },
          { type: 'p', text: 'بمجرد مغادرتك لهذا الموقع، يخضع استخدامك لأي موقع تابع لجهة خارجية لشروط الاستخدام وسياسة الخصوصية والسياسات الأخرى الخاصة بذلك الموقع. ولا تملك مجموعة القبا للاستثمار أي سيطرة على محتوى أو أمان أو توفر أو ممارسات الخصوصية الخاصة بالمواقع الخارجية، ولا تتحمل أي مسؤولية عنها.' },
          { type: 'p', text: 'يتحمل الزوار كامل المسؤولية عند وصولهم إلى مواقع الجهات الخارجية.' },
        ],
      },
      {
        heading: '8. تحديد المسؤولية',
        blocks: [
          { type: 'p', text: 'إلى أقصى حد يسمح به القانون المعمول به، لا تتحمل مجموعة القبا للاستثمار المسؤولية عن أي خسارة أو ضرر مباشر أو غير مباشر أو عرضي أو تبعي أو خاص أو تأديبي ينشأ عن أو يتعلق بما يلي:' },
          { type: 'ul', items: [
            'وصولك إلى هذا الموقع أو استخدامه؛',
            'عدم قدرتك على الوصول إلى الموقع؛',
            'الاعتماد على أي معلومات منشورة على الموقع؛',
            'عدم الدقة أو الإغفال أو المعلومات القديمة؛',
            'الانقطاعات أو التأخيرات أو الأعطال التقنية؛',
            'الفيروسات أو البرمجيات الخبيثة أو أي عناصر ضارة أخرى تُنقل عبر الموقع؛ أو',
            'استخدام أو الاعتماد على أي مواقع تابعة لجهات خارجية مرتبطة بهذا الموقع.',
          ] },
          { type: 'p', text: 'وعلى الرغم من بذلنا جهودًا معقولة للحفاظ على توفر الموقع وأمانه ودقته، فإننا لا نضمن أن يعمل الموقع دائمًا دون انقطاع أو خطأ أو تأخير.' },
          { type: 'p', text: 'لا يستثني أو يحد أي بند في هذه الشروط من المسؤولية في الحالات التي يحظر فيها القانون المعمول به مثل هذا الاستثناء أو التحديد.' },
        ],
      },
      {
        heading: '9. التعويض',
        blocks: [
          { type: 'p', text: 'أنت توافق على تعويض مجموعة القبا للاستثمار ومديريها ومسؤوليها وموظفيها والشركات التابعة لها وممثليها والدفاع عنهم وإبرائهم من أي مطالبات أو التزامات أو أضرار أو خسائر أو تكاليف أو نفقات (بما في ذلك أتعاب المحاماة المعقولة) الناشئة عن أو المتعلقة بما يلي:' },
          { type: 'ul', items: [
            'مخالفتك لهذه الشروط؛',
            'إساءة استخدامك لهذا الموقع؛',
            'مخالفتك لأي قانون أو لائحة معمول بها؛ أو',
            'انتهاكك لحقوق أي طرف ثالث.',
          ] },
          { type: 'p', text: 'يظل هذا الالتزام ساريًا بعد توقفك عن استخدام الموقع.' },
        ],
      },
    ],
    privacyLinkText: 'سياسة الخصوصية',
    privacyLinkSentenceSuffix: '، التي توضح كيفية جمعنا واستخدامنا وتخزيننا والإفصاح عن وحماية المعلومات الشخصية التي نحصل عليها من خلال الموقع.',
    privacySentence2: 'باستخدامك لهذا الموقع، فإنك تقر بأنك قرأت سياسة الخصوصية الخاصة بنا وفهمتها.',
    contactIntro: 'إذا كانت لديك أي أسئلة بخصوص شروط استخدام الموقع هذه، يُرجى التواصل معنا باستخدام بيانات التواصل المتاحة على موقعنا.',
    contactEmailLabel: 'البريد الإلكتروني',
    contactWebsiteLabel: 'الموقع الإلكتروني',
    contactClosing: 'سنبذل جهودًا معقولة للرد على استفسارك في أقرب وقت ممكن.',
    lastUpdatedLabel: 'آخر تحديث',
    copyright: '© 2026 مجموعة القبا للاستثمار. جميع الحقوق محفوظة.',
  },
}

/**
 * Website Terms of Use — client-supplied legal copy (effective 24 July
 * 2026), in English and Arabic. Governs the marketing site only;
 * investor onboarding / subscription agreements are a separate document
 * handled through the Investor Portal. Privacy and Contact sections (10
 * and 10 respectively in the source doc) are rendered separately below
 * since they carry links/contact details rather than plain paragraphs.
 */
export default function TermsPage({ params }: TermsPageProps) {
  setRequestLocale(params.locale)
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as 'en' | 'ar'
  const c = content[locale]
  const privacyHeading = locale === 'ar' ? '10. الخصوصية' : '10. Privacy'
  const changesHeading = locale === 'ar' ? '11. التعديلات على هذه الشروط' : '11. Changes to These Terms'
  const changesParas = locale === 'ar'
    ? [
        'يجوز لمجموعة القبا للاستثمار تحديث أو مراجعة هذه الشروط من وقت لآخر لتعكس التغييرات في عملياتنا التجارية أو التزاماتنا القانونية أو وظائف الموقع.',
        'سيتم دائمًا نشر أحدث نسخة من هذه الشروط على هذا الموقع مع تاريخ السريان المحدث.',
        'يُعد استمرارك في استخدام الموقع بعد نشر الشروط المعدَّلة بمثابة قبول منك لتلك التغييرات.',
      ]
    : [
        'Al Quba Investment Group may update or revise these Terms from time to time to reflect changes in our business operations, legal obligations, or website functionality.',
        'The most current version will always be published on this website with the updated effective date.',
        'Your continued use of the website following the publication of revised Terms constitutes your acceptance of those changes.',
      ]
  const govLawHeading = locale === 'ar' ? '12. القانون الحاكم' : '12. Governing Law'
  const govLawParas = locale === 'ar'
    ? [
        'تخضع هذه الشروط وتُفسَّر وفقًا لقوانين دولة الإمارات العربية المتحدة.',
        'يخضع أي نزاع ينشأ عن أو يتعلق بهذه الشروط أو استخدامك لهذا الموقع للاختصاص القضائي الحصري للمحاكم المختصة في دولة الإمارات العربية المتحدة، ما لم يقتضِ القانون المعمول به خلاف ذلك.',
      ]
    : [
        'These Terms shall be governed by and interpreted in accordance with the laws of the United Arab Emirates.',
        'Any dispute arising out of or in connection with these Terms or your use of this website shall be subject to the exclusive jurisdiction of the competent courts of the United Arab Emirates, unless otherwise required by applicable law.',
      ]
  const contactHeading = locale === 'ar' ? '13. تواصل معنا' : '13. Contact Us'

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms' }]} />
      <Navbar />
      <main>
        <SectionContainer surface="ink" spacing="lg" as="header">
          <FadeIn className="flex max-w-2xl flex-col gap-6">
            <Eyebrow inverse>{c.eyebrow}</Eyebrow>
            <Heading as="h1" size="display-md" inverse>
              {c.title}
            </Heading>
            <p className="text-body-md text-text-inverse-muted">
              {c.effectiveDateLabel}: {LAST_UPDATED[locale]}
            </p>
          </FadeIn>
        </SectionContainer>

        <SectionContainer surface="canvas" spacing="lg">
          <FadeIn className="mx-auto flex max-w-3xl flex-col gap-12">
            {c.intro.map((para) => (
              <p key={para} className="text-body-md text-text-secondary">{para}</p>
            ))}

            {c.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <Heading as="h2" size="heading-lg">{section.heading}</Heading>
                {section.blocks.map((block, i) =>
                  block.type === 'p' ? (
                    <p key={i} className="text-body-md text-text-secondary">{block.text}</p>
                  ) : (
                    <ul key={i} className="flex flex-col gap-2 pl-5 text-body-md text-text-secondary rtl:pl-0 rtl:pr-5">
                      {block.items.map((item) => (
                        <li key={item} className="list-disc">{item}</li>
                      ))}
                    </ul>
                  )
                )}
              </section>
            ))}

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">{privacyHeading}</Heading>
              <p className="text-body-md text-text-secondary">
                {locale === 'ar' ? 'يخضع استخدامك لهذا الموقع أيضًا لـ' : 'Your use of this website is also governed by our '}
                <a href="/privacy" className="text-navy underline underline-offset-4">
                  {c.privacyLinkText}
                </a>
                {c.privacyLinkSentenceSuffix}
              </p>
              <p className="text-body-md text-text-secondary">{c.privacySentence2}</p>
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">{changesHeading}</Heading>
              {changesParas.map((para) => (
                <p key={para} className="text-body-md text-text-secondary">{para}</p>
              ))}
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">{govLawHeading}</Heading>
              {govLawParas.map((para) => (
                <p key={para} className="text-body-md text-text-secondary">{para}</p>
              ))}
            </section>

            <section className="flex flex-col gap-4">
              <Heading as="h2" size="heading-lg">{contactHeading}</Heading>
              <p className="text-body-md text-text-secondary">{c.contactIntro}</p>
              <p className="text-body-md text-text-secondary">
                {locale === 'ar' ? 'مجموعة القبا للاستثمار' : 'Al Quba Investment Group'}
                <br />
                {c.contactEmailLabel}:{' '}
                <a href="mailto:inbox@alqubainvestment.com" dir="ltr" className="text-navy underline underline-offset-4">
                  inbox@alqubainvestment.com
                </a>
                <br />
                {c.contactWebsiteLabel}:{' '}
                <a href="https://www.alquba.com" dir="ltr" className="text-navy underline underline-offset-4">
                  www.alquba.com
                </a>
              </p>
              <p className="text-body-md text-text-secondary">{c.contactClosing}</p>
            </section>

            <p className="text-body-sm text-text-tertiary">
              {c.lastUpdatedLabel}: {LAST_UPDATED[locale]}
              <br />
              {c.copyright}
            </p>
          </FadeIn>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}
