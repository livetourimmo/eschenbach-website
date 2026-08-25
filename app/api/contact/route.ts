import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, telefon, nachricht, interesse } = await request.json()

  // E-Mail via Resend
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
            ${row('Name', `<strong>${name}</strong>`)}
            ${row('E-Mail', `<a href="mailto:${email}" style="color:#998f48; text-decoration:none;">${email}</a>`)}
            ${telefon   ? row('Telefon',   `<a href="tel:${telefon}" style="color:#998f48; text-decoration:none;">${telefon}</a>`) : ''}
            ${interesse ? row('Interesse', interesse) : ''}
          </table>
          <p style="color:#989898; font-size:13px; letter-spacing:0.04em; text-transform:uppercase; margin:24px 0 8px;">Nachricht</p>
          <p style="color:#2d2a27; font-size:15px; line-height:1.6; white-space:pre-wrap; margin:0;">${nachricht}</p>
        </div>
        <div style="padding:16px 32px; background-color:#f6f5f2; border-top:1px solid #ece9e3;">
          <span style="color:#989898; font-size:12px;">Eingegangen über das Kontaktformular auf eschen11.ch</span>
        </div>
      </div>
    </div>
    </body>
    </html>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from:     process.env.KONTAKT_MAIL_FROM!,
      to:       process.env.KONTAKT_MAIL_TO!,
      reply_to: email,
      subject:  `Neue Anfrage von ${name}`,
      html,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend Fehler:', err)
    return NextResponse.json({ success: false }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
