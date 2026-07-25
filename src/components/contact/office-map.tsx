import { getLocale } from 'next-intl/server'
import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'

const copy = {
  en: { title: 'Al Quba Investment — Dubai office location' },
  ar: { title: 'القبا للاستثمار — موقع مكتب دبي' },
} as const

/**
 * Contact / Office Map.
 * A single embedded map of the Dubai office — a quiet trust signal,
 * not a focal point, so it stays compact, matches the page width, and
 * carries no controls beyond what Google's basic embed provides.
 */
export async function OfficeMap() {
  const locale = (await getLocale()) as keyof typeof copy
  const c = copy[locale]

  return (
    <SectionContainer surface="canvas" spacing="md">
      <FadeIn>
        <div className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-border">
          <iframe
            title={c.title}
            src="https://www.google.com/maps?q=Al+Mezan+Tower,+Dubai,+UAE&output=embed"
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeIn>
    </SectionContainer>
  )
}
