    
export default function Footer() {
    const BRAND = {
        name: "AWI3 Learning",
        tagline: "Formations pratiques en IA, Blockchain & Management",
        ctaPrimary: "Commencer maintenant",
        ctaSecondary: "Voir les cours",
    };
    return (
        <footer className="border-t border-slate-200">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
            <p className="text-xs text-slate-600">© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <a href="#" className="hover:text-orange-600">Mentions légales</a>
                <a href="#" className="hover:text-orange-600">Politique de confidentialité</a>
                <a href="#" className="hover:text-orange-600">Contact</a>
            </div>
            </div>
        </footer>
    )
}    
    