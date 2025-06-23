"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path
      ? "text-blue-600 dark:text-blue-400 font-medium"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";
  };

  return (
    <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
      <Link href="/" className="text-xl font-bold">My Website</Link>
      
      <div className="flex space-x-6">
        <Link href="/" className={`${isActive('/')} transition-colors`}>
          Home
        </Link>
        <Link href="/projects" className={`${isActive('/projects')} transition-colors`}>
          Projects
        </Link>
        <Link href="/about" className={`${isActive('/about')} transition-colors`}>
          About
        </Link>
        <Link href="/contact" className={`${isActive('/contact')} transition-colors`}>
          Contact
        </Link>
        <Link href="/what-im-doing" className={`${isActive('/what-im-doing')} transition-colors`}>
          What I'm Doing
        </Link>
      </div>
    </nav>
  );
}
