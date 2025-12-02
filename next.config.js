/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    qualities: [50, 75, 85, 90, 95, 100],
  },
}

module.exports = nextConfig