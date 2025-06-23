"use client";

import { motion } from 'framer-motion';

export default function StatusIndicator({ status = "Available" }) {
  return (
    <div className="flex flex-col h-full p-5">
      <h3 className="text-xl font-bold mb-4 text-sage-dark">Now</h3>
      <div className="flex items-start mb-4">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-3 h-3 bg-sage-light rounded-full mr-2 mt-1.5"
        ></motion.div>
        <div>
          <p className="text-sage-dark font-medium">Currently working fulltime</p>
          <p className="text-sage text-sm mt-1">Working on a Next.js portfolio website with beautiful animations and responsive design.</p>
        </div>
      </div>
      
      <p className="text-sage text-xs mt-auto">Updated 5 minutes ago</p>
    </div>
  );
}
