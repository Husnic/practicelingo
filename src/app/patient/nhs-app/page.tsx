import PatientLayout from "@/components/patient/PatientLayout";
import {
  Calendar,
  Pill,
  FlaskConical,
  FileText,
  Syringe,
  Phone,
  Download,
  UserCheck,
  ScanFace,
  Link2,
} from "lucide-react";

const features = [
  { Icon: Calendar, text: "Book and manage GP appointments" },
  { Icon: Pill, text: "Order repeat prescriptions" },
  { Icon: FlaskConical, text: "View test results" },
  { Icon: FileText, text: "Access your medical record" },
  { Icon: Syringe, text: "Check vaccination history" },
  { Icon: Phone, text: "Get health advice from NHS 111" },
];

const setupSteps = [
  {
    step: 1,
    Icon: Download,
    title: "Download the app",
    body: "Search 'NHS App' in the App Store (iPhone) or Google Play (Android). It is free.",
  },
  {
    step: 2,
    Icon: UserCheck,
    title: "Create an account",
    body: "Enter your name, date of birth, and NHS number (optional). Use a valid email address.",
  },
  {
    step: 3,
    Icon: ScanFace,
    title: "Verify your identity",
    body: "Take a photo of your ID (passport or driving licence) or use face scan. This is secure.",
  },
  {
    step: 4,
    Icon: Link2,
    title: "Link to your GP surgery",
    body: "The app will automatically link to your registered GP practice.",
  },
  {
    step: 5,
    Icon: Calendar,
    title: "Start using the app",
    body: "You can now book appointments, order prescriptions, and view your records.",
  },
];

export default function NhsAppPage() {
  return (
    <PatientLayout practiceName="Your GP Surgery Centre">
      <div className="p-4">
        <div className="bg-[#007F3B] rounded-3xl p-5 mb-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold mb-1">NHS App</h1>
          <p className="text-green-100 text-sm">
            Manage your health from your phone — free and secure.
          </p>
        </div>

        <h2 className="font-bold text-dark text-sm mb-3">
          What the NHS App lets you do
        </h2>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map(({ Icon, text }) => (
            <div
              key={text}
              className="bg-white border border-border rounded-2xl p-3 flex items-start gap-2"
            >
              <Icon className="w-4 h-4 text-[#007F3B] shrink-0 mt-0.5" />
              <p className="text-dark text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-dark text-sm mb-3">How to set it up</h2>
        <div className="space-y-3 mb-6">
          {setupSteps.map(({ step, Icon, title, body }) => (
            <div
              key={step}
              className="bg-white rounded-2xl p-4 border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#007F3B] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-[#007F3B] bg-[#007F3B]/10 px-2 py-0.5 rounded-full">
                      Step {step}
                    </span>
                    <p className="font-semibold text-dark text-sm">{title}</p>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://www.nhs.uk/nhs-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#007F3B] text-white rounded-2xl py-3.5 font-semibold text-sm"
        >
          <Download className="w-4 h-4" />
          Download NHS App
        </a>
      </div>
    </PatientLayout>
  );
}
