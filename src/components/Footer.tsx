"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-beige dark:bg-sage-dark border-t border-sage">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link 
              href="/" 
              className="font-bold text-xl text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300"
            >
              Marcus Chuong
            </Link>
            <p className="mt-2 text-sage-dark dark:text-beige">
              Developer & Designer
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sage-light font-medium mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/projects" 
                    className="text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sage-light font-medium mb-2">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/contact" 
                    className="text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300"
                  >
                    Get In Touch
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/what-im-doing" 
                    className="text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300"
                  >
                    What I'm Doing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-sage text-center">
          <p className="text-beige dark:text-beige hover:text-sage-dark dark:hover:text-sage-dark transition-colors duration-300">
            © {new Date().getFullYear()} Marcus Chuong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
