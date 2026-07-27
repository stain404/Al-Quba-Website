import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { ContactForm } from '@/components/forms/contact-form'
import { FadeIn } from '@/components/motion/reveal'
import { WHATSAPP_NUMBER } from '@/lib/whatsapp'

const detailsByLocale = {
  en: [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Office 306, Al Mezan Tower, Al Qusais, Muhaisnah 4, Dubai, UAE',
      href: 'https://www.google.com/maps/search/?api=1&query=Office+306,+Al+Mezan+Tower,+Al+Qusais,+Muhaisnah+4,+Dubai,+UAE',
    },
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'inbox@alqubainvestment.com',
      href: 'mailto:inbox@alqubainvestment.com',
    },
    {
      icon: Phone,
      label: 'Enquiry',
      value: '+971 50 576 2203',
      href: 'tel:+971505762203',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+971 50 576 2203',
      href: 'https://wa.me/971505762203',
    },
  ],
  ar: [
    {
      icon: MapPin,
      label: 'العنوان',
      value: 'مكتب 306، برج الميزان، القصيص، مهيصنة 4، دبي، الإمارات العربية المتحدة',
      href: 'https://www.google.com/maps/search/?api=1&query=Office+306,+Al+Mezan+Tower,+Al+Qusais,+Muhaisnah+4,+Dubai,+UAE',
    },
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'inbox@alqubainvestment.com',
      href: 'mailto:inbox@alqubainvestment.com',
    },
    {
      icon: Phone,
      label: 'الاستفسارات',
      value: '+971 50 576 2203',
      href: 'tel:+971505762203',
    },
    {
      icon: MessageCircle,
      label: 'واتساب',
      value: '+971 50 576 2203',
      href: 'https://wa.me/971505762203',
    },
  ],
} as const

const copy = {
  en: {
    eyebrow: 'Get in Touch',
    heading: 'Reach us directly',
    officeHours: 'Office Hours',
    officeHoursValue: 'Monday – Friday, 9:00 AM – 6:00 PM GST',
    whatsappCta: 'Chat with Us on WhatsApp',
  },
  ar: {
    eyebrow: 'تواصل معنا',
    heading: 'تواصل معنا مباشرة',
    officeHours: 'ساعات العمل',
    officeHoursValue: 'الإثنين – الجمعة، 9:00 صباحًا – 6:00 مساءً بتوقيت الخليج',
    whatsappCta: 'تواصل معنا عبر واتساب',
  },
} as const

/**
 * Contact / Form Section.
 * A roughly equal two-column split — contact details on the left, the
 * existing ContactForm reference implementation on the right. Distinct
 * from the narrow-label/wide-content SplitContainer pattern used on
 * About and Pools, since both columns carry comparable visual weight
 * here.
 */
export async function ContactFormSection() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]
  const details = detailsByLocale[locale]

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <FadeIn className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-sm" className="max-w-sm">
              {c.heading}
            </Heading>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {details.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
                className="block h-full focus-visible:outline-none focus-visible:shadow-focus rounded-lg"
              >
                <Card
                  surface="canvas"
                  padding="sm"
                  className="flex h-full flex-col gap-3 transition-all duration-200 ease-institutional hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy/6 text-navy">
                    <detail.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-caption uppercase tracking-wide text-text-tertiary">{detail.label}</span>
                    <span className="text-body-sm text-text-primary">{detail.value}</span>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="flex items-start gap-3 border-t border-border pt-10">
            <Clock className="mt-0.5 size-4 shrink-0 text-text-tertiary" strokeWidth={1.5} aria-hidden />
            <div className="flex flex-col gap-0.5">
              <span className="text-caption uppercase tracking-wide text-text-tertiary">{c.officeHours}</span>
              <span className="text-body-sm text-text-secondary">{c.officeHoursValue}</span>
            </div>
          </div>

          <Button variant="outline" size="lg" asChild className="w-fit">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5"
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              {c.whatsappCta}
            </a>
          </Button>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {/* Invisible mirror of the left column's heading block, sized
              identically so the form below starts at the same visual
              level as the first row of contact cards rather than the
              very top of the column. Hidden below `lg`, where the two
              columns stack and this alignment no longer applies. */}
          <div className="hidden flex-col gap-4 lg:flex" aria-hidden="true">
            <Eyebrow className="invisible">{c.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-sm" className="invisible max-w-sm">
              {c.heading}
            </Heading>
          </div>

          <FadeIn delay={0.08}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </SectionContainer>
  )
}
