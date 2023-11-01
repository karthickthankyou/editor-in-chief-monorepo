/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }],
  },
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
