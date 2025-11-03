import {HomePageCOURSES as COURSES } from "@/app/lib/data"
import SectionTitle from "../ui/section-title"
import CourseCard from "../ui/course-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Courses() {
    return (
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
            <a href={'/courses'} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm hover:bg-slate-50">
              Voir tout le catalogue <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    )
}