import PatientLayout from "@/components/patient/PatientLayout";
import { Smartphone, Globe, Phone, FileText, AlertTriangle } from "lucide-react";

const methods = [
  {
    Icon: Smartphone,
    title: "NHS App (Recommended)",
    body: "Use the NHS App to request repeat prescriptions online — available 24 hours a day.",
    dark: true,
    bg: "bg-[#007F3B]",
  },
  {
    Icon: Globe,
    title: "Practice Online System",
    body: "Log in to your practice's patient portal (e.g. SystmOnline or Emis) to request prescriptions.",
    dark: false,
    bg: "",
  },
  {
    Icon: Phone,
    title: "Call the Practice",
    body: "Call the practice during opening hours and ask the receptionist to process your repeat prescription.",
    dark: false,
    bg: "",
  },
  {
    Icon: FileText,
    title: "Paper Slip",
    body: "Tear off the right side of your last prescription. Hand the slip to the receptionist or pharmacy.",
    dark: false,
    bg: "",
  },
];

const notes = [
  "Allow 2–3 working days before collecting your prescription",
  "Do not run out — request before your last week of medication",
  "Some medications require a review before reissue — the practice will contact you",
];

export default function RepeatPrescriptionsPage() {
  return (
    <PatientLayout practiceName="Earl's Court H&W Centre">
      <div className="p-4">
        <div className="bg-[#0B7A82] rounded-3xl p-5 mb-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h1 className="text-xl font-bold mb-1">Repeat Prescriptions</h1>
          <p className="text-cyan-100 text-sm">Order your regular medication — usually takes 2 working days to process.</p>
        </div>

        <div className="space-y-3 mb-6">
          {methods.map(({ Icon, title, body, dark, bg }) => (
            <div key={title} className={`rounded-2xl p-4 ${dark ? `${bg} text-white` : "bg-white border border-border"}`}>
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${dark ? "bg-white/20" : "bg-[#0B7A82]/10"}`}>
                  <Icon className={`w-5 h-5 ${dark ? "text-white" : "text-[#0B7A82]"}`} />
                </div>
                <div>
                  <p className={`font-semibold text-sm mb-1 ${dark ? "text-white" : "text-dark"}`}>{title}</p>
                  <p className={`text-sm leading-relaxed ${dark ? "text-green-100" : "text-text-secondary"}`}>{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
            <p className="text-dark font-semibold text-sm">Important</p>
          </div>
          <ul className="space-y-1.5">
            {notes.map((note) => (
              <li key={note} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                <span className="text-[#F59E0B] mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PatientLayout>
  );
}
