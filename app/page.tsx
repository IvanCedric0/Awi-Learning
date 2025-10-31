"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, Shield, Clock, BookOpen, Users, ChevronDown } from "lucide-react";

// --- THEME: Primary = Orange on White ---
const THEME = {
  primary: "#F97316", // Tailwind orange-500
};

const BRAND = {
  name: "AWI3 Learning",
  tagline: "Formations pratiques en IA, Blockchain & Management",
  ctaPrimary: "Commencer maintenant",
  ctaSecondary: "Voir les cours",
};

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
  bg:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop",
};

const BENEFITS = [
  {
    icon: <Shield className="h-6 w-6 text-orange-500" />, title: "Contenu validé",
    text: "Programmes structurés, alignés aux besoins du marché africain et international.",
  },
  {
    icon: <Clock className="h-6 w-6 text-orange-500" />, title: "À votre rythme",
    text: "Accès 24/7 sur web & mobile. Projets courts, checklists et templates.",
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />, title: "Mentorat & communauté",
    text: "Sessions live, retours personnalisés et forum privé des apprenants.",
  },
];

const COURSES = [
  {
    title: "Comprendre l'Intelligence Artificielle",
    level: "Débutant",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
    hours: 12,
    bullets: ["Fondamentaux de l'IA", "Cas d'usages métiers", "Mini‑projet guidé"],
  },
  {
    title: "Blockchain pour les décideurs",
    level: "Intermédiaire",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    hours: 10,
    bullets: ["Fonctionnement", "Wallets & sécurité", "Tokenomics de base"],
  },
  {
    title: "Management & Contrôle de Gestion",
    level: "Pro",
    img: "https://images.unsplash.com/photo-1556742400-b5b7c5121f90?q=80&w=1600&auto=format&fit=crop",
    hours: 16,
    bullets: ["Budgets & KPI", "Tableaux de bord", "Étude de cas OIA Anacarde"],
  },
];

const FAQ = [
  {
    q: "Puis‑je migrer depuis Wix sans tout refaire ?",
    a: "Les animations et la logique dépendantes de la plateforme Wix ne sont pas exportables. Cette page est un rebuild 100% autonome (React) prêt à héberger n'importe où.",
  },
  {
    q: "Comment intégrer mon LMS ?",
    a: "Exposez vos endpoints (auth, catalog, progress). Nous brancherons les boutons CTA et la page cours sur ces APIs côté client ou via un BFF.",
  },
  {
    q: "Puis‑je garder mon domaine ?",
    a: "Oui. Pointez le DNS vers votre nouvel hébergement (Vercel, Netlify, Render…) et configurez SSL + redirections.",
  },
];

// --- UI helpers ---
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stagger = (delay = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * delay, duration: 0.5 } }),
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-50 px-3 py-1 text-sm text-orange-700">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, sub }:{ eyebrow?: string; title: React.ReactNode; sub?: string; }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-base text-slate-600">{sub}</p>}
    </div>
  );
}

function BenefitCard({ icon, title, text }:{ icon: React.ReactNode; title: string; text: string; }) {
  return (
    <motion.div
      className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </motion.div>
  );
}

function CourseCard({ course, i }:{ course: typeof COURSES[number]; i: number; }) {
  return (
    <motion.div
      custom={i}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0.12)}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img src={course.img} alt={course.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-black/30" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <Pill>
            <BookOpen className="h-4 w-4" /> {course.hours}h
          </Pill>
          <Pill>
            <Shield className="h-4 w-4" /> {course.level}
          </Pill>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-tight">{course.title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {course.bullets.map((b, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <button className="rounded-xl px-4 py-2 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600">
            Détails du cours
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
            <PlayCircle className="h-4 w-4" /> Aperçu
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a }:{ q: string; a: string; }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-4 text-left">
        <span className="text-base font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-sm text-slate-700"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Button({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return primary ? (
    <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
      {children}
    </button>
  ) : (
    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm text-slate-900 hover:bg-slate-50">
      {children}
    </button>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white font-black">A</div>
            <span className="font-semibold">{BRAND.name}</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-slate-600 hover:text-orange-600" href="#courses">Cours</a>
            <a className="text-sm text-slate-600 hover:text-orange-600" href="#benefits">Avantages</a>
            <a className="text-sm text-slate-600 hover:text-orange-600" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button>Se connecter</Button>
            <Button primary>
              {BRAND.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
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

      {/* BENEFITS */}
      <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionTitle
          eyebrow="Pourquoi AWI3?"
          title={<span>Tout pour apprendre <span className="underline decoration-orange-200 underline-offset-4">et appliquer</span></span>}
          sub="Une pédagogie orientée résultats, adaptée aux professionnels et aux entrepreneurs."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <BenefitCard key={i} {...b} />
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionTitle
            eyebrow="Catalogue"
            title="Quelques parcours populaires"
            sub="Connectez ces cartes à votre catalogue LMS ou CMS."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c, i) => (
              <CourseCard key={c.title} course={c} i={i} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm hover:bg-slate-50">
              Voir tout le catalogue <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
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

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-4 pb-20">
        <SectionTitle title="Questions fréquentes" />
        <div className="mt-8 space-y-3">
          {FAQ.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-orange-600">Mentions légales</a>
            <a href="#" className="hover:text-orange-600">Politique de confidentialité</a>
            <a href="#" className="hover:text-orange-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
