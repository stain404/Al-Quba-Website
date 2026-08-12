/**
 * Normalises a supplied logo into the shared Portfolio grid set.
 *
 * The originals each arrive as a mark floating in a different amount of
 * whitespace, so dropping them straight into equal boxes makes some read
 * tiny and others huge. Every file in public/logos is therefore trimmed
 * to its mark and re-padded to a common 800x400 (2:1) canvas, with the
 * mark capped at 50% width / 56% height, on the #FBFAF7 card colour so
 * it reads as sitting directly on the card with no plate behind it.
 *
 * Usage: node scripts/normalise-logo.js <source> <out-name>
 *   e.g. node scripts/normalise-logo.js public/mapshore.png mapshore.png
 *
 * See the `logos` map in src/components/home/portfolio-companies.tsx —
 * the padding colour must track the card background.
 */
const sharp = require('sharp')

const CANVAS_W = 800
const CANVAS_H = 400
const MAX_MARK_W = Math.round(CANVAS_W * 0.5) // 400
const MAX_MARK_H = Math.round(CANVAS_H * 0.56) // 224
const CARD_BG = { r: 0xfb, g: 0xfa, b: 0xf7 }

const [, , src, outName] = process.argv
if (!src || !outName) {
  console.error('usage: node scripts/normalise-logo.js <source> <out-name>')
  process.exit(1)
}

;(async () => {
  // Flatten first so a transparent original trims against the card colour
  // rather than against its own alpha, which keeps both kinds of source
  // file landing on the same result.
  const trimmed = await sharp(src)
    .flatten({ background: CARD_BG })
    .trim({ threshold: 12 })
    .resize({
      width: MAX_MARK_W,
      height: MAX_MARK_H,
      fit: 'inside',
      withoutEnlargement: false,
    })
    .toBuffer({ resolveWithObject: true })

  const { width, height } = trimmed.info

  // Trim only removes the OUTER margin; a source drawn on pure #FFFFFF
  // still carries white inside its own bounding box, which reads as a
  // white plate seamed against the #FBFAF7 card. Repaint anything that
  // near-white onto the card colour so the mark sits directly on the
  // card. The two colours are within a few points of each other, so
  // antialiased mark edges survive this untouched.
  const raw = await sharp(trimmed.data).raw().toBuffer({ resolveWithObject: true })
  const px = raw.data
  const channels = raw.info.channels
  for (let i = 0; i < px.length; i += channels) {
    if (px[i] >= 244 && px[i + 1] >= 244 && px[i + 2] >= 244) {
      px[i] = CARD_BG.r
      px[i + 1] = CARD_BG.g
      px[i + 2] = CARD_BG.b
    }
  }

  const left = Math.round((CANVAS_W - width) / 2)
  const top = Math.round((CANVAS_H - height) / 2)

  await sharp(px, { raw: { width, height, channels } })
    .extend({
      left,
      right: CANVAS_W - width - left,
      top,
      bottom: CANVAS_H - height - top,
      background: CARD_BG,
    })
    .png({ compressionLevel: 9 })
    .toFile(`public/logos/${outName}`)

  console.log(`public/logos/${outName}: mark ${width}x${height} on ${CANVAS_W}x${CANVAS_H}`)
})()
