import type { Metadata } from 'next';
import { TermsGenerator } from '@/components/terms-generator';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Lee los términos y condiciones de uso del servicio y productos de SignAI.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Términos y Condiciones</h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                A continuación puedes generar un borrador de nuestros términos y condiciones utilizando nuestro asistente de IA.
            </p>
        </div>
        <TermsGenerator />
      </div>
    </div>
  );
}
