import { Clock, Shield, Users } from "lucide-react";
import BenefitCard from "../ui/benefitCard"
import SectionTitle from "../ui/section-title";
export default function Benefits() {
    const BENEFITS = [
        {
            icon: <Shield className="h-6 w-6 text-orange-500" />, title: "Contenu validé",
            text: "Programmes structurés, alignés aux besoins du marché africain et international.",
        },
        {
            icon: <Clock className="h-6 w-6 text-orange-500" />, title: "À votre rythme",
            text: "Accès 24/7 sur web & mobile. Projets courts, checklists et templates.",
        },
        {
            icon: <Users className="h-6 w-6 text-orange-500" />, title: "Mentorat & communauté",
            text: "Sessions live, retours personnalisés et forum privé des apprenants.",
        },
    ];
    return (
        <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionTitle
          eyebrow="Pourquoi AWI3?"
          title={<span>Tout pour apprendre <span className="underline decoration-orange-200 underline-offset-4">et appliquer</span></span>}
          sub="Une pédagogie orientée résultats, adaptée aux professionnels et aux entrepreneurs."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <BenefitCard key={i} {...b} />
          ))}
        </div>
      </section>

    )
}