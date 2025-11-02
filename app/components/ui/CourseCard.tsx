import Link from "next/link";
import { motion } from "motion/react";
import type { Course } from "@/app/lib/data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={course.thumbnail} alt={course.title} className="h-40 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-orange-600 font-medium">{course.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">{course.title}</h3>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-500">{course.level} • ~{course.durationH}h</span>
          <Link href={`/courses/${course.slug}`} className="inline-block text-sm font-semibold text-orange-600 hover:underline">
            Découvrir
          </Link>
        </div>
      </div>
    </motion.div>
  );
}