import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Declaración de Accesibilidad',
  description: 'Nuestro compromiso con la accesibilidad web y el cumplimiento de las buenas prácticas de inclusión digital (WCAG).',
};

export default function AccessibilityPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:text-primary prose-a:text-primary">
          <h1>Declaración de Accesibilidad Web</h1>
          <p className="text-foreground/60">Última actualización: 18 de Julio, 2024</p>
          
          <p>
            En SignAI, la inclusión está en el ADN de todo lo que hacemos, y nuestro sitio web no es una excepción. Nos comprometemos a garantizar la accesibilidad digital para personas con discapacidad y trabajamos continuamente para mejorar la experiencia de usuario para todos, aplicando los estándares de accesibilidad relevantes.
          </p>

          <h2>Estado de Conformidad</h2>
          <p>
            Las Pautas de Accesibilidad para el Contenido Web (WCAG) definen los requisitos para que diseñadores y desarrolladores mejoren la accesibilidad para personas con discapacidad. Aspiramos a una conformidad de nivel AA de las WCAG 2.1.
          </p>
          <p>
            Creemos que este sitio web cumple en gran medida con los estándares, pero reconocemos que la accesibilidad es un esfuerzo continuo.
          </p>

          <h2>Medidas Tomadas</h2>
          <p>
            Algunas de las medidas que hemos implementado para hacer nuestro sitio más accesible incluyen:
          </p>
          <ul>
            <li><strong>Contraste de color:</strong> Hemos seleccionado una paleta de colores que asegura un contraste adecuado entre el texto y el fondo.</li>
            <li><strong>Navegación por teclado:</strong> Es posible navegar por todo el sitio utilizando únicamente el teclado.</li>
            <li><strong>Texto alternativo:</strong> Todas las imágenes informativas contienen un texto alternativo descriptivo.</li>
            <li><strong>Estructura semántica:</strong> Utilizamos encabezados (H1, H2, H3), listas y otros elementos HTML de manera semántica para facilitar la navegación con lectores de pantalla.</li>
            <li><strong>Diseño responsivo:</strong> El sitio se adapta a diferentes tamaños de pantalla, desde móviles hasta ordenadores de escritorio.</li>
             <li><strong>Etiquetas ARIA:</strong> Usamos atributos ARIA (Accessible Rich Internet Applications) cuando es necesario para mejorar la experiencia de los usuarios de tecnologías de asistencia.</li>
          </ul>

          <h2>Feedback</h2>
          <p>
            ¡Tu opinión es muy importante para nosotros! Si encuentras alguna barrera de accesibilidad en nuestro sitio o tienes alguna sugerencia para mejorar, no dudes en contactarnos.
          </p>
          <p>
            Por favor, envíanos un email a <a href="mailto:accesibilidad@signai.pe">accesibilidad@signai.pe</a> con la mayor cantidad de detalles posible para que podamos abordar el problema.
          </p>
          
          <h2>Próximos Pasos</h2>
          <p>
            Estamos comprometidos con la mejora continua. Nuestros planes futuros incluyen auditorías de accesibilidad regulares por parte de terceros y la capacitación continua de nuestro equipo en las mejores prácticas de desarrollo web inclusivo.
          </p>
        </div>
      </div>
    </div>
  );
}
