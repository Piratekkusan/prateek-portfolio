"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { showreel, projects, type Project } from "@/data/projects";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-muted px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Work
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center text-muted-foreground">
            A selection of projects showcasing my editing style and creative
            approach.
          </p>
        </motion.div>

        {/* Showreel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${showreel.youtubeId}?rel=0`}
                title={showreel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
            {showreel.title}
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <VideoCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
