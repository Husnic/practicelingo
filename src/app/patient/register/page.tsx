import PatientLayout from "@/components/patient/PatientLayout";
import { CheckCircle2 } from "lucide-react";

const steps = [
  { step: 1, title: "Check you can register", body: "Anyone living in the UK can register with a GP practice near their home address. You do not need proof of immigration status, ID, or NHS number to register." },
  { step: 2, title: "Complete the registration form", body: "Ask at reception for a registration form. You may be able to complete it online. Fill in your name, date of birth, address, and a contact number." },
  { step: 3, title: "Provide proof of address (if possible)", body: "A utility bill, bank statement, or letter with your name and address helps. This is optional — you cannot be turned away for not having ID." },
  { step: 4, title: "Wait for confirmation", body: "The practice will contact you once your registration is processed. This usually takes a few days." },
];

const rights = [
  "You cannot be refused registration due to language barriers",
  "You are entitled to an interpreter",
  "You can register without ID or address proof in most cases",
  "Your information is kept confidential",
];

export default function RegisterPage() {
  return (
    <PatientLayout practiceName="Earl's Court H&W Centre">
      <div className="p-4">
        <div className="bg-[#2EB6CC] rounded-3xl p-5 mb-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold mb-1">Register With This Practice</h1>
          <p className="text-cyan-100 text-sm">Everyone has the right to register with a GP in the UK — regardless of immigration status.</p>
        </div>

        <div className="space-y-4 mb-6">
          {steps.map((s) => (
            <div key={s.step} className="bg-white rounded-2xl p-4 border border-border">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2EB6CC] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm mb-1">{s.title}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface rounded-2xl p-4">
          <p className="text-dark font-semibold text-sm mb-3">Your rights</p>
          <ul className="space-y-2">
            {rights.map((r) => (
              <li key={r} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <p className="text-text-secondary text-xs leading-relaxed">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PatientLayout>
  );
}
