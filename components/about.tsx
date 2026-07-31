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
            I am a <span className="font-medium text-indigo-600 dark:text-indigo-400">Full-Stack Software & AI Engineer</span> with a deep passion for building intelligent SaaS platforms, scalable backend integrations, and AI-driven automation workflows that solve complex engineering challenges.
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
            <li><span className="font-medium">AI & RAG Systems:</span> Intelligent document processing and semantic search pipelines using LangChain, Vector Databases, and OpenAI/Gemini.</li>
            <li><span className="font-medium">SaaS & Automation Nodes:</span> Core API integrations, heavy-duty webhooks, and scalable infrastructure for low-code automation platforms.</li>
            <li><span className="font-medium">Full-Stack Applications:</span> End-to-end web apps featuring React.js frontends, secure Node.js backends, and complex SQL/NoSQL databases.</li>
            <li><span className="font-medium">DevOps & Infrastructure:</span> System health monitoring, dynamic billing architecture, and load-tested cloud deployments.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">Tech Stack & Tools</h3>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-white/80">
            <span className="font-medium">Languages & Frameworks:</span> TypeScript, Node.js, React.js, Next.js, Express.js<br />
            <span className="font-medium">AI Engineering:</span> LangChain, RAG, Vector Embeddings, LLM Orchestration, Generative AI<br />
            <span className="font-medium">Databases & Infrastructure:</span> PostgreSQL, MySQL, MongoDB, Webhooks, RESTful APIs, CI/CD
          </p>
        </article>
      </div>
    </motion.section>
  );
}
