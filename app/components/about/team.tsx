import { motion } from "motion/react";

export default function Team(){
    return(
        <section id="equipe" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Notre Équipe</h2>
          <p className="mt-3 text-base text-slate-600">Des femmes leaders, formatrices et entrepreneures au service du développement et de l’innovation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            name: "Ama Marie Chantal Kouacou",
            role: "CEO & Fondatrice",
            img: "/images/ama.jpg"
          }, {
            name: "Diane Inès Sanou",
            role: "Co-fondatrice & Mentore Blockchain",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
          }, {
            name: "Josée D’Esther Nanema",
            role: "Co-fondatrice & Experte en Leadership",
            img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop"
          }].map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-2xl border border-orange-200 bg-white p-6 text-center shadow">
              <img src={member.img} alt={member.name} className="mx-auto h-32 w-32 rounded-full object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-orange-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    )
}