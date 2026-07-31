import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import type { StaticImageData } from "next/image";
import corpcommentImg from "@/public/corpcomment.png";
// import ajwadPic from "@/public/ajw-ad-pic.jpg";
import ajwadPic from "@/public/ajwadPic.jpg";
import aetherPic from "@/public/aetherPic.jpg";
import grandPic from "@/public/grandPic.jpg";
// import crmPic from "@/public/crmPic.avif";
import crmPic from "@/public/crmPic.jpg";
import trippyPic from "@/public/trippyPic.jpg";
import realEstateImage from "@/public/realEstateImage.png";
import tamImg from "@/public/tam.png";
import dragImg from "@/public/drag.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export type ExperienceData = {
  title: string;
  location: string;
  date: string;
  highlights: string[];
  skills?: string;
  icon: React.ReactElement;
};

export const experiencesData: readonly ExperienceData[] = [
  {
    title: "Software Engineer",
    location: "Cloudilic & Dragify (SaaS) · Remote",
    date: "Aug 2025 – Present",
    highlights: [
      "Developed full-stack AI and workflow automation across Cloudilic and its SaaS platform Dragify, serving enterprise clients.",
      "Built Dragify's core integration nodes including Meta (WhatsApp, Messenger, IG), Shopify, WooCommerce, SQL databases, WordPress, and Google/Microsoft Workspaces.",
      "Developed custom AI agents and RAG systems using LangChain, OpenAI, and Gemini for intelligent document querying and automated client workflows.",
      "Architected scalable SaaS infrastructure with robust CI/CD pipelines, stress testing, dynamic billing systems, and system health monitoring.",
      "Created E-commerce automation templates, including cart abandonment recovery, WhatsApp OTP logistics verification, and customer support AI agents.",
      "Designed and maintained an admin dashboard to track user metrics, subscription upgrades, and overall workflow execution health.",
      "Delivered diverse client projects encompassing custom AI CRM automation (e.g., Tamiyouz, Mabrouk), Telegram bots, and high-load backend integrations (e.g., EU Grant Finder).",
      "Researched and integrated advanced automation strategies and external APIs, optimizing for API costs and execution reliability.",
    ],
    skills: "React, Node.js, LangChain, AI Agents, Workflow Automation, SaaS, Webhooks, CI/CD, System Architecture",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer Intern",
    location: "Cloudilic & Dragify (SaaS) · Remote",
    date: "Aug 2025 – Sep 2025",
    highlights: [
      "Learned AI fundamentals, including RAG (Retrieval-Augmented Generation), knowledge base design, and embeddings.",
      "Worked on LangChain and AI-driven document processing systems.",
      "Assisted in building AI agents capable of analyzing structured documents and automating workflows.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer",
    location: "Ajwad Developments · Cairo, Egypt · On-site",
    date: "Sep 2024 – Aug 2025",
    highlights: [
      "Customized Odoo ERP modules to fit the real estate workflow — added payment plan options, resale unit features, and better lead tracking tools.",
      "Improved the CRM system to make it easier for the sales team to manage clients, follow up on leads, and track property sales.",
      "Optimized system workflows to reduce manual work and errors by identifying pain points with the sales and operations teams.",
      "Developed and enhanced the company website using Next.js, Node.js, and TypeScript, applying modern UI/UX principles to improve property showcasing, SEO, and user experience.",
      "Helped train the sales team to use the Odoo system effectively for booking, follow-ups, and reporting.",
      "Worked on marketing tasks, including learning about digital marketing, sales funnels, branding, and how to attract clients through content and social media.",
      "Collaborated with multiple departments (sales, IT, marketing, and management) to build tools that solve real business problems and improve communication.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Frontend Web Developer",
    location: "Crystal Soft · Cairo, Egypt · Internship",
    date: "Jun 2025 – Jul 2025",
    highlights: [
      "Gained experience in big, real systems, understanding how frontend and backend teams work together.",
      "Worked on a large ERP system and got real-world experience with both frontend development and business logic.",
      "Collaborated with senior frontend and backend developers, and learned how business needs translate into technical features.",
      "Gained exposure to real business logic and improved coding and teamwork skills.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer Internship",
    location: "ALX Africa · Remote",
    date: "Nov 2023 – Nov 2024",
    highlights: [
      "Completed a 12-month intensive programme focused on full-stack software engineering.",
      "Mastered C, Python, JavaScript, SQL, and Bash scripting.",
      "Built low-level systems: memory allocation, shell, malloc, linked lists.",
      "Practiced OOP, recursion, data structures, algorithms, and debugging, and gained hands-on experience in web development.",
    ],
    skills: "Software Development, Node.js, React.js, C++",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Bachelor's degree, Computer Science",
    location: "El Shorouk Academy",
    date: "2022 – 2026",
    highlights: [
      "Learning how to write clean code, solve problems, and build smart computer systems.",
      "Courses cover topics like algorithms, data structures, and object-oriented programming (OOP).",
      "Joined tech clubs, helped other students with coding, and worked on group projects.",
    ],
    skills: "C++, Problem Solving",
    icon: React.createElement(LuGraduationCap),
  },
];

export type ProjectData = {
  slug: string;
  title: string;
  description: string;
  details: string[];
  highlights?: string[];
  tags: readonly string[];
  imageUrl: StaticImageData;
  demoUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
};

export const projectsData: readonly ProjectData[] = [
  {
    slug: "dragify-ai-workflow-automation-platform",
    title: "Dragify - AI Workflow Automation Platform",
    description:
      "No-code AI automation platform for building custom AI agents, integrating enterprise tools, and orchestrating real-time multi-agent workflows.",
    details: [
      "Dragify enables teams to automate marketing, sales, customer support, operations, HR, and finance workflows with minimal engineering effort.",
      "The platform connects with CRMs, Slack, Gmail, Google Drive, Shopify, and other enterprise systems through scalable API integrations.",
      "It focuses on real-time automation, webhook-driven orchestration, and one-click deployment to reduce manual work, engineering time, and operational errors.",
      "My role included AI workflow automation, internal node development, and scalable integration delivery.",
    ],
    highlights: [
      "Built and maintained custom internal Dragify nodes",
      "Developed AI-powered workflows integrating Meta channels (WhatsApp, Messenger, Instagram), Trello, Google Workspace, and Microsoft tools",
      "Designed asynchronous event-driven automations using webhooks for real-time task execution",
      "Improved reliability and performance with unit testing, stress testing, and code-level optimizations",
      "Collaborated with product and engineering teams to ship scalable AI automation across multiple business domains",
      "Enabled low-code workflow automation for marketing, sales, operations, and HR teams",
      "Reduced manual effort and operational errors across connected systems",
    ],
    tags: [
      "AI Agents",
      "Workflow Automation",
      "No-Code Platform",
      "Webhooks",
      "API Integrations",
      "Full-Stack Development",
    ],
    imageUrl: dragImg,
    demoUrl: "https://dragify.ai",
  },
  {
    slug: "tamiyouz-whatsapp-crm-automation",
    title: "Tamiyouz - AI-Powered WhatsApp-to-CRM Sales Automation",
    description:
      "AI-powered CRM automation that converts WhatsApp conversations into structured lead qualification and automated pipeline movement with optional human takeover.",
    details: [
      "Tamiyouz is a production-grade AI CRM automation system built for real businesses, not a simple chatbot.",
      "I handled AI automation, AI agent development, workflow automation, and full-stack implementation.",
      "The system qualifies every lead step-by-step, captures structured information in CRM, and moves leads through the sales pipeline automatically while keeping human handoff available at any time.",
    ],
    highlights: [
      "Structured AI qualification that asks one focused question at a time",
      "CRM integration with Trello card creation, summary updates, labels, and stage tracking",
      "Automatic pipeline progression based on lead responses",
      "Human-in-the-loop controls for intervention and review at any moment",
      "Knowledge-base grounding from campaign-specific PDF documents",
      "Cost-efficient AI design optimized for token usage and per-message cost",
      "Multi-session WhatsApp support for teams handling concurrent conversations",
      "Full message logging for traceability, auditing, and team visibility",
      "Business impact: faster response times and fewer missed opportunities",
      "Business impact: cleaner structured data and improved decision making",
      "Business impact: fewer manual pipeline errors with scalable operations",
      "Connected and stabilized Meta integrations (Messenger & Instagram)",
      "Fixed system bugs and managed domain updates across multiple environments",
    ],
    tags: [
      "Gemini",
      // "LangChain",
      "AI Chatbot",
      "AI Agent Development",
      // "Workflow Automation",
      "Full-Stack Development",
    ],
    imageUrl: tamImg,
    videoUrl: "https://www.youtube.com/watch?v=seyuTFpNhTQ",
  },
  {
    slug: "eu-grant-finder",
    title: "EU Grant Finder",
    description:
      "AI-powered Grant Matcher platform built with React and Node.js to rank real EU funding calls using hybrid scoring and optional AI insights.",
    details: [
      "Grant Matcher solves slow manual grant discovery by matching an organization profile against real calls from the EU Funding & Tenders ecosystem through the EU Search API.",
      "Users can sign up, create an organization profile, run filtered searches, and review ranked grants with match scores, AI explanations, and structured insights before opening the official EU call link.",
      "The system combines rule-based scoring with optional semantic AI scoring, AI query enhancement, document insight extraction, and caching controls to balance relevance, speed, and API cost.",
      "The platform includes secure auth (email/password plus optional Google/Facebook OAuth), session-based protection for search routes, and production-oriented performance controls such as paged fetching and concurrency limits.",
    ],
    highlights: [
      "Frontend built with React + TypeScript (Vite, Tailwind, Radix UI, Wouter, TanStack Query)",
      "Backend built with Node.js + Express TypeScript (Passport auth, MongoDB/Mongoose)",
      "Real EU Search API integration with no mock grant data",
      "Hybrid matching: rule-based scoring + optional AI semantic scoring",
      "AI query enhancement, AI explanations, and top-results document analysis",
      "User-controlled AI toggles, caching, progressive loading, and concurrency limits",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "EU Funding API",
    ],
    imageUrl: corpcommentImg,
    demoUrl: "https://eu.dragify.ai/",
  },
  {
    slug: "real-estate-website",
    title: "Real Estate Website",
    description:
      "The site is optimized for performance and SEO, with full Arabic and English support, making it ideal for showcasing properties in a polished and professional way.",
    details: [
      "A marketing website for a real estate business, built to be fast, SEO-friendly, and easy to maintain.",
      "Supports both Arabic and English content with a clean, responsive UI focused on property discovery and lead generation.",
    ],
    highlights: [
      "Bilingual (Arabic/English) UI",
      "SEO-focused pages and metadata",
      "Responsive layout optimized for performance",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    imageUrl: realEstateImage,
    demoUrl: "https://real-estate-website-nextjs-lovat.vercel.app/",
    // videoUrl: "",
    githubUrl: "https://github.com/Yousefeslam214/real-estate-website-nextjs",
  },

  {
    slug: "real-estate-crm",
    title: "CRM for Real Estate Company",
    description:
      "A custom CRM system built to manage leads, clients, and sales for a real estate company.",
    details: [
      "A tailored CRM to track leads, clients, and sales pipeline activities for a real estate team.",
      "Designed to make daily sales operations faster and more organized with a clear UI and role-based workflows.",
    ],
    highlights: [
      "Lead & client management",
      "Sales pipeline tracking",
      "Dashboard-style UI with MUI components",
    ],
    tags: ["React.js", "Node.js", "MUI"],
    imageUrl: crmPic,
    // demoUrl: "https://your-crm-demo-link.com",
    videoUrl:
      "https://drive.google.com/file/d/1fGMzCh8GFaN8pnWWDy6BsmetVQLu-aO5/view?usp=drivesdk",
    githubUrl: "https://github.com/Ajwad-real-estate",
  },
  {
    slug: "grand-events-website",
    title: "Grand Events Website",
    description:
      "An elegant and responsive website for an event management company. Designed with a modern UI to showcase services and events.",
    details: [
      "A modern marketing site for an event management company, focused on clear service presentation and strong visuals.",
      "Built with a responsive layout and smooth UI to highlight services, galleries, and call-to-action sections.",
    ],
    highlights: [
      "Modern responsive UI",
      "Service-first layout and CTAs",
      "Optimized media and performance",
    ],
    tags: ["Next.js", "Tailwind", "React"],
    imageUrl: grandPic,
    demoUrl: "https://grand-events-website.vercel.app/",
    githubUrl: "https://github.com/Yousefeslam214/Grand-Events-Website",
  },
  // {
  //   slug: "mabrouk-project",
  //   title: "Mabrouk - Core Platform & Dashboard",
  //   description:
  //     "A comprehensive client project involving core backend/frontend development, Telegram bot functionality, and a dedicated product dashboard.",
  //   details: [
  //     "Developed core backend and frontend features for the Mabrouk platform with continuous validations.",
  //     "Implemented advanced Telegram-related functionalities.",
  //     "Built and refined a detailed Product Dashboard for inventory and order management.",
  //   ],
  //   highlights: [
  //     "End-to-end full-stack development",
  //     "Telegram bot integration",
  //     "Product Dashboard implementation",
  //   ],
  //   tags: ["React", "Node.js", "Telegram API", "Full-Stack Development"],
  //   imageUrl: crmPic,
  // },
  // {
  //   slug: "learning-rockets",
  //   title: "Learning Rockets",
  //   description:
  //     "Client project focused on active development and strategic planning through ongoing synchronization.",
  //   details: [
  //     "Analyzed initial requirements, drafted contracts, and constructed the complete project plan.",
  //     "Executed active development and tracked progress via ongoing sync meetings to ensure alignment with client goals.",
  //   ],
  //   highlights: [
  //     "Requirements analysis and contract drafting",
  //     "Project planning and structured execution",
  //   ],
  //   tags: ["Project Planning", "Full-Stack Development", "Agile Execution"],
  //   imageUrl: dragImg,
  // },
  // {
  //   slug: "ajwad-website",
  //   title: "Ajwad Website",
  //   description:
  //     "Corporate website developed for a real estate brand. Built using WordPress with custom theme modifications.",
  //   details: [
  //     "A corporate website for a real estate brand, built on WordPress with custom theme adjustments.",
  //     "Focused on a professional look, content structure, and maintainability for non-technical updates.",
  //   ],
  //   highlights: ["Custom theme modifications", "Content-focused structure"],
  //   tags: ["WordPress"],
  //   imageUrl: ajwadPic,
  //   demoUrl: "https://ajw-ad.net/",
  // },
  // {
  //   slug: "aether-pixels-website",
  //   title: "Aether Pixels Website",
  //   description:
  //     "A visually-rich website created for a design agency. Built with WordPress focusing on aesthetics and performance.",
  //   details: [
  //     "A visually rich website for a design agency with a strong emphasis on aesthetics and fast loading.",
  //     "Built on WordPress to allow easy content updates while maintaining a polished UI.",
  //   ],
  //   highlights: ["Design-focused layout", "Performance-minded build"],
  //   tags: ["WordPress"],
  //   imageUrl: aetherPic,
  //   demoUrl: "https://aetherpixels.com",
  //   // githubUrl: "https://github.com/your-username/aetherpixels",
  // },
  // {
  //   slug: "trippy-website",
  //   title: "Trippy Website",
  //   description:
  //     "A modern travel-themed web app built using React.js and JavaScript. Focused on smooth UI and performance.",
  //   details: [
  //     "A travel-themed web app with a modern, smooth UI and responsive layout.",
  //     "Built with React to practice component-driven architecture and interactive UI patterns.",
  //   ],
  //   highlights: ["Component-based UI", "Responsive layout", "Smooth interactions"],
  //   tags: ["React.js", "JavaScript"],
  //   imageUrl: trippyPic,
  //   demoUrl: "https://trippy-214.netlify.app/",
  //   githubUrl: "https://github.com/Yousefeslam214/Trippy",
  // },
];

export const skillsData = [
  "AI Agents",
  "RAG Systems",
  "LangChain",
  "Workflow Automation",
  "Webhooks",
  "APIs",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "TypeScript",
  "JavaScript",
  "Python",
  "WordPress",
  "Shopify",
  "Odoo",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "Vector Databases",
  "Framer Motion",
  "CI/CD",
  "DevOps",
  "System Design",
  "Git",
  "CSS",
  "HTML",
] as const;
