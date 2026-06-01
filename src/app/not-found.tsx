import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-bg py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          {/* Illustration */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="w-32 h-32 bg-[#E6F1FB] rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-[#005EB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <p className="text-[#005EB8] text-sm font-semibold tracking-widest uppercase mb-3">
            Page Not Found
          </p>
          <h1 className="text-5xl font-bold text-dark mb-4">404</h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#005EB8] text-white rounded-xl px-6 py-3 font-semibold hover:bg-[#004A93] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#005EB8] text-[#005EB8] rounded-xl px-6 py-3 font-semibold hover:bg-[#005EB8] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick nav */}
          <div className="bg-white rounded-2xl p-6 border border-border">
            <p className="text-sm font-semibold text-dark mb-4">Helpful pages</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "Solutions", href: "/solutions" },
                { label: "Languages", href: "/languages" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-[#005EB8] hover:underline"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Emergency reminder */}
          <p className="mt-8 text-xs text-text-secondary">
            Medical emergency?{" "}
            <strong className="text-dark">Call 999</strong> or{" "}
            <strong className="text-dark">NHS 111</strong>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
