import { STATISTIK_KEY } from '@/lib/statistik'

// Google-Tag im Einwilligungsmodus (Consent Mode v2). Es steht immer im <head>,
// damit Google es findet. Standard ist für alle Speicherarten 'denied': ohne
// Zustimmung setzt Google keine Cookies und sendet nur cookielose Signale.
// Ein früher gespeicherter Entscheid wird sofort übernommen; spätere
// Änderungen meldet components/Statistik.tsx. Werbefunktionen bleiben aus.
export default function GoogleTag() {
  const messId = process.env.NEXT_PUBLIC_GA_ID
  if (!messId) return null

  const einrichten = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var statistik = false;
try { statistik = localStorage.getItem(${JSON.stringify(STATISTIK_KEY)}) === 'ja'; } catch (e) {}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: statistik ? 'granted' : 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', '${messId}');`

  return (
    <>
      <script id="google-tag-einwilligung" dangerouslySetInnerHTML={{ __html: einrichten }} />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${messId}`} />
    </>
  )
}
