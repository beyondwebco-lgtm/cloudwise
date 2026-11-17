"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  ArrowRight,
  Sparkles
} from "lucide-react";
import { CORE_SERVICES, SITE_CONFIG } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  const serviceIconMap: Record<string, React.ReactNode> = {
    "it-cloud": <Cloud className="w-5 h-5 text-[#22D3EE]" />,
    "project-management": <KanbanSquare className="w-5 h-5 text-[#2563EB]" />,
    "hr-workforce": <Users className="w-5 h-5 text-[#D4AF37]" />,
    "it-audit-compliance": <ShieldCheck className="w-5 h-5 text-[#22D3EE]" />,
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
          ? "bg-[#0B1220]/95 backdrop-blur-md border-b border-[#22D3EE]/15 shadow-xl shadow-[#0B1220]/30 py-3"
          : "bg-[#0B1220] border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#22D3EE] rounded-lg p-1"
        >
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="CloudWize Consulting Logo"
              width={40}
              height={40}
              priority
              className="drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1 font-heading">
              CloudWize
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#22D3EE]">
              Consulting Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          <Link
            href="/"
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/about"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-white/5"
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
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isServiceActive
                  ? "text-white bg-white/10 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesDropdownOpen ? "rotate-180 text-[#22D3EE]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {isServicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-[420px] mt-1 p-3 bg-[#0B1220] border border-[#22D3EE]/25 rounded-xl shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE]">
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
                        className={`flex items-start gap-3.5 p-2.5 rounded-lg transition-all group ${
                          isActive
                            ? "bg-[#2563EB]/20 border border-[#22D3EE]/40"
                            : "hover:bg-white/5 hover:border hover:border-white/10"
                        }`}
                      >
                        <div className="p-2 rounded-md bg-[#142B4A] border border-white/10 group-hover:border-[#22D3EE]/40 transition-colors">
                          {serviceIconMap[service.id]}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white group-hover:text-[#22D3EE] transition-colors flex items-center justify-between">
                            {service.title}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#22D3EE]" />
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
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
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/industries"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/insights"
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/insights"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === "/contact"
                ? "text-white bg-white/10 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-lg shadow-lg shadow-[#2563EB]/25 border border-[#22D3EE]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-[#22D3EE]" />
            <span>Book a Consultation</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#22D3EE] rounded-lg bg-white/5"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1220] border-b border-[#22D3EE]/20 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#2563EB]/20 text-[#22D3EE] font-semibold"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services Group in Mobile */}
          <div className="pt-2 border-t border-white/10">
            <span className="px-3 text-xs font-bold uppercase tracking-wider text-[#22D3EE]">
              Consulting Practices
            </span>
            <div className="mt-2 space-y-1">
              {CORE_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                    pathname === `/${service.slug}`
                      ? "bg-[#2563EB]/20 text-white font-medium"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                  <span>{service.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] rounded-lg shadow-md border border-[#22D3EE]/30"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
