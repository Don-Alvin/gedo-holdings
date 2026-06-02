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
| Display / headings | **Archivo** | 600 / 700 / 800 | sturdy geometric grotesque; use 800 + tight tracking for the hero |
| Body / UI | **IBM Plex Sans** | 400 / 500 / 600 | technical, precise, highly readable |
| Eyebrows / tags / spec labels | **IBM Plex Mono** | 400 / 500 | uppercase, wide letter-spacing — the blueprint motif |

`next/font` setup (`app/layout.tsx`):

```ts
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const display = Archivo({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-display" });
const sans    = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-sans" });
const mono    = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });
// apply `${display.variable} ${sans.variable} ${mono.variable}` to <html>
```

### Type scale

| Token | Size (clamp) | Font | Weight | Line-height |
|---|---|---|---|---|
| display | `clamp(3rem, 6vw, 5rem)` | Archivo | 800 | 1.02 |
| h1 | `clamp(2.25rem, 4vw, 3rem)` | Archivo | 700 | 1.1 |
| h2 | `clamp(1.75rem, 3vw, 2.25rem)` | Archivo | 700 | 1.15 |
| h3 | `1.5rem` | Archivo | 600 | 1.2 |
| h4 | `1.25rem` | Archivo | 600 | 1.3 |
| body-lg | `1.125rem` | IBM Plex Sans | 400 | 1.6 |
| body | `1rem` | IBM Plex Sans | 400 | 1.6 |
| small | `0.875rem` | IBM Plex Sans | 400 | 1.5 |
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

**Header / nav** — `surface-dark` (`ink-950`) so the white logo reads. Logo left; links (Home, Gallery, Contact) right; a persistent royal **Call** + **WhatsApp** pair. Sticky; solid `ink-950` with thin `border-dark` bottom rule on scroll. Mobile: hamburger → full-screen dark menu. Icons: `Phone`, `MessageCircle`, `Menu`, `X`.

**Buttons**
- *Primary:* `royal-600` bg, white text, `radius-md`, weight 500. Hover → `royal-700` + `cta` shadow + 1px lift. Focus ring `royal-200`.
- *Secondary:* transparent, `royal-600` border + text on light; white ghost outline on dark.
- *WhatsApp:* keep on-brand (royal + `MessageCircle` glyph) for cohesion, **or** use recognizable WhatsApp green `#25D366` as a deliberate functional exception — pick one and use it consistently.

**Section eyebrow** — IBM Plex Mono, uppercase, `royal-600`, preceded by a short 24–40px royal rule. Used above every section heading.

**Hero (Home)** — `ink-950` or a project photo with a dark `ink-950 → transparent` gradient overlay so the white headline pops. Display headline with one word in `royal-500`; tagline "Building Dreams. Enhancing Lives."; two CTAs (primary **Get a Quote** → Contact, secondary **Call / WhatsApp**). Add a faint blueprint grid or single royal measure line as texture. Staggered load (see §6).

**Trust strip** — directly under hero: mono labels with thin dividers — `EST. 2018 · 8 YEARS` · the **NCA REGISTERED** badge (`/nca-registered.png`) · `NAIROBI, KENYA`.

**Service cards (×3: Home Construction, Office Partitioning, Repair & Renovation)** — `paper` surface, `1px border`, `radius-lg`, `shadow-sm`. lucide icon in a `royal-50` square at top (`Home` / `LayoutPanelLeft` / `Wrench` or `Hammer`), h3 title, 1–2 line copy. Hover: border → `royal-600`, icon square fills `royal-600` (icon turns white), slight lift.

**Gallery** — filter row (All / Construction / Partitioning / Renovation) as mono toggle chips; active = `royal-600`. Image grid, consistent 4:3 cards, `radius-lg`, hover overlay (`ink-950` gradient) revealing project name + location. Click → lightbox (`X`, `ChevronLeft`, `ChevronRight`). Lazy-load images.

**Contact** — two columns ≥md: left = details (phone `0722901959` → `tel:+254722901959`, WhatsApp → `wa.me/254722901959`, `gedohomes@gmail.com`, Grey Park Annex along Eastern Bypass, **Mon–Sat 8am–5pm**) each with a lucide icon; right = form shell (Name, Phone, Email, Message). Inputs: `paper`, `1px border`, `radius-md`, focus → `royal-600` border + ring. Form is non-functional for now (wire Resend later). Below: Google Maps embed.

**Footer** — `ink-950`. Columns: logo + tagline + NCA badge · quick links · contact + hours · socials (`Facebook` → @gedoholdings, `Instagram` → @gedohomes). Bottom bar: `© Gedo Holdings Ltd` + year, thin `border-dark` top rule.

**Sticky mobile action bar (recommended for Kenya):** fixed bottom bar on small screens with **Call** + **WhatsApp**, royal/`ink-950`, always reachable.

---

## 6. Motion (restrained)

- One orchestrated hero load: eyebrow → headline → tagline → CTAs fade-up with staggered `animation-delay` (~80ms steps).
- Hover micro-interactions on buttons/cards (lift, border color, icon fill).
- Subtle scroll-reveal fade-up on sections (short distance, runs once) — CSS + IntersectionObserver preferred to keep it light; Motion library only if already pulled in.
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

**Do:** dominant near-black + concrete with sharp royal accents · mono eyebrows + thin royal rules everywhere · crisp squared edges · big confident Archivo headlines · generous whitespace · dark surfaces wherever the logo appears.

**Don't:** Inter/Roboto/system fonts · pill-shaped bubbly UI · heavy drop shadows · purple/teal gradients · timid evenly-spread color · busy decoration that fights the engineered look.
