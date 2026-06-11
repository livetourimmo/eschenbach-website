import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
}

export default function ImpressumPage() {
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
            marginBottom: '3rem',
          }}
        >
          Impressum
        </h1>

        <div className="flex flex-col gap-10">
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text-core)', marginBottom: '1rem' }}>
              Verantwortlich für den Inhalt
            </h2>
            <div className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              <strong style={{ color: 'var(--color-text-core)', fontWeight: 500 }}>MO Architektur GmbH</strong><br />
              Bahnhofstrasse 2<br />
              8730 Uznach<br />
              Schweiz
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text-core)', marginBottom: '1rem' }}>
              Kontakt
            </h2>
            <div className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              Herr Phillip Wiedmer<br />
              Telefon:{' '}
              <a href="tel:+41555111100" style={{ color: 'var(--color-accent)' }}>055 511 11 00</a><br />
              E-Mail:{' '}
              <a href="mailto:pw@mo-architektur.ch" style={{ color: 'var(--color-accent)' }}>pw@mo-architektur.ch</a>
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text-core)', marginBottom: '1rem' }}>
              Haftungsausschluss
            </h2>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              Die MO Architektur GmbH übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit
              und Aktualität der auf dieser Website bereitgestellten Informationen. Alle Angaben
              zu Flächen, Preisen und Verfügbarkeiten sind unverbindlich und können sich ändern.
              Massgebend ist ausschliesslich der Kaufvertrag.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text-core)', marginBottom: '1rem' }}>
              Urheberrecht
            </h2>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              Die auf dieser Website veröffentlichten Inhalte (insbesondere Texte, Bilder,
              Visualisierungen und Pläne) sind urheberrechtlich geschützt. Jede Verwendung
              ausserhalb der engen Grenzen des Urheberrechtsgesetzes bedarf der vorherigen
              schriftlichen Zustimmung der MO Architektur GmbH.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text-core)', marginBottom: '1rem' }}>
              Visualisierungen
            </h2>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              Die auf dieser Website gezeigten Visualisierungen und Fotos sind unverbindliche
              Darstellungen. Abweichungen zum fertigen Objekt sind möglich.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text-core)', marginBottom: '1rem' }}>
              Technische Umsetzung
            </h2>
            <div className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              <strong style={{ color: 'var(--color-text-core)', fontWeight: 500 }}>liveTour Immobilienmarketing GmbH</strong><br />
              Maurerstrasse 8<br />
              8500 Frauenfeld<br />
              Schweiz<br />
              <br />
              Telefon:{' '}
              <a href="tel:+41715752317" style={{ color: 'var(--color-accent)' }}>071 575 23 17</a><br />
              E-Mail:{' '}
              <a href="mailto:info@livetour.ch" style={{ color: 'var(--color-accent)' }}>info@livetour.ch</a><br />
              Web:{' '}
              <a href="https://www.livetour.ch" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>www.livetour.ch</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
