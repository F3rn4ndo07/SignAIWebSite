'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';

const formSchema = z.object({
  fullName: z.string().min(3, 'El nombre completo es requerido'),
  title: z.string().min(2, 'El cargo es requerido'),
  institution: z.string().min(2, 'La institución es requerida'),
  email: z.string().email('Email institucional inválido'),
  phone: z.string().optional(),
  sector: z.enum(['Salud', 'Educación', 'Gobierno local', 'Otro'], { required_error: 'Debe seleccionar un sector' }),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        fullName: "",
        title: "",
        institution: "",
        email: "",
        phone: "",
        message: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real application, you would handle the form submission here.
    // For example, sending the data to an API endpoint or a service like HubSpot.
    // The following comment shows where you might add a HubSpot script.
    
    /* 
      // Example of HubSpot form submission logic
      const hubspotPortalId = 'YOUR_PORTAL_ID';
      const hubspotFormId = 'YOUR_FORM_ID';
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;
      
      const payload = {
        fields: [
          { name: 'firstname', value: values.fullName.split(' ')[0] },
          { name: 'lastname', value: values.fullName.split(' ').slice(1).join(' ') },
          { name: 'jobtitle', value: values.title },
          { name: 'company', value: values.institution },
          { name: 'email', value: values.email },
          { name: 'phone', value: values.phone },
          { name: 'sector', value: values.sector },
          { name: 'message', value: values.message },
        ],
      };

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully submitted to HubSpot', data);
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch(error => {
        console.error('Error submitting to HubSpot', error);
        setIsSubmitting(false);
      });
    */

    console.log('Form values:', values);
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
        <div className="text-center bg-green-50 border border-green-200 text-green-800 rounded-lg p-8">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold">¡Solicitud recibida!</h3>
            <p className="mt-2">Gracias por tu interés en SignAI. Nuestro equipo se pondrá en contacto contigo a la brevedad.</p>
        </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                    <Input placeholder="Tu nombre y apellido" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Cargo</FormLabel>
                <FormControl>
                    <Input placeholder="Ej: Jefe de Innovación" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institución</FormLabel>
              <FormControl>
                <Input placeholder="Nombre de tu hospital, universidad o municipio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email institucional</FormLabel>
                <FormControl>
                    <Input placeholder="tu.email@institucion.gob.pe" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Teléfono (Opcional)</FormLabel>
                <FormControl>
                    <Input placeholder="Tu número de contacto" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="sector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el sector de tu institución" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Salud">Salud</SelectItem>
                  <SelectItem value="Educación">Educación</SelectItem>
                  <SelectItem value="Gobierno local">Gobierno local</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntanos más sobre tus necesidades de accesibilidad o cómo podemos ayudarte."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
        </Button>
      </form>
    </Form>
  );
}
