"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Freelance Video Editor
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Prateek Singh
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
          Crafting compelling stories through creative editing, motion graphics,
          and post-production.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          View My Work
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
