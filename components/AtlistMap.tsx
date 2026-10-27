'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'eschen11-karte-laden'

export default function AtlistMap() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === '1') setLoaded(true)
    } catch {
      // localStorage nicht verfügbar: Karte bleibt bis zum Klick ausgeblendet
    }
  }, [])

  function loadMap() {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Auswahl kann nicht gespeichert werden, Karte wird trotzdem geladen
    }
    setLoaded(true)
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg h-[460px] md:h-[520px]"
      style={{
        border: '1px solid rgba(82,68,52,0.08)',
        boxShadow: 'var(--shadow-soft)',
        background: loaded ? undefined : 'var(--color-card)',
      }}
    >
      {loaded ? (
        <iframe
          src="https://my.atlist.com/map/547d31ae-560c-4465-9043-0a52f9b6f6be?share=true&marker_id=23e3397c-f4ef-4200-8bdb-074340568aa8&zoom=15&modal_open=false"
          allow="geolocation 'self' https://my.atlist.com"
          width="100%"
          height="100%"
          loading="lazy"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          id="atlist-embed"
          title="Lage Eschen 11, Rapperswilerstrasse 11, Eschenbach"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            // greedy gesture handling via CSS, prevents accidental map zoom on scroll
            touchAction: 'pan-x pan-y',
          }}
        />
      ) : (
        <div
          data-map-placeholder
          className="flex h-full w-full flex-col items-center justify-center px-6 text-center"
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              color: 'var(--color-text-core)',
              marginBottom: '0.75rem',
            }}
          >
            Interaktive Karte
          </p>
          <p
            className="max-w-md text-sm font-light leading-relaxed mb-6"
            style={{ color: 'var(--color-text-light)' }}
          >
            Die Karte wird vom Anbieter Atlist bereitgestellt und basiert auf Google Maps. Beim
            Laden werden Daten wie Ihre IP-Adresse an Atlist und Google übermittelt, auch in die
            USA. Weitere Informationen finden Sie in der{' '}
            <Link href="/datenschutz" style={{ color: 'var(--color-accent)' }}>
              Datenschutzerklärung
            </Link>
            .
          </p>
          <button type="button" className="btn-primary" onClick={loadMap}>
            Karte laden
          </button>
        </div>
      )}
    </div>
  )
}
