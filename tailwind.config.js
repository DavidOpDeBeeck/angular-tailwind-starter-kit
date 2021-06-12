module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
