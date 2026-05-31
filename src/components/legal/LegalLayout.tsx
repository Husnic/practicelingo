import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ReactNode } from "react";

type LegalLayoutProps = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function LegalLayout({ title, lastUpdated = "May 2025", children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg">
        <div className="bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span>Legal</span>
              <span>/</span>
              <span className="text-dark">{title}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark">{title}</h1>
            <p className="text-text-secondary text-sm mt-2">Last updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-border prose-custom">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
