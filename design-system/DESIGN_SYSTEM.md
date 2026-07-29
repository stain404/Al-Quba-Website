# Al Quba Investment LLC — Frontend Architecture & Standards

> **Visual design language lives in [`/DESIGN.md`](../DESIGN.md), not here.**
>
> This file previously carried the color, typography, spacing, radius,
> elevation, and motion specs. Those drifted badly from what actually
> shipped — it still described Fraunces as the display serif, a near-black
> `#0B0E14` ink, and a "display face is never bold" rule, none of which are
> true of the live site (Manrope 700, Gulf Navy `#071D49`, warmed sandstone
> surfaces). `DESIGN.md` at the project root is now the single source of
> visual truth, extracted from the shipped implementation, with machine-
> readable tokens in its frontmatter and `.impeccable/design.json`.
>
> What remains below is the part that never drifted: how the codebase is
> organized, and the SEO and accessibility standards every new page meets.

---

## 1. Component Architecture

```
src/
  app/
    [locale]/                     # next-intl routing — `en` unprefixed, `ar` under /ar
      layout.tsx                  # fonts, metadata, providers
      page.tsx                    # home
      about/ careers/ contact/ insights/ privacy/ terms/
    api/
      contact/ newsletter/        # Nodemailer-backed form delivery
  components/
    ui/                           # primitive, shadcn-derived atoms
      button.tsx
      inputs.tsx                  # Input, Textarea, Select, Checkbox
      badge.tsx
      skeleton.tsx  spinner.tsx
      flag-icon.tsx  social-links.tsx  whatsapp-icon.tsx
    typography/
      heading.tsx                 # Eyebrow + Heading + SectionHeading
    layout/
      navbar.tsx  mega-menu.tsx  footer.tsx
      section-container.tsx       # surface + spacing variants, SplitContainer
      language-switcher.tsx  whatsapp-button.tsx
    cards/
      card.tsx                    # base Card primitive
      feature-card.tsx  investment-card.tsx  blog-card.tsx
      testimonial-card.tsx  institutional-testimonial.tsx
    data-display/
      stat-counter.tsx  timeline.tsx
    sections/
      cta-section.tsx             # the shared closing CTA
    forms/
      contact-form.tsx            # React Hook Form + Zod
    motion/
      reveal.tsx                  # FadeIn / RevealOnScroll / Stagger
      video-pause-toggle.tsx
    feedback/
      loading-states.tsx
    seo/
      breadcrumb-json-ld.tsx  faq-json-ld.tsx  service-json-ld.tsx
    home/ about/ careers/ contact/ insights/ pools/ sectors/
                                  # page-specific section components
  i18n/
    routing.ts  navigation.ts  request.ts
  lib/
    utils.ts                      # cn() class merge helper
    animations.ts                 # shared Framer Motion variants/easings
    site-config.ts                # brand facts + mega-menu content per locale
    sectors-data.ts  pools-data.ts  insights-data.ts  faq-data.ts
    mailer.ts  subscribe.ts  seo.ts  whatsapp.ts
  types/
    index.ts                      # shared domain types
```

Conventions:

- **Naming:** files kebab-case, components PascalCase, one primary export per
  file, named exports only (no defaults) for tree-shaking clarity.
- **Composition over configuration:** components take a `className`
  passthrough via `cn()` and compose with children rather than exposing
  dozens of boolean props.
- **Variants** are defined with `class-variance-authority` (`cva`) for
  `button`, `badge`, `card`, and `section-container`, so variant logic is
  typed and centralized.
- **Server vs Client:** anything with motion, interactivity, or hooks is
  explicitly `'use client'`. Presentational leaf components stay
  server-rendered where possible.
- **Localization:** section components carry their own `copy` object keyed by
  locale (`en` / `ar`) rather than reaching for a translation file, except
  for genuinely shared strings which live in `messages/*.json` under
  `Common`. Both locales ship together — an untranslated section is a defect.
- **Icons:** `lucide-react` only, stroke width `1.5`, sized via the `size`
  prop — no icon fonts, no emoji, ever.
- **Motion:** every easing and duration comes from `src/lib/animations.ts`.
  No ad hoc cubic-beziers in component files.

---

## 2. SEO Architecture

- Metadata via `generateMetadata` per route segment; `siteConfig` in
  `lib/site-config.ts` holds the title template and OG defaults.
- `alternates.languages` maps `en` → `/` and `ar` → `/ar`; both locales are
  separately indexable, with canonical URLs built through
  `localizedPath()` in `i18n/routing.ts`.
- Structured data components in `components/seo/` cover `BreadcrumbList`,
  `FAQPage`, and `Service`; `Organization` / `FinancialService` are emitted
  from the root layout.
- `sitemap.ts` and `robots.ts` are generated at the app root.
- Semantic landmarks: exactly one `<h1>` per page, with `<nav>`, `<main>`,
  and `<footer>` landmarks supplied by the layout components.

---

## 3. Accessibility Standards

- WCAG 2.1 AA contrast minimum (body text ≥ 4.5:1). The gold accent is never
  used for body text on canvas because it fails AA at reading sizes — it is
  reserved for large text, hairline rules, badges, and iconography.
- All motion respects `prefers-reduced-motion: reduce`, both globally in
  `globals.css` and per-component via `useReducedMotion`.
- Focus-visible styling on every interactive element using the
  `--shadow-focus` ring; `outline: none` is never used without a replacement.
- Form fields are always paired with a `<label>` and, on error,
  `aria-describedby` plus `role="alert"` messaging.
- Target size minimum 44×44px for tap targets.
- Full RTL support under `dir="rtl"`: directional icons mirror, and Cairo
  covers every text role for Arabic.
- Background video carries a visible, keyboard-operable pause control.
