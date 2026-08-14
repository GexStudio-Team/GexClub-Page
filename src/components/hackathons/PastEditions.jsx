import { Trophy } from 'lucide-react';
import { PAST_EDITIONS } from '@/lib/hackathons';

export default function PastEditions() {
  return (
    <section className="mt-20 border-t border-border pt-16">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
        <span>&gt; git tag</span>
        <span className="h-px flex-1 bg-border" />
        <span className="text-primary">past_editions</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {PAST_EDITIONS.map((ed) => (
          <article key={ed.slug} className="border border-border bg-card p-8 flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/40 px-2.5 py-1">
                <Trophy className="w-3.5 h-3.5" /> {ed.year}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{ed.stat}</span>
            </div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight">{ed.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">Tema: {ed.theme}</p>

            <div className="mt-6 space-y-px bg-border border border-border">
              {ed.winners.map((w) => (
                <div key={w.place} className="flex items-start gap-4 bg-background p-4">
                  <span className="flex w-8 h-8 shrink-0 items-center justify-center font-mono text-xs text-primary border border-primary/40 bg-primary/5">
                    {w.place}
                  </span>
                  <div>
                    <div className="font-display font-bold uppercase tracking-tight text-sm">{w.team}</div>
                    <p className="text-xs text-muted-foreground mt-0.5">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}