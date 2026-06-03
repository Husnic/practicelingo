import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";
import Button from "@/components/shared/Button";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  Lock,
  Globe,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Governance | PracticeLingo",
  description:
    "PracticeLingo is committed to responsible governance, accessibility, patient safety, privacy and inclusive healthcare communication.",
};

const commitments = [
  {
    Icon: Globe,
    title: "Accessibility",
    body: "We are committed to making healthcare information easier to understand and access for everyone.",
    color: "bg-[#005EB8]",
  },
  {
    Icon: ShieldCheck,
    title: "Patient Safety",
    body: "PracticeLingo is designed to support communication and navigation, not clinical decision-making.",
    color: "bg-[#2EB6CC]",
  },
  {
    Icon: Lock,
    title: "Data Protection",
    body: "We are committed to protecting personal information and complying with UK data protection requirements.",
    color: "bg-[#0B7A82]",
  },
  {
    Icon: Heart,
    title: "Inclusion",
    body: "We believe language should never be a barrier to understanding healthcare.",
    color: "bg-[#007F3B]",
  },
  {
    Icon: Eye,
    title: "Transparency",
    body: "We clearly communicate how our platform operates and the limitations of our services.",
    color: "bg-[#8B5CF6]",
  },
];

const governanceDocs = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Accessibility Statement", href: "/legal/accessibility" },
  { label: "GDPR Statement", href: "/legal/gdpr" },
  { label: "Clinical Disclaimer", href: "/legal/clinical-disclaimer" },
  { label: "Safeguarding Statement", href: "/legal/safeguarding" },
  { label: "Translation Governance", href: "/legal/translation-disclaimer" },
  { label: "Data Security", href: "/legal/data-security" },
  { label: "Equality, Diversity & Inclusion", href: "/legal/edi" },
  { label: "Complaints & Feedback", href: "/legal/complaints" },
];

const accessibilityFeatures = [
  "mobile-first accessibility",
  "multilingual support",
  "audio playback",
  "readable typography",
  "simple navigation",
];

export default function TrustGovernancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Trust & Governance"
          title="Built On Trust, Accessibility And Transparency"
          subtitle="PracticeLingo is committed to responsible governance, accessibility, patient safety, privacy and inclusive healthcare communication."
          imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
          imageAlt="Healthcare professionals in a trusted environment"
          overlayColor="#005EB8"
        />

        {/* Our Commitments */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-2">
                Our Commitments
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map(({ Icon, title, body, color }) => (
                <div
                  key={title}
                  className="bg-surface rounded-3xl p-6 border border-border hover:shadow-md transition-all"
                >
                  <div
                    className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-dark mb-2">{title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-2">
                  Governance Framework
                </p>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  Our Governance Documents
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  PracticeLingo maintains governance documentation covering all
                  aspects of our platform operation, patient safety, and data
                  protection.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {governanceDocs.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-dark text-sm font-medium group-hover:text-primary transition-colors">
                        {label}
                      </span>
                      <svg
                        className="w-4 h-4 text-text-secondary ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Clinical Safety */}
              <div className="flex-1 space-y-6">
                <div className="bg-red-50 rounded-3xl p-6 border border-red-100">
                  <p className="text-xs font-bold text-[#EF4444] uppercase tracking-widest mb-3">
                    Clinical Safety
                  </p>
                  <p className="text-dark font-semibold mb-4">
                    PracticeLingo is a communication and patient engagement
                    platform.
                  </p>
                  <p className="text-text-secondary text-sm mb-4">It does not:</p>
                  <ul className="space-y-2">
                    {[
                      "diagnose conditions",
                      "provide treatment advice",
                      "prescribe medication",
                      "replace healthcare professionals",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#EF4444]/15 flex items-center justify-center shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                        </div>
                        <span className="text-text-secondary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-text-secondary text-xs leading-relaxed">
                    Patients should always seek professional healthcare advice
                    where appropriate.
                  </p>
                </div>

                <div className="bg-surface rounded-3xl p-6 border border-border">
                  <p className="text-xs font-bold text-[#005EB8] uppercase tracking-widest mb-3">
                    Accessibility
                  </p>
                  <p className="text-dark font-semibold mb-4">
                    PracticeLingo is designed with:
                  </p>
                  <ul className="space-y-2">
                    {accessibilityFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-text-secondary text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-text-secondary text-xs">
                    to support a wide range of users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-dark mb-4">
              View Our Governance Documents
            </h2>
            <p className="text-text-secondary text-sm mb-8">
              Full documentation available for review by practice managers,
              PCN leads, and ICB stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/legal/privacy">View Governance Documents</Button>
              <Button href="/contact" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
