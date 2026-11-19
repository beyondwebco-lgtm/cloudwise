import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "CloudWize Consulting Services | IT, Cloud, PMO & IT Audit Consulting",
    template: "%s | CloudWize Consulting Services",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "IT Consulting",
    "Cloud Migration",
    "Azure Migration",
    "Microsoft 365 Consulting",
    "Project Management PMO",
    "Earned Value Management",
    "HR Consulting",
    "Technical Recruitment",
    "IT Audit Readiness",
    "ISO 27001 Readiness",
    "SOC 2 Readiness",
    "HIPAA Compliance Advisory",
    "IT Support & Operations",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: "CloudWize Consulting Services | Enterprise Technology & Advisory",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/logo.png",
        width: 970,
        height: 574,
        alt: "Cloudwize Consulting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudWize Consulting Services",
    description: SITE_CONFIG.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo-symbol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConsultingService",
    "name": SITE_CONFIG.name,
    "alternateName": SITE_CONFIG.shortName,
    "url": SITE_CONFIG.domain,
    "logo": `${SITE_CONFIG.domain}/logo.png`,
    "description": SITE_CONFIG.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressCountry": "IN"
    },
    "sameAs": [
      SITE_CONFIG.linkedin
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CloudWize Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT & Cloud Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Management Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HR & Workforce Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Audit, Risk & Compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Support & Advisory"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#0F172A] selection:bg-[#2563EB]/15 selection:text-[#071B38]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
