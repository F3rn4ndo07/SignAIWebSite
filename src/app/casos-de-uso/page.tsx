import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, ShieldAlert, Smile, TrendingDown, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Casos de Uso',
  description: 'Explora casos de uso reales de cómo SignAI está transformando la comunicación para personas sordas en hospitales, universidades y municipios.',
};

const useCases = [
  {
    sector: 'Hospital',
    context: 'Un hospital público con alto volumen de pacientes en el área de emergencias.',
    problem: 'Pacientes sordos enfrentaban largas esperas para un intérprete, causando retrasos en el triaje y diagnósticos, y una alta tasa de reprogramaciones.',
    solution: 'Se implementó SignAI en el mostrador de admisión y en la sala de triaje. El personal de salud pudo comunicarse de inmediato con los pacientes sordos para registrar sus datos y evaluar sus síntomas.',
    results: [
      { metric: 'Tiempo de espera para triaje', before: '60 min', after: '10 min', icon: <TrendingDown className="h-6 w-6 text-green-500" /> },
      { metric: 'Reprogramaciones', before: '35%', after: '5%', icon: <TrendingDown className="h-6 w-6 text-green-500" /> },
      { metric: 'Satisfacción del paciente', before: 'Baja', after: 'Alta', icon: <TrendingUp className="h-6 w-6 text-green-500" /> },
    ],
    image: PlaceHolderImages.find((img) => img.id === 'use-case-hospital'),
  },
  {
    sector: 'Universidad',
    context: 'Una universidad nacional con un programa de inclusión para estudiantes con discapacidad.',
    problem: 'Los estudiantes sordos tenían dificultades para seguir las clases magistrales y para comunicarse en las oficinas de servicios estudiantiles, dependiendo de la disponibilidad de intérpretes.',
    solution: 'Se equipó a los estudiantes sordos con SignAI y se instaló la app en las tablets de los docentes y del personal administrativo. Esto permitió una comunicación directa y en tiempo real.',
    results: [
      { metric: 'Participación en clase', before: 'Limitada', after: 'Activa', icon: <TrendingUp className="h-6 w-6 text-green-500" /> },
      { metric: 'Consultas resueltas en 1ra visita', before: '40%', after: '90%', icon: <TrendingUp className="h-6 w-6 text-green-500" /> },
      { metric: 'Sensación de pertenencia', before: 'Aislamiento', after: 'Integración', icon: <Smile className="h-6 w-6 text-green-500" /> },
    ],
    image: PlaceHolderImages.find((img) => img.id === 'use-case-university'),
  },
  {
    sector: 'Municipio',
    context: 'Una municipalidad distrital con múltiples ventanillas de atención al ciudadano.',
    problem: 'Los ciudadanos sordos no podían realizar trámites básicos de forma autónoma, como pagar impuestos o solicitar licencias, generando frustración y quejas por discriminación.',
    solution: 'Se instalaron estaciones con SignAI en las ventanillas de mayor afluencia. Los funcionarios pudieron atender directamente a los ciudadanos sordos, explicando requisitos y procesos.',
    results: [
      { metric: 'Tiempo promedio de atención', before: '45 min', after: '15 min', icon: <TrendingDown className="h-6 w-6 text-green-500" /> },
      { metric: 'Quejas por falta de accesibilidad', before: '8 al mes', after: '0 al mes', icon: <ShieldAlert className="h-6 w-6 text-green-500" /> },
      { metric: 'Autonomía del ciudadano', before: 'Dependiente', after: 'Independiente', icon: <TrendingUp className="h-6 w-6 text-green-500" /> },
    ],
    image: PlaceHolderImages.find((img) => img.id === 'use-case-municipality'),
  },
];

export default function UseCasesPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="text-center pt-12 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Historias de Inclusión y Eficiencia
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Descubre cómo instituciones como la tuya están utilizando SignAI para romper barreras, optimizar procesos y construir un entorno más accesible.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 items-stretch">
                  <div className={`p-8 md:p-10 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <span className="font-semibold text-primary">{useCase.sector.toUpperCase()}</span>
                    <h2 className="text-2xl font-bold mt-2">{useCase.context}</h2>
                    <div className="mt-6">
                      <h3 className="font-semibold text-lg">El Problema</h3>
                      <p className="text-foreground/80 mt-1">{useCase.problem}</p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-semibold text-lg">La Solución con SignAI</h3>
                      <p className="text-foreground/80 mt-1">{useCase.solution}</p>
                    </div>
                  </div>
                  {useCase.image && (
                    <div className={`relative min-h-[300px] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                       <Image src={useCase.image.imageUrl} alt={useCase.image.description} data-ai-hint={useCase.image.imageHint} layout="fill" objectFit="cover" />
                    </div>
                  )}
                </div>
                <div className="bg-primary/5 p-8 md:p-10">
                  <h3 className="text-xl font-bold text-center mb-6">Resultados: Antes vs. Después</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    {useCase.results.map((result, r_index) => (
                      <div key={r_index}>
                        <div className="flex items-center justify-center gap-2 font-bold text-xl">
                          <span>{result.icon}</span>
                          <span>{result.metric}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2 items-center">
                          <div className="text-right">
                             <div className="text-sm text-foreground/60">Antes</div>
                             <div className="font-semibold text-destructive">{result.before}</div>
                          </div>
                           <div className="text-left">
                             <div className="text-sm text-foreground/60">Después</div>
                             <div className="font-semibold text-green-600">{result.after}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary mt-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
            Sé nuestro próximo caso de éxito
          </h2>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Inicia un piloto gratuito de 30 días y comprueba por ti mismo el impacto de SignAI en tu institución.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto">
                Solicitar piloto de 30 días <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
