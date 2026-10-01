/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#00f5ff',
        purple: '#a855f7',
        green: '#10ffa0',
        orange: '#ff6b35',
        bg: '#020d18',
        bg2: '#041426',
        bg3: '#071e30',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'spin-fast': 'spin 10s linear infinite',
        'blink': 'blink 0.7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'cube': 'rotateCube 8s linear infinite',
      },
      keyframes: {
        'spin-reverse': { from: { transform: 'rotate(360deg)' }, to: { transform: 'rotate(0deg)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        rotateCube: {
          from: { transform: 'rotateX(15deg) rotateY(0deg)' },
          to: { transform: 'rotateX(15deg) rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
