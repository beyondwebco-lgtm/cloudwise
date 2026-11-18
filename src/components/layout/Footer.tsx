import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ShieldCheck, 
  ChevronRight
} from "lucide-react";
import { CORE_SERVICES, SITE_CONFIG } from "@/data/content";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-white text-[#475569] border-t border-[#DBE5F0] relative overflow-hidden">
      {/* Subtle top light blue illumination accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#EFF6FF] to-transparent pointer-events-none blur-xl" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Mission Column (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link 
              href="/" 
              className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-lg p-0.5"
            >
              <Logo variant="light" height={44} />
            </Link>

            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              Practical technology consulting, structured project delivery, workforce solutions, and governance advisory for organizations navigating digital complexity.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#123B73] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE] w-fit shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>{SITE_CONFIG.tagline}</span>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-3 pt-2 text-sm text-[#334155]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#2563EB] transition-colors font-medium text-[#0F172A]"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="hover:text-[#2563EB] transition-colors font-medium text-[#0F172A]"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-[#334155]">Registered Office: {SITE_CONFIG.registeredOffice}</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Linkedin className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-xs text-[#123B73] inline-flex items-center gap-1.5 bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#BFDBFE] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
                  LinkedIn Profile Launching Soon
                </span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B38] border-b border-[#DBE5F0] pb-2">
              Consulting Practices
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-[#475569] hover:text-[#2563EB] transition-colors flex items-center group gap-1.5 font-normal"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B38] border-b border-[#DBE5F0] pb-2">
              Company & Insights
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#475569] hover:text-[#2563EB] transition-colors flex items-center group gap-1.5 font-normal">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-[#475569] hover:text-[#2563EB] transition-colors flex items-center group gap-1.5 font-normal">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all" />
                  <span>Industries Supported</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#475569] hover:text-[#2563EB] transition-colors flex items-center group gap-1.5 font-normal">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all" />
                  <span>Executive Insights</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#475569] hover:text-[#2563EB] transition-colors flex items-center group gap-1.5 font-normal">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all" />
                  <span>Book Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B38] border-b border-[#DBE5F0] pb-2">
              Governance & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-[#475569] hover:text-[#2563EB] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#475569] hover:text-[#2563EB] transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <div className="mt-4 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#DBE5F0] text-xs text-[#475569] leading-relaxed">
                  <div className="flex items-center gap-1.5 text-[#071B38] font-semibold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Advisory Notice</span>
                  </div>
                  CloudWize delivers advisory and readiness support. We do not issue accredited ISO certifications or SOC attestation reports.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#DBE5F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 CloudWize Consulting Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#071B38] transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#071B38] transition-colors">
              Terms
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-[#071B38] transition-colors">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
