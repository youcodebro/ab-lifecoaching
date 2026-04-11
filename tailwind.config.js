/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:    '#131210',
        ink2:   '#3a3835',
        muted:  '#8a8680',
        paper:  '#f8f7f4',
        paper2: '#f2f0ec',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Montserrat', '"Avenir LT Pro"', 'Avenir', 'Futura', 'sans-serif'],
      },
      fontSize: {
        'eyebrow': ['11px', { letterSpacing: '0.28em' }],
      },
      keyframes: {
        fadeUp:        { from: { opacity: 0, transform: 'translateY(28px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:        { from: { opacity: 0 },  to: { opacity: 1 } },
        scrollPulse:   { '0%,100%': { opacity: 0.3 }, '50%': { opacity: 1 } },
        marquee:       { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        loaderBar:     { to: { width: '100%' } },
        revealUp:      { from: { opacity: 0, transform: 'translateY(34px)' }, to: { opacity: 1, transform: 'none' } },
        revealRight:   { from: { opacity: 0, transform: 'translateX(40px)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: {
        'fade-up-1':   'fadeUp 0.9s 0.3s forwards',
        'fade-up-2':   'fadeUp 1s 0.5s forwards',
        'fade-up-3':   'fadeUp 1s 0.7s forwards',
        'fade-up-4':   'fadeUp 1s 0.9s forwards',
        'fade-up-5':   'fadeUp 1s 1.4s forwards',
        'fade-up-6':   'fadeUp 1s 1.5s forwards',
        'scroll-pulse':'scrollPulse 2.2s ease-in-out infinite',
        'marquee':     'marquee 34s linear infinite',
        'loader-bar':  'loaderBar 1.4s 1s cubic-bezier(.4,0,.2,1) forwards',
        'loader-logo': 'fadeIn 0.8s 0.2s forwards',
        'loader-tag':  'fadeIn 0.8s 0.6s forwards',
        'loader-track':'fadeIn 0.5s 0.9s forwards',
      },
    },
  },
  plugins: [],
};
