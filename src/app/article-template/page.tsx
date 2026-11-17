import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Article Template | CloudWize Consulting Services",
  description: "Template for future insight articles. Draft content, no statistics or sources.",
  alternates: {
    canonical: "/article-template",
  },
};

export default function ArticleTemplatePage() {
  return (
    <div>
      <PageHero
        badge="Editorial Standard"
        title="Article Template"
        description="Template for future insight articles. Draft content, no unverified statistics or uncredited sources."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "Article Template" },
        ]}
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#2563EB] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights</span>
            </Link>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl bg-[#F3F6FA] border border-slate-200 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="gold">Draft Template</Badge>
              <span className="text-xs text-slate-500 font-mono">Standard Submission</span>
            </div>

            <h2 className="text-3xl font-bold font-heading text-[#0B1220]">
              Article Title Placeholder
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Write your introduction here. Add only verified facts and cite authoritative sources. Every publication must adhere to CloudWize technical and governance standards.
            </p>

            <div className="border-t border-slate-200 pt-6 space-y-4">
              <h3 className="text-xl font-bold font-heading text-[#0B1220]">
                Section Heading
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Body text for your technical guide, regulatory breakdown, or project methodology review. Ensure takeaways and actionable recommendations are highlighted clearly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
