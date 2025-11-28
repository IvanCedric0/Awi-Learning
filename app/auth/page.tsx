'use client';

import { useState } from 'react';
import { createSupabaseBrowser } from '../lib/supabase/supabaseClient';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createSupabaseBrowser();
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/auth/callback` }});
    if (!error) setSent(true);
    else alert(error.message);
  }

  return (
    <div className="max-w-md mx-auto min-h-[75vh] py-20 px-4">
      <h1 className="text-2xl font-bold">Connexion</h1>
      <p className="text-sm mt-2 text-slate-600">Recevez un lien magique par email.</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <input className="w-full border rounded-xl px-3 py-2" placeholder="vous@exemple.com"
               type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <button className="bg-orange-600 text-white rounded-xl px-4 py-2" type="submit">Envoyer</button>
      </form>
      {sent && <p className="mt-3 text-green-600 text-sm">Lien envoyé ! Vérifiez votre email.</p>}
    </div>
  );
}
