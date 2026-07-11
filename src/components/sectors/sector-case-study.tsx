'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { Card } from '@/components/cards/card'
import { Badge } from '@/components/ui/badge'
import { fadeSide, fadeOnly, defaultViewport, transitionContent } from '@/lib/animations'
import type { SectorCaseStudy as SectorCaseStudyType, SectionHeadingOverride } from '@/lib/sectors-data'

/**
 * Sector Detail / Case Study.
 * A single real-world example, presented as one wide card rather than a
 * grid — distinct from the FeatureCard/InvestmentCard patterns used
 * elsewhere on this page. Doubles as a "Partner" spotlight for sectors
 * whose case study is really about a named company (e.g. Technology),
 * hence the brand-forward title treatment, logo slot, and badge. Slides
 * in from the side on scroll rather than the site's default fade+rise,
 * since this section is meant to feel like a distinct spotlight moment.
 */
export function SectorCaseStudy({
  caseStudy,
  heading,
  surface = 'muted',
}: {
  caseStudy: SectorCaseStudyType | SectorCaseStudyType[]
  heading?: SectionHeadingOverride
  surface?: 'canvas' | 'muted'
}) {
  const prefersReduced = useReducedMotion()
  const items = Array.isArray(caseStudy) ? caseStudy : [caseStudy]

  return (
    <SectionContainer surface={surface} spacing="lg" className="overflow-x-hidden">
      <SectionHeading
        eyebrow={heading?.eyebrow ?? 'Case Study'}
        title={heading?.title ?? 'A recent example of this sector at work'}
      />

      <div className="mt-16 flex flex-col gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={prefersReduced ? fadeOnly : fadeSide('left')}
            transition={{ delay: index * 0.08 }}
          >
            <Card surface="canvas" padding="lg" className="flex flex-col gap-8">
              {item.logoSrc && (
                <motion.div
                  initial={{ opacity: 0, x: prefersReduced ? 0 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={defaultViewport}
                  transition={{ ...transitionContent, delay: 0.15 }}
                  whileHover={prefersReduced ? undefined : { scale: 1.03 }}
                  className="relative aspect-[196/202] w-full max-w-[180px]"
                >
                  <Image
                    src={item.logoSrc}
                    alt={`${item.title} logo`}
                    fill
                    sizes="180px"
                    className="object-contain"
                  />
                </motion.div>
              )}

              <div className="flex flex-col gap-4">
                <Badge variant="gold" className="w-fit">
                  Featured Partner
                </Badge>
                <h3 className="font-display text-display-sm text-text-primary">{item.title}</h3>
                <p className="max-w-measure text-body-md text-text-secondary">{item.description}</p>
              </div>
              <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1">
                    <dt className="text-caption uppercase tracking-wide text-text-tertiary">{metric.label}</dt>
                    <dd className="font-mono text-data-md text-text-primary">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
