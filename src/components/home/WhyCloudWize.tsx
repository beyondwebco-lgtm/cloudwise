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
  const iconMap: Record<string, { icon: React.ReactNode; bg: string; border: string; text: string }> = {
    "Business-Focused Consulting": {
      icon: <Target className="w-6 h-6 text-[#0284C7]" />,
      bg: "bg-[#E0F2FE]",
      border: "border-[#38BDF8]/40",
      text: "text-[#0284C7]",
    },
    "Structured Delivery Frameworks": {
      icon: <Workflow className="w-6 h-6 text-[#4F46E5]" />,
      bg: "bg-[#EEF2FF]",
      border: "border-[#818CF8]/40",
      text: "text-[#4F46E5]",
    },
    "Deep Technical & Operations Expertise": {
      icon: <Cpu className="w-6 h-6 text-[#0D9488]" />,
      bg: "bg-[#CCFBF1]",
      border: "border-[#2DD4BF]/40",
      text: "text-[#0D9488]",
    },
    "Flexible Engagement Models": {
      icon: <Sliders className="w-6 h-6 text-[#2563EB]" />,
      bg: "bg-[#EFF6FF]",
      border: "border-[#60A5FA]/40",
      text: "text-[#2563EB]",
    },
    "Governance & Risk Awareness": {
      icon: <ShieldAlert className="w-6 h-6 text-[#7C3AED]" />,
      bg: "bg-[#F3E8FF]",
      border: "border-[#C084FC]/40",
      text: "text-[#7C3AED]",
    },
    "Pragmatic, Actionable Roadmaps": {
      icon: <FileCheck2 className="w-6 h-6 text-[#D97706]" />,
      bg: "bg-[#FEF3C7]",
      border: "border-[#FBBF24]/40",
      text: "text-[#D97706]",
    },
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
          {WHY_CLOUDWIZE.map((item) => {
            const conf = iconMap[item.title] || {
              icon: <Check className="w-6 h-6 text-[#2563EB]" />,
              bg: "bg-[#EFF6FF]",
              border: "border-[#DBE5F0]",
              text: "text-[#2563EB]",
            };

            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-8 border border-[#DBE5F0] shadow-subtle hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${conf.bg} border ${conf.border} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm`}>
                    {conf.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#071B38] font-heading mb-3 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t border-[#DBE5F0]/60 flex items-center gap-2 text-xs sm:text-[13px] font-semibold ${conf.text}`}>
                  <Check className="w-4 h-4" />
                  <span>Verified Consulting Principle</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
