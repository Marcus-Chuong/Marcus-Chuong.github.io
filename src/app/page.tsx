"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BentoBox from "@/components/BentoBox";
import CurrentTime from "@/components/CurrentTime";
import TechStack from "@/components/TechStack";
import StatusIndicator from "@/components/StatusIndicator";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-beige text-sage-dark">
      <div className="max-w-5xl mx-auto">
        {/* Grid layout for bento boxes */}
        <div className="grid grid-cols-6 gap-4 mt-4">
          {/* Introduction Box - 3 cols wide */}
          <BentoBox className="col-span-6 md:col-span-3 p-6 h-auto" delay={0.1}>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Hello, I'm <span className="text-sage-light">Marcus Chuong</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-sage mb-4">
                Developer & <span className="text-sage-light">Designer</span>
              </h2>
              <p className="text-base md:text-lg">
                I build modern web applications with a focus on user experience,
                performance, and clean code. Welcome to my personal website.
              </p>
            </div>
          </BentoBox>
          
          {/* First row right side - Profile Image Box + Time in a column */}
          <div className="col-span-6 md:col-span-3 grid grid-cols-6 md:grid-cols-3 gap-4 h-full">
            {/* Profile Image Box - 2 cols wide */}
            <BentoBox className="col-span-3 md:col-span-2 aspect-square flex items-center justify-center" delay={0.2}>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-sage-light flex items-center justify-center">
                  <span className="text-6xl">😊</span>
                </div>
              </div>
            </BentoBox>
            
            {/* Current Time Box - 1 col wide */}
            <BentoBox className="col-span-3 md:col-span-1 h-full" delay={0.3}>
              <CurrentTime />
            </BentoBox>
          </div>

          {/* Tech Stack Box - 3 cols wide */}
          <BentoBox className="col-span-6 md:col-span-3" delay={0.4}>
            <TechStack />
          </BentoBox>

          {/* Current Status Box - 3 cols wide */}
          <BentoBox className="col-span-6 md:col-span-3" delay={0.5}>
            <StatusIndicator />
          </BentoBox>
          
          {/* Featured Project Box - 3 cols wide */}
          <BentoBox className="col-span-6 md:col-span-3" delay={0.6}>
            <div className="p-5 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-sage-dark">Featured Project</h3>
              <div className="flex-grow">
                <h4 className="font-medium text-lg mb-2">Personal Portfolio</h4>
                <p className="text-sage">A clean, modern portfolio built with Next.js and TailwindCSS showcasing my work and skills.</p>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="bg-sage-light px-2 py-0.5 rounded text-xs text-sage-dark">Next.js</span>
                <span className="bg-sage-light px-2 py-0.5 rounded text-xs text-sage-dark">TailwindCSS</span>
              </div>
            </div>
          </BentoBox>
          
          {/* Bottom navigation boxes - each 1 col wide */}
          <div className="col-span-6 md:col-span-3 grid grid-cols-3 gap-4">
            {/* Projects Link Box */}
            <BentoBox className="col-span-3 md:col-span-1 group" delay={0.7} href="/projects">
              <div className="p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 text-sage-dark">Projects</h3>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sage">View my work</p>
                  <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sage-dark">→</span>
                  </div>
                </div>
              </div>
            </BentoBox>
            
            {/* Blog Link Box */}
            <BentoBox className="col-span-3 md:col-span-1 group" delay={0.8} href="/blog">
              <div className="p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 text-sage-dark">Blog</h3>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sage">My articles</p>
                  <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sage-dark">→</span>
                  </div>
                </div>
              </div>
            </BentoBox>
            
            {/* Resume Box */}
            <BentoBox className="col-span-3 md:col-span-1 group" delay={0.9} href="/resume">
              <div className="p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 text-sage-dark">Resume</h3>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sage">Experience</p>
                  <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sage-dark">→</span>
                  </div>
                </div>
              </div>
            </BentoBox>
          </div>
        </div>
      </div>
    </div>
  );
}
