export default function Blog() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-beige text-sage-dark">
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Blog
        </h1>
        <p className="text-lg mb-12">
          Thoughts, tutorials, and insights about web development and design.
        </p>
        
        <div className="space-y-8">
          {/* Blog posts will go here */}
          <div className="border-b border-sage pb-8">
            <h2 className="text-2xl font-bold mb-2">Getting Started with Next.js and TailwindCSS</h2>
            <p className="text-sage mb-4">June 20, 2025 • 5 min read</p>
            <p>A beginner's guide to setting up a Next.js project with TailwindCSS for rapid development.</p>
            <a href="#" className="inline-block mt-4 text-sage-light hover:text-sage-dark transition-colors duration-300">Read more →</a>
          </div>
          
          <div className="border-b border-sage pb-8">
            <h2 className="text-2xl font-bold mb-2">Creating Smooth Animations with Framer Motion</h2>
            <p className="text-sage mb-4">June 15, 2025 • 4 min read</p>
            <p>Learn how to add beautiful animations to your React applications using Framer Motion.</p>
            <a href="#" className="inline-block mt-4 text-sage-light hover:text-sage-dark transition-colors duration-300">Read more →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
