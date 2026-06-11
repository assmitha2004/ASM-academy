/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  darkMode: 'class',

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },

    extend: {
      colors: {
        obsidian: {
          50: '#f6f6f7',
          900: '#0a0a0b',
          950: '#050506',
        },

        gold: {
          50: '#fdf9ed',
          100: '#faf0ce',
          200: '#f5df9c',
          300: '#eec660',
          400: '#e8b13a',
          500: '#d49520',
          600: '#b67518',
          700: '#925817',
          800: '#79461a',
          900: '#673a1b',
          950: '#3b1f0c',
        },

        ivory: '#f5f1e8',
        charcoal: '#141416',
      },

      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      fontSize: {
        hero: [
          'clamp(2.8rem, 8vw, 7rem)',
          {
            lineHeight: '1',
            letterSpacing: '-0.04em',
          },
        ],

        display: [
          'clamp(2rem, 5vw, 4.5rem)',
          {
            lineHeight: '1.08',
            letterSpacing: '-0.03em',
          },
        ],
      },

      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #eec660 0%, #d49520 50%, #925817 100%)',

        'dark-radial':
          'radial-gradient(ellipse at center, #141416 0%, #050506 100%)',

        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },

      backdropBlur: {
        xs: '2px',
      },

      animation: {
        shimmer: 'shimmer 2.5s linear infinite',

        float: 'float 6s ease-in-out infinite',

        glow: 'glow 2.5s ease-in-out infinite alternate',

        'fade-up': 'fadeUp 0.8s ease-out forwards',

        marquee: 'marquee 30s linear infinite',
      },

      keyframes: {
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },

          '100%': {
            backgroundPosition: '200% 0',
          },
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },

          '50%': {
            transform: 'translateY(-8px)',
          },
        },

        glow: {
          '0%': {
            boxShadow: '0 0 16px rgba(212, 149, 32, 0.22)',
          },

          '100%': {
            boxShadow: '0 0 40px rgba(212, 149, 32, 0.38)',
          },
        },

        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(24px)',
          },

          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },

        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },

          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },

      boxShadow: {
        'gold-glow':
          '0 0 30px rgba(212, 149, 32, 0.22)',

        'gold-glow-lg':
          '0 0 60px rgba(212, 149, 32, 0.28)',

        'inner-gold':
          'inset 0 1px 0 0 rgba(238, 198, 96, 0.15)',
      },

      screens: {
        xs: '480px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};