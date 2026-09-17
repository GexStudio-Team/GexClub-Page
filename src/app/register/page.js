import RegisterForm from '@/features/auth/RegisterForm';

export const metadata = {
  title: 'Registro | GexClub',
  description: 'Regístrate en GexClub y forma parte de nuestra comunidad de desarrolladores.',
};

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <RegisterForm />
    </div>
  );
}
