import fs from 'node:fs/promises'
import path from 'node:path'

const DATA_DIR = path.join(process.cwd(), 'data')

/**
 * Appends a record to a JSON file under /data. Simple read-modify-write —
 * fine for a low-traffic marketing site's contact/newsletter volume, not
 * built for high concurrency.
 *
 * IMPORTANT: this only persists on a filesystem that survives between
 * requests. It works for local dev and traditional Node hosting, but
 * Vercel's serverless functions have an ephemeral filesystem — writes
 * there will silently disappear. Swap this for a real database (e.g.
 * Vercel KV/Postgres) before relying on it in production on Vercel.
 */
export async function appendSubmission(fileName: string, record: Record<string, unknown>) {
  await fs.mkdir(DATA_DIR, { recursive: true })
  const filePath = path.join(DATA_DIR, fileName)

  let existing: Record<string, unknown>[] = []
  try {
    existing = JSON.parse(await fs.readFile(filePath, 'utf-8'))
  } catch {
    existing = []
  }

  existing.push({ ...record, submittedAt: new Date().toISOString() })
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2))
}
