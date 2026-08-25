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
          src="/bilder/4K_Aussen1.png"
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
          <div className="max-w-3xl">
            <span
              className="label-tag block mb-4"
              style={{ color: 'rgba(246,245,242,0.7)' }}
            >
              Eschenbach SG · Rapperswilerstrasse 11
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                lineHeight: 1.08,
                letterSpacing: '0.02em',
                color: '#f6f5f2',
                marginBottom: '1.5rem',
              }}
            >
              Ihr Wohlfühlort im<br />Herzen von Eschenbach
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
              Acht 4.5-Zimmer-Eigentumswohnungen mit 117 bis 119 m² Wohnfläche, grossen Wohnbereichen und zwei privaten Aussenflächen.
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
                Zwei Wohnungen pro Etage. Viel Raum für den Alltag.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                An der Rapperswilerstrasse 11 entstehen acht 4.5-Zimmer-Eigentumswohnungen. Pro Geschoss befinden sich zwei Wohnungen, die bequem mit dem Personenlift erschlossen sind. Die Tiefgarage liegt direkt im Gebäude.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Im Zentrum jeder Wohnung steht der rund 48 m² grosse Wohn-, Ess- und Kochbereich. Drei weitere Zimmer, zwei separate Nasszellen, ein Reduit und ein zusätzlicher Vorraum sorgen für eine klare Raumaufteilung und ausreichend Platz im Alltag.
              </p>
              <p>
                Die Erdgeschosswohnungen verfügen über zwei private Sitzplätze mit insgesamt 25 m². In den Ober- und Dachgeschossen ergänzen zwei Balkonflächen mit insgesamt 23 bis 24 m² den Wohnraum. Eine in das Gebäude integrierte Photovoltaikanlage produziert Strom direkt vor Ort.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src="/bilder/4K_Aussen2.png"
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
                  src="/bilder/4K_Innen1.png"
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
                Materialien mit eigener Handschrift.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Die Architektur von Eschen 11 wird durch eine warme, zurückhaltende Farb- und Materialwelt geprägt. Grobe Putzflächen in Warmgrau treffen auf glatte Flächen in hellen und warmen Sandtönen. Messingfarbene Fensterrahmen und Geländer in einem bronzefarbenen Ton setzen gezielte Akzente.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Das dunkelgraue Dach und die Metallteile mit Kupferton bilden einen ruhigen Kontrast zur helleren Fassade. So entsteht ein harmonisches Gesamtbild aus erdigen Farben, natürlichen Materialien und fein eingesetzten Metallakzenten.
              </p>
              <p>
                Im Innern sorgen weisse Wände, Parkett in Eiche natur und beige Platten für eine helle und ruhige Atmosphäre. In den Dachwohnungen ergänzen weiss lasierte Holzdecken und sichtbare Pfetten das Materialkonzept.
              </p>
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
                Im Dorf zu Hause, in der Region gut verbunden.
              </h2>
              <p className="gold-left" style={{ color: 'rgba(246,245,242,0.7)', marginBottom: '2rem', borderColor: 'var(--color-goldsand)' }}>
                Eschenbach bietet einen gut organisierten Alltag in ländlicher Umgebung. Einkaufsmöglichkeiten und Schulen befinden sich im Ort, während direkte Busverbindungen nach Rapperswil-Jona, Uznach und Rüti ZH führen. Ab Rapperswil-Jona ist Zürich HB mit der S-Bahn in rund 40 Minuten erreichbar. Für den Individualverkehr liegen die Anschlüsse an die A15 in Neuhaus und Jona.
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
                  { Icon: Train,         label: 'Zürich HB',       detail: 'ca. 40 Min. ab Rapperswil-Jona' },
                  { Icon: Route,         label: 'Autobahn A15',    detail: 'Anschlüsse Neuhaus & Jona' },
                  { Icon: GraduationCap, label: 'Schulen',          detail: 'alle Stufen vor Ort' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="card-interactive flex items-center gap-4 px-5 py-4 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className="icon-badge shrink-0 w-9 h-9 rounded flex items-center justify-center"
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
              <p style={{ marginBottom: '1.25rem' }}>
                Acht Wohnungen, ein klar aufgebautes Raumkonzept: Sämtliche Einheiten verfügen über 4.5 Zimmer und Wohnflächen zwischen 117 und 119 m². Hinzu kommen zwei private Sitzplätze im Erdgeschoss beziehungsweise zwei Balkonflächen in den Ober- und Dachgeschossen.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Entdecken Sie die einzelnen Wohnungen mit Grundrissen, Flächen und aktueller Verfügbarkeit.
              </p>
              <Link href="/angebot" className="btn-primary">
                Alle Wohnungen entdecken
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Summary stats -- editorial layout */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4" style={{ borderTop: '1px solid rgba(153,143,72,0.2)', borderBottom: '1px solid rgba(153,143,72,0.2)' }}>
            {[
              { value: '8',      label: 'Eigentumswohnungen' },
              { value: '4.5',    label: 'Zimmer' },
              { value: '117–119', label: 'm² Wohnfläche' },
              { value: '4',      label: 'Geschosse' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div
                  className="flex flex-col items-center justify-center text-center py-12 px-6"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(153,143,72,0.2)' : 'none',
                    minHeight: '10rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                      color: 'var(--color-accent)',
                      lineHeight: 1,
                      letterSpacing: '-0.01em',
                      marginBottom: '0.6rem',
                      whiteSpace: 'nowrap',
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

      {/* -- GALERIE */}
      <Gallery />

      {/* -- KONTAKT */}
      <ContactSection />
    </>
  )
}
