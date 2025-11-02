import { motion } from "motion/react";
import Button from "../ui/button";
import { ArrowRight, Clock, CheckCircle2, Shield, Sparkles, Users, PlayCircle } from "lucide-react";
export default function Hero() {
    const HERO = {
        heading: (
            <>
            Accélérez votre carrière avec
            <span className="mx-2 inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-white shadow-sm">
                <Sparkles className="h-4 w-4" /> l'e‑learning AWI3
            </span>
            </>
        ),
        sub: "Des parcours conçus par des experts pour passer de la théorie à l'action. Certificats, projets concrets, communauté engagée.",
        bg: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop",
    };
    const BRAND = {
            name: "AWI3 Learning",
            tagline: "Formations pratiques en IA, Blockchain & Management",
            ctaPrimary: "Commencer maintenant",
            ctaSecondary: "Voir les cours",
    };
    function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-50 px-3 py-1 text-sm text-orange-700">
        {children}
        </span>
    );
    }
    return(
       <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={HERO.bg} alt="hero" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-b from-white/70 to-white" />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs text-orange-700">
              <Sparkles className="h-4 w-4" /> {BRAND.tagline}
            </div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {HERO.heading}
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-700">{HERO.sub}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button primary>
                {BRAND.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button>{BRAND.ctaSecondary}</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-700">
              <Pill><Shield className="h-4 w-4" /> Certificat inclus</Pill>
              <Pill><Clock className="h-4 w-4" /> Projets courts</Pill>
              <Pill><Users className="h-4 w-4" /> Communauté active</Pill>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow">
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                  alt="Course preview"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Démo rapide</span>
                  <span className="text-xs text-slate-500">1:12</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded bg-slate-100">
                  <div className="h-1.5 w-1/3 rounded bg-orange-500" />
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                  <PlayCircle className="h-4 w-4 text-orange-500" /> Cliquez pour voir plus
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> 
    )
}