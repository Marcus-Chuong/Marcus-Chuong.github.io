export default function About() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="max-w-3xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Who I Am</h2>
          <p className="mb-4">
            Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. I specialize in [Your Specialties],
            with [X years] of experience in the field.
          </p>
          <p>
            When I'm not working, you can find me [Your Hobbies/Interests]. I'm passionate about
            [Something you're passionate about] and always looking to learn and grow in my craft.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">TypeScript</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">React</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">Next.js</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">TailwindCSS</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">Node.js</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">GraphQL</div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-medium">Senior Developer - Company Name</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">January 2022 - Present</p>
              <p>Responsible for developing and maintaining web applications using modern frontend technologies.</p>
            </div>
            
            <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-medium">Web Developer - Previous Company</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">March 2019 - December 2021</p>
              <p>Worked on various client projects, implementing responsive designs and interactive features.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
            <h3 className="text-xl font-medium">Bachelor's in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">University Name, 2015 - 2019</p>
            <p>Studied computer science with a focus on software development and web technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
