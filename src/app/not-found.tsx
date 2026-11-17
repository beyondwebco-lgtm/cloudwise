import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0B1220] text-white px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative text-center max-w-lg mx-auto space-y-6">
        <span className="text-xs font-mono font-bold text-[#D4AF37] px-3 py-1 rounded-full bg-[#142B4A] border border-[#D4AF37]/30 uppercase tracking-widest">
          404 Error
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          Page Not Located
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          The consulting practice, insight publication, or resource you are attempting to access does not exist or may have been relocated.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] shadow-lg shadow-[#2563EB]/25 border border-[#22D3EE]/30 transition-all"
          >
            <Home className="w-4 h-4 text-[#22D3EE]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <span>Contact Advisory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
