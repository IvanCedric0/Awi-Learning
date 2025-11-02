import { motion } from "motion/react";

export default function Values(){
    return(
        <section className="mx-auto  px-4 py-16 md:py-20 bg-orange-50 ">
            <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-orange-600">Nos Valeurs</h2>
            <p className="mt-2 text-slate-700 max-w-2xl mx-auto">Chez AWI3, nous croyons en la puissance du savoir partagé, du leadership féminin et de l’innovation inclusive.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
                title: "Excellence",
                text: "Nous visons l’excellence dans chaque programme, en mettant l’accent sur la qualité et l’impact réel sur le terrain."
            }, {
                title: "Innovation",
                text: "Nous intégrons les nouvelles technologies pour offrir des expériences d’apprentissage modernes, interactives et motivantes."
            }, {
                title: "Leadership",
                text: "Nous formons des leaders capables de transformer leur environnement professionnel et communautaire."
            }].map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-2xl bg-white p-6 border border-orange-200 shadow-sm">
                <h3 className="text-lg font-semibold text-orange-600">{v.title}</h3>
                <p className="mt-2 text-slate-700 text-sm">{v.text}</p>
                </motion.div>
            ))}
            </div>
        </section>
    )
}