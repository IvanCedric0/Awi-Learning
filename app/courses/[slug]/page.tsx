import { notFound } from "next/navigation";
import Link from "next/link";
import { COURSES } from "@/app/lib/data";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    const {slug} = await params;
    const course = COURSES.find((c) => c.slug === slug);
  if (!course) return notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <section className="bg-linear-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-2 items-center">
          <img src={course.thumbnail} alt={course.title} className="w-full rounded-2xl border border-orange-200 shadow" />
          <div>
            <p className="text-xs uppercase tracking-wide text-orange-600 font-medium">{course.category}</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">{course.title}</h1>
            <p className="mt-3 text-slate-700">{course.description}</p>
            <p className="mt-3 text-sm text-slate-600">Niveau: {course.level} • Durée estimée: ~{course.durationH}h • Leçons: {course.lessons.length}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/auth`} className="rounded-xl bg-orange-600 px-5 py-2.5 text-white shadow hover:bg-orange-700">S’inscrire</Link>
              <Link href={`/courses`} className="rounded-xl border border-slate-300 px-5 py-2.5 text-slate-800 hover:border-orange-400 hover:text-orange-600">Retour aux cours</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold text-slate-900">Programme du cours</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {course.lessons.map((l, idx) => (
            <div key={l.id} className="flex items-center justify-between px-4 py-4">
              <div>
                <p className="text-sm font-medium text-slate-900">{idx + 1}. {l.title}</p>
                <p className="text-xs text-slate-500">{l.durationMin ? `${l.durationMin} min` : "Durée variable"} {l.freePreview ? "• Aperçu gratuit" : ""}</p>
              </div>
              {l.freePreview && (
                <Link href={`/lesson/${l.id}`} className="text-sm font-semibold text-orange-600 hover:underline">Prévisualiser</Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Prêt·e à démarrer ?</h3>
            <p className="mt-1 text-slate-700">Rejoignez le programme et suivez les leçons à votre rythme. Certificat inclus.</p>
          </div>
          <Link href={`/auth`} className="rounded-xl bg-orange-600 px-6 py-3 text-white shadow hover:bg-orange-700">S’inscrire maintenant</Link>
        </div>
      </section>
    </main>
  );
}
