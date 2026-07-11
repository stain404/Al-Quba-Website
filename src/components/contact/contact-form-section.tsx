import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { ContactForm } from '@/components/forms/contact-form'
import { FadeIn } from '@/components/motion/reveal'

const details = [
  { icon: MapPin, label: 'Headquarters', value: 'Level 14, Gate Building, DIFC, Dubai, UAE' },
  { icon: Mail, label: 'Email', value: 'investors@alquba.com' },
  { icon: Phone, label: 'Phone', value: '+971 4 000 0000' },
  { icon: Clock, label: 'Response Time', value: 'Within one business day' },
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
                  <dd className="text-body-md text-text-primary">{detail.value}</dd>
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
