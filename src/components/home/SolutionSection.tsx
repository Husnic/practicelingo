import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import { Globe, QrCode, Volume2, Navigation } from "lucide-react";

const capabilities = [
  {
    Icon: Globe,
    title: "Select Preferred Language",
    description: "Patients choose from 10+ supported languages on the waiting room display.",
  },
  {
    Icon: QrCode,
    title: "QR Mobile Continuation",
    description: "Scan a QR code — translated content opens directly on their phone.",
  },
  {
    Icon: Volume2,
    title: "Audio Guidance",
    description: "Listen to healthcare information read aloud in their language.",
  },
  {
    Icon: Navigation,
    title: "Independent Navigation",
    description: "Access appointments, prescriptions, NHS App help without staff dependency.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left text */}
          <div className="flex-1">
            <SectionHeader
              eyebrow="The Solution"
              title="A Simpler Way To Support Every Patient"
              subtitle="PracticeLingo is a multilingual communication platform designed specifically for healthcare environments — reducing pressure on practice staff while empowering patients."
            />
            <div className="mt-8 space-y-4">
              {capabilities.map(({ Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F1FB] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#005EB8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">{title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <Button href="/how-it-works">See How It Works</Button>
              <Button href="/contact" variant="outline">Book Demo</Button>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm lg:max-w-none">
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#005EB8] rounded-2xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-dark text-sm">Multilingual Support</span>
              </div>
              <p className="text-4xl font-bold text-[#005EB8]">10+</p>
              <p className="text-text-secondary text-sm mt-1">Languages supported at launch, more coming</p>
            </div>
            <div className="bg-[#005EB8] rounded-3xl p-6">
              <svg className="w-6 h-6 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
              <p className="text-white font-semibold text-sm">Reception pressure</p>
              <p className="text-blue-200 text-xs mt-1">Fewer repeated explanations</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm">
              <svg className="w-6 h-6 text-[#007F3B] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className="text-dark font-semibold text-sm">NHS App adoption</p>
              <p className="text-text-secondary text-xs mt-1">Guided digital onboarding</p>
            </div>
            <div className="bg-[#E6F1FB] rounded-3xl p-6 col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span className="text-sm font-medium text-dark">GDPR Compliant</span>
              </div>
              <p className="text-dark font-semibold">Secure &amp; NHS-compatible</p>
              <p className="text-text-secondary text-sm mt-1">Built to meet UK data protection and healthcare standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
