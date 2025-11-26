'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateTermsAction } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

const formSchema = z.object({
  productName: z.string().min(1, 'Nombre del producto es requerido'),
  companyName: z.string().min(1, 'Nombre de la compañía es requerido'),
  country: z.string().min(1, 'País es requerido'),
  sector: z.string().min(1, 'Sector es requerido'),
});

type FormData = z.infer<typeof formSchema>;

export function TermsGenerator() {
  const [generatedTerms, setGeneratedTerms] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: 'SignAI',
      companyName: 'SignAI Perú',
      country: 'Perú',
      sector: 'Tecnología y Accesibilidad',
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setError(null);
    setGeneratedTerms(null);

    const result = await generateTermsAction(values);

    if (result.success && result.data) {
      setGeneratedTerms(result.data.termsAndConditions);
    } else {
      setError(result.error || 'Ocurrió un error inesperado.');
    }

    setIsLoading(false);
  }

  return (
    <>
      <Card className="max-w-3xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Generador de Términos y Condiciones</CardTitle>
              <CardDescription>
                Utiliza IA para generar una base para los términos y condiciones de tu producto. Revisa siempre el resultado con un profesional legal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Producto</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de la Compañía</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>País</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sector</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Generando...' : 'Generar Documento'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      
      {error && (
        <Alert variant="destructive" className="max-w-3xl mx-auto mt-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isLoading && <p className="text-center mt-6">La IA está redactando el documento, por favor espera...</p>}

      {generatedTerms && (
        <Card className="max-w-3xl mx-auto mt-8">
            <CardHeader>
                <CardTitle>Documento Generado</CardTitle>
            </CardHeader>
            <CardContent>
                <div 
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: generatedTerms.replace(/\n/g, '<br />') }}
                />
            </CardContent>
        </Card>
      )}
    </>
  );
}
