# Ashik · Portfolio (Next.js 14)

Luxury, futuristic AI-engineer portfolio. Apple-grade polish, Linear-class motion, cyber-lab atmosphere.

## Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with CSS variables for theming
- **Framer Motion** — component & route motion
- **GSAP + ScrollTrigger** — cinematic scroll (optional, install if you extend)
- **Lenis** — buttery smooth scrolling
- **@tsparticles/react** — interactive particle background
- **react-type-animation** — hero typing effect
- **react-icons** — clean icon system

## Theme
Green-dominant + cyan secondary + gold accents on near-black. Variables live in `src/styles/globals.css`.

## Structure
```
src/
├── app/
│   ├── layout.tsx        # global shell: loader, cursor, particles, navbar, footer
│   └── page.tsx          # composes the 6 sections
├── components/
│   ├── effects/          # Loader, Cursor, Particles, Ambient, Grain, ScrollProgress, SmoothScroll
│   ├── layout/           # Navbar (glass, magnetic, mobile menu), Footer
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/               # MagneticButton, Reveal, SectionHeader
├── data/                 # site, skills, projects, timeline (single source of truth)
├── lib/                  # utilities (cn, useReducedMotion)
└── styles/globals.css
```

## Run locally
```bash
cd portfolio
npm install
npm run dev
# → http://localhost:3000
```

## Customize
- **Content** → edit files in `src/data/`
- **Theme** → CSS variables in `src/styles/globals.css`
- **Resume** → drop `public/resume.pdf`
- **Sections** → add a new file in `src/components/sections/` and render it from `src/app/page.tsx`

## Accessibility
- Respects `prefers-reduced-motion` (particles + smooth scroll disable)
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Keyboard-navigable nav, focusable links, ARIA labels on icon buttons

## Performance notes
- Particles capped at ~60 nodes with FPS limit
- Lenis instance singleton, RAF cancelled on unmount
- Reveal uses `whileInView` with `once: true`
- Heavy effect components are client-only and lazy-friendly

— Built by Shaik Mohammad Ashik
