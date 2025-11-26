import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  HeartPulse,
  Landmark,
  MessageSquare,
  Minus,
  Plus,
  School,
  Smile,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-wearable-in-use');

  const problemCards = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: 'Barreras de Comunicación',
      description: 'La falta de intérpretes de lengua de señas genera frustración y exclusión en servicios esenciales.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Exclusión Silenciosa',
      description: 'Ciudadanos, pacientes y estudiantes sordos no pueden participar plenamente, perdiendo oportunidades.',
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: 'Experiencias Negativas',
      description: 'Las dificultades en la atención resultan en quejas, reprogramaciones y una mala percepción del servicio.',
    },
  ];

  const benefits = [
    'Reduce tiempos de espera y reprogramaciones.',
    'Ofrece una atención inclusiva y medible.',
    'Disminuye quejas y mejora la satisfacción.',
    'Fortalece la reputación de tu institución.',
    'Cumple con normativas de accesibilidad.',
  ];
  
  const sectors = [
    {
      icon: <HeartPulse className="h-10 w-10 mb-4 text-primary" />,
      title: 'Salud',
      description: 'Desde triaje hasta consultas, facilita una comunicación clara y sin demoras.',
      link: '/sectores#salud',
    },
    {
      icon: <School className="h-10 w-10 mb-4 text-primary" />,
      title: 'Educación',
      description: 'Potencia la inclusión en aulas, tutorías y servicios administrativos para estudiantes sordos.',
      link: '/sectores#educacion',
    },
    {
      icon: <Landmark className="h-10 w-10 mb-4 text-primary" />,
      title: 'Gobierno',
      description: 'Asegura que la atención al ciudadano en ventanillas y oficinas sea accesible para todos.',
      link: '/sectores#gobierno',
    },
  ];

  const testimonials = [
    {
      quote: "Implementar SignAI en admisión redujo las reprogramaciones en un 40%. La comunicación es más fluida y la experiencia del paciente ha mejorado drásticamente.",
      author: "Dra. Ana Torres",
      role: "Jefa de Experiencia del Paciente, Clínica Internacional",
    },
    {
      quote: "Nuestros estudiantes sordos ahora participan más activamente en clase. SignAI ha sido una herramienta transformadora para la inclusión en nuestra universidad.",
      author: "Mg. Carlos Valdivia",
      role: "Director de Bienestar Estudiantil, Universidad Peruana",
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-card pt-20 pb-10 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                Traducción de Lengua de Señas con IA para tu institución
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80">
                SignAI permite una atención inclusiva en tiempo real para personas sordas en hospitales, universidades y municipios.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link href="/contacto">Solicitar piloto 30 días</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#como-funciona">Ver demo en 90 segundos</Link>
                </Button>
              </div>
            </div>
            <div>
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">La comunicación no debería ser una barrera</h2>
            <p className="mt-2 text-lg text-foreground/70 max-w-3xl mx-auto">
              Cada día, miles de personas sordas enfrentan obstáculos que les impiden acceder a servicios básicos y oportunidades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemCards.map((card, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-foreground/80">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is SignAI & How it works */}
      <section id="como-funciona" className="py-20 bg-card">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold">¿QUÉ ES SIGNAI?</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Tecnología de punta para una comunicación sin límites</h2>
            <p className="mt-4 text-lg text-foreground/70">
              SignAI es un ecosistema completo que combina un wearable ergonómico con una potente aplicación móvil. Nuestro motor de Machine Learning on-device procesa la lengua de señas en tiempo real, garantizando privacidad y una comunicación instantánea.
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</span> Captura de Señas</div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 text-base">
                  El wearable, equipado con sensores de alta precisión, captura los gestos y movimientos de la mano al realizar señas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</span> Procesamiento con IA</div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 text-base">
                  El motor de Machine Learning on-device analiza los datos en el propio dispositivo, traduciendo las señas a texto o voz al instante.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</span> Respuesta Inclusiva</div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 text-base">
                  La traducción se muestra en la app o se reproduce por voz, permitiendo una conversación fluida y bidireccional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Beneficios directos para tu institución</h2>
          <p className="mt-2 text-lg text-foreground/70 max-w-3xl mx-auto">
            Más allá de la inclusión, SignAI es una inversión estratégica que optimiza recursos y mejora la calidad del servicio.
          </p>
          <div className="mt-12 max-w-2xl mx-auto">
            <ul className="space-y-4 text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-card">
         <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Adaptado a las necesidades de tu sector</h2>
            <p className="mt-2 text-lg text-foreground/70 max-w-3xl mx-auto">
              Implementa SignAI en los puntos de contacto más críticos y transforma la experiencia de usuarios y colaboradores.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Card key={sector.title} className="flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                  {sector.icon}
                  <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
                  <p className="text-foreground/80 flex-grow">{sector.description}</p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href={sector.link}>Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Instituciones que ya confían en SignAI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
               <Card key={index} className="bg-primary text-primary-foreground">
                 <CardContent className="p-8">
                   <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                   <div className="font-semibold">{testimonial.author}</div>
                   <div className="text-sm opacity-80">{testimonial.role}</div>
                 </CardContent>
               </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
             <h3 className="text-xl font-semibold text-foreground/80 mb-6">Con el respaldo de líderes en innovación y accesibilidad</h3>
             <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap opacity-50">
                <span className="font-bold text-2xl">TechCorp</span>
                <span className="font-bold text-2xl">Innova Perú</span>
                <span className="font-bold text-2xl">Access Hub</span>
                <span className="font-bold text-2xl">FutureDev</span>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-primary-foreground">
            ¿Listo para transformar la accesibilidad en tu organización?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Descubre el impacto de SignAI con un piloto gratuito de 30 días. Sin compromiso.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto">
                Solicitar mi piloto gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
