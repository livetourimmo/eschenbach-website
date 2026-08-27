import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Download, FileText } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Angebot',
  description:
    'Acht 4.5-Zimmer-Eigentumswohnungen mit Flächen zwischen 125.5 und 128 m². Grundrisse, Verfügbarkeiten und Downloads.',
}

const downloads = [
  {
    title:    'Grundrisse Eschen 11',
    subtitle: 'Alle Wohnungsgrundrisse in einem Dokument',
    file:     '/downloads/Grundrisse_Eschen11.pdf',
    size:     '11.0 MB',
    icon:     'plan',
  },
  {
    title:    'Situationsplan',
    subtitle: 'Lageplan und Umgebung',
    file:     '/downloads/Situationsplan.pdf',
    size:     '1.6 MB',
    icon:     'plan',
  },
]

export default function AngebotPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-end"
        style={{ minHeight: '85vh', background: '#1a1917' }}
      >
        <Image
          src="/bilder/4K_Innen2.png"
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
              <p className="gold-left text-lg font-light" style={{ color: 'var(--color-text-light)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Das Mehrfamilienhaus Eschen 11 umfasst acht 4.5-Zimmer-Eigentumswohnungen, verteilt auf vier Geschosse. Die Wohnungen bieten Bruttowohnflächen zwischen 125.5 und 128 m².
              </p>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Herzstück ist der 47.5 bis 48 m² grosse Wohn-, Ess- und Kochbereich. Drei Zimmer mit Flächen zwischen 15 und 18.5 m² lassen sich als Schlaf-, Kinder-, Gäste- oder Arbeitszimmer nutzen. Hinzu kommen ein Bad mit WC und Badewanne, eine separate Dusche mit WC sowie Waschmaschine/Tumbler, ein Reduit sowie ein zusätzlicher Vorraum.
              </p>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.75 }}>
                Die Raumaufteilung trennt den offenen Wohnbereich klar von den privaten Zimmern. Gleichzeitig bleiben die Wege innerhalb der Wohnung kurz und übersichtlich.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <div
                className="card-interactive p-6 rounded-lg"
                style={{ background: '#ffffff', border: '1px solid rgba(82,68,52,0.08)', boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="label-tag mb-3">Zwei private Sitzplätze</div>
                <p className="text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  Die beiden Erdgeschosswohnungen verfügen über zwei Sitzplätze auf unterschiedlichen Gebäudeseiten mit zusammen 25 m² sowie zusätzlich über einen eigenen Garten.
                </p>
              </div>
              <div
                className="card-interactive p-6 rounded-lg"
                style={{ background: '#ffffff', border: '1px solid rgba(82,68,52,0.08)', boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="label-tag mb-3">Aussenraum auf zwei Seiten</div>
                <p className="text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  Die Wohnungen im ersten und zweiten Obergeschoss sowie im Dachgeschoss verfügen über zwei Balkonflächen mit insgesamt 23 bis 24 m².
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── NAVIGATOR (PLATZHALTER) ── */}
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
                Wohnungsnavigator
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ borderRadius: '0.75rem', overflow: 'hidden' }}>
            <iframe
              id="lvt-axo-rapperswilerstrasse-11"
              src="https://lvt-gamma.vercel.app/embed/immobilie/rapperswilerstrasse-11?source=embed&embedMode=responsive"
              title="Immobiliennavigator"
              style={{ width: '100%', height: 'clamp(620px,86dvh,900px)', border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Script id="lvt-axo-rapperswilerstrasse-11-resize" strategy="afterInteractive">
        {`
          (function () {
            var iframe = document.getElementById("lvt-axo-rapperswilerstrasse-11");
            if (!iframe) return;
            var isMobile = function () {
              return window.matchMedia("(max-width: 767px)").matches;
            };
            var syncMobileHeight = function () {
              iframe.style.height = isMobile()
                ? iframe.dataset.lvtHeight || "760px"
                : "clamp(620px,86dvh,900px)";
            };

            window.addEventListener("message", function (event) {
              if (
                event.source !== iframe.contentWindow ||
                !event.data ||
                event.data.type !== "lvt-axo-resize" ||
                typeof event.data.height !== "number" ||
                !isMobile()
              ) {
                return;
              }

              iframe.dataset.lvtHeight = Math.ceil(event.data.height) + "px";
              syncMobileHeight();
            });
            window.addEventListener("resize", syncMobileHeight);
          })();
        `}
      </Script>

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
                Alle acht Wohnungen sind gleich aufgeteilt. Folgende Räume stehen zur Verfügung:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  ['Wohnen / Essen / Kochen', '47.5 bis 48 m², mit direktem Zugang zu beiden Aussenflächen'],
                  ['Drei Zimmer',             '15 bis 18.5 m², als Schlaf-, Kinder-, Gäste- oder Arbeitszimmer nutzbar'],
                  ['Bad',                     'Mit WC und Badewanne'],
                  ['Dusche',                  'Mit WC sowie Waschmaschine/Tumbler'],
                  ['Entrée',                  'Zugang zum Wohnbereich und zum grossen Zimmer'],
                  ['Vorraum',                 'Erschliessung der zwei weiteren Zimmer und des Bads'],
                  ['Reduit',                  '2 m² für Vorräte, Haushaltsgeräte und Alltagsgegenstände'],
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
                  src="/bilder/4K_Innen3.png"
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
                  Kurzbaubeschrieb und weitere Unterlagen erhalten Sie auf Anfrage.
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
              Ruhige Basis, markante Details.
            </h2>
            <p style={{ maxWidth: '40rem', marginBottom: '1.25rem' }}>
              Eichenparkett, matte Platten in Beige und helle Wandflächen bilden die ruhige Grundlage der Innenräume. In den Dachwohnungen kommen weiss lasierte Holzdecken und sichtbare Pfetten hinzu.
            </p>
            <p style={{ maxWidth: '40rem', marginBottom: '1.25rem' }}>
              Die zurückhaltenden Materialien im Innern werden durch die messing- und bronzefarbenen Details der Gebäudehülle ergänzt.
            </p>
            <p style={{ maxWidth: '40rem', marginBottom: '3rem', fontStyle: 'italic', color: 'var(--color-text-light)' }}>
              Die Materialisierung wird vom Architekten vorgeschlagen, ist aber individuell wählbar.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'WOHNRÄUME',          name: 'Parkett, Eiche natur',         detail: '',                photo: '/bilder/boden.jpg'   },
              { label: 'BAD UND DUSCHE / WC', name: 'Feinsteinzeugplatten',        detail: 'Beige matt',      photo: '/bilder/platten.jpg' },
              { label: 'DACHGESCHOSS',        name: 'Holzdecke und Pfetten',       detail: 'weiss lasiert',   photo: '/bilder/decke.jpg'   },
              { label: 'FENSTER INNENSEITE',  name: 'Holz-Metall',                 detail: 'Weiss',           photo: '/bilder/fenster.jpg' },
              { label: 'WÄNDE UND DECKEN',    name: 'Weiss gestrichen',            detail: '',                photo: '/bilder/wand.jpg'    },
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
