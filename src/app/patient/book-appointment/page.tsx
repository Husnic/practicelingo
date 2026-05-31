import PatientLayout from "@/components/patient/PatientLayout";
import Link from "next/link";
import { AlertTriangle, CheckCircle, Phone, Smartphone, HelpCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    Icon: AlertTriangle,
    title: "Check if it's urgent",
    body: "If you need urgent help today, call NHS 111 or go to Urgent Treatment Centre. For emergencies call 999.",
    urgent: true,
  },
  {
    step: 2,
    Icon: Smartphone,
    title: "Book online (Recommended)",
    body: "Use the NHS App or your practice's online system to book a GP or nurse appointment at a time that suits you.",
    urgent: false,
  },
  {
    step: 3,
    Icon: Phone,
    title: "Call the practice",
    body: "You can also call the practice directly. Lines are usually busiest first thing in the morning.",
    urgent: false,
  },
  {
    step: 4,
    Icon: CheckCircle,
    title: "At your appointment",
    body: "Arrive a few minutes early. Tell the receptionist your name and appointment time. Bring any medication you take.",
    urgent: false,
  },
];

export default function BookAppointmentPage() {
  return (
    <PatientLayout practiceName="Earl's Court H&W Centre">
      <div className="p-4">
        <div className="bg-[#005EB8] rounded-3xl p-5 mb-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold mb-1">Book an Appointment</h1>
          <p className="text-blue-100 text-sm">We&apos;ll show you the easiest way to see a GP or nurse.</p>
        </div>

        <div className="space-y-4 mb-6">
          {steps.map(({ step, Icon, title, body, urgent }) => (
            <div
              key={step}
              className={`rounded-2xl p-4 border ${
                urgent ? "border-[#EF4444]/20 bg-red-50" : "border-border bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                  urgent ? "bg-[#EF4444]" : "bg-[#005EB8]"
                }`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${urgent ? "bg-[#EF4444]/10 text-[#EF4444]" : "bg-[#005EB8]/10 text-[#005EB8]"}`}>
                      Step {step}
                    </span>
                    <p className={`font-semibold text-sm ${urgent ? "text-[#EF4444]" : "text-dark"}`}>{title}</p>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <a
            href="https://www.nhs.uk/nhs-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#007F3B] text-white rounded-2xl p-4"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Open NHS App</p>
              <p className="text-green-100 text-xs">Book appointments online</p>
            </div>
            <svg className="w-4 h-4 ml-auto opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <Link
            href="/patient/nhs-app"
            className="flex items-center gap-3 bg-surface border border-border rounded-2xl p-4"
          >
            <div className="w-10 h-10 bg-[#005EB8]/10 rounded-xl flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#005EB8]" />
            </div>
            <div>
              <p className="text-dark font-semibold text-sm">How to use the NHS App</p>
              <p className="text-text-secondary text-xs">Step-by-step guide</p>
            </div>
          </Link>
        </div>
      </div>
    </PatientLayout>
  );
}
