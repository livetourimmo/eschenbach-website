import { INDEXNOW_SCHLUESSEL } from '@/lib/indexnow'

/** Schlüsseldatei für IndexNow (lib/indexnow.ts). Nur der Schlüssel als Klartext. */
export function GET(): Response {
  return new Response(INDEXNOW_SCHLUESSEL, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
