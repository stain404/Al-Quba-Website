import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site-config'

export const runtime = 'edge'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Single shared Open Graph / Twitter Card image, referenced by every
 * page's metadata (see src/lib/seo.ts) rather than generated per-route —
 * keeps social share previews on-brand without needing per-page art.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#071d49',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 72,
            height: 72,
            borderRadius: 10,
            background: 'rgba(176,141,87,0.14)',
            color: '#C9A96E',
            fontSize: 32,
            fontWeight: 600,
            fontFamily: 'Georgia, serif',
            marginBottom: 40,
          }}
        >
          AQ
        </div>
        <div
          style={{
            fontSize: 56,
            fontFamily: 'Georgia, serif',
            color: '#F7F6F2',
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: '#9BA3B0',
            maxWidth: 820,
          }}
        >
          Global investment and asset management, headquartered in Dubai.
        </div>
      </div>
    ),
    { ...size }
  )
}
