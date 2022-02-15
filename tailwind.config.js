module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#DFE1FB",
          100: "#C4C7F8",
          200: "#848BF0",
          300: "#4954E9",
          400: "#1926D1",
          500: "#121B94",
          600: "#0E1576",
          700: "#0B105B",
          800: "#070B3B",
          900: "#040620",
        },
        secondary: {
          50: "#EDEDED",
          100: "#DEDEDE",
          200: "#BABABA",
          300: "#999999",
          400: "#787878",
          500: "#555555",
          600: "#454545",
          700: "#333333",
          800: "#212121",
          900: "#121212",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        'brand-theme': {
          'primary': '#121B94',
          'primary-focus': '#0B105B',
          'primary-content': '#ffffff',
          'secondary': '#555555',
          'secondary-focus': '#333333',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
};
