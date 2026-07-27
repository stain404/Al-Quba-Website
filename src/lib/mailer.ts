import nodemailer from 'nodemailer'

/**
 * SMTP-based mail delivery for form notifications. Configured entirely
 * via env vars so no credentials live in source. Requires a Google
 * Workspace (or Gmail) App Password, not the account's normal login
 * password — see .env.local.example for the full setup steps.
 */
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Email is not configured: missing SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS env vars.')
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

export async function sendMail(opts: { subject: string; text: string; replyTo?: string }) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER
  if (!to) {
    throw new Error('Email is not configured: missing CONTACT_TO_EMAIL env var.')
  }
  const transporter = getTransporter()
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
  })
}
