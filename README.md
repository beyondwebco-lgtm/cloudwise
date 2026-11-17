# CloudWize Consulting Services — Modern Next.js Enterprise Platform

A world-class, modern, minimal, and premium corporate web platform for **CloudWize Consulting Services**, rebuilt from the ground up using **Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, and Lucide Icons**.

> **Brand Tagline**: *Technology. Transformation. Talent. Trust.*

---

## Architecture & Technology Stack

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
- **UI Runtime**: React 19 & TypeScript 5
- **Styling**: Tailwind CSS with custom editorial brand tokens
- **Icons**: Lucide React
- **Typography**: Editorial typography pairing **Manrope** (bold, authoritative headlines) with **Inter** (crisp, readable body copy)
- **Design Aesthetic**: Premium international digital agency standard (₹2–5 lakh custom design grade) with deep Midnight Navy (`#0B1220`), Corporate Royal Navy (`#142B4A`), Electric Accent Blue (`#2563EB`), Radiant Cyan (`#22D3EE`), and Warm Gold (`#D4AF37`) accents.

---

## Route & Information Structure

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | Home | Hero with dynamic architecture visualizer, 5-practice grid, core differentiators, interactive 5-stage engagement timeline, readiness calculator, industries matrix, insights preview, and consultation CTA. |
| `/about` | About Us | Executive mission, vision, 6 core values, consulting philosophy, operating approach, and quality governance. |
| `/it-cloud` | IT & Cloud Consulting | Cloud strategy, migration planning, multi-cloud platforms (Azure, AWS, GCP, M365), security & FinOps governance. |
| `/project-management` | Project Management | Structured delivery, PMO setup, project controls (EVM, WBS), RAID governance, and methodology frameworks. |
| `/hr-workforce` | HR & Workforce Consulting | Strategic recruitment, technical talent sourcing, workforce planning, and organizational HR frameworks. |
| `/it-audit-compliance` | IT Audit, Risk & Compliance | ISO 27001/27002, SOC 1/2, HIPAA, CMMI readiness, gap assessments, and defensible evidence repositories. |
| `/it-support-advisory` | IT Support & Advisory | IT operations consulting, ITSM processes, service desk optimization, business continuity, and vendor risk. |
| `/industries` | Industries | Interactive sector explorer across 8 key verticals (Healthcare, Banking, Insurance, Manufacturing, Retail, Professional Services, SaaS, SMEs). |
| `/insights` | Insights & Guides | Filterable thought leadership library with category pills, reading times, and full-text search. |
| `/insights/[slug]` | Individual Publications | 6 comprehensive executive technical guides with key takeaways, table of contents, and consultation links. |
| `/article-template` | Article Template | Editorial guidelines and draft standard for future thought leadership publications. |
| `/contact` | Contact Us | Confidential consultation request form with live validation, service selection, budget tiers, and direct partner contact channels. |
| `/privacy` | Privacy Policy | Transparent disclosures, data protection safeguards, and legal framework notices. |
| `/terms` | Terms of Use | Website conditions, intellectual property rights, and consulting engagement boundaries. |
| `/sitemap.xml` | Dynamic Sitemap | Auto-generated Next.js XML sitemap for SEO crawlers. |
| `/robots.txt` | Robots Directive | Standard search indexing instructions. |

---

## Getting Started (Local Development)

### Prerequisites
- Node.js 18.18+ or 20+ (tested on Node v24)
- npm 10+

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Application available at http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start
```

---

## Legacy File Archive Notice

All legacy static files from the initial repository have been preserved intact inside the `_legacy_archive/` directory:
- `_legacy_archive/about.html`
- `_legacy_archive/article-template.html`
- `_legacy_archive/contact.html`
- `_legacy_archive/hr-workforce.html`
- `_legacy_archive/index.html`
- `_legacy_archive/industries.html`
- `_legacy_archive/insights.html`
- `_legacy_archive/it-audit-compliance.html`
- `_legacy_archive/it-cloud.html`
- `_legacy_archive/it-support-advisory.html`
- `_legacy_archive/privacy.html`
- `_legacy_archive/project-management.html`
- `_legacy_archive/terms.html`
- `_legacy_archive/assets/`

---

## Deployment Instructions

### Vercel / Netlify / Node Hosting
1. Connect this repository to Vercel, Netlify, or any modern Node.js cloud platform.
2. Build command: `npm run build`
3. Output directory: default Next.js (`.next`)
4. Verify environment variables if connecting external form endpoints (e.g. Formspree / Webhook URL).

---

© 2026 CloudWize Consulting Services. All rights reserved.
