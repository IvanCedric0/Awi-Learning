import { link } from "fs";


export const HomePageCOURSES = [
  {
    title: "Introduction à l'Intelligence Artificielle",
    level: "Débutant",
    img: "/images/intro-ia.jpg",
    hours: 12,
    bullets: ["Fondamentaux de l'IA", "Cas d'usages métiers", "Mini‑projet guidé"],
    link: '/courses/decouvrir-intelligence-artificielle'
  },
  {
    title: "Introduction à la Blockchain",
    level: "Débutant",
    img: "/images/into-blockchain.jpg",
    hours: 10,
    bullets: ["Fonctionnement", "Wallets & sécurité", "Tokenomics de base"],
    link: '/courses/introduction-blockchain'
  },
  {
    title: "Introduction au Web 3.0: L'avenir d'Internet",
    level: "Débutant",
    img: "/images/intro-web3.jpg",
    hours: 16,
    bullets: ["Budgets & KPI", "Tableaux de bord", "Étude de cas OIA Anacarde"],
    link: '/courses/web3-modeles-economiques'
  },
];

export const FAQ = [
  {
    q: "Qu’est‑ce que AWI3 Learning ?",
    a: "AWI3 Learning est une plateforme de formation dédiée à la montée en compétence des femmes africaines dans les domaines de l’innovation, de la blockchain, de l’IA et du Web 3. Nous proposons des parcours certifiants, des ateliers et des modules en ligne adaptés aux besoins du marché africain.",
  },
  {
    q: "Comment puis‑je m’inscrire à un cours ?",
    a: "Cliquez sur le bouton “S’inscrire” présent sur la fiche du cours. Vous serez redirigé vers la page d’authentification ou d’inscription, puis vous pourrez accéder à votre espace apprenante.",
  },
  {
    q: "Les cours sont‑ils gratuits ?",
    a: "Certains modules d’introduction sont gratuits (aperçus ou sessions découverte). Les parcours complets et certifiants sont payants et peuvent être pris en charge dans le cadre de programmes partenaires.",
  },
  {
    q: "Puis‑je suivre les cours sur mobile ?",
    a: "Oui. Tous les contenus sont compatibles avec les smartphones et tablettes. Vous pouvez apprendre où que vous soyez.",
  },
  {
    q: "Comment puis‑je devenir formatrice sur la plateforme ?",
    a: "AWI3 Learning accueille des femmes expertes souhaitant partager leurs connaissances. Contactez‑nous via le formulaire ou par email à contact@awi3.com pour présenter votre profil et vos modules.",
  },
  {
    q: "Quels sont les domaines de formation proposés ?",
    a: "Nos catégories principales sont la Blockchain, l’Intelligence Artificielle, le Web 3, le Developpement,  la transformation digitale et la gestion d’entreprise.",
  },
  {
    q: "Comment accéder à mon certificat ?",
    a: "Une fois toutes les leçons et évaluations terminées, votre certificat sera automatiquement généré dans votre tableau de bord personnel.",
  },
];

export type Course = {
  slug: string;
  title: string;
  category: "Blockchain" | "IA" | "Web 3" | "Developpement";
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
      "/images/into-blockchain.jpg",
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
    title: "Introduction à l’Intelligence Artificielle",
    category: "IA",
    description:
      "Initiation à l’IA : historique, familles de modèles, usages métiers, limites et éthique.",
    thumbnail:
      "/images/intro-ia.jpg",
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
    title: "Introduction au Web 3.0: L'avenir d'Internet",
    category: "Web 3",
    description:
      "Comprendre les smart contracts, les tokens et les mécanismes économiques de la décentralisation.",
    thumbnail:
      "/images/intro-web3.jpg",
    level: "Intermédiaire",
    durationH: 7,
    lessons: [
      { id: "l1", title: "Fondamentaux du Web 3", durationMin: 21 },
      { id: "l2", title: "Tokenomics & gouvernance", durationMin: 27, freePreview: true },
      { id: "l3", title: "Cas d’usage & limites", durationMin: 25 },
    ],
  },
  {
    slug: "utilisation-ia-generative",
    title: "Comment utiliser l’IA générative au quotidien ?",
    category: "IA",
    description:
      "Comprendre les usages de l’IA générative et ses limites. Outils et cas d’utilisation pratiques.",
    thumbnail:
      "/images/utilisation-ia-gen.png",
    level: "Intermédiaire",
    durationH: 8,
    lessons: [
      { id: "l1", title: "Collecte & features", durationMin: 30 },
      { id: "l2", title: "Evaluation & métriques", durationMin: 26 },
      { id: "l3", title: "RAG & agents", durationMin: 34, freePreview: true },
    ],
  },
  {
    slug: "html-css-javascript",
    title: "HTML, CSS & JavaScript",
    category: "Developpement",
    description:
      "Créer vos premiers sites web static avec les langages de programmation HTML, CSS et JavaScript.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    level: "Débutant",
    durationH: 6,
    lessons: [
      { id: "l1", title: "Sécurité & cryptographie", durationMin: 24 },
      { id: "l2", title: "Identité & confidentialité", durationMin: 23, freePreview: true },
      { id: "l3", title: "Audit & conformité", durationMin: 29 },
    ],
  },
];

