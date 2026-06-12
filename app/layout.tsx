import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://eschen11.ch'),
  title: {
    template: '%s | Eschen 11 | Eschenbach',
    default:  'Eschen 11 | Eigentumswohnungen in Eschenbach',
  },
  description:
    'Acht sorgfältig geplante 4.5-Zimmer-Eigentumswohnungen an der Rapperswilerstrasse 11 in Eschenbach SG. Zwischen Voralpen und Zürichsee.',
  openGraph: {
    title:       'Eschen 11 | Eigentumswohnungen in Eschenbach',
    description: 'Acht sorgfältig geplante 4.5-Zimmer-Eigentumswohnungen in Eschenbach SG.',
    url:         'https://eschen11.ch',
    siteName:    'Eschen 11',
    locale:      'de_CH',
    type:        'website',
    images: [
      {
        url:    '/images/Aussen1.png',
        width:  1200,
        height: 630,
        alt:    'Eschen 11 | Mehrfamilienhaus in Eschenbach',
      },
    ],
  },
  alternates: {
    canonical: 'https://eschen11.ch',
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
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col" style={{ background: 'var(--color-page)' }}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
