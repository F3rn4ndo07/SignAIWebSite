import { PlaceHolderImages } from './placeholder-images';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: {
    src: string;
    alt: string;
    hint: string;
  } | null;
};

const blogImage1 = PlaceHolderImages.find(p => p.id === 'blog-post-1');
const blogImage2 = PlaceHolderImages.find(p => p.id === 'blog-post-2');
const blogImage3 = PlaceHolderImages.find(p => p.id === 'blog-post-3');

export const blogPosts: BlogPost[] = [
  {
    slug: 'piloto-en-30-dias',
    title: 'Piloto en 30 días: cómo implementar traducción de señas en tu institución',
    date: '10 de Noviembre, 2023',
    excerpt: 'Descubre el proceso paso a paso para lanzar un piloto de SignAI en tu organización. Desde la planificación hasta la medición de resultados, te guiamos para que la implementación sea un éxito.',
    image: blogImage1 ? { src: blogImage1.imageUrl, alt: blogImage1.description, hint: blogImage1.imageHint } : null,
    content: `
      <p>Implementar una nueva tecnología puede parecer un desafío, pero con el programa piloto de 30 días de SignAI, el proceso es simple, rápido y sin riesgos. Nuestro objetivo es que puedas evaluar el impacto real de la comunicación inclusiva en tu propio entorno, con tu personal y tus usuarios.</p>
      <h3 class="font-bold text-xl my-4">Paso 1: Sesión de Planificación (Día 1-5)</h3>
      <p>Todo comienza con una conversación. Nos reunimos con los responsables de tu institución (TI, Calidad de Servicio, Inclusión) para identificar los puntos de contacto más críticos donde SignAI puede generar mayor valor. ¿Es en la ventanilla de atención, en el triaje de emergencias o en el aula? Definimos juntos el alcance del piloto.</p>
      <h3 class="font-bold text-xl my-4">Paso 2: Capacitación y Entrega de Equipos (Día 6-10)</h3>
      <p>Entregamos los wearables SignAI y realizamos una capacitación práctica con el personal que los utilizará. La interfaz es tan intuitiva que en menos de una hora tu equipo estará listo para empezar. Nos aseguramos de resolver todas las dudas y configurar los dispositivos según las necesidades específicas del área.</p>
      <h3 class="font-bold text-xl my-4">Paso 3: Implementación y Acompañamiento (Día 11-25)</h3>
      <p>¡Es hora de la acción! Durante dos semanas, tu equipo utilizará SignAI en sus interacciones diarias. Nuestro equipo de soporte estará disponible para ofrecer asistencia remota y resolver cualquier incidencia. Recopilaremos feedback anónimo tanto del personal como de los usuarios sordos para entender la experiencia.</p>
      <h3 class="font-bold text-xl my-4">Paso 4: Análisis de Resultados y Próximos Pasos (Día 26-30)</h3>
      <p>Al final del piloto, te presentamos un informe detallado con métricas clave: tiempos de atención, número de interacciones, encuestas de satisfacción y testimonios. Con estos datos en mano, podrás tomar una decisión informada sobre la implementación a gran escala de SignAI en tu institución.</p>
      <p class="mt-4">¿Estás listo para dar el primer paso? <a href="/contacto" class="text-primary hover:underline">Solicita tu piloto hoy mismo.</a></p>
    `,
  },
  {
    slug: 'privacidad-y-confianza',
    title: 'Privacidad y confianza en soluciones de accesibilidad con IA y ML on-device',
    date: '22 de Octubre, 2023',
    excerpt: 'La privacidad no es negociable. Explicamos por qué el procesamiento on-device de SignAI es la arquitectura más segura para manejar comunicaciones sensibles y cómo esto genera confianza en tus usuarios.',
    image: blogImage2 ? { src: blogImage2.imageUrl, alt: blogImage2.description, hint: blogImage2.imageHint } : null,
    content: `
      <p>Cuando se trata de accesibilidad, la confianza es fundamental. Las personas sordas, al igual que cualquier otro usuario, necesitan saber que sus conversaciones son privadas. En SignAI, hemos diseñado nuestra tecnología con la privacidad como pilar fundamental, y la clave está en el "Machine Learning on-device".</p>
      <h3 class="font-bold text-xl my-4">¿Qué significa "On-Device"?</h3>
      <p>Significa que todo el "trabajo pesado" de la inteligencia artificial —la captura de señas, el análisis y la traducción— ocurre directamente en el dispositivo del usuario (el wearable y la app conectada). A diferencia de otras soluciones que envían datos a la nube para ser procesados, SignAI mantiene la información sensible localmente.</p>
      <h3 class="font-bold text-xl my-4">Los Beneficios de una Arquitectura Local</h3>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>Máxima Privacidad:</strong> Las conversaciones nunca abandonan el dispositivo. No se almacenan en servidores externos ni son accesibles por terceros. Esto es crucial en entornos como hospitales (cumplimiento de HIPAA) o en conversaciones personales.</li>
        <li><strong>Baja Latencia:</strong> Al no depender de una conexión a internet para el procesamiento, la traducción es casi instantánea. Esto permite que la conversación fluya de manera natural, sin retardos incómodos.</li>
        <li><strong>Funcionamiento Offline:</strong> SignAI puede funcionar incluso en áreas con conectividad limitada o nula, garantizando la accesibilidad en cualquier circunstancia.</li>
        <li><strong>Menor Riesgo de Fugas de Datos:</strong> Al minimizar los puntos de transferencia de datos, reducimos drásticamente la superficie de ataque para posibles ciberdelincuentes.</li>
      </ul>
      <h3 class="font-bold text-xl my-4">Construyendo Confianza Digital</h3>
      <p>Al adoptar una solución como SignAI, tu institución no solo está implementando una herramienta de accesibilidad, sino que también está enviando un mensaje claro: "Nos preocupamos por tu privacidad y seguridad". Este compromiso con la protección de datos es un diferenciador clave que fortalece la confianza y mejora la reputación de tu organización.</p>
    `,
  },
  {
    slug: 'medir-impacto-inclusion',
    title: 'Cómo medir el impacto de la inclusión en ventanillas, aulas y triaje',
    date: '18 de Septiembre, 2023',
    excerpt: 'La inclusión no es solo un ideal, es un resultado medible. Te mostramos los indicadores clave (KPIs) para cuantificar el impacto de SignAI en la eficiencia operativa y la satisfacción del usuario.',
    image: blogImage3 ? { src: blogImage3.imageUrl, alt: blogImage3.description, hint: blogImage3.imageHint } : null,
    content: `
      <p>Implementar una solución de accesibilidad es una inversión. Y como toda inversión, su retorno (ROI) debe ser medible. Más allá del evidente beneficio social, la inclusión impulsada por SignAI tiene un impacto directo y cuantificable en la eficiencia operativa y la calidad del servicio. Aquí te mostramos qué métricas observar.</p>
      <h3 class="font-bold text-xl my-4">Métricas de Eficiencia Operativa</h3>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>Tiempo Promedio de Atención (TPA):</strong> Mide el tiempo que toma atender a un usuario sordo desde el inicio hasta el final de la interacción. Compara el "antes" (con métodos tradicionales como escribir o esperar un intérprete) y el "después" con SignAI.</li>
        <li><strong>Tasa de Resolución en el Primer Contacto (FCR):</strong> ¿Cuántas consultas de usuarios sordos se resuelven en la primera visita? Una comunicación clara aumenta esta tasa y reduce la necesidad de seguimiento.</li>
        <li><strong>Tasa de Reprogramaciones (Sector Salud):</strong> En hospitales y clínicas, mide la disminución de citas que deben ser reprogramadas por no contar con un medio de comunicación accesible en el momento.</li>
      </ul>
      <h3 class="font-bold text-xl my-4">Métricas de Calidad y Satisfacción</h3>
       <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>Net Promoter Score (NPS) para Usuarios Sordos:</strong> A través de encuestas simples, pregunta a los usuarios qué tan probable es que recomienden tu servicio a otros miembros de la comunidad sorda.</li>
        <li><strong>Customer Satisfaction Score (CSAT):</strong> Mide la satisfacción con una interacción específica. Una pregunta simple como "¿Qué tan satisfecho estás con la atención recibida hoy?" puede darte insights valiosos.</li>
        <li><strong>Reducción de Quejas y Reclamos:</strong> Lleva un registro del número de quejas formales relacionadas con la falta de accesibilidad. Este es un indicador directo del impacto positivo.</li>
      </ul>
      <h3 class="font-bold text-xl my-4">Un Dashboard para la Inclusión</h3>
      <p>Con SignAI, es posible crear un "Dashboard de Inclusión" que muestre estos indicadores en tiempo real. Esto no solo justifica la inversión, sino que también permite a tu institución comunicar con datos concretos su compromiso con la accesibilidad, fortaleciendo su reputación y posicionándose como líder en responsabilidad social.</p>
    `,
  },
];
