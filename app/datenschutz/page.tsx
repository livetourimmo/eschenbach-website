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
              <strong style={{ color: 'var(--color-text-core)', fontWeight: 500 }}>Dreiwert Immobilien GmbH</strong><br />
              Bahnhofstrasse 2, 8730 Uznach<br />
              E-Mail:{' '}
              <a href="mailto:pw@dreiwert.ch" style={{ color: 'var(--color-accent)' }}>
                pw@dreiwert.ch
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
            <p className="mt-3">
              Beim Besuch der Website fallen zudem technische Daten an, etwa IP-Adresse, Browser
              und aufgerufene Seiten (siehe Abschnitte 6, 8 und 9).
            </p>
          </Section>

          <Section title="3. Zweck der Datenbearbeitung">
            <p>
              Daten aus dem Kontaktformular bearbeiten wir ausschliesslich, um Ihre Anfrage zu
              beantworten und Sie im Zusammenhang mit dem Neubauprojekt Eschen 11 zu kontaktieren.
              Technische Daten aus dem Besuch der Website verwenden wir für Betrieb und Sicherheit
              der Website sowie für die Besucherstatistik (Abschnitte 8 und 9). Es erfolgt keine
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
              Ihre Kontaktanfragen werden uns per E-Mail übermittelt und nicht in einer
              Datenbank dieser Website gespeichert. Wir bewahren sie auf und löschen sie nach
              Abschluss des Projekts oder auf Ihre Anfrage hin, spätestens jedoch nach 5 Jahren.
            </p>
          </Section>

          <Section title="6. Hosting">
            <p>
              Diese Website wird bei Vercel Inc., San Francisco, USA, betrieben. Als Serverregion
              ist Frankfurt am Main (fra1) eingestellt; eine Verarbeitung über die globale
              Infrastruktur von Vercel, insbesondere auch in den USA, ist möglich. Zweck ist der
              Betrieb und die Auslieferung der Website. Dabei fallen Serverprotokolle mit
              IP-Adresse, Abrufzeit, aufgerufener Adresse und Browserangaben an.
            </p>
          </Section>

          <Section title="7. Kontaktformular und E-Mail-Versand">
            <p>
              Ihre Angaben aus dem Kontaktformular werden über den E-Mail-Dienst Resend der
              Resend Inc. (USA) an das Vermarktungsteam übermittelt. Sie werden nicht in einer
              Datenbank dieser Website gespeichert.
            </p>
          </Section>

          <Section title="8. Besucherstatistik (Vercel Web Analytics)">
            <p>
              Zur Verbesserung der Website nutzen wir Vercel Web Analytics der Vercel Inc. (USA).
              Erfasst werden zusammengefasste Angaben zu Seitenaufrufen, etwa die aufgerufene
              Seite, die verweisende Seite, Land, Browser, Betriebssystem und Gerätetyp. Es werden
              keine Cookies gesetzt und keine Kennungen im Browser gespeichert. Besucher werden nur
              über einen täglich wechselnden, nicht umkehrbaren Hashwert unterschieden; die
              IP-Adresse wird dafür nicht gespeichert. Ein Rückschluss auf einzelne Personen ist
              nicht vorgesehen.
            </p>
          </Section>

          <Section title="9. Google Analytics (Einwilligungsmodus)">
            <p>
              Wir nutzen Google Analytics 4 der Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland, im Einwilligungsmodus (Consent Mode). Das Google-Tag wird
              bei jedem Seitenaufruf geladen; dabei erhält Google Ihre IP-Adresse sowie Angaben zu
              Browser, Gerät und aufgerufener Seite.
            </p>
            <p className="mt-3">
              Solange Sie der Statistik nicht zugestimmt haben, setzt Google keine Cookies und
              speichert keine Kennungen in Ihrem Browser. Es werden dann nur cookielose Signale
              übermittelt, aus denen Google die Nutzung der Website statistisch hochrechnet. Erst
              wenn Sie «Statistik erlauben» wählen, setzt Google Analytics-Cookies (_ga,
              _ga_&lt;ID&gt;) und erfasst Seitenaufrufe einzelnen Besuchen zugeordnet.
              Werbefunktionen sind ausgeschaltet.
            </p>
            <p className="mt-3">
              Ihre Wahl speichern wir im lokalen Speicher Ihres Browsers (localStorage). Sie können
              sie jederzeit über «Datenschutz-Einstellungen» in der Fusszeile ändern; bei einem
              Widerruf werden die Analytics-Cookies gelöscht. Google kann Daten in die USA
              übermitteln (siehe Abschnitt 11). Weitere Informationen:{' '}
              <a href="https://policies.google.com/privacy?hl=de" className="underline underline-offset-4">
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </Section>

          <Section title="10. Cookies und externe Dienste">
            <p>
              Ohne Ihre Zustimmung setzt diese Website keine Tracking- oder Marketing-Cookies. Google Analytics setzt Cookies erst, wenn Sie der Statistik zustimmen (Abschnitt 9). Schriftarten werden
              lokal von unserem Server ausgeliefert, es erfolgt keine Verbindung zu Google-Servern.
              Für die Wohnungsübersicht binden wir den Immobiliennavigator unseres
              Marketingpartners liveTour Immobilienmarketing GmbH per iframe ein.
            </p>
            <p className="mt-3">
              Auf der Seite «Lage» zeigen wir eine interaktive Karte des Anbieters Atlist, die auf
              Google Maps von Google basiert. Die Karte wird erst geladen, wenn Sie auf «Karte
              laden» klicken. Erst dann werden Daten wie Ihre IP-Adresse und Browserangaben an
              Atlist und Google übermittelt, auch in die USA. Damit die Karte bei späteren
              Besuchen direkt angezeigt wird, speichern wir Ihre Auswahl im lokalen Speicher Ihres
              Browsers (localStorage). Sie können diesen Eintrag jederzeit über die
              Browsereinstellungen löschen.
            </p>
          </Section>

          <Section title="11. Datenübermittlung ins Ausland">
            <p>
              Einige dieser Dienstleister haben ihren Sitz ausserhalb der Schweiz und des EWR,
              namentlich in den USA. Wir stützen diese Bekanntgabe auf geeignete Garantien,
              insbesondere die Standardvertragsklauseln der Europäischen Kommission.
            </p>
          </Section>

          <Section title="12. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Bearbeitung Ihrer Personendaten. Richten Sie Ihr Gesuch schriftlich
              an:{' '}
              <a href="mailto:pw@dreiwert.ch" style={{ color: 'var(--color-accent)' }}>
                pw@dreiwert.ch
              </a>.
            </p>
          </Section>

          <Section title="13. Datensicherheit">
            <p>
              Ihre Daten werden verschlüsselt übertragen (TLS/HTTPS). Wir treffen angemessene
              technische und organisatorische Massnahmen zum Schutz Ihrer Daten.
            </p>
          </Section>

          <Section title="14. Änderungen dieser Erklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die
              jeweils aktuelle Version ist auf dieser Website abrufbar.
            </p>
            <p className="mt-2 text-xs" style={{ color: 'var(--color-contrast)' }}>
              Stand: 27. Oktober 2026
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
