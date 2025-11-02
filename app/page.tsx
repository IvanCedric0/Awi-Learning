"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, Shield, Clock, BookOpen, Users, ChevronDown } from "lucide-react";
import Hero from "./components/homepage/hero";
import Benefits from "./components/homepage/benefits";
import Courses from "./components/homepage/courses";
import CallToAction from "./components/homepage/cta";
import Faq from "./components/homepage/faq";
import Footer from "./components/nav&footer/footer";

// --- THEME: Primary = Orange on White ---
const THEME = {
  primary: "#F97316", // Tailwind orange-500
};

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <Benefits />
      <Courses />
      <CallToAction />
      <Faq />
    </div>
  );
}
