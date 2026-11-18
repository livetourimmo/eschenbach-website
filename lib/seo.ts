import type { Metadata } from 'next'

/**
 * Gemeinsame Metadaten (Open Graph) und strukturierte Daten (JSON-LD).
 *
 * Next.js übernimmt openGraph aus dem Layout nicht, sobald eine Seite eigene
 * openGraph-Werte setzt. Damit og:url pro Seite selbstreferenzierend ist,
 * setzt jede Unterseite ihre Werte über seitenMetadaten() und die gemeinsamen
 * Angaben (Bild, Sprache, Name) kommen von hier.
 */

export const SEITE_URL = 'https://www.eschen11.ch'

/** Texte unverändert aus app/layout.tsx (Stand vor 2026-11-18). */
export const SEITENNAME = 'Eschen 11'
export const BESCHREIBUNG =
  'Acht sorgfältig geplante 4.5-Zimmer-Eigentumswohnungen an der Rapperswilerstrasse 11 in Eschenbach SG. Zwischen Voralpen und Zürichsee.'
export const OG_BESCHREIBUNG = 'Acht sorgfältig geplante 4.5-Zimmer-Eigentumswohnungen in Eschenbach SG.'

/**
 * Vorschaubild beim Teilen. Masse = tatsächliche Pixelmasse der Datei
 * (vorher fälschlich 1200 × 630 angegeben).
 */
export const VORSCHAUBILD = {
  url: '/bilder/4K_Aussen1_v2.png',
  width: 3840,
  height: 2880,
  alt: 'Eschen 11 | Mehrfamilienhaus in Eschenbach',
}

export function seitenMetadaten(
  pfad: string,
  titel: string,
  beschreibung: string = OG_BESCHREIBUNG,
): Pick<Metadata, 'alternates' | 'openGraph'> {
  return {
    alternates: { canonical: pfad },
    openGraph: {
      title: titel,
      description: beschreibung,
      url: pfad,
      siteName: SEITENNAME,
      locale: 'de_CH',
      type: 'website',
      images: [VORSCHAUBILD],
    },
  }
}

/**
 * Strukturierte Daten der Startseite. Nur Angaben, die auf der Website stehen:
 * Adresse (Fusszeile, Lage), acht 4.5-Zimmer-Wohnungen mit 125.5 bis 128 m²
 * (Startseite, Angebot), Lift, Tiefgarage im Gebäude, Photovoltaikanlage
 * (Startseite), Ansprechperson und Firma (Kontaktbereich, Impressum).
 * Keine Koordinaten (nicht im Repo), keine Preise oder Verfügbarkeiten.
 */
export function strukturierteDaten() {
  const start = `${SEITE_URL}/`
  const bild = (datei: string) => `${SEITE_URL}/bilder/${datei}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${start}#website`,
        url: start,
        name: SEITENNAME,
        inLanguage: 'de-CH',
        publisher: { '@id': `${start}#vermarktung` },
      },
      {
        '@type': 'WebPage',
        '@id': `${start}#webpage`,
        url: start,
        name: 'Eschen 11 | 4.5-Zimmer-Eigentumswohnungen in Eschenbach SG',
        description: BESCHREIBUNG,
        inLanguage: 'de-CH',
        isPartOf: { '@id': `${start}#website` },
        about: { '@id': `${start}#projekt` },
        primaryImageOfPage: { '@type': 'ImageObject', url: bild('4K_Aussen1_v2.png'), width: 3840, height: 2880 },
      },
      {
        '@type': 'ApartmentComplex',
        '@id': `${start}#projekt`,
        name: SEITENNAME,
        description: BESCHREIBUNG,
        url: start,
        image: [bild('4K_Aussen1_v2.png'), bild('4K_Aussen2.png')],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rapperswilerstrasse 11',
          postalCode: '8733',
          addressLocality: 'Eschenbach',
          addressRegion: 'SG',
          addressCountry: 'CH',
        },
        numberOfAccommodationUnits: 8,
        accommodationFloorPlan: {
          '@type': 'FloorPlan',
          name: '4.5-Zimmer-Eigentumswohnung',
          numberOfRooms: 4.5,
          numberOfAccommodationUnits: 8,
          floorSize: { '@type': 'QuantitativeValue', minValue: 125.5, maxValue: 128, unitCode: 'MTK' },
        },
        amenityFeature: ['Personenlift', 'Tiefgarage im Gebäude', 'Photovoltaikanlage'].map((name) => ({
          '@type': 'LocationFeatureSpecification',
          name,
          value: true,
        })),
      },
      {
        '@type': 'RealEstateAgent',
        '@id': `${start}#vermarktung`,
        name: 'Dreiwert Immobilien GmbH',
        telephone: '+41 55 511 76 76',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bahnhofstrasse 2',
          postalCode: '8730',
          addressLocality: 'Uznach',
          addressCountry: 'CH',
        },
        employee: {
          '@type': 'Person',
          name: 'Phillip Wiedmer',
          telephone: '+41 55 511 76 76',
          email: 'pw@dreiwert.ch',
        },
      },
    ],
  }
}

/** JSON für <script type="application/ld+json">, «<» maskiert. */
export function alsJsonLd(daten: unknown): string {
  return JSON.stringify(daten).replace(/</g, '\\u003c')
}
