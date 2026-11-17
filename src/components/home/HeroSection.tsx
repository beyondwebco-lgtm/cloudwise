"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Activity,
  Layers,
  Database,
  Lock,
  GitBranch,
  Cpu
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"cloud" | "pmo" | "audit">("cloud");

  return (
    <section className="relative bg-[#071B38] text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#123B73]">
      {/* Background subtle corporate blue ambient illumination */}
      <div className="absolute inset-0 bg-navy-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#123B73]/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -top-20 right-1/3 w-80 h-80 bg-[#60A5FA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Small uppercase eyebrow text */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#123B73]/60 border border-[#2563EB]/40 text-xs font-semibold text-[#93C5FD] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" />
              <span className="tracking-wider uppercase">Technology · Transformation · Talent · Trust</span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.1] text-white">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EFF6FF] to-[#60A5FA]">
                Technology, Talent
              </span>{" "}
              and Strategic Consulting.
            </h1>

            {/* Refined Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              CloudWize Consulting Services helps organizations modernize technology, deliver complex projects, strengthen compliance, and build high-performing teams through practical consulting solutions.
            </p>

            {/* Two Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-lg shadow-[#2563EB]/30 border border-[#60A5FA]/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-[#123B73]/60 hover:bg-[#123B73] rounded-xl border border-white/10 hover:border-[#60A5FA]/40 transition-all duration-200"
              >
                <Layers className="w-4 h-4 text-[#60A5FA]" />
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Minimal Trust Indicators */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>Vendor-Neutral Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>Zero Shelfware Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>Disciplined Governance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Interactive Cloud Architecture Visualization */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#123B73]/90 via-[#0E2F5C]/85 to-[#071B38] p-6 sm:p-7 border border-[#2563EB]/40 shadow-2xl shadow-[#071B38]/90 backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]" />
                  <span className="ml-2 text-xs font-mono text-slate-300">
                    cloudwize.network.matrix
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#60A5FA] font-mono">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 gap-1.5 mb-6 bg-[#071B38]/90 p-1 rounded-xl border border-white/10 text-xs font-medium">
                <button
                  onClick={() => setActiveTab("cloud")}
                  className={`py-2 rounded-lg transition-all ${
                    activeTab === "cloud"
                      ? "bg-[#2563EB] text-white shadow-sm font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Cloud Modernization
                </button>
                <button
                  onClick={() => setActiveTab("pmo")}
                  className={`py-2 rounded-lg transition-all ${
                    activeTab === "pmo"
                      ? "bg-[#2563EB] text-white shadow-sm font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  PMO Controls
                </button>
                <button
                  onClick={() => setActiveTab("audit")}
                  className={`py-2 rounded-lg transition-all ${
                    activeTab === "audit"
                      ? "bg-[#2563EB] text-white shadow-sm font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Audit Readiness
                </button>
              </div>

              {/* Signature Visual: Flowing Blue Energy Cloud Network */}
              <div className="relative h-64 w-full rounded-2xl bg-[#071B38] border border-white/10 flex items-center justify-center p-4 overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-navy-grid opacity-40 pointer-events-none" />

                {activeTab === "cloud" && (
                  <div className="w-full h-full flex flex-col items-center justify-center relative animate-in fade-in duration-300">
                    <svg viewBox="0 0 340 180" className="w-full h-full">
                      <defs>
                        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#123B73" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#071B38" stopOpacity="0.9" />
                        </linearGradient>
                        <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563EB" />
                          <stop offset="100%" stopColor="#60A5FA" />
                        </linearGradient>
                      </defs>

                      {/* Cloud Boundary Silhouette */}
                      <path
                        d="M 85 140 C 60 140 45 125 45 105 C 45 88 58 75 74 72 C 78 50 98 35 124 35 C 146 35 165 48 172 68 C 188 70 200 82 200 100 C 200 120 185 136 165 140 Z"
                        fill="url(#cloudGrad)"
                        stroke="#2563EB"
                        strokeWidth="2"
                      />

                      {/* Flowing Circuit Energy Lines (Continuous flowing blue energy) */}
                      <path
                        d="M 65 125 C 75 95 95 75 130 75 C 150 75 165 85 175 100"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        fill="none"
                        className="flowing-circuit"
                      />
                      <path
                        d="M 55 135 C 70 115 105 105 150 102 C 180 100 230 110 270 95"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        fill="none"
                        className="flowing-circuit"
                      />
                      <path
                        d="M 124 35 L 210 50 L 270 95 L 300 135"
                        stroke="#60A5FA"
                        strokeWidth="1.5"
                        strokeDasharray="4 6"
                        fill="none"
                      />

                      {/* Rising Cloud Workload Metrics */}
                      <rect x="90" y="105" width="16" height="30" rx="3" fill="#2563EB" opacity="0.8" />
                      <rect x="114" y="85" width="16" height="50" rx="3" fill="#3B82F6" opacity="0.9" />
                      <rect x="138" y="70" width="16" height="65" rx="3" fill="#60A5FA" opacity="0.95" />
                      <rect x="162" y="95" width="16" height="40" rx="3" fill="#123B73" stroke="#60A5FA" strokeWidth="1" />

                      {/* Connected Nodes with Subtle Pulse */}
                      <circle cx="210" cy="50" r="4.5" fill="#60A5FA" className="animate-pulse" />
                      <circle cx="270" cy="95" r="5.5" fill="#2563EB" />
                      <circle cx="300" cy="135" r="4" fill="#93C5FD" />
                      <circle cx="175" cy="100" r="4.5" fill="#60A5FA" />
                      <circle cx="130" cy="75" r="4" fill="#60A5FA" />
                    </svg>

                    <div className="text-[11px] font-mono text-[#93C5FD] mt-1 text-center flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                      <span>Multi-Cloud Migration & Architecture Matrix</span>
                    </div>
                  </div>
                )}

                {activeTab === "pmo" && (
                  <div className="w-full h-full flex flex-col justify-between py-2 px-3 animate-in fade-in duration-300">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-slate-200">
                        <span>Work Breakdown Structure (WBS)</span>
                        <span className="text-[#60A5FA]">100% on Baseline</span>
                      </div>
                      <div className="w-full bg-[#123B73] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#2563EB] to-[#60A5FA] h-full w-[88%]" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-slate-200">
                        <span>Earned Value Management (EVM)</span>
                        <span className="text-[#93C5FD]">CPI: 1.04 · SPI: 1.02</span>
                      </div>
                      <div className="w-full bg-[#123B73] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] h-full w-[94%]" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-slate-200">
                        <span>RAID Governance & Milestone Control</span>
                        <span className="text-[#60A5FA]">0 Critical Blockers</span>
                      </div>
                      <div className="w-full bg-[#123B73] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] h-full w-[100%]" />
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-300 text-center flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                      <span>Predictive PMO Variance & Steering Committee Controls</span>
                    </div>
                  </div>
                )}

                {activeTab === "audit" && (
                  <div className="w-full h-full flex flex-col justify-center items-center space-y-3 animate-in fade-in duration-300">
                    <div className="grid grid-cols-3 gap-2 w-full text-center">
                      <div className="p-2.5 rounded-xl bg-[#123B73]/70 border border-[#2563EB]/40">
                        <div className="text-sm font-bold text-[#60A5FA]">ISO 27001</div>
                        <div className="text-[10px] text-slate-300">93 Controls</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#123B73]/70 border border-[#2563EB]/40">
                        <div className="text-sm font-bold text-white">SOC 2 Type II</div>
                        <div className="text-[10px] text-slate-300">Trust Criteria</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#123B73]/70 border border-[#2563EB]/40">
                        <div className="text-sm font-bold text-[#93C5FD]">HIPAA</div>
                        <div className="text-[10px] text-slate-300">Safeguards</div>
                      </div>
                    </div>

                    <div className="w-full p-2.5 rounded-xl bg-[#071B38] border border-white/10 text-[11px] text-slate-200 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                        <span>Defensible Control Evidence</span>
                      </span>
                      <span className="text-[#60A5FA] font-mono">AUDIT-READY</span>
                    </div>

                    <div className="text-[10px] text-slate-300 italic text-center">
                      Gap Assessments & Evidence Binder Preparation
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 bg-[#071B38]/80 p-2.5 rounded-xl border border-white/10">
                <span className="text-slate-400">Advisory Status:</span>
                <span className="font-semibold text-[#60A5FA] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                  Active Client Engagement
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
