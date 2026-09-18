# Nexora Studio agency website

## Overview
Build a single-page, premium agency presentation for **NEXORA STUDIO** that feels established, technically capable, and conversion-focused. The visual direction will follow the supplied brief: deep charcoal, warm off-white, restrained electric cyan/acid accents, editorial typography, glass details, asymmetric composition, and polished motion.

This project uses its existing TanStack Start React foundation rather than Next.js, because the workspace runtime is fixed. All new page and component code will be JavaScript/JSX; existing framework-generated TypeScript infrastructure will remain untouched where required.

## Experience
- Add a short branded loading sequence, desktop custom cursor, top scroll progress, sticky glass navigation, and a full-screen animated mobile menu.
- Build an immersive first view with animated headline reveals, cursor-following light, grid/particle details, strong calls to action, and Nashik positioning.
- Add the service marquee, editorial team introduction, interactive services, animated trust story, large staggered demo case studies, and a hotel-focused showcase.
- Add a responsive process timeline, placeholder team profiles, floating technology ecosystem, clearly labeled demo testimonials, animated FAQ, final call to action, enquiry form, and premium footer.
- Keep brand copy, contact details, team roles, statistics, and demo projects in centralized data objects for easy replacement.

## Interaction and motion
- Use Motion for React for entrance choreography, staggered text, in-view reveals, counters, parallax, image masks, card tilt, magnetic buttons, mobile navigation, and testimonial transitions.
- Use CSS for the continuous marquee, ambient grid/noise, light sweeps, and efficient background movement.
- Respect reduced-motion preferences and disable cursor-specific effects on touch devices.
- Ensure anchor navigation, menu controls, FAQ, carousel, form controls, WhatsApp links, and back-to-top actions work.

## Visual assets
- Generate a cohesive set of original, dark editorial project visuals for the six fictional case studies and the hotel showcase.
- Clearly label all portfolio projects and testimonials as concepts/demos to avoid implying real client work.
- Use descriptive image alternative text and stable responsive image areas.

## Technical details
- Create reusable JSX sections and interaction utilities under `src/components/agency/`.
- Replace the placeholder home page and add route-level title, description, Open Graph, Twitter card, and canonical metadata.
- Extend the global Tailwind v4 design system with semantic OKLCH tokens, font tokens, motion utilities, and reduced-motion rules.
- Load display/body fonts through document-head links and keep decorative colors out of page markup.
- Validate the live page at desktop and mobile sizes, including navigation, FAQ, form UI, image loading, overflow, console errors, and reduced-motion behavior.
