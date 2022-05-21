/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  rewrites: async () => [
    {
      destination: '/home',
      source: '/',
    },
  ],
}

module.exports = nextConfig
