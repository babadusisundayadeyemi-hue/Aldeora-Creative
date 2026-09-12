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
  title: "Aldeora Creative — Premium AI Visual Content for Beauty & Wellness Brands",
  description:
    "Aldeora Creative is a visual content studio creating premium AI-assisted video for beauty, skincare, haircare, wellness and self-care brands. Founded by Adeyemi Gold.",
  keywords: [
    "AI video",
    "beauty video production",
    "skincare content",
    "wellness video",
    "creative studio",
    "Aldeora Creative",
    "Adeyemi Gold",
  ],
  authors: [{ name: "Adeyemi Gold" }],
  openGraph: {
    title: "Aldeora Creative — Premium AI Visual Content",
    description: "We create premium visual content that makes brands look more valuable.",
    siteName: "Aldeora Creative",
    type: "website",
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
