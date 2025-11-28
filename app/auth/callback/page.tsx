'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowser } from '@/app/lib/supabase/supabaseClient';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createSupabaseBrowser();

    (async () => {
      // 👉 Use the full URL so Supabase can read `code` and other params
      const url = window.location.href;

      const { data, error } = await supabase.auth.exchangeCodeForSession(url);

      console.log('exchangeCodeForSession result:', { data, error });

      if (error) {
        router.replace(`/auth?error=${encodeURIComponent(error.message)}`);
      } else {
        router.replace('/dashboard');
      }
    })();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-slate-600">
        Connexion en cours, un instant…
      </p>
    </div>
  );
}
