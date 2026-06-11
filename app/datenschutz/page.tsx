import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false },
}

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24" style={{ background: 'var(--color-page)' }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <span className="label-tag">Rechtliches</span>
        <div className="accent-line" />
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: 'var(--color-text-core)',
            lineHeight: 1.15,
            marginBottom: '0.5rem',
          }}
        >
          Datenschutzerklärung
        </h1>
        <p className="text-sm font-light mb-10" style={{ color: 'var(--color-contrast)' }}>
          Gemäss Schweizer Datenschutzgesetz (revDSG), gültig ab 1. September 2023
        </p>

        <div className="flex flex-col gap-10">
          <Section title="1. Verantwortliche Stelle">
            <p>
              Verantwortlich für die Datenbearbeitung auf dieser Website ist:<br />
              <strong style={{ color: 'var(--color-text-core)', fontWeight: 500 }}>MO Architektur GmbH</strong><br />
              Bahnhofstrasse 2, 8730 Uznach<br />
              E-Mail:{' '}
              <a href="mailto:pw@mo-architektur.ch" style={{ color: 'var(--color-accent)' }}>
                pw@mo-architektur.ch
              </a>
            </p>
          </Section>

          <Section title="2. Erhobene Daten">
            <p>
              Beim Ausfüllen des Kontaktformulars erheben wir folgende Personendaten:
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {['Name (Pflichtfeld)', 'E-Mail-Adresse (Pflichtfeld)', 'Telefonnummer (freiwillig)', 'Nachricht (Pflichtfeld)', 'Interessenangabe (freiwillig)'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span style={{ color: 'var(--color-accent)' }}>·</span> {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="3. Zweck der Datenbearbeitung">
            <p>
              Wir bearbeiten Ihre Daten ausschliesslich, um Ihre Anfrage zu beantworten und Sie im
              Zusammenhang mit dem Neubauprojekt Eschen 11 zu kontaktieren. Es erfolgt keine
              Weitergabe an Dritte zu Werbezwecken.
            </p>
          </Section>

          <Section title="4. Rechtsgrundlage">
            <p>
              Die Datenbearbeitung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung (Art. 6
              lit. a revDSG), die Sie durch Anklicken der Datenschutz-Checkbox erteilen, sowie zur
              Erfüllung vorvertraglicher Massnahmen auf Ihren Wunsch.
            </p>
          </Section>

          <Section title="5. Speicherdauer">
            <p>
              Ihre Kontaktanfragen werden in unserer gesicherten Datenbank gespeichert und nach
              Abschluss des Projekts oder auf Ihre Anfrage hin gelöscht, spätestens jedoch nach
              5 Jahren.
            </p>
          </Section>

          <Section title="6. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Bearbeitung Ihrer Personendaten. Richten Sie Ihr Gesuch schriftlich
              an:{' '}
              <a href="mailto:pw@mo-architektur.ch" style={{ color: 'var(--color-accent)' }}>
                pw@mo-architektur.ch
              </a>.
            </p>
          </Section>

          <Section title="7. Datensicherheit">
            <p>
              Ihre Daten werden verschlüsselt übertragen (TLS/HTTPS) und in einer
              zugangsbeschränkten Datenbank (Supabase, EU-Region) gespeichert. Wir treffen
              angemessene technische und organisatorische Massnahmen zum Schutz Ihrer Daten.
            </p>
          </Section>

          <Section title="8. Änderungen dieser Erklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die
              jeweils aktuelle Version ist auf dieser Website abrufbar.
            </p>
            <p className="mt-2 text-xs" style={{ color: 'var(--color-contrast)' }}>
              Stand: Juni 2026
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          color: 'var(--color-text-core)',
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h2>
      <div className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
        {children}
      </div>
    </section>
  )
}
