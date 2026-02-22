"use client";

import { Play } from "lucide-react";
import type { Project } from "@/data/projects";

interface VideoCardProps {
  project: Project;
  onClick: () => void;
}

export default function VideoCard({ project, onClick }: VideoCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-xl bg-gray-100 text-left transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            <Play size={24} className="ml-1 text-foreground" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="mb-1 inline-block text-xs font-medium uppercase tracking-wider text-accent">
          {project.category}
        </span>
        <h3 className="text-base font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>
    </button>
  );
}
