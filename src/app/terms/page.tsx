import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, Scale } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SITE_CONFIG } from "@/data/content";

export const metadata: Metadata = {
  title: "Terms of Use | CloudWize Consulting Services",
  description: "Terms of use template for CloudWize Consulting Services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        badge="Legal & Terms"
        title="Terms of Use"
        description="The terms and operational conditions governing the use of the CloudWize Consulting Services website and advisory content."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700">
          
          {/* Legal Notice Box */}
          <div className="p-6 rounded-2xl bg-[#FFF8E1] border-l-4 border-[#D4AF37] flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <strong>Template Notice:</strong> These Terms of Use govern general website access. Binding consulting engagements, project deliverables, payment schedules, and liability thresholds are governed by mutually executed Master Services Agreements (MSA) and Statements of Work (SOW).
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              1. Website Usage
            </h2>
            <p className="text-base leading-relaxed">
              By accessing or using the CloudWize Consulting Services website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, you should immediately cease use of this site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              2. Intellectual Property
            </h2>
            <p className="text-base leading-relaxed">
              All materials published on this website—including articles, whitepapers, methodologies, framework diagrams, branding, logos, and UI designs—are the intellectual property of CloudWize Consulting Services and are protected by applicable copyright and trademark laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              3. Informational Content & Non-Reliance
            </h2>
            <p className="text-base leading-relaxed">
              The articles, guides, checklists, and insights presented on this website are provided for general informational and educational purposes only. They do not constitute formal legal, financial, or licensed certified public accounting audit attestations. Organizations should obtain tailored advisory before implementing structural changes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              4. Consulting Engagement Limitations
            </h2>
            <p className="text-base leading-relaxed">
              CloudWize Consulting Services provides strategic consulting, project controls, workforce advisory, and audit readiness support. CloudWize is not an accredited certification body and does not issue ISO certificates or SOC attestation reports. Furthermore, consulting engagements are project-based; 24/7 managed helpdesk services are not offered.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              5. Third-Party Links & Platforms
            </h2>
            <p className="text-base leading-relaxed">
              Our website may reference third-party platforms (including Microsoft Azure, AWS, Google Cloud, and LinkedIn). Such references do not imply endorsement, affiliation, or official reseller partnership. CloudWize is not responsible for the content, privacy practices, or availability of external third-party sites.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              6. Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed">
              To the fullest extent permitted by law, CloudWize Consulting Services shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or inability to access this website or any information contained herein.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              7. Updates to the Terms
            </h2>
            <p className="text-base leading-relaxed">
              CloudWize reserves the right to modify these Terms of Use at any time. Continued use of the website following the posting of updated terms constitutes acceptance of those changes.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold font-heading text-[#0B1220]">
              8. Contact Information
            </h2>
            <p className="text-base leading-relaxed">
              For questions regarding these Terms of Use, please reach out via:
            </p>
            <div className="p-5 rounded-xl bg-[#F3F6FA] border border-slate-200 text-sm space-y-1">
              <strong className="text-[#0B1220] block">{SITE_CONFIG.name}</strong>
              <p>Email: {SITE_CONFIG.email}</p>
              <p>Phone: {SITE_CONFIG.phone}</p>
              <p>Address: {SITE_CONFIG.address}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
