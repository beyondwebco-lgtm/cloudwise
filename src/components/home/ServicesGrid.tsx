import React from "react";
import Link from "next/link";
import { 
  Cloud, 
  KanbanSquare, 
  Users, 
  ShieldCheck, 
  LifeBuoy, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { CORE_SERVICES } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  const serviceTheme: Record<string, {
    icon: React.ReactNode;
    bg: string;
    border: string;
    topBar: string;
    text: string;
  }> = {
    "it-cloud": {
      icon: <Cloud className="w-6 h-6 text-[#0284C7]" />,
      bg: "bg-[#E0F2FE]",
      border: "border-[#38BDF8]/40",
      topBar: "from-[#0284C7] to-[#00F0FF]",
      text: "text-[#0284C7]",
    },
    "project-management": {
      icon: <KanbanSquare className="w-6 h-6 text-[#4F46E5]" />,
      bg: "bg-[#EEF2FF]",
      border: "border-[#818CF8]/40",
      topBar: "from-[#4F46E5] to-[#818CF8]",
      text: "text-[#4F46E5]",
    },
    "hr-workforce": {
      icon: <Users className="w-6 h-6 text-[#0D9488]" />,
      bg: "bg-[#CCFBF1]",
      border: "border-[#2DD4BF]/40",
      topBar: "from-[#0D9488] to-[#2DD4BF]",
      text: "text-[#0D9488]",
    },
    "it-audit-compliance": {
      icon: <ShieldCheck className="w-6 h-6 text-[#7C3AED]" />,
      bg: "bg-[#F3E8FF]",
      border: "border-[#C084FC]/40",
      topBar: "from-[#7C3AED] to-[#C084FC]",
      text: "text-[#7C3AED]",
    },
    "it-support-advisory": {
      icon: <LifeBuoy className="w-6 h-6 text-[#2563EB]" />,
      bg: "bg-[#EFF6FF]",
      border: "border-[#60A5FA]/40",
      topBar: "from-[#2563EB] to-[#60A5FA]",
      text: "text-[#2563EB]",
    },
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Consulting Practices"
          badgeVariant="blue"
          title="Technology. Transformation. Talent. Trust."
          description="Five foundational consulting practices designed to modernize legacy architecture, streamline high-stakes project execution, build technical capacity, and ensure audit resilience."
        />

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => {
            const theme = serviceTheme[service.id];
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 border border-[#DBE5F0] shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Multi-Color Gradient Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.topBar} transition-all duration-300`} />

                <div>
                  {/* Icon & Service Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${theme.bg} border ${theme.border} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                      {theme.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-600">
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

                  {/* Pillars Checklist with Vibrant Checkmarks */}
                  <div className="space-y-2.5 mb-6 border-t border-[#DBE5F0]/60 pt-5">
                    {service.pillars.slice(0, 3).map((pillar) => (
                      <div
                        key={pillar.title}
                        className="flex items-start gap-2.5 text-xs text-[#0F172A]"
                      >
                        <CheckCircle2 className={`w-4 h-4 ${theme.text} shrink-0 mt-0.5`} />
                        <span className="font-medium">{pillar.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[#DBE5F0]/60 flex items-center justify-between">
                  <Link
                    href={`/${service.slug}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.text} hover:underline transition-colors`}
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

          {/* 6th Card: Multi-Disciplinary Program Card with Vibrant Gradients */}
          <div className="bg-gradient-to-br from-[#071B38] via-[#0D274D] to-[#123B73] rounded-2xl p-8 border border-[#38BDF8]/40 shadow-xl flex flex-col justify-between text-white relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#00F0FF]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Scoping</span>
              </div>

              <h3 className="text-2xl font-bold font-heading mb-3 text-white">
                Multi-Disciplinary Programs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Many client initiatives blend cloud migration, PMO controls, and compliance readiness simultaneously. We architect tailored advisory engagements to match your exact portfolio.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#0284C7] hover:from-[#1D4ED8] hover:to-[#0369A1] border border-[#38BDF8]/40 transition-all shadow-lg shadow-[#2563EB]/30 hover:scale-[1.02]"
              >
                <span>Request Custom Scoping</span>
                <ArrowRight className="w-4 h-4 text-[#7DD3FC]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
