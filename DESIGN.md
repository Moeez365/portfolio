---
name: Atelier Dark Editorial
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c4c7c9'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#8e9193'
  outline-variant: '#444749'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3132'
  primary-container: '#e2e2e3'
  on-primary-container: '#636466'
  inverse-primary: '#5d5e60'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#ffffff'
  on-tertiary: '#412d07'
  tertiary-container: '#ffdeac'
  on-tertiary-container: '#7a6037'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e3'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1d'
  on-primary-fixed-variant: '#454748'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#e3c290'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#59431c'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: '500'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 3rem
    fontWeight: '500'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.875rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.375rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies the tension between brutalist technical rigor and the refined restraint of modern Swiss editorial design. Crafted for elite engineers, systems architects, and technical leaders, the aesthetic rejects the ephemeral trends of vibrant saturated gradients, heavy glassmorphism, and synthetic visual noise in favor of deliberate spatial hierarchy, structural hairline boundaries, and deep typographic authority.

The emotional signature is poised, authoritative, and deeply intentional:
- **Atmosphere:** Deep carbon architecture, silent confidence, disciplined precision.
- **Tone:** Technical mastery articulated through human perspective, devoid of corporate buzzwords and decorative artifice.
- **Visual Stance:** Monochromatic mastery punctuated by razor-sharp hairline borders, mechanical monospaced coordinates, and expansive negative space. Content operates like an architectural monograph or an haute-horlogerie catalog for software.

## Colors

The palette operates on a calibrated grayscale of carbon, graphite, and titanium, complemented by a single muted sand accent reserved strictly for tactical focus, status indicators, and editorial emphasis.

- **Primary (`#f4f4f5`):** Crisp off-white zinc used for primary editorial headlines, critical interactive states, and high-impact structural emphasis.
- **Secondary (`#a1a1aa`):** Calibrated mid-zinc for long-form narrative body copy, meta descriptions, and secondary UI controls.
- **Tertiary (`#d4b483`):** Muted sand/raw titanium. Deployed sparingly as a micro-accent (e.g., active commit indicators, technical footnotes, subtle metric deltas) to evoke warm industrial craftsmanship.
- **Neutral (`#09090b`):** Deep carbon base substrate. Supported by tonal layers:
  - Base Canvas: `#09090b`
  - Layer 1 Surface (Cards, Navbars): `#121215`
  - Layer 2 Raised (Flyouts, Active Cells): `#18181b`
  - Subtle Borders: `#27272a` (Hairline structural containment)
  - Muted Trace: `#3f3f46` (Active borders, divide lines)

## Typography

Typography delivers deliberate contrast between geometric architectural poise and high-density technical computation:
- **Headlines (`Space Grotesk`):** Engineered proportions with tight tracking and surgical weight balance. Display sizes evoke high-concept publication mastheads.
- **Body & Prose (`Geist`):** Engineered for immaculate screen legibility at neutral scale. The neutral grotesk structure supports long-form technical case studies without eye fatigue.
- **Technical Meta & Data (`JetBrains Mono`):** Applied to indexes, system states, tags, metrics, and structural timestamps. All uppercase metadata labels must use `label-caps` with intentional positive letter-spacing (`0.08em`) to mirror technical instrument panel readouts.

## Layout & Spacing

The spatial model enforces an architectural 12-column structural grid anchored by generous empty volumes. Content is not stretched across arbitrary viewports; it is pinned to rigid editorial columns with visible structural rhythm.

- **Grid Discipline:** 12-column layout bounded by a max-width container of `1280px` on desktop, scaling to 6 columns on tablet and 4 columns on mobile.
- **Rhythm & Cadence:** Generous section spacing (`space-3xl`) isolates flagship work, giving case studies the gravity of monograph entries. Structural grid lines should frequently be made visible using 1px boundary lines (`#18181b` to `#27272a`) rather than hidden.
- **Form Factors:**
  - **Desktop (>= 1024px):** Asymmetrical alignments, split columns (e.g., sticky 4-column metadata index beside an 8-column narrative flow), `margin: 4rem`.
  - **Tablet (768px - 1023px):** Collapsed auxiliary rails into sectional headers, `margin: 2rem`, `gutter: 1.5rem`.
  - **Mobile (< 768px):** Strict single-column stack, flush card borders bleeding to margins with internal padding, `margin: 1.25rem`, `gutter: 1rem`.

## Elevation & Depth

This system intentionally eliminates traditional blurred drop shadows and colored ambient glows. Spatial hierarchy is articulated strictly through tonal planar stepping and precision hairline contours.

- **Planar Tiering:**
  - **Level 0 (Canvas Base):** Pure charcoal `#09090b`. The bedrock layer for canvas space and expansive gutters.
  - **Level 1 (Substrate Enclosures):** `#121215`. Used for project panels, terminal containers, and article cards.
  - **Level 2 (Active / Lifted Planes):** `#18181b`. Applied to navigation bars, drop-down sheets, and modal viewports.
- **Hairline Boundary Language:**
  - Standard edge definition uses a crisp 1px rule: `1px solid rgba(255, 255, 255, 0.08)` or `#27272a`.
  - Active, focused, or hovered boundaries transition cleanly to `1px solid rgba(255, 255, 255, 0.22)` or `#52525b`.
- **Light Emulation:** Diffuse cast shadows are strictly replaced by micro-bevels: a singular top-edge inner highlight `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)` on primary panels, producing a cold machined titanium edge.

## Shapes

The design language favors low-radius architectural contours. Elements prioritize sharp geometric precision over organic pill shapes:

- **Base Radius (0.25rem / 4px):** Standard interactive surfaces, input fields, code snippets, tags, and small utility badges. Conveys industrial tolerance and machined components.
- **Medium Radius (0.5rem / 8px):** Large interactive project cards, modal viewports, and imagery frames.
- **Structural Grid Corners:** Interior card groupings often employ zero-radius joins (`0px`) where elements touch shared hairline borders, creating composite tabular layouts.

## Components

### Buttons
- **Primary:** High-contrast crisp zinc background (`#f4f4f5`) with carbon typography (`#09090b`), font-weight 500 (`Geist`), 4px corner radius. On hover, subtle step down to `#e4e4e7` with a zero-duration transition or rapid 100ms ease.
- **Secondary / Ghost:** Transparent background enclosed by a hairline border (`#27272a`), off-white text (`#f4f4f5`). On hover, background shifts to `#18181b` and border clarifies to `#3f3f46`.
- **Text / Micro Link:** JetBrains Mono uppercase (`label-caps`), subtle arrow glyph `→`, bottom border indicator that shifts from 40% opacity to 100% on hover.

### Technical Tags & Chips
- Monospaced typography (`code-sm`), padding `0.25rem 0.5rem`, hairline border (`#27272a`), surface `#121215`, text `#a1a1aa`.
- Status variants incorporate a solid 4px square status beacon (e.g., `#d4b483` for featured projects, `#10b981` for active systems) rather than rounded badges.

### Cards & Project Paneling
- Surfaces sit on Level 1 (`#121215`) with a 1px border (`#27272a`).
- Hover behavior: Background remains anchored while the hairline border shifts to `rgba(255, 255, 255, 0.22)`. No mechanical lift (`translate-y`) or exaggerated drop shadow. All transitions are micro-calibrated (150ms).
- Card headers utilize clean hairline dividers separating image/preview zones from technical specifications and metrics.

### Lists & Technical Indexes
- Tabular row architecture. Each item is separated by a 1px rule (`#18181b`).
- Columns align metadata strictly via JetBrains Mono: left column for project timestamp/index (`01 //`), center for project/essay title (`Space Grotesk`), right column for stack tags and deployment state.
- Interactive hover fills the entire row with `#121215` from edge to edge.

### Inputs & Terminal Fields
- Dark canvas background (`#09090b`), hairline border (`#27272a`), text `#f4f4f5`.
- Focus state: Border illuminates to `#71717a` with an inner hairline highlight; no thick primary rings. Monospaced placeholder text in `#52525b`.

### Checkboxes & Toggle Elements
- Custom square enclosures (14px × 14px), 2px radius, hairline border (`#3f3f46`). Checked state fills with `#f4f4f5` bearing a carbon black geometric mark.