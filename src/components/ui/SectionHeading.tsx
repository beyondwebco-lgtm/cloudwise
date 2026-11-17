import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "cyan" | "gold" | "blue" | "slate";
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "cyan",
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
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight font-heading ${
          isDark ? "text-white" : "text-[#0B1220]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
