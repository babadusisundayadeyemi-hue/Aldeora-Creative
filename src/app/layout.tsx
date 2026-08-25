import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aldeora Creative — AI Video for Beauty, Wellness & Self-Care Brands",
  description:
    "Aldeora Creative creates scroll-stopping AI-powered video content, modern web design and digital solutions for beauty, wellness and self-care brands. Premium creative production.",
  keywords: [
    "AI video",
    "beauty video production",
    "wellness content",
    "self-care brands",
    "creative agency",
    "web design",
    "digital solutions",
    "Aldeora Creative",
  ],
  authors: [{ name: "Aldeora Creative" }],
  openGraph: {
    title: "Aldeora Creative — AI Video for Beauty, Wellness & Self-Care",
    description:
      "Scroll-stopping AI-powered video content for modern beauty, wellness and self-care brands.",
    siteName: "Aldeora Creative",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldeora Creative",
    description: "AI Video for Beauty, Wellness & Self-Care Brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
