"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Lock,
  Cpu,
  Server
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"cloud" | "pmo" | "audit">("cloud");

  return (
    <section className="relative bg-[#071B38] text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#123B73]">
      {/* Dynamic Multi-Color Background Glows */}
      <div className="absolute inset-0 bg-navy-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#06B6D4]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 left-1/2 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Multi-Color Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#123B73]/90 via-[#1E3A8A]/80 to-[#123B73]/90 border border-[#38BDF8]/40 text-xs font-semibold shadow-lg shadow-[#00F0FF]/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#A78BFA] to-[#34D399] font-bold">
                Technology · Transformation · Talent · Trust
              </span>
            </div>

            {/* Large Editorial Headline with Multi-Color Shimmer */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold tracking-tight font-heading leading-[1.12] text-white">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]">
                Technology, Talent
              </span>{" "}
              and Strategic Consulting.
            </h1>

            {/* Refined Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-[19px] text-slate-200/90 font-normal leading-relaxed max-w-2xl">
              CloudWize Consulting Services helps organizations modernize technology, deliver complex projects, strengthen compliance, and build high-performing teams through practical consulting solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0284C7] hover:from-[#1D4ED8] hover:to-[#0369A1] rounded-xl shadow-xl shadow-[#2563EB]/40 border border-[#38BDF8]/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <Sparkles className="w-4 h-4 text-[#38BDF8] animate-pulse" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#7DD3FC] group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-[#123B73]/70 hover:bg-[#123B73] rounded-xl border border-[#38BDF8]/30 hover:border-[#38BDF8] transition-all duration-200 backdrop-blur-sm"
              >
                <Layers className="w-4 h-4 text-[#38BDF8]" />
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust Indicators with Vivid Neon Accents */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>Vendor-Neutral Advisory</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Zero Shelfware Reports</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>Disciplined Governance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Futuristic Interactive Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#123B73]/95 via-[#0A254C]/95 to-[#071B38] p-6 sm:p-7 border border-[#38BDF8]/40 shadow-2xl shadow-[#000000]/80 backdrop-blur-2xl">
              
              {/* Outer Decorative Ambient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF]/20 via-[#8B5CF6]/20 to-[#10B981]/20 rounded-3xl blur-xl -z-10 pointer-events-none" />

              {/* Terminal Window Header Bar with macOS traffic lights */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444] shadow-sm shadow-[#EF4444]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-sm shadow-[#F59E0B]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-sm shadow-[#10B981]/60" />
                  <span className="ml-2 text-xs font-mono font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#E2E8F0] to-[#94A3B8]">
                    cloudwize.network.matrix
                  </span>
                </div>
                
                {/* Live Status indicator with Pulse */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#064E3B]/60 border border-[#10B981]/50 text-[11px] font-mono font-bold text-[#34D399]">
                  <Activity className="w-3.5 h-3.5 text-[#34D399] animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Colorful Futuristic Tabs */}
              <div className="grid grid-cols-3 gap-1.5 mb-5 bg-[#071B38]/90 p-1.5 rounded-xl border border-white/10 text-xs font-medium">
                <button
                  onClick={() => setActiveTab("cloud")}
                  className={`py-2 rounded-lg transition-all duration-300 font-semibold ${
                    activeTab === "cloud"
                      ? "bg-gradient-to-r from-[#2563EB] to-[#0284C7] text-white shadow-md shadow-[#0284C7]/30 border border-[#38BDF8]/40"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Cloud Modernization
                </button>
                <button
                  onClick={() => setActiveTab("pmo")}
                  className={`py-2 rounded-lg transition-all duration-300 font-semibold ${
                    activeTab === "pmo"
                      ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/30 border border-[#A78BFA]/40"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  PMO Controls
                </button>
                <button
                  onClick={() => setActiveTab("audit")}
                  className={`py-2 rounded-lg transition-all duration-300 font-semibold ${
                    activeTab === "audit"
                      ? "bg-gradient-to-r from-[#0D9488] to-[#059669] text-white shadow-md shadow-[#059669]/30 border border-[#34D399]/40"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Audit Readiness
                </button>
              </div>

              {/* Signature Visual Canvas: Dynamic Multi-Color Visualization */}
              <div className="relative h-72 w-full rounded-2xl bg-gradient-to-b from-[#061730] to-[#040E1E] border border-[#38BDF8]/30 flex items-center justify-center p-4 overflow-hidden shadow-2xl">
                
                {/* Background Grid Pattern & Radial Lights */}
                <div className="absolute inset-0 bg-navy-grid opacity-70 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />

                {/* TAB 1: CLOUD MODERNIZATION — VIBRANT & MULTI-COLORED */}
                {activeTab === "cloud" && (
                  <div className="w-full h-full flex flex-col items-center justify-between relative animate-in fade-in zoom-in-95 duration-300">
                    
                    {/* Top Floating Telemetry Chips */}
                    <div className="w-full flex items-center justify-between text-[10px] font-mono z-10 px-1">
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0F294D] border border-[#38BDF8]/40 text-[#38BDF8] shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                        Latency: 14ms
                      </span>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#2E1065] border border-[#C084FC]/40 text-[#E9D5FF] shadow-sm">
                        <Lock className="w-3 h-3 text-[#C084FC]" />
                        AES-256 Encrypted
                      </span>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#064E3B] border border-[#34D399]/40 text-[#6EE7B7] shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-[#34D399]" />
                        99.99% SLA
                      </span>
                    </div>

                    {/* SVG Graphic with Multi-Color Gradient Cloud, Bars, and Energy Pulses */}
                    <svg viewBox="0 0 360 160" className="w-full h-44 my-auto">
                      <defs>
                        {/* Glow Filter */}
                        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>

                        {/* Multi-Color Cloud Stroke Gradient */}
                        <linearGradient id="cloudStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00F0FF" />
                          <stop offset="50%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>

                        {/* Cloud Frosted Fill Gradient */}
                        <linearGradient id="cloudFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.45" />
                          <stop offset="50%" stopColor="#0F172A" stopOpacity="0.75" />
                          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
                        </linearGradient>

                        {/* Bar 1: AWS / Migration Orange/Gold Gradient */}
                        <linearGradient id="barOrange" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#EA580C" />
                          <stop offset="100%" stopColor="#FBBF24" />
                        </linearGradient>

                        {/* Bar 2: Azure Cyan/Aqua Gradient */}
                        <linearGradient id="barCyan" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#0284C7" />
                          <stop offset="100%" stopColor="#00F0FF" />
                        </linearGradient>

                        {/* Bar 3: Royal Blue to Indigo Gradient */}
                        <linearGradient id="barBlue" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#4338CA" />
                          <stop offset="100%" stopColor="#60A5FA" />
                        </linearGradient>

                        {/* Bar 4: GCP / Kubernetes Emerald Gradient */}
                        <linearGradient id="barEmerald" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#34D399" />
                        </linearGradient>
                      </defs>

                      {/* Main Cloud Crest Silhouette with Multi-Color Neon Stroke */}
                      <path
                        d="M 85 135 C 55 135 38 118 38 95 C 38 76 52 62 70 58 C 76 35 98 18 126 18 C 152 18 174 32 182 54 C 200 56 215 70 215 90 C 215 112 198 132 174 135 Z"
                        fill="url(#cloudFillGrad)"
                        stroke="url(#cloudStrokeGrad)"
                        strokeWidth="3"
                        className="neon-pulse"
                      />

                      {/* Moving Energy Circuit Streams (Flowing Neon Cyan & Purple) */}
                      <path
                        d="M 58 118 C 70 85 92 62 130 62 C 154 62 172 74 182 92"
                        stroke="#00F0FF"
                        strokeWidth="2.5"
                        fill="none"
                        className="flowing-circuit"
                      />
                      <path
                        d="M 48 130 C 65 105 105 92 152 88 C 185 85 240 98 280 75"
                        stroke="#C084FC"
                        strokeWidth="2.5"
                        fill="none"
                        className="flowing-circuit"
                      />

                      {/* Connected Satellite Constellation Network Lines */}
                      <path
                        d="M 126 18 L 220 32 L 280 75 L 320 125"
                        stroke="#38BDF8"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        fill="none"
                      />

                      {/* The 4 Colorful Telemetry Workload Pillars */}
                      {/* Bar 1 (Orange/Gold) */}
                      <rect x="86" y="95" width="18" height="40" rx="4" fill="url(#barOrange)" filter="url(#neonGlow)" />
                      <circle cx="95" cy="95" r="3.5" fill="#FEF08A" />

                      {/* Bar 2 (Radiant Cyan) */}
                      <rect x="112" y="72" width="18" height="63" rx="4" fill="url(#barCyan)" filter="url(#neonGlow)" />
                      <circle cx="121" cy="72" r="3.5" fill="#E0F2FE" />

                      {/* Bar 3 (Royal/Electric Blue) */}
                      <rect x="138" y="52" width="18" height="83" rx="4" fill="url(#barBlue)" filter="url(#neonGlow)" />
                      <circle cx="147" cy="52" r="3.5" fill="#FFFFFF" />

                      {/* Bar 4 (Mint Emerald) */}
                      <rect x="164" y="82" width="18" height="53" rx="4" fill="url(#barEmerald)" filter="url(#neonGlow)" />
                      <circle cx="173" cy="82" r="3.5" fill="#D1FAE5" />

                      {/* Multi-Color Satellite Orbital Nodes */}
                      {/* Node 1: Azure Cyan */}
                      <circle cx="220" cy="32" r="6" fill="#00F0FF" filter="url(#neonGlow)" />
                      <circle cx="220" cy="32" r="10" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 3" className="animate-spin" />

                      {/* Node 2: AWS Vibrant Amber */}
                      <circle cx="280" cy="75" r="7" fill="#F59E0B" filter="url(#neonGlow)" />
                      <circle cx="280" cy="75" r="12" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Node 3: GCP Emerald */}
                      <circle cx="320" cy="125" r="5" fill="#10B981" filter="url(#neonGlow)" />
                      <circle cx="320" cy="125" r="9" fill="none" stroke="#10B981" strokeWidth="1" />

                      {/* Inner Cloud Node: Violet */}
                      <circle cx="182" cy="92" r="5.5" fill="#A855F7" filter="url(#neonGlow)" />
                      <circle cx="130" cy="62" r="4.5" fill="#38BDF8" />
                    </svg>

                    {/* Bottom Indicator with Multi-Colored Accents */}
                    <div className="w-full flex items-center justify-between text-[11px] font-mono pt-1 border-t border-white/10">
                      <span className="flex items-center gap-1.5 text-[#38BDF8]">
                        <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                        Multi-Cloud Matrix
                      </span>
                      <span className="text-slate-400">
                        Workloads: <span className="text-[#34D399] font-bold">140+ Migrated</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* TAB 2: PMO CONTROLS — VIBRANT EXECUTIVE PROGRESS GAUGES */}
                {activeTab === "pmo" && (
                  <div className="w-full h-full flex flex-col justify-between py-1 px-2 animate-in fade-in zoom-in-95 duration-300">
                    
                    {/* Top Metric Cards */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#1E1B4B] to-[#0F172A] border border-[#818CF8]/40 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#A78BFA] block">Cost Performance (CPI)</span>
                          <span className="text-sm font-bold font-mono text-[#34D399]">1.08 Under Budget</span>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-[#34D399]/20 flex items-center justify-center text-[#34D399] font-bold">
                          ✓
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0F294D] to-[#0F172A] border border-[#38BDF8]/40 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#38BDF8] block">Schedule Performance (SPI)</span>
                          <span className="text-sm font-bold font-mono text-[#38BDF8]">1.04 Ahead of Schedule</span>
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] font-bold">
                          ↑
                        </div>
                      </div>
                    </div>

                    {/* Glowing Progress Streams */}
                    <div className="space-y-3 py-1">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-200 mb-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                            Critical Path (WBS Baseline)
                          </span>
                          <span className="text-[#00F0FF] font-bold">94% Complete</span>
                        </div>
                        <div className="w-full bg-[#071B38] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#38BDF8]/30">
                          <div className="bg-gradient-to-r from-[#0284C7] via-[#00F0FF] to-[#34D399] h-full rounded-full w-[94%] shadow-sm shadow-[#00F0FF]/50" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-200 mb-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                            RAID Risk Mitigation Velocity
                          </span>
                          <span className="text-[#C084FC] font-bold">0 High Blockers</span>
                        </div>
                        <div className="w-full bg-[#071B38] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#A855F7]/30">
                          <div className="bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#C084FC] h-full rounded-full w-[100%] shadow-sm shadow-[#A855F7]/50" />
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-300 text-center flex items-center justify-center gap-2 pt-1 border-t border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                      <span>Earned Value Management (EVM) Live Steering Committee Controls</span>
                    </div>
                  </div>
                )}

                {/* TAB 3: AUDIT READINESS — HIGH-SECURITY CYBER SHIELD */}
                {activeTab === "audit" && (
                  <div className="w-full h-full flex flex-col justify-between items-center py-1 animate-in fade-in zoom-in-95 duration-300">
                    
                    {/* 3 Framework Cards with Vivid Border Highlights */}
                    <div className="grid grid-cols-3 gap-2 w-full text-center">
                      <div className="p-2.5 rounded-xl bg-gradient-to-b from-[#0F294D] to-[#071B38] border border-[#00F0FF]/50 shadow-md">
                        <div className="text-xs font-bold text-[#00F0FF]">ISO 27001</div>
                        <div className="text-[10px] text-slate-300 mt-0.5">93 Controls</div>
                        <span className="inline-block mt-1 px-1.5 py-0.2 bg-[#00F0FF]/20 text-[#38BDF8] text-[9px] rounded font-mono">100% READY</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-gradient-to-b from-[#2E1065] to-[#071B38] border border-[#A855F7]/50 shadow-md">
                        <div className="text-xs font-bold text-[#C084FC]">SOC 2 Type II</div>
                        <div className="text-[10px] text-slate-300 mt-0.5">Trust Criteria</div>
                        <span className="inline-block mt-1 px-1.5 py-0.2 bg-[#A855F7]/20 text-[#E9D5FF] text-[9px] rounded font-mono">AUDITED</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-gradient-to-b from-[#064E3B] to-[#071B38] border border-[#34D399]/50 shadow-md">
                        <div className="text-xs font-bold text-[#34D399]">HIPAA Security</div>
                        <div className="text-[10px] text-slate-300 mt-0.5">Safeguards</div>
                        <span className="inline-block mt-1 px-1.5 py-0.2 bg-[#10B981]/20 text-[#A7F3D0] text-[9px] rounded font-mono">COMPLIANT</span>
                      </div>
                    </div>

                    {/* Cyber Defense Centerpiece */}
                    <div className="w-full p-3 rounded-xl bg-gradient-to-r from-[#0C4A6E]/80 via-[#1E1B4B]/80 to-[#064E3B]/80 border border-white/20 text-xs text-white flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#34D399]" />
                        <div>
                          <div className="font-bold text-white flex items-center gap-1.5">
                            Defensible Evidence Binder
                            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-ping" />
                          </div>
                          <div className="text-[10px] text-slate-300">Continuous Audit Logging & Access Artifacts</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#34D399] text-[#064E3B] font-mono font-black text-xs shadow-md">
                        PASS
                      </span>
                    </div>

                    <div className="text-[10px] text-slate-400 italic text-center">
                      Pre-Audit Mock Inspections · Control Remediation · Evidence Repositories
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Feature Pill with Multi-Color Pulse */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 bg-[#071B38]/90 p-3 rounded-xl border border-white/10">
                <span className="text-slate-400">Advisory Status:</span>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#A78BFA] to-[#34D399] flex items-center gap-2 font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                  </span>
                  Active Client Engagement · Live Telemetry
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
