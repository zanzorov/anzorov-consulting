import { SimpleHeader } from '@/components/SimpleHeader';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-custom-light text-foreground">
      <SimpleHeader />

      <section className="pt-24">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">Impressum</h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
              <p className='text-pretty max-w-3xl'>
                Ismail Anzorov Unternehmensberatung <br />
                Eugen-Richter-Straße 45 / 4.OG <br />
                D-99085 Erfurt <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
              <p className='text-pretty max-w-3xl'>
                Telefon: +49 (0)176 / 218 64 109 <br />
                E-Mail: info@anzorov-cons.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Vertreten durch</h2>
              <p className='text-pretty max-w-3xl'>Ismail Anzorov</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Umsatzsteuer-ID</h2>
              <p className='text-pretty max-w-3xl'>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                <br />
                DE123456789
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Haftungsausschluss</h2>
              <p className='text-pretty max-w-3xl'>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Urheberrecht</h2>
              <p className='text-pretty max-w-3xl'>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">Letzte Aktualisierung: September 2025</p>
        </div>
      </section>
    </div>
  );
}
