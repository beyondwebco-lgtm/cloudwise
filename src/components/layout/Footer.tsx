import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import { CORE_SERVICES, SITE_CONFIG } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#22D3EE]/10 to-transparent pointer-events-none blur-2xl" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Mission Column (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.svg"
                  alt="CloudWize Consulting Logo"
                  width={36}
                  height={36}
                  className="drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  CloudWize
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#22D3EE]">
                  Consulting Services
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Practical technology consulting, structured project delivery, workforce solutions, and governance advisory for organizations navigating digital complexity.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] bg-[#142B4A]/60 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.tagline}</span>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#22D3EE]" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#22D3EE]" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#22D3EE]" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Linkedin className="w-4 h-4 text-[#2563EB]" />
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#22D3EE] hover:underline"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Consulting Practices
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-slate-400 hover:text-[#22D3EE] transition-colors flex items-center group gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Company & Insights
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#22D3EE] transition-colors flex items-center group gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-[#22D3EE] transition-colors flex items-center group gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
                  <span>Industries Supported</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-[#22D3EE] transition-colors flex items-center group gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
                  <span>Executive Insights</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-[#22D3EE] transition-colors flex items-center group gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#22D3EE] group-hover:translate-x-0.5 transition-all" />
                  <span>Book Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Governance & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <div className="mt-4 p-3 rounded-lg bg-[#142B4A]/40 border border-white/10 text-[11px] text-slate-400 leading-snug">
                  <div className="flex items-center gap-1.5 text-white font-medium mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>Advisory Notice</span>
                  </div>
                  CloudWize delivers advisory and readiness support. We do not issue accredited ISO certifications or SOC attestation reports.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 CloudWize Consulting Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
