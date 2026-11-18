"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  Building,
  Mail,
  User,
  Globe,
  Briefcase,
  DollarSign
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  company: string;
  title: string;
  country: string;
  svc: string;
  budget: string;
  req: string;
  website: string; // Honeypot
  ok: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    title: "",
    country: "",
    svc: "",
    budget: "",
    req: "",
    website: "",
    ok: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const servicesList = [
    "IT Consulting",
    "Cloud Consulting",
    "Project Management",
    "HR Consulting",
    "IT Audit & Compliance",
    "IT Support",
    "Other",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid business email address.";
    }
    if (!formData.company.trim()) errs.company = "Company name is required.";
    if (!formData.country.trim()) errs.country = "Country is required.";
    if (!formData.svc) errs.svc = "Please select a service of interest.";
    if (!formData.req.trim()) errs.req = "Please describe your project requirements.";
    if (!formData.ok) errs.ok = "You must consent to CloudWize contacting you.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) {
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFeedbackMsg("Please complete all required fields correctly.");
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setFeedbackMsg("Submitting your consultation request...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFeedbackMsg(
        "Thank you. Your consultation request has been received. A senior CloudWize partner will review your requirements and reach out within 1 business day."
      );
      setFormData({
        name: "",
        email: "",
        company: "",
        title: "",
        country: "",
        svc: "",
        budget: "",
        req: "",
        website: "",
        ok: false,
      });
    } catch {
      setStatus("error");
      setFeedbackMsg("Submission failed. Please email us directly or try again later.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DBE5F0] shadow-card">
      <div className="mb-8 border-b border-[#DBE5F0]/60 pb-6">
        <h3 className="text-2xl font-bold font-heading text-[#071B38]">
          Request a Confidential Consultation
        </h3>
        <p className="text-sm text-[#475569] mt-1">
          Tell us about your strategic roadmap, infrastructure challenge, or audit timeline.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold font-heading text-[#071B38]">
            Consultation Request Received
          </h4>
          <p className="text-sm text-[#1E3A8A] max-w-md mx-auto leading-relaxed">
            {feedbackMsg}
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-[#1E3A8A] bg-white border border-[#BFDBFE] shadow-sm hover:bg-[#EFF6FF]"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Anand Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-[#F8FAFC] border rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-400 focus:ring-red-400"
                      : "border-[#DBE5F0] focus:ring-[#2563EB]"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Business Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
              >
                Business Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="anand@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-[#F8FAFC] border rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-400 focus:ring-red-400"
                      : "border-[#DBE5F0] focus:ring-[#2563EB]"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="Company Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={`w-full bg-[#F8FAFC] border rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.company
                      ? "border-red-400 focus:ring-red-400"
                      : "border-[#DBE5F0] focus:ring-[#2563EB]"
                  }`}
                />
              </div>
              {errors.company && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.company}</span>
                </p>
              )}
            </div>

            {/* Job Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
              >
                Job Title (Optional)
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="title"
                  type="text"
                  placeholder="VP of Engineering / CTO"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#DBE5F0] rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="country"
                  type="text"
                  required
                  placeholder="e.g. India, United States, UK"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className={`w-full bg-[#F8FAFC] border rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.country
                      ? "border-red-400 focus:ring-red-400"
                      : "border-[#DBE5F0] focus:ring-[#2563EB]"
                  }`}
                />
              </div>
              {errors.country && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.country}</span>
                </p>
              )}
            </div>

            {/* Service of Interest */}
            <div>
              <label
                htmlFor="svc"
                className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
              >
                Service of Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="svc"
                required
                value={formData.svc}
                onChange={(e) => setFormData({ ...formData, svc: e.target.value })}
                className={`w-full bg-[#F8FAFC] border rounded-xl px-4 py-3 text-base sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 ${
                  errors.svc
                    ? "border-red-400 focus:ring-red-400"
                    : "border-[#DBE5F0] focus:ring-[#2563EB]"
                }`}
              >
                <option value="">Select a Consulting Practice</option>
                {servicesList.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
              {errors.svc && (
                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.svc}</span>
                </p>
              )}
            </div>
          </div>

          {/* Estimated Budget */}
          <div>
            <label
              htmlFor="budget"
              className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
            >
              Estimated Engagement Budget (Optional)
            </label>
            <div className="relative">
              <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="budget"
                type="text"
                placeholder="e.g. ₹25L - ₹50L or $40,000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#DBE5F0] rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          {/* Project Requirements */}
          <div>
            <label
              htmlFor="req"
              className="block text-xs font-bold uppercase tracking-wider text-[#071B38] mb-2"
            >
              Project Requirements & Objectives <span className="text-red-500">*</span>
            </label>
            <textarea
              id="req"
              rows={5}
              required
              placeholder="Outline your timeline, infrastructure stack, audit framework (e.g. SOC 2 or ISO 27001), or project milestones..."
              value={formData.req}
              onChange={(e) => setFormData({ ...formData, req: e.target.value })}
              className={`w-full bg-[#F8FAFC] border rounded-xl p-4 text-base sm:text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                errors.req
                  ? "border-red-400 focus:ring-red-400"
                  : "border-[#DBE5F0] focus:ring-[#2563EB]"
              }`}
            />
            {errors.req && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.req}</span>
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                id="ok"
                type="checkbox"
                required
                checked={formData.ok}
                onChange={(e) => setFormData({ ...formData, ok: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-[#DBE5F0] text-[#2563EB] focus:ring-[#2563EB]"
              />
              <span className="text-xs text-[#475569] leading-relaxed">
                I consent to CloudWize Consulting Services contacting me regarding this consultation request. See our{" "}
                <Link href="/privacy" className="text-[#2563EB] underline hover:text-[#1D4ED8]">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.ok && (
              <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.ok}</span>
              </p>
            )}
          </div>

          {/* Feedback & Submit Button */}
          {feedbackMsg && status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{feedbackMsg}</span>
            </div>
          )}

          <div className="pt-4 border-t border-[#DBE5F0]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#475569]">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>Strict Non-Disclosure & Enterprise Data Privacy</span>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-md shadow-[#2563EB]/25 border border-[#60A5FA]/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Request Consultation</span>
                  <Send className="w-4 h-4 text-[#93C5FD]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
