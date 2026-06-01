import SectionHeader from "@/components/shared/SectionHeader";
import QRCodeMock from "@/components/shared/QRCodeMock";
import KioskDisplay from "@/components/shared/KioskDisplay";
import MockPhone from "@/components/shared/MockPhone";
import MobileMenuDemo from "@/components/shared/MobileMenuDemo";
import Link from "next/link";
import Button from "../shared/Button";

const steps = [
  {
    number: "01",
    title: "Patient approaches display",
    description:
      "Patient walks up to the multilingual touchscreen display in the waiting room.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Select preferred language",
    description:
      "Patient selects from 6 available languages with a single touch.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Scan QR code",
    description:
      "A QR code appears — patient scans it with their smartphone camera.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Phone opens multilingual page",
    description:
      "Translated healthcare guidance opens directly in their browser — no app download needed.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Patient continues independently",
    description:
      "Patients navigate appointments, prescriptions, NHS App guidance and more — without receptionist help.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
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
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div
                  className={`relative z-10 w-24 h-24 rounded-3xl flex flex-col items-center justify-center mb-4 shadow-md ${
                    i === 2
                      ? "bg-primary text-white"
                      : "bg-surface text-primary"
                  }`}
                >
                  <div className={i === 2 ? "text-white" : "text-primary"}>
                    {step.icon}
                  </div>
                  <span
                    className={`text-xs font-bold mt-1 ${
                      i === 2 ? "text-blue-200" : "text-text-secondary"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-dark mb-2 text-sm lg:text-base">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>

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

        <Link
          className="block flex justify-center mt-8 mx-auto"
          href={"/how-it-works"}
        >
          <Button className="mx-auto">See more</Button>
        </Link>
      </div>
    </section>
  );
}
