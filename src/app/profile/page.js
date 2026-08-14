'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/AuthContext';
import ProfilePanel from '@/components/profile/ProfilePanel';

export default function ProfilePage() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return (
      <div className="px-6 lg:px-16 py-20">
        <div className="border border-border bg-card p-8">
          <div className="h-8 w-48 bg-border animate-pulse mb-4" />
          <div className="h-4 w-72 bg-border animate-pulse mb-2" />
          <div className="h-4 w-56 bg-border animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-16 py-20">
      <ProfilePanel user={user} />
    </div>
  );
}
