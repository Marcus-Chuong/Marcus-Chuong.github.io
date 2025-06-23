"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-beige border-t border-sage">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link 
              href="/" 
              className="font-bold text-xl text-sage-dark hover:text-sage transition-colors duration-300"
            >
              Marcus Chuong
            </Link>
            <p className="mt-2 text-sage">
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
                    className="text-sage-dark hover:text-sage transition-colors duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-sage-dark hover:text-sage transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sage-light font-medium mb-2">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/resume" 
                    className="text-sage-dark hover:text-sage transition-colors duration-300"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-sage-dark hover:text-sage transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-sage text-center">
          <p className="text-sage">
            © {new Date().getFullYear()} Marcus Chuong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

