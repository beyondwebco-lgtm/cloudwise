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
  const iconMap: Record<string, React.ReactNode> = {
    HeartPulse: <HeartPulse className="w-5 h-5 text-[#2563EB]" />,
    Landmark: <Landmark className="w-5 h-5 text-[#2563EB]" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#2563EB]" />,
    Factory: <Factory className="w-5 h-5 text-[#2563EB]" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#2563EB]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#2563EB]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#2563EB]" />,
    Rocket: <Rocket className="w-5 h-5 text-[#2563EB]" />,
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
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="group bg-white rounded-2xl p-6 border border-[#DBE5F0] shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#DBE5F0] flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/10 transition-colors">
                  {iconMap[ind.icon]}
                </div>

                <h3 className="text-base font-bold text-[#071B38] font-heading mb-2 group-hover:text-[#2563EB] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed mb-4">
                  <span className="font-semibold text-[#0F172A]">Challenge: </span>
                  {ind.challenge}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DBE5F0]/60 flex flex-wrap gap-1.5">
                {ind.coreServices.slice(0, 2).map((srv) => (
                  <span
                    key={srv}
                    className="text-[10px] font-medium bg-[#EFF6FF] text-[#123B73] px-2.5 py-0.5 rounded-full border border-[#DBE5F0]"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
