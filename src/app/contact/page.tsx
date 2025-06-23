export default function Contact() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      
      <div className="max-w-lg">
        <p className="mb-6">Feel free to reach out to me using the form below or through my social media.</p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Other ways to reach me:</h2>
          <ul className="space-y-2">
            <li>Email: example@email.com</li>
            <li>Twitter: @username</li>
            <li>LinkedIn: linkedin.com/in/username</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
