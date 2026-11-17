import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#071B38] text-white relative overflow-hidden border-t border-[#123B73]">
      {/* Background subtle illumination */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#123B73]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B73]/60 border border-[#2563EB]/40 text-xs font-semibold text-[#93C5FD]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
          <span>Strategic Advisory Partnership</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Move Your Business Forward?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
          Let's discuss your business challenges and identify practical opportunities for technology modernization, disciplined project delivery, and governance improvement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-lg shadow-[#2563EB]/30 border border-[#60A5FA]/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5 text-[#93C5FD]" />
          </Link>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-slate-200 hover:text-white bg-[#123B73]/50 hover:bg-[#123B73] rounded-xl border border-white/10 hover:border-white/30 transition-all w-full sm:w-auto"
          >
            <Mail className="w-4 h-4 text-[#60A5FA]" />
            <span>Email Leadership Team</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/10 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
            <span>Confidential Assessment</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#60A5FA]" />
            <span>Direct Principal Engagement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
