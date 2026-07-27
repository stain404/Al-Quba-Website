import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendMail } from '@/lib/mailer'

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
    await sendMail({
      subject: 'New newsletter subscriber',
      text: `${parsed.data.email} subscribed to the newsletter.`,
    })
  } catch (err) {
    console.error('Newsletter signup email failed:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
