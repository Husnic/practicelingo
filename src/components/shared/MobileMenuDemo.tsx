import {
  Calendar,
  ClipboardList,
  Pill,
  Smartphone,
  Megaphone,
  BookOpen,
} from "lucide-react";

type LangCode = "en" | "ar" | "hi" | "pt" | "zh" | "fr";

const langConfig: Record<
  LangCode,
  {
    greeting: string;
    sub: string;
    items: {
      num: number;
      label: string;
      sub: string;
      accent: string;
      bg: string;
    }[];
  }
> = {
  en: {
    greeting: "What do you need today?",
    sub: "Tap an option to get started",
    items: [
      {
        num: 1,
        label: "Register",
        sub: "Register with Practice",
        accent: "#005EB8",
        bg: "#EFF6FF",
      },
      {
        num: 2,
        label: "Appointment",
        sub: "Book an Appointment",
        accent: "#007F3B",
        bg: "#F0FDF4",
      },
      {
        num: 3,
        label: "Prescriptions",
        sub: "Repeat Prescriptions",
        accent: "#EA6C00",
        bg: "#FFF7ED",
      },
      {
        num: 4,
        label: "NHS App",
        sub: "NHS App Guide",
        accent: "#1E3A5F",
        bg: "#EEF2FF",
      },
      {
        num: 5,
        label: "Campaigns",
        sub: "Health Campaigns",
        accent: "#7C3AED",
        bg: "#F5F3FF",
      },
      {
        num: 6,
        label: "Health Info",
        sub: "Learn About Your Health",
        accent: "#0B7A82",
        bg: "#F0FDFA",
      },
    ],
  },
  ar: {
    greeting: "ماذا تحتاج اليوم؟",
    sub: "اضغط على خيار للبدء",
    items: [
      {
        num: 1,
        label: "التسجيل",
        sub: "Register",
        accent: "#005EB8",
        bg: "#EFF6FF",
      },
      {
        num: 2,
        label: "حجز موعد",
        sub: "Appointment",
        accent: "#007F3B",
        bg: "#F0FDF4",
      },
      {
        num: 3,
        label: "وصفات طبية",
        sub: "Prescriptions",
        accent: "#EA6C00",
        bg: "#FFF7ED",
      },
      {
        num: 4,
        label: "تطبيق NHS",
        sub: "NHS App",
        accent: "#1E3A5F",
        bg: "#EEF2FF",
      },
      {
        num: 5,
        label: "حملات صحية",
        sub: "Campaigns",
        accent: "#7C3AED",
        bg: "#F5F3FF",
      },
      {
        num: 6,
        label: "معلومات صحية",
        sub: "Health Info",
        accent: "#0B7A82",
        bg: "#F0FDFA",
      },
    ],
  },
  hi: {
    greeting: "आज आपको क्या चाहिए?",
    sub: "शुरू करने के लिए टैप करें",
    items: [
      {
        num: 1,
        label: "पंजीकरण",
        sub: "Register",
        accent: "#005EB8",
        bg: "#EFF6FF",
      },
      {
        num: 2,
        label: "अपॉइंटमेंट",
        sub: "Appointment",
        accent: "#007F3B",
        bg: "#F0FDF4",
      },
      {
        num: 3,
        label: "नुस्खे",
        sub: "Prescriptions",
        accent: "#EA6C00",
        bg: "#FFF7ED",
      },
      {
        num: 4,
        label: "NHS ऐप",
        sub: "NHS App",
        accent: "#1E3A5F",
        bg: "#EEF2FF",
      },
      {
        num: 5,
        label: "स्वास्थ्य अभियान",
        sub: "Campaigns",
        accent: "#7C3AED",
        bg: "#F5F3FF",
      },
      {
        num: 6,
        label: "स्वास्थ्य जानकारी",
        sub: "Health Info",
        accent: "#0B7A82",
        bg: "#F0FDFA",
      },
    ],
  },
  pt: {
    greeting: "O que precisa hoje?",
    sub: "Toque numa opção para começar",
    items: [
      {
        num: 1,
        label: "Registrar",
        sub: "Register",
        accent: "#005EB8",
        bg: "#EFF6FF",
      },
      {
        num: 2,
        label: "Consulta",
        sub: "Appointment",
        accent: "#007F3B",
        bg: "#F0FDF4",
      },
      {
        num: 3,
        label: "Receitas",
        sub: "Prescriptions",
        accent: "#EA6C00",
        bg: "#FFF7ED",
      },
      {
        num: 4,
        label: "App NHS",
        sub: "NHS App",
        accent: "#1E3A5F",
        bg: "#EEF2FF",
      },
      {
        num: 5,
        label: "Campanhas",
        sub: "Campaigns",
        accent: "#7C3AED",
        bg: "#F5F3FF",
      },
      {
        num: 6,
        label: "Saúde",
        sub: "Health Info",
        accent: "#0B7A82",
        bg: "#F0FDFA",
      },
    ],
  },
  zh: {
    greeting: "今天您需要什么？",
    sub: "点击选项开始",
    items: [
      {
        num: 1,
        label: "注册",
        sub: "Register",
        accent: "#005EB8",
        bg: "#EFF6FF",
      },
      {
        num: 2,
        label: "预约",
        sub: "Appointment",
        accent: "#007F3B",
        bg: "#F0FDF4",
      },
      {
        num: 3,
        label: "处方",
        sub: "Prescriptions",
        accent: "#EA6C00",
        bg: "#FFF7ED",
      },
      {
        num: 4,
        label: "NHS应用",
        sub: "NHS App",
        accent: "#1E3A5F",
        bg: "#EEF2FF",
      },
      {
        num: 5,
        label: "健康活动",
        sub: "Campaigns",
        accent: "#7C3AED",
        bg: "#F5F3FF",
      },
      {
        num: 6,
        label: "健康信息",
        sub: "Health Info",
        accent: "#0B7A82",
        bg: "#F0FDFA",
      },
    ],
  },
  fr: {
    greeting: "De quoi avez-vous besoin ?",
    sub: "Appuyez pour commencer",
    items: [
      {
        num: 1,
        label: "S'inscrire",
        sub: "Register",
        accent: "#005EB8",
        bg: "#EFF6FF",
      },
      {
        num: 2,
        label: "Rendez-vous",
        sub: "Appointment",
        accent: "#007F3B",
        bg: "#F0FDF4",
      },
      {
        num: 3,
        label: "Ordonnances",
        sub: "Prescriptions",
        accent: "#EA6C00",
        bg: "#FFF7ED",
      },
      {
        num: 4,
        label: "App NHS",
        sub: "NHS App",
        accent: "#1E3A5F",
        bg: "#EEF2FF",
      },
      {
        num: 5,
        label: "Campagnes",
        sub: "Campaigns",
        accent: "#7C3AED",
        bg: "#F5F3FF",
      },
      {
        num: 6,
        label: "Santé",
        sub: "Health Info",
        accent: "#0B7A82",
        bg: "#F0FDFA",
      },
    ],
  },
};

const icons = [ClipboardList, Calendar, Pill, Smartphone, Megaphone, BookOpen];

type MobileMenuDemoProps = {
  practiceName?: string;
  lang?: string;
  langFlag?: string;
  langCode?: LangCode;
};

export default function MobileMenuDemo({
  practiceName = "Your GP Surgery",
  lang = "English",
  langFlag = "🇬🇧",
  langCode = "en",
}: MobileMenuDemoProps) {
  const data = langConfig[langCode] ?? langConfig.en;

  return (
    <div className="bg-[#F7F9FC] flex flex-col min-h-full">
      {/* App header */}
      <div className="bg-[#005EB8] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[#005EB8] text-xs font-bold">PL</span>
          </div>
          <div>
            <p className="text-white font-semibold text-xs leading-tight">
              PracticeLingo
            </p>
            <p className="text-blue-200 text-[10px] leading-tight">
              {practiceName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-white/15 rounded-lg px-2 py-1">
          <span className="text-sm">{langFlag}</span>
          <span className="text-white text-xs">{lang}</span>
        </div>
      </div>

      {/* Greeting */}
      <div className="px-3 pt-3 pb-1 text-center">
        <p className="text-dark font-bold text-sm">{data.greeting}</p>
        <p className="text-text-secondary text-[10px] mt-0.5">{data.sub}</p>
      </div>

      {/* Cards */}
      <div className="p-2.5 grid grid-cols-2 gap-2 flex-1">
        {data.items.map(({ num, label, sub, accent, bg }, i) => {
          const Icon = icons[i];
          return (
            <div
              key={num}
              className="rounded-xl p-2.5 border relative cursor-pointer"
              style={{ backgroundColor: bg, borderColor: `${accent}30` }}
            >
              <div
                className="absolute top-2 left-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
                style={{ backgroundColor: accent }}
              >
                {num}
              </div>
              <div className="flex justify-center mt-3 mb-1.5">
                <div className="w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <Icon className="w-4 h-4" style={{ color: accent }} />
                </div>
              </div>
              <p
                className="text-center text-[10px] font-bold leading-tight"
                style={{ color: accent }}
              >
                {label}
              </p>
              <p className="text-center text-[9px] text-text-secondary mt-0.5">
                {sub}
              </p>
            </div>
          );
        })}
      </div>

      {/* Audio bar */}
      <div className="px-3 pb-3">
        <button className="w-full flex items-center justify-center gap-1.5 bg-[#005EB8]/10 text-[#005EB8] rounded-xl py-2 text-[10px] font-medium">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
          Listen / استمع / Ascoltare
        </button>
      </div>
    </div>
  );
}
