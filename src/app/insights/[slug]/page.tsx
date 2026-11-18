import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight
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
      <div className="bg-[#071B38] text-white pt-16 pb-20 border-b border-[#123B73] relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-grid opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#60A5FA] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all insights</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="sky">{article.category}</Badge>
              <span className="flex items-center gap-1.5 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-200/90 font-normal leading-relaxed">
              {article.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Main Article Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Executive Takeaways Box */}
        <div className="mb-14 p-8 rounded-2xl bg-[#EFF6FF] border-l-4 border-[#2563EB] shadow-subtle">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Executive Takeaways & Key Principles</span>
          </div>
          <ul className="space-y-3">
            {article.takeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#0F172A] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Sections */}
        <div className="max-w-none space-y-10">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#071B38] tracking-tight border-b border-[#DBE5F0]/60 pb-2">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-[17px] text-[#334155] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Consulting Alignment Notice */}
        <div className="mt-16 p-8 rounded-2xl bg-[#071B38] text-white border border-[#123B73] flex flex-col sm:flex-row items-center justify-between gap-6">
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
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow transition-all"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#93C5FD]" />
          </Link>
        </div>

      </div>
    </article>
  );
}
