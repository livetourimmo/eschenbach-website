'use client'

import { EINSTELLUNGEN_EVENT, gaAktiv } from '@/lib/statistik'

// Öffnet den Statistik-Hinweis erneut, damit der Entscheid jederzeit
// geändert oder widerrufen werden kann.
export default function DatenschutzEinstellungen({ className, style }: { className?: string; style?: React.CSSProperties }) {
  if (!gaAktiv) return null
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(EINSTELLUNGEN_EVENT))}
      className={className}
      style={style}
    >
      Datenschutz-Einstellungen
    </button>
  )
}
