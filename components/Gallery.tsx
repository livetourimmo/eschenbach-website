'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/images/E1.png',        alt: 'Eschen 11 , Aussenansicht',    aspect: 'landscape' },
  { src: '/images/E2.png',        alt: 'Eschen 11 , Gebäudeansicht',   aspect: 'landscape' },
  { src: '/images/Interior1.png', alt: 'Eschen 11 , Innenraum',        aspect: 'landscape' },
  { src: '/images/Interior2.png', alt: 'Eschen 11 , Wohnbereich',      aspect: 'landscape' },
  { src: '/images/Interior3.png', alt: 'Eschen 11 , Küche',            aspect: 'landscape' },
  { src: '/images/Interior4.png', alt: 'Eschen 11 , Detail',           aspect: 'landscape' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close  = useCallback(() => setLightbox(null), [])
  const prev   = useCallback(() => setLightbox(i => (i === null ? null : (i - 1 + images.length) % images.length)), [])
  const next   = useCallback(() => setLightbox(i => (i === null ? null : (i + 1) % images.length)), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, prev, next])

  return (
    <section className="py-32" style={{ background: 'var(--color-page)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <span className="label-tag">Einblicke</span>
          <div className="accent-line" />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: 'var(--color-text-core)',
              letterSpacing: '0.03em',
            }}
          >
            Architektur und Raum
          </h2>
        </div>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Feature image , spans 2 cols */}
          <button
            className="md:col-span-2 relative overflow-hidden rounded-lg group cursor-pointer"
            style={{ aspectRatio: '16/10' }}
            onClick={() => setLightbox(0)}
            aria-label={images[0].alt}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
              loading="lazy"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ background: 'rgba(45,42,39,0.15)' }} />
          </button>

          {/* Right column — fills exact height of feature image */}
          <div className="flex flex-col gap-3">
            {images.slice(1, 3).map((img, i) => (
              <button
                key={img.src}
                className="relative overflow-hidden rounded-lg group cursor-pointer flex-1"
                style={{ minHeight: '10rem' }}
                onClick={() => setLightbox(i + 1)}
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ background: 'rgba(45,42,39,0.15)' }} />
              </button>
            ))}
          </div>

          {/* Bottom row */}
          {images.slice(3).map((img, i) => (
            <button
              key={img.src}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              style={{ aspectRatio: '4/3', minHeight: '14rem' }}
              onClick={() => setLightbox(i + 3)}
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: 'rgba(45,42,39,0.15)' }} />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(20,18,16,0.95)', backdropFilter: 'blur(8px)' }}
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white transition-colors"
            onClick={close}
            aria-label="Schliessen"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 md:left-8 p-3 rounded-full text-white/70 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="relative max-w-5xl w-full mx-8"
            style={{ aspectRatio: '16/10' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 md:right-8 p-3 rounded-full text-white/70 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="absolute bottom-5 text-sm"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}
