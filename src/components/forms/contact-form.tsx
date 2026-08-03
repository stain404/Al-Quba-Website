'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react'
import { Checkbox } from '@/components/ui/inputs'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'
import { trackEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const MESSAGE_MAX_LENGTH = 1000

const inquiryTypesByLocale = {
  en: [
    { label: 'Institutional Investment', value: 'institutional' },
    { label: 'Family Office Partnership', value: 'family-office' },
    { label: 'Private Wealth', value: 'private-wealth' },
    { label: 'Media & Press', value: 'media' },
    { label: 'Careers', value: 'careers' },
  ],
  ar: [
    { label: 'استثمار مؤسسي', value: 'institutional' },
    { label: 'شراكة مكتب عائلة', value: 'family-office' },
    { label: 'ثروات خاصة', value: 'private-wealth' },
    { label: 'إعلام وصحافة', value: 'media' },
    { label: 'وظائف', value: 'careers' },
  ],
} as const

const copy = {
  en: {
    fullNameLabel: 'Name',
    fullNamePlaceholder: 'Enter your full name',
    fullNameError: 'Enter your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email address',
    emailError: 'Enter a valid email address',
    companyLabel: 'Company / Family office',
    companyPlaceholder: 'Enter your company name',
    companyError: 'Enter your company or family office name',
    inquiryLabel: 'Service',
    inquiryPlaceholder: 'Select an inquiry type',
    inquiryError: 'Select an inquiry type',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your objectives and investment horizon.',
    messageError: 'Please provide at least 20 characters of context',
    messageCounter: 'Characters',
    consentPrefix: 'I agree to be contacted by Al Quba Investment regarding this inquiry, in line with the',
    consentLink: 'Privacy Policy',
    consentError: 'Please confirm you agree to be contacted',
    submit: 'Send Message',
    trustBadges: ['Confidential & Secure', 'Response within 1 Business Day', 'Your information will never be shared'],
    submitErrorFallback: 'Something went wrong sending your message. Please try again, or email us directly.',
    successHeading: 'Thank you for contacting Al Quba Investment.',
    successBody: 'Our investment team has received your enquiry and will respond within one business day.',
  },
  ar: {
    fullNameLabel: 'الاسم',
    fullNamePlaceholder: 'أدخل اسمك الكامل',
    fullNameError: 'أدخل اسمك الكامل',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    emailError: 'أدخل بريدًا إلكترونيًا صحيحًا',
    companyLabel: 'الشركة / مكتب العائلة',
    companyPlaceholder: 'أدخل اسم شركتك',
    companyError: 'أدخل اسم شركتك أو مكتب عائلتك',
    inquiryLabel: 'الخدمة',
    inquiryPlaceholder: 'اختر نوع الاستفسار',
    inquiryError: 'اختر نوع الاستفسار',
    messageLabel: 'الرسالة',
    messagePlaceholder: 'أخبرنا عن أهدافك وأفقك الاستثماري.',
    messageError: 'يرجى تقديم 20 حرفًا على الأقل من التفاصيل',
    messageCounter: 'حرف',
    consentPrefix: 'أوافق على أن تتواصل معي القبا للاستثمار بخصوص هذا الاستفسار، وفقًا لـ',
    consentLink: 'سياسة الخصوصية',
    consentError: 'يرجى تأكيد موافقتك على التواصل معك',
    submit: 'إرسال الرسالة',
    trustBadges: ['سرية وأمان تام', 'الرد خلال يوم عمل واحد', 'لن تتم مشاركة بياناتك أبدًا'],
    submitErrorFallback: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى، أو مراسلتنا مباشرة عبر البريد الإلكتروني.',
    successHeading: 'شكرًا لتواصلك مع القبا للاستثمار.',
    successBody: 'استلم فريق الاستثمار لدينا استفسارك وسيقوم بالرد خلال يوم عمل واحد.',
  },
} as const

/* -------------------------------------------------------------------------- */
/* Underline-style field primitives — scoped to this form. An uppercase       */
/* caption label sits above a bottom-border-only input rather than the       */
/* boxed fields used elsewhere on the site, matching the reference layout.   */
/* -------------------------------------------------------------------------- */

function UnderlineField({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-caption font-medium uppercase tracking-wide text-text-tertiary">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="flex items-center gap-1.5 text-caption text-error">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  )
}

const underlineFieldClasses = cn(
  'w-full border-0 border-b bg-transparent px-0 pb-2.5 text-body-md text-text-primary',
  'placeholder:text-text-tertiary transition-colors duration-150 ease-institutional',
  'focus:outline-none focus:border-ink'
)

const UnderlineInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(underlineFieldClasses, error ? 'border-error' : 'border-border-strong hover:border-text-secondary', className)}
      {...props}
    />
  )
)
UnderlineInput.displayName = 'UnderlineInput'

const UnderlineSelect = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string; options: { label: string; value: string }[]; placeholder?: string }
>(({ className, error, options, placeholder, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      defaultValue=""
      className={cn(underlineFieldClasses, 'appearance-none pr-8', error ? 'border-error' : 'border-border-strong hover:border-text-secondary', className)}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-0 top-1 size-4 text-text-tertiary rtl:right-auto rtl:left-0" aria-hidden />
  </div>
))
UnderlineSelect.displayName = 'UnderlineSelect'

export interface ContactFormProps {
  onSubmit?: (values: Record<string, unknown>) => Promise<void> | void
}

/**
 * Contact page form — underline-style fields with a bordered message box,
 * matching the site's "Get In Touch" card layout (see ContactFormSection).
 */
export function ContactForm({ onSubmit }: ContactFormProps) {
  const locale = useLocale() as keyof typeof copy
  const c = copy[locale]
  const inquiryTypes = inquiryTypesByLocale[locale]
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const contactSchema = React.useMemo(
    () =>
      z.object({
        fullName: z.string().min(2, c.fullNameError),
        email: z.string().email(c.emailError),
        company: z.string().min(2, c.companyError),
        inquiryType: z.enum(
          inquiryTypes.map((t) => t.value) as [string, ...string[]],
          { errorMap: () => ({ message: c.inquiryError }) }
        ),
        message: z.string().min(20, c.messageError).max(MESSAGE_MAX_LENGTH),
        consent: z.literal(true, {
          errorMap: () => ({ message: c.consentError }),
        }),
      }),
    [c, inquiryTypes]
  )

  type ContactFormValues = z.infer<typeof contactSchema>

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const messageLength = watch('message')?.length ?? 0

  const submit = async (values: ContactFormValues) => {
    setSubmitError(null)
    if (onSubmit) {
      await onSubmit(values)
    } else {
      const { consent: _consent, ...payload } = values
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        setSubmitError(c.submitErrorFallback)
        throw new Error('Submission failed')
      }
    }
    // Only reached once the submission actually succeeded — the failure
    // paths above throw, so a bounced enquiry is never counted as a lead.
    // `inquiryType` is a fixed dropdown value, not free text, so it can
    // segment leads without any of the submitted PII leaving the page.
    trackEvent('generate_lead', {
      form: 'contact',
      inquiry_type: values.inquiryType,
      locale,
    })
    reset()
  }

  if (isSubmitSuccessful) {
    return (
      <FadeIn className="flex flex-col items-center gap-4 rounded-lg border border-border bg-canvas-muted p-12 text-center">
        <CheckCircle2 className="size-10 text-success" strokeWidth={1.5} aria-hidden />
        <h3 className="text-heading-lg font-semibold text-text-primary">
          {c.successHeading}
        </h3>
        <p className="max-w-measure text-body-md text-text-secondary">
          {c.successBody}
        </p>
      </FadeIn>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(submit)(event)?.catch(() => {})
      }}
      noValidate
      className="flex flex-col gap-7"
    >
      {submitError && (
        <p role="alert" className="text-caption text-error">
          {submitError}
        </p>
      )}

      <UnderlineField id="fullName" label={c.fullNameLabel} required error={errors.fullName?.message}>
        <UnderlineInput id="fullName" placeholder={c.fullNamePlaceholder} {...register('fullName')} />
      </UnderlineField>

      <UnderlineField id="email" label={c.emailLabel} required error={errors.email?.message}>
        <UnderlineInput id="email" type="email" placeholder={c.emailPlaceholder} {...register('email')} />
      </UnderlineField>

      <UnderlineField id="company" label={c.companyLabel} required error={errors.company?.message}>
        <UnderlineInput id="company" placeholder={c.companyPlaceholder} {...register('company')} />
      </UnderlineField>

      <UnderlineField id="inquiryType" label={c.inquiryLabel} required error={errors.inquiryType?.message}>
        <UnderlineSelect
          id="inquiryType"
          placeholder={c.inquiryPlaceholder}
          options={inquiryTypes as unknown as { label: string; value: string }[]}
          {...register('inquiryType')}
        />
      </UnderlineField>

      <UnderlineField id="message" label={c.messageLabel} required error={errors.message?.message}>
        <textarea
          id="message"
          rows={6}
          maxLength={MESSAGE_MAX_LENGTH}
          placeholder={c.messagePlaceholder}
          className={cn(
            'w-full resize-y rounded-sm border bg-canvas-raised px-4 py-3 text-body-md text-text-primary',
            'placeholder:text-text-tertiary transition-colors duration-150 ease-institutional',
            'focus:outline-none focus:border-ink',
            errors.message ? 'border-error' : 'border-border-strong hover:border-text-tertiary'
          )}
          {...register('message')}
        />
        <span className="self-end text-caption text-text-tertiary">
          {messageLength}/{MESSAGE_MAX_LENGTH} {c.messageCounter}
        </span>
      </UnderlineField>

      <div className="mt-1">
        <Checkbox
          id="consent"
          label={
            <>
              {c.consentPrefix}{' '}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-text-primary">
                {c.consentLink}
              </Link>
              .
            </>
          }
          aria-invalid={!!errors.consent}
          {...register('consent')}
        />
        {errors.consent && (
          <p role="alert" className="mt-2 text-caption text-error">
            {errors.consent.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          size="lg"
          loading={isSubmitting}
          withArrow
          className="group mt-1 min-w-[200px] self-end rounded-full"
        >
          {c.submit}
        </Button>

        <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {c.trustBadges.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-caption text-text-tertiary">
              <Check className="size-3.5 text-success" strokeWidth={2} aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </form>
  )
}
