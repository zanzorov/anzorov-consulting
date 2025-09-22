'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQ() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'Wie schnell erhalte ich mein individuelles Angebot?',
            answer: 'In der Regel innerhalb von 24–48 Stunden nach Ihrer Anfrage.',
        },
        {
            id: 'item-2',
            icon: 'briefcase-business',
            question: 'Wie läuft die Erstellung eines Businessplans ab?',
            answer: 'Wir analysieren Ihr Geschäftsmodell, erstellen Finanzpläne und liefern eine strukturierte Roadmap.',
        },
        {
            id: 'item-3',
            icon: 'shield',
            question: 'Welche Versicherungsfragen decken Sie ab?',
            answer: 'Wir beraten bei Betriebshaftpflicht, Krankenversicherung und weiteren geschäftsrelevanten Policen.',
        },
        {
            id: 'item-4',
            icon: 'landmark',
            question: 'Unterstützen Sie bei Behördengängen?',
            answer: 'Ja, wir übernehmen Termine, Formulare und begleiten Sie bei allen Amtsangelegenheiten.',
        },
        {
            id: 'item-5',
            icon: 'calculator',
            question: 'Bieten Sie Unterstützung in der Buchhaltung?',
            answer: 'Ja, wir kümmern uns um Buchführung, Lohnabrechnung und steuerrelevante Unterlagen.',
        },
        
    ]

    return (
        <section id='faq' className="bg-custom-dark dark:bg-background py-20 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-2/5">
                        <div className="space-y-6">
                            <span className='block uppercase tracking-wider text-base font-medium span-custom-color'>FAQ</span>
                            <h2 className="text-4xl font-bold lg:text-5xl mt-4 text-white">Häufig gestellte Fragen</h2>
                            <p className="text-white text-pretty text-lg">
                                Damit Sie bestens informiert sind
                                
                            </p>
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-custom-light shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}