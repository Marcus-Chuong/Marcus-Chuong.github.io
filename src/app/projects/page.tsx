export default function Projects() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <p className="mb-4">Here are some of the projects I've been working on:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-2">Project One</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of project one and what technologies were used.</p>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded text-xs">React</span>
            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded text-xs">TypeScript</span>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-2">Project Two</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of project two and what technologies were used.</p>
          <div className="flex gap-2">
            <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 px-2 py-1 rounded text-xs">Next.js</span>
            <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 px-2 py-1 rounded text-xs">TailwindCSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
