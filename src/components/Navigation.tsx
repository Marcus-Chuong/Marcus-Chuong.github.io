"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();    const isActive = (path: string) => {
    return pathname === path
      ? "text-sage-light dark:text-beige font-medium"
      : "text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300";
  };
  return (
    <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
      <Link href="/" className="text-xl font-bold text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300">Marcus Chuong</Link>
      
      <div className="flex space-x-6">        <Link href="/projects" className={`${isActive('/projects')}`}>
          Projects
        </Link>
        <Link href="/about" className={`${isActive('/about')}`}>
          About
        </Link>
        <Link href="/contact" className={`${isActive('/contact')}`}>
          Contact
        </Link>
        <Link href="/what-im-doing" className={`${isActive('/what-im-doing')}`}>
          What I'm Doing
        </Link>
      </div>
    </nav>
  );
}
