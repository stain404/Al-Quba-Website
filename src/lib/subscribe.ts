import { trackEvent } from '@/lib/analytics'

/** Where on the site the subscribe came from, for segmenting in GA4. */
export type NewsletterSource = 'footer' | 'insights'

export async function subscribeToNewsletter(email: string, source: NewsletterSource = 'footer') {
  const res = await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  if (!res.ok) throw new Error('Subscription failed')

  // Fired here rather than in each form so the footer and the
  // insights-page signup are counted identically and can't drift apart.
  // The email address itself is deliberately not passed through.
  trackEvent('newsletter_signup', { source })
}
