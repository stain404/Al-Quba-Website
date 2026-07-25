'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Briefcase, Clock, ChevronDown, Users, Search, X } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Button } from '@/components/ui/button'
import { Input, Select } from '@/components/ui/inputs'
import { Eyebrow } from '@/components/typography/heading'
import { expandCollapse } from '@/lib/animations'

/* ── Position data ─────────────────────────────────────────────────────── */

interface Position {
  id: string
  title: string
  department: string
  quantity: string
  location: string
  employment: string
  experience: string
  summary: string
  about: string
  responsibilities: string[]
  requirements: string[]
}

const positions: Position[] = [
  {
    id: 'bdm',
    title: 'Business Development Manager',
    department: 'Business Development',
    quantity: '2 Positions',
    location: 'Dubai, UAE',
    employment: 'Full-Time',
    experience: '2–5 Years',
    summary: 'Drive strategic growth by identifying opportunities and building partnerships across Al Quba\'s multi-industry ecosystem.',
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
    department: 'Administration',
    quantity: '1 Position',
    location: 'Dubai, UAE',
    employment: 'Full-Time',
    experience: '1–3 Years',
    summary: 'Serve as the first point of contact for visitors while supporting daily administrative operations.',
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

/* ── Filter option builders ────────────────────────────────────────────── */

function unique(arr: string[]): string[] {
  return Array.from(new Set(arr))
}

const departmentOptions = [
  { value: '', label: 'All Departments' },
  ...unique(positions.map((p) => p.department)).map((d) => ({ value: d, label: d })),
]

const locationOptions = [
  { value: '', label: 'All Locations' },
  ...unique(positions.map((p) => p.location)).map((l) => ({ value: l, label: l })),
]

const employmentOptions = [
  { value: '', label: 'Employment Type' },
  ...unique(positions.map((p) => p.employment)).map((e) => ({ value: e, label: e })),
]

const experienceOptions = [
  { value: '', label: 'Experience Level' },
  ...unique(positions.map((p) => p.experience)).map((ex) => ({ value: ex, label: ex })),
]

/* ── Position card ─────────────────────────────────────────────────────── */

function PositionCard({ position }: { position: Position }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-canvas-raised shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Always-visible header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-6 text-left sm:px-8"
        aria-expanded={open}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="flex flex-col gap-2.5 min-w-0">
            {/* Title + department */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-heading-sm font-semibold text-text-primary">
                {position.title}
              </h3>
              <span className="text-body-sm text-text-tertiary">{position.department}</span>
            </div>

            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-body-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                {position.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="size-3.5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                {position.employment}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                {position.experience}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="size-3.5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
                {position.quantity}
              </span>
            </div>

            {/* One-line summary — only shown when collapsed */}
            {!open && (
              <p className="text-body-sm text-text-tertiary line-clamp-1 pr-4">
                {position.summary}
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <ChevronDown
              className={`size-5 text-text-tertiary transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </div>
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
            <div className="border-t border-border px-6 pb-8 pt-6 sm:px-8">
              <div className="flex flex-col gap-6">
                <p className="max-w-measure text-body-md leading-relaxed text-text-secondary">
                  {position.about}
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-body-sm font-semibold uppercase tracking-[0.08em] text-text-primary">
                      Responsibilities
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {position.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-body-sm text-text-secondary">
                          <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-body-sm font-semibold uppercase tracking-[0.08em] text-text-primary">
                      Requirements
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {position.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-body-sm text-text-secondary">
                          <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="gold" size="sm" withArrow asChild className="group">
                    <a
                      href={`mailto:careers@alqubainvestment.com?subject=Application: ${position.title}`}
                    >
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

/* ── Empty state ───────────────────────────────────────────────────────── */

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-5 py-20 text-center">
      <div className="flex size-12 items-center justify-center rounded-full border border-border">
        <Briefcase className="size-5 text-text-tertiary" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-heading-sm font-semibold text-text-primary">No Current Openings</p>
        <p className="max-w-xs text-body-sm text-text-secondary">
          We're always interested in exceptional talent. Submit your CV and we'll contact
          you when suitable opportunities become available.
        </p>
      </div>
      <Button variant="outline" size="sm" withArrow asChild className="group mt-1">
        <a href="mailto:careers@alqubainvestment.com?subject=Open Application — CV Submission">
          Submit Your CV
        </a>
      </Button>
    </div>
  )
}

/* ── Main section ──────────────────────────────────────────────────────── */

export function CurrentOpenings() {
  const [query, setQuery] = React.useState('')
  const [department, setDepartment] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [employment, setEmployment] = React.useState('')
  const [experience, setExperience] = React.useState('')

  const hasActiveFilters = query || department || location || employment || experience

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase()
    return positions.filter((p) => {
      if (q && !p.title.toLowerCase().includes(q) && !p.department.toLowerCase().includes(q) && !p.summary.toLowerCase().includes(q)) return false
      if (department && p.department !== department) return false
      if (location && p.location !== location) return false
      if (employment && p.employment !== employment) return false
      if (experience && p.experience !== experience) return false
      return true
    })
  }, [query, department, location, employment, experience])

  function clearFilters() {
    setQuery('')
    setDepartment('')
    setLocation('')
    setEmployment('')
    setExperience('')
  }

  return (
    <SectionContainer
      id="openings"
      surface="canvas"
      spacing="lg"
      className="border-t border-border"
    >
      {/* Section header */}
      <div className="flex flex-col gap-4 mb-10">
        <Eyebrow>Current Opportunities</Eyebrow>
        <h2 className="font-display text-display-md font-bold text-text-primary">
          Current Openings
        </h2>
        <p className="max-w-measure text-body-lg text-text-secondary">
          Explore opportunities across Al Quba Investment LLC and our portfolio companies.
        </p>
      </div>

      {/* ── Search & filters ─────────────────────────────────────────── */}
      <div className="mb-8 flex flex-col gap-3 rounded-lg border border-border bg-canvas-raised p-4 shadow-sm sm:p-5">
        {/* Search bar */}
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-text-tertiary"
            strokeWidth={1.5}
            aria-hidden
          />
          <Input
            type="search"
            placeholder="Search positions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            aria-label="Search positions"
          />
        </div>

        {/* Filter row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Select
            options={departmentOptions}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            aria-label="Filter by department"
          />
          <Select
            options={locationOptions}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Filter by location"
          />
          <Select
            options={employmentOptions}
            value={employment}
            onChange={(e) => setEmployment(e.target.value)}
            aria-label="Filter by employment type"
          />
          <Select
            options={experienceOptions}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            aria-label="Filter by experience level"
          />
        </div>

        {/* Clear filters — only shows when something is active */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between border-t border-border pt-3">
            <span className="text-body-sm text-text-secondary">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-body-sm text-text-tertiary transition-colors duration-150 hover:text-text-primary"
            >
              <X className="size-3.5" aria-hidden />
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* ── Job cards ──────────────────────────────────────────────────── */}
      <AnimatePresence mode="popLayout">
        {filtered.length > 0 ? (
          <motion.div
            key="results"
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((position) => (
              <PositionCard key={position.id} position={position} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <EmptyState />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  )
}
