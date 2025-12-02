import { createClient } from '@/app/lib/supabase/supabaseServer';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/dashboard/header';
import Hero from '../components/dashboard/hero';

type EnrollmentRow = {
  course: {
    id: string;
    slug: string;
    title: string;
    category: string;
    thumbnail: string | null;
    level: string | null;
  } | null;
};

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/auth');

  // 🔎 Get enrolled courses for this user
  const { data: enrollments, error } = await supabase
    .from('enrollments')
    .select(
      `
      course:courses (
        id,
        slug,
        title,
        category,
        thumbnail,
        level
      )
    `,
    )
    .eq('user_id', user.id);

  if (error) {
    console.error(error);
  }

  const courses =
    (enrollments as EnrollmentRow[] | null)
      ?.map((e) => e.course)
      .filter(Boolean) ?? [];

  // For now we don't calculate real progress; placeholder 0–40%
  const withProgress = courses.map((c, i) => ({
    ...c,
    progress: [0, 25, 40][i % 3], // fake progress just for UI
  }));

  const firstCourse = withProgress[0];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <Header user={user} />

      {/* Main content */}
      <div className="mx-auto grid max-w-6xl gap-5 px-3 py-5 sm:gap-6 sm:px-4 sm:py-6 lg:grid-cols-[2fr,1.1fr]">
        {/* Left column */}
        <section className="space-y-5 sm:space-y-6">
          {/* Hero / Welcome */}
          <Hero />

          {/* Continue learning */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-900">
                Continuer votre apprentissage
              </h2>
              {firstCourse && (
                <Link
                  href={`/course/${firstCourse.slug}`}
                  className="text-[11px] font-medium text-orange-600 hover:underline sm:text-xs"
                >
                  Voir le cours
                </Link>
              )}
            </div>

            {firstCourse ? (
              <Link
                href={`/course/${firstCourse.slug}`}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-orange-300 hover:shadow-md md:flex-row"
              >
                <div className="h-28 w-full overflow-hidden rounded-xl bg-slate-100 sm:h-32 md:w-40">
                  {firstCourse.thumbnail ? (
                    <img
                      src={firstCourse.thumbnail}
                      alt={firstCourse.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[11px] text-slate-400">
                      Aperçu du cours
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-orange-500 sm:text-[11px]">
                    {firstCourse.category}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {firstCourse.title}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Niveau : {firstCourse.level ?? 'À définir'}
                  </p>
                  <div className="pt-1.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 sm:text-[11px]">
                      <span>Progression estimée</span>
                      <span>{firstCourse.progress}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
                      <div
                        className="h-1.5 rounded-full bg-orange-500"
                        style={{ width: `${firstCourse.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-5 text-[11px] leading-relaxed text-slate-600 sm:text-sm">
                Vous n’êtes pas encore inscrite à un cours.
                <br />
                <Link href="/courses" className="font-semibold text-orange-600">
                  Parcourir le catalogue
                </Link>{' '}
                pour démarrer votre premier module.
              </div>
            )}
          </div>

          {/* Enrolled courses grid */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-900">
                Vos cours
              </h2>
              <span className="text-[10px] text-slate-500 sm:text-[11px]">
                {withProgress.length} cours inscrits
              </span>
            </div>

            {withProgress.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {withProgress.map((course) => (
                  <Link
                    key={course.id}
                    href={`/course/${course.slug}`}
                    className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-orange-300 hover:shadow-md"
                  >
                    <div className="h-24 w-full bg-slate-100 sm:h-28">
                      {course.thumbnail ? (
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[10px] text-slate-400 sm:text-[11px]">
                          Illustration du cours
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-orange-500 sm:text-[11px]">
                        {course.category}
                      </p>
                      <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                        {course.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 sm:text-[11px]">
                        Niveau : {course.level ?? 'À définir'}
                      </p>
                      <div className="mt-auto pt-1.5">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 sm:text-[11px]">
                          <span>Progression</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
                          <div
                            className="h-1.5 rounded-full bg-orange-500"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-5 text-[11px] leading-relaxed text-slate-600 sm:text-sm">
                Dès que vous vous inscrirez à un cours, il apparaîtra ici.
              </div>
            )}
          </div>
        </section>

        {/* Right column: stats & quick links */}
        <aside className="space-y-4 sm:space-y-5 lg:space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Votre progression
            </h2>
            <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
              Statistiques globales (estimées pour l’instant).
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-[11px] sm:text-xs">
              <div className="rounded-xl bg-orange-50 px-3 py-3">
                <p className="text-[10px] text-orange-600 sm:text-[11px]">
                  Cours suivis
                </p>
                <p className="mt-1 text-lg font-bold text-orange-700">
                  {withProgress.length}
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-3">
                <p className="text-[10px] text-slate-500 sm:text-[11px]">
                  Modules complétés
                </p>
                <p className="mt-1 text-lg font-bold text-slate-800">0</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-3">
                <p className="text-[10px] text-slate-500 sm:text-[11px]">
                  Heures estimées
                </p>
                <p className="mt-1 text-lg font-bold text-slate-800">
                  ~{withProgress.length * 3}
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-3">
                <p className="text-[10px] text-slate-500 sm:text-[11px]">
                  Certificats
                </p>
                <p className="mt-1 text-lg font-bold text-slate-800">0</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Actions rapides
            </h2>
            <div className="mt-3 space-y-2 text-[11px] sm:text-xs">
              <Link
                href="/courses"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 hover:border-orange-300 hover:bg-orange-50"
              >
                <span>Parcourir le catalogue complet</span>
                <span className="text-[10px] text-orange-500">→</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 hover:border-orange-200 hover:bg-orange-50/40"
              >
                <span>Contacter l’équipe AWI3</span>
                <span className="text-[10px] text-slate-500">→</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 hover:border-orange-200 hover:bg-orange-50/40"
              >
                <span>À propos de la plateforme</span>
                <span className="text-[10px] text-slate-500">→</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}