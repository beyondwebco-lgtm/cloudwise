"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Cloud, 
  KanbanSquare, 
  Users, 
  ShieldCheck, 
  LifeBuoy, 
  ArrowRight
} from "lucide-react";
import { CORE_SERVICES } from "@/data/content";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  const serviceIconMap: Record<string, React.ReactNode> = {
    "it-cloud": <Cloud className="w-5 h-5 text-[#2563EB]" />,
    "project-management": <KanbanSquare className="w-5 h-5 text-[#2563EB]" />,
    "hr-workforce": <Users className="w-5 h-5 text-[#2563EB]" />,
    "it-audit-compliance": <ShieldCheck className="w-5 h-5 text-[#2563EB]" />,
    "it-support-advisory": <LifeBuoy className="w-5 h-5 text-[#2563EB]" />,
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  const isServiceActive = CORE_SERVICES.some((s) => pathname === `/${s.slug}`);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#071B38]/95 backdrop-blur-md border-b border-[#123B73] shadow-lg shadow-[#071B38]/20 py-3"
          : "bg-[#071B38] border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#60A5FA] rounded-lg p-1"
        >
          <Logo variant="dark" height={48} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          <Link
            href="/"
            className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname === "/"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-200 hover:text-white hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname === "/about"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-200 hover:text-white hover:bg-white/5"
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              onFocus={() => setIsServicesDropdownOpen(true)}
              aria-expanded={isServicesDropdownOpen}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                isServiceActive
                  ? "text-white bg-white/10 font-semibold"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesDropdownOpen ? "rotate-180 text-[#60A5FA]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {isServicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-[420px] mt-1.5 p-3.5 bg-[#071B38] border border-[#123B73] rounded-2xl shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#60A5FA]">
                    Consulting Practices
                  </span>
                  <span className="text-[11px] text-slate-400">Enterprise Solutions</span>
                </div>
                <div className="space-y-1">
                  {CORE_SERVICES.map((service) => {
                    const isActive = pathname === `/${service.slug}`;
                    return (
                      <Link
                        key={service.id}
                        href={`/${service.slug}`}
                        className={`flex items-start gap-3.5 p-2.5 rounded-xl transition-all group ${
                          isActive
                            ? "bg-[#123B73] border border-[#2563EB]/50"
                            : "hover:bg-white/5 hover:border hover:border-white/10"
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-[#071B38] border border-[#123B73] group-hover:border-[#2563EB] transition-colors shrink-0">
                          {serviceIconMap[service.id]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-white group-hover:text-[#60A5FA] transition-colors flex items-center justify-between">
                            <span className="truncate">{service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#60A5FA] shrink-0 ml-1" />
                          </div>
                          <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                            {service.shortDesc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/industries"
            className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname === "/industries"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-200 hover:text-white hover:bg-white/5"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/insights"
            className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname === "/insights"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-200 hover:text-white hover:bg-white/5"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
              pathname === "/contact"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-200 hover:text-white hover:bg-white/5"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Primary CTA Button: Royal Blue with Refined Hover */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-md shadow-[#2563EB]/25 border border-[#60A5FA]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#60A5FA] rounded-xl bg-white/5"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#071B38] border-b border-[#123B73] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#123B73] text-[#60A5FA] font-semibold"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <span className="px-3 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              Consulting Practices
            </span>
            <div className="mt-2 space-y-1">
              {CORE_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                    pathname === `/${service.slug}`
                      ? "bg-[#123B73] text-white font-medium"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
                  <span>{service.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-md border border-[#60A5FA]/30"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
