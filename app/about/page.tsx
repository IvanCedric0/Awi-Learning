'use client'
import Hero from "../components/about/hero";
import Misson from "../components/about/mission";
import Team from "../components/about/team";
import Values from "../components/about/values";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <Misson />
      <Team />
      <Values />
    </div>
  );
}
