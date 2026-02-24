"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch("https://formspree.io/f/mnjblnvo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="bg-muted px-6 py-24">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Have a project in mind? Let&apos;s work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-lg font-semibold text-foreground">
                Thanks for reaching out!
              </p>
              <p className="mt-2 text-muted-foreground">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
