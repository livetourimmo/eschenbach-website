'use client'

export default function AtlistMap() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg h-[460px] md:h-[520px]"
      style={{
        border: '1px solid rgba(82,68,52,0.08)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
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
    </div>
  )
}
