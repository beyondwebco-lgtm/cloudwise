import React from "react";
import Link from "next/link";
import { 
  Cloud, 
  KanbanSquare, 
  Users, 
  ShieldCheck, 
  LifeBuoy, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { CORE_SERVICES } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    "it-cloud": <Cloud className="w-6 h-6 text-[#22D3EE]" />,
    "project-management": <KanbanSquare className="w-6 h-6 text-[#2563EB]" />,
    "hr-workforce": <Users className="w-6 h-6 text-[#D4AF37]" />,
    "it-audit-compliance": <ShieldCheck className="w-6 h-6 text-[#22D3EE]" />,
    "it-support-advisory": <LifeBuoy className="w-6 h-6 text-[#2563EB]" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F3F6FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Practices"
          badgeVariant="blue"
          title="Technology. Transformation. Talent. Trust."
          description="Five foundational consulting practices designed to modernize legacy architecture, streamline high-stakes project execution, build technical capacity, and ensure audit resilience."
        />

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => {
            const isFullSpan = index === 3 || index === 4;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFullSpan ? "lg:col-span-1" : ""
                }`}
              >
                {/* Gold Accent Top Bar (Matching brand identity) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#22D3EE] to-[#2563EB] group-hover:h-1.5 transition-all duration-300" />

                <div>
                  {/* Icon & Service Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1220] flex items-center justify-center border border-slate-800 shadow-md group-hover:scale-105 transition-transform duration-300">
                      {iconMap[service.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#0B1220] font-heading group-hover:text-[#2563EB] transition-colors mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Pillars Checklist */}
                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-5">
                    {service.pillars.slice(0, 3).map((pillar) => (
                      <div
                        key={pillar.title}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="font-medium">{pillar.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:text-[#1d4ed8] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    Consulting
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Interactive Consultation Callout */}
          <div className="bg-gradient-to-br from-[#0B1220] to-[#142B4A] rounded-2xl p-8 border border-[#22D3EE]/30 shadow-premium flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#22D3EE]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-wider block mb-2">
                Custom Engagements
              </span>
              <h3 className="text-2xl font-bold font-heading mb-3 text-white">
                Have a Complex or Hybrid Challenge?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Many client initiatives blend cloud migration, PMO controls, and compliance readiness simultaneously. We architect tailored advisory engagements to match your exact portfolio.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] border border-[#22D3EE]/30 transition-all shadow-lg"
              >
                <span>Request Custom Scoping</span>
                <ArrowRight className="w-4 h-4 text-[#22D3EE]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
