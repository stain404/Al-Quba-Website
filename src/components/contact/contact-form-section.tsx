import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { ContactForm } from '@/components/forms/contact-form'
import { FadeIn } from '@/components/motion/reveal'
import { WHATSAPP_NUMBER } from '@/components/layout/whatsapp-button'

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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

          <div className="flex items-start gap-3 border-t border-border pt-8">
            <Clock className="mt-0.5 size-4 shrink-0 text-text-tertiary" strokeWidth={1.5} aria-hidden />
            <div className="flex flex-col gap-0.5">
              <span className="text-caption uppercase tracking-wide text-text-tertiary">Office Hours</span>
              <span className="text-body-sm text-text-secondary">Monday – Friday, 9:00 AM – 6:00 PM GST</span>
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
              Chat with Us on WhatsApp
            </a>
          </Button>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ContactForm />
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
