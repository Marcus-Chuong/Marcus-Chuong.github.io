/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        beige: '#F8EDE3',
        sage: {
          light: '#BDD2B6',
          DEFAULT: '#A2B29F',
          dark: '#798777'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        mono: ['system-ui', 'monospace'],
      },
      backgroundColor: {
        primary: 'var(--color-background)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      textColor: {
        primary: 'var(--color-foreground)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
}
