/**
 * Aldeora Creative — Central site configuration
 * Single source of truth for brand info, navigation, packages, services, FAQs and portfolio items.
 */

export const BRAND = {
  name: "Aldeora Creative",
  tagline: "AI Video • Web Design • Digital Solutions",
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
};

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Packages", href: "/packages" },
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
  `Hello Aldeora Creative, I'd like to learn more about your services.`
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
      "10 short-form videos",
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
      "Consistent monthly content designed to grow your audience and conversions.",
    features: [
      "12–15 short-form videos / month",
      "Product, service & educational videos",
      "Talking-head style videos",
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
      "Full-scale content engine for brands that want to dominate their category.",
    features: [
      "20–30 videos / month",
      "Product & service videos",
      "Educational + story-driven videos",
      "Brand-specific characters & avatars",
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

/* ---------- Services ---------- */

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  items: string[];
  primary?: boolean;
  icon: string; // lucide icon name
};

export const SERVICES: Service[] = [
  {
    id: "ai-video",
    title: "AI Video Content",
    short: "Scroll-stopping AI-powered videos for products, services, education and brand storytelling.",
    description:
      "Our flagship service. We combine AI tools, motion design and creative direction to produce premium short-form video that makes beauty, wellness and self-care brands look cinematic — at a fraction of traditional production cost.",
    items: [
      "Product videos",
      "Service videos",
      "Educational videos",
      "Talking-head videos",
      "Brand storytelling",
      "Social media videos",
    ],
    primary: true,
    icon: "Video",
  },
  {
    id: "web-design",
    title: "Web Design",
    short: "Modern responsive websites, landing pages and brand-focused web experiences.",
    description:
      "Clean, fast, conversion-focused websites that mirror the premium feel of your video content. Built to perform on every device and to convert visitors into customers.",
    items: [
      "Modern responsive websites",
      "Landing pages",
      "Business websites",
      "Brand-focused web experiences",
    ],
    icon: "MonitorSmartphone",
  },
  {
    id: "digital-solutions",
    title: "Digital Solutions",
    short: "Tailored digital creative solutions aligned to your business goals.",
    description:
      "From content systems to creative strategy, we design digital solutions that fit your specific business — not off-the-shelf templates.",
    items: [
      "Digital creative strategy",
      "Content systems & workflows",
      "Brand identity support",
      "Cross-platform creative production",
    ],
    icon: "Sparkles",
  },
];

/* ---------- Services preview (homepage cards) ---------- */

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
    description: "Showcase treatments, sessions and experiences with elegant motion.",
    icon: "Hand",
  },
  {
    title: "Educational Content",
    description: "Simplify rituals, ingredients and routines into shareable explainers.",
    icon: "GraduationCap",
  },
  {
    title: "Talking-Head Content",
    description: "AI-presented brand narratives that feel human, polished and on-voice.",
    icon: "Mic",
  },
  {
    title: "Brand Story Videos",
    description: "Cinematic storytelling that builds emotional connection to your brand.",
    icon: "BookOpen",
  },
  {
    title: "Social Media Content",
    description: "Reels, TikToks and Shorts engineered to stop the scroll.",
    icon: "Share2",
  },
];

/* ---------- Portfolio ---------- */

export type Category = "All" | "Beauty" | "Product" | "Wellness" | "Service";

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  tag: string;
  blurb: string;
  accent: "gold" | "blue" | "ink";
};

export const PROJECTS: Project[] = [
  { id: "p01", title: "Hydra Glow Serum",     category: "Beauty",   tag: "Skincare Film",       blurb: "Cinematic product film for a skincare launch.",  accent: "gold" },
  { id: "p02", title: "Silk Ritual",          category: "Wellness", tag: "Spa Story",           blurb: "Brand story for a luxury spa experience.",       accent: "blue" },
  { id: "p03", title: "Crown Care",           category: "Service",  tag: "Salon Reel",          blurb: "Service reel for a premium hair salon.",         accent: "gold" },
  { id: "p04", title: "Botanical Bloom",      category: "Product",  tag: "Product Launch",      blurb: "Product video for a botanical body-care line.",  accent: "blue" },
  { id: "p05", title: "Lash Atelier",         category: "Beauty",   tag: "Lash Studio",         blurb: "Brand film for a lash & brow studio.",           accent: "ink" },
  { id: "p06", title: "Quiet Hands",          category: "Wellness", tag: "Massage Film",        blurb: "Cinematic film for a massage therapist.",        accent: "gold" },
  { id: "p07", title: "Nail Architecture",    category: "Service",  tag: "Nail Studio",         blurb: "Reel series for a nail design studio.",          accent: "blue" },
  { id: "p08", title: "Glow Edit",            category: "Product",  tag: "Beauty Set",          blurb: "Product set film for a beauty kit.",             accent: "ink" },
  { id: "p09", title: "Esthetic Lab",         category: "Beauty",   tag: "Esthetician",         blurb: "Educational content for an esthetician.",        accent: "gold" },
  { id: "p10", title: "Halo Hair",            category: "Product",  tag: "Haircare Launch",     blurb: "Launch film for a haircare brand.",              accent: "blue" },
  { id: "p11", title: "Still Waters",         category: "Wellness", tag: "Wellness Brand",      blurb: "Brand story for a wellness retreat.",            accent: "gold" },
  { id: "p12", title: "Brow Architecture",    category: "Service",  tag: "Brow Studio",         blurb: "Service reel for a brow bar.",                   accent: "ink" },
];

/* ---------- FAQ ---------- */

export type QA = { q: string; a: string };

export const FAQS: QA[] = [
  {
    q: "What businesses do you work with?",
    a: "We work with beauty, wellness and self-care brands of every size — skincare, haircare, body-care, spas, salons, massage therapists, estheticians, lash & brow artists, nail businesses and related product and service brands.",
  },
  {
    q: "Do you only create skincare content?",
    a: "No. Skincare is one of many categories we serve. We create video content for haircare, body-care, beauty, spa, wellness, salon, lash, brow, nail and self-care businesses alike.",
  },
  {
    q: "Can you create videos for services like massage and spa?",
    a: "Yes. Service-based businesses like massage therapists, spas and salons are a core part of who we work with. We tailor the visual style to suit service experiences, not just products.",
  },
  {
    q: "What platforms are your videos designed for?",
    a: "Our videos are designed primarily for Reels, TikTok and YouTube Shorts. We can also deliver horizontal formats for website hero sections, ads and email campaigns on request.",
  },
  {
    q: "How does the process work?",
    a: "After you reach out via WhatsApp or our contact form, we discuss your goals, gather brand references, then produce your videos using our AI-powered pipeline. You receive content for review and we apply revisions based on your package.",
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
