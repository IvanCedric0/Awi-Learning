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

// app/types/coursePlayer.ts
export type Lesson = {
  id: string;
  title: string;
  ord: number;
  duration_min?: number;
  video_url?: string | null; 
  body_md?: string;             // optional long text (markdown/html later)
};

export type Module = {
  id: string;
  title: string;
  ord: number;
  lessons: Lesson[];
};

export type CoursePlayerData = {
  id: string;
  slug: string;
  title: string;
  progressPercent?: number;  // 0–100
  modules: Module[];
};
