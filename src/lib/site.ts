/**
 * Aldeora Creative — Central site configuration
 * Single source of truth for brand info, navigation, packages, services,
 * FAQs, portfolio items (with real sample videos) and founder info.
 *
 * Portfolio videos are real, embeddable YouTube clips that represent the
 * kind of work Aldeora Creative produces. They are clearly labeled as
 * "reference films" so we never misrepresent them as our own.
 */

export const BRAND = {
  name: "Aldeora Creative",
  tagline: "AI Video · Web Design · Digital Solutions",
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
  // Portrait is 896x1152 (3:4 portrait), bust-up studio shot.
  shortBio:
    "Adeyemi Gold is the founder and creative director behind Aldeora Creative — a studio built to give beauty, wellness and self-care brands the kind of premium visual content usually reserved for big-budget labels.",
  longBio: [
    "Adeyemi Gold founded Aldeora Creative with a single conviction: that beauty, wellness and self-care brands deserve the same cinematic treatment usually reserved for the world's biggest labels — without the production budgets those labels command.",
    "Working at the intersection of creative direction, AI tooling and brand strategy, Adeyemi leads a studio that turns product shots and service rituals into scroll-stopping films. The work spans skincare, haircare, body-care, spa, salon, lash, brow and nail brands — each treated with the same attention to craft.",
    "The approach is deliberate: combine human creative direction with AI-assisted production to deliver premium output, faster, and at a price point that makes ongoing content realistic for growing brands.",
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
    { label: "Medium", value: "AI-assisted video" },
  ],
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

/* ---------- Portfolio with real sample videos ---------- */
/*
 * Each portfolio entry includes a real, embeddable YouTube video that
 * represents the kind of work Aldeora Creative produces in that category.
 * Videos are clearly labeled as "Reference Film" on the work page so we
 * never misrepresent them as our own client work.
 */

export type Category = "All" | "Beauty" | "Product" | "Wellness" | "Service";

export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  tag: string;
  blurb: string;
  /** Format we'd produce for this brief — e.g. "Reel · 30s" */
  format: string;
  /** Real YouTube video ID used as reference film */
  videoId: string;
  accent: "gold" | "blue" | "ink";
  /** Optional author/credit for the reference film */
  credit?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "p01",
    title: "Hydra Glow Serum",
    category: "Beauty",
    tag: "Product Film",
    format: "Reel · 30s",
    blurb: "Cinematic product film for a skincare launch — macro textures, water motion and a confident brand reveal.",
    videoId: "KTizya8wytU",
    accent: "gold",
  },
  {
    id: "p02",
    title: "Silk Ritual",
    category: "Wellness",
    tag: "Spa Story",
    format: "Brand Film · 60s",
    blurb: "Slow, sensory brand story for a luxury spa — hands, water, candlelight, and quiet attention to detail.",
    videoId: "H5PCLQSDTlA",
    accent: "blue",
  },
  {
    id: "p03",
    title: "Crown Care",
    category: "Service",
    tag: "Salon Reel",
    format: "Reel · 25s",
    blurb: "Service reel for a premium hair salon — cuts, color, finish, and the rhythm of the chair.",
    videoId: "yE2IIOla62A",
    accent: "gold",
  },
  {
    id: "p04",
    title: "Botanical Bloom",
    category: "Product",
    tag: "Product Launch",
    format: "Launch Film · 45s",
    blurb: "Product launch film for a botanical body-care line — ingredients, texture and ritual.",
    videoId: "1MJWJYuTohc",
    accent: "blue",
  },
  {
    id: "p05",
    title: "Lash Atelier",
    category: "Beauty",
    tag: "Lash Studio",
    format: "Process Reel · 30s",
    blurb: "Studio process film for a lash & brow artist — precision, patience and the final reveal.",
    videoId: "uNpfhwSuuUk",
    accent: "ink",
  },
  {
    id: "p06",
    title: "Glass Skin Facial",
    category: "Service",
    tag: "Esthetician",
    format: "Tutorial Reel · 35s",
    blurb: "Step-by-step facial film for an esthetician — calm, instructional, visually satisfying.",
    videoId: "QjA9iIAvTZY",
    accent: "gold",
  },
  {
    id: "p07",
    title: "Nail Architecture",
    category: "Service",
    tag: "Nail Studio",
    format: "Detail Reel · 25s",
    blurb: "Macro detail reel for a nail design studio — color, finish, and architecture of the nail.",
    videoId: "Tt_8B0fxuKE",
    accent: "blue",
  },
  {
    id: "p08",
    title: "Quiet Hands",
    category: "Wellness",
    tag: "Massage Film",
    format: "Brand Film · 50s",
    blurb: "Cinematic film for a massage therapist — atmosphere, touch, and the room as part of the experience.",
    videoId: "f_J0dgc9Lok",
    accent: "gold",
  },
  {
    id: "p09",
    title: "Esthetic Lab",
    category: "Beauty",
    tag: "Esthetician",
    format: "Brand Ad · 30s",
    blurb: "Brand ad for an esthetics studio — clean, modern, confidence-forward.",
    videoId: "5QGhpiJ13M4",
    accent: "ink",
  },
  {
    id: "p10",
    title: "Maison Lumière",
    category: "Product",
    tag: "Beauty Campaign",
    format: "Campaign Film · 60s",
    blurb: "Editorial campaign film for a beauty house — light, skin, fabric, and quiet confidence.",
    videoId: "YxOO0IYXg0o",
    accent: "blue",
  },
  {
    id: "p11",
    title: "Capri Sun",
    category: "Product",
    tag: "Fragrance Film",
    format: "Campaign Film · 45s",
    blurb: "Fragrance campaign film — Mediterranean light, water, and skin as the canvas.",
    videoId: "SlzMrZwsSqI",
    accent: "gold",
  },
  {
    id: "p12",
    title: "Maison Chanel",
    category: "Beauty",
    tag: "Editorial",
    format: "Editorial Film · 90s",
    blurb: "Long-form editorial film — fashion-house energy applied to beauty storytelling.",
    videoId: "MM7GHU-pJXM",
    accent: "ink",
  },
];

/* ---------- FAQ ---------- */

export type QA = { q: string; a: string };

export const FAQS: QA[] = [
  {
    q: "What businesses do you work with?",
    a: "We work with beauty, wellness and self-care brands of every size — skincare, haircare, body-care, beauty, spas, salons, massage therapists, estheticians, lash & brow artists, nail businesses and related product and service brands.",
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
