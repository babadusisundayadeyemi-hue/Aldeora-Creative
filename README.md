# Aldeora Creative

AI video content for beauty, wellness & self-care brands. A premium multi-page website built for Aldeora Creative, a creative studio founded by **Adeyemi Gold**.

## What's Inside

- **Home** — Hero with AI video showcase, services preview, portfolio preview, founder feature
- **Services** — AI Video Content (the studio's sole focus), 6 AI video formats, 4-step process
- **Work** — Filterable portfolio of 12 AI-generated reference films (Beauty / Product / Wellness / Service)
- **About** — Founder feature with Adeyemi Gold's portrait, bio, and studio story
- **FAQ** — Functional accordion with 8 common questions
- **Contact** — WhatsApp quick-contact + contact form that opens WhatsApp with pre-filled message

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + custom components
- **Animations**: Framer Motion
- **Fonts**: Fraunces (display) + Inter (body) + JetBrains Mono (labels)
- **Icons**: Lucide React

## Brand

- **Colors**: Black `#0A0A0A` · Blue `#1557B0` · Gold `#C9A227` · White `#FFFFFF`
- **Founder**: Adeyemi Gold — Creative Director
- **WhatsApp**: +234 701 274 9962

## Getting Started

```bash
# Install dependencies
bun install

# Copy env file
cp .env.example .env

# Start dev server
bun run dev

# Open http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── services/         # Services page
│   ├── work/             # Work / Portfolio
│   ├── about/            # About + Founder
│   ├── faq/              # FAQ accordion
│   ├── contact/          # Contact form + WhatsApp
│   ├── layout.tsx        # Root layout (Navbar + Footer)
│   └── globals.css       # Design system
├── components/
│   ├── site/             # Custom components (Navbar, Footer, Logo, VideoEmbed, etc.)
│   └── ui/               # shadcn/ui components
└── lib/
    └── site.ts           # Central config (brand, nav, services, projects, FAQ)
```

## Portfolio Videos

All portfolio videos are real, embeddable AI-generated YouTube Shorts (under 60 seconds) made with tools like Sora, Runway, Veo, Kling, and Seedance. They are clearly labeled as "AI reference films" and cover beauty, skincare, spa, hair, lash, perfume, lipstick, and body care categories.

## Contact

- **WhatsApp**: [+234 701 274 9962](https://wa.me/2347012749962)
- **Founder**: Adeyemi Gold

---

© 2026 Aldeora Creative. All rights reserved.
