'use client';
import { useState } from 'react';
import { Check, ChevronRight, Terminal } from 'lucide-react';

const ROLES = [
  { key: 'programador', label: 'Programador', desc: 'Escribes la lógica que da vida a todo.' },
  { key: 'disenador', label: 'Diseñador', desc: 'La forma, la usabilidad y la identidad visual.' },
  { key: 'artista', label: 'Artista', desc: 'El arte visual, ilustración y dirección estética.' },
  { key: 'creador_de_historias', label: 'Creador de Historias', desc: 'Narrativa, lore y diseño de mundo.' },
  { key: 'disenador_de_sonido', label: 'Diseñador de Sonido', desc: 'Música, SFX y diseño sonoro.' },
];

export default function JoinFlow() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [github, setGithub] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const steps = ['name', 'role', 'connect', 'review'];
  const canNext = () => {
    if (step === 0) return name.trim().length > 1;
    if (step === 1) return !!role;
    return true;
  };

  const submit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), role, github: github.trim() }),
      });
      if (!res.ok) throw new Error('No se pudo crear el perfil');
      setDone(true);
    } catch (err) {
      setError('No se pudo completar el registro. Intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="border border-primary bg-primary/5 p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full border-2 border-primary flex items-center justify-center mb-4">
          <Check className="w-6 h-6 text-primary" />
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">// profile_initialized</div>
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight">Bienvenido, {name.split(' ')[0]}</h3>
        <p className="text-muted-foreground mt-2 text-sm">Tu nodo fue añadido al ecosistema. Pronto te contactaremos.</p>
        <button
          onClick={() => { setDone(false); setStep(0); setName(''); setRole(''); setGithub(''); }}
          className="mt-6 font-mono text-xs uppercase tracking-wider text-primary hover:underline"
        >
          &lt; reset &gt;
        </button>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-background">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground ml-2">gex@club:~/init_profile</span>
      </div>
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-8 font-mono text-[10px] uppercase tracking-widest">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className={i <= step ? 'text-primary' : 'text-muted-foreground/40'}>{String(i + 1).padStart(2, '0')}.{s}</span>
              {i < steps.length - 1 && <span className="text-border">→</span>}
            </div>
          ))}
        </div>

        {step === 0 && (
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-primary mb-3 block">$ input --name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && canNext() && setStep(1)}
              placeholder="Tu nombre completo"
              autoFocus
              className="w-full bg-transparent border border-border px-4 py-3 font-mono text-lg focus:border-primary outline-none transition-colors"
            />
            <p className="mt-3 text-xs text-muted-foreground">Como aparecerá en tu perfil de miembro.</p>
          </div>
        )}

        {step === 1 && (
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">$ select --role</label>
            <div className="grid sm:grid-cols-2 gap-2">
              {ROLES.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setRole(r.key)}
                  className={`text-left p-4 border transition-colors ${role === r.key ? 'border-primary bg-primary/5' : 'border-border hover:border-muted-foreground'}`}
                >
                  <div className="font-display font-bold uppercase tracking-tight text-sm">{r.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-primary mb-3 block">$ connect --github</label>
            <div className="flex items-center border border-border focus-within:border-primary transition-colors">
              <span className="px-3 font-mono text-muted-foreground text-sm">github.com/</span>
              <input
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && setStep(3)}
                placeholder="tu_usuario (opcional)"
                className="flex-1 bg-transparent py-3 pr-4 font-mono outline-none"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Opcional, pero recomendado para colaborar en proyectos.</p>
          </div>
        )}

        {step === 3 && (
          <div className="font-mono text-sm space-y-3">
            <div className="text-primary mb-4">$ git commit -m "init profile"</div>
            <div className="border border-border bg-background p-4 space-y-2">
              <div><span className="text-muted-foreground">name:</span> {name}</div>
              <div><span className="text-muted-foreground">role:</span> {ROLES.find((r) => r.key === role)?.label}</div>
              <div><span className="text-muted-foreground">github:</span> {github || '—'}</div>
            </div>
            {error && <p className="text-destructive text-xs">{error}</p>}
          </div>
        )}

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {step > 0 ? (
            <button onClick={() => setStep((s) => s - 1)} className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              ← back
            </button>
          ) : (
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40">init</span>
          )}
          {step < 3 ? (
            <button
              onClick={() => canNext() && setStep((s) => s + 1)}
              disabled={!canNext()}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold hover:bg-primary/90 transition-colors disabled:opacity-40"
            >
              <Terminal className="w-4 h-4" /> {submitting ? 'Committing…' : 'git commit'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
