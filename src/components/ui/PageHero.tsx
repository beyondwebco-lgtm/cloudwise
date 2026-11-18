import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { Badge } from "./Badge";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
  highlight?: string;
  disclaimer?: string;
}

export function PageHero({
  badge,
  title,
  description,
  breadcrumbs,
  highlight,
  disclaimer,
}: PageHeroProps) {
  return (
    <div className="relative bg-[#071B38] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#123B73]">
      {/* Background subtle corporate blue lighting */}
      <div className="absolute inset-0 bg-navy-grid pointer-events-none opacity-60" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#123B73]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 mb-6"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#60A5FA] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-[#60A5FA] font-semibold" : ""}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
              </React.Fragment>
            );
          })}
        </nav>

        <div className="max-w-4xl space-y-5">
          {badge && <Badge variant="sky">{badge}</Badge>}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
            {title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed font-normal max-w-3xl">
            {description}
          </p>

          {highlight && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#123B73]/80 border border-[#2563EB]/40 text-xs font-medium text-[#93C5FD] mt-2">
              <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>{highlight}</span>
            </div>
          )}

          {disclaimer && (
            <div className="mt-6 p-4 rounded-xl bg-[#123B73]/50 border-l-4 border-[#2563EB] text-xs text-slate-200 leading-relaxed max-w-3xl">
              <strong className="text-white block mb-0.5">Advisory Notice:</strong>
              {disclaimer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
