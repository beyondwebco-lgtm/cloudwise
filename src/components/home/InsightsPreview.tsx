import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { INSIGHTS_ARTICLES } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function InsightsPreview() {
  const featuredArticles = INSIGHTS_ARTICLES.slice(0, 3);

  const categoryBadgeVariant = (cat: string) => {
    switch (cat) {
      case "Cloud":
        return "cyan";
      case "Compliance":
        return "gold";
      case "Project Management":
        return "blue";
      default:
        return "slate";
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge variant="blue" className="mb-3">
              Thought Leadership
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1220] font-heading tracking-tight">
              Executive Insights & Technical Guides
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Practical analysis on enterprise cloud adoption, PMO variance management, audit readiness frameworks, and technical workforce strategies.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] group"
            >
              <span>View all 6 publications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="group bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={categoryBadgeVariant(article.category) as any}>
                    {article.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1220] font-heading group-hover:text-[#2563EB] transition-colors leading-snug mb-3">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] group-hover:text-[#1d4ed8]"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read publication</span>
                </Link>
                <span className="text-[11px] text-slate-400">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
