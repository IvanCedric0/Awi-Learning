import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function FAQItem({ q, a }:{ q: string; a: string; }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-4 text-left">
        <span className="text-base font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-sm text-slate-700"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}