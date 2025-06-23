import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-beige dark:bg-sage-dark text-sage-dark dark:text-beige">
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-sage-dark to-sage">Marcus Chuong</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-sage dark:text-sage-light mb-8">
          Developer & Designer
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl">
          I build modern web applications with a focus on user experience,
          performance, and clean code. Welcome to my personal website.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="/projects"
            className="px-6 py-3 bg-sage-dark text-beige rounded-lg hover:bg-sage transition-colors"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-sage-light text-sage-dark rounded-lg hover:bg-beige transition-colors"
          >
            Contact Me
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-sage-light dark:bg-sage rounded-lg border border-sage">
            <h3 className="text-xl font-semibold mb-3 text-sage-dark dark:text-beige">Projects</h3>
            <p className="mb-4 text-sage-dark dark:text-beige">Check out my latest work and personal projects.</p>
            <Link href="/projects" className="text-sage-dark dark:text-beige hover:text-beige dark:hover:text-sage-light hover:underline font-medium">View all projects →</Link>
          </div>
          
          <div className="p-6 bg-sage-light dark:bg-sage rounded-lg border border-sage">
            <h3 className="text-xl font-semibold mb-3 text-sage-dark dark:text-beige">About Me</h3>
            <p className="mb-4 text-sage-dark dark:text-beige">Learn more about my background, skills, and experience.</p>
            <Link href="/about" className="text-sage-dark dark:text-beige hover:text-beige dark:hover:text-sage-light hover:underline font-medium">Read more →</Link>
          </div>
          
          <div className="p-6 bg-sage-light dark:bg-sage rounded-lg border border-sage">
            <h3 className="text-xl font-semibold mb-3 text-sage-dark dark:text-beige">What I'm Doing</h3>
            <p className="mb-4 text-sage-dark dark:text-beige">See what I'm currently working on and learning.</p>
            <Link href="/what-im-doing" className="text-sage-dark dark:text-beige hover:text-beige dark:hover:text-sage-light hover:underline font-medium">See activities →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
