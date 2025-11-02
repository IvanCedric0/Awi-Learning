import SectionTitle from "../ui/section-title";
import { FAQ } from "@/app/lib/data";
import FAQItem from "../ui/faq-items";
export default function Faq(){
    return(
        <section id="faq" className="mx-auto max-w-5xl px-4 pb-20">
        <SectionTitle title="Questions fréquentes" />
        <div className="mt-8 space-y-3">
          {FAQ.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </section>
    )
}