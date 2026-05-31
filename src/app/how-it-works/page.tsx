import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTASection from "@/components/home/CTASection";
import SectionHeader from "@/components/shared/SectionHeader";
import MockPhone from "@/components/shared/MockPhone";
import QRCodeMock from "@/components/shared/QRCodeMock";
import { Monitor, Globe, QrCode, FileText, CheckCircle2 } from "lucide-react";
import MobileMenuDemo from "@/components/shared/MobileMenuDemo";

const journeySteps = [
  { title: "Waiting Room Display", description: "Patients interact with a multilingual touchscreen display positioned in the waiting room.", Icon: Monitor, bg: "bg-[#005EB8]" },
  { title: "Language Selection", description: "Patients choose their preferred language instantly from 10+ available options.", Icon: Globe, bg: "bg-[#2EB6CC]" },
  { title: "QR Continuation", description: "Patients scan a QR code to continue their journey on their own smartphone.", Icon: QrCode, bg: "bg-[#0B7A82]" },
  { title: "Mobile Guidance", description: "Translated information opens automatically in their phone browser — no app download needed.", Icon: FileText, bg: "bg-[#007F3B]" },
  { title: "Independent Navigation", description: "Patients access all healthcare guidance without needing to rely on staff assistance.", Icon: CheckCircle2, bg: "bg-[#98D37F]" },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Designed Around Real Patient Journeys
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              PracticeLingo combines waiting room displays, QR technology, multilingual translation, and mobile continuation into one simple workflow.
            </p>
          </div>
        </section>

        {/* Patient journey */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Patient Journey"
              title="Five Steps to Better Communication"
              centered
            />
            <div className="mt-12 space-y-6 max-w-3xl mx-auto">
              {journeySteps.map(({ title, description, Icon, bg }, i) => (
                <div key={title} className="flex items-start gap-6 bg-surface rounded-3xl p-6">
                  <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-[#005EB8] bg-[#005EB8]/10 px-2 py-0.5 rounded-full">
                        Step {i + 1}
                      </span>
                      <h3 className="font-bold text-dark">{title}</h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phone demo + QR */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <SectionHeader
                  eyebrow="Mobile Experience"
                  title="The Patient's Phone Experience"
                  subtitle="Once the QR is scanned, the patient sees translated, accessible guidance — with audio playback, large text, and clear navigation."
                />
                <div className="mt-8 space-y-3">
                  {["Mobile-first, touch-friendly layout", "Audio guidance in selected language", "Large accessible text", "No app download required", "Language persists across all pages"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-dark text-sm font-medium">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-end gap-8">
                <div className="flex flex-col items-center gap-4">
                  <QRCodeMock size={96} label="QR on display" />
                  <div className="flex items-center gap-1 text-text-secondary text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Scan
                  </div>
                </div>

                <MockPhone label="Patient Phone">
                  <MobileMenuDemo
                    practiceName="Brompton Medical Centre"
                    lang="Português"
                    langFlag="🇵🇹"
                  />
                </MockPhone>
              </div>
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
