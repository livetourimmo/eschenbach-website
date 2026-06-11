import type { Metadata } from 'next'
import Image from 'next/image'
import { Bus, Train, Route, GraduationCap, Music, TreePine, Waves, ShoppingBag, Leaf } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import AtlistMap from '@/components/AtlistMap'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Lage',
  description:
    'Eschenbach liegt zwischen Voralpen und Zürichsee, mit direkter Busverbindung nach Rapperswil-Jona und S-Bahn-Anschluss nach Zürich.',
}

export default function LagePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-end"
        style={{ minHeight: '65vh', background: '#1a1917' }}
      >
        <Image
          src="/images/E2.png"
          alt="Eschenbach, Aussenansicht"
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
            Lage
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
            Zwischen Voralpen<br />und Zürichsee.
          </h1>
        </div>
      </section>

      {/* ── EINLEITUNG ── */}
      <section className="py-24" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="label-tag">Standort</span>
              <div className="accent-line" />
              <p className="gold-left text-lg font-light" style={{ color: 'var(--color-text-light)', lineHeight: 1.75 }}>
                Eschenbach zählt heute über 10'000 Einwohnerinnen und Einwohner und liegt im
                Kanton St. Gallen, eingebettet in die vielfältige Landschaft der Region
                Zürichsee-Linth. Das Dorf verbindet ländliche Qualität mit einer ausgezeichneten
                Anbindung an die Zentren der Region.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── INTERAKTIVE KARTE ── */}
      <section className="pb-24" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="label-tag mb-6 block">Interaktive Karte</span>
            <AtlistMap />
            <p className="text-xs mt-3" style={{ color: 'var(--color-contrast)' }}>
              Rapperswilerstrasse 11, 8733 Eschenbach SG
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAKROEBENE (Region) ── */}
      <section className="py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="label-tag">Makroebene: Die Region</span>
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
                Gut angebunden, ruhig gelegen.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Im Bus-Takt gelangt man direkt nach Rapperswil-Jona, dem Dienstleistungszentrum
                der Region, sowie nach Uznach und Rüti ZH. Mit der S-Bahn ist Zürich ab
                Rapperswil in rund 40 Minuten erreichbar.
              </p>
              <p>
                Per Auto besteht über die A15-Anschlüsse in Neuhaus und Jona direkter Zugang zum
                nationalen Hochleistungsstrassennetz.
              </p>

              {/* Transport grid */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { Icon: Bus,   dest: 'Rapperswil-Jona',  time: 'direkt, mehrmals stündlich' },
                  { Icon: Bus,   dest: 'Uznach & Rüti ZH', time: 'direkt' },
                  { Icon: Train, dest: 'Zürich HB',        time: 'ca. 40 Min. ab Rapperswil' },
                  { Icon: Route, dest: 'Autobahn A15',     time: 'Anschlüsse Neuhaus & Jona' },
                ].map(t => (
                  <div
                    key={t.dest}
                    className="card-interactive flex items-center gap-4 px-4 py-3 rounded"
                    style={{
                      background: 'var(--color-page)',
                      border: '1px solid rgba(82,68,52,0.08)',
                    }}
                  >
                    <div
                      className="icon-badge shrink-0 w-9 h-9 rounded flex items-center justify-center"
                      style={{ background: 'rgba(153,143,72,0.1)' }}
                    >
                      <t.Icon size={16} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: 'var(--color-text-core)' }}>{t.dest}</div>
                      <div className="text-xs font-light" style={{ color: 'var(--color-text-light)' }}>{t.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* ── MIKROEBENE (unmittelbare Umgebung) ── */}
            <ScrollReveal delay={100}>
              <span className="label-tag">Mikroebene: Unmittelbare Umgebung</span>
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
                Leben in Eschenbach.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Für Familien bietet Eschenbach alle Schulstufen vom Kindergarten bis zur Oberstufe
                vor Ort, ergänzt durch zwei Musikschulen. Die Kantonsschule ist im nahen Wattwil.
              </p>
              <p>
                Wanderwege, Velostrecken und Spaziergänge entlang des Zürichsees liegen direkt
                vor der Haustür. Die wildromantische Schlucht des Neuhüsler-Tobels mit ihren
                Nagelfluhwänden ist ein beliebtes Naherholungsgebiet der ganzen Region.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { Icon: GraduationCap, label: 'Schule',          detail: 'Alle Stufen vor Ort' },
                  { Icon: Music,         label: 'Musikschule',      detail: 'Zwei Musikschulen' },
                  { Icon: TreePine,      label: 'Wanderwege',       detail: 'Direkt ab Haustür' },
                  { Icon: Waves,         label: 'Zürichsee',        detail: 'In der Nähe' },
                  { Icon: ShoppingBag,   label: 'Einkaufen',        detail: 'Im Dorf' },
                  { Icon: Leaf,          label: 'Neuhüsler-Tobel',  detail: 'Naherholung' },
                ].map(item => (
                  <div
                    key={item.label}
                    className="card-interactive flex items-center gap-3 p-3 rounded"
                    style={{
                      background: 'var(--color-page)',
                      border: '1px solid rgba(82,68,52,0.08)',
                    }}
                  >
                    <div
                      className="icon-badge shrink-0 w-8 h-8 rounded flex items-center justify-center"
                      style={{ background: 'rgba(153,143,72,0.08)' }}
                    >
                      <item.Icon size={14} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: 'var(--color-text-core)' }}>{item.label}</div>
                      <div className="text-xs font-light" style={{ color: 'var(--color-text-light)' }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <ContactSection />
    </>
  )
}
