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
    "Structured Delivery Frameworks": <Workflow className="w-6 h-6 text-[#2563EB]" />,
    "Deep Technical & Operations Expertise": <Cpu className="w-6 h-6 text-[#2563EB]" />,
    "Flexible Engagement Models": <Sliders className="w-6 h-6 text-[#2563EB]" />,
    "Governance & Risk Awareness": <ShieldAlert className="w-6 h-6 text-[#2563EB]" />,
    "Pragmatic, Actionable Roadmaps": <FileCheck2 className="w-6 h-6 text-[#2563EB]" />,
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle corporate grid */}
      <div className="absolute inset-0 bg-corporate-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The CloudWize Difference"
          badgeVariant="corporate"
          title="Why Leading Organizations Choose CloudWize"
          description="We reject generic consulting fluff. Our advisory blends deep technical architecture, executive PMO discipline, and actionable roadmaps that produce measurable operational outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CLOUDWIZE.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-8 border border-[#DBE5F0] shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#DBE5F0] flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/40 transition-colors">
                  {iconMap[item.title] || <Check className="w-6 h-6 text-[#2563EB]" />}
                </div>

                <h3 className="text-xl font-bold text-[#071B38] font-heading mb-3 group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DBE5F0]/60 flex items-center gap-2 text-xs font-semibold text-[#2563EB]">
                <Check className="w-4 h-4 text-[#2563EB]" />
                <span>Verified Consulting Principle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
