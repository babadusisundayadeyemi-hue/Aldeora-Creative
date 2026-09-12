/**
 * Aldeora Creative — Central site configuration
 *
 * Premium creative studio producing AI-powered visual content for
 * beauty, wellness, skincare, haircare and lifestyle brands.
 *
 * Founded by Adeyemi Gold.
 */

export const BRAND = {
  name: "Aldeora Creative",
  tagline: "AI-Powered Visual Content",
  positioning: "Premium visual content that makes brands look more valuable.",
  email: "aldeoracreative@gmail.com",
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
    "A creative studio making premium AI-powered video for brands that want to stand out.",
  longBio: [
    "Aldeora Creative is a visual content studio led by Adeyemi Gold. We create premium AI-powered video for beauty, wellness and lifestyle brands.",
    "We work with brands that care about how they look — skincare, haircare, beauty, spa, wellness and lifestyle. Every frame is art-directed, not automated.",
  ],
  quotes: [
    {
      text: "Premium isn't a budget. It's a decision about how your brand deserves to look.",
    },
  ],
};

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

/* ---------- WhatsApp helpers ---------- */

export function waLink(message?: string): string {
  const base = `https://wa.me/${BRAND.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hello Aldeora Creative, I'd like to create something beautiful.`
);

/* ---------- Services ---------- */

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    id: "ai-video",
    number: "01",
    title: "AI Video Creation",
    short: "Premium AI-assisted video content for modern brands.",
    description: "Cinematic video content created with AI tools and human art direction. Designed for brands that want to look premium without the cost of traditional production.",
    icon: "Video",
  },
  {
    id: "product-brand",
    number: "02",
    title: "Product & Brand Videos",
    short: "Visual content that makes products more memorable.",
    description: "Product films, brand stories and campaign content that elevate how your products look and feel across every platform.",
    icon: "Package",
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Content",
    short: "Short-form video for Instagram, TikTok and beyond.",
    description: "Scroll-stopping short-form video designed for Reels, TikTok and Shorts — built to perform and convert.",
    icon: "Share2",
  },
  {
    id: "beauty-wellness",
    number: "04",
    title: "Beauty & Wellness Content",
    short: "Visual storytelling for skincare, haircare, spa and wellness.",
    description: "Specialized content for beauty, skincare, haircare, wellness, massage and lifestyle brands. We understand the aesthetic these industries demand.",
    icon: "Sparkles",
  },
];

/* ---------- Portfolio ---------- */

export type Category = "All" | "Beauty" | "Skincare" | "Haircare" | "Wellness" | "Product" | "Brand Content";

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  format: string;
  description: string;
  /** YouTube video ID — AI-generated reference film */
  videoId: string;
  /** Layout size for editorial grid */
  size: "large" | "medium" | "small" | "tall" | "wide";
};

export const PROJECTS: Project[] = [
  {
    id: "p01",
    title: "Aurelle Serum",
    category: "Skincare",
    format: "AI Film · 30s",
    description: "Cinematic skincare product film.",
    videoId: "ngqY0cSRilw",
    size: "large",
  },
  {
    id: "p02",
    title: "Maison Lumière",
    category: "Beauty",
    format: "AI Campaign · 30s",
    description: "Luxury perfume commercial.",
    videoId: "OT8cttp0C4w",
    size: "tall",
  },
  {
    id: "p03",
    title: "Botanical Bloom",
    category: "Product",
    format: "AI Product Film · 30s",
    description: "Beauty product ad, 100% AI-generated.",
    videoId: "GLfR71Jnez4",
    size: "medium",
  },
  {
    id: "p04",
    title: "Silk Ritual",
    category: "Wellness",
    format: "AI Brand Film · 30s",
    description: "Luxury spa film.",
    videoId: "1qVmVXbx80U",
    size: "wide",
  },
  {
    id: "p05",
    title: "Crown Care",
    category: "Haircare",
    format: "AI Reel · 30s",
    description: "AI salon transformation.",
    videoId: "sB6_30UxBAA",
    size: "medium",
  },
  {
    id: "p06",
    title: "Glass Skin",
    category: "Skincare",
    format: "AI UGC · 30s",
    description: "Luxury AI skincare UGC ad.",
    videoId: "Ce4Jz2A3LmA",
    size: "small",
  },
  {
    id: "p07",
    title: "Rouge Lumière",
    category: "Beauty",
    format: "AI Product Film · 30s",
    description: "Cinematic lipstick commercial.",
    videoId: "7T88oi5i0Og",
    size: "tall",
  },
  {
    id: "p08",
    title: "Quiet Hands",
    category: "Wellness",
    format: "AI Brand Film · 30s",
    description: "AI spa ASMR film.",
    videoId: "Xz5RGzLXXjU",
    size: "small",
  },
  {
    id: "p09",
    title: "Glow Edit",
    category: "Beauty",
    format: "AI Short · 15s",
    description: "AI makeup transformation.",
    videoId: "wqvJ35fB9-4",
    size: "medium",
  },
  {
    id: "p10",
    title: "Lash Atelier",
    category: "Beauty",
    format: "AI Reel · 30s",
    description: "AI lash extension film.",
    videoId: "0j3ojHlS9bs",
    size: "small",
  },
  {
    id: "p11",
    title: "Aura Beauty",
    category: "Brand Content",
    format: "AI Campaign · 30s",
    description: "Luxury AI skincare commercial.",
    videoId: "HYdZ2tc1Upc",
    size: "wide",
  },
  {
    id: "p12",
    title: "Still Waters",
    category: "Wellness",
    format: "AI Brand Film · 30s",
    description: "Luxury AI wellness film.",
    videoId: "S-8L0GxllhY",
    size: "medium",
  },
];

/* ---------- Reviews / Testimonials ---------- */
/*
 * NOTE: The user will provide real reviews, client names and client photos.
 * This is the placeholder structure — replace with real data when provided.
 * DO NOT invent fake testimonials, names or photos.
 */

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  business: string;
  photo?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Your review will appear here. Send us your real testimonials, client names and photos and we'll display them beautifully.",
    name: "Your Client",
    role: "Client",
    business: "Your Brand",
  },
];

/* ---------- Process ---------- */

export const PROCESS_STEPS = [
  { n: "01", title: "Brief", desc: "We learn your brand, audience and goals." },
  { n: "02", title: "Direction", desc: "Creative direction, format and visual identity." },
  { n: "03", title: "Production", desc: "AI-assisted production with human art direction." },
  { n: "04", title: "Delivery", desc: "Platform-ready content, refined and delivered." },
];
