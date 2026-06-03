# Gedo Holdings — Design System

A build brief for the website (Next.js + TypeScript + Tailwind + lucide-react).
Pages: **Home, Gallery, Contact**. Design-first; functionality (form delivery, Search Console token, analytics) bolts on later without touching the visual layer.

---

## 1. Aesthetic direction

**Engineered confidence.** The site should feel like the work of a company that builds solid things: structural, precise, trustworthy — not flashy. Royal blue is the signature accent; near-black surfaces carry the white logo and create depth; cool concrete neutrals hold the content. Generous whitespace, crisp (lightly squared) edges, and thin "blueprint" rules and mono labels as a recurring engineered motif.

**One thing to remember:** the recurring royal-blue measure line + mono eyebrow ("EST. 2018", "NCA REGISTERED", section labels) that ties every section together like a technical drawing.

Avoid the generic look: no Inter/Roboto/system fonts, no purple gradients, no soft bubbly pill UI, no evenly-distributed timid palette. Dominant near-black/concrete with sharp royal accents.

---

## 2. Color system

### Raw palette

| Token | Hex | Use |
|---|---|---|
| `royal-50` | `#EEF2FF` | tint backgrounds, icon wells |
| `royal-100` | `#DCE4FE` | light fills, hover tints |
| `royal-200` | `#B9C8FC` | focus rings |
| `royal-500` | `#3A5BF0` | lighter accent, links on dark |
| **`royal-600`** | **`#1E47E6`** | **primary — CTAs, accents, active** |
| `royal-700` | `#1736B8` | primary hover / pressed |
| `royal-900` | `#0F2270` | deep blue blocks |
| `ink-950` | `#0A0C11` | primary dark surface (header, footer, hero) — hosts the white logo |
| `ink-900` | `#12141B` | charcoal cards on dark; primary text on light |
| `ink-800` | `#1C2029` | dark surface variant |
| `ink-700` | `#2A2F3A` | borders/hairlines on dark |
| `paper` | `#FFFFFF` | cards, top surface |
| `concrete-50` | `#F6F7F9` | body background |
| `concrete-100` | `#EDEFF3` | alternating section background |
| `concrete-200` | `#DDE1E8` | hairline borders on light |
| `text-secondary` | `#525A6B` | secondary/body-muted text on light |
| `text-inverse` | `#F6F7F9` | text on dark surfaces |
| `text-muted-inv` | `#9AA2B1` | muted text on dark |
| `amber-500` | `#F5A524` | **optional** safety-accent, micro-use only (skip if you want pure blue+black) |

### Semantic mapping

- `background` → `concrete-50` · `surface` → `paper` · `surface-alt` → `concrete-100` · `surface-dark` → `ink-950`
- `text` → `ink-900` · `text-muted` → `text-secondary` · `text-on-dark` → `text-inverse`
- `primary` → `royal-600` · `primary-hover` → `royal-700` · `border` → `concrete-200` · `border-dark` → `ink-700`
- `ring` (focus) → `royal-200` / `royal-500` at ~50% alpha

Contrast: white on `royal-600` and on `ink-950` both pass AA. `ink-900` on `concrete-50` and `royal-600` text on `paper` pass for body. Verify any text placed over photos with an overlay (see §7).

---

## 3. Typography

Distinctive, technical pairing — fits the engineered direction and is not generic.

| Role | Font | Weights | Notes |
|---|---|---|---|
| Display / headings | **Montserrat** | 600 / 700 / 800 | geometric sans; use 800 + tight tracking for the hero |
| Body / UI | **Mulish** | 400 / 500 / 600 | clean humanist sans that pairs with Montserrat; highly readable |
| Eyebrows / tags / spec labels | **IBM Plex Mono** | 400 / 500 | uppercase, wide letter-spacing — the blueprint motif |

`next/font` setup (`app/layout.tsx`):

```ts
import { Montserrat, Mulish, IBM_Plex_Mono } from "next/font/google";

const display = Montserrat({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-display" });
const sans    = Mulish({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-sans" });
const mono    = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });
// apply `${display.variable} ${sans.variable} ${mono.variable}` to <html>
```

### Type scale

| Token | Size (clamp) | Font | Weight | Line-height |
|---|---|---|---|---|
| display | `clamp(3rem, 6vw, 5rem)` | Montserrat | 800 | 1.02 |
| h1 | `clamp(2.25rem, 4vw, 3rem)` | Montserrat | 700 | 1.1 |
| h2 | `clamp(1.75rem, 3vw, 2.25rem)` | Montserrat | 700 | 1.15 |
| h3 | `1.5rem` | Montserrat | 600 | 1.2 |
| h4 | `1.25rem` | Montserrat | 600 | 1.3 |
| body-lg | `1.125rem` | Mulish | 400 | 1.6 |
| body | `1rem` | Mulish | 400 | 1.6 |
| small | `0.875rem` | Mulish | 400 | 1.5 |
| eyebrow | `0.75rem` | IBM Plex Mono | 500 | 1 · uppercase · `0.12em` tracking |

---

## 4. Spacing, layout, radius, elevation

- **Spacing:** 8px base (Tailwind default scale). Section rhythm `py-14` mobile → `py-24`/`py-28` desktop.
- **Container:** max-width `1200–1280px`; gutters `px-6` mobile, `px-8` ≥md.
- **Grids:** services 3-col → 1-col; gallery 3-col → 2 → 1; consistent gaps (`gap-6`/`gap-8`).
- **Radii (crisp, squared-ish):** `sm 4px`, `md 8px` (buttons, inputs), `lg 12px` (cards), `xl 16px`. No pills.
- **Shadows (subtle, low-alpha):**
  - `sm` `0 1px 2px rgba(10,12,17,.06)`
  - `md` `0 4px 16px rgba(10,12,17,.08)`
  - `lg` `0 12px 32px rgba(10,12,17,.12)`
  - `cta` `0 6px 20px rgba(30,71,230,.30)` (royal-tinted, primary buttons only)

---

## 5. Components

**Home — section order:** dark hero → trust strip → **services (4 cards) → testimonials** → footer. (Testimonials come immediately after the services section.)

**Header / nav** — `surface-dark` (`ink-950`) so the white logo reads. **Logo left, sized large — ~`h-14` (56px) on desktop, ~`h-10` (40px) on mobile, width auto** (it's a wide lockup); give the bar enough height (~`h-20` / 80px, taller on desktop) so the full logo reads clearly and isn't cramped. Links (Home, Gallery, Contact) right; then a **written phone line** `Call us on: 0722 901 959` (light text, `Phone` icon, displayed for reference — **NOT** a `tel:` dial link, per no-click-to-call) followed by the royal **WhatsApp** button (`MessageCircle` glyph) → `wa.me/254722901959`. Sticky; solid `ink-950` with thin `border-dark` bottom rule on scroll. Mobile: hide the written number in the top bar and place it inside the hamburger → full-screen dark menu (the sticky WhatsApp bar handles the mobile action). Icons: `Phone`, `MessageCircle`, `Menu`, `X`.

**Buttons**
- *Primary:* `royal-600` bg, white text, `radius-md`, weight 500. Hover → `royal-700` + `cta` shadow + 1px lift. Focus ring `royal-200`.
- *Secondary:* transparent, `royal-600` border + text on light; white ghost outline on dark.
- *WhatsApp:* keep on-brand (royal + `MessageCircle` glyph) for cohesion, **or** use recognizable WhatsApp green `#25D366` as a deliberate functional exception — pick one and use it consistently.

**Section eyebrow** — IBM Plex Mono, uppercase, `royal-600`, preceded by a short 24–40px royal rule. Used above every section heading.

**Hero (Home)** — two-column layout (content left, image grid right — one landscape render on top, two below — animated text, social-proof stats), based on the `hero-section-9` component but with two of its defaults explicitly overridden (see ⚠️ below). Sits on a **dark `ink-950` background** — it flows straight out of the dark nav above, so nav + hero read as one dark block and the renders pop. Add a faint blueprint grid (low-opacity light/royal lines) and a soft royal radial glow behind the images for depth. On mobile the columns stack — text first, images below.

> ⚠️ **Override the component, do NOT ship it as-is.** (1) Its image tiles are square (`h-48 w-48`…) which crops the 16:9 renders — use **landscape frames** instead. (2) It has hard-coded pastel blue/purple/green floating blobs — **delete them** (purple is off-brand); replace with the blueprint-grid + royal-glow motif. Also: because the section is dark, set hero text colours explicitly to light (don't inherit the global light-page `--foreground`).

- *Left column (light text on dark):*
  - Eyebrow (mono, `royal-500` — the lighter royal reads better on dark): `EST. 2018 · ACROSS KENYA`
  - Headline (Montserrat 800, `text-inverse`, animated fade-up) — e.g. "Building dreams, **enhancing lives**" with the last two words in `royal-500`. Editable.
  - Subtitle (body-lg, `text-muted-inv`): "Design, construction, and finishing across Kenya — delivered by an NCA-registered team with 8 years on the ground."
  - Two actions: **primary** "Chat on WhatsApp" (`royal-600`, white text, `MessageCircle`) → `wa.me/254722901959`; **secondary** "View Our Work" → `/gallery` as a **white/ghost outline** (transparent bg, white border + text — not the component's light-bg outline). No call button.
  - Stats row (3 items, each = lucide icon + value + label), value in `text-inverse`, label in `text-muted-inv`, icon in a `royal-900`/`ink-800` circle with a `royal-500` glyph: `8+ Years` (`CalendarClock`) · `NCA Registered` (`BadgeCheck`) · `120+ Projects` (`Building2`). The projects figure is a placeholder — fill in the real number, or swap that stat for `Across Kenya` (`MapPin`).
- *Right column — one landscape on top, two below:* a clean grid (not an overlapping stack). **Top:** the lead render as a wide 16:9 landscape card spanning the column — the hero image, with a thin `royal-600` frame and a small royal corner/measure accent. **Below:** the other two renders in a 2-up row, equal size, at a consistent ratio (~3:2 — they're half-width so they crop a bit tighter; pick shots that read well small). Consistent gaps, `radius-lg`, `object-cover`, `next/image`. Soft royal radial glow behind the grid for depth on the dark bg. On mobile, stack all three vertically (lead first). Files (save to `/public`):
  - `/hero-villa.jpg` — contemporary two-storey (recommended **top/lead**)
  - `/hero-manor.jpg` — grand stone manor (bottom row)
  - `/hero-bungalow.jpg` — modern bungalow (bottom row)

  (Rename freely — just match the filenames when you prompt Claude Code. Each needs descriptive alt text.)
- *Motion:* staggered entrance (eyebrow → headline → subtitle → buttons → stats) plus a staggered scale/fade reveal on the three frames (top first, then the two below). Honor `prefers-reduced-motion`.

*Implementation note:* start from the `hero-section-9` component, but treat its square tiles and pastel floating blobs as things to replace, not keep (see ⚠️ above). Restyle to this brief — dark `ink-950` section, light text, landscape frames, royal accents, WhatsApp-only CTAs, real copy/stats. Deps: `framer-motion` (and the shadcn `Button` + `@radix-ui/react-slot`, `class-variance-authority` if you use the component's Button; its `outline` variant must be overridden for the dark bg as noted above).

**Trust strip** — directly under hero: mono labels with thin dividers — `EST. 2018 · 8 YEARS` · the **NCA REGISTERED** badge (`/nca-registered.png`) · `PROJECTS ACROSS KENYA`.

**Service cards (×6: Home Construction, Office Partitioning, Repair & Renovation, Architectural Design, Cabro Installation, Precast Panels Construction)** — 3-col → 2-col → 1-col responsive grid (two rows of three on desktop). `paper` surface, `1px border`, `radius-lg`, `shadow-sm`. lucide icon in a `royal-50` square at top (`Home` / `LayoutPanelLeft` / `Wrench` / `DraftingCompass` / `Grid3x3` (cabro) / `Layers` (precast panels)), h3 title, 1–2 line copy. Hover: border → `royal-600`, icon square fills `royal-600` (icon turns white), slight lift.

**Testimonials (Home)** — built on the supplied `testimonials-columns-1` component: vertically auto-scrolling columns of cards (`motion/react`), with a top/bottom fade mask and a different speed per column. Restyle to the brief, and **strip each card to quote + name + location only — no avatar, no role.**

- *Card (dark, to match the hero):* `ink-900` surface, **`radius-lg`** (not the component's `rounded-3xl` — keep edges crisp), `1px border-ink-700`, soft royal glow (`shadow-royal-600/20`). Quote text on top in `text-inverse`; footer row = name (`font-medium`, white) above location (`small`, `text-muted-inv`) with a small `royal-500` `MapPin` before the location. **Remove the `<img>` avatar entirely; rename the `role` field to `location`.** (Want white `paper` cards popping on the dark bg instead? Easy swap — just flip the card surface and text colours.)
- *Header (light text on dark):* mono eyebrow `TESTIMONIALS` (`royal-500` — replace the component's bordered pill), Montserrat h2 in `text-inverse` e.g. "What our clients say", subtitle (`text-muted-inv`): "What clients across Kenya say about building with us."
- *Background:* **dark `ink-950` with the same faint blueprint grid + soft royal glow as the hero** — this section mirrors the hero's treatment. Set the component's inner column `bg-background` to transparent so no light strip shows, and let the top/bottom fade mask blend into `ink-950`. (Page rhythm becomes: dark hero → light services → dark testimonials.)
- *Data:* the **9 real testimonials** live in `src/data/testimonials.ts` (each `{ text, name, location, service? }`; cards render text + name + location only — `service` is metadata, not shown). They split cleanly into the component's 3 columns of 3 (`firstColumn`/`secondColumn`/`thirdColumn` are pre-exported). Locations span Nairobi, Westlands, Migori, Kiambu, Kitui, Kisumu and Nyeri — reinforcing the across-Kenya reach.
- *Dependency note:* this component imports from `motion/react` while the hero/gallery use `framer-motion`. Same library (Motion), different package names — **standardize on one** (`motion` / `motion/react` is current) and align the hero/gallery imports so the project doesn't ship both.

**Gallery** — built on the supplied **bento gallery** component (`InteractiveImageBentoGallery`): a horizontally draggable bento grid (framer-motion, `grid-flow-col`, drag-x), cards with a hover gradient overlay revealing title + short description, staggered reveal on view. Above it, a mono filter row with **three chips: All / Projects / Designs** (active = `royal-600`). Filtering re-renders the `imageItems` passed to the bento.

- *Projects* = the 19 built-work photos (homes, office fit-outs, interiors, site/foundation shots).
- *Designs* = the architectural renders (the 3 hero renders — villa, manor, bungalow — reused here, plus any other renders).

**Click behaviour — keep the component's single-image modal.** Clicking a tile opens the supplied `ImageModal` (the clicked image, centered, dark backdrop blur, `X` to close, click-outside to dismiss) — as built. Use it as-is; no carousel. (Since the bento is drag-to-scroll, keep a small tap-vs-drag guard so a drag doesn't fire the modal open.)

Drive everything from a data manifest (`src/data/gallery.ts`): `{ src, category: 'projects' | 'designs', title, desc, span }`, images in `/public/gallery/`. `span` carries the bento sizing classes (e.g. `md:col-span-2 md:row-span-2` for feature tiles) — vary them for rhythm. Use `next/image` (or keep the component's `<img>` but lazy-load).

*Token mapping:* the component uses shadcn semantic classes (`bg-background`, `text-foreground`, `bg-card`, `border`, `ring-ring`, `text-muted-foreground`). Map those CSS vars to our palette in `globals.css` — `--background`→`concrete-50`, `--foreground`→`ink-900`, `--card`→`paper`, `--border`→`concrete-200`, `--ring`→`royal-600`, `--muted-foreground`→`text-secondary` — so it inherits the design system, and restyle headings to `font-display`. Deps: `framer-motion`, `lucide-react`; needs `@/lib/utils` `cn` (shadcn) and the component in `/components/ui`.

Note: a few office frames are clearly mid-installation (wrapped chairs, ladders, floor debris). For a portfolio, the most finished frames convert best — worth curating, though the foundation-to-finish shots work well as a deliberate "how we build" sequence.

**Contact** — two columns ≥md: left = details (phone `0722901959` shown as **plain text for reference, not a dial link**; WhatsApp → `wa.me/254722901959` as the live action; `gedohomes@gmail.com`, Grey Park Annex along Eastern Bypass, **Mon–Sat 8am–5pm**) each with a lucide icon; right = form shell (Name, Phone, Email, Message). Inputs: `paper`, `1px border`, `radius-md`, focus → `royal-600` border + ring. Form is non-functional for now (wire Resend later). Below: Google Maps embed.

**Footer** — `ink-950`. Columns: **logo (sized large — ~`h-20` / 80px, width auto)** + tagline + NCA badge · quick links · contact + hours · socials (`Facebook` → @gedoholdings, `Instagram` → @gedohomes). Bottom bar: `© Gedo Holdings Ltd` + year, thin `border-dark` top rule.

**Sticky mobile action bar (recommended for Kenya):** fixed bottom bar on small screens with a single prominent **WhatsApp** action (`MessageCircle`), `royal-600`, always reachable. No call button.

---

## 6. Motion (restrained)

- One orchestrated hero load: eyebrow → headline → subtitle → buttons → stats fade-up, staggered (~80ms steps). The hero uses **framer-motion** (per the reference); the collage gets a subtle reveal.
- Hover micro-interactions on buttons/cards (lift, border color, icon fill).
- Subtle scroll-reveal fade-up on the remaining sections (short distance, runs once) — CSS + IntersectionObserver preferred to keep it light.
- Always honor `prefers-reduced-motion`.

---

## 7. Imagery & placeholders

- Real project photos, consistent treatment, `next/image` for optimization, lazy-load below the fold.
- Text-over-photo always gets an `ink-950` gradient overlay for legibility.
- **Placeholders now:** solid `ink-900`/`concrete-100` blocks with a centered lucide `Building2`/`ImageOff` icon and a thin royal border, so layout reads correctly before client photos arrive. Swap by replacing files only.

---

## 8. Accessibility & performance (Kenya context)

- Mobile-first; most visitors are on phones, often metered — keep it light and fast.
- AA contrast across all combinations; visible focus states; semantic HTML; alt text on every image.
- `next/font` subsetting, compressed images, lazy-loading. Persistent click-to-call / WhatsApp.

---

## 9. Tailwind + tokens wiring

Put the source-of-truth values as CSS variables and map them for Tailwind. (Tailwind v4 shown; for v3 mirror these in `theme.extend` of `tailwind.config.ts`.)

```css
/* globals.css */
@import "tailwindcss";

:root {
  --royal-50:#EEF2FF; --royal-100:#DCE4FE; --royal-200:#B9C8FC;
  --royal-500:#3A5BF0; --royal-600:#1E47E6; --royal-700:#1736B8; --royal-900:#0F2270;
  --ink-950:#0A0C11; --ink-900:#12141B; --ink-800:#1C2029; --ink-700:#2A2F3A;
  --paper:#FFFFFF; --concrete-50:#F6F7F9; --concrete-100:#EDEFF3; --concrete-200:#DDE1E8;
  --text-secondary:#525A6B; --text-inverse:#F6F7F9; --text-muted-inv:#9AA2B1;
}

@theme inline {
  --color-royal-50:var(--royal-50);   --color-royal-100:var(--royal-100);
  --color-royal-200:var(--royal-200); --color-royal-500:var(--royal-500);
  --color-royal-600:var(--royal-600); --color-royal-700:var(--royal-700);
  --color-royal-900:var(--royal-900);
  --color-ink-950:var(--ink-950); --color-ink-900:var(--ink-900);
  --color-ink-800:var(--ink-800); --color-ink-700:var(--ink-700);
  --color-paper:var(--paper);
  --color-concrete-50:var(--concrete-50); --color-concrete-100:var(--concrete-100);
  --color-concrete-200:var(--concrete-200);
  --font-display:var(--font-display); --font-sans:var(--font-sans); --font-mono:var(--font-mono);
  --radius-md:8px; --radius-lg:12px;
}

body { background:var(--concrete-50); color:var(--ink-900); font-family:var(--font-sans); }
```

Then use as utilities: `bg-royal-600`, `text-ink-900`, `bg-ink-950`, `border-concrete-200`, `font-display`, `font-mono`, etc.

---

## 10. Do / don't

**Do:** dominant near-black + concrete with sharp royal accents · mono eyebrows + thin royal rules everywhere · crisp squared edges · big confident Montserrat headlines · generous whitespace · dark surfaces wherever the logo appears.

**Don't:** Inter/Roboto/system fonts · pill-shaped bubbly UI · heavy drop shadows · purple/teal gradients · timid evenly-spread color · busy decoration that fights the engineered look.
