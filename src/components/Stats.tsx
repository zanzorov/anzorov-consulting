export default function StatsSection() {
    return (
        <section id="erfolge" className="bg-custom-dark py-12 md:py-20 scroll-mt-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <span className='block uppercase tracking-wider text-base font-medium span-custom-color'>Erfolge</span>
                    <h2 className="text-balance text-4xl font-bold lg:text-5xl text-white">Zahlen, die Vertrauen schaffen</h2>
                    <p className="text-white text-pretty text-lg">Wir begleiten Unternehmen in Deutschland mit maßgeschneiderten Beratungsleistungen – von strategischer Planung bis zur Umsetzung. Zahlen, die für Vertrauen und Kompetenz sprechen.</p>
                </div>

                <div className="grid gap-2 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    <div className="bg-custom-light rounded-(--radius) space-y-2 py-6 md:space-y-4">
                        <div className="text-4xl md:text-5xl font-bold">120+</div>
                        <p className="font-bold">Zufriedene Kunden</p>
                    </div>
                    <div className="bg-custom-light rounded-(--radius) space-y-2 py-6 md:space-y-4">
                        <div className="text-4xl md:text-5xl font-bold">7+</div>
                        <p className="font-bold">Jahre Erfahrung</p>
                    </div>
                    <div className="bg-custom-light rounded-(--radius) space-y-2 py-6 md:space-y-4">
                        <div className="text-4xl md:text-5xl font-bold">300+</div>
                        <p className="font-bold">Erfolgreiche Projekte</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
