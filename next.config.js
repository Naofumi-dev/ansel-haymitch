/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false
  },
  transpilePackages: ['three']
}

module.exports = nextConfig
