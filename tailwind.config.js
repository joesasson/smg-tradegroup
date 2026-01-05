/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Cursor-Auto/src/**/*.{js,ts,jsx,tsx}",
    "./cursor-claude/src/**/*.{js,ts,jsx,tsx}",
    "./smg-gemini-chat/smg-website/src/**/*.{js,ts,jsx,tsx}",
    "./smg-gemini-cursor/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cursor-Auto colors
        'navy': {
          700: '#1e293b',
          800: '#0f172a',
          900: '#0f172a',
          950: '#020617',
        },
        'accent-blue': '#3b82f6',
        'accent-blue-dark': '#2563eb',
        'accent-blue-light': '#60a5fa',

        // cursor-claude colors
        'warm-white': '#FBF9F7',
        'deep-navy': '#0A0A0A',
        'terracotta': '#C5A27D',
        'muted-gray': '#6B7280',
        'charcoal': '#374151',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
