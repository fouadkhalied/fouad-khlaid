"use client";

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileDown, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Backend Developer — Node.js, NestJS & PostgreSQL. 3 production systems in fintech, aquaculture & real estate.';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const heroStack = ["Node.js", "NestJS", "PostgreSQL", "Docker", "Redis", "TypeScript"];

  return (
    <section className="py-20 flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-accent font-mono text-sm mb-4">
          <Terminal size={16} />
          <span>whoami</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter">
          Fouad Khalid
        </h1>
        <div className="min-h-[4rem] md:min-h-[3rem] mb-6">
          <p className="text-secondary text-lg md:text-xl leading-relaxed font-mono">
            {text}
            <span className="animate-pulse inline-block w-2 h-5 bg-accent ml-1 align-middle" />
          </p>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-mono text-secondary/80">
          {heroStack.map((tech, idx) => (
            <span key={tech} className="flex items-center gap-2">
              {tech}
              {idx < heroStack.length - 1 && <span className="text-accent/40">·</span>}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a 
          href="https://github.com/fouadkhalied" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-border-hover transition-colors text-sm font-medium"
        >
          <Github size={18} />
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/fouad-khalid" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-border-hover transition-colors text-sm font-medium"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a 
          href="mailto:foukha49@gmail.com" 
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-border-hover transition-colors text-sm font-medium"
        >
          <Mail size={18} />
          Email
        </a>
        <a 
          href="/fouad-khalid-cv.pdf" 
          download
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-bold"
        >
          <FileDown size={18} />
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
