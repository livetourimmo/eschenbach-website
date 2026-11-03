import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Nur WebP: AVIF verschmierte bei den Visualisierungen feine Strukturen
    // (Laub, Stoffe, Leuchten) sichtbar, siehe lib/bilder.ts BILDQUALITAET.
    formats: ['image/webp'],
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
