
export default function Info(){
    return(
            <div className="md:col-span-2 rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-orange-600">Coordonnées</h2>
                <ul className="mt-4 space-y-4 text-sm text-slate-700">
                    <li>
                        <p className="font-medium text-slate-900">Email</p>
                        <a className="text-orange-600 hover:underline" href="mailto:contact@awi3.org">contact@awi3.org</a>
                    </li>
                    <li>
                        <p className="font-medium text-slate-900">Téléphone</p>
                        <a className="text-orange-600 hover:underline" href="tel:+225000000000">+225 07 07 62 73 04</a>
                    </li>
                    <li>
                        <p className="font-medium text-slate-900">Adresse</p>
                        <p>Abidjan, Songon Institut Pasteur</p>
                    </li>
                    <li>
                        <p className="font-medium text-slate-900">Réseaux sociaux</p>
                        <div className="mt-2 flex flex-wrap gap-3 text-orange-600">
                        <a href="#" className="hover:underline">LinkedIn</a>
                        </div>
                    </li>
                </ul>
                <div className="mt-6 rounded-xl bg-orange-50 p-4 text-sm text-slate-700">
                    <p className="font-medium text-orange-700">Entreprises & Partenariats</p>
                    <p className="mt-1">Vous souhaitez former une équipe, sponsoriser un programme ou co‑créer un parcours ? Parlons‑en.</p>
                </div>
            </div>
    )
}