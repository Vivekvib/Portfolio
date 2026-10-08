# PRD — Vivek Nishad Portfolio

## Original Problem Statement
CS (Hons) graduate (Vivek Nishad, University of Delhi) needs a "cool" portfolio website to apply for jobs. Content sourced from his resume PDF + 4 GitHub repo READMEs (FilingLens, FoodBridge, FairLoan, Fund_Predictor) + LinkedIn. Reference aesthetics: nitishgautam.framer.website, minhpham.design. User chose: dark, cinematic, immersive theme; contact links only (email, LinkedIn, GitHub) + Instagram and mobile as placeholders to fill later.

## Architecture
- Pure frontend single-page React app (no backend required; backend template untouched).
- Stack: React 19, Tailwind CSS, framer-motion (scroll reveals + kinetic hero), lenis (smooth scroll), react-fast-marquee (editorial marquee), lucide-react icons, sonner (toast on email copy).
- Art direction: obsidian #08080A + ember #FF4F00; Cabinet Grotesk display, JetBrains Mono labels, Plus Jakarta Sans body; custom VN monogram SVG (logo + favicon); custom dual cursor; noise overlay; interactive particle-canvas hero with parallax.
- Design source: /app/design_guidelines.json

## User Personas
- Recruiters/hiring managers scanning projects, skills, experience quickly
- Vivek sharing one link instead of a PDF resume

## Core Requirements (static)
1. Kinetic hero with masked name reveal + availability beacon
2. Selected Works: 4 real projects with real descriptions, tech stacks, GitHub + live demo links
3. About, Skills matrix, Experience/leadership timeline
4. Contact: email (copy-to-clipboard), LinkedIn, GitHub, Instagram placeholder, phone placeholder
5. Responsive 375/768/1366, reduced-motion respect, data-testids everywhere

## Implemented (2026-10-08)
- Full one-page portfolio: Navbar (glass, VN logo, Hire Me CTA), Hero (masked line reveal, particle field, parallax, metrics), MarqueeStrip, Projects bento (FilingLens 8col / FoodBridge 4col / FairLoan 5col / Fund Predictor 7col, spotlight hover, live badges), About, Skills (5 categories), Timeline (Fin-i internship, DU research, E-Cell, Aarambh), Contact footer with giant CTA + 5 link cards
- Lenis smooth scroll, custom cursor (fine-pointer only), noise grain overlay, custom VN favicon
- Verified: webpack compiles clean, no console errors, screenshots at 375/768/1366, all links/testids present

## Backlog
- P0: User to supply real Instagram handle + mobile number (currently placeholders in Contact.js)
- P1: Resume PDF download button in Navbar ("Hire Me" currently scrolls to contact)
- P1: Working contact form (user deferred; chose links only)
- P2: Blog/writing section, dark/light toggle, project detail pages with screenshots from repos
