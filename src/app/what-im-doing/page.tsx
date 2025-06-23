export default function WhatImDoing() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">What I'm Doing</h1>
      
      <div className="max-w-3xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Building My Personal Website</h3>
              <p className="mb-3">Working on creating a professional portfolio using Next.js and TypeScript.</p>
              <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                In progress
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Learning New Technologies</h3>
              <p className="mb-3">Exploring new frameworks and tools to expand my skill set.</p>
              <div className="flex items-center text-sm text-yellow-600 dark:text-yellow-400">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Ongoing
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Current Reading List</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>"The Pragmatic Programmer" by Andy Hunt and Dave Thomas</li>
            <li>"Clean Code" by Robert C. Martin</li>
            <li>"Designing Data-Intensive Applications" by Martin Kleppmann</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">June 20, 2025</p>
              <p>Started work on a new feature for the website that will showcase my latest projects in a more interactive way.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">June 15, 2025</p>
              <p>Completed the basic structure of my personal website using Next.js and TypeScript.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">June 10, 2025</p>
              <p>Started learning about serverless functions and how to integrate them with Next.js applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
