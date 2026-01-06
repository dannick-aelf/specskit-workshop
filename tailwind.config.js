/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // ChatGPT Dark Mode Color Palette
        primary: {
          DEFAULT: '#10A37F',
          hover: '#0D8A6D',
          light: '#5EEAD4',
          bright: '#00D9FF',
        },
        background: {
          DEFAULT: '#212121',
          surface: '#2D2D2D',
          elevated: '#3A3A3A',
          dark: '#1A1A1A',
        },
        text: {
          primary: '#ECECEC',
          secondary: '#A0A0A0',
          tertiary: '#6B6B6B',
        },
        border: {
          DEFAULT: '#404040',
          light: 'rgba(255, 255, 255, 0.1)',
        },
        semantic: {
          success: '#10A37F',
          warning: '#F5A623',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['13px', { lineHeight: '1.5' }],
        base: ['14px', { lineHeight: '1.5' }],
        lg: ['16px', { lineHeight: '1.5' }],
        xl: ['18px', { lineHeight: '1.5' }],
        '2xl': ['20px', { lineHeight: '1.4' }],
        '3xl': ['24px', { lineHeight: '1.3' }],
      },
      borderRadius: {
        button: '8px',
        card: '12px',
        input: '8px',
        modal: '16px',
        badge: '12px',
      },
      spacing: {
        mobile: '16px',
        tablet: '20px',
        desktop: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
        md: '0 4px 12px rgba(0, 0, 0, 0.4)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
        button: '0 2px 8px rgba(16, 163, 127, 0.25)',
        card: '0 1px 3px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        primary: 'cubic-bezier(0.4, 0, 0.2, 1)',
        exit: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
}

