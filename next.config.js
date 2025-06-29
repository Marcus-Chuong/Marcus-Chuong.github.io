/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This is important for GitHub Pages
  images: {
    unoptimized: true,
  },
  // If you're deploying to a subdirectory (like username.github.io/repo-name)
  // uncomment and adjust this:
  // basePath: '/website',
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
