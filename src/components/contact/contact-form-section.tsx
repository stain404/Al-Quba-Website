import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { ContactForm } from '@/components/forms/contact-form'
import { FadeIn } from '@/components/motion/reveal'
import { SocialLinks } from '@/components/ui/social-links'

const detailsByLocale = {
  en: [
    {
      icon: Mail,
      label: 'Email',
      value: 'inbox@alqubainvestment.com',
      href: 'mailto:inbox@alqubainvestment.com',
    },
    {
      icon: Phone,
      label: 'Call',
      value: '+971 50 576 2203',
      href: 'tel:+971505762203',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+971 50 576 2203',
      href: 'https://wa.me/971505762203',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Office 306, Al Mezan Tower, Al Qusais, Muhaisnah 4, Dubai, UAE',
      href: 'https://www.google.com/maps/search/?api=1&query=Office+306,+Al+Mezan+Tower,+Al+Qusais,+Muhaisnah+4,+Dubai,+UAE',
    },
  ],
  ar: [
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'inbox@alqubainvestment.com',
      href: 'mailto:inbox@alqubainvestment.com',
    },
    {
      icon: Phone,
      label: 'الاتصال',
      value: '+971 50 576 2203',
      href: 'tel:+971505762203',
    },
    {
      icon: MessageCircle,
      label: 'واتساب',
      value: '+971 50 576 2203',
      href: 'https://wa.me/971505762203',
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'مكتب 306، برج الميزان، القصيص، مهيصنة 4، دبي، الإمارات العربية المتحدة',
      href: 'https://www.google.com/maps/search/?api=1&query=Office+306,+Al+Mezan+Tower,+Al+Qusais,+Muhaisnah+4,+Dubai,+UAE',
    },
  ],
} as const

const copy = {
  en: {
    eyebrow: 'Contact',
    heading: 'Reach us directly',
    officeHours: 'Office Hours',
    officeHoursValue: 'Monday – Friday, 9:00 AM – 6:00 PM GST',
    formHeading: 'Get In Touch',
    followUs: 'Follow us on',
  },
  ar: {
    eyebrow: 'اتصل بنا',
    heading: 'تواصل معنا مباشرة',
    officeHours: 'ساعات العمل',
    officeHoursValue: 'الإثنين – الجمعة، 9:00 صباحًا – 6:00 مساءً بتوقيت الخليج',
    formHeading: 'تواصل معنا',
    followUs: 'تابعنا على',
  },
} as const

/**
 * Contact / Form Section.
 * Dark ink panel carrying the heading + a plain icon/label/value contact
 * list + social row, with the form itself sitting in a white elevated
 * card on top — replaces the earlier even two-column card-grid layout
 * with the client's requested "form floats over a dark panel" look.
 */
export async function ContactFormSection() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]
  const details = detailsByLocale[locale]

  return (
    <SectionContainer surface="ink" spacing="lg">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <FadeIn className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow inverse>{c.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-sm" inverse className="max-w-md">
              {c.heading}
            </Heading>
          </div>

          <div className="flex flex-col gap-6">
            {details.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-start gap-4 focus-visible:outline-none"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border-ink text-accent-on-ink transition-colors duration-150 group-hover:border-text-inverse">
                  <detail.icon className="size-[18px]" strokeWidth={1.5} aria-hidden />
                </span>
                <div className="flex flex-col gap-0.5 pt-1.5">
                  <span className="text-body-sm font-semibold text-text-inverse">{detail.label}</span>
                  <span className="text-body-sm text-text-inverse-muted transition-colors duration-150 group-hover:text-text-inverse">
                    {detail.value}
                  </span>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border-ink text-accent-on-ink">
                <Clock className="size-[18px]" strokeWidth={1.5} aria-hidden />
              </span>
              <div className="flex flex-col gap-0.5 pt-1.5">
                <span className="text-body-sm font-semibold text-text-inverse">{c.officeHours}</span>
                <span className="text-body-sm text-text-inverse-muted">{c.officeHoursValue}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border-ink pt-8">
            <span className="text-caption uppercase tracking-wide text-text-inverse-muted">{c.followUs}</span>
            <SocialLinks />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card surface="canvas" padding="lg" className="rounded-2xl shadow-xl sm:p-10">
            <Heading as="h2" size="heading-lg" className="mb-8">
              {c.formHeading}
            </Heading>
            <ContactForm />
          </Card>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
