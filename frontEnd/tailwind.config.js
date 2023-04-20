module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    screens: {
      'xsm': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'laptopG': '1440px',
      '4k': '2560px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
