import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import CTASection from "@/components/home/CTASection";
import { Users, Globe, Smartphone, MessageCircle, Accessibility } from "lucide-react";

const practices = [
  { name: "Earl's Court Health & Wellbeing Centre", area: "SW5", status: "Active" },
  { name: "Brompton Medical Centre", area: "SW3", status: "Active" },
  { name: "Kings Road Medical Services", area: "SW3", status: "Active" },
  { name: "Chelsea Medical Services", area: "SW3", status: "Active" },
  { name: "Kynance Practice", area: "SW7", status: "Active" },
];

const objectives = [
  { Icon: Users, bg: "bg-[#005EB8]", text: "Reduce reception workload through self-service multilingual guidance" },
  { Icon: Globe, bg: "bg-[#2EB6CC]", text: "Improve multilingual communication across diverse patient communities" },
  { Icon: Smartphone, bg: "bg-[#007F3B]", text: "Improve NHS App uptake through guided multilingual onboarding" },
  { Icon: MessageCircle, bg: "bg-[#0B7A82]", text: "Increase patient engagement and understanding of healthcare services" },
  { Icon: Accessibility, bg: "bg-[#8B5CF6]", text: "Support digital access and health inequality reduction goals" },
];

const timeline = [
  { phase: "Phase 1", label: "Pilot Launch", desc: "5 practices across K&C South PCN", status: "active" },
  { phase: "Phase 2", label: "Evaluation", desc: "Measure impact, gather feedback", status: "upcoming" },
  { phase: "Phase 3", label: "Expansion", desc: "Roll out to additional PCNs", status: "upcoming" },
];

export default function PilotProgrammePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-light animate-pulse" />
              Pilot Now Active
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pilot Programme Across Kensington &amp; Chelsea South PCN
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              PracticeLingo is being introduced across selected GP practices to improve multilingual communication and patient access.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="white">
                Join Pilot Programme
              </Button>
              <Button href="/contact" size="lg" variant="white-outline">
                Book Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Practices */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <div className="flex-1">
                <SectionHeader
                  eyebrow="Pilot Practices"
                  title="Five Practices Across Kensington & Chelsea"
                  subtitle="Rolling out across the Kensington & Chelsea South PCN — covering some of London's most diverse patient communities."
                />
                <div className="mt-8 space-y-3">
                  {practices.map((p) => (
                    <div key={p.name} className="flex items-center gap-4 bg-surface rounded-2xl p-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-dark font-semibold text-sm">{p.name}</p>
                        <p className="text-text-secondary text-xs">London {p.area}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success bg-success/10 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectives */}
              <div className="flex-1 bg-surface rounded-3xl p-8">
                <h3 className="font-bold text-dark text-lg mb-6">Pilot Objectives</h3>
                <ul className="space-y-4">
                  {objectives.map(({ Icon, bg, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className={`w-8 h-8 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-dark text-sm leading-relaxed pt-1">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Rollout Plan"
              title="Phased Deployment"
              centered
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {timeline.map((t) => (
                <div
                  key={t.phase}
                  className={`flex-1 rounded-3xl p-6 ${
                    t.status === "active"
                      ? "bg-primary text-white"
                      : "bg-white border border-border"
                  }`}
                >
                  <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${t.status === "active" ? "text-blue-200" : "text-text-secondary"}`}>
                    {t.phase}
                  </p>
                  <h4 className={`font-bold text-lg mb-1 ${t.status === "active" ? "text-white" : "text-dark"}`}>
                    {t.label}
                  </h4>
                  <p className={`text-sm ${t.status === "active" ? "text-blue-100" : "text-text-secondary"}`}>
                    {t.desc}
                  </p>
                  {t.status === "active" && (
                    <div className="mt-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-light animate-pulse" />
                      <span className="text-sm text-green-light font-medium">In Progress</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeader
              eyebrow="Get Involved"
              title="Interested in Joining the Pilot?"
              subtitle="Whether you represent a GP practice, PCN, or healthcare organisation — we'd love to hear from you."
              centered
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Apply for Pilot Programme</Button>
              <Button href="/contact" size="lg" variant="outline">Contact the Team</Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
