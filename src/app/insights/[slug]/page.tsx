import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Bookmark, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { INSIGHTS_ARTICLES } from "@/data/content";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | CloudWize Insights`,
    description: article.summary,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: "2026-11-01",
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Article Header Banner */}
      <div className="bg-[#0B1220] text-white pt-16 pb-20 border-b border-[#22D3EE]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#22D3EE] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all insights</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="cyan">{article.category}</Badge>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-slate-300 font-light leading-relaxed">
              {article.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Main Article Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Executive Takeaways Box */}
        <div className="mb-14 p-8 rounded-2xl bg-[#F3F6FA] border-l-4 border-[#2563EB] shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-4">
            <Sparkles className="w-4 h-4 text-[#22D3EE]" />
            <span>Executive Takeaways & Key Principles</span>
          </div>
          <ul className="space-y-3">
            {article.takeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#172033] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Sections */}
        <div className="prose prose-slate max-w-none space-y-10">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#0B1220] tracking-tight border-b border-slate-100 pb-2">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Consulting Alignment Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0B1220] text-white border border-[#22D3EE]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold font-heading text-white">
              Need assistance executing this in your organization?
            </h4>
            <p className="text-xs text-slate-300">
              CloudWize advisors can perform a current-state diagnostic tailored to your exact environment.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] shadow transition-all"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE]" />
          </Link>
        </div>

      </div>
    </article>
  );
}
