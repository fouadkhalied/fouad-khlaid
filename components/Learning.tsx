"use client";

import { motion } from 'motion/react';

export default function Learning() {
  const learningItems = [
    "Hussein Nasser — Fundamentals of Network Engineering",
    "Hussein Nasser — Fundamentals of Database Engineering",
    "Hussein Nasser — Fundamentals of Operating Systems",
    "Hussein Nasser — Fundamentals of Backend Engineering",
    "Hussein Nasser — Troubleshooting Backend Applications",
    "IBM RAG and Agentic AI Professional Certificate (Coursera)",
    "LeetCode — 8-week structured DSA plan (31 → interview ready)",
    "Building: Distributed API Gateway project"
  ];

  return (
    <section id="learning" className="py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent font-mono text-lg">04.</span> Currently Learning
        </h2>
        <div className="space-y-4">
          {learningItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform" />
              <p className="text-secondary group-hover:text-foreground transition-colors font-mono text-sm">
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
