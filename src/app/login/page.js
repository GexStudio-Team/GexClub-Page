import LoginForm from '@/features/auth/LoginForm';

export const metadata = {
  title: 'Iniciar Sesión | GexClub',
  description: 'Inicia sesión en la plataforma de GexClub para acceder a la comunidad y eventos.',
};

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <LoginForm />
    </div>
  );
}
