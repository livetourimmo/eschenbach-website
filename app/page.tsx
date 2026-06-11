import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Bus, Train, Route, GraduationCap } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import Gallery from '@/components/Gallery'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Eschen 11 | Eigentumswohnungen in Eschenbach',
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-end min-h-screen"
        style={{ background: '#1e1c19' }}
      >
        <Image
          src="/images/E1.png"
          alt="Eschen 11, Mehrfamilienhaus Rapperswilerstrasse 11"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.75 }}
          sizes="100vw"
        />

        {/* Subtle bottom gradient for text legibility */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '55%',
            background: 'linear-gradient(to top, rgba(20,18,16,0.75) 0%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
          <div className="max-w-2xl">
            <span
              className="label-tag block mb-4"
              style={{ color: 'rgba(246,245,242,0.7)' }}
            >
              Eschenbach SG · Rapperswilerstrasse 11
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                lineHeight: 1.08,
                letterSpacing: '0.02em',
                color: '#f6f5f2',
                marginBottom: '1.5rem',
              }}
            >
              Acht Wohnungen,<br />ein Zuhause.
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(246,245,242,0.75)',
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: '36rem',
                marginBottom: '2.5rem',
              }}
            >
              Ruhige Architektur, warme Materialien, grosszügige Räume. Ein Mehrfamilienhaus in Eschenbach SG.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/angebot" className="btn-primary">
                Alle Wohnungen
                <ArrowRight size={16} />
              </Link>
              <Link href="/#kontakt" className="btn-secondary" style={{ borderColor: 'rgba(246,245,242,0.35)', color: '#f6f5f2' }}>
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EINLEITUNG ── */}
      <section className="py-32" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <span className="label-tag">Das Projekt</span>
              <div className="accent-line" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: 'var(--color-text-core)',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Warm, präzise, zeitlos.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                An der Rapperswilerstrasse 11 in Eschenbach entsteht ein Mehrfamilienhaus mit acht
                Eigentumswohnungen, sorgfältig geplant, klar gegliedert und auf nachhaltiges Wohnen
                ausgerichtet. Vier Geschosse mit je zwei identisch strukturierten 4.5-Zimmer-Wohnungen
                bilden ein kompaktes, eigenständiges Gebäude.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Ein Personenlift erschliesst alle Etagen barrierefrei und die Tiefgarage bietet
                komfortables Parkieren direkt im Haus. Die Erdgeschosswohnungen öffnen sich zu
                grosszügigen, privaten Sitzplätzen. In den Ober- und Dachgeschossen treten an ihre
                Stelle umlaufende Balkone, die Wohnen und Aussenraum miteinander verbinden.
              </p>
              <p>
                Eine integrierte PV-Anlage unterstreicht den Anspruch an zukunftsgerichtetes Bauen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src="/images/E2.png"
                  alt="Eschen 11, Gebäude"
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

      {/* ── ÜBER DAS PROJEKT (Architektur) ── */}
      <section className="py-32" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image left */}
            <ScrollReveal>
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src="/images/Interior1.png"
                  alt="Eschen 11, Innenraum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            {/* Text right */}
            <ScrollReveal delay={150}>
              <span className="label-tag">Architektur & Materialisierung</span>
              <div className="accent-line" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: 'var(--color-text-core)',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Handwerklich durchdacht.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Das Gebäude überzeugt mit einer ruhigen, handwerklich durchdachten Architektur.
                Die Fassaden verbinden groben Aussenputz in Warmgrau mit glattem Sandputz: ein
                Wechselspiel aus Textur und Ton, das dem Haus Tiefe und Wärme verleiht.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Messingfarbene Holz-Metall-Fenster und Balkongeländer in Bronzeton setzen präzise
                Akzente und geben dem Gebäude einen unverwechselbaren Charakter. Das Dach aus Ziegel
                und Metall in Dunkelgrau mit Kupferanteilen bildet einen eleganten Abschluss.
              </p>
              <p>
                Im Innern setzt sich die Haltung fort: helle Wände, Parkettböden in Eiche natur und
                im Dachgeschoss weiss lasierte Holzdecken schaffen Räume, die Wärme und Offenheit
                gleichermassen ausstrahlen.
              </p>

              {/* Material highlights */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  {
                    label:   'Aussenputz',
                    value:   'Warmgrau & Sand',
                    swatches: ['#8a8178', '#c4b99a'],
                  },
                  {
                    label:   'Fenster',
                    value:   'Holz-Metall, Messingfarben',
                    swatches: ['#7a5c3e', '#998f48'],
                  },
                  {
                    label:   'Böden',
                    value:   'Parkett Eiche natur',
                    swatches: ['#b8936a', '#d4b48c'],
                  },
                  {
                    label:   'Dach',
                    value:   'Dunkelgrau & Kupfer',
                    swatches: ['#3d3b38', '#b07040'],
                  },
                ].map(m => (
                  <div
                    key={m.label}
                    className="p-4 rounded flex flex-col gap-3"
                    style={{
                      background: 'var(--color-page)',
                      border: '1px solid rgba(82,68,52,0.08)',
                    }}
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
                      {m.label}
                    </div>
                    <div className="flex gap-1.5">
                      {m.swatches.map(c => (
                        <div
                          key={c}
                          title={c}
                          style={{
                            width: '1.4rem',
                            height: '1.4rem',
                            borderRadius: '50%',
                            background: c,
                            border: '1px solid rgba(82,68,52,0.12)',
                            flexShrink: 0,
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-sm font-light" style={{ color: 'var(--color-text-core)' }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── LAGE TEASER ── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: 'var(--color-text-core)' }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="label-tag" style={{ color: 'rgba(246,245,242,0.5)' }}>Standort</span>
              <div className="accent-line" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: '#f6f5f2',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Ein Standort mit Qualität.
              </h2>
              <p style={{ color: 'rgba(246,245,242,0.7)', marginBottom: '2rem' }}>
                Eschenbach liegt in der Region Zürichsee-Linth und verbindet ländliche Ruhe mit
                guter Erreichbarkeit. Rapperswil-Jona, das Dienstleistungszentrum der Region, ist
                per Bus direkt erreichbar, Zürich mit der S-Bahn in rund 40 Minuten.
              </p>
              <Link
                href="/lage"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: 'var(--color-goldsand)' }}
              >
                Mehr zur Lage erfahren
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col gap-4">
                {[
                  { Icon: Bus,           label: 'Rapperswil-Jona', detail: 'direkt per Bus' },
                  { Icon: Train,         label: 'Zürich HB',       detail: 'ca. 40 Min. mit der S-Bahn' },
                  { Icon: Route,         label: 'Autobahn A15',    detail: 'Anschlüsse Neuhaus & Jona' },
                  { Icon: GraduationCap, label: 'Schulen',          detail: 'alle Stufen vor Ort' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 px-5 py-4 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className="shrink-0 w-9 h-9 rounded flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.07)' }}
                    >
                      <item.Icon size={16} style={{ color: 'var(--color-goldsand)' }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#f6f5f2' }}>{item.label}</div>
                      <div className="text-xs font-light" style={{ color: 'rgba(246,245,242,0.5)' }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ANGEBOT TEASER ── */}
      <section className="py-32" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="label-tag">Angebot</span>
              <div className="accent-line" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: 'var(--color-text-core)',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Die Wohnungen im Überblick.
              </h2>
              <p style={{ marginBottom: '2rem' }}>
                Acht 4.5-Zimmer-Wohnungen mit Flächen zwischen 117 und 119 m², Sitzplätzen im
                Erdgeschoss und Balkonen in den Obergeschossen. Alle Grundrisse, Flächen und
                Verfügbarkeiten auf einen Blick.
              </p>
              <Link href="/angebot" className="btn-primary">
                Alle Wohnungen entdecken
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Summary cards */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '8',          label: 'Eigentumswohnungen' },
              { value: '4.5',        label: 'Zimmer' },
              { value: '117 bis 119 m²', label: 'Wohnfläche' },
              { value: '4',          label: 'Geschosse' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div
                  className="p-6 rounded-lg text-center"
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(82,68,52,0.08)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      color: 'var(--color-accent)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs font-light uppercase tracking-widest" style={{ color: 'var(--color-text-light)' }}>
                    {item.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <Gallery />

      {/* ── KONTAKT ── */}
      <ContactSection />
    </>
  )
}
