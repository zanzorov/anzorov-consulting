'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const SimpleHeader = () => {
  return (
    <header>
      <nav className="bg-background/80 fixed z-20 w-full border-b backdrop-blur-3xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            aria-label="home"
            className="flex items-center gap-2 text-sm md:text-base font-medium text-custom-color hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Zurück zur Startseite
          </Link>
          <Link href="/" aria-label="home" className="block w-[100px] h-[67px]">
            {/* <LogoCustom /> */}
            <Image alt="logo" src="/images/logo-consulting.png" width={100} height={67} priority />
          </Link>
        </div>
      </nav>
    </header>
  );
};
