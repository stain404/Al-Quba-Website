import { MapPin, Phone } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Stagger, StaggerItem } from '@/components/motion/reveal'

const offices = [
  {
    city: 'Dubai',
    label: 'Headquarters',
    address: 'Office 306, Al Mezan Tower, Dubai, UAE',
    phone: '+971 52 669 7092',
  },
]

/**
 * About / Office.
 * A single address ledger entry — intentionally more literal and
 * document-like than the interactive dot-map used for Global Presence on
 * the Home page, since this page's audience is here to verify facts, not
 * be sold a story.
 */
export function GlobalOffices() {
  return (
    <SectionContainer id="offices" surface="canvas" spacing="lg">
      <SectionHeading eyebrow="Our Office" title="Where to find us" />

      <Stagger className="mt-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:max-w-xs">
          {offices.map((office) => (
            <StaggerItem key={office.city}>
              <div className="flex flex-col gap-4 border-t border-border-strong pt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-heading-md font-display text-text-primary">{office.city}</span>
                  <span className="text-caption uppercase tracking-wide text-text-tertiary">{office.label}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-text-tertiary" strokeWidth={1.5} aria-hidden />
                  <span className="text-body-sm text-text-secondary">{office.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-text-tertiary" strokeWidth={1.5} aria-hidden />
                  <span className="font-mono text-body-sm text-text-secondary">{office.phone}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </Stagger>
    </SectionContainer>
  )
}
