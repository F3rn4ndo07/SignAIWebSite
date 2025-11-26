import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { Logo } from '@/components/logo';
import { FOOTER_LINKS } from '@/lib/constants';

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12.52.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.31 1.7.03 1.3.02 2.62.02 3.93-.24.03-.48.07-.71.11-1.4.23-2.66.75-3.7 1.65-1.03.88-1.79 2.05-2.26 3.33a6.22 6.22 0 0 1-1.62 2.6c-1.06.94-2.34 1.54-3.76 1.76-.11.02-.22.04-.33.06-.9.13-1.8.2-2.7.25-.33.02-.66.02-1 .02s-.67 0-1-.02c-2.42-.1-4.69-1.07-6.32-2.7-1.64-1.62-2.6-3.88-2.7-6.32-.02-.33-.02-.66-.02-1s0-.67.02-1c.1-2.42 1.07-4.69 2.7-6.32 1.62-1.64 3.88-2.6 6.32-2.7.33-.02.66-.02 1-.02.9-.04 1.8-.1 2.7-.15.11-.02.22-.03.33-.05.1-.02.2-.04.3-.06.34-.09.67-.2.98-.34.22-.09.43-.2.64-.33.1-.06.2-.13.29-.2.09-.06.19-.12.28-.19.09-.07.18-.14.27-.22.09-.08.18-.16.27-.24.03-.03.07-.06.1-.09.06-.06.12-.13.18-.19.03-.03.06-.06.09-.09.06-.06.12-.13.18-.19.03-.03.05-.06.08-.09.06-.06.12-.12.18-.18.02-.02.05-.05.07-.07.06-.06.12-.12.18-.18.02-.02.05-.05.07-.07.03-.03.05-.06.08-.09.06-.06.12-.12.17-.18a.33.33 0 0 1 .05-.06c.02-.02.04-.04.06-.06.02-.02.03-.04.05-.06.02-.02.03-.04.05-.06.02-.02.03-.04.05-.05.01-.01.03-.03.04-.04.01-.01.03-.03.04-.04.01-.01.03-.02.04-.03.01-.01.02-.02.03-.03.01-.01.02-.02.03-.03.01-.01.02-.02.03-.03.01-.01.02-.02.03-.03a.5.5 0 0 1 .03-.03c.01-.01.02-.01.02-.02z"/>
        <path d="M11.68 6.34c-.53 0-1.03.2-1.42.57-.39.36-.63.85-.63 1.38 0 .53.24.97.63 1.38.39.36.89.57 1.42.57.53 0 1.03-.2 1.42-.57.39-.36.63-.85.63-1.38 0-.53-.24-.97-.63-1.38a1.86 1.86 0 0 0-1.42-.57z"/>
    </svg>
);


export function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/signai_upc/' },
    { name: 'TikTok', icon: <TikTokIcon />, href: 'https://www.tiktok.com/@signai_upc' },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              Traducción de Lengua de Señas en tiempo real para un mundo más inclusivo.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explorar</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.explorar.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <h3 className="font-semibold text-foreground mb-4">Conectar</h3>
             <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-foreground/70 hover:text-primary transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} SignAI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
