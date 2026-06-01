"use client";

import { useState, useEffect } from "react";
import MockPhone from "@/components/shared/MockPhone";
import MobileMenuDemo from "@/components/shared/MobileMenuDemo";

const languages = [
  { lang: "Arabic", langFlag: "🇸🇦", langCode: "ar" as const },
  { lang: "Hindi", langFlag: "🇮🇳", langCode: "hi" as const },
  { lang: "Português", langFlag: "🇵🇹", langCode: "pt" as const },
  { lang: "Mandarin", langFlag: "🇨🇳", langCode: "zh" as const },
  { lang: "Français", langFlag: "🇫🇷", langCode: "fr" as const },
];

const DISPLAY_MS = 3600;
const FADE_MS = 400;

type Props = {
  practiceName?: string;
  label?: string;
};

export default function CyclingPhoneMock({
  practiceName = "Your GP Surgery",
  label,
}: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % languages.length);
        setVisible(true);
      }, FADE_MS);
      return () => clearTimeout(swap);
    }, DISPLAY_MS + FADE_MS);

    return () => clearInterval(timer);
  }, []);

  const current = languages[index];

  return (
    <div className="flex flex-col items-center gap-3">
      {label && (
        <p className="text-xs font-medium text-blue-200/70 uppercase tracking-wider">
          {label}
        </p>
      )}

      {/* Phone with fade+slide transition */}
      <div
        style={{
          transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(10px)",
        }}
      >
        <MockPhone>
          <MobileMenuDemo
            practiceName={practiceName}
            lang={current.lang}
            langFlag={current.langFlag}
            langCode={current.langCode}
          />
        </MockPhone>
      </div>

      {/* Language dots */}
      <div className="flex items-center gap-2">
        {languages.map((l, i) => (
          <button
            key={l.langCode}
            onClick={() => {
              setVisible(false);
              setTimeout(() => {
                setIndex(i);
                setVisible(true);
              }, FADE_MS);
            }}
            className="flex items-center gap-1 transition-all duration-300"
            aria-label={`Show ${l.lang}`}
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === index ? 20 : 6,
                height: 6,
                background: i === index ? "#98D37F" : "rgba(255,255,255,0.3)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Current language label */}
      <p
        className="text-xs font-semibold text-white/60 tracking-wide"
        style={{
          transition: `opacity ${FADE_MS}ms ease`,
          opacity: visible ? 1 : 0,
        }}
      >
        {current.langFlag} {current.lang}
      </p>
    </div>
  );
}
