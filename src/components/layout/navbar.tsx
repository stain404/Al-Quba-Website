'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { expandCollapse } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { MegaMenu } from '@/components/layout/mega-menu'
import type { MegaMenuSection } from '@/types'

export interface NavbarProps {
  logo?: React.ReactNode
  sections: MegaMenuSection[]
}

/**
 * Sticky top navigation. Transparent-over-hero on load, solidifies with a
 * hairline border once the page scrolls. Desktop uses hover-triggered mega
 * menus; mobile collapses into a full-screen sheet.
 */
export function Navbar({ logo, sections }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
  }, [])

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }

  const openSection = (label: string) => {
    cancelClose()
    setActiveSection(label)
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimeout.current = setTimeout(() => setActiveSection(null), 200)
  }

  const currentSection = sections.find((s) => s.label === activeSection)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-institutional',
        scrolled
          ? 'border-b border-border bg-canvas-raised/95 backdrop-blur'
          : 'bg-gradient-to-b from-black/50 via-black/15 to-transparent'
      )}
    >
      <div className="container relative mx-auto flex h-20 max-w-container items-center justify-between">
        <Link
          href="/"
          className={cn(
            'flex items-center gap-2.5 font-nav leading-none transition-colors duration-300',
            scrolled ? 'text-accent-ink' : 'text-accent-soft'
          )}
          aria-label="Al Quba Investment home"
        >
          <Image
            src="/AQ logo.png"
            alt="Al Quba logo"
            width={52}
            height={52}
            className="shrink-0 object-contain"
            priority
          />
          {logo ?? (
            <span className="flex flex-col gap-0.5">
              <span className="text-[1.75rem] font-bold leading-none tracking-tight">AL QUBA</span>
              <span className="text-caption font-medium uppercase tracking-wide opacity-80">
                Al Quba Investment LLC
              </span>
            </span>
          )}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => {
            const hasDropdown = !!section.columns?.length
            return (
              <div
                key={section.label}
                onMouseEnter={hasDropdown ? () => openSection(section.label) : scheduleClose}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={section.href ?? '#'}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-4 py-2 text-body-sm font-medium transition-colors duration-150',
                    scrolled ? 'text-accent-ink hover:text-accent-soft' : 'text-accent-soft hover:text-text-inverse',
                    activeSection === section.label && (scrolled ? 'text-accent-soft' : 'text-text-inverse')
                  )}
                  aria-haspopup={hasDropdown || undefined}
                  aria-expanded={hasDropdown ? activeSection === section.label : undefined}
                >
                  {section.label}
                  {hasDropdown && (
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-200 ease-institutional',
                        activeSection === section.label && 'rotate-180'
                      )}
                      aria-hidden
                    />
                  )}
                </Link>
              </div>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="gold" size="sm" withArrow asChild className="group">
            <Link href="/contact">Speak with Us</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex size-11 items-center justify-center rounded-md transition-colors duration-300 lg:hidden',
            scrolled ? 'text-accent-ink' : 'text-accent-soft'
          )}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {currentSection && (
          <MegaMenu
            section={currentSection}
            open={!!activeSection}
            onClose={() => setActiveSection(null)}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={expandCollapse}
            className="overflow-hidden border-t border-border bg-canvas-raised lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {sections.map((section) => {
                const links = section.columns?.flatMap((c) => c.links) ?? []
                return (
                  <li key={section.label} className="border-b border-border py-4 first:pt-0 last:border-none">
                    {links.length > 0 ? (
                      <>
                        <span className="text-body-md font-medium text-text-primary">{section.label}</span>
                        <ul className="mt-3 flex flex-col gap-3 pl-2">
                          {links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-body-sm text-text-secondary hover:text-accent-ink"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={section.href ?? '#'}
                        onClick={() => setMobileOpen(false)}
                        className="text-body-md font-medium text-text-primary hover:text-accent-ink"
                      >
                        {section.label}
                      </Link>
                    )}
                  </li>
                )
              })}
              <li className="flex flex-col gap-3 pt-4">
                <Button variant="gold" withArrow asChild>
                  <Link href="/contact">Speak with Us</Link>
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
