import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog de SignAI',
  description: 'Artículos y recursos sobre accesibilidad, inteligencia artificial, inclusión y el impacto de la tecnología en la comunidad sorda.',
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="text-center pt-12 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Blog de SignAI
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Recursos, ideas y noticias sobre el futuro de la accesibilidad, la inteligencia artificial y la inclusión para la comunidad sorda.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col">
                <CardHeader>
                  {post.image && (
                    <div className="aspect-video relative mb-4">
                       <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        data-ai-hint={post.image.hint}
                        fill
                        className="rounded-t-lg object-cover"
                      />
                    </div>
                  )}
                  <CardTitle className="text-xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-foreground/60 pt-1">{post.date}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="link" className="p-0">
                    <Link href={`/blog/${post.slug}`}>
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
