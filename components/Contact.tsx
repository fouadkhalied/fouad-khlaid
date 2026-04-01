"use client";

import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent font-mono text-lg">06.</span> Contact
        </h2>
        
        <div className="bg-neutral-900/50 border border-border p-8 rounded-lg mb-8">
          <p className="text-xl text-foreground mb-6">
            Open to remote backend internships and freelance contracts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="mailto:foukha49@gmail.com" 
              className="flex items-center gap-3 text-secondary hover:text-accent transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm font-mono">foukha49@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/fouad-khalid-784296365/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm font-mono">linkedin.com/in/fouad-khalid</span>
            </a>
            <a 
              href="https://github.com/fouadkhalied" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-secondary hover:text-accent transition-colors"
            >
              <Github size={20} />
              <span className="text-sm font-mono">github.com/fouadkhalied</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
