import { motion } from "motion/react";

export default function BenefitCard({ icon, title, text }:{ icon: React.ReactNode; title: string; text: string; }) {
  return (
    <motion.div
      className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </motion.div>
  );
}