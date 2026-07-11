'use client'

import * as React from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { transitionContent } from '@/lib/animations'
import type { MegaMenuSection } from '@/types'

export interface MegaMenuProps {
  section: MegaMenuSection
  open: boolean
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

/**
 * Full-width dropdown panel. Rendered by Navbar, positioned absolutely
 * beneath the trigger row. One panel is shown at a time.
 */
export function MegaMenu({ section, open, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="menu"
          aria-label={section.label}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={transitionContent}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute inset-x-0 top-full z-40 border-t border-border bg-canvas-raised shadow-lg"
        >
          <div className="container mx-auto grid max-w-container grid-cols-1 gap-12 py-12 lg:grid-cols-[1fr_1fr_320px]">
            {(section.columns ?? []).map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <span className="text-eyebrow uppercase text-text-tertiary">{column.heading}</span>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group flex flex-col gap-0.5 text-body-md text-text-primary transition-colors duration-150 hover:text-accent-ink"
                      >
                        <span>{link.label}</span>
                        {link.description && (
                          <span className="text-body-sm text-text-tertiary">{link.description}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {section.featured && (
              <Link
                href={section.featured.href}
                onClick={onClose}
                className="group flex flex-col justify-between gap-6 rounded-lg bg-ink p-8 text-text-inverse transition-colors duration-200 hover:bg-navy"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-heading-sm font-semibold">{section.featured.title}</span>
                  <p className="text-body-sm text-text-inverse-muted">{section.featured.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-body-sm font-medium text-accent-ink">
                  Learn more
                  <ArrowRight
                    className="size-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
