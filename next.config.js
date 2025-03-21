/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig;
