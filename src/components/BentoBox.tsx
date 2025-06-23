"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoBoxProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  href?: string;
  external?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function BentoBox({ 
  children, 
  className = "", 
  delay = 0,
  href,
  external = false,
  direction = 'up'
}: BentoBoxProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 20, x: 0 };
      case 'down': return { y: -20, x: 0 };
      case 'left': return { y: 0, x: 20 };
      case 'right': return { y: 0, x: -20 };
      default: return { y: 20, x: 0 };
    }
  };
  const content = (
    <motion.div
      initial={{ opacity: 0, ...getDirectionOffset() }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-beige rounded-xl border border-sage/20 overflow-hidden flex flex-col shadow-md hover:shadow-lg transition-all h-full ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    ) : (
      <a href={href} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}
