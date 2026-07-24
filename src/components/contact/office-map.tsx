import { SectionContainer } from '@/components/layout/section-container'
import { FadeIn } from '@/components/motion/reveal'

/**
 * Contact / Office Map.
 * A single embedded map of the Dubai office — a quiet trust signal,
 * not a focal point, so it stays compact, matches the page width, and
 * carries no controls beyond what Google's basic embed provides.
 */
export function OfficeMap() {
  return (
    <SectionContainer surface="canvas" spacing="md">
      <FadeIn>
        <div className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-border">
          <iframe
            title="Al Quba Investment — Dubai office location"
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
