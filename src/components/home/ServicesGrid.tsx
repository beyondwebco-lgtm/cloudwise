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
    "it-cloud": <Cloud className="w-6 h-6 text-[#2563EB]" />,
    "project-management": <KanbanSquare className="w-6 h-6 text-[#2563EB]" />,
    "hr-workforce": <Users className="w-6 h-6 text-[#2563EB]" />,
    "it-audit-compliance": <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
    "it-support-advisory": <LifeBuoy className="w-6 h-6 text-[#2563EB]" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Consulting Practices"
          badgeVariant="blue"
          title="Technology. Transformation. Talent. Trust."
          description="Five foundational consulting practices designed to modernize legacy architecture, streamline high-stakes project execution, build technical capacity, and ensure audit resilience."
        />

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 border border-[#DBE5F0] shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Corporate Blue Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Service Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#DBE5F0] flex items-center justify-center group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 transition-colors duration-300">
                      {iconMap[service.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#071B38] font-heading group-hover:text-[#2563EB] transition-colors mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Pillars Checklist */}
                  <div className="space-y-2.5 mb-6 border-t border-[#DBE5F0]/60 pt-5">
                    {service.pillars.slice(0, 3).map((pillar) => (
                      <div
                        key={pillar.title}
                        className="flex items-start gap-2.5 text-xs text-[#0F172A]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="font-medium">{pillar.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[#DBE5F0]/60 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors"
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

          {/* 6th Card: Custom Engagement Card */}
          <div className="bg-[#071B38] rounded-2xl p-8 border border-[#123B73] shadow-md flex flex-col justify-between text-white relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <span className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider block mb-2 font-semibold">
                Custom Scoping
              </span>
              <h3 className="text-2xl font-bold font-heading mb-3 text-white">
                Multi-Disciplinary Programs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Many client initiatives blend cloud migration, PMO controls, and compliance readiness simultaneously. We architect tailored advisory engagements to match your exact portfolio.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] border border-[#60A5FA]/30 transition-all shadow-md"
              >
                <span>Request Custom Scoping</span>
                <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
