/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FB',
          100: '#C6DEF6',
          200: '#93C0ED',
          300: '#5F9DE3',
          400: '#2C74B3', // primary color
          500: '#1E5A8C',
          600: '#144272', // secondary color
          700: '#0D2E4D',
          800: '#0A2647', // dark color
          900: '#051324',
        },
        accent: {
          50: '#E8F8F6',
          100: '#C7EEE9',
          200: '#8FD9D0',
          300: '#57C5B6', // accent color
          400: '#3AA99A',
          500: '#2D8C7F',
          600: '#236E65',
          700: '#19514A',
          800: '#103330',
          900: '#081A18',
        },
        success: {
          400: '#4ADE80', 
          500: '#22C55E'
        },
        warning: {
          400: '#FACC15',
          500: '#EAB308'
        },
        error: {
          400: '#F87171',
          500: '#EF4444'
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};