import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'SignAI - Traducción de Lengua de Señas con IA para Instituciones',
    template: '%s | SignAI',
  },
  description: 'SignAI es un wearable que traduce la Lengua de Señas a voz/texto en tiempo real, facilitando la comunicación inclusiva en hospitales, universidades y entidades públicas en Perú.',
  keywords: ['Lengua de Señas', 'Inteligencia Artificial', 'Accesibilidad', 'Inclusión', 'Perú', 'Wearable'],
  verification: {
    google: 'Yn1piL6OlVcaMcQQRdOLt4W_S1n9a7rf5hERh1-pOxM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
