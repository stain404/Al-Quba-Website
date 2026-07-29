# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three confirmed audiences, in priority order:

1. **Family offices and high-net-worth individuals** — private wealth evaluating Al Quba's investment pools and operating ecosystem for an allocation. They arrive cold or by referral, read to decide whether the firm is credible and real, and want to see the underlying businesses, not just a thesis.
2. **Institutional investors** — funds, banks, and allocators doing formal diligence. They need structure, terms, governance, and named counterparties to hold up under scrutiny.
3. **Trade and business partners** — suppliers, contractors, freight and sourcing counterparties evaluating the operating divisions (Hebron General Trading, Bright Hurst, NobleStar Shipping, ContainerKart, Al Wahda Trading, Phew Interactive) as a commercial partner rather than as an investment.

Candidates reaching the careers surface are a secondary audience served by that page, not a driver of site-wide product decisions.

## Product Purpose

Al Quba Investment LLC is a Dubai-headquartered investment and asset management firm deploying long-term capital across a group of operating businesses. The website is its primary credibility surface: it explains what the firm owns and does, makes the ecosystem and the investment pools legible to an outside evaluator, and converts qualified interest into a direct conversation.

**Success is a requested consultation.** Every surface is ultimately judged by whether a serious evaluator finishes it convinced enough to make contact. The investor dashboard login and the pool pages support that path; they are not the conversion event themselves.

## Positioning

Al Quba invests through businesses it actually operates. The five divisions and nineteen subsidiaries are real trading, contracting, logistics, sourcing, and brand-strategy companies, and the investment pools are built on top of that operating base rather than on an external manager's book. A neighboring firm can claim a strategy; it cannot truthfully claim this specific operating ecosystem, these named subsidiaries, or the transparency that comes from owning the underlying trade flow.

"Global Investments. Built on Transparency." is the firm's stated promise, and transparency here means showing the mechanism — structure, terms, risks, and the named companies behind each division — not merely asserting trustworthiness.

## Operating Context

- Bilingual site: English (unprefixed routes) and Arabic (`/ar`, RTL) are both real, separately indexable routes — not a client-side text swap. Both locales are first-class and must stay in parity.
- Surfaces in production: home, about, insights (with article pages), careers, contact, privacy, terms, plus per-sector routes (`/sectors/<slug>`) and per-pool routes (`/pools/<slug>`).
- The mega menu is the primary wayfinding device, organized as **Our Ecosystem** (five divisions) and **Investment Pools** (three funds).
- Evaluation happens across devices and often outside the UAE; visitors frequently arrive on a division or pool page rather than the home page.
- WhatsApp is a live, expected contact channel alongside email and phone — normal business practice for this market.
- An external investor dashboard exists at `https://alquba-investor.workpoint001.info/login` for existing investors.

## Capabilities and Constraints

- Stack: Next.js 14 App Router, TypeScript, Tailwind (theme wired to CSS custom properties in `src/app/globals.css`), Framer Motion, next-intl, React Hook Form + Zod.
- Contact and newsletter submissions deliver real email via Nodemailer (`src/app/api/contact`, `src/app/api/newsletter`, `src/lib/mailer.ts`). These are working integrations, not mockups.
- Content lives in typed data modules — `src/lib/sectors-data.ts`, `pools-data.ts`, `insights-data.ts`, `faq-data.ts`, `site-config.ts` — and both locales are carried inline in components via `copy` objects. New content follows the same pattern.
- Heavy video and image assets are already in `public/` (4K hero banners, division and pool photography). Weight is a real performance constraint on every surface that uses them.
- SEO is a deliberate investment: sitemap, robots, JSON-LD for breadcrumbs, FAQs, and services. New pages are expected to carry equivalent metadata.
- **Compliance:** Al Quba is not presenting a regulated offering. The site is informational and must never read as a public solicitation to invest. Pool pages describe structure and projected returns with disclaimers; they do not offer securities, and no page may claim a regulatory license or supervised status.
- **Terminology:** divisions/sectors are "Our Ecosystem"; funds are "Investment Pools" with a "Pool NN" numbering and an open/closed subscription status. Use the firm's own vocabulary, not generic finance terms.

## Brand Commitments

- Legal name **Al Quba Investment LLC**; displayed as **Al Quba Investment**. Canonical domain `https://www.alquba.com`.
- Positioning line in use: *Global Investments. Built on Transparency.*
- Voice: institutional, measured, concrete. Specific named companies and structures over adjectives; no hype, no urgency tactics.
- Logo assets present: `public/AQ logo.png`, plus subsidiary logos (`hebron-logo.svg`, `phew-logo.png`, `containerkart-logo.png`, `alwahda-logo.jpg`, `NobleStar.jpg`).
- An incumbent design system is documented at `design-system/DESIGN_SYSTEM.md` and implemented in code. It is design authority for refinement work.

## Evidence on Hand

Confirmed real and approved by the client:

- **5+ years of industry experience** (corrected from the 10+ previously shown on the home page; `src/components/home/trust-stats.tsx` now reads 5+).
- **19 strategic subsidiaries**, **5 investment sectors**, **8 countries served**.
- Named operating companies: Hebron General Trading LLC, Bright Hurst, NobleStar Shipping, ContainerKart, Al Wahda Trading, Phew Interactive.
- Three investment pools: Frost Capital Fund I (frozen meat trading), Premium Cocoa Fund I (branded chocolate trading), Global Travel Fund I.
- Office: Office 306, Al Mezan Tower, Al Qusais, Muhaisnah 4, Dubai, UAE. Email `inbox@alqubainvestment.com`. Phone/WhatsApp `+971 50 576 2203`.
- Photography, division imagery, insight article artwork, and hero video are client-supplied and live in `public/`.

Must not be fabricated: no invented testimonials, client names, AUM figures, benchmark returns, awards, press mentions, ratings, or partner logos. Pool return figures are projections and must always be presented with their existing disclaimers, never as realized track record.

## Product Principles

1. **Show the mechanism.** Transparency is the positioning, so structure, terms, risks, and the named underlying businesses are the proof — never a "trusted partner" adjective.
2. **Every surface must survive diligence.** An institutional reader should be able to check any claim against something concrete on the page.
3. **The consultation is the destination.** Each surface should leave a qualified evaluator with an obvious, low-friction way to start a conversation.
4. **Arabic is not a translation layer.** EN and AR are equal products; RTL, typography, and content parity are requirements, not afterthoughts.
5. **Never fabricate credibility.** Absent proof stays absent; the fix is better presentation of real facts, not invented ones.

## Accessibility & Inclusion

- Full RTL support for Arabic is a functional requirement.
- Reduced-motion is already honored across animated components (`useReducedMotion`, background video, count-up stats); new motion must do the same.
- Background video carries a user-accessible pause control — an intentional commitment to keep.
- No client-mandated conformance standard was established. The design system's §9 accessibility rules are the working bar.
