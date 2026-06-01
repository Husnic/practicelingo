import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import CTASection from "@/components/home/CTASection";
import PageHero from "@/components/shared/PageHero";
import { Globe, BarChart3, Lock, Smartphone, Settings, TrendingUp } from "lucide-react";

const gpFeatures = [
  "Multilingual waiting room support",
  "QR mobile continuation",
  "NHS App guidance",
  "Translated patient information",
  "Multilingual health education",
];

const pcnFeatures = [
  "Central campaign management",
  "Shared translation libraries",
  "Multi-practice deployment",
  "Standardised multilingual workflows",
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
          subtitle="From individual GP practices to full PCN deployments — PracticeLingo scales to your needs."
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
                  title="Multilingual Communication for Your Surgery"
                  subtitle="Help practices improve multilingual communication while reducing operational pressure on reception teams."
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
                  title="Deploy Across Multiple Practices at Scale"
                  subtitle="Deploy multilingual communication across multiple practices through a scalable platform structure with central management."
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
                  subtitle="PracticeLingo helps practices deliver accessible preventative healthcare education in multiple languages."
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
