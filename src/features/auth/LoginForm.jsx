'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from './AuthContext';
import { LogIn, AlertCircle, Loader2, KeyRound, Mail } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);
      router.push('/');
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card border border-border rounded-lg shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-xs uppercase tracking-wider mb-2">
          <KeyRound className="w-3.5 h-3.5" /> ACCESO A MIEMBROS
        </div>
        <h2 className="text-2xl font-display font-bold tracking-tight">Iniciar Sesión</h2>
        <p className="text-sm text-muted-foreground mt-1">Ingresa tus credenciales para acceder a la plataforma.</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 rounded text-destructive text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
            Correo Electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border rounded focus:outline-none focus:border-primary text-sm font-sans transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
            Contraseña
          </label>
          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border rounded focus:outline-none focus:border-primary text-sm font-sans transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider font-semibold rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> PROCESANDO...
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4" /> INICIAR SESIÓN
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-border text-center text-xs text-muted-foreground">
        ¿No tienes una cuenta?{' '}
        <Link href="/register" className="text-primary hover:underline font-mono uppercase">
          Regístrate aquí
        </Link>
      </div>
    </div>
  );
}
