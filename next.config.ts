import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
  },
  async redirects() {
    return [
      {
        source: '/app',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
