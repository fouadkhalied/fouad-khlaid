import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import type { StaticImageData } from "next/image";
import corpcommentImg from "@/public/fishfarm360.png";
import octopusAdImg from "@/public/octupusad.png";
import chatwootImg from "@/public/chatwoot.png";
import crmPic from "@/public/crmPic.jpg";
import realEstateImage from "@/public/realEstateImage.png";
import schoolAdmissionImg from "@/public/schoolAdmission.png";

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
    location: "Digital Wave · Remote",
    date: "May 2025 – Apr 2026",
    highlights: [
      "Built scalable backend services and REST APIs, integrating third-party systems and managing production deployments with Docker and CI/CD pipelines.",
      "OctopusAd Marketing Platform: Performance marketing platform for managing ad campaigns across multiple channels. Integrated Paymob and built a credit-to-impressions billing engine. Designed RBAC with admin workflows and architected a dual-database setup with self-hosted object storage.",
      "Multi-Channel AI Integration (WhatsApp & Messenger via Chatwoot): Built a full end-to-end integration connecting WhatsApp and Messenger to internal systems, supporting text, image, and voice formats. Implemented a custom HMAC-SHA256 webhook verifier, designed inventory metadata sync, and built document-ingestion pipelines for an AI FAQ agent.",
    ],
    skills: "Node.js, NestJS, PostgreSQL, MongoDB, Paymob, Docker, n8n, REST APIs, Webhooks, Shopify API, pgvector",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Microsoft Data engineer Internship",
    location: "DEPI · Hybrid",
    date: "JUN 2024 – OCT 2024",
    highlights: [
      "Completed a 6-month intensive programme focused on Data engineer program for microsoft track",
      "Mastered SSIS , ETL and azure cloud",
      "Built a Capstone project using data engineering tools",
    ],
    skills: "SQL Server and Python",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Mern Stack Internship",
    location: "SEF Academy · Remote",
    date: "SEP 2023 – MAR 2024",
    highlights: [
      "Completed a 7-month intensive programme focused on full-stack nodejs",
      "Mastered JavaScript, MongoDB",
      "Built 5+ full-stack projects using Node.js, Express, React and MongoDB",
    ],
    skills: "JS, Problem solving",
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
    slug: "octopusad-marketing-platform",
    title: "OctopusAd - Performance Marketing Platform",
    description:
      "Performance marketing platform for managing ad campaigns across multiple channels, with a credit-to-impressions billing engine and role-based access control.",
    details: [
      "Built at Digital Wave as a key project, OctopusAd is a multi-channel ad campaign management platform designed for performance marketers.",
      "Integrated Paymob as the payment gateway and engineered a custom credit-to-impressions billing engine to track and convert payments into ad delivery units.",
      "Designed a full RBAC system with admin workflows to control access and operations across different user roles.",
      "Architected a dual-database setup (PostgreSQL + MongoDB) with self-hosted object storage for flexible data management and media handling.",
    ],
    highlights: [
      "Multi-channel ad campaign management",
      "Paymob integration with a custom credit-to-impressions billing engine",
      "RBAC system with admin workflows",
      "Dual-database architecture (PostgreSQL + MongoDB) with self-hosted object storage",
    ],
    tags: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Paymob", "Docker", "RBAC"],
    imageUrl: octopusAdImg,
    demoUrl: "https://octopusad.com/"
  },
  {
  slug: "multi-channel-ai-integration",
  title: "Multi-Channel AI Integration (WhatsApp & Messenger)",
  description: "Full end-to-end integration connecting WhatsApp and Messenger to internal systems via Chatwoot, with AI-powered FAQ automation and real-time webhook processing.",
  details: [
    "Built at Digital Wave, this project integrates the open-source CRM Chatwoot with WhatsApp and Messenger, connecting them to internal business systems.",
    "Supports text, image, and voice message formats across both channels.",
    "Implemented a custom HMAC-SHA256 webhook verifier for secure and validated event handling.",
    "Designed inventory metadata sync and document-ingestion pipelines powering an AI FAQ agent built with LangChain, pgvector, and Cohere Embeddings."
  ],
  highlights: [
    "Full end-to-end WhatsApp & Messenger integration via Chatwoot",
    "Custom HMAC-SHA256 webhook verifier for secure event validation",
    "Inventory metadata sync pipeline for real-time data accuracy",
    "Document-ingestion pipeline for AI FAQ agent knowledge base",
    "Multi-format support: text, image, and voice messages",
    "RAG-powered FAQ agent using pgvector and Cohere Embeddings"
  ],
  tags: ["Node.js", "NestJS", "n8n", "REST APIs", "Webhooks", "Shopify API", "PostgreSQL", "pgvector", "LangChain", "RAG"],
  imageUrl: chatwootImg,
  demoUrl: "https://digital-wave.app/"
},
  {
    slug: "aquaculture-system",
    title: "Aquaculture System",
    description:
      "Multi-tenant SaaS platform for fish farm management covering Inventory, IoT sensor integrations, and AI-powered fish disease detection.",
    details: [
      "Graduation project architected as a multi-tenant SaaS with NestJS/Fastify, PostgreSQL, and MikroORM, following Hexagonal Architecture and DDD principles.",
      "Built IoT sensor integrations for real farm deployment, monitoring water quality, feed, and fish health.",
      "Integrated a fine-tuned AI model via REST API for fish disease detection.",
      "Deployed via Docker, Cloudflare Workers (SSL/TLS), and custom domain at fishfarm360.site.",
    ],
    highlights: [
      "Multi-tenant SaaS with Hexagonal Architecture and Domain-Driven Design",
      "IoT modules for real-time water quality, feed, and fish health monitoring",
      "Fine-tuned AI model integration for fish disease detection",
      "Production deployment with Docker, Cloudflare Workers, and custom SSL/TLS",
    ],
    tags: ["NestJS", "Fastify", "PostgreSQL", "MikroORM", "IoT", "AI", "Docker", "Cloudflare"],
    imageUrl: corpcommentImg,
    demoUrl: "https://fishfarm360.site",
  },
  {
  slug: "school-admission",
  title: "School Admission",
  description:
    "A production-ready school admission platform where I transformed a professionally designed UI/UX into a fully functional Next.js application with Supabase integration and additional features.",

  details: [
    "Collaborated with a Senior Project Manager to translate a professional UI/UX design into a responsive, production-ready Next.js application.",
    "Integrated Supabase for backend services, including data management and authentication where required.",
    "Extended the original design by implementing additional features, improving user experience, responsiveness, and overall functionality.",
  ],

  highlights: [
    "Converted UI/UX into production code",
    "Supabase backend integration",
    "Feature enhancements beyond original design",
    "Responsive and optimized performance",
  ],

  tags: ["Next.js", "Supabase"],
  imageUrl: schoolAdmissionImg,
  demoUrl: "https://school-admition.vercel.app/",
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
    demoUrl: "https://www.ajw-ad.net/",
    // videoUrl: "",
    githubUrl: "https://github.com/fouadkhalied/RealtyHub",
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
];

export const skillsData = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "REST APIs",
  "Webhooks",
  "Docker",
  "CI/CD",
  "React",
  "Next.js",
  "RAG Systems",
  "AI Agents",
  "pgvector",
  "n8n",
  "Shopify API",
  "Paymob",
  "OAuth2",
  "HMAC Authentication",
  "Clean Architecture",
  "DDD",
  "Nginx",
  "Linux",
  "Git",
  "GitHub Actions",
  "ASP.NET",
] as const;