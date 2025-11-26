import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Conoce cómo SignAI protege tus datos y respeta tu privacidad, en línea con nuestro compromiso de seguridad y confianza.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:text-primary prose-a:text-primary">
          <h1>Política de Privacidad</h1>
          <p className="text-foreground/60">Última actualización: 18 de Julio, 2024</p>

          <p>
            En SignAI ("nosotros", "nuestro"), la privacidad de nuestros usuarios y de las instituciones con las que trabajamos es de suma importancia. Esta Política de Privacidad describe cómo manejamos la información en relación con nuestro sitio web y nuestro producto, el wearable SignAI.
          </p>

          <h2>1. Información que Recopilamos a través del Sitio Web</h2>
          <p>
            Cuando visitas nuestro sitio web y utilizas nuestro formulario de contacto, podemos recopilar la siguiente información:
          </p>
          <ul>
            <li><strong>Información de Contacto:</strong> Nombre completo, cargo, institución, email y teléfono.</li>
            <li><strong>Información de Uso:</strong> Datos anónimos sobre cómo navegas en nuestro sitio, a través de herramientas de analítica web estándar.</li>
          </ul>

          <h2>2. Uso de la Información del Sitio Web</h2>
          <p>
            La información recopilada se utiliza exclusivamente para:
          </p>
          <ul>
            <li>Responder a tus consultas y solicitudes de información o demos.</li>
            <li>Mejorar la experiencia de usuario de nuestro sitio web.</li>
            <li>Comunicarnos contigo sobre nuestros productos y servicios, siempre que hayas dado tu consentimiento.</li>
          </ul>
          
          <h2>3. Privacidad en el Producto SignAI: Procesamiento On-Device</h2>
          <p>
            <strong>Este es el punto más importante de nuestra política:</strong> El wearable SignAI y su aplicación asociada están diseñados bajo el principio de "privacidad por diseño".
          </p>
          <p>
            Toda la traducción de lengua de señas a texto/voz y viceversa ocurre <strong>localmente en el dispositivo (on-device)</strong>. Esto significa que los datos de las conversaciones, que son de naturaleza biométrica y altamente sensible, <strong>no se envían a la nube ni a nuestros servidores.</strong> No almacenamos, registramos ni tenemos acceso a las conversaciones de nuestros usuarios.
          </p>

          <h2>4. No Compartimos tus Datos Personales</h2>
          <p>
            No vendemos, alquilamos ni compartimos tu información personal recopilada a través del sitio web con terceros para fines de marketing. Solo podríamos compartir información si es requerido por ley.
          </p>
          
          <h2>5. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger la información que recopilamos a través de nuestro sitio web contra el acceso no autorizado, la alteración o la destrucción.
          </p>

          <h2>6. Tus Derechos</h2>
          <p>
            Tienes derecho a acceder, corregir o eliminar tu información personal que hayamos recopilado. Para ejercer estos derechos, por favor contáctanos a <a href="mailto:privacidad@signai.pe">privacidad@signai.pe</a>.
          </p>
          
          <h2>7. Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos de cualquier cambio publicando la nueva política en esta página.
          </p>
        </div>
      </div>
    </div>
  );
}
