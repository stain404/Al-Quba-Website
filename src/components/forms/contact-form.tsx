'use client'

import * as React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import { Input, Textarea, Select, Checkbox, FieldWrapper } from '@/components/ui/inputs'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'

const inquiryTypes = [
  { label: 'Institutional Investment', value: 'institutional' },
  { label: 'Family Office Partnership', value: 'family-office' },
  { label: 'Private Wealth', value: 'private-wealth' },
  { label: 'Media & Press', value: 'media' },
  { label: 'Careers', value: 'careers' },
] as const

const contactSchema = z.object({
  fullName: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email address'),
  company: z.string().min(2, 'Enter your company or family office name'),
  inquiryType: z.enum(
    inquiryTypes.map((t) => t.value) as [string, ...string[]],
    { errorMap: () => ({ message: 'Select an inquiry type' }) }
  ),
  message: z.string().min(20, 'Please provide at least 20 characters of context'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please confirm you agree to be contacted' }),
  }),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export interface ContactFormProps {
  onSubmit?: (values: ContactFormValues) => Promise<void> | void
}

/**
 * Reference implementation for premium enterprise forms across the site.
 * Compose FieldWrapper + ui/inputs primitives the same way for any other
 * form (e.g. investor onboarding, newsletter signup).
 */
export function ContactForm({ onSubmit }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const submit = async (values: ContactFormValues) => {
    await onSubmit?.(values)
    reset()
  }

  if (isSubmitSuccessful) {
    return (
      <FadeIn className="flex flex-col items-center gap-4 rounded-lg border border-border bg-canvas-muted p-12 text-center">
        <CheckCircle2 className="size-10 text-success" strokeWidth={1.5} aria-hidden />
        <h3 className="text-heading-lg font-semibold text-text-primary">Thank you for reaching out</h3>
        <p className="max-w-measure text-body-md text-text-secondary">
          A member of our team will respond within one business day.
        </p>
      </FadeIn>
    )
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldWrapper id="fullName" label="Full name" required error={errors.fullName?.message}>
          <Input id="fullName" placeholder="Enter your full name" {...register('fullName')} />
        </FieldWrapper>
        <FieldWrapper id="email" label="Email address" required error={errors.email?.message}>
          <Input id="email" type="email" placeholder="Enter your email address" {...register('email')} />
        </FieldWrapper>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldWrapper id="company" label="Company / Family office" required error={errors.company?.message}>
          <Input id="company" placeholder="Enter your company name" {...register('company')} />
        </FieldWrapper>
        <FieldWrapper id="inquiryType" label="Inquiry type" required error={errors.inquiryType?.message}>
          <Select
            id="inquiryType"
            placeholder="Select an inquiry type"
            options={inquiryTypes as unknown as { label: string; value: string }[]}
            {...register('inquiryType')}
          />
        </FieldWrapper>
      </div>

      <FieldWrapper id="message" label="Message" required error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder="Tell us about your objectives and investment horizon."
          {...register('message')}
        />
      </FieldWrapper>

      <Checkbox
        id="consent"
        label={
          <>
            I agree to be contacted by Al Quba Investment regarding this inquiry, in line with
            the{' '}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-text-primary">
              Privacy Policy
            </Link>
            .
          </>
        }
        aria-invalid={!!errors.consent}
        {...register('consent')}
      />
      {errors.consent && (
        <p role="alert" className="-mt-3 text-caption text-error">
          {errors.consent.message}
        </p>
      )}

      <Button type="submit" size="lg" loading={isSubmitting} withArrow className="group mt-2 self-start">
        Submit Inquiry
      </Button>
    </form>
  )
}
