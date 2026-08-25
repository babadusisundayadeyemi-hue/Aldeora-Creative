import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aldeora Creative — AI Video for Beauty, Wellness & Self-Care Brands",
  description:
    "Aldeora Creative is a creative studio led by Adeyemi Gold, producing AI-powered video content, web design and digital solutions for beauty, wellness and self-care brands.",
  keywords: [
    "AI video",
    "beauty video production",
    "wellness content",
    "self-care brands",
    "creative agency",
    "web design",
    "digital solutions",
    "Aldeora Creative",
    "Adeyemi Gold",
  ],
  authors: [{ name: "Adeyemi Gold" }],
  openGraph: {
    title: "Aldeora Creative — AI Video for Beauty, Wellness & Self-Care",
    description:
      "A creative studio led by Adeyemi Gold. Scroll-stopping AI-powered video content for modern beauty, wellness and self-care brands.",
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
        className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
