import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendMail } from '@/lib/mailer'

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  inquiryType: z.string(),
  message: z.string().min(20),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 })
  }

  const { fullName, email, company, inquiryType, message } = parsed.data

  try {
    await sendMail({
      subject: `New contact form inquiry: ${fullName}`,
      replyTo: email,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Company / Family office: ${company}`,
        `Inquiry type: ${inquiryType}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })
  } catch (err) {
    console.error('Contact form email failed:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
