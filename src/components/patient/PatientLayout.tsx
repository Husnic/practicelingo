"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const languages = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "zh", flag: "🇨🇳", name: "普通话" },
  { code: "pt", flag: "🇵🇹", name: "Português" },
  { code: "hi", flag: "🇮🇳", name: "हिन्दी" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
];

type PatientLayoutProps = {
  children: ReactNode;
  practiceName?: string;
};

export default function PatientLayout({
  children,
  practiceName = "Your GP Surgery",
}: PatientLayoutProps) {
  const [lang, setLang] = useState("en");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const current = languages.find((l) => l.code === lang)!;

  return (
    <div className="min-h-screen bg-bg flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="bg-primary px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/patient/menu" className="flex items-center gap-2">
          <Image
            src="/brand/Primary-white.svg"
            alt="PracticeLingo"
            width={110}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/nhs.png"
            alt="NHS"
            width={32}
            height={18}
            className="h-5 w-auto opacity-90"
          />

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangPicker(!showLangPicker)}
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white rounded-xl px-3 py-2 text-sm transition-colors"
            >
              <span>{current.flag}</span>
              <span className="text-xs font-medium">{current.name}</span>
              <svg
                className="w-3 h-3 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showLangPicker && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-border overflow-hidden w-44 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setShowLangPicker(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-surface transition-colors ${lang === l.code ? "bg-surface font-semibold text-primary" : "text-dark"}`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Audio bar */}
      <div className="sticky bottom-0 bg-white border-t border-border px-4 py-3 flex items-center gap-3">
        <button className="flex items-center gap-2 bg-primary/10 text-primary rounded-xl px-4 py-2.5 text-sm font-medium flex-1 justify-center">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
          Listen
        </button>
        <Link
          href="/patient/menu"
          className="flex items-center gap-2 bg-surface text-dark rounded-xl px-4 py-2.5 text-sm font-medium"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Menu
        </Link>
      </div>

      {/* Emergency footer */}
      <div className="bg-red-50 border-t border-red-200 px-4 py-2 text-center">
        <p className="text-xs text-red-600">
          Emergency? Call <strong>999</strong> · Urgent? Call{" "}
          <strong>NHS 111</strong>
        </p>
      </div>
    </div>
  );
}
