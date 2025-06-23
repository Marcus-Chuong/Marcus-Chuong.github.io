export default function Resume() {
  return (    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-beige text-sage-dark">
      <div className="max-w-4xl mx-auto pt-12 pb-24">        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sage mb-1"><span className="font-medium">Contact:</span> marcus.chuong@gmail.com</p>
            <p className="text-sage mb-1"><span className="font-medium">Phone:</span> 416-828-7855</p>
            <p className="text-sage"><span className="font-medium">Location:</span> Toronto, ON, Canada</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-4 mb-2">
              <a href="https://github.com/marcus-chuong" target="_blank" rel="noopener noreferrer" className="text-sage-dark hover:text-sage transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/marcus-chuong" target="_blank" rel="noopener noreferrer" className="text-sage-dark hover:text-sage transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <p className="text-sage"><span className="font-medium">GitHub:</span> marcus-chuong.github.io</p>
          </div>
        </div><h1 className="text-3xl md:text-4xl font-bold mb-3">
          Resume
        </h1>
        <p className="text-sage text-lg mb-6">A determined and motivated Computer Science, Mathematics, and Physics student at the University of Toronto. Equipped with a strong foundation in numerical simulations, data analysis, and software development. Proficient in Python, TypeScript and C++, and passionate in solving real-world issues in a team environment.</p>
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
        </div>          <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Work Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">Technical Lead</h3>
              <p className="text-sage mb-2">Hack04 • March 2023 - Present</p>
              <p>Leading a team to develop web applications.</p>
              <ul className="list-disc list-inside mt-2 text-sage">
                <li>Led a team to design a frontend application using Next.js for a future-themed hackathon, attracting over 300+ applicants in one month.</li>
                <li>Architected a back-end database using PostgreSQL, and user authentication with OAuth to create a secure and responsive web application.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">Machine Learning Researcher</h3>
              <p className="text-sage mb-2">University Of Toronto Machine Learning Team • Nov 2024 - April 2025</p>
              <p>Researching ML techniques for image processing.</p>
              <ul className="list-disc list-inside mt-2 text-sage">
                <li>Trained custom models using MF images using ImageNet, and COCO to improve AI-driven classification accuracy by 30 percent.</li>
                <li>Developed perceptual loss and adversarial loss to improve colorization quality on over 300,000 objects.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">Lead Fullstack Developer</h3>
              <p className="text-sage mb-2">Power Unit Youth Organization • Feb 2022 - Present</p>
              <p>Developing web applications for charity events.</p>
              <ul className="list-disc list-inside mt-2 text-sage">
                <li>Developed a frontend application using React.js for a food festival, attracting 100,000+ attendees and raising $143,000+ for charity.</li>
                <li>Architected a backend database with MongoDB, enabling 700+ vendors to register for the event, achieving $200,000+ in profits.</li>
              </ul>
            </div>
          </div>
        </section>          <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Education</h2>
          <div className="border-l-4 border-sage pl-4">
            <h3 className="text-xl font-medium">BSc. Computer Science, Physics, Mathematics</h3>
            <p className="text-sage mb-2">University of Toronto</p>
            <p>GPA: 4.0/4.0</p>
          </div>
        </section>          <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">TypeScript</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">Python</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">JavaScript</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">C/C++</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">SQL</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">HTML/CSS</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">Excel</span>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Languages</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">English</h3>
              <p className="text-sage">Native Proficiency</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Korean</h3>
              <p className="text-sage">Working Proficiency</p>
            </div>
          </div>
        </section>
          <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Projects</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">N-Body Simulation</h3>
              <p className="text-sage mb-2">C++, OpenGL</p>
              <ul className="list-disc list-inside mt-2 text-sage">
                <li>Designed and implemented the Barnes-Hut recursive algorithm in C++ with OpenGL to render over 10,000 bodies of varying mass in a vacuum.</li>
                <li>Integrated multithreading to parallelize force calculation, significantly improving runtime scaling with multi-core CPUs.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">Ant-Pathing Simulation</h3>
              <p className="text-sage mb-2">C++, TensorFlow</p>
              <ul className="list-disc list-inside mt-2 text-sage">
                <li>Implemented parallelization in C++ with TensorFlow to simulate the growth and learning process of ant colonies.</li>
                <li>Utilized Amdahl's law to reach processing speed up to 96% of the theoretical maximum speed of the 8-core cpu.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">Used Uniform Marketplace</h3>
              <p className="text-sage mb-2">TypeScript, React.js</p>
              <p>Developed a web application using TypeScript and React.js to allow 300+ high school students to sell and reuse old uniforms.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Awards</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">UofTCTF 2025 Top 3 Finalist Award</h3>
              <p className="text-sage mb-2">University of Toronto • Jan 2025</p>
              <p>Collaborated with a team of 5 to achieve third place out of 300+ competitors in the University of Toronto's yearly cybersecurity competition.</p>
            </div>
            
            <div className="border-l-4 border-sage pl-4">
              <h3 className="text-xl font-medium">2024 VEX V5 Robotics National Champion</h3>
              <p className="text-sage mb-2">Team Robotics • May 2024</p>
              <p>Contributed to team 8285J's victory at the 2024 VEX Robotics National Championship, qualifying for the 2024 World Championships.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-sage-dark">Interests</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">Cybersecurity</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">Badminton</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">Music</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">Blogging</span>
            <span className="bg-sage-light text-sage-dark px-4 py-2 rounded-full">Travel</span>
          </div>
        </section>
      </div>
    </div>
  );
}
