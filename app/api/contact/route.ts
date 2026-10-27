import { NextResponse } from 'next/server'

const GENERIC_ERROR =
  'Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.'

const LIMITS = {
  name: 200,
  email: 254,
  telefon: 50,
  interesse: 100,
  nachricht: 5000,
} as const

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/
const TEL_RE = /^[0-9+()\/.\s-]*$/

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function error(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

function readString(body: Record<string, unknown>, key: string): string {
  const value = body[key]
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    const parsed: unknown = await request.json()
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return error('Ungültige Anfrage.', 400)
    }
    body = parsed as Record<string, unknown>
  } catch {
    return error('Ungültige Anfrage.', 400)
  }

  // Honeypot: bots fill the hidden field. Pretend success so they don't retry.
  if (readString(body, 'honeypot')) {
    return NextResponse.json({ ok: true })
  }

  const name = readString(body, 'name')
  const email = readString(body, 'email')
  const telefon = readString(body, 'telefon')
  const interesse = readString(body, 'interesse')
  const nachricht = readString(body, 'nachricht')

  if (!name || !email || !nachricht) {
    return error('Bitte füllen Sie Name, E-Mail und Nachricht aus.', 400)
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    telefon.length > LIMITS.telefon ||
    interesse.length > LIMITS.interesse ||
    nachricht.length > LIMITS.nachricht
  ) {
    return error('Eine Ihrer Eingaben ist zu lang. Bitte kürzen Sie sie.', 400)
  }
  if (!EMAIL_RE.test(email)) {
    return error('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 400)
  }
  if (!TEL_RE.test(telefon)) {
    return error('Bitte geben Sie eine gültige Telefonnummer ein.', 400)
  }
  if (body.datenschutz !== true) {
    return error('Bitte bestätigen Sie die Datenschutzerklärung.', 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.KONTAKT_MAIL_FROM
  const to = process.env.KONTAKT_MAIL_TO
  const missing = [
    !apiKey && 'RESEND_API_KEY',
    !from && 'KONTAKT_MAIL_FROM',
    !to && 'KONTAKT_MAIL_TO',
  ].filter(Boolean)
  if (!apiKey || !from || !to) {
    console.error(`Kontaktformular: fehlende Umgebungsvariablen: ${missing.join(', ')}`)
    return error(GENERIC_ERROR, 503)
  }

  const eName = escapeHtml(name)
  const eEmail = escapeHtml(email)
  const eTelefon = escapeHtml(telefon)
  const eInteresse = escapeHtml(interesse)
  const eNachricht = escapeHtml(nachricht)

  // `value` must already be escaped HTML.
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0; border-bottom:1px solid #ece9e3; color:#989898; font-size:13px; letter-spacing:0.04em; text-transform:uppercase; width:130px; vertical-align:top;">${label}</td>
      <td style="padding:10px 0; border-bottom:1px solid #ece9e3; color:#2d2a27; font-size:15px; vertical-align:top;">${value}</td>
    </tr>
  `

  const html = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="margin:0;">
    <div style="background-color:#f6f5f2; padding:32px 16px; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width:560px; margin:0 auto; background-color:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #ece9e3;">
        <div style="background-color:#615243; padding:28px 32px;">
          <span style="display:block; color:#ffffff; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; opacity:0.75; margin-bottom:4px;">Eschen 11</span>
          <span style="display:block; color:#ffffff; font-size:20px; font-weight:bold;">Neue Kontaktanfrage</span>
        </div>
        <div style="padding:28px 32px;">
          <table style="width:100%; border-collapse:collapse;">
            ${row('Name', `<strong>${eName}</strong>`)}
            ${row('E-Mail', `<a href="mailto:${eEmail}" style="color:#998f48; text-decoration:none;">${eEmail}</a>`)}
            ${telefon ? row('Telefon', `<a href="tel:${eTelefon}" style="color:#998f48; text-decoration:none;">${eTelefon}</a>`) : ''}
            ${interesse ? row('Interesse', eInteresse) : ''}
          </table>
          <p style="color:#989898; font-size:13px; letter-spacing:0.04em; text-transform:uppercase; margin:24px 0 8px;">Nachricht</p>
          <p style="color:#2d2a27; font-size:15px; line-height:1.6; white-space:pre-wrap; margin:0;">${eNachricht}</p>
        </div>
        <div style="padding:16px 32px; background-color:#f6f5f2; border-top:1px solid #ece9e3;">
          <span style="color:#989898; font-size:12px;">Eingegangen über das Kontaktformular auf eschen11.ch</span>
        </div>
      </div>
    </div>
    </body>
    </html>
  `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        // Subject is plain text, not HTML; strip line breaks defensively.
        subject: `Neue Anfrage von ${name.replace(/[\r\n]+/g, ' ')}`,
        html,
      }),
    })

    if (!res.ok) {
      console.error('Kontaktformular: Resend-Fehler', res.status, await res.text())
      return error(GENERIC_ERROR, 502)
    }
  } catch (err) {
    console.error('Kontaktformular: Resend nicht erreichbar', err)
    return error(GENERIC_ERROR, 502)
  }

  return NextResponse.json({ ok: true })
}
