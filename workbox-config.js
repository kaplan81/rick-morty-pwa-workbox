module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{png,jpeg,html,css,json,ico,js}'],
  swDest: 'dist/sw.js',
  swSrc: 'src/sw-custom.js',
  globIgnores: ['scripts/workbox-v4.3.1/**/*']
};
