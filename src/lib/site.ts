/**
 * Aldeora Creative — Central site configuration
 *
 * Premium AI video creative studio for beauty, wellness & self-care brands.
 * Founded by Adeyemi Gold.
 */

export const BRAND = {
  name: "Aldeora Creative",
  tagline: "Premium AI Visual Content",
  positioning: "We create premium visual content that makes brands look more valuable.",
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
  heroVideo: "/videos/hero-beauty.mp4",
};

export const FOUNDER = {
  name: "Adeyemi Gold",
  role: "Founder & Creative Director",
  photo: "/founder/adeyemi-gold.jpg",
  shortBio:
    "Creative director building a studio that makes beauty, wellness and self-care brands look premium through AI-assisted video.",
  longBio: [
    "Aldeora Creative is a visual content studio for brands that take their image seriously.",
    "We create AI-assisted video and visual content for beauty, skincare, haircare, wellness and lifestyle brands — work that looks expensive, intentional, and unmistakably premium.",
    "Founded by Adeyemi Gold, the studio pairs creative direction with AI tooling to deliver cinematic content at a pace and price point traditional production can't match.",
  ],
  quote: "Premium isn't a budget. It's a decision about how your brand deserves to look.",
  credentials: [
    { label: "Founded", value: "2024" },
    { label: "Based", value: "Remote · Worldwide" },
    { label: "Focus", value: "Beauty · Wellness · Self-care" },
    { label: "Medium", value: "AI-assisted video" },
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
  `Hello Aldeora Creative, I'd like to create something beautiful together.`
);

/* ---------- Services (4 categories) ---------- */

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    id: "ai-video",
    title: "AI Video Creation",
    short: "Premium AI-assisted video for modern brands.",
    description: "Cinematic, AI-generated video content that makes your brand look expensive — product films, brand stories, social reels and campaign content.",
    icon: "Video",
  },
  {
    id: "product-brand",
    title: "Product & Brand Videos",
    short: "Visual content that makes products memorable.",
    description: "Product films and brand content that turn objects into desire — macro textures, water motion, cinematic reveals and brand-world storytelling.",
    icon: "Package",
  },
  {
    id: "social-media",
    title: "Social Media Content",
    short: "Short-form video for Instagram, TikTok & more.",
    description: "Scroll-stopping short-form video designed for Reels, TikTok and Shorts — engineered to drive engagement and conversions.",
    icon: "Share2",
  },
  {
    id: "beauty-wellness",
    title: "Beauty & Wellness Content",
    short: "Visual storytelling for skincare, haircare & wellness.",
    description: "Specialized visual content for skincare, haircare, beauty, spa, massage and self-care brands — each treated with premium creative direction.",
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
  /** Pexels/Pixabay stock video URL (MP4) for autoplay background, or YouTube ID for click-to-play */
  videoMp4?: string;
  videoId?: string;
  poster?: string;
  /** Layout size hint for editorial grid */
  size: "large" | "medium" | "small";
};

export const PROJECTS: Project[] = [
  {
    id: "w01",
    title: "Aurelle Serum",
    category: "Skincare",
    format: "Product Film · 30s",
    description: "Cinematic serum reveal — macro textures, light, and premium brand mood.",
    videoMp4: "https://videos.pexels.com/video-files/6446140/6446140-hd_720_1280_25fps.mp4",
    size: "large",
  },
  {
    id: "w02",
    title: "Botanical Bloom",
    category: "Product",
    format: "Brand Film · 30s",
    description: "Botanical body care — natural ingredients, texture, ritual.",
    videoMp4: "https://videos.pexels.com/video-files/4351016/4351016-hd_720_1280_30fps.mp4",
    size: "medium",
  },
  {
    id: "w03",
    title: "Silk Ritual",
    category: "Wellness",
    format: "Brand Film · 30s",
    description: "Spa wellness — calm, candlelight, quiet attention to detail.",
    videoMp4: "https://videos.pexels.com/video-files/3763974/3763974-hd_720_1280_25fps.mp4",
    size: "medium",
  },
  {
    id: "w04",
    title: "Glass Skin",
    category: "Beauty",
    format: "Product Film · 30s",
    description: "Skincare routine — bright, airy, minimalist beauty.",
    videoMp4: "https://videos.pexels.com/video-files/9474154/9474154-hd_720_1280_24fps.mp4",
    size: "large",
  },
  {
    id: "w05",
    title: "Lash Atelier",
    category: "Beauty",
    format: "Detail Reel · 30s",
    description: "Close-up beauty — precision, patience, and the final reveal.",
    videoMp4: "https://videos.pexels.com/video-files/9474166/9474166-hd_720_1280_24fps.mp4",
    size: "small",
  },
  {
    id: "w06",
    title: "Crown Care",
    category: "Haircare",
    format: "Brand Film · 30s",
    description: "Hair transformation — wash, shine, and the rhythm of motion.",
    videoMp4: "https://videos.pexels.com/video-files/7550880/7550880-hd_720_1280_25fps.mp4",
    size: "medium",
  },
  {
    id: "w07",
    title: "Quiet Hands",
    category: "Wellness",
    format: "Brand Film · 30s",
    description: "Massage therapy — atmosphere, touch, and the room as part of the experience.",
    videoMp4: "https://videos.pexels.com/video-files/5468859/5468859-hd_720_1280_30fps.mp4",
    size: "small",
  },
  {
    id: "w08",
    title: "Maison Lumière",
    category: "Brand Content",
    format: "Campaign Film · 30s",
    description: "Editorial campaign — light, skin, fabric, and quiet confidence.",
    videoMp4: "https://videos.pexels.com/video-files/7597224/7597224-hd_720_1280_24fps.mp4",
    size: "large",
  },
  {
    id: "w09",
    title: "Rouge Lumière",
    category: "Product",
    format: "Product Film · 30s",
    description: "Lipstick commercial — color, texture, and premium advertising style.",
    videoMp4: "https://videos.pexels.com/video-files/8558303/8558303-hd_720_1280_30fps.mp4",
    size: "medium",
  },
];

/* ---------- Testimonials ----------
 * The user will provide REAL reviews and client photos.
 * Until then, this array is EMPTY — we never invent fake testimonials.
 * The Reviews page will display a placeholder section asking the user
 * to send their reviews.
 */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  photo?: string;
};

export const TESTIMONIALS: Testimonial[] = [];

/* ---------- FAQ (shorter) ---------- */

export type QA = { q: string; a: string };

export const FAQS: QA[] = [
  {
    q: "What does Aldeora Creative do?",
    a: "We create premium AI-assisted video and visual content for beauty, skincare, haircare, wellness and lifestyle brands.",
  },
  {
    q: "Are your videos AI-generated?",
    a: "Yes. Every video is produced using AI tools, paired with creative direction and motion design. We don't shoot traditional video.",
  },
  {
    q: "What platforms do you design for?",
    a: "Reels, TikTok, YouTube Shorts, and horizontal formats for websites and ads.",
  },
  {
    q: "How do I get started?",
    a: "Tap any CTA on this site to open WhatsApp, or send us an email. We'll discuss your brand and goals.",
  },
];
