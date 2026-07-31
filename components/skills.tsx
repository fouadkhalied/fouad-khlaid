"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Bot, Code2, Database, Wrench } from "lucide-react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const skillsByCategory = [
  {
    title: "AI & Automation",
    description: "Building intelligent agents and automated workflows.",
    icon: Bot,
    skills: [
      "AI Agents",
      "RAG Systems",
      "LangChain",
      "Workflow Automation",
      "Webhooks",
      "APIs",
    ],
  },
  {
    title: "Frontend",
    description: "Crafting responsive and scalable interfaces.",
    icon: Code2,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & Data",
    description: "Designing APIs, services, and data-driven systems.",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redux",
      "Vector Databases",
      "Odoo",
    ],
  },
  {
    title: "Tools & Delivery",
    description: "Shipping reliable products with modern tooling.",
    icon: Wrench,
    skills: ["Git", "CI/CD", "DevOps", "System Design"],
  },
] as const;

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-600 dark:text-white/70 sm:text-base">
        Technologies I use to build AI-powered automations and production-ready
        web applications.
      </p>

      <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {skillsByCategory.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.title}
              className="group rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white transition duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 dark:bg-white dark:text-black">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold transition duration-300 group-hover:translate-x-0.5">
                  {group.title}
                </h3>
              </div>

              <p className="mb-4 text-sm text-gray-600 transition duration-300 group-hover:text-gray-800 dark:text-white/70 dark:group-hover:text-white/90">
                {group.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-black/10 bg-gray-100 px-3 py-1.5 text-sm text-gray-800 transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-gray-200 dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:group-hover:bg-white/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-gray-500 dark:text-white/60">
        {skillsData.length} skills across AI, full-stack engineering, and
        delivery.
      </p>
    </section>
  );
}
