import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  Calendar,
  ClipboardList,
  Pill,
  Smartphone,
  Megaphone,
  BookOpen,
  Building2,
} from "lucide-react";

const services = [
  {
    Icon: Calendar,
    title: "Book Appointments",
    description: "Understand appointment options and access routes.",
    href: "/patient/book-appointment",
    bg: "bg-[#005EB8]",
  },
  {
    Icon: ClipboardList,
    title: "Register With A Practice",
    description: "Access translated registration guidance.",
    href: "/patient/register",
    bg: "bg-[#2EB6CC]",
  },
  {
    Icon: Pill,
    title: "Repeat Prescriptions",
    description: "Learn how to order repeat medication.",
    href: "/patient/repeat-prescriptions",
    bg: "bg-[#0B7A82]",
  },
  {
    Icon: Smartphone,
    title: "NHS App Support",
    description: "Get step-by-step NHS App guidance.",
    href: "/patient/nhs-app",
    bg: "bg-[#007F3B]",
  },
  {
    Icon: Megaphone,
    title: "Health Campaigns",
    description: "Access multilingual public health campaigns.",
    href: "/patient/health-campaigns",
    bg: "bg-[#F59E0B]",
  },
  {
    Icon: BookOpen,
    title: "Learn About Your Health",
    description: "Explore multilingual Health A–Z content and preventative healthcare guidance.",
    href: "/patient/learn-about-your-health",
    bg: "bg-[#98D37F]",
  },
  {
    Icon: Building2,
    title: "Practice Information",
    description: "Access local practice updates and announcements.",
    href: "/patient/welcome",
    bg: "bg-[#EC4899]",
  },
];

export default function PatientAccessCards() {
  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Patient Access"
          title="What Patients Can Access"
          subtitle="From appointment booking to health education — all in the patient's preferred language, all from their phone."
          centered
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, description, href, bg }) => (
            <Link
              key={title}
              href={href}
              className="group bg-white rounded-3xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200"
            >
              <div
                className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-dark mb-2 group-hover:text-[#005EB8] transition-colors">
                {title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
              <div className="mt-4 flex items-center gap-1 text-[#005EB8] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View page
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
