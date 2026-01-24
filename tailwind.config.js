/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-primary)',
          overlayLight: 'var(--bg-overlay-light)',
          overlayMedium: 'var(--bg-overlay-medium)',
          overlayDark: 'var(--bg-overlay-dark)',
          accentPrimary: 'var(--bg-accent-primary)',
          accentSecondary: 'var(--bg-accent-secondary)',
          darkPrimary: 'var(--bg-dark-primary)',
          brand: 'var(--bg-brand)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          overlayGray: 'var(--bg-overlay-gray)',
          lightBlue: 'var(--bg-light-blue)',
          grayLight: 'var(--bg-gray-light)',
          cream: 'var(--bg-cream)',
          lightGray: 'var(--bg-light-gray)',
          white: 'var(--bg-white)',
          whiteTransparent: 'var(--bg-white-transparent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          dark: 'var(--text-dark)',
          accent: 'var(--text-accent)',
          muted: 'var(--text-muted)',
          darkPrimary: 'var(--text-dark-primary)',
          darkSecondary: 'var(--text-dark-secondary)',
          darkMuted: 'var(--text-dark-muted)',
          gray: 'var(--text-gray)',
          medium: 'var(--text-medium)',
          mediumMuted: 'var(--text-medium-muted)',
          white: 'var(--text-white)',
          whiteMuted: 'var(--text-white-muted)',
          whiteSecondary: 'var(--text-white-secondary)',
          whiteTertiary: 'var(--text-white-tertiary)',
        },
        button: {
          background: 'var(--button-bg)',
          text: 'var(--button-text)',
        },
      },
      fontFamily: {
        main: ['var(--font-main)', 'serif'],
        // inter: ['Inter', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseStrong: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        pulseStrong: 'pulseStrong 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
