'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/contact/hero";
import ContactGrid from "../components/contact/contact-grid";
import CTA from "../components/contact/cta";
import Map from "../components/contact/map";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // TODO: wire to /api/contact or external form service
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <ContactGrid />
      <Map />
      <CTA />
    </div>
  );
}
