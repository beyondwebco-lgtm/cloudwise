"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HeartPulse, 
  Landmark, 
  ShieldAlert, 
  Factory, 
  ShoppingBag, 
  Briefcase, 
  Cpu, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INDUSTRIES_DATA } from "@/data/content";

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES_DATA[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    HeartPulse: <HeartPulse className="w-6 h-6 text-[#22D3EE]" />,
    Landmark: <Landmark className="w-6 h-6 text-[#2563EB]" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-[#D4AF37]" />,
    Factory: <Factory className="w-6 h-6 text-[#22D3EE]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#2563EB]" />,
    Briefcase: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#22D3EE]" />,
    Rocket: <Rocket className="w-6 h-6 text-[#2563EB]" />,
  };

  const current = INDUSTRIES_DATA.find((ind) => ind.id === selectedIndustry) || INDUSTRIES_DATA[0];

  return (
    <div>
      <PageHero
        badge="Industry Vertical Solutions"
        title="Industries We Support"
        description="Every sector operates under distinct regulatory mandates, architectural complexities, and operational constraints. We adapt our technology, PMO, and compliance frameworks to solve sector-specific bottlenecks."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        highlight="Healthcare · Banking · Insurance · Manufacturing · Retail · Professional Services · SaaS · SMEs"
      />

      {/* Interactive Sector Matrix Explorer */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Advisory"
            badgeVariant="blue"
            title="Sector Challenges & Consulting Solutions"
            description="Select an industry to explore the exact operational challenges we resolve, our core service engagements, and verified business outcomes."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Sector Navigation Tabs */}
            <div className="lg:col-span-5 space-y-2.5">
              {INDUSTRIES_DATA.map((ind) => {
                const isSelected = ind.id === selectedIndustry;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`flex items-center justify-between w-full p-4 rounded-xl text-left border transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0B1220] border-[#22D3EE] text-white shadow-lg shadow-[#0B1220]/20 scale-[1.01]"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-[#142B4A]" : "bg-slate-100"}`}>
                        {iconMap[ind.icon]}
                      </div>
                      <span className="font-bold text-sm font-heading">{ind.name}</span>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#22D3EE] translate-x-1" : "text-slate-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Industry Deep Dive Card */}
            <div className="lg:col-span-7 bg-[#0B1220] text-white rounded-2xl p-8 sm:p-10 border border-[#22D3EE]/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-7">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#142B4A] border border-white/10 flex items-center justify-center">
                    {iconMap[current.icon]}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider block">
                      Vertical Profile
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {current.name}
                    </h3>
                  </div>
                </div>

                {/* Challenge Section */}
                <div className="p-4 rounded-xl bg-[#142B4A]/80 border-l-4 border-amber-400">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Primary Operational Challenge
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {current.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="p-4 rounded-xl bg-[#142B4A]/80 border-l-4 border-[#22D3EE]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#22D3EE] block mb-1">
                    CloudWize Consulting Solution
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {current.solution}
                  </p>
                </div>

                {/* Core Services Engaged */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Recommended Consulting Practices
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.coreServices.map((srv) => (
                      <span
                        key={srv}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#142B4A] text-white border border-[#22D3EE]/30"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Measurable Outcomes */}
                <div className="pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-3">
                    Key Transformation Outcomes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {current.outcomes.map((out) => (
                      <div
                        key={out}
                        className="p-3 rounded-lg bg-[#0B1220]/80 border border-white/10 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready to consult on this sector?</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] shadow transition-all"
                  >
                    <span>Schedule Industry Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE]" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 sm:py-20 bg-[#142B4A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Discuss Your Sector Challenges
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Let's discuss your business challenges and identify practical opportunities for improvement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] shadow-xl hover:scale-105 transition-all"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
