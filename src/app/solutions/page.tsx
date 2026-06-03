import type { Metadata } from "next";
import { solutionsMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = solutionsMetadata;

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import CTASection from "@/components/home/CTASection";
import PageHero from "@/components/shared/PageHero";
import { Globe, BarChart3, Lock, Smartphone, Settings, TrendingUp } from "lucide-react";

const gpFeatures = [
  "appointments",
  "registration",
  "repeat prescriptions",
  "NHS App support",
  "healthcare campaigns",
];

const gpBenefits = [
  "fewer repetitive queries",
  "clearer patient understanding",
  "improved patient experience",
  "improved digital adoption",
];

const pcnFeatures = [
  "standardised messaging",
  "shared healthcare campaigns",
  "reduced duplication",
  "improved health equity",
  "centralised communication",
];

const federationFeatures = [
  "shared infrastructure",
  "common patient journeys",
  "multilingual engagement",
  "reduced operational complexity",
];

const icbUseCases = [
  "vaccination campaigns",
  "cancer screening",
  "NHS App adoption",
  "prevention programmes",
  "mental health awareness",
  "community outreach initiatives",
];

const campaigns = [
  "Vaccinations",
  "Screening programmes",
  "Diabetes awareness",
  "Blood pressure checks",
  "Mental health campaigns",
  "Smoking cessation",
];

const healthTopics = [
  "Health A-Z information",
  "Lifestyle guidance",
  "NHS health advice",
  "Preventative care information",
  "Campaign awareness content",
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Solutions"
          title="Designed For Modern Healthcare Environments"
          subtitle="From individual GP practices to Primary Care Networks and Integrated Care Systems, PracticeLingo helps organisations communicate more effectively with diverse patient populations."
          imageUrl="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1600&q=80"
          imageAlt="Healthcare professionals in a modern NHS practice"
          overlayColor="#0B7A82"
        />

        {/* GP Practices */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <div className="flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <SectionHeader
                  eyebrow="GP Practices"
                  title="Reduce Reception Workload And Improve Patient Understanding"
                  subtitle="PracticeLingo helps practices reduce repetitive conversations around:"
                />
                <ul className="mt-8 space-y-3">
                  {gpFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-dark text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm font-semibold text-text-secondary uppercase tracking-wide">Benefits:</p>
                <ul className="mt-3 space-y-2">
                  {gpBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-text-secondary text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact">Book Demo for Your Practice</Button>
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 bg-surface rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PL</span>
                  </div>
                  <div>
                    <p className="text-dark font-semibold text-sm">GP Practice Dashboard</p>
                    <p className="text-text-secondary text-xs">Earl&apos;s Court H&amp;W Centre</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Languages Active", val: "6", sub: "English, Arabic, Mandarin..." },
                    { label: "QR Scans Today", val: "47", sub: "↑ 12% vs last week" },
                    { label: "Reception Queries", val: "↓ 31%", sub: "vs pre-deployment" },
                    { label: "NHS App Signups", val: "↑ 24%", sub: "this month" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-2xl p-4 border border-border">
                      <p className="text-xs text-text-secondary mb-1">{item.label}</p>
                      <p className="text-xl font-bold text-dark">{item.val}</p>
                      <p className="text-xs text-text-secondary">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PCN */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-start gap-16">
              <div className="flex-1">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <SectionHeader
                  eyebrow="Primary Care Networks"
                  title="Deliver Consistent Communication Across Every Practice"
                  subtitle="PracticeLingo provides a scalable framework for multilingual patient communication across multiple practices."
                />
                <ul className="mt-8 space-y-3">
                  {pcnFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-dark text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact">Get in Touch</Button>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { Icon: Globe, bg: "bg-[#005EB8]", label: "Shared translation libraries", sub: "One content set, all practices" },
                  { Icon: BarChart3, bg: "bg-[#2EB6CC]", label: "Central campaign management", sub: "Push campaigns across all sites" },
                  { Icon: Lock, bg: "bg-[#0B7A82]", label: "Role-based access", sub: "Admin per practice or PCN-wide" },
                  { Icon: Smartphone, bg: "bg-[#007F3B]", label: "Consistent patient experience", sub: "Same UX across every surgery" },
                  { Icon: Settings, bg: "bg-[#8B5CF6]", label: "Simple deployment", sub: "Minimal IT involvement required" },
                  { Icon: TrendingUp, bg: "bg-[#F59E0B]", label: "Aggregated insights", sub: "Usage analytics across network" },
                ].map(({ Icon, bg, label, sub }) => (
                  <div key={label} className="bg-white rounded-2xl p-4 border border-border flex items-start gap-3">
                    <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-dark text-sm font-medium">{label}</p>
                      <p className="text-text-secondary text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Primary Care Federations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <div className="flex-1">
                <div className="w-12 h-12 bg-[#0B7A82]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0B7A82]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <SectionHeader
                  eyebrow="Primary Care Federations"
                  title="Support Multiple Practices Through A Single Communication Platform"
                  subtitle="Federations can use PracticeLingo to deliver consistent patient communication across member practices while maintaining local flexibility."
                />
                <ul className="mt-8 space-y-3">
                  {federationFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0B7A82]/10 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#0B7A82]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-dark text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact">Get in Touch</Button>
                </div>
              </div>
              <div className="flex-1 bg-surface rounded-3xl p-8 flex flex-col justify-center gap-4">
                {[
                  { label: "Shared infrastructure", sub: "One platform across all member practices" },
                  { label: "Common patient journeys", sub: "Consistent multilingual experience everywhere" },
                  { label: "Multilingual engagement", sub: "All 6 languages available federation-wide" },
                  { label: "Reduced operational complexity", sub: "Centralised management, local flexibility" },
                ].map(({ label, sub }) => (
                  <div key={label} className="bg-white rounded-2xl p-4 border border-border">
                    <p className="text-dark text-sm font-semibold">{label}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Care Boards */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-start gap-16">
              <div className="flex-1">
                <div className="w-12 h-12 bg-[#007F3B]/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#007F3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <SectionHeader
                  eyebrow="Integrated Care Boards"
                  title="Support Population Health Through Better Communication"
                  subtitle="PracticeLingo supports healthcare organisations seeking to reduce health inequalities and improve access to services."
                />
                <p className="mt-6 text-sm font-semibold text-text-secondary uppercase tracking-wide">Potential use cases:</p>
                <ul className="mt-3 space-y-2">
                  {icbUseCases.map((u) => (
                    <li key={u} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#007F3B] shrink-0" />
                      <span className="text-text-secondary text-sm">{u}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact">Get in Touch</Button>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-3xl p-8 border border-border">
                <p className="text-xs font-bold text-[#007F3B] uppercase tracking-wider mb-4">Population Health Impact</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "1 in 10", label: "GP patients face language barriers" },
                    { val: "16M+", label: "NHS appointments missed in 2025" },
                    { val: "£216M", label: "annual cost of missed appointments" },
                    { val: "6+", label: "languages supported from day one" },
                  ].map((s) => (
                    <div key={s.label} className="bg-surface rounded-2xl p-4 border border-border">
                      <p className="text-xl font-bold text-[#007F3B]">{s.val}</p>
                      <p className="text-text-secondary text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Campaigns + Education */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Campaigns */}
              <div>
                <div className="w-12 h-12 bg-warning/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <SectionHeader
                  eyebrow="Health Campaigns"
                  title="Multilingual Campaign Delivery"
                  subtitle="Improve engagement with healthcare campaigns through multilingual patient education and mobile accessibility."
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {campaigns.map((c) => (
                    <span key={c} className="bg-warning/10 text-warning text-sm font-medium px-3 py-1.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Health Education */}
              <div>
                <div className="w-12 h-12 bg-nhs-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-nhs-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <SectionHeader
                  eyebrow="Health Education"
                  title="Multilingual Preventative Healthcare Education"
                  subtitle="PracticeLingo extends beyond communication and supports multilingual patient education through Health A–Z resources and preventative healthcare content. Patients can access trusted information in their preferred language while remaining connected to NHS services."
                />
                <ul className="mt-6 space-y-2">
                  {healthTopics.map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-nhs-green" />
                      <span className="text-text-secondary text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
