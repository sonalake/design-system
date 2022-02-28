const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    extend: {
      animation: {
        'spin-1.5': 'spin 1.5s linear infinite',
      },
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
      },
      backgroundImage: {
        checkbox: `url('data:image/svg+xml,%3Csvg width="16" height="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="%2345a3db" d="m15,-1l-14,0c-1.11,0 -2,0.9 -2,2l0,14c0,1.1 0.89,2 2,2l14,0c1.11,0 2,-0.9 2,-2l0,-14c0,-1.1 -0.89,-2 -2,-2zm-9,14l-5,-5l1.41,-1.41l3.59,3.58l7.59,-7.59l1.41,1.42l-9,9z"/%3E%3C/svg%3E')`,
        'checkbox-invalid': `url('data:image/svg+xml,%3Csvg width="16" height="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="%23e74c3c" d="m15,-1l-14,0c-1.11,0 -2,0.9 -2,2l0,14c0,1.1 0.89,2 2,2l14,0c1.11,0 2,-0.9 2,-2l0,-14c0,-1.1 -0.89,-2 -2,-2zm-9,14l-5,-5l1.41,-1.41l3.59,3.58l7.59,-7.59l1.41,1.42l-9,9z"/%3E%3C/svg%3E')`,
        'checkbox-indeterminate': `url('data:image/svg+xml,%3Csvg width="16" height="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="%2345a3db" d="m15,-1l-14,0c-1.1,0 -2,0.9 -2,2l0,14c0,1.1 0.9,2 2,2l14,0c1.1,0 2,-0.9 2,-2l0,-14c0,-1.1 -0.9,-2 -2,-2zm-2,10l-10,0l0,-2l10,0l0,2z"/%3E%3C/svg%3E')`,
        'checkbox-indeterminate-invalid': `url('data:image/svg+xml,%3Csvg width="16" height="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="%23e74c3c" d="m15,-1l-14,0c-1.1,0 -2,0.9 -2,2l0,14c0,1.1 0.9,2 2,2l14,0c1.1,0 2,-0.9 2,-2l0,-14c0,-1.1 -0.9,-2 -2,-2zm-2,10l-10,0l0,-2l10,0l0,2z"/%3E%3C/svg%3E')`,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked', 'indeterminate'],
      backgroundImage: ['checked', 'indeterminate'],
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('indeterminate', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.${e(`indeterminate${separator}${className}`)}:indeterminate`
        );
      });
    }),
  ],
};
