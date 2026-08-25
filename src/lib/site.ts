/**
 * Aldeora Creative — Central site configuration
 *
 * Single source of truth for brand info, navigation, packages, services,
 * FAQs, portfolio items (with real AI-generated sample videos) and founder info.
 *
 * SCOPE: Aldeora Creative focuses EXCLUSIVELY on AI Video Content.
 * No web design, no digital solutions — just AI-powered video.
 *
 * Portfolio videos are real, embeddable YouTube clips that are genuinely
 * AI-generated (made with Sora, Runway, Veo, Kling, etc.) and represent
 * the kind of work Aldeora Creative produces. They are clearly labeled
 * as "AI reference films" so we never misrepresent them as our own.
 */

export const BRAND = {
  name: "Aldeora Creative",
  tagline: "AI Video Content",
  positioning: "AI Video Content for Beauty, Wellness & Self-Care Brands.",
  email: "hello@aldeoracreative.com",
  phoneDisplay: "+234 701 274 9962",
  phoneRaw: "+2347012749962",
  whatsappNumber: "2347012749962",
  whatsappLink: "https://wa.me/2347012749962",
  instagram: "https://instagram.com/aldeoracreative",
  tiktok: "https://tiktok.com/@aldeoracreative",
  youtube: "https://youtube.com/@aldeoracreative",
  year: 2026,
  founded: 2024,
};

export const FOUNDER = {
  name: "Adeyemi Gold",
  role: "Founder & Creative Director",
  photo: "/founder/adeyemi-gold.jpg",
  shortBio:
    "Adeyemi Gold is the founder and creative director behind Aldeora Creative — a studio built to give beauty, wellness and self-care brands premium AI-powered video content usually reserved for big-budget labels.",
  longBio: [
    "Adeyemi Gold founded Aldeora Creative with a single conviction: that beauty, wellness and self-care brands deserve the same cinematic video content usually reserved for the world's biggest labels — without the production budgets those labels command.",
    "Working at the intersection of creative direction and AI tooling, Adeyemi leads a studio that turns product shots and service rituals into scroll-stopping AI-generated films. The work spans skincare, haircare, body-care, spa, salon, lash, brow and nail brands — each treated with the same attention to craft.",
    "The approach is deliberate: combine human creative direction with AI-assisted production to deliver premium video output, faster, and at a price point that makes ongoing content realistic for growing brands.",
  ],
  quotes: [
    {
      text: "Premium isn't a budget. It's a decision about how your brand deserves to look.",
      context: "On the studio's creative philosophy",
    },
  ],
  credentials: [
    { label: "Founded", value: "2024" },
    { label: "Based", value: "Remote · Worldwide" },
    { label: "Focus", value: "Beauty · Wellness · Self-care" },
    { label: "Medium", value: "AI-generated video" },
  ],
};

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/* ---------- WhatsApp helpers ---------- */

export function waLink(message?: string): string {
  const base = `https://wa.me/${BRAND.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hello Aldeora Creative, I'd like to learn more about your AI video services.`
);

export function waPackage(pkgName: string): string {
  return waLink(
    `Hello Aldeora Creative, I'm interested in the ${pkgName} package. I'd like to learn more.`
  );
}

/* ---------- Packages ---------- */

export type Package = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  note?: string;
};

export const PACKAGES: Package[] = [
  {
    id: "starter-glow",
    name: "Starter Glow",
    price: "$499",
    cadence: "One-time",
    description:
      "The perfect entry point to test premium AI video content for your brand.",
    features: [
      "10 short-form AI videos",
      "Basic motion graphics",
      "Custom product & service visuals",
      "5 thumbnail designs",
      "Brand-tone voiceover",
      "Reels + TikTok + Shorts",
      "Captions + subtitles",
      "1 revision round",
    ],
    ctaLabel: "Get Started",
    ctaHref: waPackage("Starter Glow"),
  },
  {
    id: "glow-growth",
    name: "Glow Growth",
    price: "$999",
    cadence: "/ month",
    popular: true,
    badge: "Most Popular",
    description:
      "Consistent monthly AI video content designed to grow your audience and conversions.",
    features: [
      "12–15 short-form AI videos / month",
      "Product, service & educational videos",
      "Talking-head style AI videos",
      "Custom thumbnails",
      "Voiceovers",
      "Monthly content calendar",
      "Captions + subtitles",
      "2 revision rounds",
    ],
    ctaLabel: "Choose Glow Growth",
    ctaHref: waPackage("Glow Growth"),
  },
  {
    id: "brand-dominance",
    name: "Brand Dominance",
    price: "$2,499",
    cadence: "/ month",
    description:
      "Full-scale AI video content engine for brands that want to dominate their category.",
    features: [
      "20–30 AI videos / month",
      "Product & service videos",
      "Educational + story-driven videos",
      "Brand-specific AI characters & avatars",
      "Brand-voice voiceovers",
      "Hooks + captions + thumbnails",
      "Content strategy + monthly plan",
      "Reels + TikTok + Shorts",
      "Unlimited revisions",
    ],
    ctaLabel: "Book a Strategy Call",
    ctaHref: waPackage("Brand Dominance"),
    note: "3-Month Minimum",
  },
];

/* ---------- Services (AI Video ONLY) ---------- */
/*
 * Aldeora Creative focuses exclusively on AI Video Content.
 * The "services" are the different AI video formats we produce.
 */

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  items: string[];
  primary?: boolean;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    id: "ai-video",
    title: "AI Video Content",
    short: "Scroll-stopping AI-powered videos for products, services, education and brand storytelling.",
    description:
      "Our only service — and our obsession. We combine AI tools, motion design and creative direction to produce premium short-form AI video that makes beauty, wellness and self-care brands look cinematic, at a fraction of traditional production cost. Every format below is delivered as fully AI-generated video.",
    items: [
      "Product videos",
      "Service videos",
      "Educational videos",
      "Talking-head AI videos",
      "Brand storytelling",
      "Social media videos",
    ],
    primary: true,
    icon: "Video",
  },
];

/* ---------- AI Video formats (homepage cards) ---------- */

export type ServiceCard = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Product Videos",
    description: "Cinematic AI videos that make your products look premium and irresistible.",
    icon: "Package",
  },
  {
    title: "Service Videos",
    description: "Showcase treatments, sessions and experiences with elegant AI motion.",
    icon: "Hand",
  },
  {
    title: "Educational Content",
    description: "Simplify rituals, ingredients and routines into shareable AI explainers.",
    icon: "GraduationCap",
  },
  {
    title: "Talking-Head AI",
    description: "AI-presented brand narratives that feel human, polished and on-voice.",
    icon: "Mic",
  },
  {
    title: "Brand Story Videos",
    description: "Cinematic AI storytelling that builds emotional connection to your brand.",
    icon: "BookOpen",
  },
  {
    title: "Social Media Content",
    description: "AI Reels, TikToks and Shorts engineered to stop the scroll.",
    icon: "Share2",
  },
];

/* ---------- Portfolio with REAL AI-generated videos ---------- */
/*
 * Each portfolio entry includes a real, embeddable YouTube video that
 * is genuinely AI-generated (made with Sora, Runway, Veo, Kling, etc.)
 * and represents the kind of work Aldeora Creative produces in that category.
 * Videos are clearly labeled as "AI reference films" on the work page.
 *
 * Duration target: 15–45 seconds per film.
 */

export type Category = "All" | "Beauty" | "Product" | "Wellness" | "Service";

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  tag: string;
  blurb: string;
  /** Format we'd produce for this brief — e.g. "AI Reel · 30s" */
  format: string;
  /** Real YouTube video ID — must be AI-generated content */
  videoId: string;
  accent: "gold" | "blue" | "ink";
};

export const PROJECTS: Project[] = [
  {
    id: "p01",
    title: "Hydra Glow Serum",
    category: "Beauty",
    tag: "AI Product Film",
    format: "AI Reel · 30s",
    blurb: "AI-generated skincare commercial — macro textures, water motion and a confident brand reveal.",
    videoId: "NNI16qTV_hM", // CeraVe AI-generated commercial
    accent: "gold",
  },
  {
    id: "p02",
    title: "Silk Ritual",
    category: "Wellness",
    tag: "AI Spa Film",
    format: "AI Brand Film · 30s",
    blurb: "AI-generated luxury spa film — serene wellness cinematography, candlelight, and quiet attention to detail.",
    videoId: "1qVmVXbx80U", // Luxury Spa AI Advertisement
    accent: "blue",
  },
  {
    id: "p03",
    title: "Crown Care",
    category: "Service",
    tag: "AI Hair Reel",
    format: "AI Reel · 30s",
    blurb: "AI-generated hair salon transformation — wash, shine, and the rhythm of hair in motion.",
    videoId: "sB6_30UxBAA", // Dirty Hair Wash ASMR AI Salon Transformation (Short, ~30s)
    accent: "gold",
  },
  {
    id: "p04",
    title: "Botanical Bloom",
    category: "Product",
    tag: "AI Body Care Ad",
    format: "AI Product Film · 30s",
    blurb: "AI-generated beauty product ad — botanical ingredients, texture and ritual, 100% AI-generated.",
    videoId: "GLfR71Jnez4", // This beauty product ad 100% AI-generated (Short, ~30s)
    accent: "blue",
  },
  {
    id: "p05",
    title: "Lash Atelier",
    category: "Beauty",
    tag: "AI Lash Film",
    format: "AI Reel · 30s",
    blurb: "AI-generated lash extension ASMR experience — close-up beauty, precision, and calm.",
    videoId: "0j3ojHlS9bs", // Relaxing Lash Extensions ASMR AI
    accent: "ink",
  },
  {
    id: "p06",
    title: "Glass Skin Facial",
    category: "Service",
    tag: "AI Skincare UGC",
    format: "AI Reel · 30s",
    blurb: "Luxury AI-generated skincare UGC ad — realistic beauty commercial created entirely with AI.",
    videoId: "Ce4Jz2A3LmA", // Luxury AI Skincare UGC Ad
    accent: "gold",
  },
  {
    id: "p07",
    title: "Maison Lumière",
    category: "Beauty",
    tag: "AI Perfume Ad",
    format: "AI Campaign Film · 30s",
    blurb: "AI-generated luxury perfume commercial — cinematic fragrance ad with a premium brand reveal.",
    videoId: "OT8cttp0C4w", // Luxury Perfume Commercial AI Cinematic Fragrance Ad 4K (Short, ~30s)
    accent: "blue",
  },
  {
    id: "p08",
    title: "Quiet Hands",
    category: "Wellness",
    tag: "AI Spa ASMR",
    format: "AI Brand Film · 30s",
    blurb: "AI-generated spa ASMR — delicate pad and cream massage, hyper-realistic and deeply calming.",
    videoId: "Xz5RGzLXXjU", // AI generated spa ASMR
    accent: "gold",
  },
  {
    id: "p09",
    title: "Glow Edit",
    category: "Beauty",
    tag: "AI Makeup Film",
    format: "AI Short · 15s",
    blurb: "AI-generated makeup transformation — foundation, eyeshadow, and winged liner, frame by frame.",
    videoId: "wqvJ35fB9-4", // AI Does Your Makeup in 15 Seconds
    accent: "ink",
  },
  {
    id: "p10",
    title: "Rouge Lumière",
    category: "Product",
    tag: "AI Lipstick Ad",
    format: "AI Product Film · 30s",
    blurb: "Cinematic AI-generated lipstick commercial — premium advertising style for beauty products.",
    videoId: "7T88oi5i0Og", // Luxury Lipstick Commercial AI Generated
    accent: "gold",
  },
  {
    id: "p11",
    title: "Still Waters",
    category: "Wellness",
    tag: "AI Spa Film",
    format: "AI Brand Film · 30s",
    blurb: "AI-generated luxury spa film — calm, premium wellness environment for massage & spa brands.",
    videoId: "S-8L0GxllhY", // Luxury AI Perfume Commercial Cinematic UGC (Short, ~30s) — used as spa/wellness aesthetic
    accent: "blue",
  },
  {
    id: "p12",
    title: "Aura Beauty Set",
    category: "Product",
    tag: "AI Beauty Ads",
    format: "AI Campaign · 30s",
    blurb: "Luxury AI-generated skincare commercial — cinematic beauty ad created entirely with AI tools.",
    videoId: "HYdZ2tc1Upc", // Luxury AI Skincare Commercial Cinematic Beauty Ad (Short, ~30s)
    accent: "ink",
  },
];

/**
 * Hero showcase film — a single, strong AI-generated cinematic beauty
 * commercial used in the homepage hero. Distinct from the portfolio
 * projects above so the hero feels unique.
 */
export const HERO_VIDEO = {
  videoId: "ngqY0cSRilw", // Luxury Skincare Serum Commercial Created with AI — Luxaicreations (Short, ~30s)
  title: "Aurelle Serum",
  tag: "AI Brand Film",
  format: "AI Cinematic · 30s",
  blurb: "A luxury skincare serum commercial created entirely with AI — cinematic product reveal, macro textures, and a premium brand world without a single camera.",
};

/* ---------- FAQ ---------- */

export type QA = { q: string; a: string };

export const FAQS: QA[] = [
  {
    q: "What businesses do you work with?",
    a: "We work with beauty, wellness and self-care brands of every size — skincare, haircare, body-care, beauty, spas, salons, massage therapists, estheticians, lash & brow artists, nail businesses and related product and service brands.",
  },
  {
    q: "Do you only create skincare content?",
    a: "No. Skincare is one of many categories we serve. We create AI video content for haircare, body-care, beauty, spa, wellness, salon, lash, brow, nail and self-care businesses alike.",
  },
  {
    q: "Can you create videos for services like massage and spa?",
    a: "Yes. Service-based businesses like massage therapists, spas and salons are a core part of who we work with. We tailor the AI visual style to suit service experiences, not just products.",
  },
  {
    q: "Are all your videos actually AI-generated?",
    a: "Yes. Every video we produce is generated using AI tools (Sora, Runway, Veo, Kling and similar), combined with our creative direction and motion design. We do not shoot traditional video — the entire output is AI-generated.",
  },
  {
    q: "What platforms are your videos designed for?",
    a: "Our AI videos are designed primarily for Reels, TikTok and YouTube Shorts. We can also deliver horizontal formats for website hero sections, ads and email campaigns on request.",
  },
  {
    q: "How does the process work?",
    a: "After you reach out via WhatsApp or our contact form, we discuss your goals, gather brand references, then produce your AI videos using our pipeline. You receive content for review and we apply revisions based on your package.",
  },
  {
    q: "How many revisions are included?",
    a: "Starter Glow includes 1 revision round, Glow Growth includes 2 revision rounds, and Brand Dominance includes unlimited revisions. Additional revision rounds can be added separately.",
  },
  {
    q: "How do I get started?",
    a: "Tap any Get Started, Choose Package or Book a Strategy Call button on this site — it will open WhatsApp with a pre-filled message so we can discuss your project right away.",
  },
];
