import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "gold" | "blue" | "slate" | "outline";
  className?: string;
}

export function Badge({ children, variant = "cyan", className = "" }: BadgeProps) {
  const variantStyles = {
    cyan: "bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/30",
    gold: "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30",
    blue: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/30",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-transparent text-slate-300 border-white/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
