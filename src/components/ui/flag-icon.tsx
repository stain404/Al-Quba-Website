export type FlagCode = 'AE' | 'BD' | 'CN' | 'EG' | 'GB' | 'IN' | 'TR' | 'ZA'

/** Small 5-point star polygon, positioned/scaled via the parent <g> transform. */
function Star({ x, y, scale, fill }: { x: number; y: number; scale: number; fill: string }) {
  return (
    <polygon
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill={fill}
      points="0,-1 0.22,-0.31 0.95,-0.31 0.36,0.12 0.59,0.81 0,0.38 -0.59,0.81 -0.36,0.12 -0.95,-0.31 -0.22,-0.31"
    />
  )
}

const flags: Record<FlagCode, React.ReactNode> = {
  AE: (
    <>
      <rect width="30" height="6.67" fill="#00732F" />
      <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
      <rect y="13.33" width="30" height="6.67" fill="#000000" />
      <rect width="7.5" height="20" fill="#FF0000" />
    </>
  ),
  BD: (
    <>
      <rect width="30" height="20" fill="#006A4E" />
      <circle cx="13" cy="10" r="6" fill="#F42A41" />
    </>
  ),
  CN: (
    <>
      <rect width="30" height="20" fill="#DE2910" />
      <Star x={7} y={6} scale={2.6} fill="#FFDE00" />
      <Star x={12} y={2.5} scale={0.8} fill="#FFDE00" />
      <Star x={13.4} y={5} scale={0.8} fill="#FFDE00" />
      <Star x={13.4} y={7.8} scale={0.8} fill="#FFDE00" />
      <Star x={12} y={10} scale={0.8} fill="#FFDE00" />
    </>
  ),
  EG: (
    <>
      <rect width="30" height="6.67" fill="#CE1126" />
      <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
      <rect y="13.33" width="30" height="6.67" fill="#000000" />
      <circle cx="15" cy="10" r="2" fill="#C09300" />
    </>
  ),
  GB: (
    <>
      <rect width="30" height="20" fill="#00247D" />
      <line x1="0" y1="0" x2="30" y2="20" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="30" y1="0" x2="0" y2="20" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="0" y1="0" x2="30" y2="20" stroke="#CF142B" strokeWidth="1.5" />
      <line x1="30" y1="0" x2="0" y2="20" stroke="#CF142B" strokeWidth="1.5" />
      <rect x="12" width="6" height="20" fill="#FFFFFF" />
      <rect y="7" width="30" height="6" fill="#FFFFFF" />
      <rect x="13.5" width="3" height="20" fill="#CF142B" />
      <rect y="8.5" width="30" height="3" fill="#CF142B" />
    </>
  ),
  IN: (
    <>
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.3" fill="none" stroke="#000080" strokeWidth="0.4" />
      <circle cx="15" cy="10" r="0.4" fill="#000080" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4
        const x2 = 15 + 2.3 * Math.cos(angle)
        const y2 = 10 + 2.3 * Math.sin(angle)
        return <line key={i} x1="15" y1="10" x2={x2} y2={y2} stroke="#000080" strokeWidth="0.25" />
      })}
    </>
  ),
  TR: (
    <>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="12" cy="10" r="5" fill="#FFFFFF" />
      <circle cx="13.5" cy="10" r="4" fill="#E30A17" />
      <Star x={18.5} y={10} scale={1.4} fill="#FFFFFF" />
    </>
  ),
  ZA: (
    <>
      <rect width="30" height="20" fill="#FFFFFF" />
      <polygon points="0,0 30,0 30,6 12,10 30,14 30,20 0,20" fill="#DE3831" />
      <polygon points="0,0 30,0 30,3 15,10 30,17 30,20 0,20" fill="#002395" />
      <polygon points="0,0 15,10 0,20" fill="#000000" />
      <polygon points="0,7 18,10 0,13" fill="#FFB612" />
      <polygon points="0,8 16,10 0,12" fill="#007A4D" />
    </>
  ),
}

export function FlagIcon({ code, className }: { code: FlagCode; className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      className={className}
      role="img"
      aria-hidden
    >
      {flags[code]}
    </svg>
  )
}
