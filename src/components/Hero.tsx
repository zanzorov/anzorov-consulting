import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { HeroHeader } from './Header';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { ArrowRight } from 'lucide-react';


export default function HeroSection() {
  return (
    <>
      <HeroHeader />
        <section className='bg-custom-light'>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-40 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:grid lg:grid-cols-2 lg:gap-8">
              {/* Левая колонка: текст */}
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:text-left lg:flex lg:flex-col lg:justify-center">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Beratung für Wachstum und Effizienz
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Von Businessplänen über Buchhaltung bis hin zu Versicherungsfragen – wir begleiten Sie kompetent in
                  allen unternehmerischen Belangen und sorgen für effiziente Lösungen, die Ihr Unternehmen voranbringen.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="btn-custom-bg px-5 text-base text-nowrap">
                    <Link href="#kontakt">
                      Jetzt anfragen
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="px-5 text-base text-nowrap">
                    <Link href="#leistungen">
                      Was wir bieten <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Правая колонка: картинка с aspect-ratio */}
              <div className="mt-12 lg:mt-0 relative w-full aspect-[4/3] lg:aspect-auto">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                  src="/images/calc-pen.jpg"
                  alt="Abstract Object"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-custom-light pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Unsere Leistungen auf einen Blick</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <p className="h-7 w-fit text-md font-bold">Management Ihres Unternehmens</p>
                  <p className="h-7 w-fit text-md font-bold">Erstellung von Businessplänen</p>
                  <p className="h-7 w-fit text-md font-bold">Versicherungsfragen</p>
                  <p className="h-7 w-fit text-md font-bold">Amtsangelegenheiten</p>
                  <p className="h-7 w-fit text-md font-bold">Behördengänge</p>
                  <p className="h-7 w-fit text-md font-bold">Buchhaltung</p>
                  <p className="h-7 w-fit text-md font-bold">Lohnabrechnung</p>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-bg-custom-light absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-bg-custom-light absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
