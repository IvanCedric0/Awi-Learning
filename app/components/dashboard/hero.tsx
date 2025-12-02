import Link from "next/link";
export default function Hero() {
    return (
        <div className="overflow-hidden rounded-2xl bg-linear-to-r from-orange-500 via-orange-400 to-amber-300 p-px shadow-sm">
            <div className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white/95 px-4 py-4 sm:px-5 sm:py-5 md:flex-row md:items-center md:px-7">
              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-orange-500 sm:text-xs">
                  Bienvenue sur votre espace
                </p>
                <h1 className="text-base font-bold text-slate-900 sm:text-lg md:text-2xl">
                  Continuer à apprendre avec AWI3 Learning
                </h1>
                <p className="max-w-lg text-[11px] leading-relaxed text-slate-600 sm:text-sm">
                  Retrouvez vos cours en cours, vos certificats à venir et les
                  prochains modules à suivre. Avancez à votre rythme.
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-2 sm:items-end">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-3 py-2 text-[11px] font-semibold text-white shadow hover:bg-orange-700 sm:px-4 sm:text-xs"
                >
                  Explorer les cours
                </Link>
                <span className="text-[10px] text-slate-500 text-left sm:text-right">
                  Prochaine étape : choisir ou poursuivre un parcours
                </span>
              </div>
            </div>
          </div>
    )
}