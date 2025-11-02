
export default function SectionTitle({ eyebrow, title, sub }:{ eyebrow?: string; title: React.ReactNode; sub?: string; }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-base text-slate-600">{sub}</p>}
    </div>
  );
}