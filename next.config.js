/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ],
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig