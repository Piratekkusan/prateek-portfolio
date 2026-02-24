export interface Project {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: "Long Form" | "Motion Graphics" | "Short Form";
  featured?: boolean;
  isShort?: boolean;
}

export const projects: Project[] = [
  // ⭐ Featured
  {
    id: "breakdown-series",
    title: "Breakdown Series P1",
    description:
      "In-depth long-form breakdown with engaging visuals and pacing.",
    youtubeId: "bZ63ThJ0WVE",
    category: "Long Form",
    featured: true,
  },
  {
    id: "orbit-launch",
    title: "Orbit Launch Video",
    description:
      "Motion graphics launch video for Orbit — a SaaS product.",
    youtubeId: "-39sKlPDIuQ",
    category: "Motion Graphics",
    featured: true,
  },
  {
    id: "cody",
    title: "Cody",
    description:
      "Punchy short-form talking head edit with dynamic cuts.",
    youtubeId: "r9Mpmdeu7v8",
    category: "Short Form",
    featured: true,
    isShort: true,
  },

  // Regular projects
  {
    id: "first-dollar",
    title: "What Helped Me Make My First Dollar Online",
    description:
      "Long-form talking head video for a content creator.",
    youtubeId: "nBdVa7g9L-M",
    category: "Long Form",
  },
  {
    id: "orbit-ad",
    title: "Orbit AD",
    description:
      "Short motion graphics ad for Orbit's marketing campaign.",
    youtubeId: "GCaA33rtCvs",
    category: "Motion Graphics",
    isShort: true,
  },
  {
    id: "th-8",
    title: "TH 8",
    description:
      "Fast-paced short-form talking head content.",
    youtubeId: "bCs_64SEYiQ",
    category: "Short Form",
    isShort: true,
  },
  {
    id: "confidence",
    title: "Confidence Comes Last, Not First",
    description:
      "Engaging short-form edit with sharp cuts and captions.",
    youtubeId: "LQflpVhu1Xk",
    category: "Short Form",
    isShort: true,
  },
];
