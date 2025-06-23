"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path
      ? "text-sage-light font-medium"
      : "text-sage-dark hover:text-sage transition-colors duration-300";
  };
  
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-8">
      <Link href="/" className="text-xl font-bold text-sage-dark hover:text-sage transition-colors duration-300">
        Marcus Chuong
      </Link>
      
      <div className="flex space-x-4 md:space-x-8">
        <Link href="/projects" className={`${isActive('/projects')}`}>
          Projects
        </Link>
        <Link href="/blog" className={`${isActive('/blog')}`}>
          Blog
        </Link>
        <Link href="/resume" className={`${isActive('/resume')}`}>
          Resume
        </Link>
        <Link href="/contact" className={`${isActive('/contact')}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
