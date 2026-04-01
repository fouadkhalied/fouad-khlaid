"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectProps {
  key?: string | number;
  title: string;
  badge: string;
  stack: string[];
  stats?: string;
  description: string;
  links: { github?: string; live?: string; docs?: string };
  isComingSoon?: boolean;
}

export function ProjectCard({ title, badge, stack, stats, description, links, isComingSoon }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className={cn(
        "group border border-border rounded-lg overflow-hidden bg-background hover:border-border-hover transition-all duration-300",
        isExpanded ? "ring-1 ring-accent/30" : ""
      )}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => !isComingSoon && setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded mb-2 inline-block">
              {badge}
            </span>
            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>
          {!isComingSoon && (
            <div className="text-secondary group-hover:text-foreground transition-colors">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <span key={tech} className="text-[11px] font-mono text-secondary border border-border px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>

        {stats && (
          <div className="font-mono text-xs text-accent/80 mb-2">
            {stats}
          </div>
        )}

        <p className={cn(
          "text-secondary text-sm leading-relaxed",
          !isExpanded && !isComingSoon && "line-clamp-2"
        )}>
          {description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 flex gap-4">
                {links.github && (
                  <a 
                    href={links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium hover:text-accent transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {links.live && (
                  <a 
                    href={links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {links.docs && (
                  <a 
                    href={links.docs} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} /> Documentation
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Digital Advertising Platform",
      badge: "Live Production · Freelance",
      stack: ["Express.js", "PostgreSQL", "MongoDB", "Docker", "JWT", "OAuth2.0", "Paymob"],
      description: "Freelance project self-hosted on Contabo. Features Paymob payment integration handling SAR 470+ in transactions, and a credit-to-impressions engine (9,000+ impressions, 98 ads, 0.77% CTR). Implements RBAC, admin approval workflows, and broadcast notifications for 257 users. Dual-database architecture (MongoDB + PostgreSQL) with self-hosted MinIO and automated DB backup pipeline. 100% uptime achieved. Full REST API documentation with coordinated ReactJS frontend integration.",
      links: { github: "https://github.com/fouadkhalied", live: "#" }
    },
    {
      title: "Fish Farm Management System",
      badge: "Graduation Project · Lead",
      stack: ["NestJS", "PostgreSQL", "MikroORM", "Redis", "Docker"],
      description: "Graduation project (Team Lead & Solo Backend). Complete aquaculture management system covering tank monitoring, harvests, procurement, sales, and accounting. Features SSE real-time notifications with role-based delivery, feeding-rate calculations, water quality assessments, and growth analytics. Includes a full accounting subsystem with journal entries, balance sheets, and lot traceability. 100+ REST endpoints across 15+ domains with Swagger docs. Built with Clean Architecture (domain entities, value objects, domain services).",
      links: { github: "https://github.com/fouadkhalied", docs: "#" }
    },
    {
      title: "Real Estate & Blog API Platform",
      badge: "Live Production · Team",
      stack: ["Express.js", "PostgreSQL", "Drizzle ORM"],
      description: "Production-ready team project with multi-language support (Arabic/English). Features role-based access control (Admin / User / CustomerService) with approval workflows, JWT authentication, pagination, and search functionality. Full API documentation following layered Clean Architecture.",
      links: { github: "https://github.com/fouadkhalied", live: "#" }
    }
  ];

  return (
    <section id="projects" className="py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent font-mono text-lg">02.</span> Projects
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              title={project.title}
              badge={project.badge}
              stack={project.stack}
              stats={project.stats}
              description={project.description}
              links={project.links}
              isComingSoon={project.isComingSoon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
