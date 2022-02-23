module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: {
          100: '#45a3db',
        },
        secondary: {
          100: '#606061',
        },
        tertiary: {
          100: '#57A773',
        },
        success: {
          100: '#2ecc71',
        },
        error: {
          100: '#e74c3c',
        },
        warning: {
          100: '#f39c12',
        },
        neutral: {
          100: '#dfe0dd',
          200: '#636161',
        },
        black: '#1C2B36',
        white: '#FFFFFF',
      },
      boxShadow: {
        'primary-100': '0px 0px 5px #45a3db',
        'error-100': '0px 0px 5px #e74c3c',
      }
    },
  },
  plugins: [],
};
