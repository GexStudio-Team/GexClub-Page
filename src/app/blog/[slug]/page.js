import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getPostBySlug } from '@/lib/blog';
import { BLOG_POSTS } from '@/lib/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="px-6 lg:px-16 py-20 max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al blog
      </Link>

      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-primary/40 text-primary">
          {post.category}
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {new Date(post.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <Clock className="w-3 h-3" /> {post.readTime}
        </span>
      </div>

      <h1 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight text-balance mb-6">
        {post.title}
      </h1>

      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-10 pb-6 border-b border-border">
        <User className="w-4 h-4" /> por <span className="text-foreground">{post.author}</span>
      </div>

      <div className="space-y-6 text-lg leading-relaxed">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}