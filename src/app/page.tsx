import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyCloudWize } from "@/components/home/WhyCloudWize";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { AuditReadinessQuiz } from "@/components/home/AuditReadinessQuiz";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Cloud, Project, HR and IT Audit Consulting | CloudWize Consulting Services",
  description:
    "CloudWize Consulting Services provides IT and cloud consulting, structured project management, HR consulting and IT audit readiness support for Indian and international clients.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <WhyCloudWize />
      <ProcessTimeline />
      <AuditReadinessQuiz />
      <IndustriesPreview />
      <InsightsPreview />
      <CtaSection />
    </div>
  );
}
