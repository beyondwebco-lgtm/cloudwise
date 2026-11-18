import React from "react";
import Link from "next/link";
import { 
  HeartPulse, 
  Landmark, 
  ShieldAlert, 
  Factory, 
  ShoppingBag, 
  Briefcase, 
  Cpu, 
  Rocket, 
  ArrowRight
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesPreview() {
  const iconMap: Record<string, { icon: React.ReactNode; bg: string; border: string }> = {
    HeartPulse: {
      icon: <HeartPulse className="w-5 h-5 text-[#E11D48]" />,
      bg: "bg-[#FFE4E6]",
      border: "border-[#FDA4AF]/40",
    },
    Landmark: {
      icon: <Landmark className="w-5 h-5 text-[#059669]" />,
      bg: "bg-[#D1FAE5]",
      border: "border-[#6EE7B7]/40",
    },
    ShieldAlert: {
      icon: <ShieldAlert className="w-5 h-5 text-[#2563EB]" />,
      bg: "bg-[#DBEAFE]",
      border: "border-[#93C5FD]/40",
    },
    Factory: {
      icon: <Factory className="w-5 h-5 text-[#D97706]" />,
      bg: "bg-[#FEF3C7]",
      border: "border-[#FDE68A]/40",
    },
    ShoppingBag: {
      icon: <ShoppingBag className="w-5 h-5 text-[#7C3AED]" />,
      bg: "bg-[#EDE9FE]",
      border: "border-[#C4B5FD]/40",
    },
    Briefcase: {
      icon: <Briefcase className="w-5 h-5 text-[#0284C7]" />,
      bg: "bg-[#E0F2FE]",
      border: "border-[#7DD3FC]/40",
    },
    Cpu: {
      icon: <Cpu className="w-5 h-5 text-[#0891B2]" />,
      bg: "bg-[#CFFAFE]",
      border: "border-[#67E8F9]/40",
    },
    Rocket: {
      icon: <Rocket className="w-5 h-5 text-[#9333EA]" />,
      bg: "bg-[#F3E8FF]",
      border: "border-[#D8B4FE]/40",
    },
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sector Depth"
          badgeVariant="blue"
          title="Industries We Support"
          description="Tailoring technology modernization, PMO governance, and audit readiness to the distinct operational compliance demands of your industry sector."
        />

        {/* 8 Sector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INDUSTRIES_DATA.map((ind) => {
            const conf = iconMap[ind.icon] || {
              icon: <Cpu className="w-5 h-5 text-[#2563EB]" />,
              bg: "bg-[#EFF6FF]",
              border: "border-[#DBE5F0]",
            };

            return (
              <div
                key={ind.id}
                className="group bg-white rounded-2xl p-6 border border-[#DBE5F0] shadow-subtle hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${conf.bg} border ${conf.border} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm`}>
                    {conf.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#071B38] font-heading mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-sm text-[#475569] line-clamp-3 leading-relaxed mb-4">
                    <span className="font-semibold text-[#0F172A]">Challenge: </span>
                    {ind.challenge}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DBE5F0]/60 flex flex-wrap gap-1.5">
                  {ind.coreServices.slice(0, 2).map((srv) => (
                    <span
                      key={srv}
                      className="text-xs font-medium bg-[#EFF6FF] text-[#123B73] px-2.5 py-1 rounded-full border border-[#DBE5F0]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Action Link */}
        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white border border-[#DBE5F0] hover:border-[#2563EB] text-sm font-semibold text-[#071B38] hover:text-[#2563EB] shadow-subtle hover:shadow-card-hover transition-all group"
          >
            <span>Explore All Industry Challenges & Case Applications</span>
            <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
