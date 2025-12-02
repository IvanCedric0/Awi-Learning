import { createClient } from '@/app/lib/supabase/supabaseServer';
import { redirect } from 'next/navigation';
import Link from 'next/link';

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
      <header className=" border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-4">
          <div className="flex items-center gap-2 bg-orange-500 rounded-2xl">
            <div className="flex flex-col">
              <span className="text-sm p-4 font-semibold text-white">
                Tableau de bord apprenante
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-right bg-white rounded-2xl p-3 px-4 border-dashed border border-slate-200 ">
            <div className="hidden text-xs text-slate-500 sm:block">
              <p className="font-medium text-slate-700">
                Bonjour,
              </p>
              <p className="truncate text-[11px] text-slate-500">
                {user.email}
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-700">
              {user.email?.[0]?.toUpperCase() ?? 'A'}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[2fr,1.1fr]">
        {/* Left column */}
        <section className="space-y-6">
          {/* Hero / Welcome */}
          <div className="overflow-hidden rounded-2xl bg-linear-to-r from-orange-500 via-orange-400 to-amber-300 p-[1px] shadow-sm">
            <div className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white/95 px-5 py-5 md:flex-row md:items-center md:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  Bienvenue sur votre espace
                </p>
                <h1 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
                  Continuer à apprendre avec AWI3 Learning
                </h1>
                <p className="mt-2 text-sm text-slate-600 max-w-lg">
                  Retrouvez vos cours en cours, vos certificats à venir et les
                  prochains modules à suivre. Avancez à votre rythme.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center rounded-xl bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-orange-700"
                >
                  Explorer les cours
                </Link>
                <span className="text-[11px] text-slate-500">
                  Prochaine étape : choisir ou poursuivre un parcours
                </span>
              </div>
            </div>
          </div>

          {/* Continue learning */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Continuer votre apprentissage
              </h2>
              {firstCourse && (
                <Link
                  href={`/course/${firstCourse.slug}`}
                  className="text-xs font-medium text-orange-600 hover:underline"
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
                <div className="h-32 w-full overflow-hidden rounded-xl bg-slate-100 md:w-40">
                  {firstCourse.thumbnail ? (
                    <img
                      src={firstCourse.thumbnail}
                      alt={firstCourse.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                      Aperçu du cours
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-500">
                    {firstCourse.category}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    {firstCourse.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Niveau : {firstCourse.level ?? 'À définir'}
                  </p>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
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
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-sm text-slate-600">
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
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Vos cours
              </h2>
              <span className="text-[11px] text-slate-500">
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
                    <div className="h-28 w-full bg-slate-100">
                      {course.thumbnail ? (
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[11px] text-slate-400">
                          Illustration du cours
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-500">
                        {course.category}
                      </p>
                      <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                        {course.title}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Niveau : {course.level ?? 'À définir'}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
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
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-sm text-slate-600">
                Dès que vous vous inscrirez à un cours, il apparaîtra ici.
              </div>
            )}
          </div>
        </section>

        {/* Right column: stats & quick links */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Votre progression
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Statistiques globales (estimées pour l’instant).
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs">
              <div className="rounded-xl bg-orange-50 px-3 py-3">
                <p className="text-[11px] text-orange-600">Cours suivis</p>
                <p className="mt-1 text-lg font-bold text-orange-700">
                  {withProgress.length}
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-3">
                <p className="text-[11px] text-slate-500">Modules complétés</p>
                <p className="mt-1 text-lg font-bold text-slate-800">0</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-3">
                <p className="text-[11px] text-slate-500">Heures estimées</p>
                <p className="mt-1 text-lg font-bold text-slate-800">
                  ~{withProgress.length * 3}
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-3">
                <p className="text-[11px] text-slate-500">Certificats</p>
                <p className="mt-1 text-lg font-bold text-slate-800">0</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Actions rapides
            </h2>
            <div className="mt-3 space-y-2 text-xs">
              <Link
                href="/courses"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 hover:border-orange-300 hover:bg-orange-50"
              >
                <span>Parcourir le catalogue complet</span>
                <span className="text-[10px] text-orange-500">→</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 hover:border-orange-50"
              >
                <span>Contacter l’équipe AWI3</span>
                <span className="text-[10px] text-slate-500">→</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 hover:border-orange-50"
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
