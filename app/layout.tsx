import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GoogleTag from '@/components/GoogleTag'
import Statistik from '@/components/Statistik'
import StatistikBanner from '@/components/StatistikBanner'

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
  metadataBase: new URL('https://www.eschen11.ch'),
  title: {
    template: '%s | Eschen 11 | Eschenbach',
    default:  'Eschen 11 | Eigentumswohnungen in Eschenbach',
  },
  description:
    'Acht sorgfältig geplante 4.5-Zimmer-Eigentumswohnungen an der Rapperswilerstrasse 11 in Eschenbach SG. Zwischen Voralpen und Zürichsee.',
  openGraph: {
    title:       'Eschen 11 | Eigentumswohnungen in Eschenbach',
    description: 'Acht sorgfältig geplante 4.5-Zimmer-Eigentumswohnungen in Eschenbach SG.',
    url:         '/',
    siteName:    'Eschen 11',
    locale:      'de_CH',
    type:        'website',
    images: [
      {
        url:    '/bilder/4K_Aussen1_v2.png',
        width:  1200,
        height: 630,
        alt:    'Eschen 11 | Mehrfamilienhaus in Eschenbach',
      },
    ],
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
        <Analytics />
      </body>
    </html>
  )
}
