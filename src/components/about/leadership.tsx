import { getLocale } from 'next-intl/server'
import Image from 'next/image'
import { Linkedin, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

interface Leader {
  name: string
  role: string
  /** Pull quote shown above the message. Omitted for leaders who haven't
   *  given us one — the message then leads the blockquote on its own. */
  quote?: string
  message: string[]
  image: string
  imageAlt: string
  linkedin?: string
}

const copy = {
  en: {
    eyebrow: 'Leadership',
    title: 'Direct messages from the people steering Al Quba',
    leaders: [
      {
        name: 'Khasim Enoli',
        role: 'Founder & CEO',
        quote: 'Invest with Confidence, Backed by Trust.',
        message: [
          'From designing ships as a Naval Architect to navigating the complexities of the Oil & Gas industry, my path has always been driven by growth, innovation, and the discipline to build things that last, a journey recognized early on with the UAE’s youngest Golden Visa award.',
          "Today, guiding Al Quba's diverse companies, my goal remains the same: to fuel success, create impact, and lead with integrity.",
        ],
        image: '/ceo.jpeg',
        imageAlt: 'Khasim Enoli, Founder & CEO of Al Quba Investment',
        linkedin: 'https://linkedin.com/in/khasim-enoli-43211734',
      },
      {
        name: 'Syed Aseel Ali Shihab',
        role: 'Managing Director',
        message: [
          'Mr. Syed Aseel Ali Shihab leads the organization with a strong focus on innovation, ethical leadership, and long-term business sustainability. Holding an MBA in Islamic Banking & Finance, he has played a pivotal role in expanding Shariah-compliant investment opportunities and strengthening international trade partnerships across the GCC.',
          'Drawing on extensive experience in product development and cross-border business operations, he combines strategic vision with practical execution to foster sustainable growth and deliver lasting value. His leadership is built on trust, collaboration, and a deep commitment to responsible business practices, enabling the organization to cultivate enduring relationships with clients, partners, and stakeholders while driving continued success in a dynamic global marketplace.',
        ],
        image: '/aseelLeadership-cVS1E6mv.webp',
        imageAlt: 'Syed Aseel Ali Shihab, Managing Director of Al Quba Investment',
      },
    ] satisfies Leader[],
  },
  ar: {
    eyebrow: 'القيادة',
    title: 'رسائل مباشرة من قيادة القبا',
    leaders: [
      {
        name: 'Khasim Enoli',
        role: 'المؤسس والرئيس التنفيذي',
        quote: 'استثمر بثقة، مدعومًا بالثقة.',
        message: [
          'من تصميم السفن كمهندس بحري، إلى التعامل مع تعقيدات قطاع النفط والغاز، كان مساري دائمًا مدفوعًا بالنمو والابتكار والانضباط اللازم لبناء أشياء تدوم، رحلة تم الاعتراف بها مبكرًا من خلال حصولي على أصغر تأشيرة ذهبية في الإمارات.',
          'واليوم، وأنا أقود شركات القبا المتنوعة، يبقى هدفي كما هو: تحقيق النجاح، وخلق الأثر، والقيادة بنزاهة.',
        ],
        image: '/ceo.jpeg',
        imageAlt: 'خاسم إينولي، مؤسس شركة القبا للاستثمار ورئيسها التنفيذي',
        linkedin: 'https://linkedin.com/in/khasim-enoli-43211734',
      },
      {
        name: 'Syed Aseel Ali Shihab',
        role: 'العضو المنتدب',
        message: [
          'يقود السيد سيد أسيل علي شهاب المؤسسة بتركيز قوي على الابتكار، والقيادة الأخلاقية، واستدامة الأعمال على المدى الطويل. وبحصوله على ماجستير إدارة الأعمال في المصرفية والتمويل الإسلامي، لعب دورًا محوريًا في توسيع فرص الاستثمار المتوافقة مع الشريعة وتعزيز شراكات التجارة الدولية عبر دول مجلس التعاون الخليجي.',
          'وانطلاقًا من خبرته الواسعة في تطوير المنتجات والعمليات التجارية العابرة للحدود، يجمع بين الرؤية الاستراتيجية والتنفيذ العملي لتعزيز النمو المستدام وتحقيق قيمة دائمة. وتقوم قيادته على الثقة والتعاون والالتزام العميق بممارسات الأعمال المسؤولة، بما يمكّن المؤسسة من بناء علاقات راسخة مع العملاء والشركاء وأصحاب المصلحة، مع مواصلة النجاح في سوق عالمي متغير.',
        ],
        image: '/aseelLeadership-cVS1E6mv.webp',
        imageAlt: 'سيد أسيل علي شهاب، العضو المنتدب في شركة القبا للاستثمار',
      },
    ] satisfies Leader[],
  },
} as const

const leadershipJsonLd = copy.en.leaders.map((leader) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: leader.name,
  jobTitle: leader.role,
  worksFor: {
    '@type': 'Organization',
    name: 'Al Quba Investment',
  },
  description: leader.message.join(' '),
}))

/**
 * About / Leadership.
 * One full-width profile row per leader, each carrying their direct
 * message as a pull quote, rather than the multi-person grid this
 * section used to hold. Order is deliberate: the Founder & CEO leads,
 * the Managing Director follows.
 */
export async function Leadership() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer id="leadership" surface="canvas" spacing="lg">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipJsonLd) }}
      />
      <SectionHeading eyebrow={c.eyebrow} title={c.title} />

      <div className="mt-16 flex flex-col">
        {c.leaders.map((leader, index) => (
          <FadeIn key={leader.name}>
            {/* border-t on every row, border-b only on the last — rows
                each carrying both edges would draw a doubled rule where
                two profiles meet. */}
            <div
              className={cn(
                'border-t border-border py-12',
                index === c.leaders.length - 1 && 'border-b'
              )}
            >
              <div className="mb-8 flex flex-col gap-1">
                <h3 className="text-heading-lg font-semibold text-text-primary">{leader.name}</h3>
                <span className="text-body-sm font-medium text-accent-ink">{leader.role}</span>
              </div>

              {/* Name/role now sits above this row rather than sharing
                  the image's column, so the photo's top edge lines up
                  with the quote mark and headline instead of floating
                  higher than it. */}
              <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px_1fr] md:gap-16">
                <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-lg bg-canvas-muted">
                  <Image
                    src={leader.image}
                    alt={leader.imageAlt}
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                      className="absolute right-2 top-2 inline-flex size-9 items-center justify-center rounded-full bg-canvas-raised/90 text-navy shadow-sm backdrop-blur transition-colors duration-150 hover:bg-canvas-raised hover:text-accent-ink"
                    >
                      <Linkedin className="size-4" aria-hidden />
                    </a>
                  )}
                </div>

                <blockquote className="border-l-2 border-accent pl-5">
                  <Quote className="mb-3 size-7 text-accent" strokeWidth={1.5} aria-hidden />
                  {leader.quote && (
                    <p className="font-display text-display-sm leading-snug text-text-primary">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  )}
                  <cite
                    className={cn(
                      'block max-w-measure text-body-md not-italic text-text-secondary',
                      leader.quote && 'mt-5'
                    )}
                  >
                    {leader.message.map((paragraph) => (
                      <p key={paragraph} className="mt-4 first:mt-0">
                        {paragraph}
                      </p>
                    ))}
                  </cite>
                  <p className="mt-6 font-display text-heading-sm italic text-accent-ink">{leader.name}</p>
                </blockquote>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  )
}
