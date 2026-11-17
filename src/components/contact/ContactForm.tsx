"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ShieldCheck,
  Building,
  Mail,
  User,
  Globe,
  Briefcase,
  DollarSign,
  MessageSquare
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

  const budgetTiers = [
    "Under $25,000 / ₹20 Lakhs",
    "$25,000 - $75,000 / ₹20L - ₹60L",
    "$75,000 - $200,000 / ₹60L - ₹1.5 Cr",
    "$200,000+ / ₹1.5 Cr+",
    "Not yet determined",
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
    // Honeypot spam check
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
      // Simulate submission or connect to environment endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-premium">
      <div className="mb-8 border-b border-slate-100 pb-6">
        <h3 className="text-2xl font-bold font-heading text-[#0B1220]">
          Request a Confidential Consultation
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Tell us about your strategic roadmap, infrastructure challenge, or audit timeline.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold font-heading text-emerald-950">
            Consultation Request Received
          </h4>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            {feedbackMsg}
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 shadow-sm hover:bg-emerald-50"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field (hidden from real users) */}
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
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  className={`w-full bg-[#F3F6FA] border rounded-xl pl-10 pr-4 py-3 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-400 focus:ring-red-400"
                      : "border-slate-200 focus:ring-[#2563EB]"
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
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  className={`w-full bg-[#F3F6FA] border rounded-xl pl-10 pr-4 py-3 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-400 focus:ring-red-400"
                      : "border-slate-200 focus:ring-[#2563EB]"
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
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  className={`w-full bg-[#F3F6FA] border rounded-xl pl-10 pr-4 py-3 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.company
                      ? "border-red-400 focus:ring-red-400"
                      : "border-slate-200 focus:ring-[#2563EB]"
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
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  className="w-full bg-[#F3F6FA] border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                  className={`w-full bg-[#F3F6FA] border rounded-xl pl-10 pr-4 py-3 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.country
                      ? "border-red-400 focus:ring-red-400"
                      : "border-slate-200 focus:ring-[#2563EB]"
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
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
              >
                Service of Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="svc"
                required
                value={formData.svc}
                onChange={(e) => setFormData({ ...formData, svc: e.target.value })}
                className={`w-full bg-[#F3F6FA] border rounded-xl px-4 py-3 text-sm text-[#0B1220] focus:outline-none focus:ring-2 ${
                  errors.svc
                    ? "border-red-400 focus:ring-red-400"
                    : "border-slate-200 focus:ring-[#2563EB]"
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
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
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
                className="w-full bg-[#F3F6FA] border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          {/* Project Requirements */}
          <div>
            <label
              htmlFor="req"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
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
              className={`w-full bg-[#F3F6FA] border rounded-xl p-4 text-sm text-[#0B1220] placeholder-slate-400 focus:outline-none focus:ring-2 ${
                errors.req
                  ? "border-red-400 focus:ring-red-400"
                  : "border-slate-200 focus:ring-[#2563EB]"
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
                className="mt-1 w-4 h-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I consent to CloudWize Consulting Services contacting me regarding this consultation request. See our{" "}
                <Link href="/privacy" className="text-[#2563EB] underline hover:text-[#1d4ed8]">
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

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
              <span>Strict Non-Disclosure & Enterprise Data Privacy</span>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] shadow-lg shadow-[#2563EB]/25 border border-[#22D3EE]/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Request Consultation</span>
                  <Send className="w-4 h-4 text-[#22D3EE]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
