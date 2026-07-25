'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Briefcase, Clock, ChevronDown, Users } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Button } from '@/components/ui/button'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import { expandCollapse } from '@/lib/animations'

interface Position {
  id: string
  title: string
  quantity: string
  location: string
  employment: string
  experience: string
  about: string
  responsibilities: string[]
  requirements: string[]
}

const positions: Position[] = [
  {
    id: 'bdm',
    title: 'Business Development Manager',
    quantity: '2 Positions',
    location: 'Dubai, UAE',
    employment: 'Full-Time',
    experience: '2–5 Years',
    about:
      'Drive strategic business growth by identifying new opportunities, building relationships with clients and partners, and supporting the expansion of Al Quba\'s business ecosystem across multiple industries.',
    responsibilities: [
      'Generate qualified business leads',
      'Develop strategic partnerships',
      'Conduct market research',
      'Prepare proposals and presentations',
      'Meet business development targets',
      'Represent the company professionally',
      'Maintain strong client relationships',
    ],
    requirements: [
      'Bachelor\'s Degree',
      'Excellent communication skills',
      'Strong negotiation skills',
      'B2B Sales or Business Development experience',
      'UAE experience preferred',
      'Fluent English',
    ],
  },
  {
    id: 'receptionist',
    title: 'Receptionist',
    quantity: '1 Position',
    location: 'Dubai, UAE',
    employment: 'Full-Time',
    experience: '1–3 Years',
    about:
      'Serve as the first point of contact for visitors while supporting daily administrative operations and maintaining a welcoming, professional environment.',
    responsibilities: [
      'Welcome guests and visitors',
      'Manage incoming calls',
      'Schedule meetings and appointments',
      'Coordinate correspondence',
      'Maintain reception area',
      'Provide administrative support',
    ],
    requirements: [
      'Diploma or Bachelor\'s Degree',
      'Professional communication skills',
      'Strong organisational skills',
      'MS Office proficiency',
      'Customer service mindset',
    ],
  },
]

function PositionCard({ position }: { position: Position }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="overflow-hidden rounded-[18px] border border-border bg-canvas-raised shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Card header — always visible */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-8 py-7 text-left"
        aria-expanded={open}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-heading-sm font-semibold text-text-primary">{position.title}</h3>
            <div className="flex flex-wrap items-center gap-3 text-body-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <Users className="size-3.5 text-accent" strokeWidth={1.5} aria-hidden />
                {position.quantity}
              </span>
              <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden />
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-accent" strokeWidth={1.5} aria-hidden />
                {position.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden />
              <span className="flex items-center gap-1.5">
                <Briefcase className="size-3.5 text-accent" strokeWidth={1.5} aria-hidden />
                {position.employment}
              </span>
              <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden />
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-accent" strokeWidth={1.5} aria-hidden />
                {position.experience}
              </span>
            </div>
          </div>
          <ChevronDown
            className={`size-5 shrink-0 text-text-tertiary transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </div>
      </button>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={expandCollapse}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-8 pb-8 pt-6">
              <div className="flex flex-col gap-6">
                <p className="text-body-md leading-relaxed text-text-secondary">{position.about}</p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-body-sm font-semibold uppercase tracking-wide text-text-primary">
                      Responsibilities
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {position.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-body-sm text-text-secondary">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-body-sm font-semibold uppercase tracking-wide text-text-primary">
                      Requirements
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {position.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-body-sm text-text-secondary">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="gold" size="sm" withArrow asChild className="group">
                    <a href={`mailto:careers@alqubainvestment.com?subject=Application: ${position.title}`}>
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CurrentOpenings() {
  return (
    <SectionContainer id="openings" surface="canvas" spacing="lg">
      <SectionHeading
        eyebrow="Current Opportunities"
        title="Current Openings"
        description="Join a team committed to building lasting value across industries."
      />
      <Stagger className="mt-12 flex flex-col gap-4">
        {positions.map((position) => (
          <StaggerItem key={position.id}>
            <PositionCard position={position} />
          </StaggerItem>
        ))}
      </Stagger>
    </SectionContainer>
  )
}
