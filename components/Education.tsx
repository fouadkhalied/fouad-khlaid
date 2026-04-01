"use client";

import { motion } from 'motion/react';

export default function Education() {
  const education = [
    {
      school: "Shorouk Academy, Cairo",
      degree: "B.Sc. Computer Science",
      period: "Oct 2022 – Jul 2026",
      description: "Focusing on Software Engineering and Backend Systems."
    },
    {
      school: "DEPI Bootcamp",
      degree: "Microsoft Data Engineer Track",
      period: "Jun 2024 – Oct 2024",
      description: "Intensive training on Python, SSIS, SQL, and Azure — with certificate and capstone project."
    }
  ];

  return (
    <section id="education" className="py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent font-mono text-lg">05.</span> Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-6 border-l border-border">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-bold">{edu.school}</h3>
                <span className="text-xs font-mono text-secondary">{edu.period}</span>
              </div>
              <p className="text-accent text-sm font-medium mb-2">{edu.degree}</p>
              <p className="text-secondary text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
