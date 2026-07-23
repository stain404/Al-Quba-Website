import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FadeIn } from '@/components/motion/reveal'

interface Leader {
  name: string
  role: string
  quote: string
  message: string[]
  linkedin?: string
}

const leaders: Leader[] = [
  {
    name: 'Khasim Enoli',
    role: 'Founder & CEO',
    quote: 'Invest with Confidence, Backed by Trust.',
    message: [
      'From designing ships as a Naval Architect, to navigating the complexities of the Oil & Gas industry, and finally leading businesses with vision and strategy, the journey has always been about growth, innovation, and making a difference.',
      'Along the way, being recognized as the youngest Golden Visa recipient in the UAE was a humbling milestone, inspiring me to push boundaries further.',
      "Today, guiding Al Quba's diverse companies, my goal remains the same: to fuel success, create impact, and lead with integrity.",
    ],
    linkedin: 'https://linkedin.com/in/khasim-enoli-43211734',
  },
]

const leadershipJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Khasim Enoli',
  jobTitle: 'Founder & CEO',
  worksFor: {
    '@type': 'Organization',
    name: 'Al Quba Investment',
  },
  description: leaders[0].message.join(' '),
}

/**
 * About / Leadership — CEO's Message.
 * A single profile row carrying the founder's direct message as a pull
 * quote, rather than the multi-person grid this section used to hold.
 */
export function Leadership() {
  return (
    <SectionContainer id="leadership" surface="canvas" spacing="lg">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipJsonLd) }}
      />
      <SectionHeading eyebrow="CEO's Message" title="A direct message from our Founder & CEO" />

      <div className="mt-16 flex flex-col">
        {leaders.map((leader) => (
          <FadeIn key={leader.name}>
            <div className="grid grid-cols-1 items-start gap-8 border-b border-t border-border py-12 md:grid-cols-[220px_1fr] md:gap-16">
              <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-lg bg-canvas-muted">
                <Image
                  src="/ceo.jpeg"
                  alt="Khasim Enoli, Founder & CEO of Al Quba Investment"
                  fill
                  sizes="220px"
                  className="object-cover"
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

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-heading-lg font-semibold text-text-primary">{leader.name}</h3>
                  <span className="text-body-sm font-medium text-accent-ink">{leader.role}</span>
                </div>

                <blockquote className="border-l-2 border-accent pl-5">
                  <p className="font-display text-heading-md text-text-primary">&ldquo;{leader.quote}&rdquo;</p>
                  <cite className="mt-4 block max-w-measure text-body-md not-italic text-text-secondary">
                    {leader.message.map((paragraph) => (
                      <p key={paragraph} className="mt-4 first:mt-0">
                        {paragraph}
                      </p>
                    ))}
                  </cite>
                </blockquote>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  )
}
