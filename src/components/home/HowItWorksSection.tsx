import SectionHeader from "@/components/shared/SectionHeader";
import QRCodeMock from "@/components/shared/QRCodeMock";
import KioskDisplay from "@/components/shared/KioskDisplay";
import MockPhone from "@/components/shared/MockPhone";
import MobileMenuDemo from "@/components/shared/MobileMenuDemo";

const steps = [
  {
    number: "01",
    title: "Patient approaches display",
    description: "Patient walks up to the multilingual touchscreen display in the waiting room.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Select preferred language",
    description: "Patient selects from 10+ available languages with a single touch.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Scan QR code",
    description: "A QR code appears — patient scans it with their smartphone camera.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Phone opens multilingual page",
    description: "Translated healthcare guidance opens directly in their browser — no app download needed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Patient continues independently",
    description: "Patients navigate appointments, prescriptions, NHS App guidance and more — without receptionist help.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Five Steps to Multilingual Care"
          subtitle="A simple, elegant workflow that requires no training for patients and minimal setup for practices."
          centered
        />

        <div className="mt-16 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border mx-24" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div
                  className={`relative z-10 w-24 h-24 rounded-3xl flex flex-col items-center justify-center mb-4 shadow-md ${
                    i === 2 ? "bg-primary text-white" : "bg-surface text-primary"
                  }`}
                >
                  <div className={i === 2 ? "text-white" : "text-primary"}>{step.icon}</div>
                  <span
                    className={`text-xs font-bold mt-1 ${
                      i === 2 ? "text-blue-200" : "text-text-secondary"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-dark mb-2 text-sm lg:text-base">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>

                {/* QR illustration for step 3 */}
                {i === 2 && (
                  <div className="mt-3">
                    <QRCodeMock size={48} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Live demo: Display → QR → Phone */}
        <div className="mt-16 bg-[#1A1A1A] rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
          />
          <div className="relative p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">See It In Action</h3>
              <p className="text-gray-400 text-sm">Waiting room display → patient scans QR → phone opens in their language</p>
            </div>

            {/* Scrollable demo row */}
            <div className="overflow-x-auto pb-4">
              <div className="flex items-center gap-8 min-w-max mx-auto w-fit">

                {/* Kiosk — monitor frame */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Waiting Room Display</span>
                  {/* Monitor shell */}
                  <div className="bg-[#111] rounded-2xl p-2.5 shadow-2xl">
                    <div className="flex items-center gap-1.5 mb-2 px-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    {/* Screen — zoom scales layout correctly */}
                    <div className="rounded-xl overflow-hidden" style={{ zoom: 0.62 }}>
                      <KioskDisplay practiceName="Earls Court Health and Wellbeing Centre" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-3 bg-[#222] rounded-b-lg" />
                    <div className="w-24 h-1.5 bg-[#2a2a2a] rounded-full" />
                  </div>
                </div>

                {/* Connector + QR */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-0.5 bg-gray-700" />
                    <div className="flex flex-col items-center gap-2">
                      <QRCodeMock
                        size={88}
                        value="https://practicelingo.co.uk/patient/menu"
                      />
                      <p className="text-gray-400 text-xs">Patient scans</p>
                    </div>
                    <div className="w-10 h-0.5 bg-gray-700" />
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                    Opens phone
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Patient&apos;s Phone</span>
                  <MockPhone>
                    <MobileMenuDemo lang="Arabic" langFlag="🇸🇦" />
                  </MockPhone>
                </div>

              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["/welcome", "/menu", "/book-appointment", "/register", "/repeat-prescriptions", "/nhs-app", "/health-campaigns", "/learn-about-your-health"].map((url) => (
                <span key={url} className="bg-white/10 text-gray-300 text-xs font-mono px-3 py-1 rounded-lg border border-white/10">
                  {url}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
