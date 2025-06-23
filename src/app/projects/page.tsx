export default function Projects() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-beige text-sage-dark">
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          My Projects
        </h1>
        <p className="text-lg mb-12">
          Here are some of the projects I've been working on recently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project cards will go here */}
          <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-2">Personal Portfolio</h2>
            <p className="text-sage mb-4">A modern portfolio website built with Next.js and TailwindCSS.</p>
            <div className="flex gap-2">
              <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Next.js</span>
              <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">TailwindCSS</span>
            </div>
          </div>
          
          <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-2">Project Two</h2>
            <p className="text-sage mb-4">Description of another project with more details.</p>
            <div className="flex gap-2">
              <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">React</span>
              <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
