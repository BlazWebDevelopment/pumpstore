import type { Metadata, Viewport } from "next";
import { Inter, Silkscreen } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pixel = Silkscreen({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pump.store"),
  title: {
    default: "pump.store — merch for the people who trade viral moments",
    template: "%s | pump.store",
  },
  description:
    "The merch counter for pump.fun. Six shirts, three cups and two plushies — every item is coming soon.",
  openGraph: {
    title: "pump.store — merch for the people who trade viral moments",
    description:
      "Six shirts, three cups and two plushies. Every item is coming soon — the first drop lands with the app.",
    url: "https://pump.store",
    siteName: "pump.store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "pump.store",
    description: "Merch for the people who trade viral moments. Coming soon.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/icon.png", sizes: "389x389", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-512.png", sizes: "512x512", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#14151c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pixel.variable}`}>
      <body className="relative min-h-dvh overflow-x-hidden bg-bg-page font-sans text-text-primary antialiased">
        <div aria-hidden className="page-backdrop page-glow -z-10" />
        <div aria-hidden className="page-backdrop starfield -z-10 opacity-70" />
        <SiteHeader />
        <main className="relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
