import { Calendar, ClipboardList, Pill, Smartphone, Megaphone, BookOpen } from "lucide-react";

const items = [
  { num: 1, Icon: ClipboardList, title: "Register with Practice", accent: "#005EB8", bg: "#EFF6FF" },
  { num: 2, Icon: Calendar, title: "Book an Appointment", accent: "#007F3B", bg: "#F0FDF4" },
  { num: 3, Icon: Pill, title: "Repeat Prescriptions", accent: "#EA6C00", bg: "#FFF7ED" },
  { num: 4, Icon: Smartphone, title: "NHS App", accent: "#1E3A5F", bg: "#EEF2FF" },
  { num: 5, Icon: Megaphone, title: "Health Campaigns", accent: "#7C3AED", bg: "#F5F3FF" },
  { num: 6, Icon: BookOpen, title: "Learn About Your Health", accent: "#0B7A82", bg: "#F0FDFA" },
];

type MobileMenuDemoProps = {
  practiceName?: string;
  lang?: string;
  langFlag?: string;
};

export default function MobileMenuDemo({
  practiceName = "Earl's Court H&W",
  lang = "English",
  langFlag = "🇬🇧",
}: MobileMenuDemoProps) {
  return (
    <div className="bg-bg flex flex-col min-h-full">
      {/* App header */}
      <div className="bg-[#005EB8] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[#005EB8] text-xs font-bold">PL</span>
          </div>
          <div>
            <p className="text-white font-semibold text-xs leading-tight">PracticeLingo</p>
            <p className="text-blue-200 text-[10px] leading-tight">{practiceName}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-white/15 rounded-lg px-2 py-1">
          <span className="text-sm">{langFlag}</span>
          <span className="text-white text-xs">{lang}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex-1">
        <p className="text-dark font-bold text-sm mb-3 text-center">What do you need today?</p>
        <div className="grid grid-cols-2 gap-2">
          {items.map(({ num, Icon, title, accent, bg }) => (
            <div
              key={num}
              className="rounded-xl p-3 border relative cursor-pointer"
              style={{ backgroundColor: bg, borderColor: accent + "40" }}
            >
              <div
                className="absolute top-2 left-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
                style={{ backgroundColor: accent }}
              >
                {num}
              </div>
              <div className="flex justify-center mt-3 mb-2">
                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
              </div>
              <p className="text-center text-[10px] font-bold leading-tight" style={{ color: accent }}>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Audio bar */}
      <div className="px-3 pb-3">
        <button className="w-full flex items-center justify-center gap-2 bg-[#005EB8]/10 text-[#005EB8] rounded-xl py-2 text-xs font-medium">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
          Listen
        </button>
      </div>
    </div>
  );
}
