import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "blue" | "sky" | "corporate" | "ice" | "outline";
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "blue",
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 ${isCenter ? "flex justify-center" : ""}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.2] font-heading ${
          isDark ? "text-white" : "text-[#071B38]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-200/90" : "text-[#475569]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
