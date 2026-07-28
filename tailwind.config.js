/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral base palette
        'bg-primary': '#ffffff',
        'bg-secondary': '#fafafa',
        'bg-tertiary': '#f5f5f5',
        'text-primary': '#0a0a0a',
        'text-secondary': '#404040',
        'text-muted': '#737373',
        'border': '#e5e5e5',
        // AWS-themed accent
        'accent': '#FF9900',
        'accent-light': '#ffb454',
        'accent-dark': '#EC7211',
        // Supporting brand colors (used sparingly)
        'aws-dark': '#232F3E',
        'aws-blue': '#146EB4',
        'k8s-blue': '#326CE5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0,0,0.2,1) forwards',
      },
    },
  },
  plugins: [],
}
