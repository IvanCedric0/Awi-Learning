"use client";
import { useState } from "react";
import { CourseCard } from "@/app/components/ui/CourseCard";
import { COURSES } from "../lib/data";

export default function CoursesPage() {
  const [category, setCategory] = useState<"Tous" | "Blockchain" | "IA" | "Web 3">("Tous");
  const filtered = category === "Tous" ? COURSES : COURSES.filter((c) => c.category === category);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">

      <section className="relative py-16 md:py-24 bg-linear-to-b from-orange-50 to-white text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold md:text-5xl">
            Explorez nos <span className="text-orange-500">Cours</span>
          </h1>
          <p className="mt-4 text-base text-slate-700 max-w-2xl mx-auto">
            Apprenez à votre rythme grâce à des modules de formation conçus par des expertes africaines en innovation, blockchain, IA et Web 3.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 mb-10 flex justify-center flex-wrap gap-3">
        {["Tous", "Blockchain", "IA", "Web 3"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as any)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
              category === cat ? "bg-orange-600 text-white border-orange-600" : "border-slate-300 text-slate-700 hover:border-orange-400 hover:text-orange-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </section>
    </div>
  );
}
