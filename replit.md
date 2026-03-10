# Abdulrahman Bazarah — Cinematic Portfolio

## Overview
A cinematic dark portfolio website for Abdulrahman Bazarah built with Next.js 14, featuring immersive animations, a cinematic intro sequence, and premium design.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Smooth Scroll**: @studio-freight/lenis
- **Icons**: Lucide React
- **Utilities**: clsx

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout + Google Fonts (Sora, DM Sans) + Lenis
│   ├── page.tsx            # Main page (client) — Intro + all sections
│   └── globals.css         # CSS variables + grain texture + global styles
├── components/
│   ├── Intro.tsx           # Cinematic intro sequence (blue pulse → AB → fade out)
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar with active section tracking
│   │   └── Footer.tsx      # Simple footer
│   └── sections/
│       ├── Hero.tsx        # Full-screen hero with cursor glow + particles + gradient mesh
│       ├── Journey.tsx     # Timeline with 4 phases
│       ├── Systems.tsx     # Case studies grid (4 cards)
│       ├── About.tsx        # Profile photo + bio with floating badges
│       ├── Achievements.tsx # 2 featured systems (OneStation + Databay) with live links
│       ├── WorkGallery.tsx  # Grid of 18 additional projects with category badges
│       ├── Impact.tsx      # Animated counters with glow cards + quote
│       ├── Framework.tsx   # 5-step methodology
│       └── Contact.tsx     # CTA section with dramatic background
└── lib/
    ├── utils.ts            # clsx helper
    └── animations.ts       # Shared Framer Motion variants (fadeInUp, scaleIn, slideIn)
```

## Design System
- Background: #0B0F19 (primary), #111827 (secondary)
- Accent: #3B82F6 (blue)
- Text: #F9FAFB (primary), #9CA3AF (secondary)
- Fonts: Sora (headings), DM Sans (body)
- Grain texture overlay on body
- Cursor glow effect on hero

## Running
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build`

## Image Paths
- `/public/images/profile.jpg` — Personal photo (400x500px recommended)
- `/public/images/system-ecommerce.jpg` — E-commerce screenshot (1280x800px)
- `/public/images/system-delivery.jpg` — Delivery system screenshot
- `/public/images/system-crm.jpg` — CRM screenshot
- `/public/images/system-ai.jpg` — AI workflow screenshot
- If images are missing, Achievements falls back to Unsplash images automatically

## Section Order
Intro → Navbar → Hero → About → Journey → Systems → Achievements → WorkGallery → Impact → Framework → Contact → Footer

## Placeholder Links
- LinkedIn: https://linkedin.com/in/abdulrahmanbazarah (update as needed)
- WhatsApp: https://wa.me/966XXXXXXXXX (update phone number)
- Email: hello@bazarah.dev (update as needed)
