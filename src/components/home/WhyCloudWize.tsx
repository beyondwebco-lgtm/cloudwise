import React from "react";
import { 
  Target, 
  Workflow, 
  Cpu, 
  Sliders, 
  ShieldAlert, 
  FileCheck2,
  Check
} from "lucide-react";
import { WHY_CLOUDWIZE } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyCloudWize() {
  const iconMap: Record<string, React.ReactNode> = {
    "Business-Focused Consulting": <Target className="w-6 h-6 text-[#2563EB]" />,
    "Structured Delivery Frameworks": <Workflow className="w-6 h-6 text-[#22D3EE]" />,
    "Deep Technical & Operations Expertise": <Cpu className="w-6 h-6 text-[#D4AF37]" />,
    "Flexible Engagement Models": <Sliders className="w-6 h-6 text-[#2563EB]" />,
    "Governance & Risk Awareness": <ShieldAlert className="w-6 h-6 text-[#22D3EE]" />,
    "Pragmatic, Actionable Roadmaps": <FileCheck2 className="w-6 h-6 text-[#D4AF37]" />,
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The CloudWize Difference"
          badgeVariant="gold"
          title="Why Leading Organizations Choose CloudWize"
          description="We reject generic consulting fluff. Our advisory blends deep technical architecture, executive PMO discipline, and actionable roadmaps that produce measurable operational outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CLOUDWIZE.map((item, idx) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              {/* Gold Top Accent (brand signature) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37] rounded-t-2xl group-hover:h-1.5 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1220] flex items-center justify-center border border-slate-800 shadow-sm">
                    {iconMap[item.title] || <Check className="w-6 h-6 text-[#22D3EE]" />}
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-mono text-[#0B1220]">
                      {item.metric}
                    </span>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0B1220] font-heading mb-3 group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#2563EB]">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Consulting Principle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
