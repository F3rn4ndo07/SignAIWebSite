import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

import { blogPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';

type BlogPageParams = {
  slug: string;
};

type BlogPageProps = {
  params: Promise<BlogPageParams>;
};

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <div className="mb-6">
                <Button asChild variant="ghost" className="text-foreground/70">
                    <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al listado
                    </Link>
                </Button>
            </div>
            <p className="text-primary font-semibold">{post.date}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
              {post.title}
            </h1>
          </header>

          {post.image && (
            <div className="relative aspect-video mb-12">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                data-ai-hint={post.image.hint}
                fill
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          )}

          <div
            className="prose prose-lg dark:prose-invert max-w-none mx-auto
                       prose-p:text-foreground/80 prose-headings:text-primary 
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

           <div className="mt-16 text-center">
                <Button asChild>
                    <Link href="/contacto">
                    Discutir este tema
                    </Link>
                </Button>
            </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
