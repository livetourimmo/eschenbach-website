'use client'

import { useEffect } from 'react'
import { gaAktiv, STATISTIK_EVENT, statistikLesen, type StatistikEntscheid } from '@/lib/statistik'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Meldet Google den Statistik-Entscheid. Beim Widerruf werden die bereits
// gesetzten Analytics-Cookies gelöscht.
export default function Statistik() {
  useEffect(() => {
    if (!gaAktiv) return

    function melden(wert: StatistikEntscheid | null) {
      if (typeof window.gtag !== 'function') return
      const erlaubt = wert === 'ja'
      window.gtag('consent', 'update', { analytics_storage: erlaubt ? 'granted' : 'denied' })
      if (!erlaubt) analyseCookiesLoeschen()
    }

    const beiAenderung = (event: Event) => melden((event as CustomEvent<StatistikEntscheid>).detail)
    melden(statistikLesen())
    window.addEventListener(STATISTIK_EVENT, beiAenderung)
    return () => window.removeEventListener(STATISTIK_EVENT, beiAenderung)
  }, [])

  return null
}

// Entfernt _ga und _ga_<ID> auf der aktuellen Domain und ihren Oberdomains.
function analyseCookiesLoeschen() {
  const namen = document.cookie
    .split(';')
    .map((eintrag) => eintrag.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
  if (namen.length === 0) return

  const teile = window.location.hostname.split('.')
  const domains = teile.map((_, i) => teile.slice(i).join('.')).filter((d) => d.includes('.'))
  for (const name of namen) {
    document.cookie = `${name}=; Max-Age=0; path=/`
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`
  }
}
