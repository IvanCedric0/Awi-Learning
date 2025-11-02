import { motion } from "motion/react";


export default function Hero(){
    return (
        <section className="relative py-16 md:py-24 bg-linear-to-b from-orange-50 to-white">
            <div className="mx-auto max-w-5xl px-4 text-center">
            <motion.h1
                className="text-4xl font-bold md:text-5xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                À propos de <span className="text-orange-500">AWI3 Learning</span>
            </motion.h1>
            <p className="mt-4 text-base text-slate-700 max-w-2xl mx-auto">
                AWI3 Learning est une initiative panafricaine dédiée à l’autonomisation des femmes et des jeunes à travers les technologies émergentes, la gestion et l’innovation. Nous combinons apprentissage en ligne, mentorat et projets concrets pour transformer les compétences en impact réel.
            </p>
            </div>
        </section>
    )
}