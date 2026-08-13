import { NextResponse } from 'next/server'
import { z } from 'zod'
import { addSubscriber } from '@/lib/newsletter-list'

const newsletterSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = newsletterSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  try {
    await addSubscriber(parsed.data.email)
  } catch (err) {
    console.error('Newsletter signup failed:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
