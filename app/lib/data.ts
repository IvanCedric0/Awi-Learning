

export const HomePageCOURSES = [
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

export const FAQ = [
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

export type Course = {
  slug: string;
  title: string;
  category: "Blockchain" | "IA" | "Web 3";
  description: string;
  thumbnail: string;
  level?: "Débutant" | "Intermédiaire" | "Avancé";
  durationH?: number;
  lessons: { id: string; title: string; durationMin?: number; freePreview?: boolean }[];
};

export const COURSES: Course[] = [
  {
    slug: "introduction-blockchain",
    title: "Introduction à la Blockchain",
    category: "Blockchain",
    description:
      "Comprendre les fondements de la blockchain, son fonctionnement et ses applications concrètes dans la finance, l’agro et la supply chain.",
    thumbnail:
      "https://images.unsplash.com/photo-1646422235140-7f0c9e1f97e2?q=80&w=1200&auto=format&fit=crop",
    level: "Débutant",
    durationH: 6,
    lessons: [
      { id: "l1", title: "Qu’est‑ce que la blockchain ?", durationMin: 18, freePreview: true },
      { id: "l2", title: "Hash, blocs, consensus", durationMin: 22 },
      { id: "l3", title: "Cas d’usage en Afrique", durationMin: 26 },
    ],
  },
  {
    slug: "decouvrir-intelligence-artificielle",
    title: "Découvrir l’Intelligence Artificielle",
    category: "IA",
    description:
      "Initiation à l’IA : historique, familles de modèles, usages métiers, limites et éthique.",
    thumbnail:
      "https://images.unsplash.com/photo-1581093588401-22f88f0d1e54?q=80&w=1200&auto=format&fit=crop",
    level: "Débutant",
    durationH: 5,
    lessons: [
      { id: "l1", title: "Panorama de l’IA", durationMin: 20, freePreview: true },
      { id: "l2", title: "Supervisé vs non supervisé", durationMin: 24 },
      { id: "l3", title: "IA générative & usages", durationMin: 28 },
    ],
  },
  {
    slug: "web3-modeles-economiques",
    title: "Web 3 et nouveaux modèles économiques",
    category: "Web 3",
    description:
      "Comprendre les smart contracts, les tokens et les mécanismes économiques de la décentralisation.",
    thumbnail:
      "https://images.unsplash.com/photo-1642152240564-76360b30f9cf?q=80&w=1200&auto=format&fit=crop",
    level: "Intermédiaire",
    durationH: 7,
    lessons: [
      { id: "l1", title: "Fondamentaux du Web 3", durationMin: 21 },
      { id: "l2", title: "Tokenomics & gouvernance", durationMin: 27, freePreview: true },
      { id: "l3", title: "Cas d’usage & limites", durationMin: 25 },
    ],
  },
  {
    slug: "applications-avancees-ia",
    title: "Applications avancées de l’IA",
    category: "IA",
    description:
      "Construire des cas d’usage : classification, embeddings, RAG, automatisation des processus.",
    thumbnail:
      "https://images.unsplash.com/photo-1680191764408-0a0e2c91a7d1?q=80&w=1200&auto=format&fit=crop",
    level: "Intermédiaire",
    durationH: 8,
    lessons: [
      { id: "l1", title: "Collecte & features", durationMin: 30 },
      { id: "l2", title: "Evaluation & métriques", durationMin: 26 },
      { id: "l3", title: "RAG & agents", durationMin: 34, freePreview: true },
    ],
  },
  {
    slug: "blockchain-securite-donnees",
    title: "Blockchain et sécurité des données",
    category: "Blockchain",
    description:
      "Traçabilité, immutabilité et conformité : ce que change la blockchain pour la gouvernance des données.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    level: "Avancé",
    durationH: 6,
    lessons: [
      { id: "l1", title: "Sécurité & cryptographie", durationMin: 24 },
      { id: "l2", title: "Identité & confidentialité", durationMin: 23, freePreview: true },
      { id: "l3", title: "Audit & conformité", durationMin: 29 },
    ],
  },
];

