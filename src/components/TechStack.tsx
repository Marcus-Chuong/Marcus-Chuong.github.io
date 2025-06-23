"use client";

import { motion } from 'framer-motion';

const technologies = [
  { name: 'JavaScript', color: 'text-sage-dark' },
  { name: 'React', color: 'text-sage-dark' },
  { name: 'TypeScript', color: 'text-sage-dark' },
  { name: 'Next.js', color: 'text-sage-dark' },
  { name: 'TailwindCSS', color: 'text-sage-dark' },
  { name: 'Node.js', color: 'text-sage-dark' }
];

export default function TechStack() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="p-5 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-sage-dark">Tech Stack</h3>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2"
      >
        {technologies.map((tech) => (
          <motion.span
            key={tech.name}
            variants={item}
            className={`bg-sage-light px-3 py-1 rounded-full text-sm font-medium ${tech.color} hover:bg-sage hover:text-beige transition-colors duration-300`}
          >
            {tech.name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
