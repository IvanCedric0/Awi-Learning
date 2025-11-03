
export default function Button({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return primary ? (
    <a href="/courses" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">
      {children}
    </a>
  ) : (
    <a href="/courses" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm text-slate-900 hover:bg-slate-50">
      {children}
    </a>
  );
}