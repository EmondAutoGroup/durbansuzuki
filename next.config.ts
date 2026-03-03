import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.thedealersedge.co.za',
      },
      {
        protocol: 'https',
        hostname: 'suzuki.motorpress.co.za',
      },
      {
        protocol: 'https',
        hostname: 'www.suzukiauto.co.za',
      },
      {
        protocol: 'https',
        hostname: '**.easyquote-dcs.co.za',
      },
      {
        protocol: 'http',
        hostname: '**.easyquote-dcs.co.za',
      },
    ],
  },
};

export default nextConfig;
