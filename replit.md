# Abdulrahman Bazarah — Cinematic Portfolio

## Overview
A cinematic dark portfolio website for Abdulrahman Bazarah built with Next.js 14, featuring immersive animations and premium design.

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
│   ├── page.tsx            # Main page — imports all sections via dynamic()
│   └── globals.css         # CSS variables + global styles
├── components/
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar with scroll-aware background
│   │   └── Footer.tsx      # Simple footer
│   └── sections/
│       ├── Hero.tsx        # Full-screen hero with particles + stagger text
│       ├── Journey.tsx     # Timeline with 4 phases
│       ├── Systems.tsx     # Case studies grid (4 cards)
│       ├── Impact.tsx      # Animated counters + quote
│       ├── Framework.tsx   # 5-step methodology
│       └── Contact.tsx     # CTA section with LinkedIn/WhatsApp/Email
└── lib/
    ├── utils.ts            # clsx helper
    └── animations.ts       # Shared Framer Motion variants
```

## Design System
- Background: #0B0F19 (primary), #111827 (secondary)
- Accent: #3B82F6 (blue)
- Text: #F9FAFB (primary), #9CA3AF (secondary)
- Fonts: Sora (headings), DM Sans (body)

## Running
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build`

## Placeholder Links
- LinkedIn: https://linkedin.com/in/abdulrahmanbazarah (update as needed)
- WhatsApp: https://wa.me/966XXXXXXXXX (update phone number)
- Email: hello@bazarah.dev (update as needed)
