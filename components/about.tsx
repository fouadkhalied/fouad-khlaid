"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <div className="space-y-4">
        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">Who I am</h3>
          <p className="text-lg text-gray-800 dark:text-white/80">
            I am a <span className="font-medium text-indigo-600 dark:text-indigo-400">Full-Stack Software</span> with a deep passion for building intelligent SaaS platforms, scalable backend integrations, and AI-driven automation workflows that solve complex engineering challenges.
          </p>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">My Engineering Approach</h3>
          <p className="text-lg text-gray-800 dark:text-white/80">
            I believe that great software is built at the intersection of robust architecture and cutting-edge AI. My focus is on writing clean, maintainable code, architecting resilient CI/CD pipelines, and integrating Large Language Models (LLMs) securely into production environments.
          </p>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
  <h3 className="mb-2 text-xl font-semibold">What I Build</h3>
  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-800 dark:text-white/80">
    <li><span className="font-medium">Backend Services & APIs:</span> Scalable REST APIs, webhook systems, third-party integrations, and production deployments using Node.js, NestJS, and PostgreSQL.</li>
    <li><span className="font-medium">AI-Powered Features:</span> RAG pipelines, document-ingestion systems, and AI FAQ agents using LangChain, pgvector, and Cohere Embeddings.</li>
    <li><span className="font-medium">SaaS & Integrations:</span> Multi-tenant platforms, RBAC systems, billing engines, and channel integrations (WhatsApp, Messenger, Shopify) from design to deployment.</li>
  </ul>
</article>

<article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
  <h3 className="mb-2 text-xl font-semibold">Tech Stack & Tools</h3>
  <p className="text-lg leading-relaxed text-gray-800 dark:text-white/80">
    <span className="font-medium">Languages & Frameworks:</span> TypeScript, JavaScript, C#, Node.js, NestJS, Express.js, ASP.NET, React, Next.js<br />
    <span className="font-medium">AI & Integrations:</span> LangChain, RAG, pgvector, Cohere Embeddings, n8n, Shopify API, Paymob<br />
    <span className="font-medium">Databases & DevOps:</span> PostgreSQL, MongoDB, Redis, Docker, Nginx, GitHub Actions, Linux
  </p>
</article>
      </div>
    </motion.section>
  );
}
