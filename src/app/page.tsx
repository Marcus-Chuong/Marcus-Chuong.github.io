import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-beige dark:bg-sage-dark text-sage-dark dark:text-beige">
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="text-sage-light">Marcus Chuong</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-sage dark:text-sage-light mb-8">
          Developer & <span className="text-sage-light dark:text-beige">Designer</span>
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl">
          I build modern web applications with a focus on user experience,
          performance, and clean code. Welcome to my personal website.
        </p>
      </div>
    </div>
  );
}
