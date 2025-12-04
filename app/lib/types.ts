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
}

export type CourseCategory = "Blockchain" | "IA" | "Web 3" | "Developpement";