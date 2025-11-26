import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import { FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
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
                <Link key={social.name} href={social.href} aria-label={social.name} className="text-foreground/70 hover:text-primary transition-colors">
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
