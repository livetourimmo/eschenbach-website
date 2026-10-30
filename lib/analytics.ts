declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Erfolgsmessung fuer Kontaktanfragen: GA4-Standardereignis «generate_lead».
 *
 * Nur nach bestaetigtem Versand aufrufen (API-Antwort ok, Honigtopf leer).
 * Uebertragen werden nur Formularname und Herkunft, nie Formulareingaben.
 * Ob Google dafuer Cookies verwenden darf, entscheidet der Consent Mode v2
 * (Standard «denied»), nicht diese Funktion.
 */
export function messeKontaktanfrage(quelle: string, formName = "kontaktformular") {
  if (typeof window === "undefined") return;
  const messId = process.env.NEXT_PUBLIC_GA_ID;
  if (!messId) return; // Vorschau/lokal: kein Google-Tag eingebunden
  const warteschlange = (window.dataLayer = window.dataLayer ?? []);
  // gtag-Protokoll: das Arguments-Objekt pushen, kein Array.
  function gtag(..._argumente: unknown[]) {
    void _argumente;
    // eslint-disable-next-line prefer-rest-params
    warteschlange.push(arguments);
  }
  gtag("event", "generate_lead", { send_to: messId, form_name: formName, form_source: quelle });
}
