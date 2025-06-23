export default function Resume() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-beige text-sage-dark">
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Resume
        </h1>
        <p className="text-sage text-lg mb-6">View my experience or download a copy for your records.</p>
          <div className="mb-12">
          <a
            href="/documents/Resume - Marcus Chuong.pdf" 
            download="Resume - Marcus Chuong.pdf"
            className="inline-flex items-center px-6 py-3 bg-sage-dark text-beige rounded-lg hover:bg-sage transition-colors duration-300 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Download Resume
          </a>
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">Senior Developer</h3>
              <p className="text-sage mb-2">Company Name • 2022 - Present</p>
              <p>Leading development of web applications using modern frontend technologies.</p>
              <ul className="list-disc list-inside mt-2 text-sage">
                <li>Implemented responsive designs and interactive features</li>
                <li>Optimized performance and user experience</li>
                <li>Mentored junior developers</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">Web Developer</h3>
              <p className="text-sage mb-2">Previous Company • 2019 - 2022</p>
              <p>Worked on various client projects implementing responsive designs.</p>
              <ul className="list-disc list-inside mt-2 text-sage">
                <li>Built modern responsive interfaces</li>
                <li>Collaborated with design and product teams</li>
                <li>Integrated third-party APIs and services</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Education</h2>
          <div className="border-l-4 border-sage pl-4">
            <h3 className="text-xl font-medium">Bachelor of Computer Science</h3>
            <p className="text-sage mb-2">University Name • 2015 - 2019</p>
            <p>Specialized in Software Engineering with a minor in Design.</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">React</span>
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">TailwindCSS</span>
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">Git</span>
            <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full">UI/UX</span>
          </div>
        </section>
      </div>
    </div>
  );
}
