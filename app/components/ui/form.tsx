import { useState } from "react";

export default function Form() {
    const [sending, setSending] = useState(false);
      const [sent, setSent] = useState(false);
    
      async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSending(true);
        // TODO: wire to /api/contact or external form service
        await new Promise((r) => setTimeout(r, 900));
        setSending(false);
        setSent(true);
        (e.target as HTMLFormElement).reset();
      }
    return(
        <div className="md:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Formulaire de contact</h2>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nom complet</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" placeholder="Ex: Ama Kouacou" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <input id="email" type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" placeholder="vous@entreprise.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Téléphone (optionnel)</label>
                  <input id="phone" name="phone" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" placeholder="+225 …" />
                </div>
                <div>
                  <label htmlFor="topic" className="text-sm font-medium text-slate-700">Sujet</label>
                  <select id="topic" name="topic" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400">
                    <option value="">Choisir…</option>
                    <option>Informations sur une formation</option>
                    <option>Devis Entreprise</option>
                    <option>Partenariat</option>
                    <option>Support technique</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" required rows={6} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" placeholder="Décrivez votre besoin…" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">En soumettant, vous acceptez nos <a className="text-orange-600 hover:underline" href="#">conditions</a>.</p>
                <button type="submit" disabled={sending} className="rounded-xl bg-orange-600 px-5 py-2.5 text-white shadow hover:bg-orange-700 disabled:opacity-60">
                  {sending ? "Envoi…" : "Envoyer"}
                </button>
              </div>
              {sent && (
                <p className="text-sm text-green-600">Merci ! Votre message a bien été envoyé. Nous revenons vers vous rapidement.</p>
              )}
            </form>
          </div>
    )
}