import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/it-cloud",
        destination: "/it-cloud",
        permanent: true,
      },
      {
        source: "/services/project-management",
        destination: "/project-management",
        permanent: true,
      },
      {
        source: "/services/hr-workforce",
        destination: "/hr-workforce",
        permanent: true,
      },
      {
        source: "/services/it-audit-compliance",
        destination: "/it-audit-compliance",
        permanent: true,
      },
      {
        source: "/services/it-support-advisory",
        destination: "/it-support-advisory",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
