"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import QRCodeMock from "@/components/shared/QRCodeMock";

const languages = [
  { flag: "🇬🇧", name: "English",    native: "Hello",      arrow: "#005EB8", border: "#005EB8", active: true  },
  { flag: "🇸🇦", name: "Arabic",     native: "مرحبا",      arrow: "#007F3B", border: "#E5E7EB", active: false },
  { flag: "🇫🇷", name: "French",     native: "Bonjour",    arrow: "#005EB8", border: "#E5E7EB", active: false },
  { flag: "🇮🇳", name: "Hindi",      native: "नमस्ते",    arrow: "#EA6C00", border: "#E5E7EB", active: false },
  { flag: "🇨🇳", name: "Mandarin",   native: "你好",       arrow: "#EF4444", border: "#E5E7EB", active: false },
  { flag: "🇵🇹", name: "Portuguese", native: "Olá",        arrow: "#007F3B", border: "#E5E7EB", active: false },
];

type KioskDisplayProps = {
  practiceName?: string;
};

function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  if (!now) return null;

  const dateStr = now.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const timeStr = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold leading-none flex-col">
          <span className="text-[8px] font-normal">17</span>
        </div>
        <div>
          <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Today&apos;s Date</p>
          <p className="text-xs font-semibold text-gray-800">{dateStr}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">Current Time</p>
          <p className="text-xs font-semibold text-gray-800">{timeStr}</p>
        </div>
      </div>
    </div>
  );
}

export default function KioskDisplay({
  practiceName = "Earl's Court Health and Wellbeing Centre",
}: KioskDisplayProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg" style={{ minWidth: 760 }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <Image src="/brand/Primary.png" alt="PracticeLingo" width={150} height={38} className="h-10 w-auto" />
        <LiveClock />
        <div className="flex items-center gap-3">
          <Image src="/nhs.png" alt="NHS" width={48} height={26} className="h-8 w-auto" />
          <span className="text-sm font-semibold text-gray-800 max-w-[180px] leading-tight text-right">{practiceName}</span>
        </div>
      </div>

      {/* Welcome heading */}
      <div className="pt-8 pb-2 px-8 text-center">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">
          Welcome to {practiceName}
        </h1>
        <p className="text-lg font-bold text-[#007F3B]">Clear Care. Every Language.</p>
        <div className="w-16 h-0.5 bg-[#005EB8] mx-auto mt-3 mb-4" />
        <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
          Our GP practice is here to help you stay healthy by providing high-quality, easy-to-access care in your language.
        </p>
      </div>

      {/* Language selection */}
      <div className="px-8 pb-2 pt-4">
        <p className="text-center font-bold text-gray-800 mb-4">Please select your language</p>
        <div className="grid grid-cols-3 gap-3">
          {languages.map(({ flag, name, native, arrow, border, active }) => (
            <button
              key={name}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 border-2 transition-all hover:shadow-sm"
              style={{
                borderColor: active ? arrow : border,
                backgroundColor: active ? `${arrow}08` : "white",
              }}
            >
              <span className="text-2xl shrink-0">{flag}</span>
              <div className="flex-1 text-left">
                <p className="font-bold text-gray-800 text-sm">{name}</p>
                <p className="text-xs text-gray-500">{native}</p>
              </div>
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: arrow }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* QR footer */}
      <div className="mx-8 mb-6 mt-4 bg-gray-50 rounded-2xl px-6 py-4 flex items-center gap-6 border border-gray-100">
        <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-bold text-gray-800 text-sm">Scan to continue on your phone</p>
          <p className="text-xs text-gray-500 mt-0.5">Open PracticeLingo on your phone and continue in your preferred language.</p>
        </div>
        <QRCodeMock size={72} value="https://practicelingo.co.uk/patient/menu" />
      </div>

    </div>
  );
}
