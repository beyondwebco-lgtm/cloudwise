import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  LifeBuoy, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Users
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_SERVICES } from "@/data/content";

const service = CORE_SERVICES.find((s) => s.id === "it-support-advisory")!;

export const metadata: Metadata = {
  title: `${service.title} | CloudWize Consulting Services`,
  description: service.shortDesc,
  alternates: {
    canonical: "/it-support-advisory",
  },
};

export default function ITSupportAdvisoryPage() {
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
        highlight="ITSM Advisory · Service Desk Optimization · Vendor Governance · Disaster Recovery"
        disclaimer={service.disclaimer}
      />

      {/* Pillars Breakdown */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Consulting Pillars"
            badgeVariant="blue"
            title="Strategic IT Operations & Service Architecture"
            description="We transform ad-hoc, reactive internal support into structured, scalable IT operations with ITIL alignment and vendor accountability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="relative bg-white rounded-2xl p-8 border border-[#DBE5F0] shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                    <LifeBuoy className="w-5 h-5 text-[#2563EB]" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#071B38] mb-2">
                    {pillar.title}
                  </h3>

                  {pillar.description && (
                    <p className="text-sm text-[#475569] mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                  )}

                  <ul className="space-y-3 border-t border-[#DBE5F0]/60 pt-5">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs text-[#0F172A]">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
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

      {/* Deliverables & Target Audience */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-y border-[#DBE5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Deliverables */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DBE5F0] shadow-subtle">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#2563EB] mb-4">
                <FileCheck className="w-5 h-5 text-[#2563EB]" />
                <span className="uppercase tracking-wider">Operational Artifacts</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#071B38] mb-6">
                What We Deliver
              </h3>
              <ul className="space-y-3.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="bg-[#071B38] text-white rounded-2xl p-8 sm:p-10 border border-[#123B73] shadow-card">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#60A5FA] mb-4">
                <Users className="w-5 h-5 text-[#60A5FA]" />
                <span className="uppercase tracking-wider">Who Needs This</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-6">
                Ideal Organizational Scenarios
              </h3>
              <ul className="space-y-3.5">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 sm:py-20 bg-[#071B38] text-white text-center border-t border-[#123B73]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Discuss Your IT Requirements
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Let's discuss your business challenges and identify practical opportunities for improvement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-md transition-all"
            >
              <span>Discuss Your IT Requirements</span>
              <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
