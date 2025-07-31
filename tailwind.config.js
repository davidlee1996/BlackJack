// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        casino: {
          green: '#0B6623',   // Deep felt green
          table: '#124E1B',   // Darker table tone
          gold: '#FFD700',    // Gold for highlight
        },
      },
      fontFamily: {
        casino: ['"Playfair Display"', 'serif'], // Elegant font for cards
        digital: ['"Courier New"', 'monospace'], // Optional digital-style
      },
    },
  },
  plugins: [],
};
