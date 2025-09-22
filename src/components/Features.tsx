import { Pencil, BriefcaseBusiness, Shield, Landmark, HandCoins, Calculator } from 'lucide-react';

export default function Features() {
  return (
    <section id='leistungen' className="bg-custom-light py-12 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <span className='block uppercase tracking-wider text-base font-medium span-custom-color'>Leistungen</span>
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">Was wir am besten können</h2>
          <p className='text-pretty text-lg'>
            Wir bieten umfassende Beratungs- und Verwaltungsleistungen für Unternehmen in Deutschland. Von der Planung
            bis zur Umsetzung – alles aus einer Hand.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-5xl divide-x divide-y overflow-hidden border-2 border-custom-color *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="size-6 icon-custom-color" />
              <h3 className="text-xl font-medium text-custom-color">Businesspläne</h3>
            </div>
            <p className="text-md">Individuelle und professionelle Businesspläne für Ihren Unternehmenserfolg</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="size-6 icon-custom-color" />
              <h3 className="text-xl font-medium text-custom-color">Versicherungsfragen</h3>
            </div>
            <p className="text-md">Beratung und Optimierung Ihrer Versicherungen für maximale Sicherheit.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Landmark className="size-6 icon-custom-color" />

              <h3 className="text-xl font-medium text-custom-color">Behördengänge</h3>
            </div>
            <p className="text-md">Effiziente Abwicklung von Amtswegen und behördlichen Prozessen.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-6 icon-custom-color" />

              <h3 className="text-xl font-medium text-custom-color">Amtsangelegenheiten</h3>
            </div>
            <p className="text-md">Unterstützung bei allen administrativen Herausforderungen Ihres Unternehmens.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calculator className="size-6 icon-custom-color" />

              <h3 className="text-xl font-medium text-custom-color">Buchhaltung</h3>
            </div>
            <p className="text-md">Zuverlässige Finanzbuchhaltung für Klarheit und Compliance.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HandCoins className="size-6 icon-custom-color" />

              <h3 className="text-xl font-medium text-custom-color">Lohnabrechnung</h3>
            </div>
            <p className="text-md">Präzise Gehaltsabrechnungen und Mitarbeiterverwaltung.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
