import { NextResponse } from 'next/server'
import { z } from 'zod'
import { appendSubmission } from '@/lib/submissions-store'

const newsletterSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = newsletterSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  await appendSubmission('newsletter-subscribers.json', parsed.data)

  return NextResponse.json({ ok: true })
}
