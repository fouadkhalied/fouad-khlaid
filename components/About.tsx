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
            Backend Developer specializing in Node.js, NestJS, and PostgreSQL. 
            CS student at Shorouk Academy, graduating July 2026. 
            I've shipped 3 production systems across fintech, aquaculture, and real estate — 
            focusing on Clean Architecture, scalable APIs, and real business impact.
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
