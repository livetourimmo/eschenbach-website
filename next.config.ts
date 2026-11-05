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
  // Einbetten nur durch die Seite selbst und das liveTour-Kundenportal (Rückmeldung der Bauherrschaft
  // zur Webseite). Schützt zugleich vor Clickjacking durch fremde Seiten.
  async headers() {
    return [{ source: '/:path*', headers: [{ key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://kundenportal.livetour.ch" }] }];
  },
}

export default nextConfig
