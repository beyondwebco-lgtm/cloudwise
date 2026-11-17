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
    <div className="relative bg-[#0B1220] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#22D3EE]/15">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-60" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#22D3EE]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#22D3EE] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-[#22D3EE] font-semibold" : ""}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
              </React.Fragment>
            );
          })}
        </nav>

        <div className="max-w-4xl space-y-5">
          {badge && <Badge variant="cyan">{badge}</Badge>}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
            {description}
          </p>

          {highlight && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#142B4A]/80 border border-[#22D3EE]/30 text-xs font-medium text-[#22D3EE] mt-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{highlight}</span>
            </div>
          )}

          {disclaimer && (
            <div className="mt-6 p-4 rounded-xl bg-[#142B4A]/60 border-l-4 border-[#D4AF37] text-xs text-slate-300 leading-relaxed max-w-3xl">
              <strong className="text-white block mb-0.5">Advisory Note:</strong>
              {disclaimer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
