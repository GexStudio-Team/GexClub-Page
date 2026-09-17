'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from './AuthContext';
import { UserPlus, AlertCircle, Loader2, User, Mail, KeyRound } from 'lucide-react';

export default function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);

    try {
      await register(fullName, email, password);
      router.push('/');
    } catch (err) {
      setError(err.message || 'Error al registrar usuario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card border border-border rounded-lg shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full pointer-events-none" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-xs uppercase tracking-wider mb-2">
          <UserPlus className="w-3.5 h-3.5" /> UNIRSE AL CLUB
        </div>
        <h2 className="text-2xl font-display font-bold tracking-tight">Crear Cuenta</h2>
        <p className="text-sm text-muted-foreground mt-1">Regístrate para participar en la comunidad y eventos de GexClub.</p>
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
            Nombre Completo
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              required
              placeholder="Alex Dev"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border rounded focus:outline-none focus:border-primary text-sm font-sans transition-colors"
            />
          </div>
        </div>

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

        <div>
          <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
            Confirmar Contraseña
          </label>
          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="password"
              required
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              <Loader2 className="w-4 h-4 animate-spin" /> REGISTRANDO...
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4" /> REGISTRARSE
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-border text-center text-xs text-muted-foreground">
        ¿Ya tienes una cuenta?{' '}
        <Link href="/login" className="text-primary hover:underline font-mono uppercase">
          Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
}
