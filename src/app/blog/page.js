import Link from 'next/link';
import SectionHeader from '@/components/layout/SectionHeader';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata = {
  title: 'Blog',
  description:
    'Artículos y noticias sobre la comunidad GexClub: desarrollo de software, videojuegos, hackathons y cultura creadora.',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function Blog() {
  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader
        index="05"
        title="Blog"
        subtitle="Notas, aprendizajes y noticias del ecosistema. El conocimiento también se comparte."
      />

      <div className="border border-border">
        {BLOG_POSTS.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 p-6 hover:bg-card transition-colors ${i !== 0 ? 'border-t border-border' : ''}`}
          >
            <div className="font-mono text-[11px] text-muted-foreground md:w-36">
              {formatDate(post.date)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-primary/40 text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{post.excerpt}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
}