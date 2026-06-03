---
name: Technical Precision
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#ffed76'
  on-secondary: '#373100'
  secondary-container: '#e7d000'
  on-secondary-container: '#635800'
  tertiary: '#2fd9f4'
  on-tertiary: '#00363e'
  tertiary-container: '#001b20'
  on-tertiary-container: '#008ea1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#fce425'
  secondary-fixed-dim: '#dec800'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#a2eeff'
  tertiary-fixed-dim: '#2fd9f4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system focuses on a "Technical Professional" aesthetic, specifically tailored for a developer entering the
ecosystem. It balances the raw, industrial nature of code with a sophisticated, high-end interface. The goal is to evoke
a sense of precision, logic, and modern craft.

The design style utilizes **Glassmorphism** and **Minimalism**. Surfaces are treated as semi-transparent layers that sit
atop deep, atmospheric backgrounds. This creates a sense of spatial depth without sacrificing the "flat" modern feel
required for high readability. Neon accents are used sparingly to highlight interactive elements and key technical
achievements, mimicking the syntax highlighting of a premium IDE.

## Colors

The palette is rooted in a deep "Midnight Navy" foundation to provide maximum contrast for technical content.

- **Backgrounds:** Use `#0f172a` (Slate 950) as the primary canvas. Layered surfaces should use subtle variations or
  opacity shifts rather than significantly lighter hex codes to maintain the dark-mode immersion.
- **Accents:**
    - **JS Yellow (#f7df1e):** Reserved for primary actions, branding, and highlighting core JavaScript competencies.
    - **Electric Cyan (#22d3ee):** Used for secondary highlights, links, and "Tech Stack" badges to provide a cooling
      counterpoint to the yellow.
- **Typography:** Primary text should be high-contrast white (#f8fafc), with secondary text in a muted Slate (#94a3b8)
  to establish hierarchy.

## Typography

This design system employs a dual-font strategy to emphasize the developer identity.

**JetBrains Mono** is used for all headings, labels, and UI metadata. This injects a "code-first" DNA into the
portfolio, making even simple titles feel like structural declarations. **Inter** handles all long-form body text,
ensuring that descriptions, project case studies, and "About" sections remain highly legible and professional.

On mobile, display sizes are aggressively scaled down to prevent awkward line breaks, while body text remains at 16px to
ensure accessibility.

## Layout & Spacing

The layout follows a **Fixed Grid** system for desktop to maintain a controlled, editorial feel, transitioning to a
fluid layout for mobile devices.

- **Desktop:** A 12-column grid with a maximum width of 1200px. Gutters are kept wide (24px) to allow the glassmorphic
  card borders breathing room.
- **Mobile:** A 4-column grid with 16px side margins.
- **Rhythm:** All vertical spacing should be multiples of 8px. Large sections are separated by `xl` (64px) spacing to
  create clear mental breaks between "Projects," "Skills," and "Experience."

## Elevation & Depth

Depth is created through **Glassmorphism** and background blurs rather than traditional shadows.

1. **Base Layer:** The solid #0f172a background.
2. **Mid Layer (Cards/Modals):** Semi-transparent surfaces (rgba(30, 41, 59, 0.7)) with a 12px Backdrop Blur.
3. **Detail Layer:** 1px solid borders using low-opacity Cyan or White (rgba(255, 255, 255, 0.1)) to define edges
   clearly against the dark background.

Interactive elements should "glow" rather than "lift." Use subtle Cyan or Yellow outer glows (box-shadow: 0 0 15px rgba(
34, 211, 238, 0.3)) on hover to indicate focus.

## Shapes

The design system uses a **Soft** shape language. While the "technical" vibe might suggest sharp corners, the 0.25rem (
4px) and 0.5rem (8px) radii used here prevent the UI from feeling dated or overly aggressive.

- **Cards & Containers:** Use `rounded-lg` (8px).
- **Buttons & Tags:** Use `rounded-md` (4px).
- **Inputs:** Use `rounded-md` (4px) to maintain a crisp, input-focused look.

## Components

- **Buttons:** Primary buttons use a solid JS Yellow background with black text for maximum punch. Secondary buttons use
  a Cyan ghost style (1px border) with Cyan text.
- **Project Cards:** Feature a glassmorphic background, a 1px border, and a subtle gradient overlay on the project image
  to ensure text overlay readability.
- **Tech Chips:** Small, mono-spaced labels with a low-opacity Cyan background and bright Cyan text. They should look
  like terminal tags.
- **Code Snippet Blocks:** Styled like a modern IDE window (darker background, rounded corners) with a "copy" button in
  the top right. Use JetBrains Mono exclusively here.
- **Input Fields:** Dark, recessed backgrounds with a 1px Cyan border that glows when focused. Labels should be small
  and uppercase in JetBrains Mono.
- **Timeline/Experience:** A vertical 2px line in Slate 800 with Cyan "nodes" for each career or education milestone.