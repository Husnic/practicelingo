import PatientLayout from "@/components/patient/PatientLayout";
import {
  Syringe,
  Scan,
  Droplets,
  Heart,
  Brain,
  CigaretteOff,
} from "lucide-react";

const campaigns = [
  {
    Icon: Syringe,
    title: "Vaccinations",
    desc: "Check your vaccination status and book available vaccines.",
    bg: "bg-[#005EB8]",
  },
  {
    Icon: Scan,
    title: "Cancer Screening",
    desc: "Bowel, breast, and cervical cancer screening information.",
    bg: "bg-[#EF4444]",
  },
  {
    Icon: Droplets,
    title: "Diabetes Awareness",
    desc: "Know the signs of diabetes and how to reduce your risk.",
    bg: "bg-[#F59E0B]",
  },
  {
    Icon: Heart,
    title: "Blood Pressure",
    desc: "Know your numbers and reduce your risk of stroke.",
    bg: "bg-[#2EB6CC]",
  },
  {
    Icon: Brain,
    title: "Mental Health",
    desc: "Support and resources for your mental wellbeing.",
    bg: "bg-[#8B5CF6]",
  },
  {
    Icon: CigaretteOff,
    title: "Smoking Cessation",
    desc: "Free support to help you quit smoking.",
    bg: "bg-[#0B7A82]",
  },
];

export default function HealthCampaignsPage() {
  return (
    <PatientLayout practiceName="Your GP Surgery Centre">
      <div className="p-4">
        <div className="bg-[#F59E0B] rounded-3xl p-5 mb-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold mb-1">Health Campaigns</h1>
          <p className="text-amber-100 text-sm">
            Stay informed about important health programmes available to you.
          </p>
        </div>

        <div className="space-y-3">
          {campaigns.map(({ Icon, title, desc, bg }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-border p-4 flex items-start gap-4"
            >
              <div
                className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center shrink-0`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-dark text-sm mb-1">{title}</p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-surface rounded-2xl p-4 text-center">
          <p className="text-text-secondary text-xs">
            For more health information, visit{" "}
            <a
              href="https://www.nhs.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005EB8] font-medium"
            >
              nhs.uk
            </a>
          </p>
        </div>
      </div>
    </PatientLayout>
  );
}
