/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['ext.same-assets.com', 'same-assets.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'same-assets.com',
      },
    ],
  },
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig;
