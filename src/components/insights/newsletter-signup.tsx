'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import { SectionContainer } from '@/components/layout/section-container'
import { Eyebrow, Heading } from '@/components/typography/heading'
import { Input, FieldWrapper } from '@/components/ui/inputs'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion/reveal'
import { subscribeToNewsletter } from '@/lib/subscribe'

const copy = {
  en: {
    eyebrow: 'Stay Informed',
    heading: 'Stay Ahead of Market Trends',
    body: 'Subscribe to receive the latest market insights, economic updates, and investment perspectives.',
    emailInvalid: 'Enter a valid email address',
    success: "You're subscribed. Look out for our next note.",
    label: 'Email address',
    placeholder: 'you@company.com',
    submit: 'Subscribe',
    error: 'Something went wrong subscribing. Please try again.',
  },
  ar: {
    eyebrow: 'ابقَ على اطلاع',
    heading: 'ابقَ في صدارة اتجاهات السوق',
    body: 'اشترك لتصلك أحدث رؤى السوق، والمستجدات الاقتصادية، ووجهات نظرنا الاستثمارية.',
    emailInvalid: 'أدخل بريدًا إلكترونيًا صحيحًا',
    success: 'تم اشتراكك بنجاح. ترقّب رسالتنا القادمة.',
    label: 'البريد الإلكتروني',
    placeholder: 'you@company.com',
    submit: 'اشترك',
    error: 'حدث خطأ أثناء الاشتراك. يرجى المحاولة مرة أخرى.',
  },
} as const

type NewsletterValues = { email: string }

/**
 * Insights / Newsletter Signup.
 * A compact single-field form following the same React Hook Form + Zod
 * pattern established by ContactForm, scaled down for a low-friction
 * subscribe action rather than a full inquiry.
 */
export function NewsletterSignup() {
  const locale = useLocale() as keyof typeof copy
  const c = copy[locale]
  const [submitError, setSubmitError] = React.useState<string | null>(null)
  const newsletterSchema = React.useMemo(
    () => z.object({ email: z.string().email(c.emailInvalid) }),
    [c.emailInvalid]
  )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) })

  const onSubmit = async (values: NewsletterValues) => {
    setSubmitError(null)
    try {
      await subscribeToNewsletter(values.email, 'insights')
    } catch {
      setSubmitError(c.error)
      throw new Error('Subscription failed')
    }
  }

  return (
    <SectionContainer surface="canvas" spacing="lg">
      <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <Heading as="h2" size="display-sm">
          {c.heading}
        </Heading>
        <p className="max-w-measure text-body-md text-text-secondary">{c.body}</p>

        {isSubmitSuccessful ? (
          <div className="flex items-center gap-2 text-body-md font-medium text-success">
            <CheckCircle2 className="size-5" strokeWidth={1.5} aria-hidden />
            {c.success}
          </div>
        ) : (
          <div className="flex w-full max-w-md flex-col gap-2">
            <form
              onSubmit={(event) => {
                handleSubmit(onSubmit)(event)?.catch(() => {})
              }}
              noValidate
              className="flex flex-col gap-4 sm:flex-row sm:items-start"
            >
              <div className="flex-1">
                <FieldWrapper id="newsletter-email" label={c.label} error={errors.email?.message} className="text-left">
                  <Input id="newsletter-email" type="email" placeholder={c.placeholder} {...register('email')} />
                </FieldWrapper>
              </div>
              <Button type="submit" size="lg" loading={isSubmitting} className="sm:mt-8">
                {c.submit}
              </Button>
            </form>
            {submitError && (
              <p role="alert" className="text-caption text-error">
                {submitError}
              </p>
            )}
          </div>
        )}
      </FadeIn>
    </SectionContainer>
  )
}
