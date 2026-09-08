'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PROMPT, runCommand, suggestCommand } from '@/lib/commands';
import MatrixRain from '@/components/gexos/MatrixRain';

const TONE_CLASS = {
  default: 'text-foreground',
  primary: 'text-primary',
  success: 'text-foreground',
  error: 'text-red-400',
  dim: 'text-muted-foreground',
  lime: 'text-[#c8ff3d]',
  div: 'h-1',
};

const OUTPUT_TYPES = Object.keys(TONE_CLASS);

export default function Terminal() {
  const router = useRouter();
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [matrix, setMatrix] = useState(false);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const print = useCallback((out, kind = 'cmd') => {
    if (Array.isArray(out)) {
      out.forEach((l) => {
        if (!OUTPUT_TYPES.includes(l?.tone)) return;
        if (l.tone === 'matrix') return setMatrix(true);
        if (l.tone === 'clear') return setLines([]);
        if (l.tone === 'exit') return router.push('/');
        setLines((prev) => [...prev, { kind: 'out', ...l }]);
      });
      return;
    }
    setLines((prev) => [...prev, { kind, text: out }]);
  }, [router]);

  const boot = useCallback(() => {
    print([
      { text: '', tone: 'div' },
      { text: '╔══════════════════════════════════════════════╗', tone: 'lime' },
      { text: '║        GEX_OS v1.0 — Gex Club Terminal        ║', tone: 'lime' },
      { text: '║   Global Ecosystem for eXcellence · EST. 2024 ║', tone: 'lime' },
      { text: '╚══════════════════════════════════════════════╝', tone: 'lime' },
      { text: '', tone: 'div' },
      { text: 'Bienvenido al núcleo de Gex Club.', tone: 'default' },
      { text: 'Escribe "help" para ver los comandos disponibles.', tone: 'dim' },
      { text: '', tone: 'div' },
    ]);
  }, [print]);

  useEffect(() => { boot(); }, [boot]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [matrix]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, matrix]);

  const submit = useCallback(() => {
    const raw = input.trim();
    if (!raw) {
      print([{ text: PROMPT + ' ' + raw, tone: 'primary' }], 'cmd');
      return;
    }
    const parsed = raw.trim().split(/\s+/);
    const isExit = ['exit', 'cerrar', 'salir'].includes(parsed[0].toLowerCase());
    if (isExit) {
      print([{ text: PROMPT + ' ' + raw, tone: 'primary' }, { text: '', tone: 'div' }]);
      router.push('/');
      return;
    }
    const out = runCommand(raw);
    print([{ text: PROMPT + ' ' + raw, tone: 'primary' }, { text: '', tone: 'div' }, ...out]);
    setHistory((prev) => [...prev, raw]);
    setHistoryIdx(-1);
    setInput('');
  }, [input, print, router]);

  const handleKey = useCallback((e) => {
    if (e.key === 'Enter') submit();
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const idx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(idx);
      setInput(history[idx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const idx = historyIdx + 1;
      if (idx >= history.length) { setHistoryIdx(-1); setInput(''); return; }
      setHistoryIdx(idx);
      setInput(history[idx] ?? '');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const s = suggestCommand(input);
      if (s) setInput(s + ' ');
    }
  }, [history, historyIdx, input, submit]);

  const handleGlobalKeys = useCallback((e) => {
    if (e.key === 'Escape' && matrix) {
      setMatrix(false);
    }
  }, [matrix]);

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeys);
    return () => window.removeEventListener('keydown', handleGlobalKeys);
  }, [handleGlobalKeys]);

  if (matrix) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <MatrixRain onExit={() => setMatrix(false)} />
        <div className="fixed bottom-6 inset-x-0 text-center font-mono text-xs uppercase tracking-widest text-[#c8ff3d]/80 pointer-events-none">
          [ ESC para volver a la terminal ]
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative border border-border bg-card flex flex-col overflow-hidden"
      style={{ height: 'min(72vh, 720px)', minHeight: 420 }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/60">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          gex_os — zsh
        </span>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground hidden sm:inline">
          ctrl+v para pegar
        </span>
      </div>

      <div ref={bodyRef} className="flex-1 overflow-y-auto px-5 py-4 font-mono text-[13px] leading-[1.7]">
        {lines.map((l, i) => {
          if (l.kind === 'cmd') {
            return <div key={i} className="whitespace-pre-wrap text-primary">{l.text}</div>;
          }
          const cls = TONE_CLASS[l.tone] || TONE_CLASS.default;
          if (l.tone === 'div') return <div key={i} className="h-2" />;
          return <div key={i} className={`whitespace-pre-wrap ${cls}`}>{l.text}</div>;
        })}

        <div className="flex items-center gap-2">
          <span className="text-primary whitespace-nowrap">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Comando de GEX_OS"
            className="flex-1 bg-transparent outline-none text-foreground caret-[#c8ff3d] font-mono"
          />
        </div>
      </div>

      <div className="px-5 py-2 border-t border-border bg-background/60 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>gex shell</span>
        <span>v1.0 — cohérente up-time</span>
      </div>
    </div>
  );
}