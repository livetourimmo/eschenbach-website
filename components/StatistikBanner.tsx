'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  EINSTELLUNGEN_EVENT,
  gaAktiv,
  statistikLesen,
  statistikSpeichern,
  type StatistikEntscheid,
} from '@/lib/statistik'

// Fragt einmal nach der Statistik (Google Analytics). Beide Knöpfe sind
// gleichwertig; über «Datenschutz-Einstellungen» in der Fusszeile erscheint
// der Hinweis erneut.
export default function StatistikBanner() {
  const [sichtbar, setSichtbar] = useState(false)

  useEffect(() => {
    if (!gaAktiv) return
    const timer = window.setTimeout(() => setSichtbar(statistikLesen() === null), 0)
    const oeffnen = () => setSichtbar(true)
    window.addEventListener(EINSTELLUNGEN_EVENT, oeffnen)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener(EINSTELLUNGEN_EVENT, oeffnen)
    }
  }, [])

  function entscheiden(wert: StatistikEntscheid) {
    statistikSpeichern(wert)
    setSichtbar(false)
  }

  if (!sichtbar) return null

  return (
    <aside
      aria-label="Datenschutz-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
    >
      <div
        className="mx-auto max-w-4xl rounded-lg p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
        style={{
          background: 'var(--color-card)',
          border: '1px solid rgba(82,68,52,0.12)',
          boxShadow: 'var(--shadow-medium)',
          color: 'var(--color-text-core)',
        }}
      >
        <p className="text-sm leading-relaxed" style={{ fontWeight: 300 }}>
          Für die Besucherstatistik nutzen wir Google Analytics im Einwilligungsmodus. Ohne Ihre
          Zustimmung setzt Google keine Cookies und erhält nur cookielose Signale. Mit «Statistik
          erlauben» darf Google Analytics Cookies setzen. Ihre Wahl können Sie jederzeit über
          «Datenschutz-Einstellungen» in der Fusszeile ändern. Mehr in der{' '}
          <Link href="/datenschutz" className="underline underline-offset-4">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-col sm:flex-row gap-3">
          <button type="button" className="btn-primary justify-center" onClick={() => entscheiden('ja')}>
            Statistik erlauben
          </button>
          <button type="button" className="btn-primary justify-center" onClick={() => entscheiden('nein')}>
            Ablehnen
          </button>
        </div>
      </div>
    </aside>
  )
}
