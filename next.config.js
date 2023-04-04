/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'https%3A%2F%2Fs3.us-west-2.amazonaws.com'
    ],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig