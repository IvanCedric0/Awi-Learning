export type Course = {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  description: string;
  thumbnail: string;
  level?: "Débutant" | "Intermédiaire" | "Avancé";
  bullets: string[];
  duration: number;
  modules?: { id: string; title: string; ord: number; summary: string }[];
}

export type CourseCategory = "Blockchain" | "IA" | "Web 3" | "Developpement";