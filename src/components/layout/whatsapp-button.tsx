'use client'

import * as React from 'react'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { cn } from '@/lib/utils'

export const WHATSAPP_NUMBER = '971505762203'
const DEFAULT_MESSAGE = "Hi, I'd like to know more about Al Quba Investment."

/**
 * Site-wide floating click-to-chat button — opens a WhatsApp chat with
 * the firm's number and a pre-filled starter message via wa.me. No
 * account or API setup required; rendered once in the root layout so it
 * persists across every page.
 *
 * Fixed positioning means it never leaves the viewport, so on shorter
 * mobile screens it was sitting on top of the footer once scrolled to
 * the bottom, obscuring the legal links beneath it. Fades out once the
 * footer scrolls into view.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
  const [overFooter, setOverFooter] = React.useState(false)

  React.useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const observer = new IntersectionObserver(([entry]) => setOverFooter(entry.isIntersecting), {
      rootMargin: '0px 0px -10% 0px',
    })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={overFooter}
      tabIndex={overFooter ? -1 : undefined}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 ease-institutional hover:scale-105',
        overFooter ? 'pointer-events-none translate-y-3 opacity-0' : 'opacity-100'
      )}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
