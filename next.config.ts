import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Webbläsare frågar alltid efter /favicon.ico – skicka dem till sajtens ikon.
  async redirects() {
    return [{ source: "/favicon.ico", destination: "/icon.svg", permanent: true }];
  },
};

export default nextConfig;
