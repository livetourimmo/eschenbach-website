import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://eschen11.ch'
  return [
    { url: base,            lastModified: new Date(), priority: 1.0 },
    { url: `${base}/angebot`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/lage`,    lastModified: new Date(), priority: 0.8 },
  ]
}
