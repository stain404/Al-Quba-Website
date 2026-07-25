'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, CheckCircle2 } from 'lucide-react'
import { Input, Textarea, Select, Checkbox, FieldWrapper } from '@/components/ui/inputs'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'

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
    fullNameLabel: 'Full name',
    fullNamePlaceholder: 'Enter your full name',
    fullNameError: 'Enter your full name',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email address',
    emailError: 'Enter a valid email address',
    companyLabel: 'Company / Family office',
    companyPlaceholder: 'Enter your company name',
    companyError: 'Enter your company or family office name',
    inquiryLabel: 'How can we help you?',
    inquiryPlaceholder: 'Select an inquiry type',
    inquiryError: 'Select an inquiry type',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your objectives and investment horizon.',
    messageError: 'Please provide at least 20 characters of context',
    consentPrefix: 'I agree to be contacted by Al Quba Investment regarding this inquiry, in line with the',
    consentLink: 'Privacy Policy',
    consentError: 'Please confirm you agree to be contacted',
    submit: 'Submit Inquiry',
    trustBadges: ['Confidential & Secure', 'Response within 1 Business Day', 'Your information will never be shared'],
    submitErrorFallback: 'Something went wrong sending your message. Please try again, or email us directly.',
    successHeading: 'Thank you for contacting Al Quba Investment.',
    successBody: 'Our investment team has received your enquiry and will respond within one business day.',
  },
  ar: {
    fullNameLabel: 'الاسم الكامل',
    fullNamePlaceholder: 'أدخل اسمك الكامل',
    fullNameError: 'أدخل اسمك الكامل',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    emailError: 'أدخل بريدًا إلكترونيًا صحيحًا',
    companyLabel: 'الشركة / مكتب العائلة',
    companyPlaceholder: 'أدخل اسم شركتك',
    companyError: 'أدخل اسم شركتك أو مكتب عائلتك',
    inquiryLabel: 'كيف يمكننا مساعدتك؟',
    inquiryPlaceholder: 'اختر نوع الاستفسار',
    inquiryError: 'اختر نوع الاستفسار',
    messageLabel: 'الرسالة',
    messagePlaceholder: 'أخبرنا عن أهدافك وأفقك الاستثماري.',
    messageError: 'يرجى تقديم 20 حرفًا على الأقل من التفاصيل',
    consentPrefix: 'أوافق على أن تتواصل معي القبا للاستثمار بخصوص هذا الاستفسار، وفقًا لـ',
    consentLink: 'سياسة الخصوصية',
    consentError: 'يرجى تأكيد موافقتك على التواصل معك',
    submit: 'إرسال الاستفسار',
    trustBadges: ['سرية وأمان تام', 'الرد خلال يوم عمل واحد', 'لن تتم مشاركة بياناتك أبدًا'],
    submitErrorFallback: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى، أو مراسلتنا مباشرة عبر البريد الإلكتروني.',
    successHeading: 'شكرًا لتواصلك مع القبا للاستثمار.',
    successBody: 'استلم فريق الاستثمار لدينا استفسارك وسيقوم بالرد خلال يوم عمل واحد.',
  },
} as const

export interface ContactFormProps {
  onSubmit?: (values: Record<string, unknown>) => Promise<void> | void
}

/**
 * Reference implementation for premium enterprise forms across the site.
 * Compose FieldWrapper + ui/inputs primitives the same way for any other
 * form (e.g. investor onboarding, newsletter signup).
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
        message: z.string().min(20, c.messageError),
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
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

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
      className="flex flex-col gap-6"
    >
      {submitError && (
        <p role="alert" className="text-caption text-error">
          {submitError}
        </p>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldWrapper id="fullName" label={c.fullNameLabel} required error={errors.fullName?.message}>
          <Input id="fullName" placeholder={c.fullNamePlaceholder} {...register('fullName')} />
        </FieldWrapper>
        <FieldWrapper id="email" label={c.emailLabel} required error={errors.email?.message}>
          <Input id="email" type="email" placeholder={c.emailPlaceholder} {...register('email')} />
        </FieldWrapper>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldWrapper id="company" label={c.companyLabel} required error={errors.company?.message}>
          <Input id="company" placeholder={c.companyPlaceholder} {...register('company')} />
        </FieldWrapper>
        <FieldWrapper id="inquiryType" label={c.inquiryLabel} required error={errors.inquiryType?.message}>
          <Select
            id="inquiryType"
            placeholder={c.inquiryPlaceholder}
            options={inquiryTypes as unknown as { label: string; value: string }[]}
            {...register('inquiryType')}
          />
        </FieldWrapper>
      </div>

      <FieldWrapper id="message" label={c.messageLabel} required error={errors.message?.message}>
        <Textarea
          id="message"
          rows={7}
          placeholder={c.messagePlaceholder}
          {...register('message')}
        />
      </FieldWrapper>

      <div className="mt-4">
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
          className="group mt-2 min-w-[240px] self-start"
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
