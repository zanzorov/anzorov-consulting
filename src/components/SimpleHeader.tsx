'use client';
import Link from 'next/link';
import { LogoCustom } from '@/components/Logo';
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
          <Link href="/" aria-label="home">
            <LogoCustom />
          </Link>
        </div>
      </nav>
    </header>
  );
};
