import { ArrowRight } from "lucide-react";

export default function Nav() {
    function Button({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
        return primary ? (
            <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
            {children}
            </button>
        ) : (
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm text-slate-900 hover:bg-slate-50">
            {children}
            </button>
        );
    }
    const BRAND = {
        name: "AWI3 Learning",
        tagline: "Formations pratiques en IA, Blockchain & Management",
        ctaPrimary: "Commencer maintenant",
        ctaSecondary: "Voir les cours",
    };

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white font-black">A</div>
                <span className="font-semibold">{BRAND.name}</span>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
                <a className="text-sm text-slate-600 hover:text-orange-600" href="/">Accueil</a>
                <a className="text-sm text-slate-600 hover:text-orange-600" href="/courses">Cours</a>
                <a className="text-sm text-slate-600 hover:text-orange-600" href="/about">A Propos</a>
                <a className="text-sm text-slate-600 hover:text-orange-600" href="/contact">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
                <Button>Se connecter</Button>
                <Button primary>
                {BRAND.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
            </div>
        </header>
    )
}