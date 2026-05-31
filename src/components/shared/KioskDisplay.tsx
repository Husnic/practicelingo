import Image from "next/image";
import { Calendar, ClipboardList, Pill, Smartphone, Megaphone, BookOpen } from "lucide-react";

const cards = [
  {
    num: 1,
    Icon: ClipboardList,
    title: "Register with this Practice",
    desc: "Register as a patient at this GP practice.",
    accent: "#005EB8",
    bg: "#EFF6FF",
  },
  {
    num: 2,
    Icon: Calendar,
    title: "Book or Manage an Appointment",
    desc: "Book, change or cancel your appointment.",
    accent: "#007F3B",
    bg: "#F0FDF4",
  },
  {
    num: 3,
    Icon: Pill,
    title: "Order Repeat Prescriptions",
    desc: "Request your regular medication safely.",
    accent: "#EA6C00",
    bg: "#FFF7ED",
  },
  {
    num: 4,
    Icon: Smartphone,
    title: "NHS App",
    desc: "Access NHS services securely online.",
    accent: "#1E3A5F",
    bg: "#EEF2FF",
  },
  {
    num: 5,
    Icon: Megaphone,
    title: "Health Campaigns & Prevention",
    desc: "Screening, vaccines and wellbeing support.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    num: 6,
    Icon: BookOpen,
    title: "Learn About Your Health",
    desc: "Simple health information and guidance.",
    accent: "#0B7A82",
    bg: "#F0FDFA",
  },
];

type KioskDisplayProps = {
  practiceName?: string;
  scale?: number;
};

export default function KioskDisplay({
  practiceName = "Earls Court Health and Wellbeing Centre",
  scale = 1,
}: KioskDisplayProps) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-border"
      style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <Image
          src="/brand/Primary.png"
          alt="PracticeLingo"
          width={140}
          height={36}
          className="h-9 w-auto"
        />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src="/nhs.png" alt="NHS" width={44} height={24} className="h-7 w-auto" />
            <span className="text-sm text-dark font-semibold leading-tight max-w-[200px]">{practiceName}</span>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="pt-8 pb-4 px-6 text-center">
        <h2 className="text-2xl font-bold text-dark mb-1">What do you need help with today?</h2>
        <p className="text-text-secondary text-sm">Tap an option below to get started.</p>
      </div>

      {/* Cards grid */}
      <div className="px-5 pb-6 grid grid-cols-3 gap-4">
        {cards.map(({ num, Icon, title, desc, accent, bg }) => (
          <div
            key={num}
            className="rounded-2xl p-5 border-2 flex flex-col relative cursor-pointer hover:shadow-md transition-shadow"
            style={{ backgroundColor: bg, borderColor: accent }}
          >
            {/* Number badge */}
            <div
              className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: accent }}
            >
              {num}
            </div>

            {/* Icon circle */}
            <div className="flex justify-center mb-3 mt-4">
              <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center">
                <Icon className="w-7 h-7" style={{ color: accent }} />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-center text-sm font-bold mb-1 leading-tight" style={{ color: accent }}>
              {title}
            </h3>
            <p className="text-center text-xs text-text-secondary leading-relaxed flex-1">{desc}</p>

            {/* Arrow button */}
            <div className="flex justify-end mt-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: accent }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
