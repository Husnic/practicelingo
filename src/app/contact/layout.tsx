import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the PracticeLingo team. Book a demo, enquire about partnerships, or ask about the pilot programme for Your GP Surgery or PCN.",
  openGraph: {
    title: "Contact PracticeLingo — Book a Demo",
    description:
      "Book a demo or get in touch about bringing PracticeLingo to Your GP Surgery or PCN.",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
