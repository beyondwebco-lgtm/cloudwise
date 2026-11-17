import React from "react";
import { Metadata } from "next";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowUpRight, 
  Clock
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us | CloudWize Consulting Services",
  description: "Request a consultation with CloudWize Consulting Services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        badge="Direct Executive Engagement"
        title="Schedule an Executive Consultation"
        description="Connect with our principal advisors to discuss technology modernization, cloud architecture, PMO governance, workforce capacity, or audit readiness."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        highlight="Initial Consultation & Scope Analysis Within 1 Business Day"
      />

      <section className="py-20 sm:py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Columns: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right 5 Columns: Direct Contact Details & Advisory Notice */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Partner Channels Card */}
              <div className="bg-[#071B38] text-white rounded-3xl p-8 sm:p-10 border border-[#123B73] shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B73]/70 border border-[#2563EB]/40 text-xs font-semibold text-[#93C5FD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                    <span>Direct Communication</span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white">
                    Direct Contact Channels
                  </h3>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#123B73]/50 border border-white/10">
                      <Mail className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Email Inquiries
                        </span>
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="text-white hover:text-[#60A5FA] transition-colors font-medium text-sm"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#123B73]/50 border border-white/10">
                      <Phone className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Telephone Advisory
                        </span>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-white hover:text-[#60A5FA] transition-colors font-medium text-sm"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#123B73]/50 border border-white/10">
                      <MapPin className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Operating Headquarters
                        </span>
                        <span className="text-white font-medium text-sm">
                          {SITE_CONFIG.address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#123B73]/50 border border-white/10">
                      <Linkedin className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Corporate Profile
                        </span>
                        <a
                          href={SITE_CONFIG.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#60A5FA] hover:text-white transition-colors hover:underline inline-flex items-center gap-1 font-medium text-sm"
                        >
                          <span>Connect on LinkedIn</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-[#60A5FA]" />
                    <span>Response Time: Typically under 24 business hours</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#DBE5F0] shadow-subtle space-y-4">
                <h4 className="text-base font-bold font-heading text-[#071B38]">
                  What Happens After You Inquire?
                </h4>
                <div className="space-y-3 text-xs text-[#475569]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-bold flex items-center justify-center shrink-0">
                      1
                    </div>
                    <span>Initial requirements review by a specialized practice director.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-bold flex items-center justify-center shrink-0">
                      2
                    </div>
                    <span>30-minute discovery call under mutual confidentiality.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-bold flex items-center justify-center shrink-0">
                      3
                    </div>
                    <span>Pragmatic engagement roadmap and transparent milestone scoping.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
