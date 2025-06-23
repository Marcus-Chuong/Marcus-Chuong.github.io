"use client";

import { motion } from 'framer-motion';

const technologies = [
  { name: 'JavaScript', color: 'text-sage-dark' },
  { name: 'TypeScript', color: 'text-sage-dark' },
  { name: 'HTML', color: 'text-sage-dark' },
  { name: 'CSS', color: 'text-sage-dark' },
  { name: 'Python', color: 'text-sage-dark' },
  { name: 'C++', color: 'text-sage-dark' },
  { name: 'C', color: 'text-sage-dark' },
  { name: 'Java', color: 'text-sage-dark' },
  { name: 'SQL', color: 'text-sage-dark' }
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
    <div className="p-8 md:p-10 h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-6 text-sage-dark">Languages</h3>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-4"
      >
        {technologies.map((tech) => (
          <motion.span
            key={tech.name}
            variants={item}
            className={`bg-sage-light px-6 py-3 rounded-full text-lg font-medium ${tech.color} hover:bg-sage hover:text-beige transition-colors duration-300`}
          >
            {tech.name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
