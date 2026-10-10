import type { NextConfig } from "next";

const backendUrl = (process.env.BACKEND_URL || "http://127.0.0.1:8000").replace(
  /\/$/,
  ""
);

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/api/health",
          destination: `${backendUrl}/health`,
        },
        {
          source: "/health",
          destination: `${backendUrl}/health`,
        },
      ],
      fallback: [
        {
          source: "/api/:path*",
          destination: `${backendUrl}/api/:path*`,
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
