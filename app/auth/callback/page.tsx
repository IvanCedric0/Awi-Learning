'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowser } from '@/app/lib/supabase/supabaseClient';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const supabase = createSupabaseBrowser();

      // 👇 With `detectSessionInUrl: true`, this call makes Supabase:
      // - read the tokens from the URL
      // - store the session (cookies/localStorage)
      const { data, error } = await supabase.auth.getUser();

      console.log('callback getUser result:', { user: data.user, error });

      if (data.user && !error) {
        router.replace('/dashboard');
      } else {
        router.replace('/auth?error=auth_failed');
      }
    };

    run();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-slate-600">Connexion en cours, un instant…</p>
    </div>
  );
}
