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
    <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-beige text-sage-dark">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout for bento boxes */}
        <div className="grid grid-cols-6 gap-6 mt-6">
          {/* Introduction Box - 3 cols wide */}
          <BentoBox className="col-span-6 md:col-span-3 h-auto" delay={0.1}>
            <div className="p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hello, I'm{" "}
                <span className="text-sage-light">Marcus Chuong</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-sage mb-6">
                Developer &{" "}
                <span className="text-sage-light">Designer</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl">
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
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-sage-light flex items-center justify-center">
                  <span className="text-7xl">😊</span>
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
            <div className="p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-sage-dark">
                Featured Project
              </h3>
              <div className="flex-grow">
                <h4 className="font-medium text-xl md:text-2xl mb-4">
                  Personal Portfolio
                </h4>
                <p className="text-sage text-lg">
                  A clean, modern portfolio built with Next.js and TailwindCSS
                  showcasing my work and skills. This project demonstrates
                  responsive design with smooth animations.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-sage-light px-4 py-2 rounded text-base text-sage-dark">
                  Next.js
                </span>
                <span className="bg-sage-light px-4 py-2 rounded text-base text-sage-dark">
                  TailwindCSS
                </span>
                <span className="bg-sage-light px-4 py-2 rounded text-base text-sage-dark">
                  Framer Motion
                </span>
              </div>
            </div>
          </BentoBox>

          {/* Bottom navigation boxes - each 1 col wide */}
          <div className="col-span-6 md:col-span-3 grid grid-cols-3 gap-4">
            {/* Projects Link Box */}
            <BentoBox className="col-span-3 md:col-span-1 group" delay={0.7} href="/projects">
              <div className="p-8 md:p-10 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4 text-sage-dark">Projects</h3>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sage text-lg">View my work</p>
                  <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sage-dark text-lg">→</span>
                  </div>
                </div>
              </div>
            </BentoBox>
            
            {/* Blog Link Box */}
            <BentoBox className="col-span-3 md:col-span-1 group" delay={0.8} href="/blog">
              <div className="p-8 md:p-10 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4 text-sage-dark">Blog</h3>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sage text-lg">My articles</p>
                  <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sage-dark text-lg">→</span>
                  </div>
                </div>
              </div>
            </BentoBox>
            
            {/* Resume Box */}
            <BentoBox className="col-span-3 md:col-span-1 group" delay={0.9} href="/resume">
              <div className="p-8 md:p-10 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-4 text-sage-dark">Resume</h3>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sage text-lg">Experience</p>
                  <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sage-dark text-lg">→</span>
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
