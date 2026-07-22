import { NextResponse } from 'next/server'
import { z } from 'zod'
import { appendSubmission } from '@/lib/submissions-store'

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

  await appendSubmission('contact-submissions.json', parsed.data)

  return NextResponse.json({ ok: true })
}
