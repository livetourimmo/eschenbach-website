import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GoogleTag from '@/components/GoogleTag'
import Statistik from '@/components/Statistik'
import StatistikBanner from '@/components/StatistikBanner'
import WebVitals from '@/components/WebVitals'
import { BESCHREIBUNG, OG_BESCHREIBUNG, SEITE_URL, SEITENNAME, VORSCHAUBILD } from '@/lib/seo'

// Schriften lokal aus @fontsource-variable statt next/font/google: Der Abruf
// bei Google ist im Vercel-Build (Turbopack) gelegentlich gescheitert.
const inter = localFont({
  src: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  weight: '100 900',
  style: 'normal',
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = localFont({
  src: '../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2',
  weight: '400 900',
  style: 'normal',
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SEITE_URL),
  title: {
    template: '%s | Eschen 11, Eschenbach SG',
    default:  'Eschen 11 | 4.5-Zimmer-Eigentumswohnungen in Eschenbach SG',
  },
  description: BESCHREIBUNG,
  // Startseite und Rückfallwerte; Unterseiten setzen ihre Werte über seitenMetadaten() (lib/seo.ts).
  openGraph: {
    title:       'Eschen 11 | 4.5-Zimmer-Eigentumswohnungen in Eschenbach SG',
    description: OG_BESCHREIBUNG,
    url:         '/',
    siteName:    SEITENNAME,
    locale:      'de_CH',
    type:        'website',
    images:      [VORSCHAUBILD],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" className={`h-full ${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <GoogleTag />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: 'var(--color-page)' }}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <StatistikBanner />
        <Statistik />
        <WebVitals />
        <Analytics />
      </body>
    </html>
  )
}
