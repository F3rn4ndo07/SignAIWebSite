import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Battery, Cpu, Lock, ShieldCheck, Smartphone, Watch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Cómo Funciona SignAI',
  description: 'Descubre la tecnología detrás de SignAI: el wearable, el software, el motor de Machine Learning on-device y nuestro compromiso con la seguridad y privacidad.',
};

export default function HowItWorksPage() {
  const diagramImage = PlaceHolderImages.find((img) => img.id === 'how-it-works-diagram');
  const hardwareImage = PlaceHolderImages.find((img) => img.id === 'hardware-wearable');
  const softwareImage = PlaceHolderImages.find((img) => img.id === 'software-dashboard');

  const features = [
    {
      icon: <Watch className="h-8 w-8 text-primary" />,
      title: 'Diseño Ergonómico',
      description: 'Ligero y cómodo para usar durante horas sin interferir con las actividades diarias.',
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: 'Sensores de Alta Precisión',
      description: 'Capturan con exactitud los complejos movimientos de la lengua de señas.',
    },
    {
      icon: <Battery className="h-8 w-8 text-primary" />,
      title: 'Batería de Larga Duración',
      description: 'Diseñado para una jornada completa de trabajo, garantizando disponibilidad constante.',
    },
  ];

  const securityFeatures = [
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: 'Procesamiento On-Device',
      description: 'Toda la traducción ocurre localmente en el dispositivo. Ningún dato biométrico sensible sale del ecosistema SignAI, garantizando máxima privacidad.',
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: 'Cifrado en Tránsito',
      description: 'Si se requiere conexión a un panel de control, los datos de gestión viajan con cifrado de extremo a extremo, usando los estándares más altos de la industria.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: 'Minimización de Datos',
      description: 'Solo recopilamos y procesamos la información estrictamente necesaria para la traducción. No almacenamos conversaciones ni datos personales.',
    },
  ];


  return (
    <div className="pt-24 pb-16">
      {/* Intro Section */}
      <section className="text-center py-16 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Tecnología al servicio de la inclusión
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            La visión de SignAI es simple: eliminar las barreras de comunicación en tiempo real. Lo logramos combinando hardware avanzado, software intuitivo y un potente motor de Machine Learning que prioriza la privacidad.
          </p>
        </div>
      </section>
      
      {/* Hardware Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-primary font-semibold">HARDWARE</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">El Wearable: Precisión y Comodidad</h2>
              <p className="mt-4 text-lg text-foreground/70">
                Nuestro dispositivo ha sido diseñado en colaboración con usuarios de lengua de señas para ser intuitivo y no invasivo.
              </p>
              <div className="mt-8 space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              {hardwareImage && <Image src={hardwareImage.imageUrl} alt={hardwareImage.description} data-ai-hint={hardwareImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
          </div>
        </div>
      </section>
      
      {/* Software Section */}
       <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               {softwareImage && <Image src={softwareImage.imageUrl} alt={softwareImage.description} data-ai-hint={softwareImage.imageHint} width={600} height={400} className="rounded-lg shadow-lg" />}
            </div>
            <div>
              <span className="text-primary font-semibold">SOFTWARE</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Panel de Control Intuitivo</h2>
              <p className="mt-4 text-lg text-foreground/70">
                La aplicación SignAI es el centro de la experiencia. Permite configurar modos de uso, ver transcripciones y gestionar el dispositivo de forma sencilla.
              </p>
              <ul className="mt-6 space-y-4 text-foreground/80">
                  <li className="flex items-center gap-3"><Smartphone className="h-5 w-5 text-primary" />Modo Señas a Voz/Texto</li>
                  <li className="flex items-center gap-3"><Smartphone className="h-5 w-5 text-primary" />Modo Voz/Texto a Señas (visual)</li>
                  <li className="flex items-center gap-3"><Smartphone className="h-5 w-5 text-primary" />Historial de conversaciones (opcional)</li>
                  <li className="flex items-center gap-3"><Smartphone className="h-5 w-5 text-primary" />Configuración de idioma y preferencias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <span className="text-primary font-semibold">FLUJO DE TRADUCCIÓN</span>
          <h2 className="text-3xl font-bold tracking-tight mt-2">El Proceso de Traducción en Milisegundos</h2>
           <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            Nuestra tecnología optimizada garantiza una latencia mínima para que las conversaciones se sientan naturales y fluidas.
          </p>
          <div className="mt-12">
             {diagramImage && <Image src={diagramImage.imageUrl} alt={diagramImage.description} data-ai-hint={diagramImage.imageHint} width={800} height={450} className="rounded-lg shadow-lg mx-auto" />}
          </div>
        </div>
      </section>
      
      {/* Security Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Seguridad y Privacidad por Diseño</h2>
            <p className="mt-2 text-lg text-foreground/70 max-w-3xl mx-auto">
              Entendemos la sensibilidad de la comunicación. Por eso, la privacidad no es una opción, es el núcleo de nuestra arquitectura.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
            Profundiza en los detalles técnicos de SignAI
          </h2>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            ¿Tu equipo de TI tiene preguntas? Agenda una demostración técnica y resolvamos todas sus dudas.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto?asunto=Demo+Técnica">
                Agendar demo técnica <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
