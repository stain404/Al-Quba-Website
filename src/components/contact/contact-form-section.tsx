import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { ContactForm } from '@/components/forms/contact-form'
import { FadeIn } from '@/components/motion/reveal'

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Office 306, Al Mezan Tower, Dubai, UAE',
    href: 'https://www.google.com/maps/search/?api=1&query=Office+306,+Al+Mezan+Tower,+Dubai,+UAE',
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
]

/**
 * Contact / Form Section.
 * A roughly equal two-column split — contact details on the left, the
 * existing ContactForm reference implementation on the right. Distinct
 * from the narrow-label/wide-content SplitContainer pattern used on
 * About and Pools, since both columns carry comparable visual weight
 * here.
 */
export function ContactFormSection() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <FadeIn className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Get in Touch</Eyebrow>
            <Heading as="h2" size="display-sm" className="max-w-sm">
              Reach us directly
            </Heading>
          </div>

          <dl className="flex flex-col gap-8">
            {details.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy/6 text-navy">
                  <detail.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-caption uppercase tracking-wide text-text-tertiary">{detail.label}</dt>
                  <dd className="text-body-md text-text-primary">
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="transition-colors duration-150 hover:text-navy"
                    >
                      {detail.value}
                    </a>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ContactForm />
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
