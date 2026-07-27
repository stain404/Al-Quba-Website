import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'

export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

export const socials = [
  { href: 'https://www.facebook.com/profile.php?id=61564526213607', label: 'Facebook', icon: Facebook },
  { href: 'https://t.me/alqubainvestment', label: 'Telegram', icon: null },
  { href: 'https://www.linkedin.com/company/alquba-investment-llc/posts/?feedView=all', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/alquba_investment/', label: 'Instagram', icon: Instagram },
]

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group inline-flex size-10 items-center justify-center rounded-full border border-border-ink text-text-inverse-muted transition-colors duration-150 hover:border-text-inverse hover:text-text-inverse"
        >
          {social.icon
            ? <social.icon className="size-4" strokeWidth={1.5} />
            : <TelegramIcon className="size-4" />
          }
        </a>
      ))}
    </div>
  )
}
