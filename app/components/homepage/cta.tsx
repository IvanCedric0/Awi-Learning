import { motion } from "motion/react";
import Button from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
            <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-linear-to-br from-orange-50 to-white p-8 text-center shadow">
            <motion.h3
                className="text-2xl font-semibold md:text-3xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Prêt·e à rejoindre la prochaine cohorte ?
            </motion.h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-700">
                Inscrivez‑vous aujourd'hui, réservez votre place et recevez le guide PDF « 30 jours pour passer à l'action ».
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button primary>
                S'inscrire maintenant <ArrowRight className="h-4 w-4" />
                </Button>
                <Button>Parler à un conseiller</Button>
            </div>
            </div>
        </section>
    )
}