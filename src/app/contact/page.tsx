"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import { useState, useRef } from "react";
import { Mail, Building2, MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      organisation: (form.elements.namedItem("organisation") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.message || "Failed to send");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <PageHero
          eyebrow="Get in Touch"
          title="Speak With The PracticeLingo Team"
          subtitle="Interested in partnerships, pilot programmes, or demonstrations? Get in touch."
          imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
          imageAlt="Healthcare professionals in a meeting"
          overlayColor="#005EB8"
        />

        {/* Contact form */}
        <section className="py-20 bg-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Info */}
              <div className="flex-1 max-w-sm">
                <SectionHeader
                  eyebrow="Contact"
                  title="Let's Talk"
                  subtitle="Fill in the form and the PracticeLingo team will be in touch within two working days."
                />
                <div className="mt-8 space-y-4">
                  {[
                    { Icon: Mail, bg: "bg-[#005EB8]", label: "Email", val: "hello@practicelingo.co.uk" },
                    { Icon: Building2, bg: "bg-[#2EB6CC]", label: "Enquiries", val: "info@practicelingo.co.uk" },
                    { Icon: MapPin, bg: "bg-[#007F3B]", label: "Location", val: "London, United Kingdom" },
                  ].map(({ Icon, bg, label, val }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary font-medium">{label}</p>
                        <p className="text-dark text-sm">{val}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-surface rounded-2xl p-4">
                  <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-2">Emergency</p>
                  <p className="text-dark text-sm font-medium">PracticeLingo is not an emergency service.</p>
                  <p className="text-text-secondary text-sm mt-1">For urgent medical help: call <strong>999</strong> or <strong>NHS 111</strong></p>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1">
                {submitted ? (
                  <div className="bg-white rounded-3xl p-8 border border-border text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Message Sent</h3>
                    <p className="text-text-secondary">The PracticeLingo team will be in touch within two working days.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-primary text-sm font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-border space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">
                        Organisation <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        required
                        name="organisation"
                        type="text"
                        placeholder="GP Practice / PCN / Organisation name"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">
                        Email <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="your@practice.nhs.uk"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+44 ..."
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">
                        Message <span className="text-[#EF4444]">*</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell us about your practice, your patient community, and how PracticeLingo might help..."
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-[#005EB8] focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    {error && (
                      <div className="bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl px-4 py-3">
                        <p className="text-[#EF4444] text-sm">{error}</p>
                      </div>
                    )}
                    <p className="text-xs text-text-secondary">
                      By submitting this form you agree to our{" "}
                      <a href="/legal/privacy" className="text-[#005EB8] hover:underline">Privacy Policy</a>{" "}
                      and{" "}
                      <a href="/legal/gdpr" className="text-[#005EB8] hover:underline">GDPR Statement</a>.
                    </p>
                    <Button type="submit" size="lg" className="w-full justify-center" disabled={loading}>
                      {loading ? "Sending..." : "Request Demo"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
