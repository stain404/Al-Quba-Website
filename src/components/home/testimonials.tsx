'use client'

import { useReducedMotion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { InstitutionalTestimonial } from '@/components/cards/institutional-testimonial'
import { FadeIn } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
import type { TestimonialItem } from '@/types'

const copy = {
  en: {
    eyebrow: 'Testimonials',
    title: 'What our partners say',
    description: 'Direct feedback from the institutions and individual investors we work alongside.',
    institutional: {
      quote: 'Al Quba demonstrates a structured and transparent approach to investment management. The clarity in execution and consistency in communication reflect a strong operational framework.',
      name: 'Banger Financial Labs',
      role: 'Institutional Partner',
      logoSrc: '/banger-finlabs-logo.jpeg',
    },
    individual: [
      { quote: 'What we value most is the transparency. You always know where your money is going and how it’s working.', name: 'Sidra Aydeed', role: 'Investor' },
      { quote: 'Al Quba has consistently delivered on what they promised. The returns have been strong, and I always know exactly where my capital stands.', name: 'Basheer Ayathulla', role: 'Investor' },
      { quote: 'The level of service is what stands out most. Every question is answered directly, and the results have exceeded what I expected going in.', name: 'Ashraf Mavullah', role: 'Investor' },
    ] satisfies TestimonialItem[],
  },
  ar: {
    eyebrow: 'آراء عملائنا',
    title: 'ماذا يقول شركاؤنا',
    description: 'آراء مباشرة من المؤسسات والمستثمرين الأفراد الذين نعمل معهم.',
    institutional: {
      quote: 'تُظهر القبا نهجًا منظمًا وشفافًا في إدارة الاستثمار. وضوح التنفيذ واتساق التواصل يعكسان إطار عمل تشغيليًا قويًا.',
      name: 'Banger Financial Labs',
      role: 'شريك مؤسسي',
      logoSrc: '/banger-finlabs-logo.jpeg',
    },
    individual: [
      { quote: 'أكثر ما نقدّره هو الشفافية. تعرف دائمًا إلى أين تذهب أموالك وكيف تعمل.', name: 'سدرة عيديد', role: 'مستثمرة' },
      { quote: 'التزمت القبا دائمًا بما وعدت به. كانت العوائد قوية، وأعرف دائمًا بالضبط أين يقف رأس مالي.', name: 'بشير أياتالله', role: 'مستثمر' },
      { quote: 'أكثر ما يميزهم هو مستوى الخدمة. تتم الإجابة عن كل سؤال مباشرة، وتفوقت النتائج على ما توقعته في البداية.', name: 'أشرف مافولا', role: 'مستثمر' },
    ] satisfies TestimonialItem[],
  },
} as const

/**
 * Section 9.5 — Testimonials.
 * The institutional quote stays a full-width spotlight, unchanged. Below
 * it, individual investor testimonials scroll continuously in one
 * direction — a conveyor-belt marquee (same `animate-marquee` keyframe
 * used by the old brand-logo strip) rather than the discrete, one-at-a-
 * time auto-rotating carousel this replaces. The track renders the set
 * twice back to back and translates exactly -50%, so the loop point is
 * invisible; the duplicate copy is `aria-hidden` so screen readers only
 * hear each quote once. Pausing on hover/focus and skipping the
 * animation under `prefers-reduced-motion` are both pure CSS — no
 * interval or state needed.
 */
export function Testimonials() {
  const prefersReduced = useReducedMotion()
  const locale = useLocale() as keyof typeof copy
  const c = copy[locale]
  const track = [...c.individual, ...c.individual]

  return (
    <SectionContainer surface="muted" spacing="lg">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
      <div className="mt-16 flex flex-col gap-12">
        <FadeIn>
          <InstitutionalTestimonial {...c.institutional} />
        </FadeIn>

        <FadeIn
          dir="ltr"
          className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          {/* Forced ltr on this whole mask wrapper, not just the track:
              the -50% translateX loop assumes the track's untransformed
              rest position is flush with its CONTAINING BLOCK's left
              edge, overflowing to the right — that anchor edge is decided
              by the *parent's* direction, not the track's own `dir`, so
              setting dir only on the track (as a first attempt) fixed the
              card order but not the anchor, leaving the loop still
              broken under the page's rtl direction. Setting it here,
              higher up, makes the track's containing block ltr too, so
              the loop math is correct regardless of page direction —
              each card's own Arabic text still renders correctly via the
              browser's own bidi handling, independent of this wrapper. */}
          <div
            className={cn(
              'flex w-max gap-6',
              !prefersReduced && 'animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]'
            )}
          >
            {track.map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                aria-hidden={i >= c.individual.length}
                className="w-[280px] shrink-0 sm:w-[320px]"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
