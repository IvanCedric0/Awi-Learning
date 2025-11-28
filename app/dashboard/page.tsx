import { createClient } from '../lib/supabase/supabaseServer'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = await createClient();

  const { data: {user} } = await supabase.auth.getUser()
  console.log(user);
  if (!user) redirect('/auth');

  return <div className="p-8">Bienvenue {user.email}</div>
}
