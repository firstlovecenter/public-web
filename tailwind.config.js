/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionDelay: {
        '300': '300ms',
        '500': '500ms',
      },
      animation: {
        'drift': 'drift 20s ease-in-out infinite',
        'drift-slow': 'drift-slow 25s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'subtle-drift': 'subtle-drift 20s ease-in-out infinite',
        'subtle-drift-slow': 'subtle-drift-slow 25s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-up': 'scale-up 0.5s ease-out',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, 12px)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-12px, -12px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'subtle-drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, 12px)' },
        },
        'subtle-drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-12px, -12px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
