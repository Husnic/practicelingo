import Button from "@/components/shared/Button";
import MockPhone from "@/components/shared/MockPhone";
import KioskDisplay from "@/components/shared/KioskDisplay";
import MobileMenuDemo from "@/components/shared/MobileMenuDemo";
import QRCodeMock from "@/components/shared/QRCodeMock";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#005EB8] via-[#0070D8] to-[#2EB6CC] pt-16 pb-32 lg:pt-24 lg:pb-40">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Subtle photo overlay — NHS waiting room atmosphere */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Multilingual Patient Communication{" "}
              <span className="text-[#64D7FF]">for Modern Healthcare</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              PracticeLingo helps GP practices communicate with patients in their preferred language through multilingual waiting room displays, QR mobile continuation, audio translation, and digital healthcare guidance.
            </p>
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/contact" size="lg" variant="white">
                Book a Demo
              </Button>
              <Button href="/how-it-works" size="lg" variant="white-outline">
                How It Works
              </Button>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap items-center gap-5 justify-center lg:justify-start">
              {/* NHS compatible badge */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20">
                <Image src="/nhs.png" alt="NHS" width={32} height={18} className="h-5 w-auto" />
                <span className="text-white text-xs font-semibold">Compatible</span>
              </div>
              {["10+ Languages", "GDPR Compliant", "No App Download"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-white/80 text-sm">
                  <svg className="w-4 h-4 text-[#98D37F] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Kiosk + Phone ── */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in delay-300">
            <div className="relative">
              {/* Kiosk — main visual, desktop only */}
              <div className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl animate-float-slow" style={{ zoom: 0.7 }}>
                <KioskDisplay practiceName="Earls Court Health and Wellbeing Centre" />
              </div>

              {/* Phone — sits bottom-right of kiosk, slightly offset */}
              <div className="lg:absolute lg:-bottom-6 lg:-right-16 animate-float" style={{ animationDelay: "1s" }}>
                <div className="hidden lg:block">
                  <MockPhone label="Patient Phone">
                    <MobileMenuDemo practiceName="Earl's Court H&W" lang="Arabic" langFlag="🇸🇦" langCode="ar" />
                  </MockPhone>
                </div>
                {/* On mobile just show the phone */}
                <div className="lg:hidden">
                  <MockPhone label="Patient Phone">
                    <MobileMenuDemo practiceName="Earl's Court H&W" lang="Arabic" langFlag="🇸🇦" langCode="ar" />
                  </MockPhone>
                </div>
              </div>

              {/* QR bubble — between kiosk and phone */}
              <div className="hidden lg:flex absolute -bottom-4 right-48 flex-col items-center gap-1 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 animate-fade-in delay-600">
                <QRCodeMock size={56} value="https://practicelingo.co.uk/patient/menu" />
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#98D37F] animate-pulse" />
                  <p className="text-white/70 text-[10px]">Scan to continue</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
