import type { Metadata } from 'next';
import { Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con el equipo de SignAI para solicitar un piloto, una demo o resolver tus dudas.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-background">
      <section className="text-center pt-12 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Hablemos
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Estamos listos para ayudarte a implementar una solución de accesibilidad de vanguardia. Completa el formulario o contáctanos directamente.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Envíanos tu solicitud</h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Datos de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:contacto@signai.pe" className="text-foreground/80 hover:text-primary transition-colors">
                        contacto@signai.pe
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold">Horario de atención</h3>
                      <p className="text-foreground/80">Lunes a Viernes</p>
                      <p className="text-foreground/80">9:00 AM - 6:00 PM (PET)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
