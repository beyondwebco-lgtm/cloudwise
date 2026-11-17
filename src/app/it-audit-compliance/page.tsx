import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Users, 
  AlertTriangle,
  Lock,
  FileSpreadsheet
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_SERVICES } from "@/data/content";

const service = CORE_SERVICES.find((s) => s.id === "it-audit-compliance")!;

export const metadata: Metadata = {
  title: `${service.title} | CloudWize Consulting Services`,
  description: service.shortDesc,
  alternates: {
    canonical: "/it-audit-compliance",
  },
};

export default function ITAuditCompliancePage() {
  return (
    <div>
      <PageHero
        badge="Practice Area"
        title={service.title}
        description={service.heroSubheadline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.title },
        ]}
        highlight="ISO 27001 · SOC 2 Type I/II · HIPAA · CMMI · SSAE · ITGC"
        disclaimer={service.disclaimer}
      />

      {/* Pillars Breakdown */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Consulting Pillars"
            badgeVariant="cyan"
            title="Rigorous Information Security & Audit Readiness"
            description="We bridge the divide between theoretical compliance mandates and pragmatic engineering workflows, delivering defensible control evidence and remediation roadmaps."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22D3EE] to-[#2563EB] rounded-t-2xl" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#22D3EE]" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0B1220] mb-2">
                    {pillar.title}
                  </h3>

                  {pillar.description && (
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                  )}

                  <ul className="space-y-3 border-t border-slate-100 pt-5">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Readiness Process Deep Dive */}
      <section className="py-20 sm:py-24 bg-[#0B1220] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Methodology"
            badgeVariant="gold"
            theme="dark"
            title="Our 6-Step Audit Readiness Process"
            description="A systematic roadmap from initial scope definition through current-state assessment, gap remediation, evidence repository creation, and pre-audit dry run."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Scope Definition", desc: "Bound systems, cloud tenants, personnel, and data boundaries to prevent scope expansion." },
              { num: "02", title: "Current-State Review", desc: "Evaluate existing security documentation, configurations, access logs, and operational controls." },
              { num: "03", title: "Gap Assessment", desc: "Identify missing administrative, technical, and physical safeguards against target frameworks." },
              { num: "04", title: "Remediation Roadmap", desc: "Prioritize corrective actions with clear resource allocation, engineering owners, and deadlines." },
              { num: "05", title: "Evidence Support", desc: "Curate audit-ready evidence binders, policy crosswalks, and recurring control execution logs." },
              { num: "06", title: "Readiness Mock Review", desc: "Conduct simulation audits to evaluate team readiness and validate auditor-facing evidence." },
            ].map((st) => (
              <div
                key={st.num}
                className="bg-[#142B4A]/70 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="text-2xl font-black font-heading text-[#D4AF37] mb-2">
                  {st.num}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{st.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Target Audience */}
      <section className="py-20 sm:py-24 bg-[#F3F6FA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Deliverables */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#2563EB] mb-4">
                <FileCheck className="w-5 h-5 text-[#22D3EE]" />
                <span className="uppercase tracking-wider">Readiness Artifacts</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0B1220] mb-6">
                What We Provide
              </h3>
              <ul className="space-y-3.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="bg-[#0B1220] text-white rounded-2xl p-8 sm:p-10 border border-white/10 shadow-xl">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#D4AF37] mb-4">
                <Users className="w-5 h-5 text-[#D4AF37]" />
                <span className="uppercase tracking-wider">Applicable Scenarios</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-6">
                Who Needs This Service
              </h3>
              <ul className="space-y-3.5">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 sm:py-20 bg-[#142B4A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Discuss Your Compliance Requirements
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Let's discuss your business challenges and identify practical opportunities for improvement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] shadow-xl hover:scale-105 transition-all"
            >
              <span>Discuss Your Compliance Requirements</span>
              <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
