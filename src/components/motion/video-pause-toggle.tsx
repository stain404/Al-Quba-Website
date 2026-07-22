'use client'

import * as React from 'react'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Small, low-contrast play/pause control for a background hero video.
 * Reads/writes `data-user-paused` on the video element itself (rather
 * than lifting shared state) so it can be dropped next to any hero's
 * `<video>` — including Home's, which has its own watchdog effect that
 * needs to know a pause was user-initiated before it decides whether to
 * resume playback.
 */
export function VideoPauseToggle({
  videoRef,
  className,
}: {
  videoRef: React.RefObject<HTMLVideoElement>
  className?: string
}) {
  const [isPlaying, setIsPlaying] = React.useState(true)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.dataset.userPaused = 'false'
      video.play().catch(() => {})
      setIsPlaying(true)
    } else {
      video.dataset.userPaused = 'true'
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
      className={cn(
        'flex size-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/70 opacity-50 backdrop-blur-sm transition-all duration-200 hover:opacity-100 hover:text-white focus-visible:opacity-100',
        className
      )}
    >
      {isPlaying ? (
        <Pause className="size-3.5" strokeWidth={1.5} fill="currentColor" />
      ) : (
        <Play className="size-3.5 translate-x-px" strokeWidth={1.5} fill="currentColor" />
      )}
    </button>
  )
}
