import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  FileCheck, 
  Users, 
  Sparkles,
  Server,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_SERVICES } from "@/data/content";

const service = CORE_SERVICES.find((s) => s.id === "it-cloud")!;

export const metadata: Metadata = {
  title: `${service.title} | CloudWize Consulting Services`,
  description: service.shortDesc,
  alternates: {
    canonical: "/it-cloud",
  },
};

export default function ITCloudPage() {
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
        highlight="Multi-Cloud Advisory · Microsoft Azure · AWS · GCP · Microsoft 365"
      />

      {/* Pillars Breakdown */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Consulting Pillars"
            badgeVariant="blue"
            title="Comprehensive Cloud Transformation Capabilities"
            description="Our independent, vendor-neutral advisory spans cloud readiness diagnostics, workload migration wave execution, and governance enforcement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#22D3EE] rounded-t-2xl" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                    <Cloud className="w-5 h-5 text-[#22D3EE]" />
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
      <section className="py-20 sm:py-24 bg-[#F3F6FA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Tangible Deliverables */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#2563EB] mb-4">
                <FileCheck className="w-5 h-5 text-[#22D3EE]" />
                <span className="uppercase tracking-wider">Concrete Deliverables</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0B1220] mb-6">
                What You Receive
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
                <span className="uppercase tracking-wider">Organizational Fit</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-6">
                Who This Practice Serves
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
            Discuss Your Cloud Strategy
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Let's discuss your business challenges and identify practical opportunities for improvement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] shadow-xl hover:scale-105 transition-all"
            >
              <span>Discuss Your Cloud Strategy</span>
              <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
