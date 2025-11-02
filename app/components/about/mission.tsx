
export default function Misson(){
    return(
        <section id="vision" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Team working" className="rounded-2xl shadow" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-orange-600">Notre Vision</h2>
                    <p className="mt-4 text-slate-700 text-base leading-relaxed">
                    Devenir la plateforme d’apprentissage de référence en Afrique pour les femmes et les jeunes, en offrant des formations pratiques et certifiantes dans des domaines porteurs tels que l’Intelligence Artificielle, la Blockchain et le Management.
                    </p>
                    <h2 className="mt-8 text-2xl font-semibold text-orange-600">Notre Mission</h2>
                    <p className="mt-4 text-slate-700 text-base leading-relaxed">
                    Accompagner chaque apprenant·e à développer des compétences concrètes, monétisables et alignées sur les besoins du marché, tout en promouvant l’inclusion numérique et l’innovation durable sur le continent africain.
                    </p>
                </div>
            </div>
        </section>
    )
}