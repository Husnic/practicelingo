import Image from "next/image";
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
    <section className="py-20 lg:py-28 bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left text */}
          <div className="flex-1 order-2 lg:order-1">
            <SectionHeader
              eyebrow="The Solution"
              title="A Simpler Way To Support Every Patient"
              subtitle="PracticeLingo is a multilingual communication platform designed specifically for healthcare environments — reducing pressure on practice staff while empowering patients."
            />
            <div className="mt-8 space-y-4">
              {capabilities.map(({ Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-[#E6F1FB] flex items-center justify-center shrink-0 group-hover:bg-[#005EB8] transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#005EB8] group-hover:text-white transition-colors duration-200" />
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

          {/* Right: image + stat cards */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80"
                  alt="GP doctor consulting with patient using digital tools"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005EB8]/30 to-transparent" />
              </div>

              {/* Floating stat — top right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-border animate-float">
                <p className="text-3xl font-bold text-[#005EB8]">10+</p>
                <p className="text-text-secondary text-xs mt-0.5">Languages</p>
              </div>

              {/* Floating stat — bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-[#005EB8] rounded-2xl px-5 py-4 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
                <p className="text-3xl font-bold text-white">↓ 31%</p>
                <p className="text-blue-200 text-xs mt-0.5">Reception queries</p>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 right-8 bg-[#007F3B] rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: "0.75s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#98D37F] animate-pulse" />
                  <p className="text-white text-xs font-semibold">NHS Compatible</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
