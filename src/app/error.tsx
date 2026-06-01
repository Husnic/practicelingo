"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="w-24 h-24 bg-[#FEF2F2] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <p className="text-[#EF4444] text-sm font-semibold tracking-widest uppercase mb-3">Something went wrong</p>
        <h1 className="text-3xl font-bold text-dark mb-3">Unexpected Error</h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          An unexpected error occurred. Please try again or return to the home page.
        </p>

        {error.digest && (
          <p className="text-xs text-text-secondary font-mono bg-surface px-3 py-1.5 rounded-lg inline-block mb-6">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-[#005EB8] text-white rounded-xl px-6 py-3 font-semibold hover:bg-[#004A93] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#005EB8] text-[#005EB8] rounded-xl px-6 py-3 font-semibold hover:bg-[#005EB8] hover:text-white transition-colors"
          >
            Home
          </Link>
        </div>

        <p className="mt-8 text-xs text-text-secondary">
          Medical emergency? Call <strong>999</strong> · Urgent? Call <strong>NHS 111</strong>
        </p>
      </div>
    </main>
  );
}
