import PatientLayout from "@/components/patient/PatientLayout";
import Link from "next/link";
import { Calendar, ClipboardList, Pill, Smartphone, Megaphone, BookOpen, FolderOpen, Building2 } from "lucide-react";

const menuItems = [
  { Icon: Calendar, title: "Book Appointment", sub: "See a GP, nurse or specialist", href: "/patient/book-appointment", bg: "bg-[#005EB8]" },
  { Icon: ClipboardList, title: "Register With Practice", sub: "Join as a new patient", href: "/patient/register", bg: "bg-[#2EB6CC]" },
  { Icon: Pill, title: "Repeat Prescriptions", sub: "Order regular medication", href: "/patient/repeat-prescriptions", bg: "bg-[#0B7A82]" },
  { Icon: Smartphone, title: "NHS App", sub: "Download and use the app", href: "/patient/nhs-app", bg: "bg-[#007F3B]" },
  { Icon: Megaphone, title: "Health Campaigns", sub: "Vaccinations, screenings and more", href: "/patient/health-campaigns", bg: "bg-[#F59E0B]" },
  { Icon: BookOpen, title: "Learn About Your Health", sub: "Health A-Z and guides", href: "/patient/learn-about-your-health", bg: "bg-[#98D37F]" },
];

export default function MenuPage() {
  return (
    <PatientLayout practiceName="Earl's Court H&W Centre">
      <div className="p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-dark mb-1">Menu</h1>
          <p className="text-text-secondary text-sm">How can we help you today?</p>
        </div>

        <div className="space-y-3">
          {menuItems.map(({ Icon, title, sub, href, bg }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-border hover:border-[#005EB8]/30 hover:shadow-sm transition-all"
            >
              <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-dark font-semibold text-sm">{title}</p>
                <p className="text-text-secondary text-xs">{sub}</p>
              </div>
              <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Admin section */}
        <div className="mt-6 bg-surface rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <FolderOpen className="w-5 h-5 text-[#005EB8]" />
            <p className="text-dark font-semibold text-sm">Admin &amp; Other Requests</p>
          </div>
          <div className="space-y-2">
            {["Test results", "Sick notes / Fit notes", "GP letters", "Forms & referrals"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <span>{item}</span>
              </div>
            ))}
            <p className="text-xs text-text-secondary mt-3 pt-3 border-t border-border">
              For admin requests, please speak with the receptionist or use the practice&apos;s online system.
            </p>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}
