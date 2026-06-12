import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Download, FileText } from 'lucide-react'
import UnitTable from '@/components/UnitTable'
import ScrollReveal from '@/components/ScrollReveal'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Angebot',
  description:
    'Acht 4.5-Zimmer-Eigentumswohnungen mit Flächen zwischen 117 und 119 m². Grundrisse, Verfügbarkeiten und Downloads.',
}

const downloads = [
  {
    title:    'Grundrisse Eschen 11',
    subtitle: 'Alle Wohnungsgrundrisse in einem Dokument',
    file:     '/downloads/Grundrisse-Eschen11.pdf',
    size:     '2.4 MB',
    icon:     'plan',
  },
]

export default function AngebotPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-end"
        style={{ minHeight: '60vh', background: '#1a1917' }}
      >
        <Image
          src="/images/Innen2.png"
          alt="Eschen 11, Wohnraum"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.65 }}
          sizes="100vw"
        />
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '60%',
            background: 'linear-gradient(to top, rgba(20,18,16,0.8) 0%, transparent 100%)',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-16 w-full">
          <span className="label-tag block mb-4" style={{ color: 'rgba(246,245,242,0.6)' }}>
            Angebot
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              color: '#f6f5f2',
              lineHeight: 1.1,
              letterSpacing: '0.02em',
            }}
          >
            Grosszügig wohnen<br />in Eschenbach.
          </h1>
        </div>
      </section>

      {/* ── EINLEITUNG ── */}
      <section className="py-24" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="label-tag">Überblick</span>
              <div className="accent-line" />
              <p className="gold-left text-lg font-light" style={{ color: 'var(--color-text-light)', lineHeight: 1.75 }}>
                Das Mehrfamilienhaus an der Rapperswilerstrasse 11 in Eschenbach umfasst acht
                Eigentumswohnungen mit je 4.5 Zimmern und Wohnflächen zwischen 117 und 119 m².
                Die klar gegliederten Grundrisse überzeugen mit einem grosszügigen Wohn-/Ess- und
                Kochbereich, drei Zimmern sowie einem vollständigen Bad und einem separaten
                Dusche/WC. Ein Reduit und ein Vorraum schaffen zusätzlichen Stauraum und Komfort
                im Alltag.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <div
                className="card-interactive p-6 rounded-lg"
                style={{ background: '#ffffff', border: '1px solid rgba(82,68,52,0.08)', boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="label-tag mb-3">Erdgeschoss</div>
                <p className="text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  Private Sitzplätze mit je 25 m² Aussenfläche, direkt vom Wohnraum zugänglich.
                </p>
              </div>
              <div
                className="card-interactive p-6 rounded-lg"
                style={{ background: '#ffffff', border: '1px solid rgba(82,68,52,0.08)', boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="label-tag mb-3">Ober- & Dachgeschoss</div>
                <p className="text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  Umlaufende Balkone zwischen 23 und{' '}<span style={{ whiteSpace: 'nowrap' }}>24 m²</span>, die Wohnen und Aussenraum verbinden.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WOHNUNGSÜBERSICHT / NAVIGATOR ── */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12">
              <span className="label-tag">Wohnungsübersicht</span>
              <div className="accent-line" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  color: 'var(--color-text-core)',
                  letterSpacing: '0.02em',
                }}
              >
                Alle verfügbaren Wohnungen
              </h2>
            </div>
          </ScrollReveal>
          <UnitTable />
          <p className="text-xs mt-6" style={{ color: 'var(--color-contrast)' }}>
            Alle Flächen in m² gemäss Flächenauszug (gerundet). Angaben ohne Gewähr.
          </p>
        </div>
      </section>

      {/* ── RAUMAUFTEILUNG ── */}
      <section className="py-24" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="label-tag">Raumaufteilung</span>
              <div className="accent-line" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  color: 'var(--color-text-core)',
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Jede Wohnung im Detail
              </h2>
              <p style={{ marginBottom: '2rem' }}>
                Jede der acht Wohnungen ist identisch strukturiert und bietet folgende Räume:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  ['Entree',             'Direkter Zugang zu allen Zimmern'],
                  ['Vorraum',            'Praktische Pufferzone'],
                  ['3 Zimmer',           'Flexibel nutzbar als Schlafzimmer oder Arbeitsraum'],
                  ['Wohnen / Essen / Kochen', 'Grosszügiger, offener Gemeinschaftsbereich'],
                  ['Bad',                'Mit Wanne oder Dusche'],
                  ['Dusche / WC',        'Separate Nasszelle'],
                  ['Reduit',             'Für Stauraum und Haushalt'],
                ].map(([room, desc]) => (
                  <li
                    key={room}
                    className="flex items-start gap-4 py-3"
                    style={{ borderBottom: '1px solid rgba(82,68,52,0.07)' }}
                  >
                    <span
                      className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--color-accent)', marginTop: '0.55rem' }}
                    />
                    <div>
                      <span className="text-sm font-medium" style={{ color: 'var(--color-text-core)' }}>{room}</span>
                      <span className="text-sm font-light" style={{ color: 'var(--color-text-light)' }}> · {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '4/5' }}
              >
                <Image
                  src="/images/Innen3.png"
                  alt="Eschen 11, Innenraum Detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS ── */}
      <section className="py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="label-tag">Downloads</span>
            <div className="accent-line" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: 'var(--color-text-core)',
                letterSpacing: '0.02em',
                marginBottom: '2.5rem',
              }}
            >
              Unterlagen zum Herunterladen
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {downloads.map((dl, i) => (
              <ScrollReveal key={dl.file} delay={i * 80}>
                <a
                  href={dl.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group flex flex-col gap-4 p-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--color-page)',
                    border: '1px solid rgba(82,68,52,0.10)',
                    boxShadow: 'var(--shadow-soft)',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded flex items-center justify-center transition-colors group-hover:bg-accent"
                    style={{ background: 'rgba(153,143,72,0.1)' }}
                  >
                    <FileText size={22} style={{ color: 'var(--color-accent)' }} className="group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div
                      className="font-medium text-sm mb-1 transition-colors group-hover:text-[var(--color-accent)]"
                      style={{ color: 'var(--color-text-core)', fontFamily: 'var(--font-sans)' }}
                    >
                      {dl.title}
                    </div>
                    <div className="text-xs font-light" style={{ color: 'var(--color-text-light)' }}>
                      {dl.subtitle}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid rgba(82,68,52,0.08)' }}>
                    <span className="text-xs" style={{ color: 'var(--color-contrast)' }}>PDF · {dl.size}</span>
                    <Download size={14} style={{ color: 'var(--color-accent)' }} />
                  </div>
                </a>
              </ScrollReveal>
            ))}

            {/* Note about missing downloads */}
            <ScrollReveal delay={80}>
              <div
                className="flex flex-col gap-2 p-6 rounded-lg"
                style={{
                  background: 'rgba(153,143,72,0.04)',
                  border: '1px dashed rgba(153,143,72,0.25)',
                }}
              >
                <div className="label-tag">Weitere Unterlagen</div>
                <p className="text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  Kurzbaubeschrieb, Situationsplan und weitere Unterlagen erhalten Sie auf Anfrage.
                </p>
                <Link
                  href="/#kontakt"
                  className="text-xs font-medium mt-2 transition-colors hover:text-[var(--color-accent-hover)]"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Unterlagen anfragen →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MATERIALISIERUNG ── */}
      <section className="py-24" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="label-tag">Materialisierung</span>
            <div className="accent-line" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: 'var(--color-text-core)',
                letterSpacing: '0.02em',
                marginBottom: '0.75rem',
              }}
            >
              Zeitloses Zusammenspiel.
            </h2>
            <p style={{ maxWidth: '40rem', marginBottom: '3rem' }}>
              Ein zeitloses Zusammenspiel aus warmen Erdtönen, edlen Metallakzenten und hellen,
              natürlichen Innenräumen.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'WOHN- UND SCHLAFRÄUME', name: 'Böden Wohnen',       detail: 'Parkett Eiche natur',   photo: '/bilder/boden.jpg'   },
              { label: 'KÜCHE · BAD · ENTRÉE',  name: 'Böden Bad & WC',     detail: 'Platten Beige · matt',          photo: '/bilder/platten.jpg' },
              { label: 'DACHGESCHOSS',           name: 'Decke & Pfetten DG', detail: 'Holz weiss lasiert',            photo: '/bilder/decke.jpg'   },
              { label: 'FENSTER INNEN',          name: 'Fenster innen',      detail: 'Holz · Metall weiss',           photo: '/bilder/fenster.jpg' },
              { label: 'WÄNDE & DECKEN',         name: 'Wände & Decken',     detail: 'Weiss · gestrichen',            photo: '/bilder/wand.jpg'    },
            ].map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 60}>
                <div
                  className="relative overflow-hidden rounded-lg group"
                  style={{ aspectRatio: '4/3' }}
                >
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(20,18,16,0.85) 0%, rgba(20,18,16,0.2) 50%, transparent 100%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                        color: '#f6f5f2',
                        lineHeight: 1.2,
                        marginBottom: '0.3rem',
                      }}
                    >
                      {m.name}
                    </div>
                    <div className="text-sm font-light" style={{ color: 'rgba(246,245,242,0.55)' }}>
                      {m.detail}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <ContactSection />
    </>
  )
}
