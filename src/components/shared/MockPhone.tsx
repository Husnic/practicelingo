"use client";

import { ReactNode } from "react";

type MockPhoneProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export default function MockPhone({ children, className = "", label }: MockPhoneProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <p className="text-xs font-medium text-text-secondary mb-3 tracking-wide uppercase">
          {label}
        </p>
      )}
      <div className="relative w-[260px] bg-[#1A1A1A] rounded-[40px] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1A1A1A] rounded-full z-10" />
        {/* Screen */}
        <div className="relative bg-white rounded-[28px] overflow-hidden min-h-[480px] pt-6">
          {children}
        </div>
        {/* Home bar */}
        <div className="flex justify-center mt-3">
          <div className="w-20 h-1 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
