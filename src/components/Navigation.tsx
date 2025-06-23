"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
    const isActive = (path: string) => {
    return pathname === path
      ? "text-sage-dark dark:text-beige font-medium"
      : "text-sage dark:text-sage-light hover:text-sage-dark dark:hover:text-beige";
  };
  return (
    <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
      <Link href="/" className="text-xl font-bold hover:text-sage-dark dark:hover:text-beige transition-colors">Marcus Chuong</Link>
      
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
