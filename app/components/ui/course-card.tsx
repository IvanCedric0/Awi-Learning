import { HomePageCOURSES as COURSES } from "@/app/lib/data";
import {BookOpen, Shield, CheckCircle2, PlayCircle } from "lucide-react";
import { motion} from "motion/react";
import { Pill } from "./pill";

export default function CourseCard({ course, i }:{ course: typeof COURSES[number]; i: number; }) {
    const stagger = (delay = 0.1) => ({
        initial: { opacity: 0, y: 20 },
        animate: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * delay, duration: 0.5 } }),
    });
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