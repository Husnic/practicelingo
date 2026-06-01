import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://practicelingo.co.uk";

function ogImage(alt: string) {
  return [{ url: "/og-image.png", width: 1200, height: 630, alt }];
}

export const aboutMetadata: Metadata = {
  title: "About",
  description:
    "PracticeLingo was built to bridge the language gap in UK healthcare. Learn about our mission to make every GP visit accessible, regardless of a patient's first language.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About PracticeLingo — Built To Make Healthcare Easier",
    description:
      "Our mission is to help every patient access healthcare confidently, regardless of language barriers.",
    url: `${siteUrl}/about`,
    images: ogImage("About PracticeLingo"),
  },
};

export const howItWorksMetadata: Metadata = {
  title: "How It Works",
  description:
    "PracticeLingo combines multilingual waiting room displays, QR mobile continuation, and audio translation into one simple 5-step patient journey. No app download needed.",
  alternates: { canonical: `${siteUrl}/how-it-works` },
  openGraph: {
    title: "How PracticeLingo Works — 5-Step Multilingual Patient Journey",
    description:
      "Waiting room display → language selection → QR scan → phone opens → patient navigates independently.",
    url: `${siteUrl}/how-it-works`,
    images: ogImage("How PracticeLingo Works"),
  },
};

export const solutionsMetadata: Metadata = {
  title: "Solutions",
  description:
    "PracticeLingo solutions for GP practices and Primary Care Networks. Reduce reception pressure, improve NHS App adoption, and support health campaigns in 6 languages.",
  alternates: { canonical: `${siteUrl}/solutions` },
  openGraph: {
    title: "PracticeLingo Solutions — GP Practices & PCNs",
    description:
      "Multilingual communication solutions for individual GP practices and full PCN deployments.",
    url: `${siteUrl}/solutions`,
    images: ogImage("PracticeLingo Solutions"),
  },
};

export const languagesMetadata: Metadata = {
  title: "Languages",
  description:
    "PracticeLingo supports English, Arabic, Mandarin, Portuguese, Hindi, and French at launch. Spanish, Yoruba, Pidgin, German, Italian, and Twi coming soon.",
  alternates: { canonical: `${siteUrl}/languages` },
  openGraph: {
    title: "Languages Supported by PracticeLingo",
    description:
      "Healthcare guidance in 6 languages — English, Arabic, Mandarin, Portuguese, Hindi, French and more.",
    url: `${siteUrl}/languages`,
    images: ogImage("PracticeLingo Languages"),
  },
};

export const pilotMetadata: Metadata = {
  title: "Pilot Programme",
  description:
    "PracticeLingo is piloting across Kensington & Chelsea South PCN with 5 GP practices. Learn about the programme objectives and how to join.",
  alternates: { canonical: `${siteUrl}/pilot-programme` },
  openGraph: {
    title: "PracticeLingo Pilot Programme — Kensington & Chelsea South PCN",
    description:
      "5 GP practices improving multilingual patient communication in the K&C South Primary Care Network.",
    url: `${siteUrl}/pilot-programme`,
    images: ogImage("PracticeLingo Pilot Programme"),
  },
};

export const contactMetadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the PracticeLingo team. Book a demo, enquire about partnerships, or ask about the pilot programme for Your GP Surgery or PCN.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact PracticeLingo — Book a Demo",
    description:
      "Book a demo or get in touch about bringing PracticeLingo to Your GP Surgery or PCN.",
    url: `${siteUrl}/contact`,
    images: ogImage("Contact PracticeLingo"),
  },
};
