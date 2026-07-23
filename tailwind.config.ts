import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3.5rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'var(--color-canvas)',
          raised: 'var(--color-canvas-raised)',
          muted: 'var(--color-canvas-muted)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          raised: 'var(--color-ink-raised)',
          muted: 'var(--color-ink-muted)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          inverse: 'var(--color-text-inverse)',
          'inverse-muted': 'var(--color-text-inverse-muted)',
        },
        navy: {
          DEFAULT: 'var(--color-navy)',
          tint: 'var(--color-navy-tint)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          soft: 'var(--color-accent-soft)',
          ink: 'var(--color-accent-on-ink)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        focus: 'var(--color-focus)',
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
          ink: 'var(--color-border-ink)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        nav: ['var(--font-nav)'],
      },
      fontSize: {
        // Weights bumped to 700 for the Manrope/sans display face (a
        // grotesque sans reads thin at the old serif-era 400 weight) —
        // display-sm is left untouched since it's the Home hero heading's
        // size and that heading was explicitly kept as-is.
        'display-xl': ['clamp(2.75rem, 5vw + 1rem, 5.5rem)', { lineHeight: '1.02', fontWeight: '700' }],
        'display-lg': ['clamp(2.25rem, 3.5vw + 1rem, 4rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'display-md': ['clamp(1.875rem, 2.5vw + 1rem, 2.75rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem, 1.5vw + 1rem, 2rem)', { lineHeight: '1.15', fontWeight: '450' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        eyebrow: ['0.875rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.14em' }],
        'data-lg': ['3.75rem', { lineHeight: '1', fontWeight: '700' }],
        'data-md': ['1.5rem', { lineHeight: '1.1', fontWeight: '500' }],
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
      },
      maxWidth: {
        container: 'var(--container-max, 1280px)',
        measure: '680px',
      },
      transitionTimingFunction: {
        institutional: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
