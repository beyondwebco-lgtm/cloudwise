import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Workflow,
  FileCheck2
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_VALUES, SITE_CONFIG } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us | CloudWize Consulting Services",
  description:
    "CloudWize Consulting Services is a modern consulting partner combining technology expertise, structured delivery, workforce solutions and governance advisory.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        badge="Enterprise Advisory"
        title="About CloudWize Consulting Services"
        description="A modern consulting partner combining technology depth, structured delivery discipline, workforce solutions, and governance advisory for organizations navigating digital complexity."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        highlight="Technology. Transformation. Talent. Trust."
      />

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Purpose"
            badgeVariant="blue"
            title="Our Mission & Strategic Vision"
            description="Built to bridge executive ambition with practical execution, ensuring technology investments yield measurable business value."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="relative bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-premium">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2563EB] rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-[#0B1220] flex items-center justify-center mb-6 border border-slate-800">
                <Target className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                Our Mission
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#0B1220] mb-4">
                Practical Change That Delivers
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To help organizations solve complex business challenges through practical technology consulting, structured project delivery, workforce solutions, and governance advisory.
              </p>
            </div>

            {/* Vision Card */}
            <div className="relative bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-premium">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4AF37] rounded-t-2xl" />
              <div className="w-12 h-12 rounded-xl bg-[#0B1220] flex items-center justify-center mb-6 border border-slate-800">
                <Eye className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                Our Vision
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#0B1220] mb-4">
                The Trusted Transformation Partner
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To become a trusted consulting partner for organizations seeking sustainable growth, technology modernization, operational excellence, and stronger business performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-[#F3F6FA] relative border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ethical Foundation"
            badgeVariant="gold"
            title="Our Six Core Values"
            description="The unshakeable ethical and operational principles that govern every client interaction, project deliverable, and strategic recommendation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1220] flex items-center justify-center text-[#22D3EE]">
                    <CheckCircle2 className="w-5 h-5 text-[#22D3EE]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1220] font-heading">
                    {val.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operating Philosophy"
            badgeVariant="blue"
            title="How We Work"
            description="A pragmatic consulting doctrine rooted in rigorous business discovery, structured execution, and transparent governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B1220] text-white rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/15 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#142B4A] flex items-center justify-center mb-6 text-[#22D3EE]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-white">
                  Consulting Philosophy
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Understand the business first, then recommend practical change. We discard theoretical frameworks that do not integrate into your day-to-day operational reality.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#22D3EE]">
                Pragmatism Over Theory
              </div>
            </div>

            <div className="bg-[#0B1220] text-white rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/15 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#142B4A] flex items-center justify-center mb-6 text-[#22D3EE]">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-white">
                  Engagement Approach
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Discover, assess, strategize, execute, optimize. Our five-phase progression eliminates ambiguity, keeps stakeholders aligned, and enforces measurable milestones.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#22D3EE]">
                Structured 5-Stage Cadence
              </div>
            </div>

            <div className="bg-[#0B1220] text-white rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#142B4A] flex items-center justify-center mb-6 text-[#D4AF37]">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-white">
                  Quality & Governance
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Clear scope, documented decisions, and transparent reporting. We maintain verifiable audit trails, RAID logs, and executive steering committee decks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#D4AF37]">
                Documented Decision Trails
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#142B4A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Talk to CloudWize
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Let's discuss your business challenges and identify practical opportunities for improvement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] shadow-xl hover:scale-105 transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
