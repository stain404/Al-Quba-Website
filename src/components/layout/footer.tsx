import Link from 'next/link'
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import type { NavLink } from '@/types'

export interface FooterColumn {
  heading: string
  links: NavLink[]
}

export interface FooterProps {
  columns: FooterColumn[]
  legalLinks?: NavLink[]
}

const defaultLegal: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Regulatory Disclosures', href: '/disclosures' },
]

export function Footer({ columns, legalLinks = defaultLegal }: FooterProps) {
  return (
    <footer className="bg-ink text-text-inverse">
      <div className="container mx-auto max-w-container py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex flex-col gap-6">
            <span className="text-heading-lg font-display">Al Quba Investment</span>
            <p className="max-w-xs text-body-sm text-text-inverse-muted">
              A Dubai-headquartered investment and asset management firm
              building long-term capital partnerships across global markets.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="X (Twitter)">
                <Twitter className="size-4" />
              </SocialIcon>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <span className="text-eyebrow uppercase text-text-inverse-muted">{column.heading}</span>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-inverse-muted transition-colors duration-150 hover:text-text-inverse"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border-ink pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-text-inverse-muted">
            &copy; {new Date().getFullYear()} Al Quba Investment LLC. Registered in the Dubai International Financial Centre (DIFC). All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-caption text-text-inverse-muted transition-colors duration-150 hover:text-text-inverse"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex size-10 items-center justify-center rounded-full border border-border-ink text-text-inverse-muted transition-colors duration-150 hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  )
}

/** Slim disclosure bar variant, use above Footer on regulated pages if needed. */
export function FooterDisclosureBar({ text = 'Capital at risk. Past performance is not indicative of future results.' }: { text?: string }) {
  return (
    <div className="border-t border-border-ink bg-ink-muted py-4">
      <div className="container mx-auto flex max-w-container items-center gap-2 text-caption text-text-inverse-muted">
        <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
        {text}
      </div>
    </div>
  )
}
