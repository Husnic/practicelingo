"use client";

import { ReactNode } from "react";

type MockDisplayProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export default function MockDisplay({ children, className = "", label }: MockDisplayProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {label && (
        <p className="text-xs font-medium text-text-secondary mb-3 tracking-wide uppercase">
          {label}
        </p>
      )}
      <div className="relative w-full max-w-[500px]">
        {/* Monitor */}
        <div className="bg-[#1A1A1A] rounded-2xl p-3 shadow-2xl">
          {/* Status bar */}
          <div className="flex items-center gap-2 mb-2 px-1">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {/* Screen */}
          <div className="bg-white rounded-xl overflow-hidden min-h-[300px]">
            {children}
          </div>
        </div>
        {/* Stand */}
        <div className="flex justify-center">
          <div className="w-20 h-4 bg-[#2a2a2a] rounded-b-lg" />
        </div>
        <div className="flex justify-center">
          <div className="w-32 h-2 bg-[#333] rounded-full" />
        </div>
      </div>
    </div>
  );
}
