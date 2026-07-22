import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#071d49',
          borderRadius: 6,
          color: '#B08D57',
          fontSize: 18,
          fontWeight: 600,
          fontFamily: 'Georgia, serif',
        }}
      >
        AQ
      </div>
    ),
    { ...size }
  )
}
