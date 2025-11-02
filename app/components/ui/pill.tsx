
export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-50 px-3 py-1 text-sm text-orange-700">
      {children}
    </span>
  );
}