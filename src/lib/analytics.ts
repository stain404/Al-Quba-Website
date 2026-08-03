/**
 * Thin wrapper over the GTM dataLayer.
 *
 * Everything the site tracks goes through `trackEvent` rather than
 * touching `window.dataLayer` directly, so that:
 *   - there is one place to audit what leaves the browser,
 *   - calls are inert when GTM isn't configured (no container ID in the
 *     environment, SSR, or a bot with no `window`) instead of throwing,
 *   - event names stay a closed set rather than free-form strings
 *     scattered across components.
 *
 * No PII is ever passed. The events below deliberately carry only a
 * category and a non-identifying label (e.g. the inquiry type picked in
 * a dropdown) — never the name, email, company, or message body of a
 * submission. GA4 rejects PII in event parameters, and for an investment
 * firm handling investor enquiries it would be a data-protection problem
 * independent of what any analytics vendor allows.
 */

/** The closed set of conversions worth measuring on this site. */
export type AnalyticsEvent =
  /** Contact form submitted successfully — the primary conversion. */
  | 'generate_lead'
  /** Newsletter subscribed (footer or insights page). */
  | 'newsletter_signup'
  /** Floating WhatsApp button opened — a real, and currently untracked, lead path. */
  | 'whatsapp_click'
  /** Investor dashboard login opened. */
  | 'investor_login_click'

type EventPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: EventPayload[]
  }
}

export function trackEvent(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return
  // Created by the GTM snippet. If the container ID isn't set the array
  // never exists, and every call here becomes a no-op — which is what we
  // want in local dev and preview builds.
  if (!Array.isArray(window.dataLayer)) return

  window.dataLayer.push({ event, ...payload })
}
