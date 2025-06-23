"use client";

import { motion } from 'framer-motion';

export default function StatusIndicator({ status = "Available" }) {  return (
    <div className="flex flex-col h-full p-8 md:p-10">
      <h3 className="text-2xl font-bold mb-6 text-sage-dark">Now</h3>
      <div className="flex items-start mb-6">
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
          className="w-4 h-4 bg-sage-light rounded-full mr-4 mt-1.5"
        ></motion.div>
        <div>
          <p className="text-sage-dark font-medium text-xl md:text-2xl">Currently working fulltime</p>
          <p className="text-sage text-lg mt-3">Working on a Next.js portfolio website with beautiful animations and responsive design.</p>
        </div>
      </div>
      
      <p className="text-sage text-sm mt-auto">Updated 5 minutes ago</p>
    </div>
  );
}
