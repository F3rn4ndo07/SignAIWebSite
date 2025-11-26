"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Logo } from '@/components/logo';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('items-center space-x-6 hidden md:flex', className)}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary' : 'text-foreground/60'
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );

  const MobileNav = () => (
    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link href="/" onClick={() => setSheetOpen(false)}>
              <Logo />
            </Link>
          </div>
          <nav className="flex flex-col gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setSheetOpen(false)}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <Button asChild className="w-full" onClick={() => setSheetOpen(false)}>
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Logo />
            <span className="sr-only">SignAI Home</span>
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="/contacto">Contacto</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
