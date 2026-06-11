'use client'

export default function AtlistMap() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{
        height: '520px',
        border: '1px solid rgba(82,68,52,0.08)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <iframe
        src="https://my.atlist.com/map/547d31ae-560c-4465-9043-0a52f9b6f6be?share=true"
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

      {/* Atlist branding overlay */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0"
        style={{
          width: '120px',
          height: '32px',
          background: 'var(--color-page)',
          borderTopLeftRadius: '4px',
        }}
      />
    </div>
  )
}
