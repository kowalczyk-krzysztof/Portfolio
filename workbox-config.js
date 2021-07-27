module.exports = {
  globDirectory: 'src/',
  globPatterns: ['**/*.{tsx,ts}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'public/sw.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',
      options: {
        // Use a custom cache name.
        cacheName: 'images',
      },
    },
  ],
};
