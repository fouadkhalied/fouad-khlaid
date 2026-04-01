"use client";

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-accent font-mono text-lg">01.</span> About
        </h2>
        <div className="space-y-6 text-secondary leading-relaxed">
          <p>
            I specialize in Node.js, NestJS, and PostgreSQL, building production 
            systems with Clean Architecture and Domain-Driven Design. CS student 
            at El Shorouk Academy, graduating July 2026. Currently deepening 
            expertise in system internals through Hussein Nasser's backend 
            engineering courses and building a distributed API Gateway project.
          </p>
          
          <div>
            <h3 className="text-foreground font-medium mb-3">Currently learning:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                NestJS internals
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Network Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Database Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                RAG pipelines
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
