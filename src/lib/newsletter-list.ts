/**
 * Newsletter subscriber storage via Brevo's contacts API.
 *
 * Signups used to be emailed one-by-one to the office inbox, which meant
 * no list ever accumulated — addresses had to be transcribed by hand and
 * were easy to miss. Contacts now land in a Brevo list instead, viewable
 * and exportable from their dashboard, and on a free tier that covers
 * far more volume than this form will produce.
 *
 * Configured entirely via env vars so no credentials live in source —
 * see .env.local.example for where to get them.
 */

const BREVO_CONTACTS_ENDPOINT = 'https://api.brevo.com/v3/contacts'

export async function addSubscriber(email: string) {
  const { BREVO_API_KEY, BREVO_LIST_ID } = process.env
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    throw new Error(
      'Newsletter is not configured: missing BREVO_API_KEY/BREVO_LIST_ID env vars.'
    )
  }

  const res = await fetch(BREVO_CONTACTS_ENDPOINT, {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [Number(BREVO_LIST_ID)],
      // Turns a repeat signup into a no-op update rather than a
      // duplicate-contact error, so someone who subscribes twice sees
      // success instead of a failure they can do nothing about.
      updateEnabled: true,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`Brevo rejected the subscriber (${res.status}): ${detail}`)
  }
}
