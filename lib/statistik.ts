// Entscheid zur Statistik (Google Analytics), nur im Browser gespeichert.
// 'ja' erlaubt Analytics-Cookies, 'nein' nicht, fehlend heisst: noch nicht gefragt.
export const STATISTIK_KEY = 'eschen11-statistik'
export const STATISTIK_EVENT = 'eschen11:statistik'
export const EINSTELLUNGEN_EVENT = 'eschen11:einstellungen'

export type StatistikEntscheid = 'ja' | 'nein'

export const gaAktiv = Boolean(process.env.NEXT_PUBLIC_GA_ID)

export function statistikLesen(): StatistikEntscheid | null {
  try {
    const wert = window.localStorage.getItem(STATISTIK_KEY)
    return wert === 'ja' || wert === 'nein' ? wert : null
  } catch {
    return null
  }
}

export function statistikSpeichern(wert: StatistikEntscheid) {
  try {
    window.localStorage.setItem(STATISTIK_KEY, wert)
  } catch {
    // Ohne Speicher gilt der Entscheid nur für diesen Besuch.
  }
  window.dispatchEvent(new CustomEvent(STATISTIK_EVENT, { detail: wert }))
}
