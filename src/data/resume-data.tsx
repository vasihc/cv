import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { DribbbleIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Alex Shevliakov",
  initials: "AS",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  about:
    "Founding Design Engineer and Indie Hacker focused on crafting user experiences that resonate.",
  summary:
    "Product Designer and Software Engineer with 8+ years of experience, specializing in solving B2C/B2B problems and building scalable products with defined user flows. Developed over 20 successful products generating annual revenues of $50M, created 4 enterprise-level design systems, and led R&D teams. Currently focused on integrating AI into business operations and designing interactive systems with intelligent agents.",
  avatarUrl: "https://avatars.githubusercontent.com/u/91679992?v=4?s=120",
  personalWebsiteUrl: "https://alexshelvey.com",
  contact: {
    email: "hi@alexshelvey.com",
    tel: "+351914108272",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alexjedi",
        icon: GitHubIcon,
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/pxlhead",
        icon: DribbbleIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alex-shelvey/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/voidengi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Plekhanov Russian University of Economics",
      degree: "Bachelor's of Engineering - BE, Computer Science",
      start: "2014",
      end: "2018",
    },
    {
      school: "HTMLAcademy",
      degree: "Frontend Development",
      start: "2016",
      end: "2017",
    },
  ],
  work: [
    {
      company: "AlgoX2",
      link: "https://algox2.com",
      badges: ["Remote"],
      title: "Founding Design Engineer",
      logo: "algox2",
      start: "2024",
      end: null,
      description:
        "Building design, website, application and vibe for ultimate streaming data platform.",
    },
    {
      company: "Void Engineering",
      link: "https://void.engineering",
      badges: ["Remote"],
      title: "Design Engineering Partner",
      logo: "void",
      start: "2024",
      end: null,
      description:
        "Building multiple bootstrapped projects including invitely.ai, novelia.app, effects.supply, and adx.broker. Crafting AI-powered solutions for existing and new products (MVPs).",
    },
    {
      company: "Hints",
      link: "https://hints.so",
      badges: ["Remote"],
      title: "Lead Product Designer & Product Engineer",
      logo: "hints",
      start: "2021",
      end: "2024",
      description:
        "Led product design and development for automation and note-taking products. Created design system that accelerated development speed. Tested 30+ hypotheses, developed MVPs, and interpreted analytics.",
    },
    {
      company: "Migrun",
      link: "https://migrun.tech",
      badges: ["Remote"],
      title: "Senior Design Engineer",
      logo: "migrun",
      start: "2022",
      end: "2023",
      description:
        "Created immigration assistance platform with telegram bot integration. Increased simultaneous case processing from 12 to 40 and improved call conversion by 13.4% through automated case identification system.",
    },
    {
      company: "AstraOne",
      link: "https://astraone.com",
      badges: ["Hybrid"],
      title: "Middle Product Engineer -> Head of Research And Development",
      logo: "astraone",
      start: "2019",
      end: "2022",
      description:
        "Developed adtech platform for data aggregation and targeting. Led R&D team of 15 creating AI-driven advertising products generating $300k+ MRR. Built design system, SSP and DSP products.",
    },
    {
      company: "Makesense",
      link: "https://makesense.dev",
      badges: ["Remote"],
      title: "Founding Design Engineer & Co-Founder",
      logo: "makesense",
      start: "2020",
      end: "2020",
      description:
        "Co-founded knowledge management tool using Zettelkasten and Mind Palace techniques.",
    },
    {
      company: "Solarskills, Plarin, etc.",
      link: null,
      badges: [],
      title: "Product Designer & Frontend Developer",
      logo: "solarskills",
      start: "2016",
      end: "2019",
      description:
        "Developed various products for Edtech, Adtech, and Fintech industries.",
    },
  ],
  skills: [
    "Product Design",
    "UX Research",
    "Animation Prototyping",
    "Design Systems",
    "Front-End Development",
    "Backend Development (Node.js)",
    "iOS Development (Swift)",
    "Three.js / React Three Fiber",
    "Framer Motion / Framer",
    "JavaScript / TypeScript",
    "React",
    "Vue",
    "Tailwind CSS",
    "Vercel / AWS",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Python (FastAPI)",
    "Langchain",
    "LLM",
    "AI",
  ],
  projects: [
    {
      title: "Invitely",
      techStack: ["Framer", "AI", "Telegram Bot"],
      description: "AI-powered invitation system",
      logo: "invitely",
      link: {
        label: "invitely.ai",
        href: "https://invitely.ai/",
      },
    },
    {
      title: "Novelia",
      techStack: ["Swift", "Next.js", "Node.js", "PostgreSQL"],
      description: "Daily novels reader app (iOS)",
      logo: "novelia",
      link: {
        label: "novelia.app",
        href: "https://novelia.app/",
      },
    },
    {
      title: "Effects Supply",
      techStack: ["Framer Motion", "Three.js", "Shaders"],
      description: "Animation Effects marketplace",
      logo: "effects",
      link: {
        label: "effects.supply",
        href: "https://effects.supply/",
      },
    },
    {
      title: "MakeSense",
      techStack: ["React", "Typescript", "Product Design"],
      description: "Knowledge Management Tool with AI-powered search",
      logo: "makesense",
    },
    {
      title: "Shader Supply",
      techStack: ["Three.js", "Shaders", "React Three Fiber"],
      description: "Shader effects playground",
      logo: "void",
      link: {
        label: "shader.supply",
        href: "https://void.engineering/",
      },
    },
    {
      title: "ADX Broker",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "GraphQL"],
      description: "Broker for Abu Dhabi Stock Exchange",
      logo: "adx",
      link: {
        label: "adx.broker",
        href: "https://adx.broker/",
      },
    },
    {
      title: "Make Figma Great Again",
      techStack: ["Figma API", "Chrome Extension", "Plasmo"],
      description: "Figma extension for UI3",
      logo: "mfga",
      link: {
        label: "mfga.xyz",
        href: "https://invitely.ai/",
      },
    },
  ],
} as const;