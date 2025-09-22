import { Logo, LogoCustom } from '@/components/Logo';
import Link from 'next/link';

const links = [
  {
    group: 'Leistungen',
    items: [
      { title: 'Businesspläne', href: '#leistungen' },
      { title: 'Versicherungsfragen', href: '#leistungen' },
      { title: 'Behördengänge', href: '#leistungen' },
      { title: 'Amtsangelegenheiten', href: '#leistungen' },
      { title: 'Buchhaltung', href: '#leistungen' },
      { title: 'Lohnabrechnung', href: '#leistungen' }
    ]
  },
  {
    group: 'Über uns',
    items: [
      { title: 'Unsere Erfolge', href: '#erfolge' },
      { title: 'Kontakt', href: '#kontakt' },
      { title: 'FAQ', href: '#faq' }
    ]
  },
  {
    group: 'Kontakt',
    items: [
      { title: 'Büro', href: '#kontakt' },
      { title: 'Öffnungszeiten', href: '#kontakt' }
    ]
  },
  {
    group: 'Rechtliches',
    items: [
      { title: 'Impressum', href: '/impressum' },
      { title: 'Datenschutzerklärung', href: '/datenschutz' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="footer-custom-bg border-b border-t bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" aria-label="home" >
              <LogoCustom />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-custom-color py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Ismail Anzorov | Unternehmensberatung. All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
