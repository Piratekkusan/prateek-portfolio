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
  {
    id: "breakdown-series",
    title: "Long Form Breakdown",
    description: "In-depth long-form breakdown with engaging visuals and pacing.",
    youtubeId: "bZ63ThJ0WVE",
    category: "Long Form",
    featured: true,
  },
  {
    id: "orbit-launch",
    title: "SaaS Product Launch",
    description: "Motion graphics launch video for Orbit — a SaaS product.",
    youtubeId: "-39sKlPDIuQ",
    category: "Motion Graphics",
    featured: true,
  },
  {
    id: "confidence",
    title: "High Quality Clients",
    description: "Engaging short-form edit with sharp cuts and captions.",
    youtubeId: "9v5FKtPL2wI",
    category: "Short Form",
    featured: true,
    isShort: true,
  },
  {
    id: "first-dollar",
    title: "Creator Long Form",
    description: "Long-form talking head video for a content creator.",
    youtubeId: "nBdVa7g9L-M",
    category: "Long Form",
  },
  {
    id: "orbit-ad",
    title: "Motion Graphics Ad",
    description: "Short motion graphics ad for Orbit's marketing campaign.",
    youtubeId: "GCaA33rtCvs",
    category: "Motion Graphics",
    isShort: true,
  },
  {
    id: "th-8",
    title: "Short Form Edit",
    description: "Fast-paced short-form talking head content.",
    youtubeId: "bCs_64SEYiQ",
    category: "Short Form",
    isShort: true,
  },
  {
    id: "cody",
    title: "Talking Head Edit",
    description: "Punchy short-form talking head edit with dynamic cuts.",
    youtubeId: "r9Mpmdeu7v8",
    category: "Short Form",
    isShort: true,
  },
  {
    id: "long-form-1",
    title: "America's Middle Class Crisis",
    description: "Long form intro edit for a finance creator covering the middle class crisis.",
    youtubeId: "aEBDpch3eRM",
    category: "Long Form",
  },
  {
    id: "long-form-2",
    title: "Polish Stock Market Breakdown",
    description: "Long form intro edit for a finance creator covering Poland's market growth post-EU.",
    youtubeId: "HWEkAHuivhE",
    category: "Long Form",
  },
  {
    id: "long-form-3",
    title: "Music Producer Masterclass",
    description: "Long form intro edit for an expert music producer sharing industry tips.",
    youtubeId: "LsmFZejf1Es",
    category: "Long Form",
  },
  {
  id: "long-form-4",
  title: "Start Your Online Business Now",
  description: "Long form intro edit for a creator on why starting an online business today beats waiting.",
  youtubeId: "X2j4LRiR4QA",
  category: "Long Form",
  },
];
