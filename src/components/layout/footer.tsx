'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Input } from '@/components/ui/inputs'
import { Button } from '@/components/ui/button'
import { FlagIcon, type FlagCode } from '@/components/ui/flag-icon'
import { subscribeToNewsletter } from '@/lib/subscribe'

const companyLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Blogs', href: '/insights' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Investment sectors', href: '/#sectors' },
  { label: 'Investment pools', href: '/#pools' },
]

/** Not linked yet — no page exists for this. Renders as plain text until real content is ready. */
const pendingCompanyLinks = ['Career']

const flags: { code: FlagCode; name: string }[] = [
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'CN', name: 'China' },
  { code: 'EG', name: 'Egypt' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'IN', name: 'India' },
  { code: 'TR', name: 'Turkey' },
  { code: 'ZA', name: 'South Africa' },
]

const socials = [
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
  { href: 'https://twitter.com', label: 'X (Twitter)', icon: Twitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
]

/** Not linked yet — no pages exist for these. Rendered as plain text until real content is ready. */
const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
]

const newsletterSchema = z.object({
  email: z.string().email('Enter a valid email address'),
})
type NewsletterValues = z.infer<typeof newsletterSchema>

function NewsletterForm() {
  const [submitError, setSubmitError] = React.useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) })

  const onSubmit = async (values: NewsletterValues) => {
    setSubmitError(null)
    try {
      await subscribeToNewsletter(values.email)
    } catch {
      setSubmitError('Something went wrong subscribing. Please try again.')
      throw new Error('Subscription failed')
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-heading-sm font-semibold text-text-inverse">
        Join Our Community &amp; Never Miss an Update
      </h3>

      {isSubmitSuccessful ? (
        <div className="flex items-center gap-2 text-body-sm font-medium text-text-inverse">
          <CheckCircle2 className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
          You&rsquo;re subscribed — thanks for joining.
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            handleSubmit(onSubmit)(event)?.catch(() => {})
          }}
          noValidate
          className="flex flex-col gap-2"
        >
          {submitError && (
            <p role="alert" className="text-caption text-error">
              {submitError}
            </p>
          )}
          <label htmlFor="footer-newsletter-email" className="text-body-sm text-text-inverse-muted">
            E-mail Address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              id="footer-newsletter-email"
              type="email"
              placeholder="Enter your email address"
              error={errors.email?.message}
              className="max-w-sm"
              {...register('email')}
            />
            <Button
              type="submit"
              loading={isSubmitting}
              className="bg-text-inverse text-ink hover:bg-white/90 active:bg-white/80"
            >
              Subscribe
            </Button>
          </div>
          {errors.email && (
            <p role="alert" className="text-caption text-error">
              {errors.email.message}
            </p>
          )}
        </form>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-text-inverse">
      <div className="container mx-auto max-w-container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          {/* Brand + newsletter + flags */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3" aria-label="Al Quba Investment home">
                <Image
                  src="/AQ logo.png"
                  alt="Al Quba logo"
                  width={48}
                  height={48}
                  className="shrink-0 object-contain"
                />
                <span className="flex flex-col leading-none">
                  <span className="font-nav text-[1.75rem] tracking-wide text-text-inverse">AL QUBA</span>
                  <span className="text-caption uppercase tracking-[0.2em] text-text-inverse-muted">
                    Investment LLC
                  </span>
                </span>
              </Link>
              <p className="max-w-xs text-body-sm text-text-inverse-muted">
                Dream bigger with Al Quba Investments, Dubai&rsquo;s trusted partner for wealth and
                sustainable growth.
              </p>
            </div>

            <NewsletterForm />

            <div className="flex flex-wrap items-center gap-2">
              {flags.map((flag) => (
                <span
                  key={flag.code}
                  title={flag.name}
                  className="flex h-6 w-9 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-white/10"
                >
                  <FlagIcon code={flag.code} className="size-full" />
                  <span className="sr-only">{flag.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-4">
            <span className="text-eyebrow uppercase text-text-inverse-muted">Company</span>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-inverse-muted transition-colors duration-150 hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {pendingCompanyLinks.map((label) => (
                <li key={label}>
                  <span className="text-body-sm text-text-inverse-muted/60">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col gap-6">
            <h3 className="text-heading-sm font-semibold text-text-inverse">Get In Touch</h3>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-eyebrow uppercase text-text-inverse-muted">
                <MapPin className="size-4" strokeWidth={1.5} aria-hidden />
                Address
              </span>
              <p className="text-body-sm text-text-inverse-muted">
                Office 306, Al Mezan Tower,
                <br />
                Dubai, UAE
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-eyebrow uppercase text-text-inverse-muted">
                <Phone className="size-4" strokeWidth={1.5} aria-hidden />
                Contact
              </span>
              <a
                href="tel:+971505762203"
                className="text-body-sm text-text-inverse-muted transition-colors duration-150 hover:text-text-inverse"
              >
                +971 50 576 2203
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-eyebrow uppercase text-text-inverse-muted">
                <Mail className="size-4" strokeWidth={1.5} aria-hidden />
                E-Mail
              </span>
              <a
                href="mailto:inbox@alqubainvestment.com"
                className="break-all text-body-sm text-text-inverse-muted transition-colors duration-150 hover:text-text-inverse"
              >
                inbox@alqubainvestment.com
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <SocialIcon key={social.label} href={social.href} label={social.label}>
                  <social.icon className="size-4" strokeWidth={1.5} />
                </SocialIcon>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border-ink pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-text-inverse-muted">
            &copy; {new Date().getFullYear()} Al Quba Investment LLC. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-caption text-text-inverse-muted underline decoration-text-inverse-muted/30 underline-offset-4 transition-colors duration-150 hover:text-text-inverse"
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
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex size-10 items-center justify-center rounded-full border border-border-ink text-text-inverse-muted transition-colors duration-150 hover:border-text-inverse hover:text-text-inverse"
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
