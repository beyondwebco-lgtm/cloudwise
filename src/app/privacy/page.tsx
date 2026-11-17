import React from "react";
import { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SITE_CONFIG } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy | CloudWize Consulting Services",
  description: "Privacy policy template for CloudWize Consulting Services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        badge="Legal & Privacy"
        title="Privacy Policy"
        description="Comprehensive information regarding how CloudWize Consulting Services collects, processes, and protects personal and corporate data."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#475569]">
          
          {/* Legal Notice Box */}
          <div className="p-6 rounded-2xl bg-[#EFF6FF] border-l-4 border-[#2563EB] flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <div className="text-xs text-[#0F172A] leading-relaxed">
              <strong>Template Notice:</strong> This privacy policy is maintained as an operational framework. Client organizations should review data governance policies in alignment with applicable regional data protection laws (such as the Digital Personal Data Protection Act, GDPR, or HIPAA where applicable).
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              1. Information Collected
            </h2>
            <p className="text-base leading-relaxed">
              CloudWize Consulting Services collects information necessary to fulfill consulting inquiries and deliver advisory services. This includes personal identifiers (such as your full name, corporate email address, and telephone number), organizational details (company name, industry, and job title), and technical details submitted via our contact and diagnostic forms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              2. Purpose of Collection
            </h2>
            <p className="text-base leading-relaxed">
              We process submitted data exclusively for legitimate business purposes: responding to client inquiries, scheduling discovery calls, preparing tailored consulting proposals, providing cloud readiness diagnostics, and maintaining communication during contracted project engagements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              3. Contact Form Submissions
            </h2>
            <p className="text-base leading-relaxed">
              Information provided via our website consultation form is transmitted securely and stored in protected, access-controlled repositories. We do not sell, rent, or lease contact submissions or prospective client lists to any third-party marketing brokers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              4. Cookies and Analytics
            </h2>
            <p className="text-base leading-relaxed">
              Our website may utilize essential functional cookies to ensure page security, optimize navigation, and assess aggregate website traffic performance. These technical cookies do not track personal identifying information across external third-party websites.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              5. Data Retention
            </h2>
            <p className="text-base leading-relaxed">
              We retain consultation inquiries and client project documentation only for as long as necessary to fulfill the operational advisory purposes described herein, or as required by applicable commercial and accounting legal retention regulations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              6. Data Security
            </h2>
            <p className="text-base leading-relaxed">
              We enforce rigorous administrative, physical, and technical safeguards—including TLS encryption in transit, strict identity and access control, and endpoint security—to protect information against unauthorized disclosure, loss, or alteration.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              7. Third-Party Services
            </h2>
            <p className="text-base leading-relaxed">
              Where third-party service providers (such as encrypted hosting, transactional mail gateways, or form processing services) are utilized, they operate under binding confidentiality obligations and are permitted to process data only to support CloudWize operations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              8. User Rights
            </h2>
            <p className="text-base leading-relaxed">
              Depending on your jurisdiction, you may have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request deletion of your contact records. To exercise these rights, please contact our data governance team.
            </p>
          </div>

          <div className="space-y-4 border-t border-[#DBE5F0] pt-8">
            <h2 className="text-2xl font-bold font-heading text-[#071B38]">
              9. Contact Details
            </h2>
            <p className="text-base leading-relaxed">
              If you have inquiries regarding this Privacy Policy or our data protection protocols, please direct correspondence to:
            </p>
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#DBE5F0] text-sm space-y-1">
              <strong className="text-[#071B38] block">{SITE_CONFIG.name}</strong>
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
