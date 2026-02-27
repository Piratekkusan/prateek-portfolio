"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="shrink-0"
        >
          <img
            src="/prateek-portfolio/prateek.png"
            alt="Prateek Singh"
            width={320}
            height={420}
            className="rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Freelance Video Editor
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Prateek Singh
          </h1>
          <p className="mb-10 max-w-lg text-lg text-muted-foreground">
            Most videos get watched. Few get remembered. Fewer still make someone buy. Specializing in the gap between those three.
          </p>
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark">
            View My Work
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
