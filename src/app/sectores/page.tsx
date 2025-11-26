import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sectores de Aplicación',
  description: 'Descubre cómo SignAI transforma la comunicación en los sectores de Salud, Educación y Gobierno, con beneficios específicos para cada uno.',
};

const SectorContent = ({ title, description, benefits, ctaText }: { title: string, description: string, benefits: string[], ctaText: string }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-lg text-foreground/80 mb-6">{description}</p>
      <Button asChild>
        <Link href="/contacto">{ctaText}</Link>
      </Button>
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-4">Beneficios Clave:</h4>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function SectorsPage() {
  const healthData = {
    title: 'Optimización de la Atención Sanitaria',
    description: 'En un entorno donde cada segundo cuenta, SignAI elimina las barreras de comunicación desde la admisión hasta la consulta, mejorando la seguridad y la experiencia del paciente.',
    benefits: [
      'Reducción drástica de reprogramaciones por falta de intérprete.',
      'Mejora la precisión en el diagnóstico y tratamiento.',
      'Aumenta la satisfacción y confianza del paciente sordo.',
      'Optimiza el flujo de trabajo del personal de salud.',
    ],
    ctaText: 'Implementar SignAI en Salud'
  };

  const educationData = {
    title: 'Fomento de la Inclusión Educativa',
    description: 'SignAI empodera a estudiantes sordos para que participen plenamente en el entorno académico, desde el aula hasta los servicios administrativos, garantizando igualdad de oportunidades.',
    benefits: [
      'Mejora la participación y el rendimiento académico del estudiante.',
      'Facilita la comunicación directa entre docentes y alumnos sordos.',
      'Reduce la dependencia de intérpretes externos.',
      'Promueve un campus más inclusivo y diverso.',
    ],
    ctaText: 'Implementar SignAI en Educación'
  };

  const governmentData = {
    title: 'Servicios Públicos Accesibles para Todos',
    description: 'Asegura que cada ciudadano pueda realizar trámites y acceder a servicios públicos sin barreras, fortaleciendo la confianza en las instituciones y cumpliendo con el deber de inclusión.',
    benefits: [
      'Garantiza el cumplimiento de las normativas de accesibilidad.',
      'Reduce las quejas y mejora la imagen institucional.',
      'Agiliza la atención en ventanillas y oficinas.',
      'Fomenta la participación ciudadana de la comunidad sorda.',
    ],
    ctaText: 'Implementar SignAI en mi Institución'
  };

  return (
    <div className="pt-24 pb-16">
      <section className="text-center pt-12 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Una Solución Versátil para Cada Necesidad
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            SignAI se adapta a los flujos de trabajo de los sectores más importantes, ofreciendo beneficios medibles y un impacto social positivo.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="salud" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12 mb-12">
              <TabsTrigger value="salud" className="py-2.5 text-base">Salud</TabsTrigger>
              <TabsTrigger value="educacion" className="py-2.5 text-base">Educación</TabsTrigger>
              <TabsTrigger value="gobierno" className="py-2.5 text-base">Gobierno</TabsTrigger>
            </TabsList>
            <TabsContent value="salud" className="bg-card p-8 md:p-12 rounded-lg">
              <SectorContent {...healthData} />
            </TabsContent>
            <TabsContent value="educacion" className="bg-card p-8 md:p-12 rounded-lg">
              <SectorContent {...educationData} />
            </TabsContent>
            <TabsContent value="gobierno" className="bg-card p-8 md:p-12 rounded-lg">
               <SectorContent {...governmentData} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
