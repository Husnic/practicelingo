"use client";

import { QRCodeSVG } from "qrcode.react";

type QRCodeMockProps = {
  size?: number;
  label?: string;
  className?: string;
  value?: string;
};

export default function QRCodeMock({
  size = 80,
  label,
  className = "",
  value = "https://practicelingo.co.uk/patient/menu",
}: QRCodeMockProps) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <div className="bg-white p-2 rounded-xl border border-border shadow-sm">
        <QRCodeSVG
          value={value}
          size={size}
          bgColor="#ffffff"
          fgColor="#1A1A1A"
          level="M"
          includeMargin={false}
        />
      </div>
      {label && (
        <p className="text-xs text-text-secondary text-center">{label}</p>
      )}
    </div>
  );
}
