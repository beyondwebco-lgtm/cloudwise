import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "sky" | "corporate" | "ice" | "outline";
  className?: string;
}

export function Badge({ children, variant = "blue", className = "" }: BadgeProps) {
  const variantStyles = {
    blue: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/25",
    sky: "bg-[#60A5FA]/15 text-[#60A5FA] border-[#60A5FA]/30",
    corporate: "bg-[#123B73]/10 text-[#123B73] border-[#123B73]/25",
    ice: "bg-[#EFF6FF] text-[#123B73] border-[#DBE5F0]",
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
