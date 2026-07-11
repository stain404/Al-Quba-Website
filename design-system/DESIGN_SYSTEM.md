# Al Quba Investment LLC — Design System & Frontend Architecture

A production-grade design language for an institutional investment and asset
management brand headquartered in Dubai. The direction reads closer to a
sovereign wealth fund or a global asset manager than a fintech startup:
quiet confidence, generous whitespace, engineered typography, restrained
metallic accent used like a signature rather than decoration.

---

## 1. Brand Signature

The one memorable device across the site: a **hairline gold rule** (1px,
`--color-accent`) that appears exactly three ways — under an eyebrow label,
as a divider between a stat and its description, and as the active-state
underline in navigation. It never appears as a border on cards or buttons.
Restraint is the point: gold is earned, not sprayed.

---

## 2. Color Tokens

Two-mode palette (light "Canvas" mode is default/primary; dark "Ink" mode
is used for hero and closing/CTA sections to create editorial contrast
between sections, similar to Apple product pages).

```css
:root {
  /* Canvas (light) surfaces */
  --color-canvas:        #FAFAF8;   /* page background */
  --color-canvas-raised: #FFFFFF;   /* cards, panels */
  --color-canvas-muted:  #F2F1EC;   /* subtle section bands */

  /* Ink (dark) surfaces */
  --color-ink:           #0B0E14;   /* hero / footer / CTA background */
  --color-ink-raised:    #12161F;   /* cards on dark */
  --color-ink-muted:     #171C27;

  /* Text */
  --color-text-primary:      #12151B;  /* on canvas */
  --color-text-secondary:    #5B6472;
  --color-text-tertiary:     #8E96A3;
  --color-text-inverse:      #F7F6F2;  /* on ink */
  --color-text-inverse-muted:#9BA3B0;

  /* Brand */
  --color-navy:           #0F1B2D;   /* deep trust navy — secondary brand */
  --color-navy-tint:      #1B2C45;
  --color-accent:         #B08D57;   /* metallic gold — the signature */
  --color-accent-soft:    #D9C6A0;
  --color-accent-on-ink:  #C9A96E;

  /* Semantic */
  --color-success: #2F6E4E;
  --color-warning: #A9752B;
  --color-error:   #B3403A;
  --color-focus:   #3A5FCD;          /* accessible focus ring, distinct from accent */

  /* Structural */
  --color-border:        #E4E2DA;
  --color-border-strong: #CFCCC2;
  --color-border-ink:    #262B36;
}
```

Usage rules:
- Gold accent text/rules ≤ 1 per viewport section. Never gold-on-gold, never as a background fill larger than a 1–2px rule or a small icon glyph.
- Navy is the "corporate trust" color for secondary buttons, tags, chart lines.
- Never pure `#000`/`#fff` — everything is slightly warmed to avoid a cold SaaS feel.

---

## 3. Typography Scale

Three-role type system:

| Role     | Typeface                          | Character                                   |
|----------|------------------------------------|----------------------------------------------|
| Display  | **Fraunces** (serif, optical size) | Editorial authority — headlines, pull quotes |
| Body/UI  | **Inter**                          | Neutral, legible, enterprise UI               |
| Data     | **IBM Plex Mono**                  | Figures, tickers, statistics, timestamps      |

```css
--font-display: 'Fraunces', 'Iowan Old Style', Georgia, serif;
--font-body:    'Inter', -apple-system, 'Segoe UI', sans-serif;
--font-mono:    'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;
```

Type scale (fluid, `clamp()`-based, 4px baseline grid):

| Token        | Size (clamp)                          | Line-height | Weight | Use                    |
|--------------|----------------------------------------|-------------|--------|--------------------------|
| `display-xl` | clamp(2.75rem, 5vw + 1rem, 5.5rem)     | 1.02        | 400    | Hero headline            |
| `display-lg` | clamp(2.25rem, 3.5vw + 1rem, 4rem)     | 1.05        | 400    | Section hero headline    |
| `display-md` | clamp(1.875rem, 2.5vw + 1rem, 2.75rem) | 1.1         | 400    | Section headline         |
| `display-sm` | clamp(1.5rem, 1.5vw + 1rem, 2rem)      | 1.15        | 450    | Card / subsection title  |
| `heading-lg` | 1.5rem / 24px                          | 1.3         | 600    | Component heading         |
| `heading-md` | 1.25rem / 20px                         | 1.35        | 600    | Card title                |
| `heading-sm` | 1.125rem / 18px                        | 1.4         | 600    | Small heading             |
| `body-lg`    | 1.125rem / 18px                        | 1.6         | 400    | Intro paragraphs          |
| `body-md`    | 1rem / 16px                             | 1.65        | 400    | Default body              |
| `body-sm`    | 0.875rem / 14px                         | 1.55        | 400    | Secondary text            |
| `caption`    | 0.75rem / 12px                          | 1.4         | 500    | Labels, metadata           |
| `eyebrow`    | 0.75rem / 12px                          | 1            | 600    | Uppercase, +0.14em tracking|
| `data-lg`    | 2.5rem / 40px (mono)                    | 1           | 500    | Stat figures               |
| `data-md`    | 1.5rem / 24px (mono)                    | 1.1         | 500    | Inline data                |

Rules: display face is **never bold** (use 400/450/500 only — weight comes
from size, not boldness, which keeps it editorial not "marketing site").
Eyebrows are always `Inter`, uppercase, letter-spaced, paired with the gold
hairline rule beneath.

---

## 4. Spacing Scale

8px base unit, extended for generous editorial whitespace at the section level.

```
space-1:  4px    space-8:  64px
space-2:  8px    space-10: 80px
space-3:  12px   space-12: 96px
space-4:  16px   space-16: 128px
space-5:  20px   space-20: 160px
space-6:  24px   space-24: 192px
space-7:  32px   space-32: 256px
```

Section vertical rhythm: mobile `space-16` (128px), desktop `space-24`–`space-32`
(192–256px) top/bottom. Container max-width `1280px` (`--container-max`),
with an editorial-narrow reading measure of `680px` for long-form copy.

---

## 5. Radius, Elevation, Borders

Enterprise-premium = **near-flat**, not app-like bubbly.

```
--radius-sm: 4px    /* inputs, tags */
--radius-md: 8px    /* cards, buttons */
--radius-lg: 16px   /* feature panels, modals */
--radius-full: 999px /* pills, avatars */

--shadow-sm: 0 1px 2px rgba(11,14,20,0.04)
--shadow-md: 0 4px 16px rgba(11,14,20,0.06)
--shadow-lg: 0 16px 48px rgba(11,14,20,0.10)
--shadow-focus: 0 0 0 3px rgba(58,95,205,0.35)   /* --color-focus ring */
```

Cards on canvas use `--shadow-sm` at rest, `--shadow-md` on hover — never a
colored/gold shadow. Cards on ink surfaces use a 1px `--color-border-ink`
border instead of shadow.

---

## 6. Animation Philosophy

Motion communicates **stability and precision**, not playfulness.

Principles:
1. **Reveal, don't bounce.** Easing is always a custom cubic-bezier that
   decelerates smoothly — no spring/overshoot on entrance content.
   `easeInstitutional: [0.16, 1, 0.3, 1]`
2. **Motion is earned by scroll, not by load.** Prefer `whileInView` reveals
   over autoplay-on-mount sequences, except the hero (one orchestrated
   entrance, once).
3. **Duration bands:** micro-interactions 150–200ms, content reveals
   400–600ms, section-level choreography (staggered children) 600–900ms
   total with 60–90ms stagger.
4. **Translate distance is small.** 16–24px max on Y-axis reveals — this is
   a bank, not a landing page with parallax gimmicks.
5. **Hover states are single-property.** One of: opacity, translateY(-2px),
   border/underline color, or subtle scale(1.01) — never combine more than
   two, never scale a whole card aggressively.
6. **Respect `prefers-reduced-motion`** globally — all reveal variants fall
   back to opacity-only, durations halved.
7. **No decorative looping animation** (no floating blobs, no infinite
   gradient shimmer) except skeleton loaders and live-data tickers, which
   are functional, not decorative.

Shared easing/duration tokens live in `src/lib/animations.ts` and every
motion component imports from there — no ad hoc easing curves in component
files.

---

## 7. Component Architecture

```
src/
  app/                          # (routes added later — not in scope now)
  components/
    ui/                         # primitive, shadcn-derived atoms
      button.tsx
      inputs.tsx                # Input, Textarea, Select, Checkbox
      badge.tsx
      skeleton.tsx
      spinner.tsx
    typography/
      heading.tsx                # Eyebrow + Heading system
    layout/
      navbar.tsx
      mega-menu.tsx
      footer.tsx
      section-container.tsx
    cards/
      card.tsx                   # base Card primitive
      feature-card.tsx
      investment-card.tsx
      blog-card.tsx
      testimonial-card.tsx
    data-display/
      stat-counter.tsx
      timeline.tsx
    sections/
      cta-section.tsx
    forms/
      contact-form.tsx           # React Hook Form + Zod reference implementation
    motion/
      reveal.tsx                 # FadeIn / RevealOnScroll / Stagger primitives
    feedback/
      loading-states.tsx         # LoadingState + Skeleton composite loaders
  lib/
    utils.ts                     # cn() class merge helper
    animations.ts                # shared Framer Motion variants/easings
  types/
    index.ts                     # shared domain types (NavItem, Stat, etc.)
```

Conventions:
- **Naming:** files kebab-case, components PascalCase, one primary export per file, named export (no default exports) for tree-shaking clarity and predictable imports.
- **Composition over configuration:** components expose `className` passthrough via `cn()` and compose with children rather than exposing dozens of boolean props.
- **Variants** are defined with `class-variance-authority` (`cva`) for `button`, `badge`, `card` so variant logic is typed and centralized, matching shadcn conventions.
- **Server vs Client:** everything with motion, interactivity, or hooks is explicitly `'use client'`. Pure presentational leaf components stay server-renderable where possible.
- **Icons:** `lucide-react` only, stroke width `1.5`, sized via the `size` prop — no icon fonts, no emoji, ever.
- **Accessibility:** every interactive component is keyboard-operable, uses semantic elements first, ARIA only to fill gaps, and visible focus rings use `--shadow-focus` (never `outline: none` without a replacement).

---

## 8. SEO Architecture (for future page work)

- Metadata via Next.js `generateMetadata` per route segment; centralized `siteConfig` in `lib/site-config.ts` (title template, OG defaults, JSON-LD `FinancialService` / `Organization` schema).
- Semantic landmarks: one `<h1>` per page, `<nav>`/`<main>`/`<footer>` landmarks from layout components below.
- Structured data placeholders reserved for: `Organization`, `FinancialService`, `BreadcrumbList`, `Article` (insights/blog).

## 9. Accessibility Standards

- WCAG 2.1 AA contrast minimum (body text ≥ 4.5:1; the gold accent is never used for body text on canvas because it fails AA — it is reserved for large text, rules, and iconography).
- All motion components respect `prefers-reduced-motion: reduce`.
- Focus-visible styling on every interactive element, tab order follows visual order.
- Form fields always paired with a `<label>` and `aria-describedby` error text.
- Target size minimum 44×44px for tap targets.

---

This document plus the component library below form the reusable foundation.
No page assembly is included yet, per scope.
