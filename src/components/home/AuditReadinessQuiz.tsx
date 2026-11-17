"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  AlertCircle
} from "lucide-react";

export function AuditReadinessQuiz() {
  const [stage, setStage] = useState<string>("planning");
  const [framework, setFramework] = useState<string>("soc2");
  const [scale, setScale] = useState<string>("mid");

  const getRecommendation = () => {
    if (framework === "soc2") {
      return {
        title: "SOC 2 Type I/II Readiness & Control Scoping",
        focus: "Trust Services Criteria (Security, Confidentiality) & Evidence Repository",
        timeframe: "3 to 6 months to audit-readiness",
        serviceSlug: "it-audit-compliance",
        advisoryScope: "Gap assessment, ISMS/SOC 2 policy generation, auditor evidence binders, and mock fieldwork review.",
      };
    } else if (framework === "iso27001") {
      return {
        title: "ISO/IEC 27001:2022 ISMS Implementation",
        focus: "ISMS Scope Definition, Risk Assessment & Statement of Applicability (SoA)",
        timeframe: "4 to 8 months to Stage 1 & 2 readiness",
        serviceSlug: "it-audit-compliance",
        advisoryScope: "Establishment of the 93 Annex A controls, mandatory internal audits, and executive management review.",
      };
    } else if (framework === "cloud") {
      return {
        title: "Cloud Migration Architecture & Landing Zone Blueprint",
        focus: "Dependency Analysis, Wave Planning & FinOps Cost Governance",
        timeframe: "6 to 12 weeks for wave 1 cutover",
        serviceSlug: "it-cloud",
        advisoryScope: "Architecture review, identity federation (Entra ID/IAM), cutover runbooks, and Day-2 hypercare.",
      };
    } else {
      return {
        title: "Enterprise PMO & Project Governance Overhaul",
        focus: "WBS Schedules, EVM Variance Controls & RAID Visibility",
        timeframe: "4 to 8 weeks for PMO activation",
        serviceSlug: "project-management",
        advisoryScope: "Executive dashboards, resource capacity balancing, and multi-vendor delivery governance.",
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-20 sm:py-28 bg-[#071B38] text-white relative overflow-hidden border-t border-[#123B73]">
      <div className="absolute inset-0 bg-navy-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B73]/70 border border-[#2563EB]/40 text-xs font-semibold text-[#93C5FD] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Advisory Diagnostic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
            Consulting Readiness & Scope Diagnostic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Select your organization's immediate strategic priority to calculate an indicative advisory framework and roadmap scope.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#123B73]/90 via-[#0E2F5C]/80 to-[#071B38] rounded-3xl border border-[#2563EB]/40 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1: Framework Target */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-2.5">
                1. Strategic Focus
              </label>
              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
                className="w-full bg-[#071B38] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#60A5FA]"
              >
                <option value="soc2">SOC 2 Type I/II Readiness</option>
                <option value="iso27001">ISO 27001:2022 ISMS</option>
                <option value="cloud">Cloud / M365 Migration</option>
                <option value="pmo">PMO Delivery Controls</option>
              </select>
            </div>

            {/* Step 2: Current Stage */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-2.5">
                2. Current State
              </label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full bg-[#071B38] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#60A5FA]"
              >
                <option value="planning">Initial Discovery & Scoping</option>
                <option value="in_progress">Initiative in Flight / Facing Bottlenecks</option>
                <option value="pre_audit">Pre-Audit / Gap Assessment Required</option>
              </select>
            </div>

            {/* Step 3: Organization Scale */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-2.5">
                3. Company Size
              </label>
              <select
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                className="w-full bg-[#071B38] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#60A5FA]"
              >
                <option value="startup">Growth Startup (&lt;50 team)</option>
                <option value="mid">Mid-Market (50–500 team)</option>
                <option value="enterprise">Enterprise (500+ team)</option>
              </select>
            </div>
          </div>

          {/* Diagnostic Result Output Box */}
          <div className="rounded-2xl bg-[#071B38]/95 border border-white/10 p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-wider block font-semibold">
                  Recommended Advisory Path
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                  {recommendation.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-[#93C5FD] px-3.5 py-1.5 rounded-full bg-[#123B73] border border-[#2563EB]/40">
                {recommendation.timeframe}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200">
              <div className="space-y-1.5">
                <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  Primary Architectural Focus
                </span>
                <p className="font-medium text-white">{recommendation.focus}</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  Consulting Deliverables Included
                </span>
                <p className="text-slate-300">{recommendation.advisoryScope}</p>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <AlertCircle className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Advisory and readiness scope only. No accredited certs issued.</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/${recommendation.serviceSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:text-white transition-colors"
                >
                  <span>Explore Practice Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow transition-all"
                >
                  <span>Schedule Scoping Call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
