import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vasilii Glebov",
  initials: "VG",
  location: "Madeira, Portugal",
  locationLink: "https://www.google.com/maps/place/Funchal",
  about:
  "Senior Software Engineer with 10+ years in full-stack development. " + 
"Building user-focused solutions for web, mobile, and desktop.",
  summary:
    "Experienced Software Engineer specializing in full-stack development using JavaScript-based technologies (React, React Native, Node.js, and Next.js). Proven track record in building and launching scalable products, leading cross-functional teams, and integrating advanced features such as data synchronization, AI tools, and CI/CD pipelines.",
  avatarUrl: "https://avatars.githubusercontent.com/u/25010956?v=4?s=120",
  personalWebsiteUrl: null,
  contact: {
    email: "vasihc@gmail.com",
    tel: "+351926041933",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vasihc",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vasihc/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Voronezh State University (VSU)",
      degree: "Master’s in ERP Systems",
      start: "2016",
      end: "2018",
    },
    {
      school: "Voronezh State University (VSU)",
      degree: "Bachelor’s in Data Protection",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Mobinautica",
      link: "https://www.mobinautica.com/",
      badges: ["Remote"],
      title: "Founding Engineer",
      logo: "mobinautica",
      start: "2023",
      end: "2024",
      description:
        "Developed cross-platform note-taking applications for web, iOS, and Android using React Native. Built an AI assistant with GPT integration for Telegram bots and a scalable backend architecture using Node.js and Firestore.",
    },
    {
      company: "Hints",
      link: "https://www.hints.so/",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      logo: "hints",
      start: "2021",
      end: "2024",
      description:
        "Developed cross-platform note-taking applications for web, iOS, and Android using React Native. Built an AI assistant with GPT integration for Telegram bots and a scalable backend architecture using Node.js and Firestore.",
    },
    {
      company: "AlphaOTT",
      link: "https://www.alphaott.com/",
      badges: ["Remote"],
      title: "Senior Software Engineer Team Lead",
      logo: "alphaott",
      start: "2021",
      end: "2021",
      description:
        "Led a team to develop OTT TV and mobile applications with React Native. Automated CI/CD pipelines, reducing deployment time by 50%.",
    },
    {
      company: "Apptivise",
      link: null,
      badges: ["Hybryd"],
      title: "Team Lead",
      logo: "apptivise",
      start: "2019",
      end: "2021",
      description:
        "Launched and scaled 12 mobile apps with over 10 million downloads and 12 smart TV apps. Designed and implemented app configuration and analytics UIs.",
    },
    {
      company: "GetIntent",
      link: "https://getintent.com/en/getintent-about-company/",
      badges: ["Hybryd"],
      title: "Frontend Developer",
      logo: "getintent",
      start: "2018",
      end: "2019",
      description:
        "Led the migration of the advertising platform UI to a single-page application using Angular. Improved UX by reducing page load times and implementing modern patterns.",
    },
    {
      company: "Dintecom",
      link: "https://dintecom.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "dintecom",
      start: "2017",
      end: "2018",
      description:
        "Integrated secure, data-driven healthcare features and developed an API for real-time patient data tracking using Angular and C#. Optimized API performance by 40%.",
    },
    {
      company: "Decart IT-Production",
      link: "https://dcrt.it/",
      badges: [],
      title: "Frontend Developer",
      logo: "decart",
      start: "2016",
      end: "2017",
      description:
        "Created 5 eCommerce products using Vue.js and JQuery following the waterfall methodology.",
    },
  ],
  skills: [
    "JavaScript / ES6 / TypeScript",
    "React / React Native / Redux",
    "Next.js / Webpack / Babel",
    "Node.js / Express.js / NestJS",
    "PostgreSQL / MongoDB",
    "Docker / AWS / CI/CD / Kubernetes",
    "API Development (REST, GraphQL)",
    "iOS / Android Development",
    "OAuth 2.0 / JWT",
    "Agile / Scrum",
  ],
  projects: [
    {
      title: "Cider",
      techStack: ["React", "GraphQL", "Snowpack"],
      description: "Developed the interface using cutting-edge tools and best practices.",
      logo: "cider",
      link: {
        label: 'cider.ai',
        href: 'https://cider.ai'
      }
    },
    {
      title: "Productivity AI",
      techStack: ["React Native", "Node.js", "GPT"],
      description: "Productivity AI helps to capture info to your productivity tools using chatbots.",
      logo: "productivity",
      link: {
        label: "productivity-ai.net",
        href: "https://productivity-ai.net/",
      },
    },
    {
      title: "Jitsu",
      techStack: ["React", "d3js"],
      description: "Developed a MVP to secure initial funding and apply to Y Combinator",
      logo: "jitsu",
      link: {
        label: 'jitsu.com',
        href: 'https://jitsu.com'
      }
    },
    {
      title: "Ai digital",
      techStack: ["React", "Tailwind"],
      description: "Created a website for a leading digital advertising agency.",
      logo: "aidigital",
      link: {
        label: "aidigital.com",
        href: "https://aidigital.com",
      },
    },
    {
      title: "Hmelnik mobile app",
      techStack: ["React Native", "Node.js"],
      description: "Developed a mobile application with a loyalty program for a major grocery store chain.",
      logo: "hmelnik",
      link: {
        label: "hmelnik.app",
        href: "https://itunes.apple.com/app/id1518940979"
      }
    },

    {
      title: "TopKek - smart memes feed",
      techStack: ["Dart", "Flutter", "Firebase", "ML"],
      description:
        "Developed a mobile app using Flutter and Firebase ML kit.",
      logo: "memes",
      link: {
        label: 'git',
        href: 'https://github.com/vasihc/memes'
      }
    },
  ],
} as const;