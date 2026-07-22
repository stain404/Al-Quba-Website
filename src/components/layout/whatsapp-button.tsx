import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'

const WHATSAPP_NUMBER = '971526697092'
const DEFAULT_MESSAGE = "Hi, I'd like to know more about Al Quba Investment."

/**
 * Site-wide floating click-to-chat button — opens a WhatsApp chat with
 * the firm's number and a pre-filled starter message via wa.me. No
 * account or API setup required; rendered once in the root layout so it
 * persists across every page.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 ease-institutional hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
