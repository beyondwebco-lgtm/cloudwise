"use client";

import React, { useState } from "react";
import { 
  Compass, 
  Search, 
  Map, 
  Zap, 
  LineChart, 
  ArrowRight,
  FileCheck,
  ChevronRight
} from "lucide-react";
import { ENGAGEMENT_STEPS } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Compass key="1" className="w-5 h-5" />,
    <Search key="2" className="w-5 h-5" />,
    <Map key="3" className="w-5 h-5" />,
    <Zap key="4" className="w-5 h-5" />,
    <LineChart key="5" className="w-5 h-5" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B1220] text-white relative overflow-hidden border-y border-[#22D3EE]/15">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Methodology"
          badgeVariant="cyan"
          theme="dark"
          title="Our 5-Stage Engagement Process"
          description="A disciplined, transparent consulting framework that takes initiatives from high-level discovery through rigorous assessment, strategic roadmapping, flawless execution, and long-term optimization."
        />

        {/* Desktop Interactive Stepper */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-12">
          {ENGAGEMENT_STEPS.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-300 relative ${
                  isSelected
                    ? "bg-[#142B4A] border-[#22D3EE] shadow-lg shadow-[#22D3EE]/15 scale-[1.02]"
                    : "bg-[#0B1220]/80 border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Gold Counter (preserves original counter style from legacy style.css) */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black font-heading ${
                    isSelected ? "text-[#D4AF37]" : "text-slate-500"
                  }`}>
                    {item.step}
                  </span>
                  <div className={`p-2 rounded-lg ${
                    isSelected ? "bg-[#2563EB] text-white" : "bg-white/5 text-slate-400"
                  }`}>
                    {stepIcons[idx]}
                  </div>
                </div>

                <div className="text-base font-bold text-white mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-slate-400 line-clamp-1">
                  {item.title}
                </div>

                {isSelected && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#142B4A] border-r border-b border-[#22D3EE] rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#142B4A]/90 to-[#0B1220] border border-[#22D3EE]/30 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-[#D4AF37] px-3 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                  STAGE {ENGAGEMENT_STEPS[activeStep].step}
                </span>
                <span className="text-xs text-[#22D3EE] uppercase tracking-wider font-semibold">
                  Standard Operating Cadence
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {ENGAGEMENT_STEPS[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {ENGAGEMENT_STEPS[activeStep].desc}
              </p>

              <div className="pt-2 flex items-center gap-3 text-sm text-[#22D3EE]">
                <FileCheck className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-medium">Core Deliverable:</span>
                <span className="underline decoration-[#22D3EE]/50 underline-offset-4">
                  {ENGAGEMENT_STEPS[activeStep].deliverable}
                </span>
              </div>
            </div>

            {/* Stepper Quick Navigation for Mobile & Extra Controls */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Phase Progression
              </span>
              <div className="space-y-2">
                {ENGAGEMENT_STEPS.map((s, i) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeStep === i
                        ? "bg-[#2563EB] text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>
                      {s.step}. {s.name}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 ${activeStep === i ? "text-white" : "text-slate-600"}`} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
