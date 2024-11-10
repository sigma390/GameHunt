/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'glow-blue': '0 0 10px rgba(59, 130, 246, 0.8)',
        'glow-red': '0 0 20px rgba(255, 0, 0, 0.8)',
        'glow-green': '0 0 10px rgba(34, 197, 94, 0.8)',
        'glow-yellow': '0 0 10px rgba(234, 179, 8, 0.8)',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
