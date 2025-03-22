/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Disable image optimization in production for better cross-platform compatibility
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Only include experimental features if needed in development
  ...(process.env.NODE_ENV !== 'production' && {
    experimental: {
      serverMinification: false,
    }
  }),
};

export default nextConfig;
