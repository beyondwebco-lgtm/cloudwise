import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#142B4A] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#22D3EE]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1220]/80 border border-[#22D3EE]/30 text-xs font-semibold text-[#22D3EE]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Strategic Advisory Partnership</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Move Your Business Forward?
        </h2>

        <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-light">
          Let's discuss your business challenges and identify practical opportunities for technology modernization, disciplined project delivery, and governance improvement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-xl shadow-xl shadow-[#2563EB]/40 border border-[#22D3EE]/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5 text-[#22D3EE]" />
          </Link>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-slate-200 hover:text-white bg-[#0B1220]/70 hover:bg-[#0B1220] rounded-xl border border-white/10 hover:border-white/30 transition-all w-full sm:w-auto"
          >
            <Mail className="w-4 h-4 text-[#22D3EE]" />
            <span>Email Leadership Team</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/10 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
            <span>Confidential Assessment</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Direct Principal Engagement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
