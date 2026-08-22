/**
 * Thin wrapper over the GTM dataLayer and the Meta Pixel.
 *
 * Everything the site tracks goes through `trackEvent` rather than
 * touching `window.dataLayer` or `window.fbq` directly, so that:
 *   - there is one place to audit what leaves the browser,
 *   - calls are inert when a destination isn't configured (no container
 *     or pixel ID in the environment, SSR, or a bot with no `window`)
 *     instead of throwing, and each destination fails independently, so
 *     running one without the other is a supported configuration,
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
    /** Installed by the Meta Pixel snippet. Present as a queueing stub
     *  from the snippet's first line, before `fbevents.js` loads. */
    fbq?: (
      method: 'track' | 'trackCustom' | 'init',
      event: string,
      payload?: EventPayload
    ) => void
  }
}

/**
 * How this site's conversions map onto Meta's vocabulary.
 *
 * Meta only attributes and optimises against names it recognises, so
 * where a standard event fits, the standard name is used. Investor
 * dashboard logins have no standard equivalent — that is an existing
 * client signing in, not a conversion — so it goes through
 * `trackCustom`, keeping it out of Meta's standard-event reporting
 * rather than mislabelling it as something Meta should optimise toward.
 */
const metaEventMap: Record<AnalyticsEvent, { method: 'track' | 'trackCustom'; name: string }> = {
  generate_lead: { method: 'track', name: 'Lead' },
  newsletter_signup: { method: 'track', name: 'Subscribe' },
  whatsapp_click: { method: 'track', name: 'Contact' },
  investor_login_click: { method: 'trackCustom', name: 'InvestorLogin' },
}

export function trackEvent(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return

  // Created by the GTM snippet. If the container ID isn't set the array
  // never exists, and this half becomes a no-op — which is what we want
  // in local dev and preview builds.
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload })
  }

  // Same contract for the pixel: `fbq` only exists once the Meta Pixel
  // snippet has run, which only happens when the pixel ID is set.
  if (typeof window.fbq === 'function') {
    const meta = metaEventMap[event]
    window.fbq(meta.method, meta.name, payload)
  }
}
