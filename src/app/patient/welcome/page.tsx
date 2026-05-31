import PatientLayout from "@/components/patient/PatientLayout";
import Link from "next/link";
import QRCodeMock from "@/components/shared/QRCodeMock";
import { Calendar, Pill, Smartphone, ClipboardList, Megaphone, BookOpen } from "lucide-react";

const actions = [
  { Icon: Calendar, title: "Book Appointment", sub: "See a GP or nurse", href: "/patient/book-appointment", bg: "bg-[#005EB8]" },
  { Icon: Pill, title: "Repeat Prescriptions", sub: "Order your medication", href: "/patient/repeat-prescriptions", bg: "bg-[#0B7A82]" },
  { Icon: Smartphone, title: "NHS App Help", sub: "Download & use the NHS App", href: "/patient/nhs-app", bg: "bg-[#007F3B]" },
  { Icon: ClipboardList, title: "Register", sub: "Join this practice", href: "/patient/register", bg: "bg-[#2EB6CC]" },
  { Icon: Megaphone, title: "Health Campaigns", sub: "Important health information", href: "/patient/health-campaigns", bg: "bg-[#F59E0B]" },
  { Icon: BookOpen, title: "Learn About Your Health", sub: "Health A-Z guides", href: "/patient/learn-about-your-health", bg: "bg-[#98D37F]" },
];

export default function WelcomePage() {
  return (
    <PatientLayout practiceName="Earl's Court H&W Centre">
      <div className="p-4">
        {/* Welcome banner */}
        <div className="bg-gradient-to-br from-[#005EB8] to-[#2EB6CC] rounded-3xl p-6 mb-5 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome</h1>
          <p className="text-blue-100 text-sm leading-relaxed">
            Welcome to Earl&apos;s Court Health &amp; Wellbeing Centre. PracticeLingo is here to help you in your preferred language.
          </p>
        </div>

        <h2 className="text-dark font-bold mb-3">What do you need today?</h2>
        <div className="space-y-3 mb-6">
          {actions.map(({ Icon, title, sub, href, bg }) => (
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

        <div className="bg-surface rounded-2xl p-4 flex items-center gap-4">
          <QRCodeMock size={64} />
          <div>
            <p className="text-dark font-semibold text-sm">Share this page</p>
            <p className="text-text-secondary text-xs">Scan to open on another device</p>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}
