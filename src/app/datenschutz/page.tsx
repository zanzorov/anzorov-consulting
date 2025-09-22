import { SimpleHeader } from '@/components/SimpleHeader';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-custom-light text-foreground">
      <SimpleHeader />

      <section className="pt-24">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>

          <p className='text-pretty max-w-3xl'>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
            ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung
            informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Verantwortlicher</h2>
              <p className='text-pretty max-w-3xl'>
                Ismail Anzorov Unternehmensberatung <br />
                Eugen-Richter-Straße 45 / 4.OG <br />
                D-99085 Erfurt <br />
                E-Mail: info@anzorov-cons.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p className='text-pretty max-w-3xl'>
                Wir erheben, verarbeiten und nutzen Ihre personenbezogenen Daten nur, wenn dies gesetzlich erlaubt ist
                oder Sie in die Datenerhebung einwilligen. Personenbezogene Daten sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person beziehen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">3. Kontaktaufnahme</h2>
              <p className='text-pretty max-w-3xl'>
                Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen
                Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">4. Cookies & Web-Analyse</h2>
              <p className='text-pretty max-w-3xl'>
                Unsere Website verwendet teilweise Cookies. Cookies richten keinen Schaden an und enthalten keine Viren.
                Sie dienen dazu, unser Angebot nutzerfreundlich, effektiv und sicher zu machen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">5. Ihre Rechte</h2>
              <p className='text-pretty max-w-3xl'>
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
                gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">Letzte Aktualisierung: September 2025</p>
        </div>
      </section>
    </div>
  );
}
