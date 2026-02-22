export interface Project {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
}

export const showreel: Project = {
  id: "showreel",
  title: "Showreel 2025",
  description: "A collection of my best work from the past year.",
  youtubeId: "dQw4w9WgXcQ",
  category: "Showreel",
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Brand Commercial",
    description: "A high-energy commercial for a lifestyle brand.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Commercial",
  },
  {
    id: "project-2",
    title: "Music Video",
    description: "Cinematic music video with creative color grading.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Music Video",
  },
  {
    id: "project-3",
    title: "Documentary Short",
    description: "A compelling short documentary about urban culture.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Documentary",
  },
  {
    id: "project-4",
    title: "Corporate Video",
    description: "Professional corporate overview with motion graphics.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Corporate",
  },
  {
    id: "project-5",
    title: "Social Media Campaign",
    description: "Series of short-form edits for social media.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Social Media",
  },
  {
    id: "project-6",
    title: "Event Highlight",
    description: "Dynamic event recap with fast-paced editing.",
    youtubeId: "dQw4w9WgXcQ",
    category: "Event",
  },
];
