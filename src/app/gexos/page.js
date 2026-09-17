'use client';

import Link from 'next/link';
import { ArrowLeft, TerminalSquare } from 'lucide-react';
import Terminal from '@/components/gexos/Terminal';

export default function GexOSPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col px-4 sm:px-8 lg:px-16 py-14">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22, 135, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(119, 71, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Inicio
          </Link>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-2 py-1 bg-primary/5">
          &lt;GEX_OS /&gt; v1.0
        </div>
      </div>

      <div className="relative flex-1 flex flex-col justify-center">
        <div className="flex items-start gap-3 mb-6">
          <TerminalSquare className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h1 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-balance">
              GEX_OS <span className="text-primary">Terminal</span>
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground text-sm md:text-base leading-relaxed">
              El núcleo de Gex Club. Escribe <span className="text-[#c8ff3d] font-mono text-[13px]">help</span> para
              descubrir los comandos, explora el vault de proyectos y conéctate con el ecosistema.
            </p>
          </div>
        </div>

        <Terminal />
      </div>
    </div>
  );
}