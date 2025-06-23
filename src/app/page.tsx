import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Marcus Chuong</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Developer & Designer
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl">
          I build modern web applications with a focus on user experience,
          performance, and clean code. Welcome to my personal website.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Projects</h3>
            <p className="mb-4">Check out my latest work and personal projects.</p>
            <Link href="/projects" className="text-blue-600 hover:underline">View all projects →</Link>
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">About Me</h3>
            <p className="mb-4">Learn more about my background, skills, and experience.</p>
            <Link href="/about" className="text-blue-600 hover:underline">Read more →</Link>
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">What I'm Doing</h3>
            <p className="mb-4">See what I'm currently working on and learning.</p>
            <Link href="/what-im-doing" className="text-blue-600 hover:underline">See activities →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
