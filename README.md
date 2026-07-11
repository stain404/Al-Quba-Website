# Al Quba Investment LLC — Component Library

Foundational design system + reusable component library for a premium,
institutional investment brand. No pages are assembled yet — this is the
building-block layer, ready to compose into routes under `src/app/`.

## What's included

- `design-system/DESIGN_SYSTEM.md` — full design language: color tokens,
  type scale, spacing, motion philosophy, architecture, SEO & a11y standards.
- `tailwind.config.ts` — Tailwind theme wired to CSS custom properties.
- `src/app/globals.css` — token definitions + base styles.
- `src/lib/utils.ts` — `cn()`, currency/number formatting helpers.
- `src/lib/animations.ts` — shared Framer Motion variants and easing.
- `src/types/index.ts` — shared domain types used across components.
- `src/components/ui/` — Button, Input/Textarea/Select/Checkbox, Badge, Skeleton, Spinner.
- `src/components/typography/` — Eyebrow, Heading, SectionHeading.
- `src/components/layout/` — Navbar, MegaMenu, Footer, SectionContainer.
- `src/components/cards/` — Card, FeatureCard, InvestmentCard, BlogCard, TestimonialCard.
- `src/components/data-display/` — StatCounter, Timeline.
- `src/components/sections/` — CTASection.
- `src/components/forms/` — ContactForm (React Hook Form + Zod reference implementation).
- `src/components/motion/` — FadeIn, RevealOnScroll, Stagger, StaggerItem.
- `src/components/feedback/` — LoadingState, skeleton loader layouts.

## Setup

```bash
npm install
```

Add `Fraunces`, `Inter`, and `IBM Plex Mono` via `next/font/google` in your
root `layout.tsx` and expose them as the `--font-display`, `--font-body`,
`--font-mono` CSS variables already referenced in `globals.css`, e.g.:

```tsx
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-mono' })
```

Then apply `className={cn(fraunces.variable, inter.variable, plexMono.variable)}`
on the `<html>` or `<body>` tag.

## Usage example

```tsx
import { SectionContainer } from '@/components/layout/section-container'
import { SectionHeading } from '@/components/typography/heading'
import { FeatureCard, FeatureGrid } from '@/components/cards/feature-card'
import { Stagger } from '@/components/motion/reveal'
import { Landmark, ShieldCheck, Globe2 } from 'lucide-react'

export function CapabilitiesSection() {
  return (
    <SectionContainer surface="canvas" spacing="lg">
      <SectionHeading
        eyebrow="What we do"
        title="Disciplined capital, deployed globally"
        description="Three decades of combined experience across private equity, real assets, and public markets."
      />
      <Stagger className="mt-16">
        <FeatureGrid>
          <FeatureCard icon={Landmark} title="Private Equity" description="Direct and co-investment strategies across growth-stage companies." href="/strategies/private-equity" />
          <FeatureCard icon={ShieldCheck} title="Capital Preservation" description="Risk-managed allocation built for multi-generational wealth." href="/strategies/capital-preservation" />
          <FeatureCard icon={Globe2} title="Global Real Assets" description="Infrastructure and real estate across four continents." href="/strategies/real-assets" />
        </FeatureGrid>
      </Stagger>
    </SectionContainer>
  )
}
```

## Conventions

See §7 "Component Architecture" and §9 "Accessibility Standards" in
`design-system/DESIGN_SYSTEM.md` for naming, composition, and a11y rules
every new component should follow.
