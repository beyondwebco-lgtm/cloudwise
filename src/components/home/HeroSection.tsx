"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cloud, 
  KanbanSquare, 
  Users, 
  Layers,
  Activity,
  CheckCircle2
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"cloud" | "pmo" | "audit">("cloud");

  return (
    <section className="relative bg-[#0B1220] text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#22D3EE]/15">
      {/* Background ambient glowing spheres */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#22D3EE]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 right-1/3 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#142B4A]/90 border border-[#22D3EE]/30 text-xs font-semibold text-[#22D3EE] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
              <span>Technology. Transformation. Talent. Trust.</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.1] text-white">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22D3EE]">
                Technology, Talent
              </span>{" "}
              and Strategic Consulting.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              CloudWize Consulting Services helps organizations modernize technology, deliver complex projects, strengthen compliance, and build high-performing teams through practical consulting solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-xl shadow-xl shadow-[#2563EB]/30 border border-[#22D3EE]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-[#142B4A]/70 hover:bg-[#142B4A] rounded-xl border border-white/10 hover:border-[#22D3EE]/40 transition-all duration-200"
              >
                <Layers className="w-4 h-4 text-[#22D3EE]" />
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Key Quality Assurances */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                <span>Vendor-Neutral Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Zero Shelfware Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Disciplined Governance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Experience Canvas */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#142B4A]/90 to-[#0B1220]/95 p-6 border border-[#22D3EE]/30 shadow-2xl shadow-black/60 backdrop-blur-xl">
              
              {/* Header Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    cloudwize.architecture.v2
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#22D3EE] font-mono">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Interactive Architecture Selector */}
              <div className="grid grid-cols-3 gap-2 mb-6 bg-[#0B1220] p-1.5 rounded-lg border border-white/10 text-xs font-medium">
                <button
                  onClick={() => setActiveTab("cloud")}
                  className={`py-1.5 rounded-md transition-all ${
                    activeTab === "cloud"
                      ? "bg-[#2563EB] text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Cloud
                </button>
                <button
                  onClick={() => setActiveTab("pmo")}
                  className={`py-1.5 rounded-md transition-all ${
                    activeTab === "pmo"
                      ? "bg-[#2563EB] text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  PMO Controls
                </button>
                <button
                  onClick={() => setActiveTab("audit")}
                  className={`py-1.5 rounded-md transition-all ${
                    activeTab === "audit"
                      ? "bg-[#2563EB] text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Audit Readiness
                </button>
              </div>

              {/* Dynamic Visualization Graphic (Inspired by original Cloud SVG + Modernized) */}
              <div className="relative h-60 w-full rounded-xl bg-[#0B1220]/80 border border-white/10 flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

                {activeTab === "cloud" && (
                  <div className="w-full h-full flex flex-col items-center justify-center animate-in fade-in duration-300">
                    <svg viewBox="0 0 320 180" className="w-full h-full">
                      {/* Cloud boundary */}
                      <path
                        d="M70 140 A35 35 0 0 1 80 75 A45 45 0 0 1 180 65 A35 35 0 0 1 240 140 Z"
                        fill="#142B4A"
                        stroke="#22D3EE"
                        strokeWidth="2.5"
                      />
                      {/* Rising workload metrics */}
                      <rect x="95" y="105" width="22" height="35" rx="3" fill="#2563EB" opacity="0.9" />
                      <rect x="127" y="85" width="22" height="55" rx="3" fill="#22D3EE" opacity="0.9" />
                      <rect x="159" y="65" width="22" height="75" rx="3" fill="#2563EB" opacity="0.9" />
                      <rect x="191" y="95" width="22" height="45" rx="3" fill="#142B4A" stroke="#22D3EE" strokeWidth="1.5" />
                      
                      {/* Connected nodes */}
                      <path d="M106 100 L138 80 L170 60 L240 35" stroke="#22D3EE" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                      <circle cx="240" cy="35" r="7" fill="#D4AF37" className="animate-pulse" />
                      <circle cx="106" cy="100" r="4.5" fill="#22D3EE" />
                      <circle cx="138" cy="80" r="4.5" fill="#22D3EE" />
                      <circle cx="170" cy="60" r="4.5" fill="#22D3EE" />
                    </svg>
                    <div className="text-[11px] font-mono text-[#22D3EE] mt-1 text-center">
                      Multi-Cloud Modernization & Migration Matrix
                    </div>
                  </div>
                )}

                {activeTab === "pmo" && (
                  <div className="w-full h-full flex flex-col justify-between py-2 px-3 animate-in fade-in duration-300">
                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-mono text-slate-300">
                        <span>Work Breakdown Structure (WBS)</span>
                        <span className="text-[#22D3EE]">100% on Baseline</span>
                      </div>
                      <div className="w-full bg-[#142B4A] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#2563EB] to-[#22D3EE] h-full w-[88%]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-mono text-slate-300">
                        <span>Earned Value Management (EVM)</span>
                        <span className="text-[#D4AF37]">CPI: 1.04 · SPI: 1.02</span>
                      </div>
                      <div className="w-full bg-[#142B4A] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#D4AF37] to-amber-200 h-full w-[94%]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px] font-mono text-slate-300">
                        <span>RAID Governance & Milestone Control</span>
                        <span className="text-[#22D3EE]">0 High Blockers</span>
                      </div>
                      <div className="w-full bg-[#142B4A] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#22D3EE] to-blue-400 h-full w-[100%]" />
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 text-center">
                      Predictive PMO Variance & Steering Committee Controls
                    </div>
                  </div>
                )}

                {activeTab === "audit" && (
                  <div className="w-full h-full flex flex-col justify-center items-center space-y-3 animate-in fade-in duration-300">
                    <div className="grid grid-cols-3 gap-2 w-full text-center">
                      <div className="p-2.5 rounded-lg bg-[#142B4A] border border-[#22D3EE]/30">
                        <div className="text-base font-bold text-[#22D3EE]">ISO 27001</div>
                        <div className="text-[10px] text-slate-400">93 Controls</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#142B4A] border border-[#2563EB]/40">
                        <div className="text-base font-bold text-white">SOC 2 Type II</div>
                        <div className="text-[10px] text-slate-400">Trust Criteria</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#142B4A] border border-[#D4AF37]/30">
                        <div className="text-base font-bold text-[#D4AF37]">HIPAA</div>
                        <div className="text-[10px] text-slate-400">Safeguards</div>
                      </div>
                    </div>
                    <div className="w-full p-2.5 rounded-lg bg-[#0B1220] border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
                        <span>Defensible Control Evidence</span>
                      </span>
                      <span className="text-[#22D3EE] font-mono">AUDIT-READY</span>
                    </div>
                    <div className="text-[10px] text-slate-400 italic text-center">
                      Gap Assessments & Evidence Binder Preparation
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 bg-[#0B1220]/60 p-2.5 rounded-lg border border-white/10">
                <span className="text-slate-400">Governance Status:</span>
                <span className="font-semibold text-[#D4AF37] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Pragmatic Executive Advisory
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
