import type { Metadata } from 'next'
import { Bus, Train, Route, GraduationCap, TreePine, Waves, ShoppingBag, Leaf, MapPin } from 'lucide-react'
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
        style={{ minHeight: '85vh', background: '#1a1917' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.65 }}
        >
          <source src="/bilder/drohnenvideo-eschenbach.mp4" type="video/mp4" />
        </video>
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
            Zwischen Rapperswil-Jona,<br />Uznach und Rüti.
          </h1>
        </div>
      </section>

      {/* ── EINLEITUNG ── */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-page)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="label-tag">Standort</span>
              <div className="accent-line" />
              <p className="gold-left text-lg font-light" style={{ color: 'var(--color-text-light)', lineHeight: 1.75 }}>
                Eschenbach liegt in der Region Zürichsee-Linth zwischen Rapperswil-Jona, Uznach und dem Zürcher Oberland. Der Ort verbindet eine überschaubare, ländlich geprägte Umgebung mit Schulen, Einkaufsmöglichkeiten und direkten Verbindungen in die umliegenden Zentren.
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
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
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
                Direkte Verbindungen in drei Richtungen.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Von Eschenbach bestehen direkte Busverbindungen nach Rapperswil-Jona, Uznach und Rüti ZH. Damit sind wichtige Arbeits-, Einkaufs- und Bildungsstandorte der Region ohne Umweg erreichbar.
              </p>
              <p>
                Ab Rapperswil-Jona dauert die Fahrt mit der S-Bahn nach Zürich HB rund 40 Minuten. Mit dem Auto erfolgt der Anschluss an die A15 über Neuhaus oder Jona.
              </p>

              {/* Transport grid */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { Icon: Bus,   dest: 'Rapperswil-Jona',   time: 'direkt mit dem Bus' },
                  { Icon: Bus,   dest: 'Uznach und Rüti ZH', time: 'direkt mit dem Bus' },
                  { Icon: Train, dest: 'Zürich HB',         time: 'rund 40 Minuten ab Rapperswil-Jona' },
                  { Icon: Route, dest: 'A15',               time: 'Anschlüsse Neuhaus und Jona' },
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
                Alltag und Freizeit in Eschenbach.
              </h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Kindergarten, Primarschule und Oberstufe sind in der Gemeinde vorhanden. Auch Einkaufsmöglichkeiten und verschiedene Dienstleistungen stehen im Ort zur Verfügung.
              </p>
              <p>
                Für die Freizeit bietet die Umgebung Wege durch die Landschaft rund um Eschenbach und das Goldingertal. Das Neuhüsler-Tobel und der Zürichsee sind Ziele für Spaziergänge und Ausflüge in der näheren Region.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { Icon: GraduationCap, label: 'Schulen',            detail: 'Kindergarten bis Oberstufe' },
                  { Icon: ShoppingBag,   label: 'Einkaufen',         detail: 'Angebote im Ort' },
                  { Icon: TreePine,      label: 'Natur',             detail: 'Wege rund um Eschenbach' },
                  { Icon: Leaf,          label: 'Goldingertal',      detail: 'Freizeit und Naherholung' },
                  { Icon: MapPin,        label: 'Neuhüsler-Tobel',   detail: 'Ausflugsziel in der Umgebung' },
                  { Icon: Waves,         label: 'Zürichsee',         detail: 'Gut erreichbar' },
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
