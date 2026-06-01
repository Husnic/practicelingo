import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebSiteJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://practicelingo.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PracticeLingo — Clear Care. Every Language.",
    template: "%s | PracticeLingo",
  },
  description:
    "PracticeLingo is a multilingual patient communication platform for UK GP surgeries and Primary Care Networks. Waiting room displays, QR mobile continuation, and audio guidance in 10+ languages.",
  keywords: [
    "multilingual patient communication",
    "NHS GP surgery",
    "healthcare language barriers",
    "GP practice multilingual",
    "primary care network",
    "QR patient communication",
    "NHS App adoption",
    "health inequality",
    "Arabic GP",
    "multilingual waiting room",
  ],
  authors: [{ name: "PracticeLingo", url: siteUrl }],
  creator: "PracticeLingo",
  publisher: "PracticeLingo",
  category: "Healthcare Technology",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "PracticeLingo",
    title: "PracticeLingo — Clear Care. Every Language.",
    description:
      "Multilingual patient communication for UK GP surgeries. QR mobile continuation, audio translation, and waiting room displays in 10+ languages.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PracticeLingo — Clear Care. Every Language.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PracticeLingo — Clear Care. Every Language.",
    description:
      "Multilingual patient communication for UK GP surgeries. QR mobile continuation in 10+ languages.",
    images: ["/og-image.png"],
    creator: "@practicelingo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: { "en-GB": siteUrl },
  },
  icons: {
    icon: "/brand/Icon.png",
    apple: "/brand/Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ServiceJsonLd />
        <FaqJsonLd />
        {children}
      </body>
    </html>
  );
}
