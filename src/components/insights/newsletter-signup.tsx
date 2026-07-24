'use client'

import * as React from 'react'
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

const newsletterSchema = z.object({
  email: z.string().email('Enter a valid email address'),
})

type NewsletterValues = z.infer<typeof newsletterSchema>

/**
 * Insights / Newsletter Signup.
 * A compact single-field form following the same React Hook Form + Zod
 * pattern established by ContactForm, scaled down for a low-friction
 * subscribe action rather than a full inquiry.
 */
export function NewsletterSignup() {
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
    <SectionContainer surface="canvas" spacing="lg">
      <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <Eyebrow>Stay Informed</Eyebrow>
        <Heading as="h2" size="display-sm">
          Stay Ahead with Exclusive Market Insights
        </Heading>
        <p className="max-w-measure text-body-md text-text-secondary">
          Receive carefully curated investment perspectives, market
          analysis, and strategic insights from the Al Quba Investment
          team — delivered directly to your inbox.
        </p>

        {isSubmitSuccessful ? (
          <div className="flex items-center gap-2 text-body-md font-medium text-success">
            <CheckCircle2 className="size-5" strokeWidth={1.5} aria-hidden />
            You&rsquo;re subscribed. Look out for our next note.
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
                <FieldWrapper id="newsletter-email" label="Email address" error={errors.email?.message} className="text-left">
                  <Input id="newsletter-email" type="email" placeholder="you@company.com" {...register('email')} />
                </FieldWrapper>
              </div>
              <Button type="submit" size="lg" loading={isSubmitting} className="sm:mt-8">
                Subscribe
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
