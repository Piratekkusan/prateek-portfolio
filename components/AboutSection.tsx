"use client";

import { motion } from "framer-motion";

const skills = [
  "Short Form Editing",
  "Long Form Editing",
  "Motion Graphics",
  "Adobe Premiere Pro",
  "After Effects",
  "Talking Head Videos",
  "SaaS Launch Videos",
  "Color Grading",
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            I&apos;m a freelance video editor specializing in short-form and
            long-form talking head content for creators, and motion graphics
            ads for SaaS companies. I focus on sharp pacing, dynamic cuts,
            and clean visuals that keep viewers engaged.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Skills &amp; Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
