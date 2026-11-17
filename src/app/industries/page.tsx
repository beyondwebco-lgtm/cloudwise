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
  CheckCircle2
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INDUSTRIES_DATA } from "@/data/content";

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES_DATA[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    HeartPulse: <HeartPulse className="w-6 h-6 text-[#2563EB]" />,
    Landmark: <Landmark className="w-6 h-6 text-[#2563EB]" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-[#2563EB]" />,
    Factory: <Factory className="w-6 h-6 text-[#2563EB]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#2563EB]" />,
    Briefcase: <Briefcase className="w-6 h-6 text-[#2563EB]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#2563EB]" />,
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
                        ? "bg-[#071B38] border-[#2563EB] text-white shadow-lg shadow-[#071B38]/20 scale-[1.01]"
                        : "bg-white border-[#DBE5F0] text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#2563EB]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-[#123B73]" : "bg-[#EFF6FF]"}`}>
                        {iconMap[ind.icon]}
                      </div>
                      <span className="font-bold text-sm font-heading">{ind.name}</span>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#60A5FA] translate-x-1" : "text-slate-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Industry Deep Dive Card */}
            <div className="lg:col-span-7 bg-[#071B38] text-white rounded-3xl p-8 sm:p-10 border border-[#123B73] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-7">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#123B73] border border-white/10 flex items-center justify-center">
                    {iconMap[current.icon]}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#60A5FA] uppercase tracking-wider block">
                      Vertical Profile
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {current.name}
                    </h3>
                  </div>
                </div>

                {/* Challenge Section */}
                <div className="p-4 rounded-xl bg-[#123B73]/60 border-l-4 border-[#60A5FA]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] block mb-1">
                    Primary Operational Challenge
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {current.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="p-4 rounded-xl bg-[#123B73]/60 border-l-4 border-[#2563EB]">
                  <span className="text-xs font-bold uppercase tracking-wider text-white block mb-1">
                    CloudWize Consulting Solution
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {current.solution}
                  </p>
                </div>

                {/* Core Services Engaged */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2.5">
                    Recommended Consulting Practices
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.coreServices.map((srv) => (
                      <span
                        key={srv}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#123B73] text-white border border-[#2563EB]/40"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Measurable Outcomes */}
                <div className="pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#93C5FD] block mb-3">
                    Key Transformation Outcomes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {current.outcomes.map((out) => (
                      <div
                        key={out}
                        className="p-3 rounded-lg bg-[#071B38]/90 border border-white/10 text-xs text-slate-200 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Ready to consult on this sector?</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow transition-all"
                  >
                    <span>Schedule Industry Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#93C5FD]" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 sm:py-20 bg-[#071B38] text-white text-center border-t border-[#123B73]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Discuss Your Sector Challenges
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Let's discuss your business challenges and identify practical opportunities for improvement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-md transition-all"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
