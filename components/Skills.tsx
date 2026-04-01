"use client";

import { motion } from 'motion/react';

export default function Skills() {
  const skillGroups = [
    {
      name: "Languages",
      skills: ["JavaScript (Node.js)", "TypeScript", "Python", "Go", "C++", "Java"]
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"]
    },
    {
      name: "Backend & APIs",
      skills: ["Express.js", "NestJS", "REST APIs", "MikroORM", "Drizzle ORM", "JWT", "OAuth2.0", "Paymob", "GraphQL", "Swagger"]
    },
    {
      name: "Tools & Infrastructure",
      skills: ["Docker", "Nginx", "Git", "Linux", "MinIO", "NATS"]
    }
  ];

  return (
    <section id="skills" className="py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent font-mono text-lg">03.</span> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm bg-neutral-900 border border-border rounded-full hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
