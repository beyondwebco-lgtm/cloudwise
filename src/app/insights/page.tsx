"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight, BookOpen, Sparkles, Filter } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { INSIGHTS_ARTICLES, InsightArticle } from "@/data/content";
import { Badge } from "@/components/ui/Badge";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Cloud", "Project Management", "Compliance", "HR"];

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div>
      <PageHero
        badge="Executive Knowledge Hub"
        title="Insights & Thought Leadership"
        description="Pragmatic analysis and battle-tested guidance on enterprise cloud migration, PMO controls, ISO 27001 / SOC 2 audit readiness, and technical workforce architecture."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        highlight="Published Research · Technical Checklists · Compliance Blueprints"
      />

      <section className="py-20 sm:py-24 bg-[#F3F6FA] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search & Category Filters */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-[#0B1220] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F3F6FA] border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={categoryBadgeVariant(article.category) as any}>
                        {article.category}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1220] font-heading group-hover:text-[#2563EB] transition-colors leading-snug mb-3">
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
                      <span>Read Publication</span>
                    </Link>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {article.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-base text-slate-500">No articles match your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-[#2563EB] hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Draft Article Template Link (Preserving article-template.html) */}
          <div className="mt-16 text-center border-t border-slate-200 pt-8">
            <Link
              href="/article-template"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-[#0B1220] transition-colors"
            >
              <span>View Editorial Article Draft Template</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
