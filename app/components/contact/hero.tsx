import { motion } from "motion/react";

export default function Hero(){
    return (
        <section className="relative py-16 md:py-24 bg-linear-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.h1
            className="text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contactez <span className="text-orange-500">AWI3</span>
          </motion.h1>
          <p className="mt-4 text-base text-slate-700 max-w-2xl mx-auto">
            Une question sur nos formations, un partenariat, un devis entreprise ? Écrivez‑nous via le formulaire ci‑dessous — nous répondons vite.
          </p>
        </div>
      </section>
    )
}