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
          {/* Project cards will go here */}          <a href="https://hack404.dev/" target="_blank" rel="noopener noreferrer" className="block">
            <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Hack404</h2>
              <p className="text-sage mb-4">A website built for one of Canada's largest summer hackathons, Hack404. Built in next.js, HTML, and TailwindCSS</p>
              <div className="flex gap-2">
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">HTML</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">TailwindCSS</span>
              </div>
            </div>
          </a>            <a href="https://github.com/osh3276/vibe-tune" target="_blank" rel="noopener noreferrer" className="block">
              <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold mb-2">VibeTunes</h2>
                <p className="text-sage mb-4">An app that allows users to translate real-time dance movements to music. Built with Typescript, Gemini, Google Lyria and next.js</p>
                <div className="flex gap-2">
                  <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Typescript</span>
                  <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Gemini</span>
                  <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Google Lyria</span>
                  <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">next.js</span>
                </div>
              </div>
            </a>
            <a href="https://github.com/Marcus-Chuong/N-Body-Simulation" target="_blank" rel="noopener noreferrer" className="block">
            <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">N-Body Simulation</h2>
              <p className="text-sage mb-4">A physical simulation of gravitational forces between multiple bodies in space using the Barnes-Hut algorithm for efficient calculations</p>
              <div className="flex gap-2">
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">C++</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">OpenGL</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Multithreading</span>
              </div>
            </div>
          </a>            <a href="https://github.com/ConfusingDuck/Uniform-App" target="_blank" rel="noopener noreferrer" className="block">
              <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold mb-2">Used Uniform Marketplace</h2>
                <p className="text-sage mb-4">A platform for high school students to buy and sell used uniforms, promoting sustainability and reducing waste</p>
                <div className="flex gap-2">
                  <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">React.js</span>
                  <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">MongoDB</span>
                </div>
              </div>
            </a>          <a href="https://github.com/Marcus-Chuong/ant-simulator" target="_blank" rel="noopener noreferrer" className="block">
            <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Ant-Pathing Simulation</h2>
              <p className="text-sage mb-4">A simulation of ant colony behavior and learning with parallelization achieving near-theoretical maximum processing speed</p>
              <div className="flex gap-2">
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">C++</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">TensorFlow</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Parallel Computing</span>
              </div>
            </div>
          </a>          <a href="https://github.com/Marcus-Chuong/I-hate-using-my-mouse" target="_blank" rel="noopener noreferrer" className="block">
            <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Virtual Mouse</h2>
              <p className="text-sage mb-4">Control your computer cursor using hand gestures tracked via Mediapipe's hand-tracking algorithms</p>
              <div className="flex gap-2">
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">OpenCV</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Mediapipe</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Computer Vision</span>
              </div>
            </div>
          </a>          <a href="https://github.com/Marcus-Chuong/Mandelbrot-Set" target="_blank" rel="noopener noreferrer" className="block">
            <div className="border border-sage rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Mandelbrot Set Visualizations</h2>
              <p className="text-sage mb-4">Explores fractals like the Mandelbrot Set, Julia Set, and Mandelbulb with 2D and 3D visualizations</p>
              <div className="flex gap-2">
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Pygame</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Matplotlib</span>
                <span className="bg-sage-light text-sage-dark px-2 py-1 rounded text-xs">Fractals</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
