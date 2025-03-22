/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export for Cloudflare Pages
  trailingSlash: true, // Add trailing slashes to help with path resolution
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
